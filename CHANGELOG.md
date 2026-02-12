## [1.2.0](https://github.com/bnoon-ksa/landing-page/compare/v1.1.2...v1.2.0) (2026-02-12)

### Features

* add refer a patient page ([#65](https://github.com/bnoon-ksa/landing-page/issues/65)) ([e7b4af2](https://github.com/bnoon-ksa/landing-page/commit/e7b4af2240a8840cdfd11f2a17f63b2ff332dc92))

## [1.1.2](https://github.com/bnoon-ksa/landing-page/compare/v1.1.1...v1.1.2) (2026-02-12)

### Bug Fixes

* self-host Arabic fonts and remove test artifacts ([#7](https://github.com/bnoon-ksa/landing-page/issues/7)) ([93a665c](https://github.com/bnoon-ksa/landing-page/commit/93a665c61a64c43e765e633ae09c3642fe9ab9e4))

## [1.1.1](https://github.com/bnoon-ksa/landing-page/compare/v1.1.0...v1.1.1) (2026-02-11)

### Bug Fixes

* **images:** restore local images and add branch-specific booking URLs ([#5](https://github.com/bnoon-ksa/landing-page/issues/5)) ([154d320](https://github.com/bnoon-ksa/landing-page/commit/154d32010467a7316ae83b6902e0e631191b1ce4))

## [1.1.0](https://github.com/bnoon-ksa/landing-page/compare/v1.0.6...v1.1.0) (2026-02-11)

### Features

* **ci:** add PR validation pipeline ([#3](https://github.com/bnoon-ksa/landing-page/issues/3)) ([064d838](https://github.com/bnoon-ksa/landing-page/commit/064d8382d2f3f76d322f94652668125313ecf1b4)), closes [#336AEA](https://github.com/bnoon-ksa/landing-page/issues/336AEA) [#2A3547](https://github.com/bnoon-ksa/landing-page/issues/2A3547) [#5A6A85](https://github.com/bnoon-ksa/landing-page/issues/5A6A85)

## [1.0.6](https://github.com/bnoon-ksa/landing-page/compare/v1.0.5...v1.0.6) (2026-02-11)

### ⚠ BREAKING CHANGES

* codebase enhancements: security, performance, SEO, error handling, component consolidation (#2)

### Bug Fixes

* codebase enhancements: security, performance, SEO, error handling, component consolidation ([#2](https://github.com/bnoon-ksa/landing-page/issues/2)) ([af17642](https://github.com/bnoon-ksa/landing-page/commit/af17642475fe20f2745fe0d9a0296fab3999eb92)), closes [#336AEA](https://github.com/bnoon-ksa/landing-page/issues/336AEA) [#2A3547](https://github.com/bnoon-ksa/landing-page/issues/2A3547) [#5A6A85](https://github.com/bnoon-ksa/landing-page/issues/5A6A85)

## [1.0.5](https://github.com/bnoon-ksa/landing-page/compare/v1.0.4...v1.0.5) (2026-02-11)

### Bug Fixes

* pipeline concurrency control, remove legacy-peer-deps, fix health check ([134619d](https://github.com/bnoon-ksa/landing-page/commit/134619dfdb3869e282293f797050c02c177e6428))

## [1.0.4](https://github.com/bnoon-ksa/landing-page/compare/v1.0.3...v1.0.4) (2026-02-11)

### Bug Fixes

* use local Plus Jakarta Sans fonts instead of Google Fonts ([4d571a4](https://github.com/bnoon-ksa/landing-page/commit/4d571a4794edb01fdde56fff9c917d46eab1ee2b))

## [1.0.3](https://github.com/bnoon-ksa/landing-page/compare/v1.0.2...v1.0.3) (2026-02-11)

### Bug Fixes

* remove .env.local from git tracking ([2ec42ce](https://github.com/bnoon-ksa/landing-page/commit/2ec42ce513fe90974274cc06a8cea14987f027be))
* replace all <img> with next/image <Image> component across 71 files ([b2be554](https://github.com/bnoon-ksa/landing-page/commit/b2be55446fd1a632afbab98dab99e8ee783b2c49))
* resolve react-hooks/exhaustive-deps warnings in WaadSection and Benefits ([3650db4](https://github.com/bnoon-ksa/landing-page/commit/3650db41afebea689e0dc8d88d87d3598aae23f4))

## [1.0.2](https://github.com/bnoon-ksa/landing-page/compare/v1.0.1...v1.0.2) (2026-02-11)

### Bug Fixes

* replace CSS start/end values with flex-start/flex-end for autoprefixer compatibility ([5902b51](https://github.com/bnoon-ksa/landing-page/commit/5902b51e5269998d4b7dd9096a37464291b23903))
* resolve all ESLint lint warnings ([1eaa1b0](https://github.com/bnoon-ksa/landing-page/commit/1eaa1b0a47de0223f3d39ff7e7da26c2b369b156))

## [1.0.1](https://github.com/bnoon-ksa/landing-page/compare/v1.0.0...v1.0.1) (2026-02-11)

### Bug Fixes

* resolve CI warnings and eslint config error ([7735526](https://github.com/bnoon-ksa/landing-page/commit/77355260edaa26866173ecbf224d46e3c613dc1b))

## 1.0.0 (2026-02-11)

### Features

* production CI/CD pipeline with semantic release, rollback, and video CDN ([87e7657](https://github.com/bnoon-ksa/landing-page/commit/87e7657fb5e7246a39455678df0bf3ed78a01f6b))
* redirect appointment buttons to book.bnoon.sa ([6fa77b5](https://github.com/bnoon-ksa/landing-page/commit/6fa77b57570aa2dba2dfe50b11d9b67cac875843))

### Bug Fixes

* add bootstrap-icons dependency ([99903ef](https://github.com/bnoon-ksa/landing-page/commit/99903ef6458dbca29c7a040ea30afefdfeea63cb))
* replace flat eslint config with .eslintrc.json for Next.js 14 compat ([89a4c05](https://github.com/bnoon-ksa/landing-page/commit/89a4c051aa614d7def8275892c011e80e38744c6))
* set ESLINT_USE_FLAT_CONFIG for next lint in CI ([d9a8b4f](https://github.com/bnoon-ksa/landing-page/commit/d9a8b4f127915ab4666f7111ff8c71f238a5a380))
* update deploy pipeline to use publish profile ([1043dd4](https://github.com/bnoon-ksa/landing-page/commit/1043dd49f86a7460fe6c79a04582d523264d0fe7))
