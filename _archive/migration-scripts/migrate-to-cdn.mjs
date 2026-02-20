#!/usr/bin/env node
/**
 * CDN Migration Script — Phase 3
 *
 * Migrates all components from next/image + PageBanner to
 * OptimizedImage + OptimizedPageBanner, using CDN manifest entries.
 *
 * Run: node scripts/migrate-to-cdn.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'src');

// ── Build src-path → manifest-key lookup ──────────────────────────────
const manifestContent = fs.readFileSync(path.join(SRC, 'lib/image-manifest.ts'), 'utf-8');
const srcToKey = {};
for (const m of manifestContent.matchAll(/"([^"]+)":\s*\{[^}]*?src:\s*"([^"]+)"/gs)) {
  srcToKey[m[2]] = m[1];
}

let modified = 0;
let skipped = 0;

function readFile(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf-8');
}
function writeFile(relPath, content) {
  fs.writeFileSync(path.join(ROOT, relPath), content, 'utf-8');
  modified++;
}

function lookupKey(srcPath) {
  const key = srcToKey[srcPath];
  if (!key) {
    console.warn(`  ⚠ No manifest key for "${srcPath}"`);
    skipped++;
  }
  return key;
}

// ─────────────────────────────────────────────────────────────────────
// 3A  PAGE BANNERS
// Replace <PageBanner bgImage="..."> → <OptimizedPageBanner imageName="...">
// ─────────────────────────────────────────────────────────────────────
function migratePageBanners() {
  console.log('\n=== 3A: Page Banners ===');
  const files = [];

  // Gather all page files that import PageBanner
  for (const locale of ['en', 'ar']) {
    const dir = path.join(SRC, 'app', locale);
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const pagePath = path.join(dir, entry.name, 'page.tsx');
      if (!fs.existsSync(pagePath)) continue;
      const content = fs.readFileSync(pagePath, 'utf-8');
      if (
        content.includes('from "@/components/Layout/PageBanner"') ||
        content.includes('from "@/components/ar/Layout/PageBanner"')
      ) {
        files.push(pagePath);
      }
    }
  }

  // Also check page - Copy.tsx
  const copyFile = path.join(SRC, 'app/en/bnoon-jeddah/page - Copy.tsx');
  if (fs.existsSync(copyFile)) {
    const c = fs.readFileSync(copyFile, 'utf-8');
    if (c.includes('PageBanner')) files.push(copyFile);
  }

  for (const filePath of files) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const rel = path.relative(ROOT, filePath);

    // Extract bgImage value(s)
    const bgMatches = [...content.matchAll(/bgImage="([^"]+)"/g)];
    if (bgMatches.length === 0) {
      // File imports PageBanner but doesn't use bgImage (unused import in founding pages)
      // Just remove the import
      content = content.replace(
        /import PageBanner from "@\/components\/(ar\/)?Layout\/PageBanner";\n?/g,
        '',
      );
      writeFile(rel, content);
      console.log(`  ✓ ${rel} (removed unused PageBanner import)`);
      continue;
    }

    // Replace import
    content = content.replace(
      /import PageBanner from "@\/components\/(ar\/)?Layout\/PageBanner";/g,
      'import OptimizedPageBanner from "@/components/ui/OptimizedPageBanner";',
    );

    // Replace each <PageBanner bgImage="..." /> or multiline variant
    for (const bgMatch of bgMatches) {
      const bgImage = bgMatch[1];
      const key = lookupKey(bgImage);
      if (!key) continue;

      // Handle multiline: <PageBanner\n  bgImage="..." \n/>
      content = content.replace(
        new RegExp(
          `<PageBanner[\\s\\n]+bgImage="${bgImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\n]*\\/?>`,
          'g',
        ),
        `<OptimizedPageBanner imageName="${key}" />`,
      );
      // Also handle single-line
      content = content.replace(
        new RegExp(
          `<PageBanner bgImage="${bgImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s]*\\/?>`,
          'g',
        ),
        `<OptimizedPageBanner imageName="${key}" />`,
      );
    }

    writeFile(rel, content);
    console.log(`  ✓ ${rel}`);
  }
}

// ─────────────────────────────────────────────────────────────────────
// 3A-alt  FOUNDING PAGE BANNERS
// Replace FoundingPageBanner → OptimizedPageBanner with height style
// ─────────────────────────────────────────────────────────────────────
function migrateFoundingBanners() {
  console.log('\n=== 3A-alt: Founding Page Banners ===');
  const files = [
    'src/app/en/founding-day-campaign-ivf/page.tsx',
    'src/app/en/founding-day-campaign-andrology/page.tsx',
    'src/app/ar/founding-day-campaign-ivf/page.tsx',
    'src/app/ar/founding-day-campaign-andrology/page.tsx',
  ];

  for (const rel of files) {
    const filePath = path.join(ROOT, rel);
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf-8');

    // Extract bgImage
    const bgMatch = content.match(/FoundingPageBanner bgImage="([^"]+)"/);
    if (!bgMatch) continue;

    const bgImage = bgMatch[1];
    const key = lookupKey(bgImage);
    if (!key) continue;

    // Replace import
    content = content.replace(
      /import FoundingPageBanner from "@\/components\/(ar\/)?Layout\/FoundingPageBanner";\n?/g,
      '',
    );
    // Remove unused PageBanner import if present
    content = content.replace(
      /import PageBanner from "@\/components\/(ar\/)?Layout\/PageBanner";\n?/g,
      '',
    );

    // Add OptimizedPageBanner import if not already present
    if (!content.includes('OptimizedPageBanner')) {
      content = content.replace(
        /import Navbar from/,
        'import OptimizedPageBanner from "@/components/ui/OptimizedPageBanner";\nimport Navbar from',
      );
    }

    // Replace <FoundingPageBanner bgImage="..." />
    content = content.replace(
      new RegExp(
        `<FoundingPageBanner[\\s\\n]+bgImage="${bgImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\n]*\\/?>`,
        'g',
      ),
      `<OptimizedPageBanner imageName="${key}" style={{ height: 360 }} />`,
    );
    content = content.replace(
      new RegExp(
        `<FoundingPageBanner bgImage="${bgImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s]*\\/?>`,
        'g',
      ),
      `<OptimizedPageBanner imageName="${key}" style={{ height: 360 }} />`,
    );

    writeFile(rel, content);
    console.log(`  ✓ ${rel}`);
  }
}

// ─────────────────────────────────────────────────────────────────────
// 3B  DOCTOR GRID COMPONENTS (OurDoctors, OurDoctorsStyle2, OurExperts)
// Change imageUrl → imageName in data + Image → OptimizedImage in JSX
// ─────────────────────────────────────────────────────────────────────
function migrateDoctorGrid() {
  console.log('\n=== 3B: Doctor Grid Components ===');
  const files = [
    'src/components/Common/OurDoctors.tsx',
    'src/components/Common/OurDoctorsStyle2.tsx',
    'src/components/Common/OurExperts.tsx',
    'src/components/ar/Common/OurDoctors.tsx',
    'src/components/ar/Common/OurDoctorsStyle2.tsx',
    'src/components/ar/Common/OurExperts.tsx',
  ];

  for (const rel of files) {
    const filePath = path.join(ROOT, rel);
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace import
    content = content.replace(
      /import Image from "next\/image";/g,
      'import OptimizedImage from "@/components/ui/OptimizedImage";',
    );

    // Replace interface
    content = content.replace(/imageUrl:\s*string/g, 'imageName: string');

    // Replace all imageUrl values in data arrays
    const imageUrlMatches = [...content.matchAll(/imageUrl:\s*"([^"]+)"/g)];
    for (const m of imageUrlMatches) {
      const src = m[1];
      const key = lookupKey(src);
      if (!key) continue;
      content = content.replace(`imageUrl: "${src}"`, `imageName: "${key}"`);
    }

    // Replace <Image src={doctor.imageUrl} ...> → <OptimizedImage imageName={doctor.imageName} ...>
    // Pattern: <Image\n  src={doctor.imageUrl}\n  alt={...}\n  width={N}\n  height={N}\n  loading="lazy"\n  style={...}\n/>
    content = content.replace(
      /<Image\s+src=\{doctor\.imageUrl\}\s+alt=\{([^}]+)\}\s+width=\{\d+\}\s+height=\{\d+\}\s+(?:loading="[^"]+"\s+)?style=\{(\{[^}]+\})\}\s*\/>/g,
      '<OptimizedImage imageName={doctor.imageName} alt={$1} style={$2} />',
    );

    // Simpler single-line variants
    content = content.replace(
      /<Image\s+src=\{doctor\.imageUrl\}/g,
      '<OptimizedImage imageName={doctor.imageName}',
    );

    // Remove width/height props that follow imageName (they come from manifest now)
    // This is tricky to do generically; let's handle the common patterns
    content = content.replace(
      /(<OptimizedImage imageName=\{doctor\.imageName\}[^>]*?)width=\{\d+\}\s*/g,
      '$1',
    );
    content = content.replace(
      /(<OptimizedImage imageName=\{doctor\.imageName\}[^>]*?)height=\{\d+\}\s*/g,
      '$1',
    );
    content = content.replace(
      /(<OptimizedImage imageName=\{doctor\.imageName\}[^>]*?)loading="[^"]+"\s*/g,
      '$1',
    );

    writeFile(rel, content);
    console.log(`  ✓ ${rel}`);
  }
}

