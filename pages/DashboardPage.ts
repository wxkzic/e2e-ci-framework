import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class DashboardPage extends BasePage {
  welcome = this.byTest('dashboard-welcome');
  async expectLoaded() { await expect(this.welcome).toBeVisible(); }
}
