# eslint-plugin-cypress-test-best-practices

best practices for cypress tests. From my experience at Cancer Research UK.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-cypress-test-best-practices`:

```
$ npm install eslint-plugin-cypress-test-best-practices --save-dev
```


## Usage

Add `cypress-test-best-practices` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "cypress-test-best-practices"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "cypress-test-best-practices/at-least-one-assertion": 2
    }
}
```

## Supported Rules

* See ```docs``` folder
