import { test, expect } from "@playwright/test";

test.describe("Error handling", () => {
  test("404 page renders for non-existent route (English)", async ({ page }) => {
    const response = await page.goto("/en/non-existent-page-xyz");
    expect(response?.status()).toBe(404);
    await expect(page.locator("body")).toContainText(/not found|404/i);
  });

  test("404 page renders for non-existent route (Arabic)", async ({ page }) => {
    const response = await page.goto("/ar/non-existent-page-xyz");
    expect(response?.status()).toBe(404);
    await expect(page.locator("body")).toContainText(/غير موجودة|404|not found/i);
  });
});
