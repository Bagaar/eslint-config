const base = {
  globals: {
    MyGlobal: true,
  },
  env: {
    browser: true,
  },
  plugins: [],
  extends: ['eslint:recommended'],
  parserOptions: {
    babelOptions: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
      ],
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  rules: {
    'no-console': ['error', { allow: ['error', 'warn'] }],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'never', prev: 'import', next: 'import' },
    ],
  },
};

module.exports = base;
