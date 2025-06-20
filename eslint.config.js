import jsdoc from 'eslint-plugin-jsdoc';

const config = [
  jsdoc.configs['flat/recommended'],
  {
    files: ['**/*.js'],
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/no-undefined-types': 'error'
    }
  }
];

export default config;