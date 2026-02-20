# Bnoon Landing Page — Code Review & Best Practices Audit

**Date:** 2026-02-12
**Reviewer:** Senior Software Architect (automated audit)
**Scope:** Full codebase review of `bnoon-lp` (255 source files)

---

## Executive Summary

The Bnoon LP is a bilingual (Arabic/English) Next.js 14 marketing site for a fertility clinic chain in Saudi Arabia. It serves static content pages, doctor profiles, appointment/feedback forms (MongoDB + Nodemailer), and email subscriptions. The codebase is functional but suffers from **massive code duplication** (EN/AR mirrored 1:1 instead of i18n), **critical XSS vectors** in 24 files, **zero input validation** on all API routes, and **no unit test coverage** beyond a single health-check test. The architecture lacks abstraction layers, with most components being monolithic and tightly coupled to hardcoded data.

### Key Metrics

| Metric                                | Value                 |
| ------------------------------------- | --------------------- |
| Total source files                    | 255 (.ts/.tsx/.js)    |
| `"use client"` directives             | 131 files (51%)       |
| `dangerouslySetInnerHTML` usage       | 24 files              |
| `console.error` in production code    | 14 instances          |
| `any` type usage                      | 2 files               |
| `@ts-expect-error` / `eslint-disable` | 3 files               |
| `TODO` / unimplemented code           | 7 files               |
| Unit test files                       | 1 (health route only) |
| E2E test files                        | 7                     |
| CSS file total lines                  | 43,670                |

---

## 1. SOLID Principles

### Current State

The codebase is almost entirely procedural — components are flat functions with inline data, inline styles, and no abstractions. There are no services, no interfaces beyond a few Mongoose schemas, and no dependency injection.

### Issues Found

#### Single Responsibility Violations

- **`src/components/Common/AppointmentSection.tsx`** (~1,500 lines): God component handling form state (27+ `useState` hooks), dropdown rendering, validation, API submission, animations, and custom CSS — all in a single file.
- **`src/components/Common/SearchBar.tsx`** (~380 lines): Manages dropdown state, doctor-to-URL mapping, route navigation, IntersectionObserver animations, and 180+ lines of inline CSS.
- **`src/components/Layout/Navbar.tsx`** (~447 lines): Handles sticky scroll detection, mobile menu toggling, language switching, Bootstrap dynamic import, route matching, and 160+ lines of inline CSS.
- **`src/app/api/subscribe/route.ts`** and `subscribe-ar/route.ts`: Define Mongoose schema, connection logic, AND HTTP handler in the same file — duplicated across EN/AR variants.

#### Open/Closed Violations

- Adding a new clinic branch requires modifying appointment route handlers (`send-appointment/route.js`, `send-appointment-ar/route.js`), the `SearchBar` component, and the `AppointmentSection` — no extension points exist.
- Adding a new doctor requires modifying 4+ components: `OurDoctors`, `SearchBar`, `AppointmentSection` (dropdown list), and creating a new page + component file.

#### Interface Segregation Violations

- No prop interfaces on most components — they accept no props at all and hold all data internally, making reuse impossible.
- `PatientsFeedbacks` accepts optional `feedbacks` and `stats` props but also has hardcoded defaults, creating confusion about the data source.

#### Dependency Inversion Violations

- API routes directly instantiate `nodemailer.createTransport()` — no email service abstraction.
- Mongoose models are imported directly in route handlers — no repository layer.
- MongoDB connection logic exists in both `src/lib/mongodb.ts` AND inline in `subscribe/route.ts` (two different implementations).

### Priority: **High**

---

## 2. Design Patterns

### Current State

No design patterns are applied. The codebase is a collection of standalone components with hardcoded data.

### Issues Found

#### Missing Patterns

| Pattern        | Where It Should Be Applied                                                                                |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **Repository** | All MongoDB operations scattered across 6 API routes with no abstraction                                  |
| **Strategy**   | Branch-to-email mapping in appointment routes uses if/else chains instead of a lookup map                 |
| **Factory**    | Doctor profile components (18 near-identical files) should use a single factory component with data props |
| **Adapter**    | Nodemailer usage coupled directly into route handlers — should be wrapped in an EmailService adapter      |
| **Facade**     | Form submission logic (validate → save to DB → send email → respond) repeated in 4 route files            |

