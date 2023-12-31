import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
 
  fullyParallel: true,
  
  forbidOnly: !!process.env.CI,
  
  retries: process.env.CI ? 2 : 0,
 
  workers: process.env.CI ? 1 : undefined,
  
  reporter: 'html',
  
  use: {
   
    headless:false,
    
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google Chrome',
      use: {
          viewport: null,
          channel: 'chrome',
          launchOptions: {
              args: ["--start-maximized"]
          }
      },
    },
  ],

 
});
