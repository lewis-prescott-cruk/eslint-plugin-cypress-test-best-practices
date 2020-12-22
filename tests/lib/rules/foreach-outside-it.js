/**
 * @fileoverview forEach outside it block
 * @author Lewis Prescott
 */
"use strict";
const dedent = require('dedent');
var rule = require("../../../lib/rules/foreach-outside-it"),

    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("foreach-outside-it", rule, {

    valid: [
        dedent`
        [1,2].forEach(function(num) {
            it('valid', function(){});
        });
        `
    ],

    invalid: [
        {
            code: dedent`
            it('incorrect', function() {
                [1,2].forEach(function(num) {});
            });
          `,
            errors: [{
                message: "forEach should be outside it block"
            }]
        }
    ]
});