#### Anti-Patterns Present

- **Prop Drilling Avoidance via Hardcoding**: Instead of passing data through props, every component hardcodes its own data (doctors, FAQs, clinic info). This prevents reuse entirely.
- **Copy-Paste Inheritance**: The entire `components/ar/` directory is a near-complete copy of `components/` with text changes. ~120 component files exist where ~60 would suffice with i18n.
- **God Components**: `AppointmentSection.tsx` (1,500 lines), `FertilityTabs.tsx` (646 lines), `Navbar.tsx` (447 lines).
- **Magic Strings**: Branch names (`"Riyadh"`, `"الرياض"`, `"Jeddah"`, `"جدة"`) used as routing keys with no enum or constant.

### Priority: **High**

---

## 3. OOP & Code Organization

### Current State

No classes, services, or encapsulated modules. Everything is functional components or plain route handlers.

### Issues Found

- **No service layer**: Business logic (save to DB, send email, validate) lives directly in Next.js route handlers.
- **No shared types**: Appointment data shape is implicitly defined by Mongoose schemas in `.js` files — no TypeScript interfaces for request/response contracts.
- **Feature boundaries non-existent**: Doctor profiles, appointments, feedback, subscriptions are all mixed under `Common/` with no module grouping.
- **Inconsistent file extensions**: API routes mix `.ts` (subscribe, health) and `.js` (appointment, feedback) — the `.js` files have zero type safety.

**Recommendation**: Create `src/services/`, `src/types/`, and `src/constants/` directories. Move business logic to services, define shared TypeScript interfaces, and centralize constants.

### Priority: **Medium**

---

## 4. DRY (Don't Repeat Yourself)

### Current State

This is the **single biggest problem** in the codebase. The entire component tree is duplicated for Arabic and English.

### Issues Found

#### Critical Duplication

| Duplicated Item    | EN Location                                | AR Location                                   | Lines Duplicated |
| ------------------ | ------------------------------------------ | --------------------------------------------- | ---------------- |
| Navbar             | `components/Layout/Navbar.tsx`             | `components/ar/Layout/Navbar.tsx`             | ~450 lines       |
| Footer             | `components/Layout/Footer.tsx`             | `components/ar/Layout/Footer.tsx`             | ~350 lines       |
| AppointmentSection | `components/Common/AppointmentSection.tsx` | `components/ar/Common/AppointmentSection.tsx` | ~1,500 lines     |
| SearchBar          | `components/Common/SearchBar.tsx`          | `components/ar/Common/SearchBar.tsx`          | ~440 lines       |
| FeedbackSection    | `components/Common/FeedbackSection.tsx`    | `components/ar/Common/FeedbackSection.tsx`    | ~200 lines       |
| 18 Doctor profiles | `components/Common/Dr*.tsx` (×18)          | `components/ar/Common/Dr*.tsx` (×18)          | ~200 each        |
| Subscribe API      | `api/subscribe/route.ts`                   | `api/subscribe-ar/route.ts`                   | ~50 lines        |
| Appointment API    | `api/send-appointment/route.js`            | `api/send-appointment-ar/route.js`            | ~65 lines        |
| Feedback API       | `api/send-feedback/route.js`               | `api/send-feedback-ar/route.js`               | ~80 lines        |

**Estimated duplicated code: ~12,000+ lines** that could be eliminated with proper i18n.

#### Other Duplication

- MongoDB `connectDB()` function exists in `lib/mongodb.ts` AND inline in `subscribe/route.ts` and `subscribe-ar/route.ts`.
- `nodemailer.createTransport()` is created identically in 4 API routes.
- IntersectionObserver setup code is copy-pasted across 10+ components.
- Custom dropdown implementation repeated in `AppointmentSection`, `SearchBar`, and `FeedbackSection`.

### Priority: **Critical**

---

## 5. Maintainability

### Current State

The codebase is difficult to maintain due to TypeScript strictness gaps, inconsistent naming, scattered inline styles, and minimal testing.

### Issues Found

#### TypeScript Strictness

