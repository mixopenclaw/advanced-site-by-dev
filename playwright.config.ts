import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/playwright',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
});
