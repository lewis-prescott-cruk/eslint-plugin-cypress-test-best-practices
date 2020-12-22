# eslint-plugin-test-best-practices

best practices for cypress tests. From my experience at Cancer Research UK.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-test-best-practices`:

```
$ npm install eslint-plugin-test-best-practices --save-dev
```


## Usage

Add `test-best-practices` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "test-best-practices"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "test-best-practices/at-least-one-assertion": 2
    }
}
```

## Supported Rules

* See [docs](/docs/rules)
