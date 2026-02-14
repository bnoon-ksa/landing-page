import { describe, it, expect, beforeEach, vi } from "vitest";

/**
 * Helper to load the booking module fresh with a given env value.
 * Because `USE_NEW_BOOKING_APP` is evaluated at module load time,
 * we must reset modules between tests to pick up env changes.
 */
async function loadBooking(flagValue?: string) {
  vi.resetModules();

  if (flagValue !== undefined) {
    vi.stubEnv("NEXT_PUBLIC_USE_NEW_BOOKING_APP", flagValue);
  } else {
    // Ensure the env var is not set
    delete process.env.NEXT_PUBLIC_USE_NEW_BOOKING_APP;
  }

  const mod = await import("./booking");
  return mod;
}

describe("booking utility", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  // ──────────────────────────────────────────────
  // isExternalBooking()
  // ──────────────────────────────────────────────

  describe("isExternalBooking()", () => {
    it("returns false when flag is not set", async () => {
      const { isExternalBooking } = await loadBooking();
      expect(isExternalBooking()).toBe(false);
    });

    it('returns false when flag is "false"', async () => {
      const { isExternalBooking } = await loadBooking("false");
      expect(isExternalBooking()).toBe(false);
    });

    it('returns true when flag is "true"', async () => {
      const { isExternalBooking } = await loadBooking("true");
      expect(isExternalBooking()).toBe(true);
    });

    it("returns false for any non-true string", async () => {
      const { isExternalBooking } = await loadBooking("yes");
      expect(isExternalBooking()).toBe(false);
    });
  });

  // ──────────────────────────────────────────────
  // getBookNowUrl()
  // ──────────────────────────────────────────────

  describe("getBookNowUrl()", () => {
    describe("flag OFF (default)", () => {
      it("returns EN internal appointment path", async () => {
        const { getBookNowUrl } = await loadBooking("false");
        expect(getBookNowUrl("en")).toBe("/en/request-an-appoinment");
      });

      it("returns AR internal appointment path", async () => {
        const { getBookNowUrl } = await loadBooking("false");
        expect(getBookNowUrl("ar")).toBe("/ar/request-an-appoinment");
      });

      it("defaults to EN when no locale is provided", async () => {
        const { getBookNowUrl } = await loadBooking("false");
        expect(getBookNowUrl()).toBe("/en/request-an-appoinment");
      });
    });

    describe("flag ON", () => {
      it("returns EN external booking URL", async () => {
        const { getBookNowUrl } = await loadBooking("true");
        expect(getBookNowUrl("en")).toBe("https://book.bnoon.sa");
      });

      it("returns AR external booking URL", async () => {
        const { getBookNowUrl } = await loadBooking("true");
        expect(getBookNowUrl("ar")).toBe("https://book.bnoon.sa/ar");
      });

      it("defaults to EN when no locale is provided", async () => {
        const { getBookNowUrl } = await loadBooking("true");
        expect(getBookNowUrl()).toBe("https://book.bnoon.sa");
      });
    });

    describe("flag undefined", () => {
      it("falls back to internal path when env var is not set", async () => {
        const { getBookNowUrl } = await loadBooking();
        expect(getBookNowUrl("en")).toBe("/en/request-an-appoinment");
        expect(getBookNowUrl("ar")).toBe("/ar/request-an-appoinment");
      });
    });
  });

  // ──────────────────────────────────────────────
  // getBookingUrl() — doctor-specific
  // ──────────────────────────────────────────────

  describe("getBookingUrl()", () => {
    describe("flag OFF (default)", () => {
      it("returns EN internal path regardless of location", async () => {
        const { getBookingUrl } = await loadBooking("false");
        expect(getBookingUrl("Riyadh", "en")).toBe(
          "/en/request-an-appoinment"
        );
        expect(getBookingUrl("Jeddah", "en")).toBe(
          "/en/request-an-appoinment"
        );
        expect(getBookingUrl("Al Ahsa", "en")).toBe(
          "/en/request-an-appoinment"
        );
      });

      it("returns AR internal path regardless of location", async () => {
        const { getBookingUrl } = await loadBooking("false");
        expect(getBookingUrl("الرياض", "ar")).toBe(
          "/ar/request-an-appoinment"
        );
        expect(getBookingUrl("جدة", "ar")).toBe("/ar/request-an-appoinment");
      });

      it("returns internal path for undefined location", async () => {
        const { getBookingUrl } = await loadBooking("false");
        expect(getBookingUrl(undefined, "en")).toBe(
          "/en/request-an-appoinment"
        );
      });

      it("returns internal path for empty string location", async () => {
        const { getBookingUrl } = await loadBooking("false");
        expect(getBookingUrl("", "en")).toBe("/en/request-an-appoinment");
      });
    });

    describe("flag ON", () => {
      it("returns location-specific EN URL for Riyadh", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("Riyadh", "en")).toContain(
          "book.bnoon.sa/en/doctors"
        );
        expect(getBookingUrl("Riyadh", "en")).toContain("riyadh-granada");
      });

      it("returns location-specific EN URL for Jeddah", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("Jeddah", "en")).toContain(
          "book.bnoon.sa/en/doctors"
        );
        expect(getBookingUrl("Jeddah", "en")).toContain("jeddah");
      });

      it("returns location-specific EN URL for Al Ahsa", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("Al Ahsa", "en")).toContain(
          "book.bnoon.sa/en/doctors"
        );
        expect(getBookingUrl("Al Ahsa", "en")).toContain("al-ahsa");
      });

      it("returns location-specific AR URL for الرياض", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("الرياض", "ar")).toContain(
          "book.bnoon.sa/ar/doctors"
        );
        expect(getBookingUrl("الرياض", "ar")).toContain("riyadh-granada");
      });

      it("returns location-specific AR URL for جدة", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("جدة", "ar")).toContain(
          "book.bnoon.sa/ar/doctors"
        );
        expect(getBookingUrl("جدة", "ar")).toContain("jeddah");
      });

      it("returns location-specific AR URL for الأحساء", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("الأحساء", "ar")).toContain(
          "book.bnoon.sa/ar/doctors"
        );
        expect(getBookingUrl("الأحساء", "ar")).toContain("al-ahsa");
      });

      it("returns generic EN fallback for unknown location", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("Unknown City", "en")).toBe(
          "https://book.bnoon.sa"
        );
      });

      it("returns generic AR fallback for unknown location", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("مدينة غير معروفة", "ar")).toBe(
          "https://book.bnoon.sa/ar"
        );
      });

      it("returns fallback for undefined location", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl(undefined, "en")).toBe("https://book.bnoon.sa");
      });

      it("returns fallback for empty string location", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("", "en")).toBe("https://book.bnoon.sa");
      });

      it("trims whitespace from location", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("  Riyadh  ", "en")).toContain("riyadh-granada");
      });

      it("defaults locale to EN", async () => {
        const { getBookingUrl } = await loadBooking("true");
        expect(getBookingUrl("Riyadh")).toContain("book.bnoon.sa/en/doctors");
      });
    });
  });
});