- **`err: any`** used in `subscribe/route.ts:35` and `subscribe-ar/route.ts:45`.
- **4 API routes are plain `.js`** files (`send-appointment`, `send-appointment-ar`, `send-feedback`, `send-feedback-ar`) with zero type safety.
- **`@ts-expect-error`** in both Navbar files (line 17) for Bootstrap dynamic import.
- **`eslint-disable-next-line no-var`** in `lib/mongodb.ts:9` (acceptable for global cache pattern).
- **`react/no-unescaped-entities` disabled** globally in `.eslintrc.json`.

#### Naming Conventions

- Inconsistent casing: `Jeddaharea.tsx` vs `AlahsaArea.tsx` vs `Riyadharea.tsx`.
- Typo in route: `request-an-appoinment` (should be `appointment`).
- File naming: `page - Copy.tsx` exists in `en/bnoon-jeddah/` — dead file.
- Non-English comments in code: Hinglish comments found in AR components (e.g., "apny hisab se adjust karlena", "yahan new email dal do", "ek line me rakhe").
- Package name is `"doutor"` in `package.json` — does not match project name `bnoon-lp`.

#### File Structure Issues

- Components organized by language (`components/` vs `components/ar/`) instead of by feature.
- No barrel exports (`index.ts`) — each import must reference the full path.
- Unused utility files at project root: `dummy.txt`, `git`, `main`, `npm` (empty files).
- `convert-to-client.js` is a one-time migration script committed to the repo.
- `comparison/` directory with local screenshots committed (even though in `.gitignore`).
- SCSS files exist (`_variables.scss`, `style.scss`, `responsive.scss`) alongside compiled CSS — unclear which is the source of truth.

#### Error Handling

- All API routes use generic `catch` blocks returning `error.message` to the client — **leaks internal details**.
- No custom error classes or error codes.
- No retry logic for MongoDB connection or email sending.
- `alert()` used in `SearchBar.tsx` instead of proper UI feedback.

#### Testing

- **1 unit test file** (`health/route.test.ts` — 4 tests).
- **0 unit tests** for any component, API route business logic, model, or utility.
- **7 E2E test files** covering navigation, SEO, and basic form existence — but **no actual form submission tests**.
- No test for email sending, MongoDB operations, or reCAPTCHA validation.
- Vitest `setupFiles` references `src/test/setup.ts` which only imports `@testing-library/jest-dom`.

#### Documentation

- No JSDoc on any function, component, or API route.
- No TypeScript interfaces exported for API request/response shapes.
- Unused README is comprehensive but references a project structure that doesn't match actual code.

### Priority: **High**

---

## 6. Security

### Current State

The application has **multiple critical security vulnerabilities** that need immediate attention.

### Issues Found

#### Critical: XSS via `dangerouslySetInnerHTML` (24 files)

All content is currently hardcoded (not user-generated), but the pattern is dangerous and fragile:

- `components/Common/HowItWorks.tsx:87` — renders `step.description` as HTML
- `components/Common/FertilityTabs.tsx` — 11+ instances of `dangerouslySetInnerHTML`
- `components/Common/TelemedicineSection.tsx` — HTML content rendered unsanitized
- `components/Layout/Footer.tsx:270` — compliance badge HTML
- `components/HomeDemo2/HeroBanner.tsx:142-171` — slide content as raw HTML
- `components/HomeDemo2/AboutUs.tsx:119-122` — title and description
- `components/HomeDemo1/FrequentlyAskedQuestions.tsx:102` — FAQ answers
- Both layout files (`ar/layout.tsx:51`, `en/layout.tsx:58`) — Google Analytics script
- And 15+ more files in the Arabic component tree

#### Critical: No Input Validation on API Routes

- **`send-appointment/route.js`**: Accepts raw JSON body, saves directly to MongoDB, and interpolates into HTML email — **no validation, no sanitization**.
- **`send-feedback/route.js`**: Same issue — `data.feedbackDetails` and `data.story` injected into email HTML without escaping.
- **`subscribe/route.ts`**: Email field not validated beyond existence check — no format validation, no length limit.
- All `.js` routes lack TypeScript, meaning **no type checking at compile time**.

#### Critical: HTML Injection in Emails

All 4 email-sending routes interpolate user input directly into HTML email bodies:

```javascript
html: `<p><b>Name:</b> ${data.name}</p>`;
```