// ─────────────────────────────────────────────────────────────────────
// 3C  INDIVIDUAL DOCTOR PROFILE COMPONENTS
// ─────────────────────────────────────────────────────────────────────
function migrateDoctorProfiles() {
  console.log('\n=== 3C: Doctor Profile Components ===');
  const dirs = ['src/components/Common', 'src/components/ar/Common'];

  for (const dir of dirs) {
    const fullDir = path.join(ROOT, dir);
    if (!fs.existsSync(fullDir)) continue;
    for (const file of fs.readdirSync(fullDir)) {
      if (!file.startsWith('Dr') || !file.endsWith('.tsx')) continue;
      // Skip non-profile components
      if (
        file === 'DrAbdulAzizAlShahrani.tsx' ||
        file === 'DrFawazEdris.tsx' ||
        file === 'DrBassam.tsx' ||
        file === 'DrAsimAlWohaibi.tsx' ||
        file === 'DrAhmedAlshaikh.tsx' ||
        file === 'DrWajdiAlOmari.tsx' ||
        file === 'DrDaliaNour.tsx' ||
        file === 'DrAhmadHaroun.tsx' ||
        file === 'DrMoussaElNaiemy.tsx' ||
        file === 'DrMayaAlbezreh.tsx' ||
        file === 'DrRazanGhaith.tsx' ||
        file === 'DrMazinBishara.tsx' ||
        file === 'DrHusseinSabban.tsx' ||
        file === 'DrMaramDadoua.tsx' ||
        file === 'DrRaniaElsherify.tsx' ||
        file === 'DrAhmedAlNowasser.tsx' ||
        file === 'DrMedianAlkhalaf.tsx' ||
        // AR variants (different naming)
        file === 'DrAhmedNowasser.tsx'
      ) {
        // This is a doctor profile — process it
      } else {
        continue; // Skip unknown Dr files
      }

      const rel = path.join(dir, file);
      let content = fs.readFileSync(path.join(ROOT, rel), 'utf-8');

      // Find const image/imageX = "/images/doctors/..." patterns
      const imageVarMatches = [
        ...content.matchAll(/const\s+(\w+)\s*=\s*"(\/images\/doctors\/[^"]+)"/g),
      ];

      if (imageVarMatches.length === 0) continue;

      // Replace import
      content = content.replace(
        /import Image from "next\/image";?\n?/g,
        'import OptimizedImage from "@/components/ui/OptimizedImage";\n',
      );

      for (const [fullMatch, varName, srcPath] of imageVarMatches) {
        const key = lookupKey(srcPath);
        if (!key) continue;

        // Remove the const declaration
        content = content.replace(fullMatch + '\n', '');
        content = content.replace(fullMatch, ''); // no newline variant

        // Replace <Image ... src={varName} ...> with <OptimizedImage imageName="key" ...>
        // Handle multiline: <Image\n  className="..."\n  src={varName}\n  alt="..."\n  width={N}\n  height={N}\n/>
        const imgRegex = new RegExp(`<Image\\s[^>]*?src=\\{${varName}\\}[^>]*?\\/>`, 'gs');
        content = content.replace(imgRegex, (match) => {
          // Extract className and alt from original
          const classMatch = match.match(/className="([^"]*)"/);
          const altMatch = match.match(/alt="([^"]*)"/);
          const cls = classMatch ? ` className="${classMatch[1]}"` : '';
          const alt = altMatch ? ` alt="${altMatch[1]}"` : '';
          return `<OptimizedImage imageName="${key}"${cls}${alt} />`;
        });
      }

      writeFile(rel, content);
      console.log(`  ✓ ${rel}`);
    }
  }
}

