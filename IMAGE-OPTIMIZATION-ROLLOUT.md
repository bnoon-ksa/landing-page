# Image Optimization Rollout Plan

> _"I'm helping!"_ — Ralph Wiggum, Chief Image Optimizer

---

## Phase 1: Done! We Already Did It! (This PR)

_"I picked the bestest ones first!"_

| Component                     | Images Migrated                                         | Status |
| ----------------------------- | ------------------------------------------------------- | ------ |
| `Benefits.tsx` (EN)           | benefit-1, benefit-2, benefit-3                         | Done   |
| `OurBlog.tsx` (EN)            | blog-riyadh, blog-jeddah, blog-king-salman, blog-alahsa | Done   |
| `ar/Common/Benefits.tsx` (AR) | benefit-1, benefit-2, benefit-3                         | Done   |
| `ar/Common/OurBlog.tsx` (AR)  | blog-riyadh, blog-jeddah, blog-king-salman, blog-alahsa | Done   |

**Total: 7 unique images, 4 components (EN + AR).** Manifest has blur placeholders for 33 images total.

---

## Phase 2: EN Page Banners — "My cat's breath smells like cat food"

All page banners use CSS `background-image` via `PageBanner` component. `OptimizedPageBanner` is ready but not deployed yet.

**Component to create:** Swap `PageBanner` usage with `<OptimizedPageBanner>` in each page file.

| Page File                     | imageName                | Source                              |
| ----------------------------- | ------------------------ | ----------------------------------- |
| `en/about-us/page.tsx`        | `aboutus-banner`         | `/images/aboutus.jpg`               |
| `en/our-clinics/page.tsx`     | `clinics-banner`         | `/images/clinics-banner.jpg`        |
| `en/our-experts/page.tsx`     | `experts-banner`         | `/images/experts-banner.jpg`        |
| `en/contact-us/page.tsx`      | `contact-us-banner`      | `/images/contact-us-banner.jpg`     |
| `en/submit-feedback/page.tsx` | `feedback-banner`        | `/images/feedback-banner.jpg`       |
| `en/fertility-guide/page.tsx` | `fertility-guide-banner` | `/images/fertility-guid-banner.jpg` |

**6 pages.** Each is a one-liner swap. Visual QA needed because `PageBanner` uses CSS `background-size: cover` and the replacement uses `<Image fill>`.

_"It tastes like burning."_ — Test on mobile too.

---

## Phase 3: AR Page Banners — "Me fail English? That's unpossible!"

Same as Phase 2, but for Arabic pages. The catalog entries already exist.

| Page File                     | imageName                   | Source                                 |
| ----------------------------- | --------------------------- | -------------------------------------- |
| `ar/about-us/page.tsx`        | `aboutus-banner-ar`         | `/images/aboutus-ar-banner.avif`       |
| `ar/our-clinics/page.tsx`     | `clinics-banner-ar`         | `/images/clinics-banner-ar.jpg`        |
| `ar/our-experts/page.tsx`     | `experts-banner-ar`         | `/images/experts-banner-ar.jpg`        |
| `ar/contact-us/page.tsx`      | `contact-us-banner-ar`      | `/images/contactus-banner-ar.jpg`      |
| `ar/submit-feedback/page.tsx` | `feedback-banner-ar`        | `/images/feedback-banner-ar.jpg`       |
| `ar/fertility-guide/page.tsx` | `fertility-guide-banner-ar` | `/images/fertility-guid-banner-ar.jpg` |
| `ar/join-our-team/page.tsx`   | `join-team-banner-ar`       | `/images/join-our-team-ar.jpg`         |

**7 pages.** Same swap pattern. Check RTL layout doesn't break.

---

## Phase 4: About/Section Images — "When I grow up, I wanna be a principal or a caterpillar"

These are large section images used in various places. Each needs its component migrated.

