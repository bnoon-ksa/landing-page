/**
 * Image optimization build script.
 *
 * Reads the image catalog, generates responsive WebP variants at Bootstrap-
 * aligned widths, creates LQIP blur placeholders, and writes the manifest
 * that `<OptimizedImage>` consumes at runtime.
 *
 * Usage:
 *   npx tsx scripts/optimize-images.ts          # skip unchanged images
 *   npx tsx scripts/optimize-images.ts --force   # regenerate everything
 */

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------------------
// We can't use the @/ alias here because tsx resolves from the project root.
// So we import the catalog using a relative path and define types inline.
// ---------------------------------------------------------------------------

interface CatalogEntry {
  readonly name: string;
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly sizes: string;
  readonly alt: string;
  readonly category: string;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

/** Bootstrap-aligned responsive widths to generate. */
const RESPONSIVE_WIDTHS = [576, 768, 992, 1200, 1400, 1920] as const;

/** LQIP settings. */
const LQIP_WIDTH = 20;
const LQIP_BLUR_SIGMA = 5;

/** Concurrency limit for Sharp operations. */
const CONCURRENCY = 4;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUTPUT_DIR = path.join(PUBLIC_DIR, "optimized");
const MANIFEST_PATH = path.join(ROOT, "src", "lib", "image-manifest.ts");

const FORCE = process.argv.includes("--force");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function fileIsStale(src: string, dest: string): boolean {
  if (!fs.existsSync(dest)) return true;
  const srcStat = fs.statSync(src);
  const destStat = fs.statSync(dest);
  return srcStat.mtimeMs > destStat.mtimeMs;
}

/** Chunk an array into groups of `size`. */
function chunk<T>(arr: readonly T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size) as T[]);
  }
  return result;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

// ---------------------------------------------------------------------------
// Core processing
// ---------------------------------------------------------------------------

interface ProcessedEntry {
  name: string;
  src: string;
  width: number;
  height: number;
  sizes: string;
  alt: string;
  category: string;
  blurDataURL: string;
  originalBytes: number;
  totalOutputBytes: number;
  variantsGenerated: number;
}

