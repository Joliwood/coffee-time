module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
  ignorePatterns: ['dist'],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  rules: {
    'react/no-unescaped-entities': 0,
    'no-console': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
  },
};
