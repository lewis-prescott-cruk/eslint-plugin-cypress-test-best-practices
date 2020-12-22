/**
 * @fileoverview not should exist
 * @author Lewis Prescott
 */
"use strict";

var rule = require("../../../lib/rules/not-should-exist"),

    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("not-should-exist", rule, {

    valid: [
        "cy.get('error').should('be.visible')"
    ],

    invalid: [
        {
            code: "cy.get('error').should('exist')",
            errors: [{
                message: "use 'be.visible' instead"
            }]
        }
    ]
});
