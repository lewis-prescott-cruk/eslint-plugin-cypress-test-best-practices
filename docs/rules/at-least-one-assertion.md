## Rule Details

This rule aims to ensure each test has at least 1 assertion.

Examples of **incorrect** code for this rule:

```js

it('incorrect test', () => {
    cy.get('submit').click();
});

```

Examples of **correct** code for this rule:

```js

it('correct test', () => {
    cy.get('submit').click();
    cy.contains('success').should('be.visible');
});

```

## When Not To Use It

Never.
