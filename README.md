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

## Usage

Add `@bagaar/eslint-config` to the `extends` array of your `.eslintrc.js` file.

```javascript
// .eslintrc.js

module.exports = {
  extends: [
    'eslint:recommended',
    '@bagaar/eslint-config'
  ]
};
```

## License

This project is licensed under the [MIT License](./LICENSE.md).