// ─────────────────────────────────────────────────────────────────────
// 3D  TAB COMPONENTS (FertilityTabs, TreatmentsTabs, VisitTabs)
// ─────────────────────────────────────────────────────────────────────
function migrateTabComponents() {
  console.log('\n=== 3D: Tab Components ===');
  const files = [
    'src/components/Common/FertilityTabs.tsx',
    'src/components/Common/TreatmentsTabs.tsx',
    'src/components/Common/VisitTabs.tsx',
    'src/components/ar/Common/FertilityTabs.tsx',
    'src/components/ar/Common/TreatmentsTabs.tsx',
    'src/components/ar/Common/VisitTabs.tsx',
  ];

  for (const rel of files) {
    const filePath = path.join(ROOT, rel);
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace import
    content = content.replace(
      /import Image from "next\/image";?\n?/g,
      'import OptimizedImage from "@/components/ui/OptimizedImage";\n',
    );

    // Replace interface: image: string → imageName: string
    content = content.replace(/\bimage:\s*string/g, 'imageName: string');

    // Replace data: image: "/images/..." → imageName: "key"
    const imageMatches = [...content.matchAll(/image:\s*"(\/images\/[^"]+)"/g)];
    for (const m of imageMatches) {
      const src = m[1];
      const key = lookupKey(src);
      if (!key) continue;
      content = content.replace(`image: "${src}"`, `imageName: "${key}"`);
    }

    // Replace <Image src={currentContent.image} ...> → <OptimizedImage imageName={currentContent.imageName} ...>
    content = content.replace(
      /<Image\s+src=\{currentContent\.image\}/g,
      '<OptimizedImage imageName={currentContent.imageName}',
    );
    content = content.replace(
      /<Image\s+src=\{content\.image\}/g,
      '<OptimizedImage imageName={content.imageName}',
    );

    // Remove explicit width/height after imageName (manifest handles this)
    // Match patterns like: imageName={...}\n  alt={...}\n  className="..."\n  width={N} height={N} />
    content = content.replace(
      /(<OptimizedImage imageName=\{[^}]+\}[^>]*?)\s+width=\{\d+\}\s+height=\{\d+\}/g,
      '$1',
    );

    // Handle bnoon-symbol icon in TreatmentsTabs IconList
    content = content.replace(
      /<Image\s+src="\/images\/icons\/bnoon-symbol\.avif"\s+alt="[^"]*"\s+width=\{\d+\}\s+height=\{\d+\}\s+className="[^"]*"\s*\/>/g,
      '<OptimizedImage imageName="bnoon-symbol" alt="icon" className="me-2" />',
    );

    writeFile(rel, content);
    console.log(`  ✓ ${rel}`);
  }
}

