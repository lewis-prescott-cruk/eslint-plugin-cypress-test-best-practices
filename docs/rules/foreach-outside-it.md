## Rule Details

This rule aims to create a test for each scenario.

Examples of **incorrect** code for this rule:

```js

it('incorrect forEach', () => {
    [1, 2].forEach((scenario) => {});
});

```

Examples of **correct** code for this rule:

```js
[1, 2].forEach((scenario) => {
    it('correct forEach', () => {});
});

```

## When Not To Use It

Unknown.
