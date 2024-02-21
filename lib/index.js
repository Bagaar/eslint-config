const base = require('./base');
const ember = require('./ember');
const typescript = require('./typescript');
const graphql = require('./graphql');
const path = require('path');
const fs = require('fs');

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
const hasGraphql = hasDep('@graphql-eslint/eslint-plugin');

if (hasGraphql) {
  const configFileLocation = path.resolve('.graphqlrc.json');
  const hasGraphqlConfig = fs.existsSync(configFileLocation);
  if (!hasGraphqlConfig) {
    console.warn(
      `No file found at ${configFileLocation}. Please create one to be able to lint graphql files with the correct schema.`,
    );
  }

  const graphqlConfig = require(configFileLocation);
  const graphqlSchemaLocation = path.resolve(graphqlConfig.schema);

  if (!fs.existsSync(graphqlSchemaLocation)) {
    console.warn(
      `No graphql schema file found at ${graphqlSchemaLocation}. Please create one to be able to lint graphql files with the correct schema.`,
    );
  }
}

const parser = hasTypescript
  ? '@typescript-eslint/parser'
  : '@babel/eslint-parser';

const mergedConfig = {
  ...base,
  parser,
  plugins: [
    ...base.plugins,
    ...(hasEmber ? ember.plugins : []),
    ...(hasTypescript ? typescript.plugins : []),
  ],
  rules: {
    ...base.rules,
    ...(hasEmber ? ember.rules : {}),
  },
  extends: [...base.extends, ...(hasEmber ? ember.extends : [])],
  overrides: [
    ...(hasEmber ? ember.overrides : []),
    ...(hasTypescript ? typescript.overrides : []),
    ...(hasGraphql ? graphql.overrides : []),
  ],
};

if (process.env.DEBUG === 'true') {
  console.log('Generated eslint config: ');
  console.log(JSON.stringify(mergedConfig, null, 2));
}

module.exports = mergedConfig;
