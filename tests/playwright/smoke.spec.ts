import { test, expect } from '@playwright/test';

const base = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';

test.describe('smoke', () => {
  test('home page shows hero and demo widget', async ({ page }) => {
    const resp = await page.goto(base + '/');
    expect(resp?.status()).toBeLessThan(400);
    await expect(page.getByText('Pulse — Turn ideas into tiny apps')).toBeVisible();
    await expect(page.getByText('DemoWidget')).toBeVisible();
  });

  test('contact or demo page loads', async ({ page }) => {
    const paths = ['/contact', '/demo'];
    let ok = false;
    for (const p of paths) {
      const resp = await page.goto(base + p);
      if (resp && resp.status() < 400) {
        ok = true;
        break;
      }
    }
    expect(ok).toBeTruthy();
  });
});
