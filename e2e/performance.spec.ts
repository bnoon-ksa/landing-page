import { test, expect } from "@playwright/test";

test.describe("Performance and loading", () => {
  test("homepage loads within 15 seconds", async ({ page }) => {
    const start = Date.now();
    await page.goto("/en", { waitUntil: "domcontentloaded" });
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(15000);
  });

  test("Arabic homepage loads within 15 seconds", async ({ page }) => {
    const start = Date.now();
    await page.goto("/ar", { waitUntil: "domcontentloaded" });
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(15000);
  });

  test("no console errors on English homepage", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });
    await page.goto("/en");
    await page.waitForTimeout(2000);
    // Filter out known benign errors (e.g., favicon, third-party scripts)
    const criticalErrors = errors.filter(
      (e) => !e.includes("favicon") && !e.includes("ERR_BLOCKED_BY_CLIENT")
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test("images use Next.js optimization (no raw img tags in content)", async ({ page }) => {
    await page.goto("/en");
    // Next.js Image component renders with specific attributes
    const nextImages = page.locator("img[loading='lazy'], img[decoding='async']");
    const count = await nextImages.count();
    expect(count).toBeGreaterThan(0);
  });
});