If `data.name` contains `<script>` or HTML tags, they will be rendered in the recipient's email client.

#### High: reCAPTCHA Not Verified Server-Side

- `RECAPTCHA_SECRET_KEY` is in `.env.example` but **none of the API routes verify the reCAPTCHA token server-side**. The client-side reCAPTCHA widget exists in `AppointmentSection` but the token is never validated against Google's API.

#### High: No Rate Limiting

- All API routes are publicly accessible with no rate limiting — vulnerable to spam and abuse.
- Subscription endpoint has no CAPTCHA or rate limit — bots can flood the MongoDB collection.

#### Medium: No CSRF Protection

- Form submissions use `fetch()` POST requests with no CSRF tokens.

#### Medium: Missing Security Headers

- `next.config.js` has no security headers configured (no CSP, HSTS, X-Frame-Options, X-Content-Type-Options).

#### Medium: `server.js` Uses Deprecated URL Parsing

```javascript
const parsedUrl = parse(req.url, true); // url.parse is deprecated
```

#### Low: Secrets Exposure Risk

- `MONGODB_URI` cast `as string` without validation in `subscribe/route.ts:4` — if undefined, will throw a confusing runtime error instead of a clear startup failure.
- `SMTP_USER` and `SMTP_PASS` used directly with no validation they exist.

#### Low: `.PublishSettings` File Committed

- `bnoon .PublishSettings` contains Azure deployment credentials and is committed to the repo.

### Priority: **Critical**

---

## 7. Performance

### Current State

The site has some good defaults (Next.js image optimization, font preloading) but suffers from excessive client-side JavaScript, unthrottled scroll handlers, and massive CSS bundles.

### Issues Found

#### Bundle Size

- **131 files use `"use client"`** — over half the codebase runs on the client. Many of these are static content components that could be Server Components.
- **43,670 lines of global CSS** loaded on every page (`style.css` + `arabic.css` = ~39,000 lines; `responsive.css` + `arabic-responsive.css` = ~4,700 lines). Much of this is unused Bootstrap overrides.
- **Bootstrap imported via CSS** (`bootstrap/dist/css/bootstrap.min.css`) plus `react-bootstrap` — double-loading Bootstrap styles and components.
- **`pdfjs-dist`** (large library) imported for a single page — no dynamic import.
- **`framer-motion`** imported in multiple components — no tree-shaking optimization.

#### Rendering Strategy

- All doctor profile pages (~36 pages) are Server Components with static metadata — good practice, properly using `export const metadata`.
- Home pages use `"use client"` at the component level, not the page level — good partial hydration.
- No `generateStaticParams` used for doctor pages — they could be statically generated.

#### React Performance

- **Unthrottled scroll listeners** in `GoTop.tsx`, `Navbar.tsx`, `HeroBanner.tsx` — `window.addEventListener("scroll", ...)` fires on every pixel scrolled with no `requestAnimationFrame` or throttle.
- **Auto-slide intervals** in `Benefits.tsx`, `Feedbacks.tsx`, `HeroBanner.tsx` — not paused when component is off-screen or tab is inactive.
- **No `React.memo`** on any component — list items in `OurDoctors` (16 items), FAQ accordions (7 items), and service grids re-render fully on any state change.

#### Images

- `next/image` used properly in most places.
- Video backgrounds loaded from Azure Blob Storage with no lazy loading — all videos start loading immediately.

#### Data Fetching

- No data fetching waterfalls (all data is hardcoded).
- No caching strategy — data is bundled into components, so it's effectively cached forever.

#### Lazy Loading

- **No `dynamic()` imports** anywhere. `PDFViewer`, `Swiper`, and `framer-motion` heavy components should be dynamically imported.
- `react-pdf` pulls in the entire PDF.js library on initial load.

### Priority: **Medium**

---

## 8. Scalability

### Current State

The codebase will become increasingly difficult to scale due to the 1:1 duplication pattern for localization and the complete absence of data abstraction.

### Issues Found

#### State Management

- Only `useState` is used — no context providers, no state management library.
- Form state in `AppointmentSection` uses 27 separate `useState` hooks — should use `useReducer` or `react-hook-form`.

#### API Layer

