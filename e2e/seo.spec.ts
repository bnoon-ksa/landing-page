import { test, expect } from "@playwright/test";

test.describe("SEO meta tags", () => {
  test("English homepage has meta description", async ({ page }) => {
    await page.goto("/en");
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute("content", /.+/);
  });

  test("Arabic homepage has meta description", async ({ page }) => {
    await page.goto("/ar");
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute("content", /.+/);
  });

  test("homepage has valid viewport meta tag", async ({ page }) => {
    await page.goto("/en");
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute("content", /width=device-width/);
  });

  test("pages have unique titles", async ({ page }) => {
    await page.goto("/en");
    const homeTitle = await page.title();

    await page.goto("/en/about-us");
    const aboutTitle = await page.title();

    expect(homeTitle).toBeTruthy();
    expect(aboutTitle).toBeTruthy();
    expect(homeTitle).not.toBe(aboutTitle);
  });

  test("favicon is configured", async ({ page }) => {
    await page.goto("/en");
    const favicon = page.locator('link[rel="icon"], link[rel="shortcut icon"]');
    const count = await favicon.count();
    expect(count).toBeGreaterThan(0);
  });
});
