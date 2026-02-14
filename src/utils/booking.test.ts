import { describe, it, expect } from "vitest";
import { isExternalBooking, getBookNowUrl, getBookingUrl } from "./booking";

describe("booking utility", () => {
  // ──────────────────────────────────────────────
  // isExternalBooking()
  // ──────────────────────────────────────────────

  describe("isExternalBooking()", () => {
    it("returns false (runtime redirect handled by middleware)", () => {
      expect(isExternalBooking()).toBe(false);
    });
  });

  // ──────────────────────────────────────────────
  // getBookNowUrl()
  // ──────────────────────────────────────────────

  describe("getBookNowUrl()", () => {
    it("returns EN internal appointment path", () => {
      expect(getBookNowUrl("en")).toBe("/en/request-an-appoinment");
    });

    it("returns AR internal appointment path", () => {
      expect(getBookNowUrl("ar")).toBe("/ar/request-an-appoinment");
    });

    it("defaults to EN when no locale is provided", () => {
      expect(getBookNowUrl()).toBe("/en/request-an-appoinment");
    });
  });

  // ──────────────────────────────────────────────
  // getBookingUrl()
  // ──────────────────────────────────────────────

  describe("getBookingUrl()", () => {
    it("returns EN internal path for any location", () => {
      expect(getBookingUrl("Riyadh", "en")).toBe("/en/request-an-appoinment");
      expect(getBookingUrl("Jeddah", "en")).toBe("/en/request-an-appoinment");
      expect(getBookingUrl("Al Ahsa", "en")).toBe("/en/request-an-appoinment");
    });

    it("returns AR internal path for any location", () => {
      expect(getBookingUrl("الرياض", "ar")).toBe("/ar/request-an-appoinment");
      expect(getBookingUrl("جدة", "ar")).toBe("/ar/request-an-appoinment");
    });

    it("returns internal path for undefined location", () => {
      expect(getBookingUrl(undefined, "en")).toBe("/en/request-an-appoinment");
    });

    it("returns internal path for empty string location", () => {
      expect(getBookingUrl("", "en")).toBe("/en/request-an-appoinment");
    });

    it("defaults locale to EN", () => {
      expect(getBookingUrl("Riyadh")).toBe("/en/request-an-appoinment");
    });
  });
});
