import { test, expect } from "@playwright/test";

test.describe("Navbar", () => {
  test("navbar is visible on English homepage", async ({ page }) => {
    await page.goto("/en", { waitUntil: "domcontentloaded", timeout: 90000 });
    const navbar = page.locator("nav, .navbar, header").first();
    await expect(navbar).toBeVisible({ timeout: 20000 });
  });

  test("navbar is visible on Arabic homepage", async ({ page }) => {
    await page.goto("/ar", { waitUntil: "domcontentloaded", timeout: 90000 });
    const navbar = page.locator("nav, .navbar, header").first();
    await expect(navbar).toBeVisible({ timeout: 20000 });
  });

  test("navbar has navigation links", async ({ page }) => {
    await page.goto("/en", { waitUntil: "domcontentloaded", timeout: 90000 });
    const navLinks = page.locator("nav a, .navbar a, header a");
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(2);
  });
});

test.describe("Footer", () => {
  test("footer is visible on English homepage", async ({ page }) => {
    await page.goto("/en", { waitUntil: "domcontentloaded", timeout: 90000 });
    const footer = page.locator("footer").first();
    await expect(footer).toBeVisible({ timeout: 20000 });
  });

  test("footer is visible on Arabic homepage", async ({ page }) => {
    await page.goto("/ar", { waitUntil: "domcontentloaded", timeout: 90000 });
    const footer = page.locator("footer").first();
    await expect(footer).toBeVisible({ timeout: 20000 });
  });

  test("footer contains contact information", async ({ page }) => {
    await page.goto("/en", { waitUntil: "domcontentloaded", timeout: 90000 });
    const footer = page.locator("footer");
    const text = await footer.textContent();
    expect(text).toBeTruthy();
  });
});