- No shared error response format — some routes return `{ success, error }`, others return `{ success, message }`, and error routes return `{ error }`.
- No middleware chain — each route independently handles DB connection, validation (none), and error handling.
- Adding a new form requires creating 2 API routes (EN/AR), 2 Mongoose models, and 2 component files.

#### Feature Modularity

- Adding a new clinic branch requires modifying: 2 appointment routes, 2 feedback routes (recipient mapping), 2 `SearchBar` components, 2 `AppointmentSection` components, 2 `ContactUsSection` components, and creating new area components.
- Adding a new doctor requires: 2 new component files, 2 new page files, updating 2 `OurDoctors` arrays, and updating 2 `SearchBar` doctor mappings.

#### Configuration

- Clinic branches, doctor lists, phone numbers, email addresses, Google Maps embed URLs, and WhatsApp numbers are all hardcoded across dozens of files.
- No centralized config or CMS integration.

### Priority: **High**

---

## 9. Next.js Best Practices

### Current State

The App Router is used correctly at a basic level, but many Next.js-specific optimizations and conventions are underutilized.

### Issues Found

#### App Router Conventions

- **Root `loading.tsx`**: Present and well-implemented.
- **Error boundaries**: Present at root, `/ar`, and `/en` levels — good coverage.
- **Not-found pages**: Present at all three levels — good.
- **No `loading.tsx` per route segment**: Only the root has `loading.tsx`. Doctor profile pages, clinic pages, and form pages have no loading states.
- **No `metadata` on root layout**: `src/app/layout.tsx` has no metadata export — the root layout is a bare `<html>` shell with hardcoded `lang="ar" dir="rtl"`, which means the English section inherits Arabic language/direction attributes until `SetLocaleAttrs` client component overrides them after hydration (causes layout flash).

#### Server vs Client Components

- 131 out of ~180 component files use `"use client"` — many unnecessarily. Static content components like `Benefits.tsx`, `AboutusSection.tsx`, `WhoAreWe.tsx`, doctor profiles, and others that only render static HTML with no interactivity should be Server Components.
- `convert-to-client.js` script suggests a past mass-conversion to client components — likely to solve a specific issue, but the blanket approach added excessive client-side JS.

#### Server Actions vs API Routes

- No Server Actions used. Forms submit via `fetch()` to API routes, which is valid but Server Actions would simplify the appointment and feedback flows.

#### Metadata

- `generateMetadata` used correctly on page files with localized titles and descriptions.
- OpenGraph and Twitter metadata configured in language layouts — good.
- No `generateStaticParams` used anywhere — doctor pages and clinic pages are all dynamically rendered when they could be statically generated.

#### Route Handlers

- Health route returns proper `NextResponse` with typed response.
- Form routes mix `Response.json()` and `NextResponse.json()` — inconsistent.
- No HTTP status codes on error responses from subscribe routes (defaults to 200 even on error).

#### Middleware

- No `middleware.ts` file exists. Could be used for locale detection, redirects, and security headers.

#### `next.config.js`

- Image optimization configured with `avif` and `webp` formats — good.
- Remote patterns configured for Azure Blob Storage — good.
- Root `/` redirects to `/ar` — good for default locale.
- Missing: security headers, CSP, HSTS configuration.
- Missing: `experimental.optimizePackageImports` for `framer-motion`, `react-icons`, `swiper`.

#### Fonts

- `next/font/local` used for both Cairo (Arabic) and Plus Jakarta Sans (English) — good practice.
- But `public/fonts/` directory contains 30+ font files (Helvetica, Oregano, Rowdies, XB Titre, Alexandria) that appear unused in the Next.js font loading — they may be referenced in CSS files, bypassing Next.js optimization.

### Priority: **High**

---

## TODO Checklist

### Critical (Blocking / Security Risk)

