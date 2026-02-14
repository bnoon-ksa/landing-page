const USE_NEW_BOOKING_APP =
  process.env.NEXT_PUBLIC_USE_NEW_BOOKING_APP === "true";

const BOOKING_URLS_EN: Record<string, string> = {
  Riyadh:
    "https://book.bnoon.sa/en/doctors?selectedClinicLocation=riyadh-granada&selectedService=2245&selectedServiceCode=API002",
  Jeddah:
    "https://book.bnoon.sa/en/doctors?selectedClinicLocation=jeddah&selectedService=1439&selectedServiceCode=API002",
  "Al Ahsa":
    "https://book.bnoon.sa/en/doctors?selectedClinicLocation=al-ahsa&selectedService=2406&selectedServiceCode=API002",
};

const BOOKING_URLS_AR: Record<string, string> = {
  "الرياض":
    "https://book.bnoon.sa/ar/doctors?selectedClinicLocation=riyadh-granada&selectedService=2245&selectedServiceCode=API002",
  "جدة":
    "https://book.bnoon.sa/ar/doctors?selectedClinicLocation=jeddah&selectedService=1439&selectedServiceCode=API002",
  "الأحساء":
    "https://book.bnoon.sa/ar/doctors?selectedClinicLocation=al-ahsa&selectedService=2406&selectedServiceCode=API002",
};

/**
 * Whether booking links point to the external book.bnoon.sa app.
 * Used to decide target="_blank" / rel="noopener noreferrer".
 */
export function isExternalBooking(): boolean {
  return USE_NEW_BOOKING_APP;
}

/**
 * Returns the generic "Book Now" URL based on locale and feature flag.
 *
 * Flag OFF (default) -> internal form: /en/request-an-appoinment or /ar/request-an-appoinment
 * Flag ON            -> external app:  https://book.bnoon.sa or https://book.bnoon.sa/ar
 */
export function getBookNowUrl(locale: "en" | "ar" = "en"): string {
  if (USE_NEW_BOOKING_APP) {
    return locale === "ar"
      ? "https://book.bnoon.sa/ar"
      : "https://book.bnoon.sa";
  }
  return locale === "ar"
    ? "/ar/request-an-appoinment"
    : "/en/request-an-appoinment";
}

/**
 * Returns the book.bnoon.sa URL for General Fertility Consultation
 * based on doctor location and language.
 *
 * Flag OFF -> falls back to internal appointment form.
 * Flag ON  -> location-specific book.bnoon.sa URL (or generic fallback).
 */
export function getBookingUrl(
  location: string | undefined,
  locale: "en" | "ar" = "en"
): string {
  if (!USE_NEW_BOOKING_APP) {
    return locale === "ar"
      ? "/ar/request-an-appoinment"
      : "/en/request-an-appoinment";
  }
  const trimmed = location?.trim() ?? "";
  const urls = locale === "ar" ? BOOKING_URLS_AR : BOOKING_URLS_EN;
  const fallback =
    locale === "ar" ? "https://book.bnoon.sa/ar" : "https://book.bnoon.sa";
  return urls[trimmed] ?? fallback;
}
