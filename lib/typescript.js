module.exports = {
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
    {
      files: ['*.interface.ts'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
};
