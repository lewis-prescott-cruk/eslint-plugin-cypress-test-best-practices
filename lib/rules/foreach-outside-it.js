/**
 * @fileoverview forEach outside it block
 * @author Lewis Prescott
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "forEach should create individual test for each scenario",
            category: "Best Practices",
            recommended: true
        },
        fixable: null,
        schema: [
        ]
    },

    create: function(context) {
        return {
            FunctionExpression(node) {
                const parent = node.parent;
                if(parent.callee !== undefined && parent.callee.name === "it") {
                  const body = node.body.body;
                  if(body.some(x => x.expression !== undefined && x.expression.callee !== undefined && x.expression.callee.property !== undefined && x.expression.callee.property.name === 'forEach')) {
                     context.report(node, "forEach should be outside it block");
                  }
                }
            },
            ArrowFunctionExpression(node) {
                const parent = node.parent;
                if(parent.callee !== undefined && parent.callee.name === "it") {
                  const body = node.body.body;
                  if(body.some(x => x.expression !== undefined && x.expression.callee !== undefined && x.expression.callee.property !== undefined && x.expression.callee.property.name === 'forEach')) {
                     context.report(node, "forEach should be outside it block");
                  }
                }
            }
        };
    }
};
