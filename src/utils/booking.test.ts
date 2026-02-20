import { describe, it, expect } from 'vitest';
import { getBookNowUrl, getBookingUrl } from './booking';

describe('booking utility', () => {
  // ──────────────────────────────────────────────
  // getBookNowUrl()
  // ──────────────────────────────────────────────

  describe('getBookNowUrl()', () => {
    it('returns EN internal appointment path', () => {
      expect(getBookNowUrl('en')).toBe('/en/request-an-appoinment');
    });

    it('returns AR internal appointment path', () => {
      expect(getBookNowUrl('ar')).toBe('/ar/request-an-appoinment');
    });

    it('defaults to EN when no locale is provided', () => {
      expect(getBookNowUrl()).toBe('/en/request-an-appoinment');
    });
  });

  // ──────────────────────────────────────────────
  // getBookingUrl() — appends ?location= for middleware
  // ──────────────────────────────────────────────

  describe('getBookingUrl()', () => {
    it('appends location query param for EN', () => {
      expect(getBookingUrl('Riyadh', 'en')).toBe('/en/request-an-appoinment?location=Riyadh');
    });

    it('appends location query param for AR', () => {
      expect(getBookingUrl('الرياض', 'ar')).toBe(
        '/ar/request-an-appoinment?location=%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6',
      );
    });

    it('trims whitespace from location', () => {
      expect(getBookingUrl('  Jeddah  ', 'en')).toBe('/en/request-an-appoinment?location=Jeddah');
    });

    it('returns plain path for undefined location', () => {
      expect(getBookingUrl(undefined, 'en')).toBe('/en/request-an-appoinment');
    });

    it('returns plain path for empty string location', () => {
      expect(getBookingUrl('', 'en')).toBe('/en/request-an-appoinment');
    });

    it('returns plain path for whitespace-only location', () => {
      expect(getBookingUrl('   ', 'ar')).toBe('/ar/request-an-appoinment');
    });

    it('defaults locale to EN', () => {
      expect(getBookingUrl('Riyadh')).toBe('/en/request-an-appoinment?location=Riyadh');
    });
  });
});
