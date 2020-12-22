/**
 * @fileoverview no force click
 * @author Lewis Prescott
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "click elements without using force",
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
                if(node.property.name === 'click') {
                    const callee = node.parent;
                    const args = callee.arguments;
                    if(args.some(x => x.type === "ObjectExpression")) {
                        const objectExpression = args.find(x => x.type === "ObjectExpression");
                        const forceProperties = objectExpression.properties.find(x => x.key.name === "force");
                        if(forceProperties.value.value === true) {
                            context.report(node, "use .focus() instead of force");
                        }
                    }
                }
            }
        };
    }
};
