module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['dist', 'reports', '.playwright', 'test-results'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'off'
  }
};
