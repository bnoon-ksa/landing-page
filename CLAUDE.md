# CLAUDE.md — Bnoon Landing Page

This file provides context for AI assistants working on the Bnoon (Doutor) landing page codebase.

## Project Overview

Bilingual (Arabic/English) marketing and appointment-booking website for **Bnoon Fertility & Women's Health Centers** in Saudi Arabia. Production URL: `https://bnoon.sa`, Booking URL: `https://book.bnoon.sa`.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Runtime:** Node.js 20.x
- **UI:** React 18.3 + React Bootstrap (Bootstrap 5)
- **Styling:** SCSS/CSS (Bootstrap 5 customization, no Tailwind)
- **Animation:** Framer Motion
- **Database:** MongoDB via Mongoose
- **Email:** Nodemailer (Gmail SMTP)
- **Spam Protection:** Google reCAPTCHA v2
- **Image Processing:** Sharp (AVIF/WebP)
- **Hosting:** Azure App Service (Linux)
- **CI/CD:** GitHub Actions

## Quick Commands

```bash
npm run dev            # Start dev server
npm run build          # Production build
npm start              # Start production server (node server.js)
npm run lint           # ESLint (next lint)
npm run typecheck      # TypeScript check (tsc --noEmit)
npm test               # Unit tests (vitest run)
npm run test:watch     # Unit tests in watch mode
npm run test:coverage  # Unit tests with coverage
npm run test:e2e       # E2E tests (playwright)
```

## Project Structure

```
src/
├── app/
│   ├── api/                 # API routes (8 endpoints)
│   │   ├── health/          # GET  - health check
│   │   ├── send-appointment/    # POST - English appointment
│   │   ├── send-appointment-ar/ # POST - Arabic appointment
│   │   ├── send-feedback/       # POST - English feedback
│   │   ├── send-feedback-ar/    # POST - Arabic feedback
│   │   ├── subscribe/           # POST - English newsletter
│   │   └── subscribe-ar/        # POST - Arabic newsletter
│   ├── ar/                  # Arabic pages (~39 pages)
│   ├── en/                  # English pages (~40 pages)
│   └── layout.tsx           # Root layout
├── components/
│   ├── ar/                  # Arabic-specific components
│   │   ├── ArabicMeta/      # Arabic metadata/SEO
│   │   ├── Common/          # Reusable Arabic components
│   │   ├── Layout/          # Arabic layout (Navbar, Footer)
│   │   ├── HomeDemo1/       # Arabic home template 1
│   │   └── HomeDemo2/       # Arabic home template 2
│   ├── Common/              # Shared components (doctors, sections)
│   ├── Layout/              # English layout (Navbar, Footer)
│   ├── HomeDemo1/           # English home template 1
│   └── HomeDemo2/           # English home template 2
├── models/                  # Mongoose schemas (4 models)
├── lib/                     # Utility libraries (DB connection)
├── utils/                   # Helper functions (booking URLs)
├── styles/                  # SCSS/CSS files
├── fonts/                   # Font definitions
├── test/                    # Test setup (setup.ts)
└── middleware.ts            # Booking redirect middleware
```

## Architecture Conventions

### Internationalization

- **File-based routing** — no i18n library. Arabic pages live under `src/app/ar/`, English under `src/app/en/`.
- Arabic-specific components are in `src/components/ar/`. English/shared components are in `src/components/`.
- Separate CSS files for Arabic (`arabic.css`, `arabic-responsive.css`) handle RTL styling.
- The root `/` redirects to `/ar` (Arabic is the default locale) via `next.config.js`.

### Components

- Almost all components (134 of ~149) use the `"use client"` directive.
- No global state management — only local `useState` and props drilling.
- No React Context, Redux, Zustand, or similar.
- Data is sent directly to API routes via `fetch`.

### Styling

