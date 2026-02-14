import { describe, it, expect, vi, beforeEach } from "vitest";

/**
 * Mock next/server — return plain objects so we can inspect decisions.
 */
vi.mock("next/server", () => ({
  NextResponse: {
    redirect: (url: string, status: number) => ({
      _type: "redirect" as const,
      _url: typeof url === "string" ? url : String(url),
      _status: status,
    }),
    next: () => ({ _type: "next" as const }),
  },
}));

import { middleware, config } from "./middleware";

/** Minimal NextRequest-like object for testing. */
function createRequest(pathname: string, query?: Record<string, string>) {
  const searchParams = new URLSearchParams(query);
  return {
    nextUrl: { pathname, searchParams },
  } as Parameters<typeof middleware>[0];
}

describe("booking redirect middleware", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    delete process.env.USE_NEW_BOOKING_APP;
  });

  // ──────────────────────────────────────────────
  // config.matcher
  // ──────────────────────────────────────────────

  describe("config.matcher", () => {
    it("matches both appointment paths", () => {
      expect(config.matcher).toContain("/en/request-an-appoinment");
      expect(config.matcher).toContain("/ar/request-an-appoinment");
      expect(config.matcher).toHaveLength(2);
    });
  });

  // ──────────────────────────────────────────────
  // Flag OFF — pass through
  // ──────────────────────────────────────────────

  describe("flag OFF (default)", () => {
    it("passes through when flag is not set", () => {
      const result = middleware(createRequest("/en/request-an-appoinment"));
      expect((result as Record<string, unknown>)._type).toBe("next");
    });

    it('passes through when flag is "false"', () => {
      vi.stubEnv("USE_NEW_BOOKING_APP", "false");
      const result = middleware(createRequest("/en/request-an-appoinment"));
      expect((result as Record<string, unknown>)._type).toBe("next");
    });

    it("passes through even with location param", () => {
      const result = middleware(
        createRequest("/en/request-an-appoinment", { location: "Riyadh" })
      );
      expect((result as Record<string, unknown>)._type).toBe("next");
    });
  });

  // ──────────────────────────────────────────────
  // Flag ON — generic redirect (no location)
  // ──────────────────────────────────────────────

  describe("flag ON — generic redirect", () => {
    beforeEach(() => {
      vi.stubEnv("USE_NEW_BOOKING_APP", "true");
    });

    it("redirects EN to book.bnoon.sa", () => {
      const result = middleware(
        createRequest("/en/request-an-appoinment")
      ) as Record<string, unknown>;
      expect(result._type).toBe("redirect");
      expect(result._url).toBe("https://book.bnoon.sa");
      expect(result._status).toBe(307);
    });

    it("redirects AR to book.bnoon.sa/ar", () => {
      const result = middleware(
        createRequest("/ar/request-an-appoinment")
      ) as Record<string, unknown>;
      expect(result._type).toBe("redirect");
      expect(result._url).toBe("https://book.bnoon.sa/ar");
    });

    it("passes through unmatched paths", () => {
      const result = middleware(createRequest("/en/about"));
      expect((result as Record<string, unknown>)._type).toBe("next");
    });
  });

  // ──────────────────────────────────────────────
  // Flag ON — location-specific redirect
  // ──────────────────────────────────────────────

  describe("flag ON — location-specific redirect", () => {
    beforeEach(() => {
      vi.stubEnv("USE_NEW_BOOKING_APP", "true");
    });

    it("redirects Riyadh EN to location-specific URL", () => {
      const result = middleware(
        createRequest("/en/request-an-appoinment", { location: "Riyadh" })
      ) as Record<string, unknown>;
      expect(result._type).toBe("redirect");
      expect(result._url).toContain("book.bnoon.sa/en/doctors");
      expect(result._url).toContain("riyadh-granada");
    });

    it("redirects Jeddah EN to location-specific URL", () => {
      const result = middleware(
        createRequest("/en/request-an-appoinment", { location: "Jeddah" })
      ) as Record<string, unknown>;
      expect(result._type).toBe("redirect");
      expect(result._url).toContain("jeddah");
    });

    it("redirects Al Ahsa EN to location-specific URL", () => {
      const result = middleware(
        createRequest("/en/request-an-appoinment", { location: "Al Ahsa" })
      ) as Record<string, unknown>;
      expect(result._type).toBe("redirect");
      expect(result._url).toContain("al-ahsa");
    });

    it("redirects الرياض AR to location-specific URL", () => {
      const result = middleware(
        createRequest("/ar/request-an-appoinment", { location: "الرياض" })
      ) as Record<string, unknown>;
      expect(result._type).toBe("redirect");
      expect(result._url).toContain("book.bnoon.sa/ar/doctors");
      expect(result._url).toContain("riyadh-granada");
    });

    it("redirects جدة AR to location-specific URL", () => {
      const result = middleware(
        createRequest("/ar/request-an-appoinment", { location: "جدة" })
      ) as Record<string, unknown>;
      expect(result._type).toBe("redirect");
      expect(result._url).toContain("jeddah");
    });

    it("redirects الأحساء AR to location-specific URL", () => {
      const result = middleware(
        createRequest("/ar/request-an-appoinment", { location: "الأحساء" })
      ) as Record<string, unknown>;
      expect(result._type).toBe("redirect");
      expect(result._url).toContain("al-ahsa");
    });

    it("falls back to generic URL for unknown location", () => {
      const result = middleware(
        createRequest("/en/request-an-appoinment", {
          location: "Unknown City",
        })
      ) as Record<string, unknown>;
      expect(result._type).toBe("redirect");
      expect(result._url).toBe("https://book.bnoon.sa");
    });
  });
});
