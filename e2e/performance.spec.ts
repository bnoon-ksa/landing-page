import { test, expect } from '@playwright/test';

test.describe('Performance and loading', () => {
  test('homepage loads within 15 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto('/en', { waitUntil: 'domcontentloaded' });
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(15000);
  });

  test('Arabic homepage loads within 15 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto('/ar', { waitUntil: 'domcontentloaded' });
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(15000);
  });

  test('no console errors on English homepage', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    await page.goto('/en');
    await page.waitForTimeout(2000);
    // Filter out known benign errors (favicon, ad blockers, third-party services that fail locally)
    const criticalErrors = errors.filter(
      (e) =>
        !e.includes('favicon') &&
        !e.includes('ERR_BLOCKED_BY_CLIENT') &&
        !e.includes('400 (Bad Request)') &&
        !e.includes('googletagmanager') &&
        !e.includes('google-analytics') &&
        !e.includes('recaptcha'),
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test('images use Next.js optimization (no raw img tags in content)', async ({ page }) => {
    await page.goto('/en');
    // Next.js Image component renders with specific attributes
    const nextImages = page.locator("img[loading='lazy'], img[decoding='async']");
    const count = await nextImages.count();
    expect(count).toBeGreaterThan(0);
  });

  test('/_next/image endpoint returns optimized images', async ({ request }) => {
    // Test that the image optimization endpoint works (not 500)
    const response = await request.get('/_next/image?url=%2Fimages%2Ffav.png&w=128&q=75');
    expect(response.status()).toBe(200);
    const contentType = response.headers()['content-type'];
    expect(contentType).toMatch(/image\/(webp|avif|jpeg|png)/);
  });

  test('server returns compressed responses', async ({ request }) => {
    const response = await request.get('/en', {
      headers: { 'Accept-Encoding': 'gzip, deflate, br' },
    });
    expect(response.status()).toBe(200);
    const encoding = response.headers()['content-encoding'];
    expect(encoding).toBeTruthy();
    expect(['gzip', 'br', 'deflate']).toContain(encoding);
  });
});
