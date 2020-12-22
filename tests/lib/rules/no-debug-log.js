/**
 * @fileoverview no debug logs
 * @author Lewis Prescott
 */
"use strict";

var rule = require("../../../lib/rules/no-debug-log"),

    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-debug-log", rule, {

    valid: [
        "// Comment stating the reason for having this workaround or code implemented like this"
    ],

    invalid: [
        {
            code: "cy.log(element + 'not clicking')",
            errors: [{
                message: "does this still need to be logged?"
            }]
        }
    ]
});
