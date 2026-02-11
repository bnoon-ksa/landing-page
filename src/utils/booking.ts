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
 * Returns the book.bnoon.sa URL for General Fertility Consultation
 * based on doctor location and language.
 */
export function getBookingUrl(
  location: string | undefined,
  locale: "en" | "ar" = "en"
): string {
  const trimmed = location?.trim() ?? "";
  const urls = locale === "ar" ? BOOKING_URLS_AR : BOOKING_URLS_EN;
  const fallback = locale === "ar" ? "https://book.bnoon.sa/ar" : "https://book.bnoon.sa";
  return urls[trimmed] ?? fallback;
}
