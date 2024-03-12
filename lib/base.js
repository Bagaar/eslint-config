const base = {
  env: {
    browser: true,
  },
  plugins: [],
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': ['error', { allow: ['error', 'warn'] }],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
};

module.exports = base;
