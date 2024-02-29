const graphql = {
  overrides: [
    {
      extends: ['plugin:@graphql-eslint/operations-all'],
      plugins: ['@graphql-eslint'],
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      rules: {
        '@graphql-eslint/no-deprecated': 'warn',
      },
    },
    {
      files: ['schema.graphql'],
      rules: {
        '@graphql-eslint/executable-definitions': 'off',
      },
    },
  ],
};

module.exports = graphql;
