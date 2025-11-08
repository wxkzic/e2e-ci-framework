import { chromium, BrowserContext, Page } from '@playwright/test';
import * as fs from 'fs';

export interface UserCredentials {
  email: string;
  pass: string;
}

    // Create and save storageState for a user role (login once)

export async function createUserRole(name: string, creds: UserCredentials, baseUrl: string) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(baseUrl);

  await page.locator('#user-name').fill(creds.email);
  await page.locator('#password').fill(creds.pass);
  await page.locator('#login-button').click();
  await page.waitForURL('**/inventory.html');

  fs.mkdirSync('setup/storageState', { recursive: true });
  await context.storageState({ path: `setup/storageState/${name}.json` });

  await browser.close();
}

    // Load user role by creating a new context that uses saved auth state
    
export async function useRole(browser: any, name: string): Promise<{ context: BrowserContext; page: Page }> {
  const context = await browser.newContext({
    storageState: `setup/storageState/${name}.json`
  });

  const page = await context.newPage();
  return { context, page };
}