- Bootstrap 5 SCSS customization via `src/styles/_variables.scss`.
- Main stylesheet: `src/styles/style.scss` (compiled to `style.css`).
- Responsive styles in `responsive.scss`.
- Primary color: `#336AEA`, Secondary: `#10B981`.
- Default transition: `0.7s`.

### Path Alias

Use `@/` to reference `src/`:

```ts
import { something } from '@/utils/booking';
```

### API Routes

- All API routes are in `src/app/api/`.
- Appointment and feedback routes save to MongoDB and send email via Nodemailer.
- The `subscribe` endpoints handle newsletter signups with unique email constraint.
- Health endpoint returns `{status, version, uptime, timestamp}`.

### Middleware

- `src/middleware.ts` handles booking redirects when `USE_NEW_BOOKING_APP=true`.
- Matcher: `/en/request-an-appoinment` and `/ar/request-an-appoinment` (note the intentional typo in "appoinment" — do not fix this as it is a live URL).
- Supports location-specific redirects via `?location=` query param.

### Images

- Use Next.js `<Image>` component for all images.
- Remote images allowed from Azure Blob Storage domains.
- Image formats: AVIF and WebP with 30-day cache TTL.
- Static assets in `public/images/` (~275 files).

## Environment Variables

Copy `.env.example` and fill in values:

```
MONGODB_URI=              # MongoDB connection string
SMTP_USER=                # Gmail SMTP username
SMTP_PASS=                # Gmail SMTP app password
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=  # reCAPTCHA v2 site key (client)
RECAPTCHA_SECRET_KEY=     # reCAPTCHA v2 secret key (server)
```

Additional server-side variables (set in Azure App Settings):

- `USE_NEW_BOOKING_APP` — `"true"` to redirect appointment pages to book.bnoon.sa
- `STANDALONE` — `"true"` for standalone Next.js output mode
- `PORT` — server port (default 3000)
- `NEXT_PUBLIC_CDN_URL` — optional CDN URL

## Testing

### Unit Tests (Vitest)

- Config: `vitest.config.ts` — jsdom environment, globals enabled.
- Test files: `src/**/*.test.{ts,tsx}`.
- Setup: `src/test/setup.ts` imports `@testing-library/jest-dom`.
- Existing tests cover: middleware, robots.txt, sitemap, health endpoint, booking utils.

### E2E Tests (Playwright)

- Config: `playwright.config.ts` — Chromium only.
- Test files: `e2e/*.spec.ts`.
- Local base URL: `http://localhost:3099` (auto-starts Next.js server).
- CI uses `E2E_BASE_URL` env var.
- Test suites: health, navigation, footer/navbar, forms, SEO, performance, error handling.

## CI/CD Pipeline

Three GitHub Actions workflows in `.github/workflows/`:

1. **pr.yml** — PR validation (lint, typecheck, unit tests, security audit, build, E2E)
2. **deploy.yml** — Production deployment to Azure App Service with semantic release
3. **rollback.yml** — Manual rollback capability

PR pipeline runs these jobs in order:

1. Setup (install + cache)
2. Parallel: lint, typecheck, unit tests, security audit, build
3. E2E tests (after all parallel jobs pass)

## Git & Versioning

- **Branching:** PRs target `main`.
- **Versioning:** Semantic Release (auto-generates CHANGELOG.md).
- **Commit style:** Conventional Commits (`feat:`, `fix:`, `chore:`, etc.).
- Current version: `1.3.2` (defined in `package.json`).
- No pre-commit hooks (no husky).

## Key Gotchas

- The URL path `request-an-appoinment` has a typo ("appoinment" instead of "appointment"). This is intentional — it's a live URL. Do not "fix" it.
- `server.js` is a custom Node HTTP server used in production (`npm start`), not the default Next.js server.
- The project name in `package.json` is `"doutor"` (legacy name), the brand is **Bnoon**.
- Arabic is the default locale — the root `/` redirects to `/ar`.
- Most components are client components (`"use client"`). Server components are rare in this codebase.
- `.js` and `.tsx` files are mixed in API routes — some older routes use `.js`.

