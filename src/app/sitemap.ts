import type { MetadataRoute } from 'next';

const BASE_URL = 'https://bnoon.sa';

const routes = [
  '',
  '/about-us',
  '/treatments',
  '/our-experts',
  '/our-clinics',
  '/our-success',
  '/contact-us',
  '/your-visit',
  '/telemedicine',
  '/fertility-guide',
  '/waad-bnoon-program',
  '/submit-feedback',
  '/join-our-team',
  '/request-an-appoinment',
  '/patients-rights',
  '/bnoon-jeddah',
  '/bnoon-riyadh',
  '/bnoon-alahsa',
  '/dr-fawaz-edris',
  '/dr-hussein-sabban',
  '/dr-ahmed-alshaikh',
  '/dr-mazin-bishara',
  '/dr-maya-albezreh',
  '/dr-razan-ghaith',
  '/dr-maram-dadoua',
  '/dr-abdalaziz-alshahrani',
  '/dr-wajdi-alomari',
  '/dr-asim-alwohaibi',
  '/dr-dalia-nour',
  '/dr-moussa-el-naiemy',
  '/dr-ahmad-haroun',
  '/dr-bassamnusair',
  '/dr-ahmedal-nowasser',
  '/dr-rania-elsherify',
  '/dr-median-alkhalaf',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    entries.push({
      url: `${BASE_URL}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    });

    entries.push({
      url: `${BASE_URL}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 0.9 : 0.7,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    });
  }

  return entries;
}
