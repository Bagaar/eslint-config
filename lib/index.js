module.exports = {
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
    }],
    'lines-around-comment': ['error', {
      'afterBlockComment': true,
      'allowArrayStart': true,
      'allowBlockStart': true,
      'allowClassStart': true,
      'allowObjectStart': true,
    }],
    'no-multiple-empty-lines': ['error', {
      'max': 1,
    }],
    'no-trailing-spaces': 'error',
    'quotes': ['error', 'single', {
      'allowTemplateLiterals': true,
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
