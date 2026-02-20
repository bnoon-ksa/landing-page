import { describe, it, expect } from 'vitest';
import sitemap from './sitemap';

describe('sitemap()', () => {
  const entries = sitemap();

  it('returns an array of sitemap entries', () => {
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThan(0);
  });

  it('generates both AR and EN entries for each route', () => {
    // Each route produces 2 entries (ar + en)
    expect(entries.length % 2).toBe(0);
  });

  it('all URLs start with https://bnoon.sa/', () => {
    for (const entry of entries) {
      expect(entry.url).toMatch(/^https:\/\/bnoon\.sa\/(ar|en)/);
    }
  });

  it('homepage (ar) has highest priority', () => {
    const arHome = entries.find((e) => e.url === 'https://bnoon.sa/ar');
    expect(arHome).toBeDefined();
    expect(arHome?.priority).toBe(1);
  });

  it('homepage (en) has second highest priority', () => {
    const enHome = entries.find((e) => e.url === 'https://bnoon.sa/en');
    expect(enHome).toBeDefined();
    expect(enHome?.priority).toBe(0.9);
  });

  it('every entry has alternates with both ar and en', () => {
    for (const entry of entries) {
      expect(entry.alternates?.languages).toHaveProperty('ar');
      expect(entry.alternates?.languages).toHaveProperty('en');
    }
  });

  it('includes doctor profile pages', () => {
    const doctorPages = entries.filter((e) => e.url.includes('/dr-'));
    expect(doctorPages.length).toBeGreaterThan(0);
  });

  it('includes clinic pages', () => {
    const clinicPages = entries.filter((e) => e.url.includes('/bnoon-'));
    expect(clinicPages.length).toBeGreaterThan(0);
  });
});