- [ ] **[All API routes]** Add input validation using Zod schemas on all 6 API route handlers. Validate email format, phone format, string lengths, required fields. Reject malformed requests with 400 status.
- [ ] **[`send-appointment/route.js`, `send-appointment-ar/route.js`, `send-feedback/route.js`, `send-feedback-ar/route.js`]** Sanitize all user input before interpolating into HTML emails. Use a library like `sanitize-html` or escape HTML entities to prevent HTML injection.
- [ ] **[`send-appointment/route.js`, `send-feedback/route.js`]** Verify reCAPTCHA token server-side by calling `https://www.google.com/recaptcha/api/siteverify` with `RECAPTCHA_SECRET_KEY`. Currently the token is collected client-side but never validated.
- [ ] **[All API routes]** Return proper HTTP status codes: 400 for validation errors, 500 for server errors. `subscribe/route.ts` returns 200 even on error.
- [ ] **[`subscribe/route.ts:35`, `subscribe-ar/route.ts:45`]** Replace `err: any` with proper error typing (`err: unknown` with narrowing).
- [ ] **[Root]** Remove or `.gitignore` the `bnoon .PublishSettings` file — it contains Azure deployment credentials.
- [ ] **[`next.config.js`]** Add security headers: Content-Security-Policy, Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- [ ] **[All API routes]** Stop exposing `error.message` to clients. Return generic error messages and log details server-side only.
- [ ] **[14 files with `console.error`]** Replace all `console.error` calls with a structured logging solution or remove them. Files: `mongodb.ts`, `subscribe/route.ts`, `subscribe-ar/route.ts`, `send-appointment/route.js`, `send-feedback/route.js`, `send-feedback-ar/route.js`, `FeedbackSection.tsx`, `StayConnected.tsx`, `SubscribeForm.tsx`, `PDFViewer.tsx`, `Popup.tsx`, `ar/Popup.tsx`, `ar/StayConnected.tsx`, `ar/AppointmentSection.tsx`.

### High (Architecture / Maintainability)

- [ ] **[Entire codebase]** Implement i18n (e.g., `next-intl` or `next-i18next`) to eliminate the `components/ar/` duplication. This single change would remove ~12,000+ lines of duplicated code and make the codebase maintainable.
- [ ] **[`src/app/layout.tsx`]** Fix the root layout: it hardcodes `lang="ar" dir="rtl"`, causing English pages to flash with RTL layout until client-side JavaScript overrides it. Use middleware or route group layouts to set correct attributes server-side.
- [ ] **[`send-appointment/route.js`, `send-appointment-ar/route.js`, `send-feedback/route.js`, `send-feedback-ar/route.js`]** Convert from `.js` to `.ts` for type safety.
- [ ] **[`src/services/`]** Create an `EmailService` abstraction wrapping Nodemailer. Create a `SubscriberRepository` and `AppointmentRepository` for data access.
- [ ] **[`src/constants/`]** Centralize all hardcoded data: doctor lists, clinic branches, phone numbers, email addresses, Google Maps embed URLs. Create typed constants files.
- [ ] **[`src/types/`]** Create shared TypeScript interfaces for `Appointment`, `Feedback`, `Subscriber` request/response shapes. Export from `types/` directory.
- [ ] **[`AppointmentSection.tsx`]** Break into 5-10 smaller components: `AppointmentForm`, `CustomDropdown`, `DoctorSelector`, `BranchSelector`, `AppointmentSuccess`.
- [ ] **[`FertilityTabs.tsx`, `TreatmentsTabs.tsx`, `VisitTabs.tsx`]** Extract reusable `<TabPanel>` component. Move tab content to data files.
- [ ] **[7 TODO comments]** Resolve all TODO comments: implement auth forms or remove them, wire up `SubscribeForm` (AR) to email marketing.
- [ ] **[Doctor pages]** Create a single `DoctorProfile` component that accepts data via props, and a single `[slug]/page.tsx` dynamic route with `generateStaticParams`. This would replace 36 page files and 36 component files with 2 files + a data file.
- [ ] **[`package.json`]** Fix package name from `"doutor"` to `"bnoon-lp"`.
- [ ] **[Root]** Remove dead files: `dummy.txt`, `git`, `main`, `npm`, `convert-to-client.js`, `page - Copy.tsx`.

### Medium (Performance / DRY / Patterns)

