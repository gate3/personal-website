module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  plugins: ['react', 'flow'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'], // follow Facebook's convention for double quotes in JSX attributes.
  },
};
