module.exports = {
  extends: 'pureprofile',
  parser: 'espree',
  parserOptions: { ecmaVersion: 5 },
  rules: {
    // disable es6 rules
    'prefer-arrow-callback': 0,
    'prefer-template': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-var': 0,
    'strict': ['error', 'function']
  }
};
