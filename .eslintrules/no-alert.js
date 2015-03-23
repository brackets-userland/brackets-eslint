module.exports = function(context) {
    "use strict";
    return {
        "CallExpression" : function(node) {
            if (node.callee.type === "MemberExpression" && node.callee.property.type === "Identifier") {
                if (node.callee.object.name === "window" && node.callee.property.name === "alert") {
                    context.report(node, "A window.alert statement should not be part of the code that is committed to GIT!");
                }
            }
        }
    };
};
