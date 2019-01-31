module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    '../lib/index.js',
  ],
  env: {
    browser: true,
  },
};
