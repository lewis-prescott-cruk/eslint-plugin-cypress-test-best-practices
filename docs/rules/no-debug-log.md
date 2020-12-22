## Rule Details

This rule aims to ensure logs are not left from when debugging was performed.

Examples of **incorrect** code for this rule:

```js

cy.log('debug');

```

Examples of **correct** code for this rule:

```js

// Comment stating the reason for workaround or code not following best practice

```

## When Not To Use It

If the log is useful information for understanding test failures.
