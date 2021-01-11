/**
 * @fileoverview at least 1 assertion
 * @author Lewis Prescott
 */
"use strict";

function shouldExists(assert) {
    return assert.expression !== undefined && assert.expression.callee !== undefined
        && assert.expression.callee.property !== undefined 
        && assert.expression.callee.property.name === 'should';
}

function expectUndefined(x) {
    return x.expression !== undefined && x.expression.callee !== undefined && 
        x.expression.callee.object !== undefined && 
        x.expression.callee.object.object !== undefined;
}

function expectObjectUndefined(x) {
    return x.expression !== undefined && x.expression.object !== undefined &&
        x.expression.object.object !== undefined;
}

function expectCallee(obj) {
    return obj.callee !== undefined && obj.callee.name === 'expect';
}

function hasArguments(x) {
    return x.expression !== undefined && x.expression.arguments !== undefined 
    && x.expression.arguments.length > 0 
    && x.expression.arguments.find(z => z.type === "FunctionExpression") !== undefined
}

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
                if(parent.callee !== undefined && parent.callee.name === "it") {
                    const body = node.body.body;
                    if(!body.some(x => shouldExists(x) 
                        || (hasArguments(x) && x.expression.arguments.find(z => z.type === "FunctionExpression").body.body.some(y => shouldExists(y)))
                        || (hasArguments(x) && x.expression.arguments.find(z => z.type === "FunctionExpression").body.body.some(y => expectObjectUndefined(y) && expectCallee(y.expression.object.object)))
                        || (hasArguments(x) && x.expression.arguments.find(z => z.type === "FunctionExpression").body.body.some(y => expectObjectUndefined(y) && y.expression.object.object.object !== undefined && expectCallee(y.expression.object.object.object)))
                        || (hasArguments(x) && x.expression.arguments.find(z => z.type === "FunctionExpression").body.body.some(y => expectObjectUndefined(y) && y.expression.object.object.object.object !== undefined && expectCallee(y.expression.object.object.object.object)))
                        || (hasArguments(x) && x.expression.arguments.find(z => z.type === "FunctionExpression").body.body.some(y => y.expression.callee.object.object !== undefined && expectCallee(y.expression.callee.object.object)))
                        || (hasArguments(x) && x.expression.arguments.find(z => z.type === "FunctionExpression").body.body.some(y => expectCallee(y.expression.callee.object.object.object)))
                        || (hasArguments(x) && x.expression.arguments.find(z => z.type === "FunctionExpression").body.body.some(y => expectCallee(y.expression.callee.object.object.object.object)))
                        || (hasArguments(x) && x.expression.arguments.find(z => z.type === "FunctionExpression").body.body.some(y => expectCallee(y.expression.callee.object.object.object.object.object.object)))
                        || (expectObjectUndefined(x) && expectCallee(x.expression.object.object))
                        || (expectObjectUndefined(x) && x.expression.object.object.object !== undefined && expectCallee(x.expression.object.object.object))
                        || (expectObjectUndefined(x) && x.expression.object.object.object.object !== undefined && expectCallee(x.expression.object.object.object.object))
                        || (x.expression.callee !== undefined && x.expression.callee.name === 'expect') 
                        || (expectUndefined(x) && expectCallee(x.expression.callee.object.object))
                        || (expectUndefined(x) && x.expression.callee.object.object.object !== undefined && expectCallee(x.expression.callee.object.object.object))
                        || (expectUndefined(x) && x.expression.callee.object.object.object.object !== undefined && expectCallee(x.expression.callee.object.object.object.object))
                        || (expectUndefined(x) &&  x.expression.callee.object.object.object.object.object.object !== undefined && expectCallee(x.expression.callee.object.object.object.object.object.object))
                        )) {
                        context.report(node, "test should contain at least 1 should or expect");
                    }
                }
            },
            ArrowFunctionExpression(node) {
                const parent = node.parent;
                if(parent.callee !== undefined && parent.callee.name === "it") {
                    const body = node.body.body;
                    if(!body.some(x => shouldExists(x) 
                    || (hasArguments(x) && x.expression.arguments.find(z => z.type === "ArrowFunctionExpression").body.body.some(y => shouldExists(y)))
                    || (hasArguments(x) && x.expression.arguments.find(z => z.type === "ArrowFunctionExpression").body.body.some(y => expectObjectUndefined(y) && expectCallee(y.expression.object.object)))
                    || (hasArguments(x) && x.expression.arguments.find(z => z.type === "ArrowFunctionExpression").body.body.some(y => expectObjectUndefined(y) && y.expression.object.object.object !== undefined && expectCallee(y.expression.object.object.object)))
                    || (hasArguments(x) && x.expression.arguments.find(z => z.type === "ArrowFunctionExpression").body.body.some(y => expectObjectUndefined(y) && y.expression.object.object.object.object !== undefined && expectCallee(y.expression.object.object.object.object)))
                    || (hasArguments(x) && x.expression.arguments.find(z => z.type === "ArrowFunctionExpression").body.body.some(y => y.expression.callee.object.object !== undefined && expectCallee(y.expression.callee.object.object)))
                    || (hasArguments(x) && x.expression.arguments.find(z => z.type === "ArrowFunctionExpression").body.body.some(y => expectCallee(y.expression.callee.object.object.object)))
                    || (hasArguments(x) && x.expression.arguments.find(z => z.type === "ArrowFunctionExpression").body.body.some(y => expectCallee(y.expression.callee.object.object.object.object)))
                    || (hasArguments(x) && x.expression.arguments.find(z => z.type === "ArrowFunctionExpression").body.body.some(y => expectCallee(y.expression.callee.object.object.object.object.object.object)))
                        || (expectObjectUndefined(x) && expectCallee(x.expression.object.object))
                        || (expectObjectUndefined(x) && x.expression.object.object.object !== undefined && expectCallee(x.expression.object.object.object))
                        || (expectObjectUndefined(x) && x.expression.object.object.object.object !== undefined && expectCallee(x.expression.object.object.object.object))
                        || (x.expression !== undefined && x.expression.callee !== undefined && x.expression.callee.name === 'expect') 
                        || (expectUndefined(x) && expectCallee(x.expression.callee.object.object))
                        || (expectUndefined(x) && x.expression.callee.object.object.object !== undefined && expectCallee(x.expression.callee.object.object.object))
                        || (expectUndefined(x) && x.expression.callee.object.object.object.object !== undefined && expectCallee(x.expression.callee.object.object.object.object))
                        || (expectUndefined(x) &&  x.expression.callee.object.object.object.object.object.object !== undefined && expectCallee(x.expression.callee.object.object.object.object.object.object))
                        )) {
                        context.report(node, "test should contain at least 1 should or expect");
                    }
                }
            }
        };
    }
};
