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
        "cy.contains('success').should('be.visible');",
        dedent`Object.defineProperty(win, 'ga', {
            configurable: false,
            get: function() { return ga },
            set: function() { },
        });`,
        dedent`
        it('include', function() {
            cy.visit('https://example.cypress.io');
            cy.contains('type').click();
            expect(cy.url()).to.include('/commands/actions');
         });
        `,
        dedent`
        it('not equal', function() {
            expect(name).to.not.equal('Jane');
         });
        `,
        dedent`
        it('deep', function() {
            expect(deepObj).to.have.deep.property('tests[1]', 'e2e')
         });
        `,
        dedent`
        it('most', function() {
            expect('test').to.have.length.of.at.most(4);
         });
        `,
        dedent`
        it('empty', function() {
            expect([]).to.be.empty
         });
        `,
        dedent`
        it('empty', function() {
            expect(true).to.be.true;
         });
        `,
        dedent`
        it('exist', function() {
            expect(myVar).to.exist
         });
        `,
        dedent`
        it('ok', function() {
            expect(undefined).to.not.be.ok
         });
        `
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
