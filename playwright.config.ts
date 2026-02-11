import { defineConfig } from "@playwright/test";

const baseURL = process.env.E2E_BASE_URL ?? "https://bnoon.sa";
const isLocal = baseURL.includes("localhost");

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  ...(isLocal
    ? {
        webServer: {
          command: "npx next start -p 3099",
          port: 3099,
          reuseExistingServer: !process.env.CI,
          timeout: 30000,
        },
      }
    : {}),
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
