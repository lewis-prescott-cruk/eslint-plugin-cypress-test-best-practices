## Rule Details

This rule aims to ensure clicks are not forced.

Examples of **incorrect** code for this rule:

```js

cy.get('button').click({ focus: true });

```

Examples of **correct** code for this rule:

```js

cy.get('button').focus().click();

```

## When Not To Use It

If the element is not clickable in any other way.
