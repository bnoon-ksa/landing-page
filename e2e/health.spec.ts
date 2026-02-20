import { test, expect } from '@playwright/test';

test.describe('Health API', () => {
  test('GET /api/health returns healthy status', async ({ request }) => {
    const response = await request.get('/api/health');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.status).toBe('healthy');
    expect(body.version).toBeDefined();
    expect(body.uptime).toBeGreaterThanOrEqual(0);
    expect(new Date(body.timestamp).toISOString()).toBe(body.timestamp);
  });
});
