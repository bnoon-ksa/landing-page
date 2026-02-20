import { test, expect } from '@playwright/test';

test.describe('Appointment form page', () => {
  test('appointment page loads with form elements', async ({ page }) => {
    await page.goto('/en/request-an-appoinment');
    await expect(page).toHaveTitle(/Appointment|Bnoon/i);

    // Check form exists
    const form = page.locator('form').first();
    await expect(form).toBeVisible();
  });

  test('appointment form has required input fields', async ({ page }) => {
    await page.goto('/en/request-an-appoinment');
    const inputs = page.locator('form input, form select, form textarea');
    const count = await inputs.count();
    expect(count).toBeGreaterThan(2);
  });

  test('Arabic appointment page loads', async ({ page }) => {
    await page.goto('/ar/request-an-appoinment');
    const form = page.locator('form').first();
    await expect(form).toBeVisible();
  });
});

test.describe('Feedback form page', () => {
  test('feedback page loads with form', async ({ page }) => {
    await page.goto('/en/submit-feedback');
    await expect(page).toHaveTitle(/Feedback|Bnoon/i);
    const form = page.locator('form').first();
    await expect(form).toBeVisible();
  });
});

test.describe('Contact us page', () => {
  test('contact page loads with form or contact info', async ({ page }) => {
    await page.goto('/en/contact-us');
    await expect(page).toHaveTitle(/Contact/i);
    // Page should have either a form or contact details
    const content = await page.textContent('body');
    expect(content!.length).toBeGreaterThan(100);
  });
});
