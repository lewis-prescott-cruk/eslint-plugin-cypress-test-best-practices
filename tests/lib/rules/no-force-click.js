/**
 * @fileoverview no force click
 * @author Lewis Prescott
 */
"use strict";

var rule = require("../../../lib/rules/no-force-click"),

    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-force-click", rule, {

    valid: [
        "cy.get('button').focus().click()"
    ],

    invalid: [
        {
            code: "cy.get('button').click({force: true})",
            errors: [{
                message: "use .focus() instead of force"
            }]
        }
    ]
});
