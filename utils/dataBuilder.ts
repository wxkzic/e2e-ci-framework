export const userBuilder = (o: Partial<{ email: string; pass: string }> = {}) => ({
  email: `user_${Date.now()}@test.io`,
  pass: 'Passw0rd!',
  ...o
});
