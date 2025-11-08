import 'dotenv/config';
import { chromium } from '@playwright/test';
import * as fs from 'fs';

export default async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(process.env.BASE_URL!);

  await page.locator('#user-name').fill(process.env.E2E_USER!);
  await page.locator('#password').fill(process.env.E2E_PASS!);
  await page.locator('#login-button').click();
  await page.waitForURL('**/inventory.html');

  fs.mkdirSync('setup/storageState', { recursive: true });
  await page.context().storageState({ path: 'setup/storageState/auth.json' });

  await browser.close();
}
