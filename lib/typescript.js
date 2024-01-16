module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['*.interface.ts'],
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
};
