module.exports = {
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
    }],
    'lines-around-comment': ['error', {
      'afterBlockComment': true,
      'beforeBlockComment': true,
    }],
    'no-multiple-empty-lines': ['error', {
      'max': 1,
    }],
    'no-trailing-spaces': 'error',
    'quotes': ['error', 'single', {
      'avoidEscape': true,
    }],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'asyncArrow': 'always',
      'named': 'never',
    }],
    'spaced-comment': ['error', 'always'],
  },
};
