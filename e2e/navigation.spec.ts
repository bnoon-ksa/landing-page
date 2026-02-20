import { test, expect } from '@playwright/test';

test.describe('English pages', () => {
  test('homepage loads with correct title', async ({ page }) => {
    await page.goto('/en');
    await expect(page).toHaveTitle(/Bnoon/i);
  });

  test('homepage has navbar with logo', async ({ page }) => {
    await page.goto('/en');
    const logo = page
      .locator("img[alt*='logo' i], img[alt*='bnoon' i], img[alt*='Doutor' i], .navbar img")
      .first();
    await expect(logo).toBeVisible();
  });

  test('about-us page loads', async ({ page }) => {
    await page.goto('/en/about-us');
    await expect(page).toHaveTitle(/About Us|Bnoon/i);
  });

  test('our-experts page loads', async ({ page }) => {
    await page.goto('/en/our-experts');
    await expect(page).toHaveTitle(/Bnoon|Doctor|Expert|IVF/i);
  });

  test('our-clinics page loads', async ({ page }) => {
    await page.goto('/en/our-clinics');
    await expect(page).toHaveTitle(/Bnoon|Clinic/i);
  });

  test('treatments page loads', async ({ page }) => {
    await page.goto('/en/treatments');
    await expect(page).toHaveTitle(/Bnoon|Treatment|Fertil/i);
  });

  test('contact-us page loads', async ({ page }) => {
    await page.goto('/en/contact-us');
    await expect(page).toHaveTitle(/Contact/i);
  });

  test('doctor profile page loads', async ({ page }) => {
    await page.goto('/en/dr-fawaz-edris');
    await expect(page).toHaveTitle(/Fawaz|Bnoon/i);
  });

  test('clinic page loads', async ({ page }) => {
    await page.goto('/en/bnoon-riyadh');
    await expect(page).toHaveTitle(/Riyadh|Bnoon/i);
  });

  test('fertility-guide page loads', async ({ page }) => {
    await page.goto('/en/fertility-guide');
    await expect(page).toHaveTitle(/Fertil|Bnoon/i);
  });
});

test.describe('Arabic pages', () => {
  test('homepage loads with correct title', async ({ page }) => {
    await page.goto('/ar');
    await expect(page).toHaveTitle(/بنون/);
  });

  test('about-us page loads', async ({ page }) => {
    await page.goto('/ar/about-us');
    await expect(page).toHaveTitle(/بنون|من نحن/);
  });

  test('doctor profile page loads (Arabic)', async ({ page }) => {
    await page.goto('/ar/dr-fawaz-edris');
    await expect(page).toHaveTitle(/فواز|بنون/);
  });

  test('treatments page loads (Arabic)', async ({ page }) => {
    await page.goto('/ar/treatments');
    await expect(page).toHaveTitle(/بنون|علاج/);
  });
});
