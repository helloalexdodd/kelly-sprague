module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
  plugins: ['react', 'react-hooks', 'babel-plugin-root-import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/display-name': 1,
    'react/jsx-props-no-spreading': 0,
  },
};
