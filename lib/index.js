module.exports = {
  rules: {
    'block-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
    }],
    'keyword-spacing': 'error',
    'lines-around-comment': ['error', {
      'afterBlockComment': true,
      'allowArrayStart': true,
      'allowBlockStart': true,
      'allowClassStart': true,
      'allowObjectStart': true,
    }],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {
      'max': 1,
    }],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'quotes': ['error', 'single', {
      'allowTemplateLiterals': true,
    }],
    'semi': ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'asyncArrow': 'always',
      'named': 'never',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
  },
};