- [ ] **[131 client components]** Audit all `"use client"` directives. Convert static-content-only components to Server Components. Candidates: `AboutusSection`, `Benefits` (if animation can be isolated), `WhoAreWe`, all `Dr*.tsx` profiles, `WaadSection`, `OurBlog`, `TreatmentsSection`.
- [ ] **[`GoTop.tsx`, `Navbar.tsx`, `HeroBanner.tsx`]** Throttle scroll event listeners using `requestAnimationFrame` or a throttle utility (200ms interval).
- [ ] **[`PDFViewer.tsx`, `Swiper` components]** Use `next/dynamic` for lazy loading heavy libraries.
- [ ] **[`next.config.js`]** Add `experimental.optimizePackageImports` for `framer-motion`, `react-icons`, `react-bootstrap`, `swiper`.
- [ ] **[CSS]** Audit the 43,670 lines of CSS. Consider migrating to Tailwind CSS or CSS Modules to eliminate unused styles. Remove the unused SCSS source files (`_variables.scss`, `style.scss`, `responsive.scss`) or the compiled CSS — don't keep both.
- [ ] **[`SearchBar.tsx`]** Replace `alert()` (line 39) with a proper UI toast or inline error message.
- [ ] **[`SearchBar.tsx`, `ContactUsSection.tsx`]** Replace `document.querySelector` / `classList` DOM manipulation with React state and refs.
- [ ] **[All doctor pages]** Add `generateStaticParams` to enable static generation at build time.
- [ ] **[`AppointmentSection.tsx`]** Replace 27 `useState` hooks with `useReducer` or `react-hook-form` + Zod.
- [ ] **[24 files]** Replace `dangerouslySetInnerHTML` with safe alternatives: structured data rendering, or sanitize HTML with `DOMPurify` where raw HTML is genuinely needed.
- [ ] **[Middleware]** Create `middleware.ts` for locale detection, security headers, and potential rate limiting.
- [ ] **[API routes]** Unify MongoDB connection — remove the inline `connectDB` in `subscribe/route.ts` and use the shared `lib/mongodb.ts` everywhere.
- [ ] **[CI/CD `deploy.yml`]** Make `security-audit` job blocking (remove `continue-on-error: true`) for production deployments.
- [ ] **[`public/fonts/`]** Remove unused font files (Helvetica, Oregano, Rowdies, XB Titre) or migrate them to `next/font` for proper optimization.

### Low (Nice to Have / Polish)

- [ ] **[All components]** Remove non-English comments (Hinglish/Urdu) and replace with English.
- [ ] **[File naming]** Standardize component file naming: `Jeddaharea.tsx` → `JeddahArea.tsx`, `Riyadharea.tsx` → `RiyadhArea.tsx`, `PaitentRights.tsx` → `PatientRights.tsx`.
- [ ] **[Route naming]** Fix typo: `request-an-appoinment` → `request-an-appointment` (with redirect from old URL).
- [ ] **[E2E tests]** Add form submission tests: fill out appointment form, submit, verify success message. Add negative tests for missing required fields.
- [ ] **[Unit tests]** Add tests for: API route handlers (mock MongoDB + Nodemailer), email template generation, branch-to-recipient mapping, input validation schemas.
- [ ] **[`server.js`]** Replace deprecated `url.parse()` with `new URL()`.
- [ ] **[`responsive.css`]** Remove duplicate `.arrow-icon` rule (lines 15-24).
- [ ] **[Component structure]** Add barrel exports (`index.ts`) for each component directory.
- [ ] **[E2E `performance.spec.ts`]** Replace `page.waitForTimeout(2000)` with `page.waitForLoadState('networkidle')`.
- [ ] **[CI/CD `pr.yml`]** Add code coverage reporting to PR comments.
- [ ] **[`.gitignore`]** Clean up duplicate entries and quoted patterns at the bottom of the file.
- [ ] **[`react-google-recaptcha.d.ts`]** Replace with `@types/react-google-recaptcha` if available, or add proper type declarations.

---

## Appendix: File Count by Category

| Category                         | Count |
| -------------------------------- | ----- |
| EN Components (`components/`)    | ~65   |
| AR Components (`components/ar/`) | ~65   |
| EN Pages (`app/en/`)             | ~35   |
| AR Pages (`app/ar/`)             | ~35   |
| API Routes                       | 7     |
| Models                           | 4     |
| Lib/Utils                        | 2     |
| Styles (CSS/SCSS)                | 7     |
| E2E Tests                        | 7     |
| Unit Tests                       | 1     |
| Config Files                     | 8     |
| CI/CD Workflows                  | 3     |

---

_Generated by automated code review — 2026-02-12_
