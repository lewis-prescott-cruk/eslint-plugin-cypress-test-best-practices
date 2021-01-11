/**
 * @fileoverview test description start with should
 * @author Lewis Prescott
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "it statements must start with 'should'",
            category: "Best Practices",
            recommended: true
        },
        fixable: null,
        schema: [
        ]
    },

    create: function(context) {
        return {
            CallExpression: function(node) {
                if(node.callee.name === 'it') {
                    const literal = node.arguments.find(x => x.type === "Literal" || x.type === "TemplateLiteral");
                    if(literal.type === 'Literal') {
                        const should = literal.value.split(' ')[0];
                        if(should !== 'should') {
                        context.report(node, "it must start with 'should'");
                        }
                    }
                    if(literal.type === 'TemplateLiteral') {
                        const literal = node.arguments.find(x => x.type === "Literal");
                        const should = literal.quasis.find(x => x.tail === false).value.raw.includes('should');
                        if(!should) {
                          context.report(node, "it must start with 'should'");
                        }
                    }
                }
            }
        };
    }
};
