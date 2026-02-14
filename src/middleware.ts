import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Runtime redirect map: internal appointment paths -> external booking URLs.
 *
 * When USE_NEW_BOOKING_APP is "true" (server-side env var, NOT NEXT_PUBLIC_),
 * requests to the internal appointment pages are redirected to book.bnoon.sa.
 *
 * This allows toggling the booking destination from Azure App Settings
 * without a new build — just restart the app.
 */
const REDIRECT_MAP: Record<string, string> = {
  "/en/request-an-appoinment": "https://book.bnoon.sa",
  "/ar/request-an-appoinment": "https://book.bnoon.sa/ar",
};

export function middleware(request: NextRequest): NextResponse {
  const useNewBookingApp = process.env.USE_NEW_BOOKING_APP === "true";

  if (!useNewBookingApp) {
    return NextResponse.next();
  }

  const externalUrl = REDIRECT_MAP[request.nextUrl.pathname];

  if (externalUrl) {
    return NextResponse.redirect(externalUrl, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/en/request-an-appoinment", "/ar/request-an-appoinment"],
};