// ─────────────────────────────────────────────────────────────────────
// 3E  LOCATION COMPONENTS
// ─────────────────────────────────────────────────────────────────────
function migrateLocationComponents() {
  console.log('\n=== 3E: Location Components ===');
  const files = [
    'src/components/Common/OurLocations.tsx',
    'src/components/Common/Riyadharea.tsx',
    'src/components/Common/Jeddaharea.tsx',
    'src/components/Common/AlahsaArea.tsx',
    'src/components/ar/Common/OurLocations.tsx',
    'src/components/ar/Common/Riyadharea.tsx',
    'src/components/ar/Common/Jeddaharea.tsx',
  ];

  for (const rel of files) {
    const filePath = path.join(ROOT, rel);
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace import
    if (content.includes('import Image from "next/image"')) {
      content = content.replace(
        /import Image from "next\/image";?\n?/g,
        'import OptimizedImage from "@/components/ui/OptimizedImage";\n',
      );
    }

    // Replace all static <Image src="/images/..." ...> with OptimizedImage
    const staticImageMatches = [...content.matchAll(/<Image\s+src="(\/images\/[^"]+)"/g)];
    for (const m of staticImageMatches) {
      const src = m[1];
      const key = lookupKey(src);
      if (!key) continue;

      // Replace the full <Image src="..." ...> tag
      const imgRegex = new RegExp(
        `<Image\\s+src="${src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*?\\/>`,
        'gs',
      );
      content = content.replace(imgRegex, (match) => {
        const classMatch = match.match(/className="([^"]*)"/);
        const altMatch = match.match(/alt="([^"]*)"/);
        const cls = classMatch ? ` className="${classMatch[1]}"` : '';
        const alt = altMatch ? ` alt="${altMatch[1]}"` : '';
        return `<OptimizedImage imageName="${key}"${cls}${alt} />`;
      });
    }

    // Handle data array patterns: image: "/images/..." or imageUrl: "/images/..."
    for (const m of content.matchAll(/(?:image|imageUrl):\s*"(\/images\/[^"]+)"/g)) {
      const src = m[1];
      const key = lookupKey(src);
      if (!key) {
        continue;
      }
      content = content.replace(m[0], `imageName: "${key}"`);
    }

    // Replace <Image src={...image} or src={...imageUrl}
    content = content.replace(
      /<Image\s+src=\{(\w+)\.image\}/g,
      '<OptimizedImage imageName={$1.imageName}',
    );
    content = content.replace(
      /<Image\s+src=\{(\w+)\.imageUrl\}/g,
      '<OptimizedImage imageName={$1.imageName}',
    );

    // Replace interface fields
    content = content.replace(/\bimageUrl:\s*string/g, 'imageName: string');

    writeFile(rel, content);
    console.log(`  ✓ ${rel}`);
  }
}

