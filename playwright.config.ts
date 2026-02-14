import { defineConfig } from "@playwright/test";

const baseURL = process.env.E2E_BASE_URL ?? "http://localhost:3099";
const isLocal = baseURL.includes("localhost");

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: "html",
  timeout: isLocal ? 30_000 : 60_000,
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    navigationTimeout: isLocal ? 30_000 : 45_000,
    actionTimeout: isLocal ? 10_000 : 30_000,
  },
  ...(isLocal
    ? {
        webServer: {
          command: "npx next start -p 3099",
          port: 3099,
          reuseExistingServer: !process.env.CI,
          timeout: 60_000,
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
