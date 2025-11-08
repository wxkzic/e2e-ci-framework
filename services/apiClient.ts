import { APIRequestContext, expect } from '@playwright/test';

export class ApiClient {
  constructor(private api: APIRequestContext, private base = process.env.BASE_URL || '') {}
  async health() {
    const res = await this.api.get(`${this.base}/api/health`);
    expect(res.ok()).toBeTruthy();
    return res.json();
  }
}
