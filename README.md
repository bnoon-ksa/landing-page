# Bnoon Landing Page

Bilingual (Arabic/English) marketing and appointment-booking website for **Bnoon** -- Fertility & Women's Health Centers in Saudi Arabia.

**Production URL:** [https://bnoon.sa](https://bnoon.sa)
**Booking URL:** [https://book.bnoon.sa](https://book.bnoon.sa)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Development Guidelines](#development-guidelines)
  - [Commit Messages](#commit-messages)
  - [Branch Strategy](#branch-strategy)
  - [Pull Request Workflow](#pull-request-workflow)
  - [How to Deploy](#how-to-deploy)
- [Image & Media Strategy](#image--media-strategy)
  - [Local Images](#local-images)
  - [Azure Blob Storage (Videos)](#azure-blob-storage-videos)
  - [Next.js Image Optimization](#nextjs-image-optimization)
- [Font Strategy](#font-strategy)
- [Booking URL Routing](#booking-url-routing)
- [API Routes](#api-routes)
- [Testing](#testing)
  - [Unit Tests (Vitest)](#unit-tests-vitest)
  - [E2E Tests (Playwright)](#e2e-tests-playwright)
- [CI/CD Pipelines](#cicd-pipelines)
  - [PR Validation Pipeline](#1-pr-validation-pipeline-pryml)
  - [Deploy Pipeline](#2-deploy-pipeline-deployyml)
  - [Rollback Pipeline](#3-rollback-pipeline-rollbackyml)
  - [Pipeline Diagram](#pipeline-diagram)
- [Caching Strategy](#caching-strategy)
- [Semantic Versioning](#semantic-versioning)
- [Azure Infrastructure](#azure-infrastructure)
- [Environment Variables & Secrets](#environment-variables--secrets)
- [Code Quality & Lint](#code-quality--lint)
- [Troubleshooting](#troubleshooting)

---

## Tech Stack

| Layer | Technology | Version |
|:------|:-----------|:--------|
| Framework | Next.js (App Router) | 14.2.x |
| Language | TypeScript (strict) | 5.9.x |
| Runtime | Node.js | 20.x |
| UI | React + Bootstrap 5 + react-bootstrap | 18.3.x |
| Animation | Framer Motion | 12.x |
| Carousel | Swiper | 11.x |
| Icons | React Icons, Remixicon, Bootstrap Icons | - |
| PDF Viewer | react-pdf + pdfjs-dist | 10.x / 5.x |
| Image Processing | Sharp | 0.34.x |
| Email | Nodemailer | 7.x |
| Database | MongoDB via Mongoose | 8.x |
| Spam Protection | reCAPTCHA v2 | - |
| Unit Tests | Vitest + Testing Library | 4.x |
| E2E Tests | Playwright | 1.58.x |
| Linting | ESLint (next/core-web-vitals) | 8.x |
| Hosting | Azure App Service (Linux) | - |
| CI/CD | GitHub Actions | - |
| Versioning | Semantic Release | 24.x |

---

## Project Structure

```
bnoon-lp/
├── .github/workflows/           # CI/CD pipelines
│   ├── deploy.yml               #   Production deploy (push to main)
│   ├── pr.yml                   #   PR validation
│   └── rollback.yml             #   Production rollback (manual)
├── e2e/                         # Playwright E2E tests
│   ├── health.spec.ts           #   Health endpoint checks
│   ├── navigation.spec.ts       #   Page navigation & routing
│   ├── footer-navbar.spec.ts    #   Header/footer component tests
│   ├── forms.spec.ts            #   Form submission tests
│   ├── seo.spec.ts              #   Meta tags, Open Graph, structured data
│   ├── performance.spec.ts      #   Core Web Vitals
│   └── error-handling.spec.ts   #   404, error boundaries
├── public/
│   └── images/                  # Static images (~13 MB, 275 files)
│       ├── about/               #   About page assets
│       ├── app/                 #   App promotion assets
│       ├── banner/              #   Hero banners
│       ├── blog/                #   Blog post thumbnails
│       ├── doctors/             #   Doctor profile photos (36 files)
│       ├── features/            #   Feature section graphics
│       ├── feedback/            #   Patient testimonial assets
│       ├── fertility-guide/     #   Fertility guide illustrations
│       ├── help/                #   Help section assets
│       ├── icons/               #   UI icons (SVG/PNG, 54 files)
│       ├── locations/           #   Clinic location photos
│       ├── national-day/        #   National day campaign
│       ├── pdf/                 #   PDF preview images
│       ├── services/            #   Treatment service images
│       ├── treatments/          #   Treatment illustrations
│       ├── users/               #   User-related assets
│       └── visit/               #   Visit section assets
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (shared metadata)
│   │   ├── ar/                  # Arabic locale (/ar) — 43 routes
│   │   │   └── layout.tsx       #   Arabic layout (Cairo + Alexandria fonts, RTL)
│   │   ├── en/                  # English locale (/en) — 43 routes
│   │   │   └── layout.tsx       #   English layout (Plus Jakarta Sans, LTR)
│   │   └── api/
│   │       ├── health/route.ts  # Health check endpoint
│   │       ├── subscribe/       # English newsletter subscription
│   │       └── subscribe-ar/    # Arabic newsletter subscription
│   ├── components/              # Shared + English components
│   │   ├── ar/                  # Arabic-specific components (mirrored structure)
│   │   ├── Common/              # Shared components (OurDoctors, OurExperts, etc.)
│   │   ├── HomeDemo1/           # Homepage variant 1
│   │   ├── HomeDemo2/           # Homepage variant 2
│   │   ├── Auth/                # Authentication components
│   │   ├── Layout/              # Header, Footer, GoTop
│   │   └── SetLocaleAttrs.tsx   # Locale attribute helper
│   ├── fonts/                   # Self-hosted web fonts (woff2)
│   ├── styles/                  # Global CSS
│   │   ├── style.css            # English styles
│   │   ├── responsive.css       # English responsive
│   │   ├── arabic.css           # Arabic styles
│   │   └── arabic-responsive.css # Arabic responsive
│   └── utils/
│       └── booking.ts           # Branch-specific booking URL utility
├── server.js                    # Custom Node.js HTTP server (production)
├── next.config.js               # Next.js configuration
├── playwright.config.ts         # Playwright E2E config
├── tsconfig.json                # TypeScript config (strict)
├── .eslintrc.json               # ESLint config
├── .node-version                # Node.js version pinned to 20
└── package.json                 # Dependencies & scripts
```

---

## Getting Started

### Prerequisites

- **Node.js 20.x** (version pinned via `.node-version`)
- **npm** (comes with Node.js)

### Installation

```bash
npm ci
```

> Use `npm ci` (not `npm install`) to get a reproducible, lockfile-exact installation.

### Development

```bash
npm run dev
```

The app starts at [http://localhost:3000](http://localhost:3000) and redirects `/` to `/ar` (Arabic homepage).

### Production Build

```bash
npm run build
npm start          # Starts custom server.js on port 3000
```

The production server uses a custom `server.js` (Node.js HTTP server wrapping Next.js) instead of `next start`. This allows Azure App Service to control the port via the `PORT` environment variable.

---

## Scripts

| Script | Command | Description |
|:-------|:--------|:------------|
| `dev` | `next dev` | Start development server with hot reload |
| `build` | `next build` | Create production build |
| `start` | `node server.js` | Start production server |
| `lint` | `next lint` | Run ESLint with `next/core-web-vitals` ruleset |
| `typecheck` | `tsc --noEmit` | TypeScript type checking without output |
| `test` | `vitest run` | Run unit tests once |
| `test:watch` | `vitest` | Run unit tests in watch mode |
| `test:coverage` | `vitest run --coverage` | Run unit tests with coverage report |
| `test:e2e` | `playwright test` | Run Playwright E2E tests |

---

## Development Guidelines

This project uses a **trunk-based development** workflow. If you are new to this approach, here is everything you need to know.

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) -- a standardized format that allows automated tools to determine version numbers, generate changelogs, and create releases.

**Format:**

```
<type>: <short description>
```

**Types and what they do:**

| Type | When to Use | Triggers Release? | Example |
|:-----|:------------|:------------------|:--------|
| `feat` | Adding a new feature or page | Yes (minor: 1.**x**.0) | `feat: add clinic locations page` |
| `fix` | Fixing a bug | Yes (patch: 1.0.**x**) | `fix: contact form validation error` |
| `perf` | Performance improvement | Yes (patch) | `perf: optimize hero banner loading` |
| `refactor` | Restructuring code without changing behavior | Yes (patch) | `refactor: consolidate header components` |
| `docs` | Documentation only | No | `docs: update README with pipeline docs` |
| `test` | Adding or updating tests | No | `test: add E2E tests for booking flow` |
| `ci` | CI/CD pipeline changes | No | `ci: parallelize quality gate jobs` |
| `chore` | Maintenance tasks | No | `chore: update dependencies` |
| `style` | Code formatting (no logic change) | No | `style: fix indentation in header` |

**Breaking changes** (major version bump) use `!` after the type:

```
feat!: restructure all API routes
fix!: change health endpoint response format
```

> **Why this matters:** [semantic-release](#semantic-versioning) reads these prefixes to automatically decide the next version number. If you write `fix: add new page`, it will create a patch release when it should be a minor. Be accurate.

### Branch Strategy

```
main (production)
  |
  ├── feat/clinic-locations     # Feature branch
  ├── fix/booking-url-routing   # Bug fix branch
  └── refactor/header-cleanup   # Refactoring branch
```

**Rules:**

1. **`main` is production.** Every push to `main` triggers the deploy pipeline. Never push directly to `main`.
2. **Create a branch** for every change, no matter how small.
3. **Name branches** with a prefix: `feat/`, `fix/`, `refactor/`, `docs/`, `ci/`, `chore/`, `test/`, `perf/`.
4. **One concern per branch.** Don't mix a bug fix with a new feature.
5. **Branches auto-delete** after the PR is merged (configured in GitHub repo settings).

### Pull Request Workflow

Here is the step-by-step flow for making changes:

```
1. Create branch         git checkout -b feat/my-feature
2. Make changes          (edit files, commit with conventional commits)
3. Push branch           git push -u github feat/my-feature
4. Open PR               Target: main
5. PR pipeline runs      (lint, typecheck, unit tests, security audit, build, e2e tests)
6. Get review            (code review from team)
7. Squash & merge PR     (ALWAYS use "Squash and merge" — see below)
8. Deploy pipeline runs  (automatic: version bump, deploy, verify, regression tests)
9. Branch auto-deletes
```

**Always use "Squash and merge":**

When merging a PR, GitHub gives you three options. **Always choose "Squash and merge"**:

| Merge Method | What It Does | Use? |
|:-------------|:-------------|:-----|
| **Squash and merge** | Combines all your branch commits into a single commit on `main` | **Yes -- always** |
| Create a merge commit | Adds a merge commit + keeps all branch commits | No |
| Rebase and merge | Replays each branch commit onto `main` | No |

**Why squash?**

- Keeps `main` history clean -- one commit per PR, easy to read and revert
- semantic-release reads the **squash commit message** to determine the version bump, so the PR title becomes the release note
- Your branch can have messy WIP commits (`wip`, `fix typo`, `try again`) -- they all collapse into one clean commit
- If you need to revert a change, you revert a single commit instead of hunting through a chain

**How it works in practice:**

1. Click "Squash and merge" on the PR
2. GitHub pre-fills the commit message with the PR title
3. Edit the message to follow conventional commits format (e.g., `feat: add clinic locations page`)
4. The message you write here is what semantic-release uses to determine the version

> **Tip:** Write your PR title in conventional commit format from the start (`feat: ...`, `fix: ...`). That way the squash commit message is ready to go.

**When you open a PR targeting `main`:**

- The **PR Validation Pipeline** runs automatically
- It checks: linting, type safety, unit tests, security audit, build, and E2E tests
- All checks must pass before merging (except security audit which is advisory)
- If you push new commits to the same PR, the previous pipeline run is cancelled and a new one starts

**When the PR is merged to `main`:**

- The **Deploy Pipeline** runs automatically
- It runs all quality checks again, creates a version (if applicable), deploys to Azure, verifies the deployment, and runs regression tests against production

### How to Deploy

**You deploy by merging a PR to `main`.** That's it.

There is no manual deploy command. The deploy pipeline handles everything:

1. Merge your PR to `main`
2. The pipeline builds, versions, and deploys automatically
3. It verifies the deployment is healthy
4. It runs regression tests against the live site

**If something goes wrong:**

1. Go to **GitHub Actions > Rollback Production**
2. Click "Run workflow"
3. Optionally enter a version tag to rollback to (e.g., `v1.0.5`), or leave empty for the previous version
4. Enter a reason (required, for audit trail)
5. Approve the deployment in the `production` environment gate

### Environments

**Current state:** There is no staging environment. The `main` branch deploys directly to production with a manual approval gate on the `production` GitHub environment.

**Future plan:** When a staging environment is added, the same trunk-based pipeline applies:

```
merge to main
    |
    v
  build (single artifact)
    |
    ├──► deploy to staging (automatic)
    │        |
    │     verify staging
    │        |
    └──► deploy to production (manual approval required)
             |
          verify production
             |
          regression tests
```

One build artifact flows through staging first, then to production with a manual approval gate. This ensures what you test in staging is exactly what goes to production.

---

## Image & Media Strategy

### Local Images

All static images are stored in `public/images/` and served by Next.js directly.

| Stat | Value |
|:-----|:------|
| Total files | 275 |
| Total size | ~13 MB |
| Formats | 118 JPG, 55 SVG, 51 PNG, 50 AVIF, 1 PDF |
| Subdirectories | 17 |

**Why local and not on a CDN?**

Images were briefly migrated to Azure Blob Storage but reverted because:
- The blob storage account is in a different Azure region than the app, introducing latency
- The 13 MB total size is small enough to bundle with the app
- Next.js `<Image>` component already optimizes and caches images on the server

**Image component usage:**

All images use the Next.js `<Image>` component (`next/image`) instead of raw HTML `<img>` tags. This was a project-wide refactoring that:
- Converted 71 component files from `<img>` to `<Image>`
- Added explicit `width` and `height` attributes to prevent layout shift (CLS)
- Enabled automatic format negotiation (AVIF > WebP > JPEG/PNG)

### Azure Blob Storage (Videos)

Videos are hosted on Azure Blob Storage because they are too large to bundle:

| Setting | Value |
|:--------|:------|
| Storage account | `bnoon` |
| Container | `website` |
| Path | `videos/` |
| Base URL | `https://bnoon.blob.core.windows.net/website/videos/` |

Videos are referenced directly via their blob URLs in components.

### Next.js Image Optimization

The `next.config.js` configures image optimization:

```js
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  remotePatterns: [
    { protocol: 'https', hostname: 'ovasavedev8fe4a1851a.blob.core.windows.net' },
    { protocol: 'https', hostname: 'bnoon.blob.core.windows.net' },
  ],
}
```

- **Format negotiation:** Browser receives AVIF (smallest) or WebP based on `Accept` header, with JPEG/PNG fallback
- **Responsive sizing:** Images are generated at breakpoints matching common device widths
- **Remote patterns:** Two Azure Blob Storage domains are allowlisted for video thumbnails and development assets
- **Sharp:** The `sharp` package handles server-side image processing (resizing, format conversion)

---

## Font Strategy

Fonts are self-hosted to ensure reliable builds and eliminate external network dependencies.

### English (`/en`)

**Plus Jakarta Sans** -- loaded via `next/font/local` from `src/fonts/`:

| File | Size | Unicode Range |
|:-----|:-----|:--------------|
| `plus-jakarta-sans-latin.woff2` | 27 KB | Basic Latin |
| `plus-jakarta-sans-latin-1.woff2` | 22 KB | Latin-1 Supplement |
| `plus-jakarta-sans-latin-ext.woff2` | 8 KB | Latin Extended |
| `plus-jakarta-sans-vietnamese.woff2` | 2 KB | Vietnamese |

Applied via CSS variable `--font-plus-jakarta-sans` with `display: swap`.

### Arabic (`/ar`)

**Cairo** -- loaded via `next/font/local` from `src/fonts/`:

| File | Size | Unicode Range |
|:-----|:-----|:--------------|
| `cairo-arabic.woff2` | 30 KB | Arabic |
| `cairo-latin.woff2` | 33 KB | Latin |

Applied via CSS variable `--font-cairo` with `display: swap`.

**Alexandria** -- loaded via self-hosted `@font-face` in `src/fonts/alexandria.css`:

| File | Size | Unicode Range |
|:-----|:-----|:--------------|
| `alexandria-arabic-400.woff2` | 12.5 KB | Arabic (weight 400) |
| `alexandria-arabic-700.woff2` | 13.2 KB | Arabic (weight 700) |
| `alexandria-latin-400.woff2` | 12.8 KB | Latin (weight 400) |
| `alexandria-latin-700.woff2` | 13.2 KB | Latin (weight 700) |

Applied via `font-family: "Alexandria"` in CSS with `display: swap`.

### Why self-hosted?

Google Fonts CDN calls were failing during CI builds, causing build failures. Self-hosting all font files eliminates external network dependencies and improves build reliability.

---

## Booking URL Routing

Doctor "Book Appointment" buttons route to branch-specific pages on `book.bnoon.sa` (the Bnoon telehealth booking app).

The routing logic lives in `src/utils/booking.ts`:

| Doctor Location | Clinic Code | Service ID |
|:----------------|:------------|:-----------|
| Riyadh | `riyadh-granada` | `2245` |
| Jeddah | `jeddah` | `1439` |
| Al Ahsa | `al-ahsa` | `2406` |

Each location maps to a pre-filled URL on `book.bnoon.sa` that selects:
- The correct clinic branch
- The "General Fertility Consultation" service
- The correct language (AR/EN)

If a doctor's location is unknown, the button links to the generic booking homepage (`https://book.bnoon.sa`).

**Components using this utility:**
- `src/components/Common/OurDoctors.tsx` (EN)
- `src/components/Common/OurExperts.tsx` (EN)
- `src/components/ar/Common/OurDoctors.tsx` (AR)
- `src/components/ar/Common/OurExperts.tsx` (AR)

---

## API Routes

| Endpoint | Method | Purpose |
|:---------|:-------|:--------|
| `/api/health` | GET | Health check for deployment verification |
| `/api/subscribe` | POST | English newsletter subscription (reCAPTCHA protected) |
| `/api/subscribe-ar` | POST | Arabic newsletter subscription (reCAPTCHA protected) |

### Health Check Response

```json
{
  "status": "healthy",
  "version": "1.0.6",
  "uptime": 3600,
  "timestamp": "2025-02-12T00:00:00.000Z"
}
```

The `version` field is read from `package.json` and automatically updated by semantic-release. Both the deploy and rollback pipelines poll this endpoint to verify successful deployments.

---

## Testing

### Unit Tests (Vitest)

```bash
npm test                # Single run
npm run test:watch      # Watch mode
npm run test:coverage   # With coverage
```

Tests use Vitest with `@testing-library/react`, `@testing-library/user-event`, and `jsdom` environment.

### E2E Tests (Playwright)

```bash
npm run test:e2e        # Run E2E tests
```

**Test suites (7 specs):**

| Suite | File | What it tests |
|:------|:-----|:--------------|
| Health | `health.spec.ts` | `/api/health` endpoint response |
| Navigation | `navigation.spec.ts` | Page routing, locale switching, redirects |
| Footer/Navbar | `footer-navbar.spec.ts` | Header and footer rendering, links |
| Forms | `forms.spec.ts` | Contact/subscription form submission |
| SEO | `seo.spec.ts` | Meta tags, Open Graph, structured data |
| Performance | `performance.spec.ts` | Core Web Vitals thresholds |
| Error Handling | `error-handling.spec.ts` | 404 pages, error boundaries |

**Playwright configuration (`playwright.config.ts`):**

| Setting | Local | CI / Production |
|:--------|:------|:----------------|
| Base URL | `http://localhost:3099` | `E2E_BASE_URL` env var |
| Workers | Auto (CPU cores) | 4 parallel |
| Retries | 0 | 2 |
| Test timeout | 30s | 60s |
| Navigation timeout | 15s | 45s |
| Action timeout | 10s | 30s |
| Browser | Chromium | Chromium |
| Trace | On first retry | On first retry |
| Screenshots | On failure | On failure |

**Local vs CI behavior:**

- **Locally**, Playwright auto-starts a Next.js production server on port 3099 via `npx next start -p 3099` (requires a prior `npm run build`)
- **In the PR pipeline**, Playwright uses the build artifact downloaded from the `build` job -- it does NOT rebuild
- **In regression tests** (post-deploy), Playwright points to the live production URL (`https://bnoon.sa`) via `E2E_BASE_URL`

**Why different timeouts?** Production pages (especially doctor listing pages with 16 high-resolution images) take longer to load over the network than local builds. The 60s/45s/30s timeouts for CI prevent flaky test failures.

---

## CI/CD Pipelines

Three GitHub Actions workflows power the CI/CD. All are in `.github/workflows/`.

### Pipeline Diagram

```
PR Pipeline (pr.yml)          Deploy Pipeline (deploy.yml)        Rollback (rollback.yml)
========================      ==============================      ======================
trigger: pull_request         trigger: push to main               trigger: manual
                              trigger: workflow_dispatch

  setup                         setup                             discover-versions
    |                             |                                    |
    v                             v                               execute-rollback
 --------                      --------                           (env: production)
|        |                    |        |                               |
lint  typecheck               lint  typecheck                    verify-rollback
unit  security    build       unit  security    build
tests  audit       |          tests  audit       |
 --------         |            --------          |
     \           /                \     |       /
      v         v                  v    v      v
    e2e-tests                  semantic-release
  (uses build                        |
   artifact)                      deploy
                              (env: production)
                                     |
                                  verify
                                     |
                              regression-tests
```

### 1. PR Validation Pipeline (`pr.yml`)

**Trigger:** Pull requests targeting `main`

**Concurrency:** Groups by PR number with `cancel-in-progress: true`. Pushing new commits to the same PR automatically cancels the running pipeline and starts fresh.

**Jobs:**

| Job | Depends On | Runs | Purpose |
|:----|:-----------|:-----|:--------|
| `setup` | - | `npm ci` | Install dependencies, populate cache |
| `lint` | setup | `npm run lint` | ESLint validation |
| `typecheck` | setup | `npm run typecheck` | TypeScript type checking |
| `unit-tests` | setup | `npm test` | Vitest unit tests |
| `security-audit` | setup | `npm audit --audit-level=critical` | Dependency vulnerability scan (non-blocking) |
| `build` | setup | `npm run build` | Next.js production build, packages and uploads `.next` artifact |
| `e2e-tests` | all of the above | `npx playwright test` | Downloads build artifact, runs Playwright against local server |

**Key features:**

- **Parallel quality gates:** `lint`, `typecheck`, `unit-tests`, `security-audit`, and `build` all run simultaneously after `setup`
- **Build artifact reuse:** The `build` job compresses `.next` into a tarball (`tar -czf`) and uploads it; `e2e-tests` downloads and extracts it, saving ~60s of build time
- **Browser caching:** Playwright Chromium binaries are cached by version to avoid repeated ~200 MB downloads
- **Security audit is non-blocking:** Uses `continue-on-error: true` to prevent failing PRs on known advisory issues
- **E2E runs last:** Only after all quality gates AND the build succeed -- no wasted compute on broken code

> **Why tarball?** The `.next` directory contains thousands of small files. GitHub's artifact upload is unreliable with many small files and can fail intermittently. Compressing to a single `.tar.gz` file before upload makes the transfer reliable.

### 2. Deploy Pipeline (`deploy.yml`)

**Trigger:** Push to `main` OR manual `workflow_dispatch`

**Concurrency:** Groups by branch ref with `cancel-in-progress: false`. Deployments are never cancelled mid-flight to prevent partial deploys.

**Jobs:**

| Job | Depends On | Purpose |
|:----|:-----------|:--------|
| `setup` | - | Install dependencies, populate cache |
| `lint` | setup | ESLint validation |
| `typecheck` | setup | TypeScript type checking |
| `unit-tests` | setup | Vitest unit tests |
| `security-audit` | setup | Dependency vulnerability scan (non-blocking) |
| `build` | setup | Build, prune dev deps, create `release.zip` |
| `semantic-release` | build + all quality gates | Version bump, changelog, git tag, GitHub release |
| `deploy` | build + semantic-release | Deploy `release.zip` to Azure (requires `production` env approval) |
| `verify` | deploy | Poll `/api/health` for 3 consecutive healthy responses |
| `regression-tests` | verify | Full Playwright E2E suite against live production URL |

**Build & Package Process:**

```
npm run build
    |
npm prune --omit=dev          # Remove devDependencies from node_modules
    |
mkdir release/                 # Create deployment package
  ├── .next/                   # Compiled Next.js output
  ├── public/                  # Static assets (images, etc.)
  ├── node_modules/            # Production-only dependencies
  ├── package.json
  ├── server.js                # Custom production server
  └── next.config.js
    |
zip -r release.zip             # Single deployable archive
```

**Health Check Verification:**

After deployment, the `verify` job polls `https://bnoon.sa/api/health`:
- Maximum 30 attempts, 10 seconds apart (up to 5 minutes)
- Requires 3 **consecutive** `{"status": "healthy"}` responses
- Non-consecutive healthy responses reset the counter
- Validates both HTTP 200 status AND JSON `status` field
- Fails the pipeline if health checks don't pass

**Regression Tests:**

After verification, Playwright runs the full E2E suite against the live production URL. This catches issues that only manifest in production (CDN behavior, DNS, SSL, environment-specific config).

### 3. Rollback Pipeline (`rollback.yml`)

**Trigger:** Manual `workflow_dispatch` only

**Inputs:**

| Input | Required | Description |
|:------|:---------|:------------|
| `target_version` | No | Git tag to rollback to (e.g., `v1.2.3`). Defaults to previous version |
| `rollback_reason` | Yes | Reason for rollback (audit trail) |

**How it works:**

1. Lists the 10 most recent `v*` tags with dates and commit SHAs
2. If `target_version` is provided, validates the tag exists; otherwise auto-selects the second-latest tag
3. Checks out the exact commit of the rollback tag
4. Performs a full `npm ci` + `npm run build` (rebuilds from source at that commit)
5. Deploys to Azure (requires `production` environment approval)
6. Runs the same health check verification (3 consecutive healthy responses)
7. Records rollback details in the Actions summary

---

## Caching Strategy

The pipelines use multiple caching layers to minimize build times:

| Cache | Key Strategy | What's Cached | Typical Savings |
|:------|:-------------|:--------------|:----------------|
| **node_modules** | `node-modules-{OS}-{hash(package-lock.json)}` | All npm dependencies | ~30s install |
| **Next.js build** | `nextjs-cache-{OS}-{hash(package-lock.json)}-{hash(src/**/*)}` | `.next/cache/` (webpack, ISR, image opt.) | ~20-40s build |
| **Playwright browsers** | `playwright-{OS}-{playwright-version}` | `~/.cache/ms-playwright/` (~200 MB) | ~15-20s download |
| **Build artifact** (PR) | Uploaded/downloaded between jobs | `.next/` directory (tarball) | ~60s (avoids rebuild) |

**Cache invalidation:**
- `node_modules` busts when `package-lock.json` changes
- Next.js build cache busts when source files change, with cascading fallback keys
- Playwright cache busts when the Playwright package version changes

---

## Semantic Versioning

Automated via [semantic-release](https://github.com/semantic-release/semantic-release) on every push to `main`.

### What is semantic-release?

Semantic-release is a tool that reads your commit messages and **automatically decides the next version number**. You never manually edit the version in `package.json` -- it does it for you.

It follows [Semantic Versioning](https://semver.org/) (SemVer): `MAJOR.MINOR.PATCH`

- **MAJOR** (1.0.0 → **2**.0.0): Breaking changes that require consumers to update
- **MINOR** (1.0.0 → 1.**1**.0): New features that are backwards-compatible
- **PATCH** (1.0.0 → 1.0.**1**): Bug fixes that are backwards-compatible

### How versions are determined

| Commit Prefix | Release Type | Version Example |
|:--------------|:-------------|:----------------|
| `feat:` | Minor | 1.0.6 → 1.**1**.0 |
| `fix:` | Patch | 1.0.6 → 1.0.**7** |
| `perf:` | Patch | 1.0.6 → 1.0.**7** |
| `refactor:` | Patch | 1.0.6 → 1.0.**7** |
| `feat!:` or `BREAKING CHANGE:` | Major | 1.0.6 → **2**.0.0 |
| `chore:`, `style:`, `test:`, `docs:`, `ci:` | **No release** | Version unchanged |

> **Important:** If all commits since the last release are `ci:`, `docs:`, `test:`, etc., **no new version is created and no deployment happens**. The pipeline completes but skips the deploy step.

### What happens on release

1. **Commit analysis** -- scans commits since the last tag using Conventional Commits
2. **Version bump** -- updates `version` in `package.json` and `package-lock.json`
3. **Changelog** -- generates/updates `CHANGELOG.md` with grouped entries
4. **Git commit** -- commits changes with `chore(release): X.Y.Z [skip ci]`
5. **Git tag** -- creates `vX.Y.Z` tag
6. **GitHub Release** -- creates a GitHub release with release notes

### Plugin chain

```
@semantic-release/commit-analyzer         → Determine version bump type
@semantic-release/release-notes-generator  → Generate release notes
@semantic-release/changelog               → Update CHANGELOG.md
@semantic-release/npm                     → Bump package.json version (no npm publish)
@semantic-release/git                     → Commit version files & tag
@semantic-release/github                  → Create GitHub release
```

> The release config (`.releaserc.json`) is generated by the pipeline if it doesn't exist. You should not need to edit it.

---

## Azure Infrastructure

This project spans **two Azure subscriptions**. Understanding the layout helps when debugging, scaling, or managing costs.

### Landing Page — "Azure subscription 1"

| Resource | Type | Resource Group | Location | SKU |
|:---------|:-----|:---------------|:---------|:----|
| `bnoon` | Web App | `test` | Canada Central | - |
| `ASP-test-be47` | App Service Plan | `test` | Canada Central | S1 Standard |
| `appointments` | App Service Plan (**empty, 0 apps**) | `appointment` | - | S1 Standard |
| `bnoon` | Storage Account | `Bnoon.sa` | East US | Standard_GRS |

> **Cost note:** The `appointments` App Service Plan has **0 web apps** attached but is still billed as S1 Standard. It can be deleted to save cost:
> ```bash
> az account set --subscription "Azure subscription 1"
> az appservice plan delete --name appointments --resource-group appointment
> ```

**Web App configuration:**

| Setting | Value |
|:--------|:------|
| App Service | `bnoon` |
| App Service Plan | `ASP-test-be47` (S1 Standard, 1 site) |
| Platform | Azure App Service (Linux) |
| Runtime | `NODE\|20-lts` |
| Always On | Yes |
| HTTPS Only | Yes |
| Custom Domains | `bnoon.sa`, `www.bnoon.sa` |
| Entry point | `server.js` (custom Node.js HTTP server) |
| Deploy method | ZIP deploy via `azure/webapps-deploy@v3` |

**Blob Storage (`bnoon` storage account):**

| Container | Public Access | Purpose |
|:----------|:-------------|:--------|
| `website` | Public (container-level) | Videos at `website/videos/`, uploaded assets |
| `deployments` | Private | Deployment history |
| `$web` | - | Static website hosting (unused) |

> **Important:** Images are served locally from `public/images/`, NOT from blob storage. Only **videos** are served from `https://bnoon.blob.core.windows.net/website/videos/`. The storage account is in **East US** while the web app is in **Canada Central** -- cross-region latency is acceptable for videos but was too slow for images (which is why an earlier image migration to blob was reverted).

### Telehealth Apps — "Microsoft Azure Sponsorship"

The booking app, API, and admin console run on a separate subscription and shared App Service Plan:

| App | Custom Domain | Runtime | Always On | Plan |
|:----|:-------------|:--------|:----------|:-----|
| `bnoon-telehealth` | `book.bnoon.sa` | `DOCKER\|bnoon.azurecr.io/telehealth:1.5.2` | No | `bnoon-telehealth-plan` |
| `bnoon-api` | `api.bnoon.sa` | `DOCKER\|bnoon.azurecr.io/api:1.6.0` | Yes | `bnoon-telehealth-plan` |
| `bnoon-console` | `console.bnoon.sa` | `DOCKER\|bnoon.azurecr.io/console:1.5.3` | Yes | `bnoon-telehealth-plan` |

| Resource | Details |
|:---------|:--------|
| Plan | `bnoon-telehealth-plan` (S1 Standard, 3 sites) |
| Resource Group | `bnoon-telehealth-rg` |
| Location | **UAE North** |
| Container Registry | `bnoon.azurecr.io` |

The landing page links to `book.bnoon.sa` for appointment booking via the [booking URL utility](#booking-url-routing).

> **Note:** These apps use Docker container deployments (from Azure Container Registry), unlike the landing page which uses ZIP deploy. They are managed through Azure DevOps pipelines, not GitHub Actions.

### Deployment mechanism

The `release.zip` archive is deployed using Azure's ZIP deploy API via the `azure/webapps-deploy` GitHub Action. Authentication uses an Azure Publish Profile stored as a GitHub secret (`AZURE_PUBLISH_PROFILE`).

### Environment approval

Both `deploy` and `execute-rollback` jobs reference the `production` GitHub environment, which can be configured with:
- **Required reviewers** -- manual approval before deploy
- **Wait timer** -- delay before auto-approval
- **Branch protection** -- restrict which branches can deploy

Configure at: **GitHub repo > Settings > Environments > production**

---

## Environment Variables & Secrets

### GitHub Actions Secrets

| Secret | Used In | Purpose |
|:-------|:--------|:--------|
| `AZURE_PUBLISH_PROFILE` | deploy, rollback | Azure App Service publish profile XML |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | build | reCAPTCHA v2 site key (embedded in client bundle at build time) |
| `GITHUB_TOKEN` | semantic-release | Auto-provided by GitHub for creating releases and tags |

### Azure App Service Configuration

| Variable | Purpose |
|:---------|:--------|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA site key for client-side form protection |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA secret key for server-side token verification |
| `PORT` | Automatically set by Azure App Service |

### Global CI Environment Variables

| Variable | Value | Purpose |
|:---------|:------|:--------|
| `NEXT_TELEMETRY_DISABLED` | `1` | Disable Next.js anonymous telemetry in CI |
| `AZURE_WEBAPP_NAME` | `bnoon` | Azure App Service name |
| `SITE_URL` | `https://bnoon.sa` | Production URL for health checks and regression tests |

---

## Code Quality & Lint

The project enforces code quality through:

1. **ESLint** (`next/core-web-vitals` ruleset) -- catches common React and Next.js anti-patterns
2. **TypeScript strict mode** -- all strict compiler flags enabled (`tsconfig.json`)
3. **CI enforcement** -- lint and typecheck run on every PR and deploy

**Key refactoring completed:**

| Area | What Changed | Impact |
|:-----|:-------------|:-------|
| `<img>` → `<Image>` | 71 component files converted to `next/image` | Better performance (AVIF/WebP, lazy loading, CLS prevention) |
| Booking URLs | Hardcoded URLs replaced with `getBookingUrl()` utility | Centralized, branch-specific routing |
| Font loading | English fonts self-hosted from Google Fonts CDN | Reliable CI builds, no network dependency |

---

## Troubleshooting

### Build fails with font download error

English fonts are self-hosted in `src/fonts/`. If you see Google Fonts-related errors, ensure you're importing from `next/font/local` (not `next/font/google`) for English.

### E2E tests timeout in CI

Production pages (especially `/our-experts` with 16 doctor images) need longer timeouts. The config automatically applies 60s/45s/30s timeouts when `E2E_BASE_URL` is not `localhost`. If tests still timeout, increase the values in `playwright.config.ts`.

### Artifact upload/download fails in PR pipeline

The `.next` directory contains thousands of small files. The pipeline compresses it to a tarball before upload. If you see artifact errors, ensure the `tar -czf` step in the `build` job and `tar -xzf` step in the `e2e-tests` job are both present in `pr.yml`.

### Deployment verification fails (health check)

The verify job requires 3 **consecutive** healthy responses from `/api/health`. Common causes:
- Azure App Service is still restarting (cold start can take 30-60s)
- The `version` field in the health response doesn't match expectations
- Container startup failed -- check Azure App Service logs

### No new version after merging to main

If your commits only use `ci:`, `docs:`, `test:`, `chore:`, or `style:` prefixes, semantic-release will not create a new version. Use `feat:` or `fix:` prefixes for changes that should trigger a release.

### Git remotes

| Remote | URL | Purpose |
|:-------|:----|:--------|
| `github` | `github.com/bnoon-ksa/landing-page` | Primary (CI/CD pipelines run here) |
| `azure` | `dev.azure.com/ovasave-production/bnoon/_git/landing-page` | Azure DevOps mirror |

### Routing

The root path `/` redirects to `/ar` (Arabic) via `next.config.js` redirects. The site serves two locales:

- `/ar/*` -- Arabic (RTL, Cairo + Alexandria fonts)
- `/en/*` -- English (LTR, Plus Jakarta Sans font)
