const base = require('./base');
const ember = require('./ember');
const typescript = require('./typescript');
const path = require('path');

function hasDep(depName) {
  try {
    const packageJson = `${depName}/package.json`;
    const paths = [path.resolve(process.cwd(), './node_modules')];
    return Boolean(require.resolve(packageJson, { paths }));
  } catch (e) {
    if (e instanceof Error) {
      if (e.message.startsWith(`Cannot find module '${depName}/package.json'`))
        return false;
    }
    throw e;
  }
}

const hasEmber = hasDep('ember-source');
const hasTypescript = hasDep('@typescript-eslint/parser');
const parser = hasTypescript
  ? '@typescript-eslint/parser'
  : '@babel/eslint-parser';

const mergedConfig = {
  ...base,
  parser,
  plugins: [...base.plugins, ...(hasEmber ? ember.plugins : [])],
  rules: {
    ...base.rules,
    ...(hasEmber ? ember.rules : {}),
  },
  extends: [...base.extends, ...(hasEmber ? ember.extends : [])],
  overrides: [
    ...(hasEmber ? ember.overrides : []),
    ...(hasTypescript ? typescript.overrides : []),
  ],
};

if (process.env.DEBUG === 'true') {
  console.log('Generated eslint config: ');
  console.log(JSON.stringify(mergedConfig, null, 2));
}

module.exports = mergedConfig;
