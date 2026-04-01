import { defineConfig } from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: 'tests/playwright',
  retries: isCI ? 1 : 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    baseURL,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
});
