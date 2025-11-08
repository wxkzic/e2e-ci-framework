import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}
  byTest(id: string): Locator { return this.page.locator(`[data-test="${id}"]`); }
  async goto(path = '/') { await this.page.goto(path); }
  async expectUrl(rx: RegExp) { await expect(this.page).toHaveURL(rx); }
}