// ─────────────────────────────────────────────────────────────────────
// 3F  HOME + LAYOUT + MISC COMPONENTS
// Replace <Image src="/images/..."> → <OptimizedImage imageName="...">
// Replace CSS backgroundImage → getCdnUrl()
// ─────────────────────────────────────────────────────────────────────
function migrateHomeMiscComponents() {
  console.log('\n=== 3F: Home, Layout & Misc Components ===');
  const files = [
    // Layout
    'src/components/Layout/Navbar.tsx',
    'src/components/Layout/Footer.tsx',
    'src/components/Layout/GoTop.tsx',
    'src/components/ar/Layout/Navbar.tsx',
    'src/components/ar/Layout/Footer.tsx',
    'src/components/ar/Layout/GoTop.tsx',
    // HomeDemo1
    'src/components/HomeDemo1/HeroBanner.tsx',
    'src/components/HomeDemo1/OurServices.tsx',
    'src/components/HomeDemo1/DownloadOurApp.tsx',
    'src/components/HomeDemo1/AboutUs/index.tsx',
    // HomeDemo2
    'src/components/HomeDemo2/AboutUs.tsx',
    'src/components/HomeDemo2/DownloadApp.tsx',
    'src/components/HomeDemo2/Features.tsx',
    'src/components/HomeDemo2/FrequentlyAskedQuestions.tsx',
    'src/components/HomeDemo2/OurServices.tsx',
    'src/components/HomeDemo2/PatientsFeedbacks.tsx',
    'src/components/HomeDemo2/WhyChooseUs.tsx',
    // AR HomeDemo
    'src/components/ar/HomeDemo1/OurServices.tsx',
    'src/components/ar/HomeDemo1/FrequentlyAskedQuestions.tsx',
    'src/components/ar/HomeDemo2/AboutUs.tsx',
    'src/components/ar/HomeDemo2/OurServices.tsx',
    // Common
    'src/components/Common/AboutusSection.tsx',
    'src/components/Common/WhoAreWe.tsx',
    'src/components/Common/TeamsSection.tsx',
    'src/components/Common/HowItWorks.tsx',
    'src/components/Common/HowItWorksStyle2.tsx',
    'src/components/Common/WhyChooseUs.tsx',
    'src/components/Common/Feedbacks.tsx',
    'src/components/Common/FeedbackSection.tsx',
    'src/components/Common/FertilityDoctor.tsx',
    'src/components/Common/FertilityTeam.tsx',
    'src/components/Common/SuccessSection.tsx',
    'src/components/Common/TelemedicineSection.tsx',
    'src/components/Common/WaadSection.tsx',
    'src/components/Common/NationalDayOffer.tsx',
    'src/components/Common/MensInfertilityCanpaign.tsx',
    'src/components/Common/Popup.tsx',
    'src/components/Common/PaitentRights.tsx',
    'src/components/Common/MediaSection.tsx',
    'src/components/Common/SubscribeForm.tsx',
    'src/components/Common/ContactUsSection.tsx',
    'src/components/Common/AppointmentSection.tsx',
    'src/components/Common/SearchBar.tsx',
    'src/components/Common/CustomList.tsx',
    // AR Common
    'src/components/ar/Common/AboutusSection.tsx',
    'src/components/ar/Common/WhoAreWe.tsx',
    'src/components/ar/Common/TeamsSection.tsx',
    'src/components/ar/Common/HowItWorks.tsx',
    'src/components/ar/Common/HowItWorksStyle2.tsx',
    'src/components/ar/Common/WhyChooseUs.tsx',
    'src/components/ar/Common/Feedbacks.tsx',
    'src/components/ar/Common/FeedbackSection.tsx',
    'src/components/ar/Common/FertilityDoctor.tsx',
    'src/components/ar/Common/FertilityTeam.tsx',
    'src/components/ar/Common/SuccessSection.tsx',
    'src/components/ar/Common/TelemedicineSection.tsx',
    'src/components/ar/Common/WaadSection.tsx',
    'src/components/ar/Common/NationalDayOffer.tsx',
    'src/components/ar/Common/MensInfertilityTreatments.tsx',
    'src/components/ar/Common/Popup.tsx',
    'src/components/ar/Common/PaitentRights.tsx',
    'src/components/ar/Common/MediaSection.tsx',
    'src/components/ar/Common/SubscribeForm.tsx',
    'src/components/ar/Common/ContactUsSection.tsx',
    'src/components/ar/Common/AppointmentSection.tsx',
    'src/components/ar/Common/SearchBar.tsx',
    'src/components/ar/Common/CustomList.tsx',
    // AR ArabicMeta
    'src/components/ar/ArabicMeta/HomePage.tsx',
  ];

  for (const rel of files) {
    const filePath = path.join(ROOT, rel);
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf-8');
    const original = content;

    // Find all static image sources: src="/images/..."
    const staticSources = [...content.matchAll(/<Image\s[^>]*?src="(\/images\/[^"]+)"/gs)];

    // Also find backgroundImage patterns
    const bgImagePatterns = [
      ...content.matchAll(/backgroundImage:\s*(?:`url\(|"url\()?(\/images\/[^)"'`]+)/g),
    ];

    if (staticSources.length === 0 && bgImagePatterns.length === 0) continue;

    let needsOptimizedImage = false;
    let needsCdnUrl = false;

    // Replace static <Image src="/images/..." ...>
    for (const m of staticSources) {
      const src = m[1];
      // Skip SVGs (handled in Phase 4)
      if (src.endsWith('.svg')) continue;

      const key = lookupKey(src);
      if (!key) continue;
      needsOptimizedImage = true;

      const imgRegex = new RegExp(
        `<Image\\s+src="${src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*?\\/>`,
        'gs',
      );
      content = content.replace(imgRegex, (match) => {
        const classMatch = match.match(/className="([^"]*)"/);
        const altMatch = match.match(/alt="([^"]*)"/);
        const styleMatch = match.match(/style=\{(\{[^}]*\})\}/);
        const cls = classMatch ? ` className="${classMatch[1]}"` : '';
        const alt = altMatch ? ` alt="${altMatch[1]}"` : '';
        const style = styleMatch ? ` style={${styleMatch[1]}}` : '';
        return `<OptimizedImage imageName="${key}"${cls}${alt}${style} />`;
      });
    }

    // Replace backgroundImage patterns
    for (const m of bgImagePatterns) {
      const src = m[1];
      if (src.endsWith('.svg')) continue;
      const key = lookupKey(src);
      if (!key) continue;
      needsCdnUrl = true;

      // Replace url("/images/X") with getCdnUrl("key") || "/images/X"
      // Pattern: backgroundImage: `url(/images/X)`
      content = content.replace(
        new RegExp(
          `backgroundImage:\\s*\`url\\(${src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)\``,
          'g',
        ),
        `backgroundImage: \`url(\${getCdnUrl("${key}") || "${src}"})\``,
      );
      // Pattern: backgroundImage: "url(/images/X)"
      content = content.replace(
        new RegExp(
          `backgroundImage:\\s*"url\\(${src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)"`,
          'g',
        ),
        `backgroundImage: \`url(\${getCdnUrl("${key}") || "${src}"})\``,
      );
    }

    if (content === original) continue;

    // Update imports
    if (needsOptimizedImage && content.includes('import Image from "next/image"')) {
      content = content.replace(
        /import Image from "next\/image";?\n?/g,
        'import OptimizedImage from "@/components/ui/OptimizedImage";\n',
      );
    } else if (needsOptimizedImage && !content.includes('OptimizedImage')) {
      // Add import at top after "use client"
      content = content.replace(
        /"use client";\n/,
        '"use client";\nimport OptimizedImage from "@/components/ui/OptimizedImage";\n',
      );
    }

    if (needsCdnUrl && !content.includes('getCdnUrl')) {
      content = content.replace(
        /"use client";\n/,
        '"use client";\nimport { getCdnUrl } from "@/lib/cdn-utils";\n',
      );
    }

    writeFile(rel, content);
    console.log(`  ✓ ${rel}`);
  }
}