| Component                          | imageName               | Source                                        |
| ---------------------------------- | ----------------------- | --------------------------------------------- |
| `HomeDemo2/AboutUs.tsx` or similar | `bg-doctors`            | `/images/bg-doctors.jpg` (1665x1600)          |
| `HearPatient.tsx` or similar       | `hear-patient`          | `/images/hear-patient.jpg` (1920x1484)        |
| `AboutUs.tsx` or similar           | `fertility-women`       | `/images/fertility-women.jpg` (636x461)       |
| `AboutUs.tsx` or similar           | `baby-health-network`   | `/images/baby-health-network.jpg` (636x460)   |
| `AboutUs.tsx` or similar           | `baby-health-network-2` | `/images/baby-health-network-2.jpg` (636x460) |
| `FertilityDoc section`             | `fertility-doc`         | `/images/fertility-doc.avif` (517x547)        |

**6 images.** Find the component, swap `<Image>` to `<OptimizedImage imageName="...">`, done.

---

## Phase 5: Service Cards — "The doctor said I wouldn't have so many nose bleeds if I kept my finger outta there"

Small treatment card images. All 286x210.

| imageName               | Source                              |
| ----------------------- | ----------------------------------- |
| `ivf`                   | `/images/ivf.jpg`                   |
| `icsi`                  | `/images/icsi.jpg`                  |
| `egg-freezing`          | `/images/egg-freezing.jpg`          |
| `embryo-freezing`       | `/images/embryo-freezing.jpg`       |
| `fertility-counselling` | `/images/fertility-counselling.jpg` |

**5 images.** These are likely in a `Treatments.tsx` or `Services.tsx` component that maps over a data array. One component change covers all 5.

---

## Phase 6: AR Component Mirrors — "I bent my Wookiee" ✅ DONE

The `components/ar/` directory has near-identical duplicates of EN components. Apply the same `<OptimizedImage>` swaps:

- ~~`ar/Common/Benefits.tsx` — same 3 benefit images~~ ✅ Done
- ~~`ar/Common/OurBlog.tsx` — same 4 clinic images~~ ✅ Done
- Any AR-specific about/section components (remaining — do alongside Phase 4)

_"My knob tastes funny."_ — The manifest entries are shared between EN and AR since they use the same source files.

---

## Phase 7: Tier 2 Images (Future PR) — "Hi, Super Nintendo Chalmers!"

~130 remaining images not yet in the catalog. Add to `src/config/image.config.ts`:

- **17 doctor portraits** (`/images/doctors/*.jpg`) — medium priority
- **~54 icons** (`/images/icons/*.png|svg`) — low priority, SVGs skip LQIP anyway
- **Feature/misc images** — add as encountered
- **Hero banner** (`/images/banner/banner-bg.jpg`) — high priority, used on homepage

For each batch:

1. Add entries to `IMAGE_CATALOG` with correct dimensions
2. Run `npm run optimize-images`
3. Swap `<Image>` to `<OptimizedImage>` in the component
4. Visual QA

---

## How to Migrate a Component (Cheat Sheet)

_"I choo-choo-choose this pattern!"_

```diff
- import Image from "next/image";
+ import OptimizedImage from "@/components/ui/OptimizedImage";

- <Image src="/images/thing.jpg" alt="thing" width={500} height={300} />
+ <OptimizedImage imageName="thing" />
```

If the image isn't in the catalog yet:

1. Get dimensions: `node -e "require('sharp')('public/images/thing.jpg').metadata().then(m => console.log(m.width+'x'+m.height))"`
2. Add entry to `src/config/image.config.ts`
3. Run `npm run optimize-images`
4. Use `<OptimizedImage imageName="thing" />`

---

## Verification Checklist

_"I'm learnding!"_

- [ ] `npm run optimize-images:force` — regenerate everything
- [ ] `npm run typecheck` — no TypeScript errors
- [ ] `npm test` — all tests pass
- [ ] `npm run build` — build succeeds (prebuild auto-runs pipeline)
- [ ] Visual QA: images render correctly at all breakpoints
- [ ] Visual QA: blur placeholder visible on slow 3G (Chrome DevTools > Network > Slow 3G)
- [ ] No layout shift (CLS) — images maintain aspect ratio during load

---

_"That's where I saw the leprechaun. He tells me to burn things."_ — Do NOT burn the codebase. One phase at a time.
