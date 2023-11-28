const config = require('../lib/index')


module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ['./index.js'],
      rules: {
        "no-console": 'off',
      }
    },
  ]
};
