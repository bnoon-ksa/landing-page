#!/usr/bin/env node
/**
 * One-off CDN image generation script.
 *
 * Reads source images from public/images/, generates WebP variants at
 * responsive widths, creates LQIP blur data URIs, and outputs:
 *   1. WebP files to _cdn-upload/ (for Azure Blob upload)
 *   2. Manifest JSON entries to stdout (merge into image-manifest.ts)
 *
 * Usage:
 *   node scripts/generate-cdn-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const CDN_BASE = 'https://bnoonsa-bjftd5h4a7bae0ce.z02.azurefd.net/website/optimized';
const OUTPUT_DIR = '_cdn-upload';
const PUBLIC = 'public';
const QUALITY = 100;

// Width breakpoints for responsive srcSet
const BANNER_WIDTHS = [576, 768, 992, 1200, 1400]; // + original
const MEDIUM_WIDTHS = [576]; // + original
// Small images: original only

/**
 * All images to process. Each entry defines:
 *   name: manifest key
 *   src: path relative to public/
 *   category: manifest category
 *   alt: default alt text
 *   sizes: responsive sizes attribute
 */
const IMAGE_CATALOG = [
  // ── Remaining page banners ───────────────────────────────────────
  {
    name: 'join-team-banner',
    src: 'images/join-our-team.jpg',
    category: 'banner',
    alt: 'Bnoon join our team page banner',
    sizes: '100vw',
  },
  {
    name: 'national-day-banner',
    src: 'images/national-day-banner.jpg',
    category: 'banner',
    alt: 'Bnoon national day offer banner',
    sizes: '100vw',
  },
  {
    name: 'national-day-banner-ar',
    src: 'images/national-day-banner-ar.jpg',
    category: 'banner',
    alt: 'بنون — عرض اليوم الوطني',
    sizes: '100vw',
  },
  {
    name: 'treatments-banner',
    src: 'images/treatments-banner.jpg',
    category: 'banner',
    alt: 'Bnoon treatments page banner',
    sizes: '100vw',
  },
  {
    name: 'treatments-banner-ar',
    src: 'images/treatments-banner-ar.jpg',
    category: 'banner',
    alt: 'بنون — صفحة العلاجات',
    sizes: '100vw',
  },
  {
    name: 'visit-banner',
    src: 'images/visit-banner.jpg',
    category: 'banner',
    alt: 'Bnoon your visit page banner',
    sizes: '100vw',
  },
  {
    name: 'visit-banner-ar',
    src: 'images/visit-banner-ar.jpg',
    category: 'banner',
    alt: 'بنون — صفحة زيارتك',
    sizes: '100vw',
  },
  {
    name: 'success-banner',
    src: 'images/success-banner.jpg',
    category: 'banner',
    alt: 'Bnoon success stories page banner',
    sizes: '100vw',
  },
  {
    name: 'success-banner-ar',
    src: 'images/success-banner-ar.jpg',
    category: 'banner',
    alt: 'بنون — قصص النجاح',
    sizes: '100vw',
  },
  {
    name: 'telemedicine-banner',
    src: 'images/telemidicine-en.jpg',
    category: 'banner',
    alt: 'Bnoon telemedicine page banner',
    sizes: '100vw',
  },
  {
    name: 'telemedicine-banner-ar',
    src: 'images/telemidicine-ar.jpg',
    category: 'banner',
    alt: 'بنون — الطب عن بعد',
    sizes: '100vw',
  },
  {
    name: 'request-appointment-banner',
    src: 'images/request-an-appointment.jpg',
    category: 'banner',
    alt: 'Bnoon request an appointment page banner',
    sizes: '100vw',
  },
  {
    name: 'request-appointment-banner-ar',
    src: 'images/request-an-appointment-ar.jpg',
    category: 'banner',
    alt: 'بنون — حجز موعد',
    sizes: '100vw',
  },
  {
    name: 'refer-patient-banner',
    src: 'images/refer-a-paitent.jpg',
    category: 'banner',
    alt: 'Bnoon refer a patient page banner',
    sizes: '100vw',
  },
  {
    name: 'waad-bnoon-banner',
    src: 'images/waad-bnoon-banner.png',
    category: 'banner',
    alt: 'Bnoon Waad program banner',
    sizes: '100vw',
  },
  {
    name: 'waad-bnoon-banner-ar',
    src: 'images/waad-bnoon-banner-ar.png',
    category: 'banner',
    alt: 'بنون — برنامج وعد بنون',
    sizes: '100vw',
  },
  {
    name: 'static-banner-en',
    src: 'images/static-banner-en.jpeg',
    category: 'campaign',
    alt: 'Bnoon founding day campaign banner',
    sizes: '100vw',
  },
  {
    name: 'static-banner-ar',
    src: 'images/static-banner-ar.jpeg',
    category: 'campaign',
    alt: 'بنون — حملة يوم التأسيس',
    sizes: '100vw',
  },

  // ── Doctor grid images (340x340) ─────────────────────────────────
  {
    name: 'doctor-grid-1',
    src: 'images/doctors/1.jpg',
    category: 'doctor',
    alt: 'Dr. Abdalaziz Al-Shahrani',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-2',
    src: 'images/doctors/2.jpg',
    category: 'doctor',
    alt: 'Dr. Fawaz Edris',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-3',
    src: 'images/doctors/3.jpg',
    category: 'doctor',
    alt: 'Dr. Mazin Bishara',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-4',
    src: 'images/doctors/4.jpg',
    category: 'doctor',
    alt: 'Dr. Asim Al Wohaibi',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-6',
    src: 'images/doctors/6.jpg',
    category: 'doctor',
    alt: 'Dr. Ahmed Alshaikh',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-7',
    src: 'images/doctors/7.jpg',
    category: 'doctor',
    alt: 'Dr. Wajdi Al Omari',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-8',
    src: 'images/doctors/8.jpg',
    category: 'doctor',
    alt: 'Dr. Dalia Adel',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-9',
    src: 'images/doctors/9.jpg',
    category: 'doctor',
    alt: 'Dr. Ahmad Haroun',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-10',
    src: 'images/doctors/10.jpg',
    category: 'doctor',
    alt: 'Dr. Mussa AlNumi',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-11',
    src: 'images/doctors/11.jpg',
    category: 'doctor',
    alt: 'Dr. Maya Albezreh',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-12',
    src: 'images/doctors/12.jpg',
    category: 'doctor',
    alt: 'Dr. Razan Ghaith',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-13',
    src: 'images/doctors/13.jpg',
    category: 'doctor',
    alt: 'Dr. Maram Dadoua',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-14',
    src: 'images/doctors/14.jpg',
    category: 'doctor',
    alt: 'Dr. Rania Elsherify',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-15',
    src: 'images/doctors/15.jpg',
    category: 'doctor',
    alt: 'Dr. Bassam Nusair',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-16',
    src: 'images/doctors/16.jpg',
    category: 'doctor',
    alt: 'Dr. Ahmed Al-Nowasser',
    sizes: '(max-width: 768px) 50vw, 340px',
  },
  {
    name: 'doctor-grid-17',
    src: 'images/doctors/17.jpg',
    category: 'doctor',
    alt: 'Dr. Median Alkhalaf',
    sizes: '(max-width: 768px) 50vw, 340px',
  },

  // ── Doctor portraits (502x625 avif) ──────────────────────────────
  {
    name: 'dr-abdulaziz',
    src: 'images/doctors/dr-abdulaziz.avif',
    category: 'doctor',
    alt: 'Dr. Abdulaziz Al-Shahrani portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-fawad',
    src: 'images/doctors/dr-fawad.avif',
    category: 'doctor',
    alt: 'Dr. Fawaz Edris portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-bassam',
    src: 'images/doctors/dr-bassam.jpg',
    category: 'doctor',
    alt: 'Dr. Bassam Nusair portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-asim',
    src: 'images/doctors/dr-asim.avif',
    category: 'doctor',
    alt: 'Dr. Asim Al Wohaibi portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-ahmed-bekar',
    src: 'images/doctors/dr-ahmed-bekar.avif',
    category: 'doctor',
    alt: 'Dr. Ahmed Alshaikh portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-wajdi',
    src: 'images/doctors/dr-wajdi.avif',
    category: 'doctor',
    alt: 'Dr. Wajdi Al Omari portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-dalia',
    src: 'images/doctors/dr-dalia.avif',
    category: 'doctor',
    alt: 'Dr. Dalia Nour portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-haroun',
    src: 'images/doctors/dr-haroun.avif',
    category: 'doctor',
    alt: 'Dr. Ahmad Haroun portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-moussa',
    src: 'images/doctors/dr-moussa.avif',
    category: 'doctor',
    alt: 'Dr. Moussa El Naiemy portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-maya-albezreh',
    src: 'images/doctors/dr-maya-albezreh.avif',
    category: 'doctor',
    alt: 'Dr. Maya Albezreh portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-razan-ghaith',
    src: 'images/doctors/dr-razan-ghaith.avif',
    category: 'doctor',
    alt: 'Dr. Razan Ghaith portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-mazin-bishra',
    src: 'images/doctors/dr-mazin-bishra.avif',
    category: 'doctor',
    alt: 'Dr. Mazin Bishara portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-hussein',
    src: 'images/doctors/dr-hussein.avif',
    category: 'doctor',
    alt: 'Dr. Hussein Sabban portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-maram',
    src: 'images/doctors/dr-maram.avif',
    category: 'doctor',
    alt: 'Dr. Maram Dadoua portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-rania',
    src: 'images/doctors/dr-rania.jpg',
    category: 'doctor',
    alt: 'Dr. Rania Elsherify portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-nowasser',
    src: 'images/doctors/dr-nowasser.jpg',
    category: 'doctor',
    alt: 'Dr. Ahmed Al-Nowasser portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },
  {
    name: 'dr-median',
    src: 'images/doctors/dr-median.jpg',
    category: 'doctor',
    alt: 'Dr. Median Alkhalaf portrait',
    sizes: '(max-width: 768px) 100vw, 502px',
  },

  // ── Treatment tab images ─────────────────────────────────────────
  {
    name: 'treatment-ovulation-induction',
    src: 'images/treatments/ovulation-induction.jpg',
    category: 'treatment',
    alt: 'Ovulation Induction treatment',
    sizes: '(max-width: 768px) 100vw, 388px',
  },
  {
    name: 'treatment-intrauterine-insemination',
    src: 'images/treatments/intrauterine-insemination.jpg',
    category: 'treatment',
    alt: 'Intrauterine Insemination treatment',
    sizes: '(max-width: 768px) 100vw, 388px',
  },
  {
    name: 'treatment-swim-up',
    src: 'images/treatments/swim-up.jpg',
    category: 'treatment',
    alt: 'Swim-Up for Gender Wish treatment',
    sizes: '(max-width: 768px) 100vw, 388px',
  },
  {
    name: 'treatment-ivf',
    src: 'images/treatments/ivf.jpg',
    category: 'treatment',
    alt: 'IVF treatment',
    sizes: '(max-width: 768px) 100vw, 388px',
  },
  {
    name: 'treatment-ivm',
    src: 'images/treatments/ivm.jpg',
    category: 'treatment',
    alt: 'IVM treatment',
    sizes: '(max-width: 768px) 100vw, 388px',
  },
  {
    name: 'treatment-sperm-freezing',
    src: 'images/treatments/sperm-freezing.jpg',
    category: 'treatment',
    alt: 'Sperm Freezing treatment',
    sizes: '(max-width: 768px) 100vw, 388px',
  },
  {
    name: 'treatment-egg-freezing',
    src: 'images/treatments/egg-freezing.jpg',
    category: 'treatment',
    alt: 'Egg Freezing treatment',
    sizes: '(max-width: 768px) 100vw, 388px',
  },
  {
    name: 'treatment-pgs',
    src: 'images/treatments/pgs.jpg',
    category: 'treatment',
    alt: 'PGS treatment',
    sizes: '(max-width: 768px) 100vw, 388px',
  },
  {
    name: 'treatment-recurrent-miscarriage',
    src: 'images/treatments/recurrent-miscarriage.jpg',
    category: 'treatment',
    alt: 'Recurrent Miscarriage treatment',
    sizes: '(max-width: 768px) 100vw, 388px',
  },
  {
    name: 'treatment-fertility-counselling',
    src: 'images/treatments/fertility-counselling.jpg',
    category: 'treatment',
    alt: 'Fertility Counselling',
    sizes: '(max-width: 768px) 100vw, 388px',
  },
  {
    name: 'treatment-antenatal-care',
    src: 'images/treatments/antenatal-care-deliveries.jpg',
    category: 'treatment',
    alt: 'Antenatal care deliveries',
    sizes: '(max-width: 768px) 100vw, 388px',
  },

  // ── Fertility guide tab images ───────────────────────────────────
  {
    name: 'fertility-helpful-tips',
    src: 'images/fertility-guide/Helpful-Tips-for-Fertility.avif',
    category: 'fertility-guide',
    alt: 'Helpful Tips for Fertility',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    name: 'fertility-foods-boost',
    src: 'images/fertility-guide/Foods-that-Boost-Fertility.avif',
    category: 'fertility-guide',
    alt: 'Foods that Boost Fertility',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    name: 'fertility-male-infertility',
    src: 'images/fertility-guide/Causes-of-Male-Infertility.avif',
    category: 'fertility-guide',
    alt: 'Causes of Male Infertility',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    name: 'fertility-female-infertility',
    src: 'images/fertility-guide/Causes-of-Female-Infertility.avif',
    category: 'fertility-guide',
    alt: 'Causes of Female Infertility',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    name: 'fertility-biologic-clock',
    src: 'images/fertility-guide/Womans-Biologic-Clock.avif',
    category: 'fertility-guide',
    alt: "Woman's Biologic Clock",
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    name: 'fertility-ovulatory-dysfunction',
    src: 'images/fertility-guide/Ovulatory-Dysfunction.avif',
    category: 'fertility-guide',
    alt: 'Ovulatory Dysfunction',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    name: 'fertility-endometriosis',
    src: 'images/fertility-guide/Endometriosis.avif',
    category: 'fertility-guide',
    alt: 'Endometriosis',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    name: 'fertility-ovarian-cysts',
    src: 'images/fertility-guide/Ovarian-Cysts.avif',
    category: 'fertility-guide',
    alt: 'Ovarian Cysts',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    name: 'fertility-uterine-fibroids',
    src: 'images/fertility-guide/Uterine-Fibroids-Infertility.avif',
    category: 'fertility-guide',
    alt: 'Uterine Fibroids and Infertility',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    name: 'fertility-recurrent-miscarriage',
    src: 'images/fertility-guide/Recurrent-Miscarriage.avif',
    category: 'fertility-guide',
    alt: 'Recurrent Miscarriage',
    sizes: '(max-width: 768px) 100vw, 420px',
  },
  {
    name: 'fertility-recurrent-ivf-failure',
    src: 'images/fertility-guide/Recurrent-IVF-Failure.avif',
    category: 'fertility-guide',
    alt: 'Recurrent IVF Failure',
    sizes: '(max-width: 768px) 100vw, 420px',
  },

  // ── Visit tab images ─────────────────────────────────────────────
  {
    name: 'visit-first-clinic',
    src: 'images/visit/First-Clinic-Visit.avif',
    category: 'visit',
    alt: 'Your First Clinic Visit',
    sizes: '(max-width: 768px) 100vw, 466px',
  },
  {
    name: 'visit-out-of-town',
    src: 'images/visit/Out-of-Town-Patients.avif',
    category: 'visit',
    alt: 'Out of Town Patients',
    sizes: '(max-width: 768px) 100vw, 466px',
  },
  {
    name: 'visit-ivf-monitoring',
    src: 'images/visit/Causes-of-Male-Infertility.avif',
    category: 'visit',
    alt: 'IVF monitoring',
    sizes: '(max-width: 768px) 100vw, 466px',
  },
  {
    name: 'visit-egg-collection',
    src: 'images/visit/Uterine-Fibroids-Infertility.avif',
    category: 'visit',
    alt: 'Egg Collection',
    sizes: '(max-width: 768px) 100vw, 466px',
  },
  {
    name: 'visit-embryo-transfer',
    src: 'images/visit/Helpful-Tips-for-Fertility.avif',
    category: 'visit',
    alt: 'Embryo Transfer',
    sizes: '(max-width: 768px) 100vw, 466px',
  },

  // ── Location images ──────────────────────────────────────────────
  {
    name: 'location-riyadh',
    src: 'images/locations/bnoon-riyadh.avif',
    category: 'location',
    alt: 'Bnoon Riyadh clinic',
    sizes: '(max-width: 768px) 100vw, 500px',
  },
  {
    name: 'location-north-riyadh',
    src: 'images/locations/bnoon-north-riiyadh.avif',
    category: 'location',
    alt: 'Bnoon North Riyadh clinic',
    sizes: '(max-width: 768px) 100vw, 500px',
  },
  {
    name: 'location-jeddah',
    src: 'images/locations/bnoon-jeddah.avif',
    category: 'location',
    alt: 'Bnoon Jeddah clinic',
    sizes: '(max-width: 768px) 100vw, 500px',
  },
  {
    name: 'location-alahsa',
    src: 'images/locations/bnoon-alahsa.jpg',
    category: 'location',
    alt: 'Bnoon Al Ahsa clinic',
    sizes: '(max-width: 768px) 100vw, 500px',
  },

  // ── Misc raster images ───────────────────────────────────────────
  {
    name: 'bnoon-logo',
    src: 'images/bnoon-logo.avif',
    category: 'misc',
    alt: 'Bnoon logo',
    sizes: '150px',
  },
  {
    name: 'logo-mob',
    src: 'images/logo-mob.avif',
    category: 'misc',
    alt: 'Bnoon mobile logo',
    sizes: '150px',
  },
  {
    name: 'popup-image',
    src: 'images/popup-image.avif',
    category: 'misc',
    alt: 'Bnoon promotional popup',
    sizes: '(max-width: 768px) 100vw, 500px',
  },
  {
    name: 'faqs-bg',
    src: 'images/faqs.jpg',
    category: 'misc',
    alt: 'FAQs background',
    sizes: '100vw',
  },
  {
    name: 'about-image',
    src: 'images/about/about.png',
    category: 'about',
    alt: 'About Bnoon',
    sizes: '(max-width: 768px) 100vw, 636px',
  },
  {
    name: 'who-we-are',
    src: 'images/about/who-we-are.avif',
    category: 'about',
    alt: 'Who we are',
    sizes: '(max-width: 768px) 100vw, 636px',
  },
  {
    name: 'commitment-saudization',
    src: 'images/commitment-saudization.avif',
    category: 'about',
    alt: 'Commitment to Saudization',
    sizes: '(max-width: 768px) 100vw, 500px',
  },
  {
    name: 'app-screenshot',
    src: 'images/app/app.png',
    category: 'misc',
    alt: 'Bnoon mobile app screenshot',
    sizes: '(max-width: 768px) 100vw, 400px',
  },
  {
    name: 'app-shape',
    src: 'images/app/shape.png',
    category: 'misc',
    alt: 'App section decorative shape',
    sizes: '100vw',
  },
  {
    name: 'services-bg',
    src: 'images/services/service.jpg',
    category: 'service',
    alt: 'Services section background',
    sizes: '100vw',
  },
  {
    name: 'services-shape',
    src: 'images/services/shape.png',
    category: 'service',
    alt: 'Services section decorative shape',
    sizes: '(max-width: 768px) 50vw, 286px',
  },
  {
    name: 'help-doctors',
    src: 'images/help/doctors.jpg',
    category: 'misc',
    alt: 'Our dedicated doctors',
    sizes: '(max-width: 768px) 100vw, 636px',
  },
  {
    name: 'help-info',
    src: 'images/help/info.jpg',
    category: 'misc',
    alt: 'Patient information',
    sizes: '100vw',
  },
  {
    name: 'feedback-rating',
    src: 'images/feedback/rating.png',
    category: 'misc',
    alt: 'Patient rating',
    sizes: '200px',
  },
  {
    name: 'feedback-shape',
    src: 'images/feedback/shape.png',
    category: 'misc',
    alt: 'Feedback section shape',
    sizes: '200px',
  },
  {
    name: 'arrow',
    src: 'images/arrow.png',
    category: 'misc',
    alt: 'Decorative arrow',
    sizes: '50px',
  },
  {
    name: 'banner-shape1',
    src: 'images/banner/shape1.png',
    category: 'misc',
    alt: 'Banner decorative shape',
    sizes: '200px',
  },
  {
    name: 'banner-shape2',
    src: 'images/banner/shape2.png',
    category: 'misc',
    alt: 'Banner decorative shape',
    sizes: '200px',
  },
  {
    name: 'bnoon-symbol',
    src: 'images/icons/bnoon-symbol.avif',
    category: 'icon',
    alt: 'Bnoon symbol',
    sizes: '20px',
  },
  {
    name: 'icon-fb',
    src: 'images/icons/fb-icon.avif',
    category: 'icon',
    alt: 'Facebook',
    sizes: '24px',
  },
  {
    name: 'icon-instagram',
    src: 'images/icons/instagram-icon.avif',
    category: 'icon',
    alt: 'Instagram',
    sizes: '24px',
  },
  {
    name: 'icon-linkedin',
    src: 'images/icons/linkdin-icon.avif',
    category: 'icon',
    alt: 'LinkedIn',
    sizes: '24px',
  },
  {
    name: 'icon-x',
    src: 'images/icons/x-icon.avif',
    category: 'icon',
    alt: 'X (Twitter)',
    sizes: '24px',
  },
  {
    name: 'ivf-campaign-img',
    src: 'images/national-day/ivf-cycles.jpg',
    category: 'campaign',
    alt: 'IVF cycles campaign',
    sizes: '(max-width: 768px) 100vw, 500px',
  },
  {
    name: 'men-infertility-campaign-img',
    src: 'images/national-day/men-infertility.jpg',
    category: 'campaign',
    alt: 'Men infertility campaign',
    sizes: '(max-width: 768px) 100vw, 500px',
  },
  {
    name: 'male-fertility',
    src: 'images/male-fertility.jpg',
    category: 'misc',
    alt: 'Male fertility',
    sizes: '(max-width: 768px) 100vw, 500px',
  },
  {
    name: 'users-user1',
    src: 'images/users/user1.png',
    category: 'misc',
    alt: 'Patient testimonial',
    sizes: '80px',
  },
  {
    name: 'users-user2',
    src: 'images/users/user2.png',
    category: 'misc',
    alt: 'Patient testimonial',
    sizes: '80px',
  },
  {
    name: 'users-user3',
    src: 'images/users/user3.png',
    category: 'misc',
    alt: 'Patient testimonial',
    sizes: '80px',
  },
  {
    name: 'icon-recruiting',
    src: 'images/icons/recruiting-icons.png',
    category: 'icon',
    alt: 'Recruiting',
    sizes: '200px',
  },
  {
    name: 'icon-c3',
    src: 'images/icons/c3.png',
    category: 'icon',
    alt: 'C3 certification',
    sizes: '80px',
  },
  {
    name: 'icon-contact',
    src: 'images/icons/contact.png',
    category: 'icon',
    alt: 'Contact icon',
    sizes: '40px',
  },
  {
    name: 'icon-location-png',
    src: 'images/icons/location.png',
    category: 'icon',
    alt: 'Location icon',
    sizes: '40px',
  },
  {
    name: 'icon-mail-png',
    src: 'images/icons/mail.png',
    category: 'icon',
    alt: 'Mail icon',
    sizes: '40px',
  },
  {
    name: 'website-icon-1',
    src: 'images/icons/Website-Icons_1.png',
    category: 'icon',
    alt: 'Website icon 1',
    sizes: '60px',
  },
  {
    name: 'website-icon-2',
    src: 'images/icons/Website-Icons_2.png',
    category: 'icon',
    alt: 'Website icon 2',
    sizes: '60px',
  },
  {
    name: 'website-icon-3',
    src: 'images/icons/Website-Icons_3.png',
    category: 'icon',
    alt: 'Website icon 3',
    sizes: '60px',
  },
  {
    name: 'website-icon-4',
    src: 'images/icons/Website-Icons_4.png',
    category: 'icon',
    alt: 'Website icon 4',
    sizes: '60px',
  },
  {
    name: 'icon-1',
    src: 'images/icons/icon-1.png',
    category: 'icon',
    alt: 'Service icon 1',
    sizes: '60px',
  },
  {
    name: 'icon-2',
    src: 'images/icons/icon-2.png',
    category: 'icon',
    alt: 'Service icon 2',
    sizes: '60px',
  },
  {
    name: 'icon-3',
    src: 'images/icons/icon-3.png',
    category: 'icon',
    alt: 'Service icon 3',
    sizes: '60px',
  },
  {
    name: 'icon-4',
    src: 'images/icons/icon-4.png',
    category: 'icon',
    alt: 'Service icon 4',
    sizes: '60px',
  },
  {
    name: 'icon-5',
    src: 'images/icons/icon-5.png',
    category: 'icon',
    alt: 'Service icon 5',
    sizes: '60px',
  },
];

async function generateBlurDataURL(inputPath) {
  const buf = await sharp(inputPath)
    .resize(20, undefined, { fit: 'inside' })
    .webp({ quality: 20 })
    .toBuffer();
  return `data:image/webp;base64,${buf.toString('base64')}`;
}

async function processImage(entry) {
  const inputPath = path.join(PUBLIC, entry.src);

  if (!existsSync(inputPath)) {
    console.error(`SKIP (not found): ${inputPath}`);
    return null;
  }

  const metadata = await sharp(inputPath).metadata();
  const origWidth = metadata.width;
  const origHeight = metadata.height;

  // Determine breakpoints based on image size
  let widths;
  if (origWidth > 1400) {
    widths = [...BANNER_WIDTHS.filter((w) => w < origWidth), origWidth];
  } else if (origWidth > 640) {
    widths = [...MEDIUM_WIDTHS.filter((w) => w < origWidth), origWidth];
  } else {
    widths = [origWidth];
  }

  const blurDataURL = await generateBlurDataURL(inputPath);
  const srcSetParts = [];

  for (const w of widths) {
    const h = Math.round((w / origWidth) * origHeight);
    const webpBuf = await sharp(inputPath)
      .resize(w, h, { fit: 'fill' })
      .webp({ quality: QUALITY })
      .toBuffer();

    const sizeKb = Math.round(webpBuf.length / 1024);
    const filename = `${entry.name}-${w}x${h}-${sizeKb}kb.webp`;

    await mkdir(OUTPUT_DIR, { recursive: true });
    await writeFile(path.join(OUTPUT_DIR, filename), webpBuf);

    srcSetParts.push(`${CDN_BASE}/${filename} ${w}w`);
  }

  return {
    name: entry.name,
    src: `/${entry.src}`,
    width: origWidth,
    height: origHeight,
    sizes: entry.sizes,
    alt: entry.alt,
    blurDataURL,
    category: entry.category,
    cdnSrcSet: srcSetParts.join(', '),
  };
}

async function main() {
  console.error(`Processing ${IMAGE_CATALOG.length} images...`);
  const results = [];

  for (const entry of IMAGE_CATALOG) {
    try {
      const result = await processImage(entry);
      if (result) {
        results.push(result);
        console.error(`✓ ${entry.name} (${result.cdnSrcSet.split(', ').length} variants)`);
      }
    } catch (err) {
      console.error(`✗ ${entry.name}: ${err.message}`);
    }
  }

  // Output manifest entries as JSON to stdout
  const manifestObj = {};
  for (const r of results) {
    const { name, ...rest } = r;
    manifestObj[name] = rest;
  }

  console.log(JSON.stringify(manifestObj, null, 2));
  console.error(`\nDone: ${results.length}/${IMAGE_CATALOG.length} images processed.`);
  console.error(`Output dir: ${OUTPUT_DIR}/`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
