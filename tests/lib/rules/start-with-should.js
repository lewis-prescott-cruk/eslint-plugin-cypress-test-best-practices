/**
 * @fileoverview test description start with should
 * @author Lewis Prescott
 */
"use strict";

var rule = require("../../../lib/rules/start-with-should"),

    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("start-with-should", rule, {

    valid: [
        "it('should start with should')"
    ],

    invalid: [
        {
            code: "it('verify should')",
            errors: [{
                message: "it must start with 'should'"
            }]
        }
    ]
});
