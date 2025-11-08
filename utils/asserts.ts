import { expect, Locator } from '@playwright/test';

export async function expectReady(spinner: Locator, content: Locator) {
  await expect(spinner).toBeHidden();
  await expect(content).toBeVisible();
}
