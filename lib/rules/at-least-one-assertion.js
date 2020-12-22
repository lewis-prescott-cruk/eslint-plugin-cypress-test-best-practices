/**
 * @fileoverview at least 1 assertion
 * @author Lewis Prescott
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "test contains at least 1 assertion",
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
                if(parent.callee.name === "it") {
                  console.log("it " + parent.callee.name);
                  const body = node.body.body;
                  if(!body.some(x => (x.expression.callee.property !== undefined && x.expression.callee.property.name === 'should') || x.expression.callee.name === 'expect')) {
                      context.report(node, "test should contain at least 1 should or expect");
                  }
                }
            },
            ArrowFunctionExpression(node) {
                const parent = node.parent;
                if(parent.callee.name === "it") {
                  console.log("it " + parent.callee.name);
                  const body = node.body.body;
                  if(!body.some(x => (x.expression.callee.property !== undefined && x.expression.callee.property.name === 'should') || x.expression.callee.name === 'expect')) {
                      context.report(node, "test should contain at least 1 should or expect");
                  }
                }
            }
        };
    }
};
