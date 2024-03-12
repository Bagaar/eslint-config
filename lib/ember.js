const ember = {
  plugins: ['ember'],
  extends: ['plugin:ember/recommended'],
  rules: {
    'ember/routes-segments-snake-case': 'off',
  },
  overrides: [
    {
      files: [
        './.eslint-graphqlrc.js',
        './.eslintrc.js',
        './.prettierrc.js',
        './.stylelintrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './tailwind.config.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './tests/dummy/config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
        './utils/**/*.js',
        './index.js',
        './style-guide/blueprints/*/*.js',
        './style-guide/config/**/*.js',
        './style-guide/*.js',
        './utils/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      extends: ['plugin:n/recommended'],
    },
    {
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
      rules: {
        'qunit/require-expect': ['error', 'except-simple'],
      },
    },
  ],
};

module.exports = ember;
