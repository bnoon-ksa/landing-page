/**
 * Whether booking links point to the external book.bnoon.sa app.
 * Always false — runtime redirect is handled by middleware.ts instead.
 */
export function isExternalBooking(): boolean {
  return false;
}

/**
 * Returns the "Book Now" URL for the given locale.
 * Always returns the internal appointment form path.
 * Runtime redirect to book.bnoon.sa is handled by middleware.ts.
 */
export function getBookNowUrl(locale: "en" | "ar" = "en"): string {
  return locale === "ar"
    ? "/ar/request-an-appoinment"
    : "/en/request-an-appoinment";
}

/**
 * Returns the booking URL for a doctor page.
 * Always returns the internal appointment form path.
 * Runtime redirect to book.bnoon.sa is handled by middleware.ts.
 */
export function getBookingUrl(
  _location: string | undefined,
  locale: "en" | "ar" = "en"
): string {
  return locale === "ar"
    ? "/ar/request-an-appoinment"
    : "/en/request-an-appoinment";
}