async function processImage(entry: CatalogEntry): Promise<ProcessedEntry> {
  const srcPath = path.join(PUBLIC_DIR, entry.src.replace(/^\//, ""));

  if (!fs.existsSync(srcPath)) {
    throw new Error(`Source image not found: ${srcPath}`);
  }

  const originalBytes = fs.statSync(srcPath).size;
  const safeName = entry.name;
  let totalOutputBytes = 0;
  let variantsGenerated = 0;

  // Determine which responsive widths to generate (cap at source width)
  const isSvg = entry.src.endsWith(".svg");

  if (!isSvg) {
    const widthsToGenerate = RESPONSIVE_WIDTHS.filter(
      (w) => w <= entry.width
    );

    // Always include the source width if it's not already covered
    if (
      entry.width > 0 &&
      !widthsToGenerate.includes(entry.width as (typeof RESPONSIVE_WIDTHS)[number])
    ) {
      widthsToGenerate.push(entry.width as never);
    }

    // Generate responsive WebP variants
    for (const w of widthsToGenerate) {
      const outFile = path.join(OUTPUT_DIR, `${safeName}-${w}.webp`);

      if (!FORCE && !fileIsStale(srcPath, outFile)) {
        if (fs.existsSync(outFile)) {
          totalOutputBytes += fs.statSync(outFile).size;
          variantsGenerated++;
        }
        continue;
      }

      await sharp(srcPath)
        .resize(w, undefined, { withoutEnlargement: true })
        .webp({ quality: 100 })
        .toFile(outFile);

      totalOutputBytes += fs.statSync(outFile).size;
      variantsGenerated++;
    }
  }

  // Generate LQIP blur placeholder
  let blurDataURL: string;

  if (isSvg) {
    // SVGs don't need LQIP — use empty placeholder
    blurDataURL = "";
  } else {
    const lqipBuffer = await sharp(srcPath)
      .resize(LQIP_WIDTH, undefined, { withoutEnlargement: true })
      .blur(LQIP_BLUR_SIGMA)
      .webp({ quality: 20 })
      .toBuffer();

    blurDataURL = `data:image/webp;base64,${lqipBuffer.toString("base64")}`;
  }

  return {
    name: entry.name,
    src: entry.src,
    width: entry.width,
    height: entry.height,
    sizes: entry.sizes,
    alt: entry.alt,
    category: entry.category,
    blurDataURL,
    originalBytes,
    totalOutputBytes,
    variantsGenerated,
  };
}

// ---------------------------------------------------------------------------
// Manifest generation
// ---------------------------------------------------------------------------

function generateManifest(entries: ProcessedEntry[]): string {
  const lines: string[] = [
    "/**",
    " * AUTO-GENERATED by scripts/optimize-images.ts",
    ` * Generated at: ${new Date().toISOString()}`,
    " *",
    " * Do NOT edit manually. Run `npm run optimize-images` to regenerate.",
    " */",
    "",
    'import type { ImageManifest } from "@/types/image";',
    "",
    "export const IMAGE_MANIFEST: ImageManifest = {",
  ];

  for (const entry of entries) {
    lines.push(`  "${entry.name}": {`);
    lines.push(`    src: "${entry.src}",`);
    lines.push(`    width: ${entry.width},`);
    lines.push(`    height: ${entry.height},`);
    lines.push(`    sizes: "${entry.sizes}",`);
    lines.push(`    alt: ${JSON.stringify(entry.alt)},`);
    lines.push(`    blurDataURL: "${entry.blurDataURL}",`);
    lines.push(`    category: "${entry.category}",`);
    lines.push("  },");
  }

  lines.push("};");
  lines.push("");

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log("\n=== Image Optimization Pipeline ===\n");
  console.log(`Mode: ${FORCE ? "FORCE (regenerate all)" : "incremental"}`);

  // Dynamically import the catalog (uses ts paths so we read it as a file)
  const catalogPath = path.join(ROOT, "src", "config", "image.config.ts");
  const catalogSource = fs.readFileSync(catalogPath, "utf-8");

  // Extract the array from the file — parse the TS source manually
  // by evaluating it in a controlled way via dynamic import
  const { IMAGE_CATALOG } = await import(catalogPath) as {
    IMAGE_CATALOG: readonly CatalogEntry[];
  };

  const catalog = IMAGE_CATALOG.filter(
    (entry) => !entry.src.endsWith(".svg")
  );

  console.log(
    `Catalog: ${IMAGE_CATALOG.length} total entries, ${catalog.length} raster images to process\n`
  );

  // Ensure output directories exist
  ensureDir(OUTPUT_DIR);
  ensureDir(path.dirname(MANIFEST_PATH));

  // Process in batches
  const batches = chunk(catalog, CONCURRENCY);
  const results: ProcessedEntry[] = [];

  let totalOriginalBytes = 0;
  let totalOutputBytes = 0;
  let totalVariants = 0;

  for (const batch of batches) {
    const batchResults = await Promise.all(batch.map(processImage));

    for (const result of batchResults) {
      results.push(result);
      totalOriginalBytes += result.originalBytes;
      totalOutputBytes += result.totalOutputBytes;
      totalVariants += result.variantsGenerated;

      console.log(
        `  [OK] ${result.name} — ${result.variantsGenerated} variants, ` +
          `LQIP ${result.blurDataURL.length > 0 ? `${result.blurDataURL.length} chars` : "skipped (SVG)"}`
      );
    }
  }

  // Include SVG entries in the manifest with empty blurDataURL
  const svgEntries = IMAGE_CATALOG.filter((entry) =>
    entry.src.endsWith(".svg")
  );
  for (const svgEntry of svgEntries) {
    results.push({
      name: svgEntry.name,
      src: svgEntry.src,
      width: svgEntry.width,
      height: svgEntry.height,
      sizes: svgEntry.sizes,
      alt: svgEntry.alt,
      category: svgEntry.category,
      blurDataURL: "",
      originalBytes: 0,
      totalOutputBytes: 0,
      variantsGenerated: 0,
    });
  }

  // Write manifest
  const manifestContent = generateManifest(results);
  fs.writeFileSync(MANIFEST_PATH, manifestContent, "utf-8");
  console.log(`\nManifest written to: ${path.relative(ROOT, MANIFEST_PATH)}`);

  // Summary
  console.log("\n=== Summary ===");
  console.log(`  Images processed: ${catalog.length}`);
  console.log(`  Variants generated: ${totalVariants}`);
  console.log(`  Original total size: ${formatBytes(totalOriginalBytes)}`);
  console.log(`  Output total size: ${formatBytes(totalOutputBytes)}`);

  if (totalOriginalBytes > 0 && totalOutputBytes > 0) {
    const savings = (
      ((totalOriginalBytes - totalOutputBytes) / totalOriginalBytes) *
      100
    ).toFixed(1);
    console.log(`  Size change: ${savings}% reduction`);
  }

  console.log("\nDone!\n");
}

main().catch((error: unknown) => {
  console.error("\nOptimization failed:", error);
  process.exit(1);
});
