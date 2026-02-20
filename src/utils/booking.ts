/**
 * Returns the generic "Book Now" URL for the given locale.
 * Always returns the internal appointment form path.
 * Runtime redirect to book.bnoon.sa is handled by middleware.ts.
 */
export function getBookNowUrl(locale: 'en' | 'ar' = 'en'): string {
  return locale === 'ar' ? '/ar/request-an-appoinment' : '/en/request-an-appoinment';
}

/**
 * Returns the booking URL for a doctor page based on location and locale.
 * Always returns the internal appointment form path. When a known location
 * is provided, it's added as a `?location=` query param so the middleware
 * can redirect to the location-specific book.bnoon.sa URL at runtime.
 */
export function getBookingUrl(location: string | undefined, locale: 'en' | 'ar' = 'en'): string {
  const base = locale === 'ar' ? '/ar/request-an-appoinment' : '/en/request-an-appoinment';

  const trimmed = location?.trim();
  if (trimmed) {
    return `${base}?location=${encodeURIComponent(trimmed)}`;
  }
  return base;
}
