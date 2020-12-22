## Rule Details

This rule aims to ensure no unnecessary cy.get when asserting text.

Examples of **incorrect** code for this rule:

```js

cy.get('element').should('have.text', 'incorrect');

```

Examples of **correct** code for this rule:

```js

cy.contains('correct').should('be.visible');

```

## When Not To Use It

If the text is not static.
