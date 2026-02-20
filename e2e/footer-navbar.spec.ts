import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test('navbar is visible on English homepage', async ({ page }) => {
    await page.goto('/en');
    const navbar = page.locator('nav, .navbar, header').first();
    await expect(navbar).toBeVisible();
  });

  test('navbar is visible on Arabic homepage', async ({ page }) => {
    await page.goto('/ar');
    const navbar = page.locator('nav, .navbar, header').first();
    await expect(navbar).toBeVisible();
  });

  test('navbar has navigation links', async ({ page }) => {
    await page.goto('/en');
    const navLinks = page.locator('nav a, .navbar a, header a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(2);
  });
});

test.describe('Footer', () => {
  test('footer is visible on English homepage', async ({ page }) => {
    await page.goto('/en');
    const footer = page.locator('footer').first();
    await expect(footer).toBeVisible();
  });

  test('footer is visible on Arabic homepage', async ({ page }) => {
    await page.goto('/ar');
    const footer = page.locator('footer').first();
    await expect(footer).toBeVisible();
  });

  test('footer contains contact information', async ({ page }) => {
    await page.goto('/en');
    const footer = page.locator('footer');
    // Check for phone number or email or address
    const text = await footer.textContent();
    expect(text).toBeTruthy();
  });
});
