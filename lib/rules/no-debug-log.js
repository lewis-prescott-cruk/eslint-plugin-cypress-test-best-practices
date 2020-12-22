/**
 * @fileoverview no cy.log left in code
 * @author Lewis Prescott
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "cy.log only for debugging",
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
                if(node.property.name === 'log') {
                   context.report(node, "does this still need to be logged?");
                }
            }
        };
    }
};
