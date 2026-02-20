/**
 * Phase 3D-G: Generate WebP variants + LQIP blur data for remaining images.
 * Run: node scripts/generate-phase3-webp.mjs
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync, statSync } from 'fs';
import { join, basename, extname } from 'path';

const ROOT = process.cwd();
const OUT = join(ROOT, '_cdn-upload');
const CDN_BASE = 'https://bnoonsa-bjftd5h4a7bae0ce.z02.azurefd.net/website/optimized';

mkdirSync(OUT, { recursive: true });

/** Images that still need CDN conversion. */
const IMAGES = [
  // Social icons (26x26, tiny — original only)
  {
    key: 'fb-icon',
    src: 'public/images/icons/fb-icon.avif',
    category: 'icon',
    alt: 'Facebook',
    sizes: '24px',
  },
  {
    key: 'linkedin-icon',
    src: 'public/images/icons/linkdin-icon.avif',
    category: 'icon',
    alt: 'LinkedIn',
    sizes: '24px',
  },
  {
    key: 'instagram-icon',
    src: 'public/images/icons/instagram-icon.avif',
    category: 'icon',
    alt: 'Instagram',
    sizes: '24px',
  },
  {
    key: 'x-icon',
    src: 'public/images/icons/x-icon.avif',
    category: 'icon',
    alt: 'X (Twitter)',
    sizes: '24px',
  },

  // Treatment grid images (286x210, small — original only)
  {
    key: 'ivm',
    src: 'public/images/ivm.jpg',
    category: 'service',
    alt: 'IVM treatment at Bnoon',
    sizes: '(max-width: 768px) 50vw, 286px',
  },
  {
    key: 'pgs',
    src: 'public/images/pgs.jpg',
    category: 'service',
    alt: 'PGS screening at Bnoon',
    sizes: '(max-width: 768px) 50vw, 286px',
  },
  {
    key: 'pgd',
    src: 'public/images/pgd.jpg',
    category: 'service',
    alt: 'PGD diagnostic at Bnoon',
    sizes: '(max-width: 768px) 50vw, 286px',
  },
  {
    key: 'sperm-freezing',
    src: 'public/images/sperm-freezing.jpg',
    category: 'service',
    alt: 'Sperm freezing services at Bnoon',
    sizes: '(max-width: 768px) 50vw, 286px',
  },
  {
    key: 'fbgs',
    src: 'public/images/fbgs.jpg',
    category: 'service',
    alt: 'Family Balance Gender Selection at Bnoon',
    sizes: '(max-width: 768px) 50vw, 286px',
  },
  {
    key: 'ovulation-induction',
    src: 'public/images/ovulation-induction.jpg',
    category: 'service',
    alt: 'Ovulation induction at Bnoon',
    sizes: '(max-width: 768px) 50vw, 286px',
  },
  {
    key: 'intrauterine-insemination',
    src: 'public/images/intrauterine-insemination.jpg',
    category: 'service',
    alt: 'Intrauterine insemination at Bnoon',
    sizes: '(max-width: 768px) 50vw, 286px',
  },
  {
    key: 'recurrent-miscarriage',
    src: 'public/images/recurrent-miscarriage.jpg',
    category: 'service',
    alt: 'Recurrent miscarriage support at Bnoon',
    sizes: '(max-width: 768px) 50vw, 286px',
  },
  {
    key: 'antenatal-care',
    src: 'public/images/antenatal-care-deliveries.jpg',
    category: 'service',
    alt: 'Antenatal care and deliveries at Bnoon',
    sizes: '(max-width: 768px) 50vw, 286px',
  },

  // National Day offer image (450x380)
  {
    key: 'ivf-cycles',
    src: 'public/images/national-day/ivf-cycles.jpg',
    category: 'campaign',
    alt: 'IVF/ICSI Cycles offer at Bnoon',
    sizes: '(max-width: 768px) 100vw, 450px',
  },

  // PDF pages (1000x1400, large — generate 576w + original)
  {
    key: 'pdf-1',
    src: 'public/pdf/pdf-1.jpg',
    category: 'misc',
    alt: 'Patient Rights page 1',
    sizes: '(max-width: 768px) 95vw, 900px',
  },
  {
    key: 'pdf-2',
    src: 'public/pdf/pdf-2.jpg',
    category: 'misc',
    alt: 'Patient Rights page 2',
    sizes: '(max-width: 768px) 95vw, 900px',
  },

  // Shape decorative image (159x135)
  {
    key: 'shape-services',
    src: 'public/images/services/shape.png',
    category: 'misc',
    alt: 'Decorative shape',
    sizes: '159px',
  },
];

async function processImage(img) {
  const inputPath = join(ROOT, img.src);
  const meta = await sharp(inputPath).metadata();
  const w = meta.width;
  const h = meta.height;

  // Determine widths to generate
  const widths = [];
  if (w > 640) {
    widths.push(576);
    widths.push(w);
  } else {
    widths.push(w);
  }

  const srcSetParts = [];

  for (const targetW of widths) {
    const targetH = Math.round((h / w) * targetW);
    const outBuf = await sharp(inputPath)
      .resize(targetW, targetH, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 100 })
      .toBuffer();

    const sizeKB = Math.round(outBuf.length / 1024);
    const filename = `${img.key}-${targetW}x${targetH}-${sizeKB}kb.webp`;
    const outPath = join(OUT, filename);
    writeFileSync(outPath, outBuf);

    srcSetParts.push(`${CDN_BASE}/${filename} ${targetW}w`);
    console.log(`  -> ${filename} (${sizeKB}KB)`);
  }

  // Generate LQIP blur data URL (20px wide thumbnail)
  const blurBuf = await sharp(inputPath)
    .resize(20, null, { fit: 'inside' })
    .webp({ quality: 20 })
    .toBuffer();
  const blurDataURL = `data:image/webp;base64,${blurBuf.toString('base64')}`;

  return {
    key: img.key,
    src: img.src.replace('public', ''),
    width: w,
    height: h,
    sizes: img.sizes,
    alt: img.alt,
    blurDataURL,
    category: img.category,
    cdnSrcSet: srcSetParts.join(', '),
  };
}

async function main() {
  const results = [];
  for (const img of IMAGES) {
    console.log(`Processing: ${img.key} (${img.src})`);
    const entry = await processImage(img);
    results.push(entry);
  }

  // Output manifest entries as TypeScript
  console.log('\n\n// ── Phase 3D: Add these to image-manifest.ts ──────────────────');
  for (const r of results) {
    console.log(`  "${r.key}": {`);
    console.log(`    src: "${r.src}",`);
    console.log(`    width: ${r.width},`);
    console.log(`    height: ${r.height},`);
    console.log(`    sizes: "${r.sizes}",`);
    console.log(`    alt: "${r.alt}",`);
    console.log(`    blurDataURL: "${r.blurDataURL}",`);
    console.log(`    category: "${r.category}",`);
    console.log(`    cdnSrcSet: "${r.cdnSrcSet}",`);
    console.log(`  },`);
  }

  // Also save as JSON for programmatic use
  writeFileSync(join(OUT, '_manifest-entries.json'), JSON.stringify(results, null, 2));
  console.log(`\nSaved ${results.length} entries to _cdn-upload/_manifest-entries.json`);
}

main().catch(console.error);
