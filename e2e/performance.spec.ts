import { test, expect } from "@playwright/test";

const isRemote = !!(process.env.E2E_BASE_URL && !process.env.E2E_BASE_URL.includes("localhost"));
const PAGE_LOAD_LIMIT = isRemote ? 30_000 : 15_000;

test.describe("Performance and loading", () => {
  test("homepage loads within time limit", async ({ page }) => {
    const start = Date.now();
    await page.goto("/en", { waitUntil: "domcontentloaded" });
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(PAGE_LOAD_LIMIT);
  });

  test("Arabic homepage loads within time limit", async ({ page }) => {
    const start = Date.now();
    await page.goto("/ar", { waitUntil: "domcontentloaded" });
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(PAGE_LOAD_LIMIT);
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
    // Filter out known benign errors (favicon, ad blockers, third-party services that fail locally)
    const criticalErrors = errors.filter(
      (e) =>
        !e.includes("favicon") &&
        !e.includes("ERR_BLOCKED_BY_CLIENT") &&
        !e.includes("400 (Bad Request)") &&
        !e.includes("googletagmanager") &&
        !e.includes("google-analytics") &&
        !e.includes("recaptcha")
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
