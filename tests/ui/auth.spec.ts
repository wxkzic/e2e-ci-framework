import { test, expect } from '@playwright/test';

const base = process.env.BASE_URL ?? '';
test.skip(!/saucedemo\.com/i.test(base), 'Login flow requires a site with a real login page');

test('login → dashboard smoke', async ({ page }) => {
  await page.goto('/');                                         // https://www.saucedemo.com/
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL(/inventory\.html$/);
});
