# Bagaar EsLint Config

![Bagaar Logo](https://bagaar.be/hubfs/logo-bagaar-black.svg)

**`@bagaar/eslint-config` is built and maintained by [Bagaar](https://bagaar.be).**

[![NPM Version](https://badge.fury.io/js/%40bagaar%2Feslint-config.svg)](https://badge.fury.io/js/%40bagaar%2Feslint-config) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

EsLint config for Bagaar projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

### NPM

```shell
npm install @bagaar/eslint-config --save-dev
```

### Yarn

```shell
yarn add @bagaar/eslint-config --dev
```

### pnpm

```shell
pnpm add @bagaar/eslint-config --save-dev
```

## Usage

Extend your local config with the default export of `@bagaar/eslint-config`:.

```javascript
// .eslintrc.js

const config = require('@bagaar/eslint-config');

module.exports = {
  ...config,
  root: true,
};

```

The `config` value here is just a plain JS object so it can be customised at will. The config will contain different rules based on which dependencies are present, all peerdependencies are therefore optional.

If you want to extend instead of override a property, be sure to spread the original values as well, for example:

```javascript
// .eslintrc.js

const config = require('@bagaar/eslint-config');

module.exports = {
  ...config,
  root: true,
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

```

To print out the generated config to the console, set the env var `DEBUG=true`. e.g.:

```json
// package.json
...
  "scripts": {
    "lint": "eslint . --cache",
    "lint:debug": "DEBUG=true eslint .",
  },
...

```

## License

This project is licensed under the [MIT License](./LICENSE.md).
