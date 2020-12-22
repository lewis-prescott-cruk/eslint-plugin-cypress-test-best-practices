'use strict'

module.exports = {
  plugins: ['cypress-test-best-practices'],
  rules: {
    'cypress-test-best-practices/at-least-one-assertion': 'error',
    'cypress-test-best-practices/foreach-outside-it': 'warning',
    'cypress-test-best-practices/no-debug-log': 'warning',
    'cypress-test-best-practices/no-force-click': 'error',
    'cypress-test-best-practices/not-should-exist': 'error',
    'cypress-test-best-practices/prefer-contains-text': 'warning',
    'cypress-test-best-practices/start-with-should': 'warning',
  },
}