## Known Issues & Technical Debt

A full code audit is documented in `AUDIT.md`. Below is a summary of the most important open issues, grouped by priority. When working on this codebase, be aware of these and avoid introducing more of the same.

### Critical (Security)

- **No server-side reCAPTCHA validation** — the token is collected client-side but never verified server-side in appointment/feedback routes.
- **No input validation on API routes** — all 6 POST endpoints accept arbitrary input with no schema validation (Zod or similar).
- **HTML injection risk** — user input is interpolated into HTML email templates without sanitization in `send-appointment` and `send-feedback` routes.
- **`dangerouslySetInnerHTML` in 24 files** — used for rendering content without sanitization.
- **API routes expose raw `error.message`** to clients instead of generic error messages.
- **Missing security headers** — no CSP, HSTS, X-Frame-Options, or Permissions-Policy in `next.config.js`.

### High (Architecture)

- **Massive EN/AR code duplication** — the `components/ar/` directory is a near-complete copy of `components/` with only text changes. An i18n library (e.g., `next-intl`) would eliminate ~12,000 lines of duplication.
- **Root layout hardcodes `lang="ar" dir="rtl"`** — English pages flash with RTL layout until client JS overrides it.
- **God components** — `AppointmentSection.tsx` (~1,500 lines, 27+ `useState` hooks), `FertilityTabs.tsx` (646 lines), `Navbar.tsx` (447 lines).
- **Mixed file extensions** — appointment/feedback API routes are `.js` (no type safety), while subscribe/health routes are `.ts`.
- **No service layer** — business logic (DB save, email send, validation) lives directly in route handlers.
- **No shared TypeScript interfaces** — data shapes are defined implicitly by Mongoose schemas in `.js` files.
- **Doctor pages** — 36 nearly-identical page+component file pairs that should be a single dynamic route with `generateStaticParams`.

### Medium (Performance / DX)

- **131 `"use client"` components** — many static-content-only components could be Server Components.
- **No scroll throttling** — `GoTop.tsx`, `Navbar.tsx`, `HeroBanner.tsx` have unthrottled scroll listeners.
- **Heavy libraries not lazy-loaded** — `PDFViewer`, Swiper should use `next/dynamic`.
- **43,670 lines of CSS** — includes both SCSS source and compiled output; unused styles likely present.
- **`SearchBar.tsx` uses `alert()`** instead of UI feedback.
- **Direct DOM manipulation** — `document.querySelector` / `classList` used instead of React state/refs.
- **Duplicate MongoDB connection logic** — `subscribe/route.ts` has its own inline `connectDB`, duplicating `lib/mongodb.ts`.

### Open Issues

| Issue                                                      | Description                                         |
| ---------------------------------------------------------- | --------------------------------------------------- |
| [#67](https://github.com/bnoon-ksa/landing-page/issues/67) | Runtime feature flag for booking redirect           |
| [#65](https://github.com/bnoon-ksa/landing-page/issues/65) | Add refer-a-patient page                            |
| [#26](https://github.com/bnoon-ksa/landing-page/issues/26) | Comprehensive code audit report                     |
| [#7](https://github.com/bnoon-ksa/landing-page/issues/7)   | Self-host Arabic fonts, remove test artifacts       |
| [#6](https://github.com/bnoon-ksa/landing-page/issues/6)   | Azure infrastructure details in README              |
| [#5](https://github.com/bnoon-ksa/landing-page/issues/5)   | Restore local images, branch-specific booking URLs  |
| [#3](https://github.com/bnoon-ksa/landing-page/issues/3)   | PR validation CI pipeline                           |
| [#2](https://github.com/bnoon-ksa/landing-page/issues/2)   | Security, performance, SEO, error handling overhaul |
| [#1](https://github.com/bnoon-ksa/landing-page/issues/1)   | Book appointment redirect                           |

For the full prioritized TODO checklist with file-level references, see `AUDIT.md`.
