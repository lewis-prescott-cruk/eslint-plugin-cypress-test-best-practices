/**
 * @fileoverview use cy.contains where possible
 * @author Lewis Prescott
 */
"use strict";

var rule = require("../../../lib/rules/prefer-contains-text"),

    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("prefer-contains-text", rule, {

    valid: [
        "cy.contains('text').should('be.visible')"
    ],

    invalid: [
        {
            code: "cy.get('element').should('have.text', 'invalid')",
            errors: [{
                message: "can you use cy.contains instead with should('be.visible')"
            }]
        },
        {
            code: "cy.get('element').should('contain.text', 'invalid')",
            errors: [{
                message: "can you use cy.contains instead with should('be.visible')"
            }]
        }
    ]
});