// ─────────────────────────────────────────────────────────────────────
// 3G  EXPERT PAGES (they use Image directly for doctor images in grid)
// ─────────────────────────────────────────────────────────────────────
function migrateExpertPages() {
  console.log('\n=== 3G: Expert Pages ===');
  const files = ['src/app/en/our-experts/page.tsx', 'src/app/ar/our-experts/page.tsx'];

  for (const rel of files) {
    const filePath = path.join(ROOT, rel);
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf-8');
    const original = content;

    // Replace static image sources
    for (const m of content.matchAll(/<Image\s[^>]*?src="(\/images\/[^"]+)"/gs)) {
      const src = m[1];
      if (src.endsWith('.svg')) continue;
      const key = lookupKey(src);
      if (!key) continue;

      const imgRegex = new RegExp(
        `<Image\\s+src="${src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*?\\/>`,
        'gs',
      );
      content = content.replace(imgRegex, (match) => {
        const classMatch = match.match(/className="([^"]*)"/);
        const altMatch = match.match(/alt="([^"]*)"/);
        const cls = classMatch ? ` className="${classMatch[1]}"` : '';
        const alt = altMatch ? ` alt="${altMatch[1]}"` : '';
        return `<OptimizedImage imageName="${key}"${cls}${alt} />`;
      });
    }

    if (content === original) continue;

    if (content.includes('import Image from "next/image"')) {
      content = content.replace(
        /import Image from "next\/image";?\n?/g,
        'import OptimizedImage from "@/components/ui/OptimizedImage";\n',
      );
    }

    writeFile(rel, content);
    console.log(`  ✓ ${rel}`);
  }
}

// ─────────────────────────────────────────────────────────────────────
// RUN ALL MIGRATIONS
// ─────────────────────────────────────────────────────────────────────
console.log('CDN Migration — Phase 3\n');
migratePageBanners();
migrateFoundingBanners();
migrateDoctorGrid();
migrateDoctorProfiles();
migrateTabComponents();
migrateLocationComponents();
migrateHomeMiscComponents();
migrateExpertPages();

console.log(`\n✅ Done. ${modified} files modified, ${skipped} warnings.`);
