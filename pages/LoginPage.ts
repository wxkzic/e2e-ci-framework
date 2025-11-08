import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  email = this.byTest('email');
  pass = this.byTest('password');
  submit = this.byTest('login');

  async open() { await this.goto('/login'); }
  async login(creds: { email: string; pass: string }) {
    await this.email.fill(creds.email);
    await this.pass.fill(creds.pass);
    await this.submit.click();
  }
}
