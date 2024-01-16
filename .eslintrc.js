'use strict';

const config = require('./lib/index.js');

module.exports = {
  ...config,
  root: true,
  env: { node: true },
};
