/**
 * @fileoverview every test has one assertion at least
 * @author Lewis Prescott
 */
"use strict";
const dedent = require('dedent');
var rule = require("../../../lib/rules/at-least-one-assertion"),

    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("at-least-one-assertion", rule, {

    valid: [
        "cy.contains('success').should('be.visible');"
    ],

    invalid: [
        {
            code: dedent`
            it('incorrect', function() {
              cy.get('submit').click();
            });
          `,
            errors: [{
                message: "test should contain at least 1 should or expect"
            }]
        }
    ]
});
