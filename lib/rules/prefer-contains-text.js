/**
 * @fileoverview use cy.contains where possible
 * @author Lewis Prescott
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "use cy.contains rather than cy.get with 'have.text' or 'contain.text'",
            category: "Best Practices",
            recommended: true
        },
        fixable: null,
        schema: [
        ]
    },

    create: function(context) {
        return {
            MemberExpression(node) {
                if(node.property.name === 'should') {
                   const parent = node.parent;
                   const arg = parent.arguments.find(x => x.type === "Literal");
                   if(arg.value === 'have.text' || arg.value === 'contain.text') {
                       context.report(node, "can you use cy.contains instead with should('be.visible')");
                   }
                }
            }
        };
    }
};
