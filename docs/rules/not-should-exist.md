## Rule Details

This rule aims to ensure elements not only exist on the page but are visible to the user.

Examples of **incorrect** code for this rule:

```js

cy.get('error').should('exist');

```

Examples of **correct** code for this rule:

```js

cy.get('error').should('be.visible');

```

## When Not To Use It

If the element is not required to be visible to the user.
