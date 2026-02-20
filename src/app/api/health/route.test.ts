import { describe, it, expect, vi } from 'vitest';
import { GET } from './route';

describe('GET /api/health', () => {
  it('returns healthy status with correct shape', async () => {
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toHaveProperty('status', 'healthy');
    expect(body).toHaveProperty('version');
    expect(body).toHaveProperty('uptime');
    expect(body).toHaveProperty('timestamp');
  });

  it('returns version matching package.json', async () => {
    const response = await GET();
    const body = await response.json();
    const pkg = await import('../../../../package.json');

    expect(body.version).toBe(pkg.version);
  });

  it('returns a valid ISO timestamp', async () => {
    const response = await GET();
    const body = await response.json();

    const parsed = new Date(body.timestamp);
    expect(parsed.toISOString()).toBe(body.timestamp);
  });

  it('returns uptime as a non-negative integer', async () => {
    const response = await GET();
    const body = await response.json();

    expect(typeof body.uptime).toBe('number');
    expect(body.uptime).toBeGreaterThanOrEqual(0);
    expect(Number.isInteger(body.uptime)).toBe(true);
  });
});
