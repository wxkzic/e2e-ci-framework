import { test as base, expect } from '@playwright/test';

type Fixtures = {
  creds: { email: string; pass: string };
};

export const test = base.extend<Fixtures>({
  creds: [{ email: process.env.E2E_USER || 'user@test.io', pass: process.env.E2E_PASS || 'secret' }, { scope: 'test' }]
});

export { expect };
