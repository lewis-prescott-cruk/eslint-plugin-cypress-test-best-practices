'use strict'

module.exports = {
  plugins: ['cypress-test-best-practices', 'cypress'],
  "extends": [
    "plugin:cypress/recommended",
    "plugin:chai-friendly/recommended"
  ],
  rules: {
    'cypress-test-best-practices/at-least-one-assertion': 'error',
    'cypress-test-best-practices/foreach-outside-it': 'warn',
    'cypress-test-best-practices/no-debug-log': 'warn',
    'cypress-test-best-practices/not-should-exist': 'error',
    'cypress-test-best-practices/prefer-contains-text': 'warn',
    'cypress-test-best-practices/start-with-should': 'warn',
    'cypress/no-force': 'error',
  },
}