import { describe, it, expect, vi, beforeEach } from "vitest";

/**
 * Mock next/server before importing the middleware.
 * We return plain objects so we can inspect what the middleware decided.
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
function createRequest(pathname: string) {
  return { nextUrl: { pathname } } as Parameters<typeof middleware>[0];
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
    it("matches EN appointment path", () => {
      expect(config.matcher).toContain("/en/request-an-appoinment");
    });

    it("matches AR appointment path", () => {
      expect(config.matcher).toContain("/ar/request-an-appoinment");
    });

    it("only matches the two appointment paths", () => {
      expect(config.matcher).toHaveLength(2);
    });
  });

  // ──────────────────────────────────────────────
  // Flag OFF (default) — pass through
  // ──────────────────────────────────────────────

  describe("flag OFF (default)", () => {
    it("passes through EN appointment when flag is not set", () => {
      const result = middleware(createRequest("/en/request-an-appoinment"));
      expect((result as Record<string, unknown>)._type).toBe("next");
    });

    it("passes through AR appointment when flag is not set", () => {
      const result = middleware(createRequest("/ar/request-an-appoinment"));
      expect((result as Record<string, unknown>)._type).toBe("next");
    });

    it('passes through when flag is "false"', () => {
      vi.stubEnv("USE_NEW_BOOKING_APP", "false");
      const result = middleware(createRequest("/en/request-an-appoinment"));
      expect((result as Record<string, unknown>)._type).toBe("next");
    });

    it("passes through for non-true string", () => {
      vi.stubEnv("USE_NEW_BOOKING_APP", "yes");
      const result = middleware(createRequest("/en/request-an-appoinment"));
      expect((result as Record<string, unknown>)._type).toBe("next");
    });
  });

  // ──────────────────────────────────────────────
  // Flag ON — redirect to external booking
  // ──────────────────────────────────────────────

  describe("flag ON", () => {
    beforeEach(() => {
      vi.stubEnv("USE_NEW_BOOKING_APP", "true");
    });

    it("redirects EN appointment to book.bnoon.sa", () => {
      const result = middleware(
        createRequest("/en/request-an-appoinment")
      ) as Record<string, unknown>;

      expect(result._type).toBe("redirect");
      expect(result._url).toBe("https://book.bnoon.sa");
      expect(result._status).toBe(307);
    });

    it("redirects AR appointment to book.bnoon.sa/ar", () => {
      const result = middleware(
        createRequest("/ar/request-an-appoinment")
      ) as Record<string, unknown>;

      expect(result._type).toBe("redirect");
      expect(result._url).toBe("https://book.bnoon.sa/ar");
      expect(result._status).toBe(307);
    });

    it("passes through unmatched paths", () => {
      const result = middleware(createRequest("/en/about")) as Record<
        string,
        unknown
      >;
      expect(result._type).toBe("next");
    });

    it("passes through root path", () => {
      const result = middleware(createRequest("/")) as Record<string, unknown>;
      expect(result._type).toBe("next");
    });
  });
});
