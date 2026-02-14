import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Location-specific booking URLs per locale.
 * When USE_NEW_BOOKING_APP is "true" and a ?location= param matches,
 * the user is redirected to the clinic-specific booking page.
 */
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

/** Generic fallback URLs per locale (no location match). */
const GENERIC_REDIRECT: Record<string, string> = {
  "/en/request-an-appoinment": "https://book.bnoon.sa",
  "/ar/request-an-appoinment": "https://book.bnoon.sa/ar",
};

/** Maps pathname to the location-specific URL lookup table. */
const LOCALE_URLS: Record<string, Record<string, string>> = {
  "/en/request-an-appoinment": BOOKING_URLS_EN,
  "/ar/request-an-appoinment": BOOKING_URLS_AR,
};

/**
 * Runtime booking redirect middleware.
 *
 * Reads USE_NEW_BOOKING_APP (server-side env var) at runtime.
 * - Flag OFF → pass through, user sees the internal appointment form.
 * - Flag ON  → redirect to book.bnoon.sa:
 *   - With ?location= param → location-specific booking page.
 *   - Without → generic book.bnoon.sa landing.
 *
 * Toggle from Azure App Settings without a rebuild — just restart.
 */
export function middleware(request: NextRequest): NextResponse {
  if (process.env.USE_NEW_BOOKING_APP !== "true") {
    return NextResponse.next();
  }

  const { pathname, searchParams } = request.nextUrl;
  const location = searchParams.get("location");

  // Try location-specific URL first
  if (location) {
    const urls = LOCALE_URLS[pathname];
    const specificUrl = urls?.[location];
    if (specificUrl) {
      return NextResponse.redirect(specificUrl, 307);
    }
  }

  // Fall back to generic booking page
  const fallback = GENERIC_REDIRECT[pathname];
  if (fallback) {
    return NextResponse.redirect(fallback, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/en/request-an-appoinment", "/ar/request-an-appoinment"],
};
