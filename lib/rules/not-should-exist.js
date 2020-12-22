/**
 * @fileoverview should not use exist
 * @author Lewis Prescott
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "assert elements are visible not just exist",
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
                  const callee = node.parent;
                  const args = callee.arguments;
                  const literal = args.find(x => x.type === "Literal");
                  const exist = literal.value;
                  if(exist === 'exist') {
                    context.report(node, "use 'be.visible' instead");
                  }
                }
            }
        };
    }
};
