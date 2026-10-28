import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './PlaywrightBasics',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
         ? [['html', { open: 'never' }], ['junit', { outputFile: 'results.xml' }], ['github']]
     : [['html']],

  use: {
    headless: !!process.env.CI,        // headed locally, headless on CI
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});