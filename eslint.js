!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.eslint=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "builtin": {
        "NaN": false,
        "Infinity": false,
        "undefined": false,
        "eval": false,

        "parseFloat": false,
        "parseInt": false,
        "isNaN": false,
        "isFinite": false,

        "decodeURI": false,
        "decodeURIComponent": false,
        "encodeURI": false,
        "encodeURIComponent": false,

        "Object": false,
        "Function": false,
        "Array": false,
        "String": false,
        "Boolean": false,
        "Map": false,
        "Number": false,
        "Date": false,
        "RegExp": false,
        "Error": false,
        "EvalError": false,
        "RangeError": false,
        "ReferenceError": false,
        "Set": false,
        "SyntaxError": false,
        "TypeError": false,
        "URIError": false,
        "WeakMap": false,
        "WeakSet": false,

        "ArrayBuffer": false,
        "Float32Array": false,
        "Float64Array": false,
        "Int16Array": false,
        "Int32Array": false,
        "Int8Array": false,
        "Uint16Array": false,
        "Uint32Array": false,
        "Uint8Array": false,
        "Uint8ClampedArray": false,

        "Math": false,
        "JSON": false,

        "toString": false,
        "hasOwnProperty": false,
        "valueOf": false,
        "propertyIsEnumerable": false,
        "constructor": false,
        "isPrototypeOf": false,
        "toLocaleString": false
    },

    "browser": {
        "globals": {
            "addEventListener": false,
            "applicationCache": false,
            "atob": false,
            "Audio": false,
            "Blob": false,
            "blur": false,
            "btoa": false,
            "cancelAnimationFrame": false,
            "clearInterval": false,
            "clearTimeout": false,
            "close": false,
            "closed": false,
            "crypto": false,
            "DataView": false,
            "defaultStatus": false,
            "devicePixelRatio": false,
            "dispatchEvent": false,
            "document": false,
            "DOMParser": false,
            "Element": false,
            "Event": false,
            "FileReader": false,
            "find": false,
            "focus": false,
            "FormData": false,
            "frameElement": false,
            "frames": false,
            "getComputedStyle": false,
            "getSelection": false,
            "history": false,
            "HTMLAnchorElement": false,
            "HTMLBaseElement": false,
            "HTMLBodyElement": false,
            "HTMLBRElement": false,
            "HTMLButtonElement": false,
            "HTMLCanvasElement": false,
            "HTMLDirectoryElement": false,
            "HTMLDivElement": false,
            "HTMLDListElement": false,
            "HTMLElement": false,
            "HTMLFieldSetElement": false,
            "HTMLFontElement": false,
            "HTMLFormElement": false,
            "HTMLFrameElement": false,
            "HTMLFrameSetElement": false,
            "HTMLHeadElement": false,
            "HTMLHeadingElement": false,
            "HTMLHRElement": false,
            "HTMLHtmlElement": false,
            "HTMLIFrameElement": false,
            "HTMLImageElement": false,
            "HTMLInputElement": false,
            "HTMLLabelElement": false,
            "HTMLLegendElement": false,
            "HTMLLIElement": false,
            "HTMLLinkElement": false,
            "HTMLMapElement": false,
            "HTMLMenuElement": false,
            "HTMLMetaElement": false,
            "HTMLModElement": false,
            "HTMLObjectElement": false,
            "HTMLOListElement": false,
            "HTMLOptGroupElement": false,
            "HTMLOptionElement": false,
            "HTMLParagraphElement": false,
            "HTMLParamElement": false,
            "HTMLPreElement": false,
            "HTMLQuoteElement": false,
            "HTMLScriptElement": false,
            "HTMLSelectElement": false,
            "HTMLStyleElement": false,
            "HTMLTableCaptionElement": false,
            "HTMLTableCellElement": false,
            "HTMLTableColElement": false,
            "HTMLTableElement": false,
            "HTMLTableRowElement": false,
            "HTMLTableSectionElement": false,
            "HTMLTextAreaElement": false,
            "HTMLTitleElement": false,
            "HTMLUListElement": false,
            "HTMLVideoElement": false,
            "Image": false,
            "indexedDB": false,
            "innerHeight": false,
            "innerWidth": false,
            "Intl": false,
            "length": false,
            "localStorage": false,
            "location": false,
            "matchMedia": false,
            "MessageChannel": false,
            "MessageEvent": false,
            "MessagePort": false,
            "moveBy": false,
            "moveTo": false,
            "MutationObserver": false,
            "name": false,
            "navigator": false,
            "Node": false,
            "NodeFilter": false,
            "onbeforeunload": true,
            "onblur": true,
            "onerror": true,
            "onfocus": true,
            "onload": true,
            "onresize": true,
            "onunload": true,
            "open": false,
            "openDatabase": false,
            "opener": false,
            "Option": false,
            "outerHeight": false,
            "outerWidth": false,
            "pageXOffset": false,
            "pageYOffset": false,
            "parent": false,
            "postMessage": false,
            "print": false,
            "removeEventListener": false,
            "requestAnimationFrame": false,
            "resizeBy": false,
            "resizeTo": false,
            "screen": false,
            "screenX": false,
            "screenY": false,
            "scroll": false,
            "scrollbars": false,
            "scrollBy": false,
            "scrollTo": false,
            "scrollX": false,
            "scrollY": false,
            "self": false,
            "sessionStorage": false,
            "setInterval": false,
            "setTimeout": false,
            "SharedWorker": false,
            "showModalDialog": false,
            "stop": false,
            "SVGAElement": false,
            "SVGAltGlyphDefElement": false,
            "SVGAltGlyphElement": false,
            "SVGAltGlyphItemElement": false,
            "SVGAngle": false,
            "SVGAnimateColorElement": false,
            "SVGAnimatedAngle": false,
            "SVGAnimatedBoolean": false,
            "SVGAnimatedEnumeration": false,
            "SVGAnimatedInteger": false,
            "SVGAnimatedLength": false,
            "SVGAnimatedLengthList": false,
            "SVGAnimatedNumber": false,
            "SVGAnimatedNumberList": false,
            "SVGAnimatedPreserveAspectRatio": false,
            "SVGAnimatedRect": false,
            "SVGAnimatedString": false,
            "SVGAnimatedTransformList": false,
            "SVGAnimateElement": false,
            "SVGAnimateMotionElement": false,
            "SVGAnimateTransformElement": false,
            "SVGAnimationElement": false,
            "SVGCircleElement": false,
            "SVGClipPathElement": false,
            "SVGColor": false,
            "SVGComponentTransferFunctionElement": false,
            "SVGCursorElement": false,
            "SVGDefsElement": false,
            "SVGDescElement": false,
            "SVGDocument": false,
            "SVGElement": false,
            "SVGElementInstance": false,
            "SVGElementInstanceList": false,
            "SVGEllipseElement": false,
            "SVGFEBlendElement": false,
            "SVGFEColorMatrixElement": false,
            "SVGFEComponentTransferElement": false,
            "SVGFECompositeElement": false,
            "SVGFEConvolveMatrixElement": false,
            "SVGFEDiffuseLightingElement": false,
            "SVGFEDisplacementMapElement": false,
            "SVGFEDistantLightElement": false,
            "SVGFEFloodElement": false,
            "SVGFEFuncAElement": false,
            "SVGFEFuncBElement": false,
            "SVGFEFuncGElement": false,
            "SVGFEFuncRElement": false,
            "SVGFEGaussianBlurElement": false,
            "SVGFEImageElement": false,
            "SVGFEMergeElement": false,
            "SVGFEMergeNodeElement": false,
            "SVGFEMorphologyElement": false,
            "SVGFEOffsetElement": false,
            "SVGFEPointLightElement": false,
            "SVGFESpecularLightingElement": false,
            "SVGFESpotLightElement": false,
            "SVGFETileElement": false,
            "SVGFETurbulenceElement": false,
            "SVGFilterElement": false,
            "SVGFontElement": false,
            "SVGFontFaceElement": false,
            "SVGFontFaceFormatElement": false,
            "SVGFontFaceNameElement": false,
            "SVGFontFaceSrcElement": false,
            "SVGFontFaceUriElement": false,
            "SVGForeignObjectElement": false,
            "SVGGElement": false,
            "SVGGlyphElement": false,
            "SVGGlyphRefElement": false,
            "SVGGradientElement": false,
            "SVGHKernElement": false,
            "SVGImageElement": false,
            "SVGLength": false,
            "SVGLengthList": false,
            "SVGLinearGradientElement": false,
            "SVGLineElement": false,
            "SVGMarkerElement": false,
            "SVGMaskElement": false,
            "SVGMatrix": false,
            "SVGMetadataElement": false,
            "SVGMissingGlyphElement": false,
            "SVGMPathElement": false,
            "SVGNumber": false,
            "SVGNumberList": false,
            "SVGPaint": false,
            "SVGPathElement": false,
            "SVGPathSeg": false,
            "SVGPathSegArcAbs": false,
            "SVGPathSegArcRel": false,
            "SVGPathSegClosePath": false,
            "SVGPathSegCurvetoCubicAbs": false,
            "SVGPathSegCurvetoCubicRel": false,
            "SVGPathSegCurvetoCubicSmoothAbs": false,
            "SVGPathSegCurvetoCubicSmoothRel": false,
            "SVGPathSegCurvetoQuadraticAbs": false,
            "SVGPathSegCurvetoQuadraticRel": false,
            "SVGPathSegCurvetoQuadraticSmoothAbs": false,
            "SVGPathSegCurvetoQuadraticSmoothRel": false,
            "SVGPathSegLinetoAbs": false,
            "SVGPathSegLinetoHorizontalAbs": false,
            "SVGPathSegLinetoHorizontalRel": false,
            "SVGPathSegLinetoRel": false,
            "SVGPathSegLinetoVerticalAbs": false,
            "SVGPathSegLinetoVerticalRel": false,
            "SVGPathSegList": false,
            "SVGPathSegMovetoAbs": false,
            "SVGPathSegMovetoRel": false,
            "SVGPatternElement": false,
            "SVGPoint": false,
            "SVGPointList": false,
            "SVGPolygonElement": false,
            "SVGPolylineElement": false,
            "SVGPreserveAspectRatio": false,
            "SVGRadialGradientElement": false,
            "SVGRect": false,
            "SVGRectElement": false,
            "SVGRenderingIntent": false,
            "SVGScriptElement": false,
            "SVGSetElement": false,
            "SVGStopElement": false,
            "SVGStringList": false,
            "SVGStyleElement": false,
            "SVGSVGElement": false,
            "SVGSwitchElement": false,
            "SVGSymbolElement": false,
            "SVGTextContentElement": false,
            "SVGTextElement": false,
            "SVGTextPathElement": false,
            "SVGTextPositioningElement": false,
            "SVGTitleElement": false,
            "SVGTransform": false,
            "SVGTransformList": false,
            "SVGTRefElement": false,
            "SVGTSpanElement": false,
            "SVGUnitTypes": false,
            "SVGUseElement": false,
            "SVGViewElement": false,
            "SVGViewSpec": false,
            "SVGVKernElement": false,
            "top": false,
            "WebSocket": false,
            "window": false,
            "Worker": false,
            "XMLHttpRequest": false,
            "XMLSerializer": false,
            "XPathEvaluator": false,
            "XPathExpression": false,
            "XPathResult": false
        }
    },

    "node": {
        "globals": {
            "__filename": false,
            "__dirname": false,
            "Buffer": false,
            "DataView": false,
            "console": false,
            "exports": true,
            "GLOBAL": false,
            "global": false,
            "module": false,
            "process": false,
            "require": false,
            "setTimeout": false,
            "clearTimeout": false,
            "setInterval": false,
            "clearInterval": false,
            "setImmediate": false,
            "clearImmediate": false
        },

        "rules": {
            "no-catch-shadow": 0,
            "no-console": 0,
            "no-mixed-requires": 2,
            "no-new-require": 2,
            "no-path-concat": 2,
            "no-process-exit": 2,
            "global-strict": [0, "always"],
            "handle-callback-err": [2, "err"]
        }
    },

    "amd": {
        "globals": {
            "require": false,
            "define": false
        }
    },

    "mocha": {
        "globals": {
            "describe": false,
            "it": false,
            "before": false,
            "after": false,
            "beforeEach": false,
            "afterEach": false,

            "suite": false,
            "test": false,
            "setup": false,
            "teardown": false,
            "suiteSetup": false,
            "suiteTeardown": false
        }
    },

    "jasmine": {
        "globals": {
            "afterAll": false,
            "afterEach": false,
            "beforeAll": false,
            "beforeEach": false,
            "describe": false,
            "expect": false,
            "it": false,
            "jasmine": false,
            "pending": false,
            "runs": false,
            "spyOn": false,
            "waits": false,
            "waitsFor": false,
            "xdescribe": false,
            "xit": false
        }
    }
}

},{}],2:[function(require,module,exports){
module.exports={
    "env": {
        "browser": false,
        "node": false,
        "amd": false,
        "mocha": false,
        "jasmine": false
    },

    "rules": {
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-bitwise": 0,
        "no-caller": 2,
        "no-catch-shadow": 2,
        "no-comma-dangle": 2,
        "no-cond-assign": 2,
        "no-console": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-div-regex": 0,
        "no-dupe-keys": 2,
        "no-else-return": 0,
        "no-empty": 2,
        "no-empty-class": 2,
        "no-empty-label": 2,
        "no-eq-null": 0,
        "no-eval": 2,
        "no-ex-assign": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "no-extra-strict": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 0,
        "no-func-assign": 2,
        "no-implied-eval": 2,
        "no-inline-comments": 0,
        "no-inner-declarations": [2, "functions"],
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-lonely-if": 0,
        "no-loop-func": 2,
        "no-mixed-requires": [0, false],
        "no-mixed-spaces-and-tabs": [2, false],
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-multiple-empty-lines": [0, {"max": 2}],
        "no-native-reassign": 2,
        "no-negated-in-lhs": 2,
        "no-nested-ternary": 0,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-require": 0,
        "no-new-wrappers": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-path-concat": 0,
        "no-plusplus": 0,
        "no-process-env": 0,
        "no-process-exit": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-reserved-keys": 0,
        "no-restricted-modules": 0,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 0,
        "no-sequences": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-space-before-semi": 2,
        "no-spaced-func": 2,
        "no-sparse-arrays": 2,
        "no-sync": 0,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 0,
        "no-underscore-dangle": 2,
        "no-unreachable": 2,
        "no-unused-expressions": 2,
        "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
        "no-use-before-define": 2,
        "no-void": 0,
        "no-warning-comments": [0, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
        "no-with": 2,
        "no-wrap-func": 2,

        "block-scoped-var": 0,
        "brace-style": [0, "1tbs"],
        "camelcase": 2,
        "comma-spacing": 2,
        "comma-style": 0,
        "complexity": [0, 11],
        "consistent-return": 2,
        "consistent-this": [0, "that"],
        "curly": [2, "all"],
        "default-case": 0,
        "dot-notation": 2,
        "eol-last": 2,
        "eqeqeq": 2,
        "func-names": 0,
        "func-style": [0, "declaration"],
        "global-strict": [2, "never"],
        "guard-for-in": 0,
        "handle-callback-err": 0,
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
        "max-depth": [0, 4],
        "max-len": [0, 80, 4],
        "max-nested-callbacks": [0, 2],
        "max-params": [0, 3],
        "max-statements": [0, 10],
        "new-cap": 2,
        "new-parens": 2,
        "one-var": 0,
        "operator-assignment": [0, "always"],
        "padded-blocks": 0,
        "quote-props": 0,
        "quotes": [2, "double"],
        "radix": 0,
        "semi": 2,
        "sort-vars": 0,
        "space-after-keywords": [0, "always"],
        "space-before-blocks": [0, "always"],
        "space-in-brackets": [0, "never"],
        "space-in-parens": [0, "never"],
        "space-infix-ops": 2,
        "space-return-throw-case": 2,
        "space-unary-ops": [2, { "words": true, "nonwords": false }],
        "spaced-line-comment": [0, "always"],
        "strict": 2,
        "use-isnan": 2,
        "valid-jsdoc": 0,
        "valid-typeof": 2,
        "vars-on-top": 0,
        "wrap-iife": 0,
        "wrap-regex": 0,
        "yoda": [2, "never"]
    }
}

},{}],3:[function(require,module,exports){
module.exports={
  "ArrayExpression": {
    "version": 5
  },
  "ArrayPattern": {
    "version": 6,
    "message": "Unexpected node."
  },
  "ArrowFunctionExpression": {
    "version": 6,
    "message": "Unexpected token \"=\"."
  },
  "AssignmentExpression": {
    "version": 5
  },
  "BinaryExpression": {
    "version": 5
  },
  "BlockStatement": {
    "version": 5
  },
  "BreakStatement": {
    "version": 5
  },
  "CallExpression": {
    "version": 5
  },
  "CatchClause": {
    "version": 5
  },
  "ClassBody": {
    "version": 6,
    "message": "Unexpected reserved word \"class\"."
  },
  "ClassDeclaration": {
    "version": 6,
    "message": "Unexpected reserved word \"class\"."
  },
  "ClassExpression": {
    "version": 6,
    "message": "Unexpected reserved word \"class\"."
  },
  "ComprehensionBlock": {
    "version": 7,
    "message": "Unexpected node."
  },
  "ComprehensionExpression": {
    "version": 7,
    "message": "Unexpected node."
  },
  "ConditionalExpression": {
    "version": 5
  },
  "ContinueStatement": {
    "version": 5
  },
  "DebuggerStatement": {
    "version": 5
  },
  "DoWhileStatement": {
    "version": 5
  },
  "EmptyStatement": {
    "version": 5
  },
  "ExportBatchSpecifier": {
    "version": 6,
    "message": "Unexpected reserved word \"export\"."
  },
  "ExportDeclaration": {
    "version": 6,
    "message": "Unexpected reserved word \"export\"."
  },
  "ExportSpecifier": {
    "version": 6,
    "message": "Unexpected reserved word \"export\"."
  },
  "ExpressionStatement": {
    "version": 5
  },
  "ForInStatement": {
    "version": 5
  },
  "ForOfStatement": {
    "version": 6,
    "message": "Unexpected identifier."
  },
  "ForStatement": {
    "version": 5
  },
  "FunctionDeclaration": {
    "version": 5
  },
  "FunctionExpression": {
    "version": 5
  },
  "Identifier": {
    "version": 5
  },
  "IfStatement": {
    "version": 5
  },
  "ImportDeclaration": {
    "version": 6,
    "message": "Unexpected reserved word."
  },
  "ImportDefaultSpecifier": {
    "version": 6,
    "message": "Unexpected reserved word."
  },
  "ImportNamespaceSpecifier": {
    "version": 6,
    "message": "Unexpected reserved word."
  },
  "ImportSpecifier": {
    "version": 6,
    "message": "Unexpected reserved word."
  },
  "LabeledStatement": {
    "version": 5
  },
  "Literal": {
    "version": 5
  },
  "LogicalExpression": {
    "version": 5
  },
  "MemberExpression": {
    "version": 5
  },
  "MethodDefinition": {
    "version": 6,
    "message": "Unexpected token."
  },
  "ModuleSpecifier": {
    "version": 6,
    "message": "Unexpected reserved word."
  },
  "NewExpression": {
    "version": 5
  },
  "ObjectExpression": {
    "version": 5
  },
  "ObjectPattern": {
    "version": 6,
    "message": "Unexpected node."
  },
  "Program": {
    "version": 5
  },
  "Property": {
    "version": 5
  },
  "ReturnStatement": {
    "version": 5
  },
  "SequenceExpression": {
    "version": 5
  },
  "SpreadElement": {
    "version": 6,
    "message": "Unexpected token."
  },
  "SwitchCase": {
    "version": 5
  },
  "SwitchStatement": {
    "version": 5
  },
  "TaggedTemplateExpression": {
    "version": 6,
    "message": "Unexpected token."
  },
  "TemplateElement": {
    "version": 6,
    "message": "Unexpected token."
  },
  "TemplateLiteral": {
    "version": 6,
    "message": "Unexpected token."
  },
  "ThisExpression": {
    "version": 5
  },
  "ThrowStatement": {
    "version": 5
  },
  "TryStatement": {
    "version": 5
  },
  "UnaryExpression": {
    "version": 5
  },
  "UpdateExpression": {
    "version": 5
  },
  "VariableDeclaration": {
    "version": 5
  },
  "VariableDeclarator": {
    "version": 5
  },
  "WhileStatement": {
    "version": 5
  },
  "WithStatement": {
    "version": 5
  },
  "YieldExpression": {
    "version": 6,
    "message": "Unexpected token \"yield\"."
  },
  "XJSIdentifier": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  },
  "XJSNamespacedName": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  },
  "XJSMemberExpression": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  },
  "XJSEmptyExpression": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  },
  "XJSExpressionContainer": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  },
  "XJSElement": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  },
  "XJSClosingElement": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  },
  "XJSOpeningElement": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  },
  "XJSAttribute": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  },
  "XJSSpreadAttribute": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  },
  "XJSText": {
    "version": "jsx",
    "message": "Unexpected token \"<\"."
  }
}

},{}],4:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],5:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],6:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],7:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],8:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":7,"_process":6,"inherits":5}],9:[function(require,module,exports){

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Use chrome.storage.local if we are in an app
 */

var storage;

if (typeof chrome !== 'undefined' && typeof chrome.storage !== 'undefined')
  storage = chrome.storage.local;
else
  storage = window.localStorage;

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  return ('WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  return JSON.stringify(v);
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      storage.removeItem('debug');
    } else {
      storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = storage.debug;
  } catch(e) {}
  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

},{"./debug":10}],10:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

exports.formatters = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function selectColor() {
  return exports.colors[prevColor++ % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debug(namespace) {

  // define the `disabled` version
  function disabled() {
  }
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = exports.useColors();
    if (null == self.color && self.useColors) self.color = selectColor();

    var args = Array.prototype.slice.call(arguments);

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    if ('function' === typeof exports.formatArgs) {
      args = exports.formatArgs.apply(self, args);
    }
    var logFn = enabled.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":11}],11:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options){
  options = options || {};
  if ('string' == typeof val) return parse(val);
  return options.long
    ? long(val)
    : short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
  if (!match) return;
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 's':
      return n * s;
    case 'ms':
      return n;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function short(ms) {
  if (ms >= d) return Math.round(ms / d) + 'd';
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function long(ms) {
  return plural(ms, d, 'day')
    || plural(ms, h, 'hour')
    || plural(ms, m, 'minute')
    || plural(ms, s, 'second')
    || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],12:[function(require,module,exports){
/*!
 * deepcopy.js Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/deepcopy.js
 * Released under the MIT License.
 */


/** export deepcopy function. */
module.exports = require('./lib/deepcopy');

},{"./lib/deepcopy":13}],13:[function(require,module,exports){
/*!
 * @license deepcopy.js Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/deepcopy.js
 * Released under the MIT License.
 */

(function() {

  // fallback for util methods.
  var util = (typeof module !== 'undefined') ? require('util') : (function() {

    var to = Object.prototype.toString;

    function isArray(value) {
      return (
          typeof value === 'object' &&
          to.call(value) === '[object Array]');
    }

    function isDate(value) {
      return (
          typeof value === 'object' &&
          to.call(value) === '[object Date]');
    }

    function isRegExp(value) {
      return (
          typeof value === 'object' &&
          to.call(value) === '[object RegExp]');
    }

    return {
      // use Array.isArray if implemented.
      isArray: Array.isArray || isArray,
      isDate: isDate,
      isRegExp: isRegExp
    };

  }());

  // fallback for Object.keys.
  var getKeys = Object.keys || function(object) {
    var keys = [],
        key;

    if (object === null || typeof object !== 'object') {
      throw new TypeError('parameter type is not an Object');
    }

    for (key in object) {
      object.hasOwnProperty(key) && keys.push(key);
    }

    return keys;
  };

  /**
   * get element index from array.
   *
   * @private
   * @param {Array} array target array.
   * @param {*} searchElement find element.
   * @throws {TypeError} when parameter array is not an array.
   * @return {Number} return index of array. return -1 if element not found.
   */
  function indexOfArray(array, searchElement) {
    var i, len;

    if (!util.isArray(array)) {
      throw new TypeError('parameter type is not an Array');
    }

    for (i = 0, len = array.length; i < len; ++i) {
      if (array[i] === searchElement) {
        return i;
      }
    }

    return -1;
  }

  /**
   * get deep copy of target.
   *
   * return deep copy if target is Date, RegExp or primitive types.
   * return shallow copy if target is function.
   *
   * do recursive copy if target is Array or Object.
   * also can copy if target has circular reference.
   *
   * @param {*} target target of deep copy.
   * @return {*} deep copy value.
   */
  function deepcopy(target) {
    var clone = (util.isArray(target)) ? [] : {},
        visited = [target],
        ref = [clone];

    /**
     * get deep copy of target.
     *
     * @private
     * @param {*} target target of deep copy.
     * @param {Object|Array} clone reference of deep copy value.
     * @param {Object[]} visited copied references.
     * @param {Object[]} ref reference of own.
     * @return {*} deep copy value.
     */
    function deepcopy_(target, clone, visited, ref) {
      var keys, i, len, key, value, index, object, reference;

      // number, string, boolean, null, undefined and function.
      if (target === null || typeof target !== 'object') {
        return target;
      }

      if (util.isDate(target)) {
        return new Date(Number(target));
      }

      if (util.isRegExp(target)) {
        return new RegExp(
            target.source,
            String(target).slice(target.source.length + 2));
      }

      keys = getKeys(target);

      for (i = 0, len = keys.length; i < len; ++i) {
        key = keys[i];
        value = target[key];

        if (value !== null && typeof value === 'object') {
          index = indexOfArray(visited, value);
          if (index === -1) {
            object = (util.isArray(value)) ? [] : {};
            visited.push(value);
            ref.push(object);
          } else {
            reference = ref[index];
          }
        }

        // value is not reference type if object is undefined.
        // not used object variable if target is not reference type.
        clone[key] = reference || deepcopy_(value, object, visited, ref);
        index = object = reference = null;
      }

      return clone;
    }

    return deepcopy_(target, clone, visited, ref);
  }

  // export function.
  if (typeof module !== 'undefined') {
    module.exports = deepcopy;
  } else {
    this.deepcopy = deepcopy;
  }

}());

},{"util":8}],14:[function(require,module,exports){
/*
  Copyright (C) 2012-2014 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2014 Dan Tao <daniel.tao@gmail.com>
  Copyright (C) 2013 Andrew Eisenberg <andrew@eisenberg.as>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var VERSION,
        typed,
        jsdoc,
        esutils,
        isArray,
        hasOwnProperty;

    // Sync with package.json.
    VERSION = require('./package.json').version;

    esutils = require('esutils');

    function sliceSource(source, index, last) {
        return source.slice(index, last);
    }

    isArray = Array.isArray;
    if (!isArray) {
        isArray = function isArray(ary) {
            return Object.prototype.toString.call(ary) === '[object Array]';
        };
    }

    hasOwnProperty = (function () {
        var func = Object.prototype.hasOwnProperty;
        return function hasOwnProperty(obj, name) {
            return func.call(obj, name);
        };
    }());

    function shallowCopy(obj) {
        var ret = {}, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }

    function isASCIIAlphanumeric(ch) {
        return (ch >= 0x61  /* 'a' */ && ch <= 0x7A  /* 'z' */) ||
            (ch >= 0x41  /* 'A' */ && ch <= 0x5A  /* 'Z' */) ||
            (ch >= 0x30  /* '0' */ && ch <= 0x39  /* '9' */);
    }

    function isTypeName(ch) {
        return '><(){}[],:*|?!='.indexOf(String.fromCharCode(ch)) === -1 && !esutils.code.isWhiteSpace(ch) && !esutils.code.isLineTerminator(ch);
    }

    function isParamTitle(title) {
        return title === 'param' || title === 'argument' || title === 'arg';
    }

    function isProperty(title) {
        return title === 'property' || title === 'prop';
    }

    function isNameParameterRequired(title) {
        return isParamTitle(title) || isProperty(title) ||
            title === 'alias' || title === 'this' || title === 'mixes' || title === 'requires';
    }

    function isAllowedName(title) {
        return isNameParameterRequired(title) || title === 'const' || title === 'constant';
    }

    function isAllowedNested(title) {
        return isProperty(title) || isParamTitle(title);
    }

    function isTypeParameterRequired(title) {
        return isParamTitle(title) || title === 'define' || title === 'enum' ||
            title === 'implements' || title === 'return' ||
            title === 'this' || title === 'type' || title === 'typedef' ||
            title === 'returns' || isProperty(title);
    }

    // Consider deprecation instead using 'isTypeParameterRequired' and 'Rules' declaration to pick when a type is optional/required
    // This would require changes to 'parseType'
    function isAllowedType(title) {
        return isTypeParameterRequired(title) || title === 'throws' || title === 'const' || title === 'constant' ||
            title === 'namespace' || title === 'member' || title === 'var' || title === 'module' ||
            title === 'constructor' || title === 'class' || title === 'extends' || title === 'augments' ||
            title === 'public' || title === 'private' || title === 'protected';
    }

    function DoctrineError(message) {
        this.name = 'DoctrineError';
        this.message = message;
    }
    DoctrineError.prototype = (function () {
        var Middle = function () { };
        Middle.prototype = Error.prototype;
        return new Middle();
    }());
    DoctrineError.prototype.constructor = DoctrineError;

    function throwError(message) {
        throw new DoctrineError(message);
    }

    function assert(cond, text) {
        if (VERSION.slice(-3) === 'dev') {
            if (!cond) {
                throwError(text);
            }
        }
    }

    function trim(str) {
        return str.replace(/^\s+/, '').replace(/\s+$/, '');
    }

    function unwrapComment(doc) {
        // JSDoc comment is following form
        //   /**
        //    * .......
        //    */
        // remove /**, */ and *
        var BEFORE_STAR = 0,
            STAR = 1,
            AFTER_STAR = 2,
            index,
            len,
            mode,
            result,
            ch;

        doc = doc.replace(/^\/\*\*?/, '').replace(/\*\/$/, '');
        index = 0;
        len = doc.length;
        mode = BEFORE_STAR;
        result = '';

        while (index < len) {
            ch = doc.charCodeAt(index);
            switch (mode) {
            case BEFORE_STAR:
                if (esutils.code.isLineTerminator(ch)) {
                    result += String.fromCharCode(ch);
                } else if (ch === 0x2A  /* '*' */) {
                    mode = STAR;
                } else if (!esutils.code.isWhiteSpace(ch)) {
                    result += String.fromCharCode(ch);
                    mode = AFTER_STAR;
                }
                break;

            case STAR:
                if (!esutils.code.isWhiteSpace(ch)) {
                    result += String.fromCharCode(ch);
                }
                mode = esutils.code.isLineTerminator(ch) ? BEFORE_STAR : AFTER_STAR;
                break;

            case AFTER_STAR:
                result += String.fromCharCode(ch);
                if (esutils.code.isLineTerminator(ch)) {
                    mode = BEFORE_STAR;
                }
                break;
            }
            index += 1;
        }

        return result;
    }

    // Type Expression Parser

    (function (exports) {
        var Syntax,
            Token,
            source,
            length,
            index,
            previous,
            token,
            value;

        Syntax = {
            NullableLiteral: 'NullableLiteral',
            AllLiteral: 'AllLiteral',
            NullLiteral: 'NullLiteral',
            UndefinedLiteral: 'UndefinedLiteral',
            VoidLiteral: 'VoidLiteral',
            UnionType: 'UnionType',
            ArrayType: 'ArrayType',
            RecordType: 'RecordType',
            FieldType: 'FieldType',
            FunctionType: 'FunctionType',
            ParameterType: 'ParameterType',
            RestType: 'RestType',
            NonNullableType: 'NonNullableType',
            OptionalType: 'OptionalType',
            NullableType: 'NullableType',
            NameExpression: 'NameExpression',
            TypeApplication: 'TypeApplication'
        };

        Token = {
            ILLEGAL: 0,    // ILLEGAL
            DOT_LT: 1,     // .<
            REST: 2,       // ...
            LT: 3,         // <
            GT: 4,         // >
            LPAREN: 5,     // (
            RPAREN: 6,     // )
            LBRACE: 7,     // {
            RBRACE: 8,     // }
            LBRACK: 9,    // [
            RBRACK: 10,    // ]
            COMMA: 11,     // ,
            COLON: 12,     // :
            STAR: 13,      // *
            PIPE: 14,      // |
            QUESTION: 15,  // ?
            BANG: 16,      // !
            EQUAL: 17,     // =
            NAME: 18,      // name token
            STRING: 19,    // string
            NUMBER: 20,    // number
            EOF: 21
        };

        function Context(previous, index, token, value) {
            this._previous = previous;
            this._index = index;
            this._token = token;
            this._value = value;
        }

        Context.prototype.restore = function () {
            previous = this._previous;
            index = this._index;
            token = this._token;
            value = this._value;
        };

        Context.save = function () {
            return new Context(previous, index, token, value);
        };

        function advance() {
            var ch = source.charAt(index);
            index += 1;
            return ch;
        }

        function scanHexEscape(prefix) {
            var i, len, ch, code = 0;

            len = (prefix === 'u') ? 4 : 2;
            for (i = 0; i < len; ++i) {
                if (index < length && esutils.code.isHexDigit(source.charCodeAt(index))) {
                    ch = advance();
                    code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
                } else {
                    return '';
                }
            }
            return String.fromCharCode(code);
        }

        function scanString() {
            var str = '', quote, ch, code, unescaped, restore; //TODO review removal octal = false
            quote = source.charAt(index);
            ++index;

            while (index < length) {
                ch = advance();

                if (ch === quote) {
                    quote = '';
                    break;
                } else if (ch === '\\') {
                    ch = advance();
                    if (!esutils.code.isLineTerminator(ch.charCodeAt(0))) {
                        switch (ch) {
                        case 'n':
                            str += '\n';
                            break;
                        case 'r':
                            str += '\r';
                            break;
                        case 't':
                            str += '\t';
                            break;
                        case 'u':
                        case 'x':
                            restore = index;
                            unescaped = scanHexEscape(ch);
                            if (unescaped) {
                                str += unescaped;
                            } else {
                                index = restore;
                                str += ch;
                            }
                            break;
                        case 'b':
                            str += '\b';
                            break;
                        case 'f':
                            str += '\f';
                            break;
                        case 'v':
                            str += '\v';
                            break;

                        default:
                            if (esutils.code.isOctalDigit(ch.charCodeAt(0))) {
                                code = '01234567'.indexOf(ch);

                                // \0 is not octal escape sequence
                                // Deprecating unused code. TODO review removal
                                //if (code !== 0) {
                                //    octal = true;
                                //}

                                if (index < length && esutils.code.isOctalDigit(source.charCodeAt(index))) {
                                    //TODO Review Removal octal = true;
                                    code = code * 8 + '01234567'.indexOf(advance());

                                    // 3 digits are only allowed when string starts
                                    // with 0, 1, 2, 3
                                    if ('0123'.indexOf(ch) >= 0 &&
                                            index < length &&
                                            esutils.code.isOctalDigit(source.charCodeAt(index))) {
                                        code = code * 8 + '01234567'.indexOf(advance());
                                    }
                                }
                                str += String.fromCharCode(code);
                            } else {
                                str += ch;
                            }
                            break;
                        }
                    } else {
                        if (ch ===  '\r' && source.charCodeAt(index) === 0x0A  /* '\n' */) {
                            ++index;
                        }
                    }
                } else if (esutils.code.isLineTerminator(ch.charCodeAt(0))) {
                    break;
                } else {
                    str += ch;
                }
            }

            if (quote !== '') {
                throwError('unexpected quote');
            }

            value = str;
            return Token.STRING;
        }

        function scanNumber() {
            var number, ch;

            number = '';
            ch = source.charCodeAt(index);

            if (ch !== 0x2E  /* '.' */) {
                number = advance();
                ch = source.charCodeAt(index);

                if (number === '0') {
                    if (ch === 0x78  /* 'x' */ || ch === 0x58  /* 'X' */) {
                        number += advance();
                        while (index < length) {
                            ch = source.charCodeAt(index);
                            if (!esutils.code.isHexDigit(ch)) {
                                break;
                            }
                            number += advance();
                        }

                        if (number.length <= 2) {
                            // only 0x
                            throwError('unexpected token');
                        }

                        if (index < length) {
                            ch = source.charCodeAt(index);
                            if (esutils.code.isIdentifierStart(ch)) {
                                throwError('unexpected token');
                            }
                        }
                        value = parseInt(number, 16);
                        return Token.NUMBER;
                    }

                    if (esutils.code.isOctalDigit(ch)) {
                        number += advance();
                        while (index < length) {
                            ch = source.charCodeAt(index);
                            if (!esutils.code.isOctalDigit(ch)) {
                                break;
                            }
                            number += advance();
                        }

                        if (index < length) {
                            ch = source.charCodeAt(index);
                            if (esutils.code.isIdentifierStart(ch) || esutils.code.isDecimalDigit(ch)) {
                                throwError('unexpected token');
                            }
                        }
                        value = parseInt(number, 8);
                        return Token.NUMBER;
                    }

                    if (esutils.code.isDecimalDigit(ch)) {
                        throwError('unexpected token');
                    }
                }

                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (!esutils.code.isDecimalDigit(ch)) {
                        break;
                    }
                    number += advance();
                }
            }

            if (ch === 0x2E  /* '.' */) {
                number += advance();
                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (!esutils.code.isDecimalDigit(ch)) {
                        break;
                    }
                    number += advance();
                }
            }

            if (ch === 0x65  /* 'e' */ || ch === 0x45  /* 'E' */) {
                number += advance();

                ch = source.charCodeAt(index);
                if (ch === 0x2B  /* '+' */ || ch === 0x2D  /* '-' */) {
                    number += advance();
                }

                ch = source.charCodeAt(index);
                if (esutils.code.isDecimalDigit(ch)) {
                    number += advance();
                    while (index < length) {
                        ch = source.charCodeAt(index);
                        if (!esutils.code.isDecimalDigit(ch)) {
                            break;
                        }
                        number += advance();
                    }
                } else {
                    throwError('unexpected token');
                }
            }

            if (index < length) {
                ch = source.charCodeAt(index);
                if (esutils.code.isIdentifierStart(ch)) {
                    throwError('unexpected token');
                }
            }

            value = parseFloat(number);
            return Token.NUMBER;
        }


        function scanTypeName() {
            var ch, ch2;

            value = advance();
            while (index < length && isTypeName(source.charCodeAt(index))) {
                ch = source.charCodeAt(index);
                if (ch === 0x2E  /* '.' */) {
                    if ((index + 1) >= length) {
                        return Token.ILLEGAL;
                    }
                    ch2 = source.charCodeAt(index + 1);
                    if (ch2 === 0x3C  /* '<' */) {
                        break;
                    }
                }
                value += advance();
            }
            return Token.NAME;
        }

        function next() {
            var ch;

            previous = index;

            while (index < length && esutils.code.isWhiteSpace(source.charCodeAt(index))) {
                advance();
            }
            if (index >= length) {
                token = Token.EOF;
                return token;
            }

            ch = source.charCodeAt(index);
            switch (ch) {
            case 0x27:  /* ''' */
            case 0x22:  /* '"' */
                token = scanString();
                return token;

            case 0x3A:  /* ':' */
                advance();
                token = Token.COLON;
                return token;

            case 0x2C:  /* ',' */
                advance();
                token = Token.COMMA;
                return token;

            case 0x28:  /* '(' */
                advance();
                token = Token.LPAREN;
                return token;

            case 0x29:  /* ')' */
                advance();
                token = Token.RPAREN;
                return token;

            case 0x5B:  /* '[' */
                advance();
                token = Token.LBRACK;
                return token;

            case 0x5D:  /* ']' */
                advance();
                token = Token.RBRACK;
                return token;

            case 0x7B:  /* '{' */
                advance();
                token = Token.LBRACE;
                return token;

            case 0x7D:  /* '}' */
                advance();
                token = Token.RBRACE;
                return token;

            case 0x2E:  /* '.' */
                if (index + 1 < length) {
                    ch = source.charCodeAt(index + 1);
                    if (ch === 0x3C  /* '<' */) {
                        advance();  // '.'
                        advance();  // '<'
                        token = Token.DOT_LT;
                        return token;
                    }

                    if (ch === 0x2E  /* '.' */ && index + 2 < length && source.charCodeAt(index + 2) === 0x2E  /* '.' */) {
                        advance();  // '.'
                        advance();  // '.'
                        advance();  // '.'
                        token = Token.REST;
                        return token;
                    }

                    if (esutils.code.isDecimalDigit(ch)) {
                        token = scanNumber();
                        return token;
                    }
                }
                token = Token.ILLEGAL;
                return token;

            case 0x3C:  /* '<' */
                advance();
                token = Token.LT;
                return token;

            case 0x3E:  /* '>' */
                advance();
                token = Token.GT;
                return token;

            case 0x2A:  /* '*' */
                advance();
                token = Token.STAR;
                return token;

            case 0x7C:  /* '|' */
                advance();
                token = Token.PIPE;
                return token;

            case 0x3F:  /* '?' */
                advance();
                token = Token.QUESTION;
                return token;

            case 0x21:  /* '!' */
                advance();
                token = Token.BANG;
                return token;

            case 0x3D:  /* '=' */
                advance();
                token = Token.EQUAL;
                return token;

            default:
                if (esutils.code.isDecimalDigit(ch)) {
                    token = scanNumber();
                    return token;
                }

                // type string permits following case,
                //
                // namespace.module.MyClass
                //
                // this reduced 1 token TK_NAME
                assert(isTypeName(ch));
                token = scanTypeName();
                return token;
            }
        }

        function consume(target, text) {
            assert(token === target, text || 'consumed token not matched');
            next();
        }

        function expect(target) {
            if (token !== target) {
                throwError('unexpected token');
            }
            next();
        }

        // UnionType := '(' TypeUnionList ')'
        //
        // TypeUnionList :=
        //     <<empty>>
        //   | NonemptyTypeUnionList
        //
        // NonemptyTypeUnionList :=
        //     TypeExpression
        //   | TypeExpression '|' NonemptyTypeUnionList
        function parseUnionType() {
            var elements;
            consume(Token.LPAREN, 'UnionType should start with (');
            elements = [];
            if (token !== Token.RPAREN) {
                while (true) {
                    elements.push(parseTypeExpression());
                    if (token === Token.RPAREN) {
                        break;
                    }
                    expect(Token.PIPE);
                }
            }
            consume(Token.RPAREN, 'UnionType should end with )');
            return {
                type: Syntax.UnionType,
                elements: elements
            };
        }

        // ArrayType := '[' ElementTypeList ']'
        //
        // ElementTypeList :=
        //     <<empty>>
        //  | TypeExpression
        //  | '...' TypeExpression
        //  | TypeExpression ',' ElementTypeList
        function parseArrayType() {
            var elements;
            consume(Token.LBRACK, 'ArrayType should start with [');
            elements = [];
            while (token !== Token.RBRACK) {
                if (token === Token.REST) {
                    consume(Token.REST);
                    elements.push({
                        type: Syntax.RestType,
                        expression: parseTypeExpression()
                    });
                    break;
                } else {
                    elements.push(parseTypeExpression());
                }
                if (token !== Token.RBRACK) {
                    expect(Token.COMMA);
                }
            }
            expect(Token.RBRACK);
            return {
                type: Syntax.ArrayType,
                elements: elements
            };
        }

        function parseFieldName() {
            var v = value;
            if (token === Token.NAME || token === Token.STRING) {
                next();
                return v;
            }

            if (token === Token.NUMBER) {
                consume(Token.NUMBER);
                return String(v);
            }

            throwError('unexpected token');
        }

        // FieldType :=
        //     FieldName
        //   | FieldName ':' TypeExpression
        //
        // FieldName :=
        //     NameExpression
        //   | StringLiteral
        //   | NumberLiteral
        //   | ReservedIdentifier
        function parseFieldType() {
            var key;

            key = parseFieldName();
            if (token === Token.COLON) {
                consume(Token.COLON);
                return {
                    type: Syntax.FieldType,
                    key: key,
                    value: parseTypeExpression()
                };
            }
            return {
                type: Syntax.FieldType,
                key: key,
                value: null
            };
        }

        // RecordType := '{' FieldTypeList '}'
        //
        // FieldTypeList :=
        //     <<empty>>
        //   | FieldType
        //   | FieldType ',' FieldTypeList
        function parseRecordType() {
            var fields;

            consume(Token.LBRACE, 'RecordType should start with {');
            fields = [];
            if (token === Token.COMMA) {
                consume(Token.COMMA);
            } else {
                while (token !== Token.RBRACE) {
                    fields.push(parseFieldType());
                    if (token !== Token.RBRACE) {
                        expect(Token.COMMA);
                    }
                }
            }
            expect(Token.RBRACE);
            return {
                type: Syntax.RecordType,
                fields: fields
            };
        }

        function parseNameExpression() {
            var name = value;
            expect(Token.NAME);
            return {
                type: Syntax.NameExpression,
                name: name
            };
        }

        // TypeExpressionList :=
        //     TopLevelTypeExpression
        //   | TopLevelTypeExpression ',' TypeExpressionList
        function parseTypeExpressionList() {
            var elements = [];

            elements.push(parseTop());
            while (token === Token.COMMA) {
                consume(Token.COMMA);
                elements.push(parseTop());
            }
            return elements;
        }

        // TypeName :=
        //     NameExpression
        //   | NameExpression TypeApplication
        //
        // TypeApplication :=
        //     '.<' TypeExpressionList '>'
        //   | '<' TypeExpressionList '>'   // this is extension of doctrine
        function parseTypeName() {
            var expr, applications;

            expr = parseNameExpression();
            if (token === Token.DOT_LT || token === Token.LT) {
                next();
                applications = parseTypeExpressionList();
                expect(Token.GT);
                return {
                    type: Syntax.TypeApplication,
                    expression: expr,
                    applications: applications
                };
            }
            return expr;
        }

        // ResultType :=
        //     <<empty>>
        //   | ':' void
        //   | ':' TypeExpression
        //
        // BNF is above
        // but, we remove <<empty>> pattern, so token is always TypeToken::COLON
        function parseResultType() {
            consume(Token.COLON, 'ResultType should start with :');
            if (token === Token.NAME && value === 'void') {
                consume(Token.NAME);
                return {
                    type: Syntax.VoidLiteral
                };
            }
            return parseTypeExpression();
        }

        // ParametersType :=
        //     RestParameterType
        //   | NonRestParametersType
        //   | NonRestParametersType ',' RestParameterType
        //
        // RestParameterType :=
        //     '...'
        //     '...' Identifier
        //
        // NonRestParametersType :=
        //     ParameterType ',' NonRestParametersType
        //   | ParameterType
        //   | OptionalParametersType
        //
        // OptionalParametersType :=
        //     OptionalParameterType
        //   | OptionalParameterType, OptionalParametersType
        //
        // OptionalParameterType := ParameterType=
        //
        // ParameterType := TypeExpression | Identifier ':' TypeExpression
        //
        // Identifier is "new" or "this"
        function parseParametersType() {
            var params = [], optionalSequence = false, expr, rest = false;

            while (token !== Token.RPAREN) {
                if (token === Token.REST) {
                    // RestParameterType
                    consume(Token.REST);
                    rest = true;
                }

                expr = parseTypeExpression();
                if (expr.type === Syntax.NameExpression && token === Token.COLON) {
                    // Identifier ':' TypeExpression
                    consume(Token.COLON);
                    expr = {
                        type: Syntax.ParameterType,
                        name: expr.name,
                        expression: parseTypeExpression()
                    };
                }
                if (token === Token.EQUAL) {
                    consume(Token.EQUAL);
                    expr = {
                        type: Syntax.OptionalType,
                        expression: expr
                    };
                    optionalSequence = true;
                } else {
                    if (optionalSequence) {
                        throwError('unexpected token');
                    }
                }
                if (rest) {
                    expr = {
                        type: Syntax.RestType,
                        expression: expr
                    };
                }
                params.push(expr);
                if (token !== Token.RPAREN) {
                    expect(Token.COMMA);
                }
            }
            return params;
        }

        // FunctionType := 'function' FunctionSignatureType
        //
        // FunctionSignatureType :=
        //   | TypeParameters '(' ')' ResultType
        //   | TypeParameters '(' ParametersType ')' ResultType
        //   | TypeParameters '(' 'this' ':' TypeName ')' ResultType
        //   | TypeParameters '(' 'this' ':' TypeName ',' ParametersType ')' ResultType
        function parseFunctionType() {
            var isNew, thisBinding, params, result, fnType;
            assert(token === Token.NAME && value === 'function', 'FunctionType should start with \'function\'');
            consume(Token.NAME);

            // Google Closure Compiler is not implementing TypeParameters.
            // So we do not. if we don't get '(', we see it as error.
            expect(Token.LPAREN);

            isNew = false;
            params = [];
            thisBinding = null;
            if (token !== Token.RPAREN) {
                // ParametersType or 'this'
                if (token === Token.NAME &&
                        (value === 'this' || value === 'new')) {
                    // 'this' or 'new'
                    // 'new' is Closure Compiler extension
                    isNew = value === 'new';
                    consume(Token.NAME);
                    expect(Token.COLON);
                    thisBinding = parseTypeName();
                    if (token === Token.COMMA) {
                        consume(Token.COMMA);
                        params = parseParametersType();
                    }
                } else {
                    params = parseParametersType();
                }
            }

            expect(Token.RPAREN);

            result = null;
            if (token === Token.COLON) {
                result = parseResultType();
            }

            fnType = {
                type: Syntax.FunctionType,
                params: params,
                result: result
            };
            if (thisBinding) {
                // avoid adding null 'new' and 'this' properties
                fnType['this'] = thisBinding;
                if (isNew) {
                    fnType['new'] = true;
                }
            }
            return fnType;
        }

        // BasicTypeExpression :=
        //     '*'
        //   | 'null'
        //   | 'undefined'
        //   | TypeName
        //   | FunctionType
        //   | UnionType
        //   | RecordType
        //   | ArrayType
        function parseBasicTypeExpression() {
            var context;
            switch (token) {
            case Token.STAR:
                consume(Token.STAR);
                return {
                    type: Syntax.AllLiteral
                };

            case Token.LPAREN:
                return parseUnionType();

            case Token.LBRACK:
                return parseArrayType();

            case Token.LBRACE:
                return parseRecordType();

            case Token.NAME:
                if (value === 'null') {
                    consume(Token.NAME);
                    return {
                        type: Syntax.NullLiteral
                    };
                }

                if (value === 'undefined') {
                    consume(Token.NAME);
                    return {
                        type: Syntax.UndefinedLiteral
                    };
                }

                context = Context.save();
                if (value === 'function') {
                    try {
                        return parseFunctionType();
                    } catch (e) {
                        context.restore();
                    }
                }

                return parseTypeName();

            default:
                throwError('unexpected token');
            }
        }

        // TypeExpression :=
        //     BasicTypeExpression
        //   | '?' BasicTypeExpression
        //   | '!' BasicTypeExpression
        //   | BasicTypeExpression '?'
        //   | BasicTypeExpression '!'
        //   | '?'
        //   | BasicTypeExpression '[]'
        function parseTypeExpression() {
            var expr;

            if (token === Token.QUESTION) {
                consume(Token.QUESTION);
                if (token === Token.COMMA || token === Token.EQUAL || token === Token.RBRACE ||
                        token === Token.RPAREN || token === Token.PIPE || token === Token.EOF ||
                        token === Token.RBRACK) {
                    return {
                        type: Syntax.NullableLiteral
                    };
                }
                return {
                    type: Syntax.NullableType,
                    expression: parseBasicTypeExpression(),
                    prefix: true
                };
            }

            if (token === Token.BANG) {
                consume(Token.BANG);
                return {
                    type: Syntax.NonNullableType,
                    expression: parseBasicTypeExpression(),
                    prefix: true
                };
            }

            expr = parseBasicTypeExpression();
            if (token === Token.BANG) {
                consume(Token.BANG);
                return {
                    type: Syntax.NonNullableType,
                    expression: expr,
                    prefix: false
                };
            }

            if (token === Token.QUESTION) {
                consume(Token.QUESTION);
                return {
                    type: Syntax.NullableType,
                    expression: expr,
                    prefix: false
                };
            }

            if (token === Token.LBRACK) {
                consume(Token.LBRACK);
                consume(Token.RBRACK, 'expected an array-style type declaration (' + value + '[])');
                return {
                    type: Syntax.TypeApplication,
                    expression: {
                        type: Syntax.NameExpression,
                        name: 'Array'
                    },
                    applications: [expr]
                };
            }

            return expr;
        }

        // TopLevelTypeExpression :=
        //      TypeExpression
        //    | TypeUnionList
        //
        // This rule is Google Closure Compiler extension, not ES4
        // like,
        //   { number | string }
        // If strict to ES4, we should write it as
        //   { (number|string) }
        function parseTop() {
            var expr, elements;

            expr = parseTypeExpression();
            if (token !== Token.PIPE) {
                return expr;
            }

            elements = [ expr ];
            consume(Token.PIPE);
            while (true) {
                elements.push(parseTypeExpression());
                if (token !== Token.PIPE) {
                    break;
                }
                consume(Token.PIPE);
            }

            return {
                type: Syntax.UnionType,
                elements: elements
            };
        }

        function parseTopParamType() {
            var expr;

            if (token === Token.REST) {
                consume(Token.REST);
                return {
                    type: Syntax.RestType,
                    expression: parseTop()
                };
            }

            expr = parseTop();
            if (token === Token.EQUAL) {
                consume(Token.EQUAL);
                return {
                    type: Syntax.OptionalType,
                    expression: expr
                };
            }

            return expr;
        }

        function parseType(src, opt) {
            var expr;

            source = src;
            length = source.length;
            index = 0;
            previous = 0;

            next();
            expr = parseTop();

            if (opt && opt.midstream) {
                return {
                    expression: expr,
                    index: previous
                };
            }

            if (token !== Token.EOF) {
                throwError('not reach to EOF');
            }

            return expr;
        }

        function parseParamType(src, opt) {
            var expr;

            source = src;
            length = source.length;
            index = 0;
            previous = 0;

            next();
            expr = parseTopParamType();

            if (opt && opt.midstream) {
                return {
                    expression: expr,
                    index: previous
                };
            }

            if (token !== Token.EOF) {
                throwError('not reach to EOF');
            }

            return expr;
        }

        function stringifyImpl(node, compact, topLevel) {
            var result, i, iz;

            switch (node.type) {
            case Syntax.NullableLiteral:
                result = '?';
                break;

            case Syntax.AllLiteral:
                result = '*';
                break;

            case Syntax.NullLiteral:
                result = 'null';
                break;

            case Syntax.UndefinedLiteral:
                result = 'undefined';
                break;

            case Syntax.VoidLiteral:
                result = 'void';
                break;

            case Syntax.UnionType:
                if (!topLevel) {
                    result = '(';
                } else {
                    result = '';
                }

                for (i = 0, iz = node.elements.length; i < iz; ++i) {
                    result += stringifyImpl(node.elements[i], compact);
                    if ((i + 1) !== iz) {
                        result += '|';
                    }
                }

                if (!topLevel) {
                    result += ')';
                }
                break;

            case Syntax.ArrayType:
                result = '[';
                for (i = 0, iz = node.elements.length; i < iz; ++i) {
                    result += stringifyImpl(node.elements[i], compact);
                    if ((i + 1) !== iz) {
                        result += compact ? ',' : ', ';
                    }
                }
                result += ']';
                break;

            case Syntax.RecordType:
                result = '{';
                for (i = 0, iz = node.fields.length; i < iz; ++i) {
                    result += stringifyImpl(node.fields[i], compact);
                    if ((i + 1) !== iz) {
                        result += compact ? ',' : ', ';
                    }
                }
                result += '}';
                break;

            case Syntax.FieldType:
                if (node.value) {
                    result = node.key + (compact ? ':' : ': ') + stringifyImpl(node.value, compact);
                } else {
                    result = node.key;
                }
                break;

            case Syntax.FunctionType:
                result = compact ? 'function(' : 'function (';

                if (node['this']) {
                    if (node['new']) {
                        result += (compact ? 'new:' : 'new: ');
                    } else {
                        result += (compact ? 'this:' : 'this: ');
                    }

                    result += stringifyImpl(node['this'], compact);

                    if (node.params.length !== 0) {
                        result += compact ? ',' : ', ';
                    }
                }

                for (i = 0, iz = node.params.length; i < iz; ++i) {
                    result += stringifyImpl(node.params[i], compact);
                    if ((i + 1) !== iz) {
                        result += compact ? ',' : ', ';
                    }
                }

                result += ')';

                if (node.result) {
                    result += (compact ? ':' : ': ') + stringifyImpl(node.result, compact);
                }
                break;

            case Syntax.ParameterType:
                result = node.name + (compact ? ':' : ': ') + stringifyImpl(node.expression, compact);
                break;

            case Syntax.RestType:
                result = '...';
                if (node.expression) {
                    result += stringifyImpl(node.expression, compact);
                }
                break;

            case Syntax.NonNullableType:
                if (node.prefix) {
                    result = '!' + stringifyImpl(node.expression, compact);
                } else {
                    result = stringifyImpl(node.expression, compact) + '!';
                }
                break;

            case Syntax.OptionalType:
                result = stringifyImpl(node.expression, compact) + '=';
                break;

            case Syntax.NullableType:
                if (node.prefix) {
                    result = '?' + stringifyImpl(node.expression, compact);
                } else {
                    result = stringifyImpl(node.expression, compact) + '?';
                }
                break;

            case Syntax.NameExpression:
                result = node.name;
                break;

            case Syntax.TypeApplication:
                result = stringifyImpl(node.expression, compact) + '.<';
                for (i = 0, iz = node.applications.length; i < iz; ++i) {
                    result += stringifyImpl(node.applications[i], compact);
                    if ((i + 1) !== iz) {
                        result += compact ? ',' : ', ';
                    }
                }
                result += '>';
                break;

            default:
                throwError('Unknown type ' + node.type);
            }

            return result;
        }

        function stringify(node, options) {
            if (options == null) {
                options = {};
            }
            return stringifyImpl(node, options.compact, options.topLevel);
        }

        exports.parseType = parseType;
        exports.parseParamType = parseParamType;
        exports.stringify = stringify;
        exports.Syntax = Syntax;
    }(typed = {}));

    // JSDoc Tag Parser

    (function (exports) {
        var Rules,
            index,
            lineNumber,
            length,
            source,
            recoverable,
            sloppy,
            strict;

        function advance() {
            var ch = source.charCodeAt(index);
            index += 1;
            if (esutils.code.isLineTerminator(ch) && !(ch === 0x0D  /* '\r' */ && source.charCodeAt(index) === 0x0A  /* '\n' */)) {
                lineNumber += 1;
            }
            return String.fromCharCode(ch);
        }

        function scanTitle() {
            var title = '';
            // waste '@'
            advance();

            while (index < length && isASCIIAlphanumeric(source.charCodeAt(index))) {
                title += advance();
            }

            return title;
        }

        function seekContent() {
            var ch, waiting, last = index;

            waiting = false;
            while (last < length) {
                ch = source.charCodeAt(last);
                if (esutils.code.isLineTerminator(ch) && !(ch === 0x0D  /* '\r' */ && source.charCodeAt(last + 1) === 0x0A  /* '\n' */)) {
                    lineNumber += 1;
                    waiting = true;
                } else if (waiting) {
                    if (ch === 0x40  /* '@' */) {
                        break;
                    }
                    if (!esutils.code.isWhiteSpace(ch)) {
                        waiting = false;
                    }
                }
                last += 1;
            }
            return last;
        }

        // type expression may have nest brace, such as,
        // { { ok: string } }
        //
        // therefore, scanning type expression with balancing braces.
        function parseType(title, last) {
            var ch, brace, type, direct = false;


            // search '{'
            while (index < last) {
                ch = source.charCodeAt(index);
                if (esutils.code.isWhiteSpace(ch)) {
                    advance();
                } else if (ch === 0x7B  /* '{' */) {
                    advance();
                    break;
                } else {
                    // this is direct pattern
                    direct = true;
                    break;
                }
            }


            if (direct) {
                return null;
            }

            // type expression { is found
            brace = 1;
            type = '';
            while (index < last) {
                ch = source.charCodeAt(index);
                if (esutils.code.isLineTerminator(ch)) {
                    advance();
                } else {
                    if (ch === 0x7D  /* '}' */) {
                        brace -= 1;
                        if (brace === 0) {
                            advance();
                            break;
                        }
                    } else if (ch === 0x7B  /* '{' */) {
                        brace += 1;
                    }
                    type += advance();
                }
            }

            if (brace !== 0) {
                // braces is not balanced
                return throwError('Braces are not balanced');
            }

            if (isParamTitle(title)) {
                return typed.parseParamType(type);
            }
            return typed.parseType(type);
        }

        function scanIdentifier(last) {
            var identifier;
            if (!esutils.code.isIdentifierStart(source.charCodeAt(index))) {
                return null;
            }
            identifier = advance();
            while (index < last && esutils.code.isIdentifierPart(source.charCodeAt(index))) {
                identifier += advance();
            }
            return identifier;
        }

        function skipWhiteSpace(last) {
            while (index < last && (esutils.code.isWhiteSpace(source.charCodeAt(index)) || esutils.code.isLineTerminator(source.charCodeAt(index)))) {
                advance();
            }
        }

        function parseName(last, allowBrackets, allowNestedParams) {
            var name = '', useBrackets;

            skipWhiteSpace(last);

            if (index >= last) {
                return null;
            }

            if (allowBrackets && source.charCodeAt(index) === 0x5B  /* '[' */) {
                useBrackets = true;
                name = advance();
            }

            if (!esutils.code.isIdentifierStart(source.charCodeAt(index))) {
                return null;
            }

            name += scanIdentifier(last);

            if (allowNestedParams) {
                while (source.charCodeAt(index) === 0x2E  /* '.' */ ||
                        source.charCodeAt(index) === 0x23  /* '#' */ ||
                        source.charCodeAt(index) === 0x7E  /* '~' */) {
                    name += advance();
                    name += scanIdentifier(last);
                }
            }

            if (useBrackets) {
                // do we have a default value for this?
                if (source.charCodeAt(index) === 0x3D  /* '=' */) {

                    // consume the '='' symbol
                    name += advance();
                    // scan in the default value
                    while (index < last && source.charCodeAt(index) !== 0x5D  /* ']' */) {
                        name += advance();
                    }
                }

                if (index >= last  || source.charCodeAt(index) !== 0x5D  /* ']' */) {
                    // we never found a closing ']'
                    return null;
                }

                // collect the last ']'
                name += advance();
            }

            return name;
        }

        function skipToTag() {
            while (index < length && source.charCodeAt(index) !== 0x40  /* '@' */) {
                advance();
            }
            if (index >= length) {
                return false;
            }
            assert(source.charCodeAt(index) === 0x40  /* '@' */);
            return true;
        }

        function TagParser(options, title) {
            this._options = options;
            this._title = title;
            this._tag = {
                title: title,
                description: null
            };
            if (this._options.lineNumbers) {
                this._tag.lineNumber = lineNumber;
            }
            this._last = 0;
            // space to save special information for title parsers.
            this._extra = { };
        }

        // addError(err, ...)
        TagParser.prototype.addError = function addError(errorText) {
            var args = Array.prototype.slice.call(arguments, 1),
                msg = errorText.replace(
                    /%(\d)/g,
                    function (whole, index) {
                        assert(index < args.length, 'Message reference must be in range');
                        return args[index];
                    }
                );

            if (!this._tag.errors) {
                this._tag.errors = [];
            }
            if (strict) {
                throwError(msg);
            }
            this._tag.errors.push(msg);
            return recoverable;
        };

        TagParser.prototype.parseType = function () {
            // type required titles
            if (isTypeParameterRequired(this._title)) {
                try {
                    this._tag.type = parseType(this._title, this._last);
                    if (!this._tag.type) {
                        if (!isParamTitle(this._title)) {
                            if (!this.addError('Missing or invalid tag type')) {
                                return false;
                            }
                        }
                    }
                } catch (error) {
                    this._tag.type = null;
                    if (!this.addError(error.message)) {
                        return false;
                    }
                }
            } else if (isAllowedType(this._title)) {
                // optional types
                try {
                    this._tag.type = parseType(this._title, this._last);
                } catch (e) {
                    //For optional types, lets drop the thrown error when we hit the end of the file
                }
            }
            return true;
        };

        TagParser.prototype._parseNamePath = function (optional) {
            var name;
            name = parseName(this._last, sloppy && isParamTitle(this._title), true);
            if (!name) {
                if (!optional) {
                    if (!this.addError('Missing or invalid tag name')) {
                        return false;
                    }
                }
            }
            this._tag.name = name;
            return true;
        };

        TagParser.prototype.parseNamePath = function () {
            return this._parseNamePath(false);
        };

        TagParser.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(true);
        };


        TagParser.prototype.parseName = function () {
            var assign, name;

            // param, property requires name
            if (isAllowedName(this._title)) {
                this._tag.name = parseName(this._last, sloppy && isParamTitle(this._title), isAllowedNested(this._title));
                if (!this._tag.name) {
                    if (!isNameParameterRequired(this._title)) {
                        return true;
                    }

                    // it's possible the name has already been parsed but interpreted as a type
                    // it's also possible this is a sloppy declaration, in which case it will be
                    // fixed at the end
                    if (isParamTitle(this._title) && this._tag.type && this._tag.type.name) {
                        this._extra.name = this._tag.type;
                        this._tag.name = this._tag.type.name;
                        this._tag.type = null;
                    } else {
                        if (!this.addError('Missing or invalid tag name')) {
                            return false;
                        }
                    }
                } else {
                    name = this._tag.name;
                    if (name.charAt(0) === '[' && name.charAt(name.length - 1) === ']') {
                        // extract the default value if there is one
                        // example: @param {string} [somebody=John Doe] description
                        assign = name.substring(1, name.length - 1).split('=');
                        if (assign[1]) {
                            this._tag['default'] = assign[1];
                        }
                        this._tag.name = assign[0];

                        // convert to an optional type
                        if (this._tag.type && this._tag.type.type !== 'OptionalType') {
                            this._tag.type = {
                                type: 'OptionalType',
                                expression: this._tag.type
                            };
                        }
                    }
                }
            }

            return true;
        };

        TagParser.prototype.parseDescription = function parseDescription() {
            var description = trim(sliceSource(source, index, this._last));
            if (description) {
                if ((/^-\s+/).test(description)) {
                    description = description.substring(2);
                }
                this._tag.description = description;
            }
            return true;
        };

        TagParser.prototype.parseKind = function parseKind() {
            var kind, kinds;
            kinds = {
                'class': true,
                'constant': true,
                'event': true,
                'external': true,
                'file': true,
                'function': true,
                'member': true,
                'mixin': true,
                'module': true,
                'namespace': true,
                'typedef': true
            };
            kind = trim(sliceSource(source, index, this._last));
            this._tag.kind = kind;
            if (!hasOwnProperty(kinds, kind)) {
                if (!this.addError('Invalid kind name \'%0\'', kind)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.parseAccess = function parseAccess() {
            var access;
            access = trim(sliceSource(source, index, this._last));
            this._tag.access = access;
            if (access !== 'private' && access !== 'protected' && access !== 'public') {
                if (!this.addError('Invalid access name \'%0\'', access)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.parseVariation = function parseVariation() {
            var variation, text;
            text = trim(sliceSource(source, index, this._last));
            variation = parseFloat(text, 10);
            this._tag.variation = variation;
            if (isNaN(variation)) {
                if (!this.addError('Invalid variation \'%0\'', text)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.ensureEnd = function () {
            var shouldBeEmpty = trim(sliceSource(source, index, this._last));
            if (shouldBeEmpty) {
                if (!this.addError('Unknown content \'%0\'', shouldBeEmpty)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.epilogue = function epilogue() {
            var description;

            description = this._tag.description;
            // un-fix potentially sloppy declaration
            if (isParamTitle(this._title) && !this._tag.type && description && description.charAt(0) === '[') {
                this._tag.type = this._extra.name;
                this._tag.name = undefined;

                if (!sloppy) {
                    if (!this.addError('Missing or invalid tag name')) {
                        return false;
                    }
                }
            }

            return true;
        };

        Rules = {
            // http://usejsdoc.org/tags-access.html
            'access': ['parseAccess'],
            // http://usejsdoc.org/tags-alias.html
            'alias': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-augments.html
            'augments': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-constructor.html
            'constructor': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-constructor.html
            'class': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-extends.html
            'extends': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-deprecated.html
            'deprecated': ['parseDescription'],
            // http://usejsdoc.org/tags-global.html
            'global': ['ensureEnd'],
            // http://usejsdoc.org/tags-inner.html
            'inner': ['ensureEnd'],
            // http://usejsdoc.org/tags-instance.html
            'instance': ['ensureEnd'],
            // http://usejsdoc.org/tags-kind.html
            'kind': ['parseKind'],
            // http://usejsdoc.org/tags-mixes.html
            'mixes': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-mixin.html
            'mixin': ['parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-member.html
            'member': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-method.html
            'method': ['parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-module.html
            'module': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-method.html
            'func': ['parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-method.html
            'function': ['parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-member.html
            'var': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-name.html
            'name': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-namespace.html
            'namespace': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-private.html
            'private': ['parseType', 'parseDescription'],
            // http://usejsdoc.org/tags-protected.html
            'protected': ['parseType', 'parseDescription'],
            // http://usejsdoc.org/tags-public.html
            'public': ['parseType', 'parseDescription'],
            // http://usejsdoc.org/tags-readonly.html
            'readonly': ['ensureEnd'],
            // http://usejsdoc.org/tags-requires.html
            'requires': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-since.html
            'since': ['parseDescription'],
            // http://usejsdoc.org/tags-static.html
            'static': ['ensureEnd'],
            // http://usejsdoc.org/tags-summary.html
            'summary': ['parseDescription'],
            // http://usejsdoc.org/tags-this.html
            'this': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-todo.html
            'todo': ['parseDescription'],
            // http://usejsdoc.org/tags-variation.html
            'variation': ['parseVariation'],
            // http://usejsdoc.org/tags-version.html
            'version': ['parseDescription']
        };

        TagParser.prototype.parse = function parse() {
            var i, iz, sequences, method;

            // empty title
            if (!this._title) {
                if (!this.addError('Missing or invalid title')) {
                    return null;
                }
            }

            // Seek to content last index.
            this._last = seekContent(this._title);

            if (hasOwnProperty(Rules, this._title)) {
                sequences = Rules[this._title];
            } else {
                // default sequences
                sequences = ['parseType', 'parseName', 'parseDescription', 'epilogue'];
            }

            for (i = 0, iz = sequences.length; i < iz; ++i) {
                method = sequences[i];
                if (!this[method]()) {
                    return null;
                }
            }

            // Seek global index to end of this tag.
            index = this._last;
            return this._tag;
        };

        function parseTag(options) {
            var title, parser;

            // skip to tag
            if (!skipToTag()) {
                return null;
            }

            // scan title
            title = scanTitle();

            // construct tag parser
            parser = new TagParser(options, title);
            return parser.parse();
        }

        //
        // Parse JSDoc
        //

        function scanJSDocDescription() {
            var description = '', ch, atAllowed;

            atAllowed = true;
            while (index < length) {
                ch = source.charCodeAt(index);

                if (atAllowed && ch === 0x40  /* '@' */) {
                    break;
                }

                if (esutils.code.isLineTerminator(ch)) {
                    atAllowed = true;
                } else if (atAllowed && !esutils.code.isWhiteSpace(ch)) {
                    atAllowed = false;
                }

                description += advance();
            }
            return trim(description);
        }

        function parse(comment, options) {
            var tags = [], tag, description, interestingTags, i, iz;

            if (options === undefined) {
                options = {};
            }

            if (typeof options.unwrap === 'boolean' && options.unwrap) {
                source = unwrapComment(comment);
            } else {
                source = comment;
            }

            // array of relevant tags
            if (options.tags) {
                if (isArray(options.tags)) {
                    interestingTags = { };
                    for (i = 0, iz = options.tags.length; i < iz; i++) {
                        if (typeof options.tags[i] === 'string') {
                            interestingTags[options.tags[i]] = true;
                        } else {
                            throwError('Invalid "tags" parameter: ' + options.tags);
                        }
                    }
                } else {
                    throwError('Invalid "tags" parameter: ' + options.tags);
                }
            }

            length = source.length;
            index = 0;
            lineNumber = 0;
            recoverable = options.recoverable;
            sloppy = options.sloppy;
            strict = options.strict;

            description = scanJSDocDescription();

            while (true) {
                tag = parseTag(options);
                if (!tag) {
                    break;
                }
                if (!interestingTags || interestingTags.hasOwnProperty(tag.title)) {
                    tags.push(tag);
                }
            }

            return {
                description: description,
                tags: tags
            };
        }
        exports.parse = parse;
    }(jsdoc = {}));

    exports.version = VERSION;
    exports.parse = jsdoc.parse;
    exports.parseType = typed.parseType;
    exports.parseParamType = typed.parseParamType;
    exports.unwrapComment = unwrapComment;
    exports.Syntax = shallowCopy(typed.Syntax);
    exports.Error = DoctrineError;
    exports.type = {
        Syntax: exports.Syntax,
        parseType: typed.parseType,
        parseParamType: typed.parseParamType,
        stringify: typed.stringify
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{"./package.json":19,"esutils":18}],15:[function(require,module,exports){
/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    function isExpression(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'ArrayExpression':
            case 'AssignmentExpression':
            case 'BinaryExpression':
            case 'CallExpression':
            case 'ConditionalExpression':
            case 'FunctionExpression':
            case 'Identifier':
            case 'Literal':
            case 'LogicalExpression':
            case 'MemberExpression':
            case 'NewExpression':
            case 'ObjectExpression':
            case 'SequenceExpression':
            case 'ThisExpression':
            case 'UnaryExpression':
            case 'UpdateExpression':
                return true;
        }
        return false;
    }

    function isIterationStatement(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'DoWhileStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'WhileStatement':
                return true;
        }
        return false;
    }

    function isStatement(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'BlockStatement':
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'DebuggerStatement':
            case 'DoWhileStatement':
            case 'EmptyStatement':
            case 'ExpressionStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'IfStatement':
            case 'LabeledStatement':
            case 'ReturnStatement':
            case 'SwitchStatement':
            case 'ThrowStatement':
            case 'TryStatement':
            case 'VariableDeclaration':
            case 'WhileStatement':
            case 'WithStatement':
                return true;
        }
        return false;
    }

    function isSourceElement(node) {
      return isStatement(node) || node != null && node.type === 'FunctionDeclaration';
    }

    function trailingStatement(node) {
        switch (node.type) {
        case 'IfStatement':
            if (node.alternate != null) {
                return node.alternate;
            }
            return node.consequent;

        case 'LabeledStatement':
        case 'ForStatement':
        case 'ForInStatement':
        case 'WhileStatement':
        case 'WithStatement':
            return node.body;
        }
        return null;
    }

    function isProblematicIfStatement(node) {
        var current;

        if (node.type !== 'IfStatement') {
            return false;
        }
        if (node.alternate == null) {
            return false;
        }
        current = node.consequent;
        do {
            if (current.type === 'IfStatement') {
                if (current.alternate == null)  {
                    return true;
                }
            }
            current = trailingStatement(current);
        } while (current);

        return false;
    }

    module.exports = {
        isExpression: isExpression,
        isStatement: isStatement,
        isIterationStatement: isIterationStatement,
        isSourceElement: isSourceElement,
        isProblematicIfStatement: isProblematicIfStatement,

        trailingStatement: trailingStatement
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{}],16:[function(require,module,exports){
/*
  Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var Regex, NON_ASCII_WHITESPACES;

    // See `tools/generate-identifier-regex.js`.
    Regex = {
        NonAsciiIdentifierStart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]'),
        NonAsciiIdentifierPart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0\u08A2-\u08AC\u08E4-\u08FE\u0900-\u0963\u0966-\u096F\u0971-\u0977\u0979-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191C\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1D00-\u1DE6\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA697\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7B\uAA80-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]')
    };

    function isDecimalDigit(ch) {
        return (ch >= 48 && ch <= 57);   // 0..9
    }

    function isHexDigit(ch) {
        return isDecimalDigit(ch) ||    // 0..9
            (97 <= ch && ch <= 102) ||  // a..f
            (65 <= ch && ch <= 70);     // A..F
    }

    function isOctalDigit(ch) {
        return (ch >= 48 && ch <= 55);   // 0..7
    }

    // 7.2 White Space

    NON_ASCII_WHITESPACES = [
        0x1680, 0x180E,
        0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A,
        0x202F, 0x205F,
        0x3000,
        0xFEFF
    ];

    function isWhiteSpace(ch) {
        return (ch === 0x20) || (ch === 0x09) || (ch === 0x0B) || (ch === 0x0C) || (ch === 0xA0) ||
            (ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0);
    }

    // 7.3 Line Terminators

    function isLineTerminator(ch) {
        return (ch === 0x0A) || (ch === 0x0D) || (ch === 0x2028) || (ch === 0x2029);
    }

    // 7.6 Identifier Names and Identifiers

    function isIdentifierStart(ch) {
        return (ch >= 97 && ch <= 122) ||     // a..z
            (ch >= 65 && ch <= 90) ||         // A..Z
            (ch === 36) || (ch === 95) ||     // $ (dollar) and _ (underscore)
            (ch === 92) ||                    // \ (backslash)
            ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch)));
    }

    function isIdentifierPart(ch) {
        return (ch >= 97 && ch <= 122) ||     // a..z
            (ch >= 65 && ch <= 90) ||         // A..Z
            (ch >= 48 && ch <= 57) ||         // 0..9
            (ch === 36) || (ch === 95) ||     // $ (dollar) and _ (underscore)
            (ch === 92) ||                    // \ (backslash)
            ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
    }

    module.exports = {
        isDecimalDigit: isDecimalDigit,
        isHexDigit: isHexDigit,
        isOctalDigit: isOctalDigit,
        isWhiteSpace: isWhiteSpace,
        isLineTerminator: isLineTerminator,
        isIdentifierStart: isIdentifierStart,
        isIdentifierPart: isIdentifierPart
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{}],17:[function(require,module,exports){
/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var code = require('./code');

    function isStrictModeReservedWordES6(id) {
        switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'let':
            return true;
        default:
            return false;
        }
    }

    function isKeywordES5(id, strict) {
        // yield should not be treated as keyword under non-strict mode.
        if (!strict && id === 'yield') {
            return false;
        }
        return isKeywordES6(id, strict);
    }

    function isKeywordES6(id, strict) {
        if (strict && isStrictModeReservedWordES6(id)) {
            return true;
        }

        switch (id.length) {
        case 2:
            return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
            return (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try');
        case 4:
            return (id === 'this') || (id === 'else') || (id === 'case') ||
                (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
            return (id === 'while') || (id === 'break') || (id === 'catch') ||
                (id === 'throw') || (id === 'const') || (id === 'yield') ||
                (id === 'class') || (id === 'super');
        case 6:
            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
            return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
            return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
            return (id === 'instanceof');
        default:
            return false;
        }
    }

    function isReservedWordES5(id, strict) {
        return id === 'null' || id === 'true' || id === 'false' || isKeywordES5(id, strict);
    }

    function isReservedWordES6(id, strict) {
        return id === 'null' || id === 'true' || id === 'false' || isKeywordES6(id, strict);
    }

    function isRestrictedWord(id) {
        return id === 'eval' || id === 'arguments';
    }

    function isIdentifierName(id) {
        var i, iz, ch;

        if (id.length === 0) {
            return false;
        }

        ch = id.charCodeAt(0);
        if (!code.isIdentifierStart(ch) || ch === 92) {  // \ (backslash)
            return false;
        }

        for (i = 1, iz = id.length; i < iz; ++i) {
            ch = id.charCodeAt(i);
            if (!code.isIdentifierPart(ch) || ch === 92) {  // \ (backslash)
                return false;
            }
        }
        return true;
    }

    function isIdentifierES5(id, strict) {
        return isIdentifierName(id) && !isReservedWordES5(id, strict);
    }

    function isIdentifierES6(id, strict) {
        return isIdentifierName(id) && !isReservedWordES6(id, strict);
    }

    module.exports = {
        isKeywordES5: isKeywordES5,
        isKeywordES6: isKeywordES6,
        isReservedWordES5: isReservedWordES5,
        isReservedWordES6: isReservedWordES6,
        isRestrictedWord: isRestrictedWord,
        isIdentifierName: isIdentifierName,
        isIdentifierES5: isIdentifierES5,
        isIdentifierES6: isIdentifierES6
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{"./code":16}],18:[function(require,module,exports){
/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/


(function () {
    'use strict';

    exports.ast = require('./ast');
    exports.code = require('./code');
    exports.keyword = require('./keyword');
}());
/* vim: set sw=4 ts=4 et tw=80 : */

},{"./ast":15,"./code":16,"./keyword":17}],19:[function(require,module,exports){
module.exports={
  "name": "doctrine",
  "description": "JSDoc parser",
  "homepage": "http://github.com/Constellation/doctrine.html",
  "main": "doctrine.js",
  "version": "0.6.2",
  "engines": {
    "node": ">=0.10.0"
  },
  "maintainers": [
    {
      "name": "constellation",
      "email": "utatane.tea@gmail.com"
    }
  ],
  "repository": {
    "type": "git",
    "url": "http://github.com/Constellation/doctrine.git"
  },
  "devDependencies": {
    "gulp": "^3.8.10",
    "gulp-eslint": "^0.1.8",
    "gulp-istanbul": "^0.3.1",
    "gulp-jshint": "^1.9.0",
    "gulp-mocha": "^1.1.1",
    "jshint-stylish": "^1.0.0",
    "should": "^4.1.0"
  },
  "licenses": [
    {
      "type": "BSD",
      "url": "http://github.com/Constellation/doctrine/raw/master/LICENSE.BSD"
    }
  ],
  "scripts": {
    "test": "gulp",
    "unit-test": "gulp test",
    "lint": "gulp lint"
  },
  "dependencies": {
    "esutils": "^1.1.4"
  },
  "gitHead": "fc47c185f8003e932986460b7f08aa4535ed9a43",
  "bugs": {
    "url": "https://github.com/Constellation/doctrine/issues"
  },
  "_id": "doctrine@0.6.2",
  "_shasum": "a7f3ddbf8ce79d1cd230388ee21035e2fd4ce394",
  "_from": "doctrine@0.6.2",
  "_npmVersion": "2.0.0-alpha-5",
  "_npmUser": {
    "name": "constellation",
    "email": "utatane.tea@gmail.com"
  },
  "dist": {
    "shasum": "a7f3ddbf8ce79d1cd230388ee21035e2fd4ce394",
    "tarball": "http://registry.npmjs.org/doctrine/-/doctrine-0.6.2.tgz"
  },
  "directories": {},
  "_resolved": "http://registry.npmjs.org/doctrine/-/doctrine-0.6.2.tgz",
  "readme": "ERROR: No README data found!"
}

},{}],20:[function(require,module,exports){
/*
  Copyright (C) 2012-2013 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2013 Alex Seville <hi@alexanderseville.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/**
 * Escope (<a href="http://github.com/Constellation/escope">escope</a>) is an <a
 * href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript</a>
 * scope analyzer extracted from the <a
 * href="http://github.com/Constellation/esmangle">esmangle project</a/>.
 * <p>
 * <em>escope</em> finds lexical scopes in a source program, i.e. areas of that
 * program where different occurrences of the same identifier refer to the same
 * variable. With each scope the contained variables are collected, and each
 * identifier reference in code is linked to its corresponding variable (if
 * possible).
 * <p>
 * <em>escope</em> works on a syntax tree of the parsed source code which has
 * to adhere to the <a
 * href="https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API">
 * Mozilla Parser API</a>. E.g. <a href="http://esprima.org">esprima</a> is a parser
 * that produces such syntax trees.
 * <p>
 * The main interface is the {@link analyze} function.
 * @module
 */

/*jslint bitwise:true */
/*global exports:true, define:true, require:true*/
(function (factory, global) {
    'use strict';

    function namespace(str, obj) {
        var i, iz, names, name;
        names = str.split('.');
        for (i = 0, iz = names.length; i < iz; ++i) {
            name = names[i];
            if (obj.hasOwnProperty(name)) {
                obj = obj[name];
            } else {
                obj = (obj[name] = {});
            }
        }
        return obj;
    }

    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
    // and plain browser loading,
    if (typeof define === 'function' && define.amd) {
        define('escope', ['exports', 'estraverse'], function (exports, estraverse) {
            factory(exports, global, estraverse);
        });
    } else if (typeof exports !== 'undefined') {
        factory(exports, global, require('estraverse'));
    } else {
        factory(namespace('escope', global), global, global.estraverse);
    }
}(function (exports, global, estraverse) {
    'use strict';

    var Syntax,
        Map,
        currentScope,
        globalScope,
        scopes,
        options;

    Syntax = estraverse.Syntax;

    if (typeof global.Map !== 'undefined') {
        // ES6 Map
        Map = global.Map;
    } else {
        Map = function Map() {
            this.__data = {};
        };

        Map.prototype.get = function MapGet(key) {
            key = '$' + key;
            if (this.__data.hasOwnProperty(key)) {
                return this.__data[key];
            }
            return undefined;
        };

        Map.prototype.has = function MapHas(key) {
            key = '$' + key;
            return this.__data.hasOwnProperty(key);
        };

        Map.prototype.set = function MapSet(key, val) {
            key = '$' + key;
            this.__data[key] = val;
        };

        Map.prototype['delete'] = function MapDelete(key) {
            key = '$' + key;
            return delete this.__data[key];
        };
    }

    function assert(cond, text) {
        if (!cond) {
            throw new Error(text);
        }
    }

    function defaultOptions() {
        return {
            optimistic: false,
            directive: false
        };
    }

    function updateDeeply(target, override) {
        var key, val;

        function isHashObject(target) {
            return typeof target === 'object' && target instanceof Object && !(target instanceof RegExp);
        }

        for (key in override) {
            if (override.hasOwnProperty(key)) {
                val = override[key];
                if (isHashObject(val)) {
                    if (isHashObject(target[key])) {
                        updateDeeply(target[key], val);
                    } else {
                        target[key] = updateDeeply({}, val);
                    }
                } else {
                    target[key] = val;
                }
            }
        }
        return target;
    }

    /**
     * A Reference represents a single occurrence of an identifier in code.
     * @class Reference
     */
    function Reference(ident, scope, flag, writeExpr, maybeImplicitGlobal) {
        /** 
         * Identifier syntax node.
         * @member {esprima#Identifier} Reference#identifier 
         */
        this.identifier = ident;
        /** 
         * Reference to the enclosing Scope.
         * @member {Scope} Reference#from 
         */
        this.from = scope;
        /**
         * Whether the reference comes from a dynamic scope (such as 'eval',
         * 'with', etc.), and may be trapped by dynamic scopes.
         * @member {boolean} Reference#tainted
         */
        this.tainted = false;
        /** 
         * The variable this reference is resolved with.
         * @member {Variable} Reference#resolved 
         */
        this.resolved = null;
        /** 
         * The read-write mode of the reference. (Value is one of {@link
         * Reference.READ}, {@link Reference.RW}, {@link Reference.WRITE}).
         * @member {number} Reference#flag 
         * @private
         */
        this.flag = flag;
        if (this.isWrite()) {
            /** 
             * If reference is writeable, this is the tree being written to it.
             * @member {esprima#Node} Reference#writeExpr 
             */
            this.writeExpr = writeExpr;
        }
        /** 
         * Whether the Reference might refer to a global variable.
         * @member {boolean} Reference#__maybeImplicitGlobal 
         * @private
         */
        this.__maybeImplicitGlobal = maybeImplicitGlobal;
    }

    /** 
     * @constant Reference.READ 
     * @private
     */
    Reference.READ = 0x1;
    /** 
     * @constant Reference.WRITE 
     * @private
     */
    Reference.WRITE = 0x2;
    /** 
     * @constant Reference.RW 
     * @private
     */
    Reference.RW = 0x3;

    /**
     * Whether the reference is static.
     * @method Reference#isStatic
     * @return {boolean}
     */
    Reference.prototype.isStatic = function isStatic() {
        return !this.tainted && this.resolved && this.resolved.scope.isStatic();
    };

    /**
     * Whether the reference is writeable.
     * @method Reference#isWrite
     * @return {boolean}
     */
    Reference.prototype.isWrite = function isWrite() {
        return this.flag & Reference.WRITE;
    };

    /**
     * Whether the reference is readable.
     * @method Reference#isRead
     * @return {boolean}
     */
    Reference.prototype.isRead = function isRead() {
        return this.flag & Reference.READ;
    };

    /**
     * Whether the reference is read-only.
     * @method Reference#isReadOnly
     * @return {boolean}
     */
    Reference.prototype.isReadOnly = function isReadOnly() {
        return this.flag === Reference.READ;
    };

    /**
     * Whether the reference is write-only.
     * @method Reference#isWriteOnly
     * @return {boolean}
     */
    Reference.prototype.isWriteOnly = function isWriteOnly() {
        return this.flag === Reference.WRITE;
    };

    /**
     * Whether the reference is read-write.
     * @method Reference#isReadWrite
     * @return {boolean}
     */
    Reference.prototype.isReadWrite = function isReadWrite() {
        return this.flag === Reference.RW;
    };

    /**
     * A Variable represents a locally scoped identifier. These include arguments to
     * functions.
     * @class Variable
     */
    function Variable(name, scope) {
        /**  
         * The variable name, as given in the source code.
         * @member {String} Variable#name 
         */
        this.name = name;
        /**
         * List of defining occurrences of this variable (like in 'var ...'
         * statements or as parameter), as AST nodes.
         * @member {esprima.Identifier[]} Variable#identifiers
         */
        this.identifiers = [];
        /**
         * List of {@link Reference|references} of this variable (excluding parameter entries)
         * in its defining scope and all nested scopes. For defining
         * occurrences only see {@link Variable#defs}.
         * @member {Reference[]} Variable#references
         */
        this.references = [];

        /**
         * List of defining occurrences of this variable (like in 'var ...'
         * statements or as parameter), as custom objects.
         * @typedef {Object} DefEntry
         * @property {String} DefEntry.type - the type of the occurrence (e.g.
         *      "Parameter", "Variable", ...)
         * @property {esprima.Identifier} DefEntry.name - the identifier AST node of the occurrence
         * @property {esprima.Node} DefEntry.node - the enclosing node of the
         *      identifier
         * @property {esprima.Node} [DefEntry.parent] - the enclosing statement
         *      node of the identifier
         * @member {DefEntry[]} Variable#defs
         */
        this.defs = [];

        this.tainted = false;
        /**
         * Whether this is a stack variable.
         * @member {boolean} Variable#stack
         */
        this.stack = true;
        /** 
         * Reference to the enclosing Scope.
         * @member {Scope} Variable#scope 
         */
        this.scope = scope;
    }

    Variable.CatchClause = 'CatchClause';
    Variable.Parameter = 'Parameter';
    Variable.FunctionName = 'FunctionName';
    Variable.Variable = 'Variable';
    Variable.ImplicitGlobalVariable = 'ImplicitGlobalVariable';

    function isStrictScope(scope, block) {
        var body, i, iz, stmt, expr;

        // When upper scope is exists and strict, inner scope is also strict.
        if (scope.upper && scope.upper.isStrict) {
            return true;
        }

        if (scope.type === 'function') {
            body = block.body;
        } else if (scope.type === 'global') {
            body = block;
        } else {
            return false;
        }

        if (options.directive) {
            for (i = 0, iz = body.body.length; i < iz; ++i) {
                stmt = body.body[i];
                if (stmt.type !== 'DirectiveStatement') {
                    break;
                }
                if (stmt.raw === '"use strict"' || stmt.raw === '\'use strict\'') {
                    return true;
                }
            }
        } else {
            for (i = 0, iz = body.body.length; i < iz; ++i) {
                stmt = body.body[i];
                if (stmt.type !== Syntax.ExpressionStatement) {
                    break;
                }
                expr = stmt.expression;
                if (expr.type !== Syntax.Literal || typeof expr.value !== 'string') {
                    break;
                }
                if (expr.raw != null) {
                    if (expr.raw === '"use strict"' || expr.raw === '\'use strict\'') {
                        return true;
                    }
                } else {
                    if (expr.value === 'use strict') {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * @class Scope
     */
    function Scope(block, opt) {
        var variable, body;

        /**
         * One of 'catch', 'with', 'function' or 'global'.
         * @member {String} Scope#type
         */
        this.type =
            (block.type === Syntax.CatchClause) ? 'catch' :
            (block.type === Syntax.WithStatement) ? 'with' :
            (block.type === Syntax.Program) ? 'global' : 'function';
         /**
         * The scoped {@link Variable}s of this scope, as <code>{ Variable.name
         * : Variable }</code>.
         * @member {Map} Scope#set
         */
        this.set = new Map();
        /**
         * The tainted variables of this scope, as <code>{ Variable.name :
         * boolean }</code>.
         * @member {Map} Scope#taints */
        this.taints = new Map();
        /**
         * Generally, through the lexical scoping of JS you can always know
         * which variable an identifier in the source code refers to. There are
         * a few exceptions to this rule. With 'global' and 'with' scopes you
         * can only decide at runtime which variable a reference refers to.
         * Moreover, if 'eval()' is used in a scope, it might introduce new
         * bindings in this or its prarent scopes.
         * All those scopes are considered 'dynamic'.
         * @member {boolean} Scope#dynamic
         */
        this.dynamic = this.type === 'global' || this.type === 'with';
        /**
         * A reference to the scope-defining syntax node.
         * @member {esprima.Node} Scope#block
         */
        this.block = block;
         /**
         * The {@link Reference|references} that are not resolved with this scope.
         * @member {Reference[]} Scope#through
         */
        this.through = [];
         /**
         * The scoped {@link Variable}s of this scope. In the case of a
         * 'function' scope this includes the automatic argument <em>arguments</em> as
         * its first element, as well as all further formal arguments.
         * @member {Variable[]} Scope#variables
         */
        this.variables = [];
         /**
         * Any variable {@link Reference|reference} found in this scope. This
         * includes occurrences of local variables as well as variables from
         * parent scopes (including the global scope). For local variables
         * this also includes defining occurrences (like in a 'var' statement).
         * In a 'function' scope this does not include the occurrences of the
         * formal parameter in the parameter list.
         * @member {Reference[]} Scope#references
         */
        this.references = [];
         /**
         * List of {@link Reference}s that are left to be resolved (i.e. which
         * need to be linked to the variable they refer to). Used internally to
         * resolve bindings during scope analysis. On a finalized scope
         * analysis, all sopes have <em>left</em> value <strong>null</strong>.
         * @member {Reference[]} Scope#left
         */
        this.left = [];
         /**
         * For 'global' and 'function' scopes, this is a self-reference. For
         * other scope types this is the <em>variableScope</em> value of the
         * parent scope.
         * @member {Scope} Scope#variableScope
         */
        this.variableScope =
            (this.type === 'global' || this.type === 'function') ? this : currentScope.variableScope;
         /**
         * Whether this scope is created by a FunctionExpression.
         * @member {boolean} Scope#functionExpressionScope
         */
        this.functionExpressionScope = false;
         /**
         * Whether this is a scope that contains an 'eval()' invocation.
         * @member {boolean} Scope#directCallToEvalScope
         */
        this.directCallToEvalScope = false;
         /**
         * @member {boolean} Scope#thisFound
         */
        this.thisFound = false;
        body = this.type === 'function' ? block.body : block;
        if (opt.naming) {
            this.__define(block.id, {
                type: Variable.FunctionName,
                name: block.id,
                node: block
            });
            this.functionExpressionScope = true;
        } else {
            if (this.type === 'function') {
                variable = new Variable('arguments', this);
                this.taints.set('arguments', true);
                this.set.set('arguments', variable);
                this.variables.push(variable);
            }

            if (block.type === Syntax.FunctionExpression && block.id) {
                new Scope(block, { naming: true });
            }
        }

         /**
         * Reference to the parent {@link Scope|scope}.
         * @member {Scope} Scope#upper
         */
        this.upper = currentScope;
         /**
         * Whether 'use strict' is in effect in this scope.
         * @member {boolean} Scope#isStrict
         */
        this.isStrict = isStrictScope(this, block);

         /**
         * List of nested {@link Scope}s.
         * @member {Scope[]} Scope#childScopes
         */
        this.childScopes = [];
        if (currentScope) {
            currentScope.childScopes.push(this);
        }


        // RAII
        currentScope = this;
        if (this.type === 'global') {
            globalScope = this;
            globalScope.implicit = {
                set: new Map(),
                variables: []
            };
        }
        scopes.push(this);
    }

    Scope.prototype.__close = function __close() {
        var i, iz, ref, current, node, implicit;

        // Because if this is global environment, upper is null
        if (!this.dynamic || options.optimistic) {
            // static resolve
            for (i = 0, iz = this.left.length; i < iz; ++i) {
                ref = this.left[i];
                if (!this.__resolve(ref)) {
                    this.__delegateToUpperScope(ref);
                }
            }
        } else {
            // this is "global" / "with" / "function with eval" environment
            if (this.type === 'with') {
                for (i = 0, iz = this.left.length; i < iz; ++i) {
                    ref = this.left[i];
                    ref.tainted = true;
                    this.__delegateToUpperScope(ref);
                }
            } else {
                for (i = 0, iz = this.left.length; i < iz; ++i) {
                    // notify all names are through to global
                    ref = this.left[i];
                    current = this;
                    do {
                        current.through.push(ref);
                        current = current.upper;
                    } while (current);
                }
            }
        }

        if (this.type === 'global') {
            implicit = [];
            for (i = 0, iz = this.left.length; i < iz; ++i) {
                ref = this.left[i];
                if (ref.__maybeImplicitGlobal && !this.set.has(ref.identifier.name)) {
                    implicit.push(ref.__maybeImplicitGlobal);
                }
            }

            // create an implicit global variable from assignment expression
            for (i = 0, iz = implicit.length; i < iz; ++i) {
                node = implicit[i];
                this.__defineImplicit(node.left, {
                    type: Variable.ImplicitGlobalVariable,
                    name: node.left,
                    node: node
                });
            }
        }

        this.left = null;
        currentScope = this.upper;
    };

    Scope.prototype.__resolve = function __resolve(ref) {
        var variable, name;
        name = ref.identifier.name;
        if (this.set.has(name)) {
            variable = this.set.get(name);
            variable.references.push(ref);
            variable.stack = variable.stack && ref.from.variableScope === this.variableScope;
            if (ref.tainted) {
                variable.tainted = true;
                this.taints.set(variable.name, true);
            }
            ref.resolved = variable;
            return true;
        }
        return false;
    };

    Scope.prototype.__delegateToUpperScope = function __delegateToUpperScope(ref) {
        if (this.upper) {
            this.upper.left.push(ref);
        }
        this.through.push(ref);
    };

    Scope.prototype.__defineImplicit = function __defineImplicit(node, info) {
        var name, variable;
        if (node && node.type === Syntax.Identifier) {
            name = node.name;
            if (!this.implicit.set.has(name)) {
                variable = new Variable(name, this);
                variable.identifiers.push(node);
                variable.defs.push(info);
                this.implicit.set.set(name, variable);
                this.implicit.variables.push(variable);
            } else {
                variable = this.implicit.set.get(name);
                variable.identifiers.push(node);
                variable.defs.push(info);
            }
        }
    };

    Scope.prototype.__define = function __define(node, info) {
        var name, variable;
        if (node && node.type === Syntax.Identifier) {
            name = node.name;
            if (!this.set.has(name)) {
                variable = new Variable(name, this);
                variable.identifiers.push(node);
                variable.defs.push(info);
                this.set.set(name, variable);
                this.variables.push(variable);
            } else {
                variable = this.set.get(name);
                variable.identifiers.push(node);
                variable.defs.push(info);
            }
        }
    };

    Scope.prototype.__referencing = function __referencing(node, assign, writeExpr, maybeImplicitGlobal) {
        var ref;
        // because Array element may be null
        if (node && node.type === Syntax.Identifier) {
            ref = new Reference(node, this, assign || Reference.READ, writeExpr, maybeImplicitGlobal);
            this.references.push(ref);
            this.left.push(ref);
        }
    };

    Scope.prototype.__detectEval = function __detectEval() {
        var current;
        current = this;
        this.directCallToEvalScope = true;
        do {
            current.dynamic = true;
            current = current.upper;
        } while (current);
    };

    Scope.prototype.__detectThis = function __detectThis() {
        this.thisFound = true;
    };

    Scope.prototype.__isClosed = function isClosed() {
        return this.left === null;
    };

    // API Scope#resolve(name)
    // returns resolved reference
    Scope.prototype.resolve = function resolve(ident) {
        var ref, i, iz;
        assert(this.__isClosed(), 'scope should be closed');
        assert(ident.type === Syntax.Identifier, 'target should be identifier');
        for (i = 0, iz = this.references.length; i < iz; ++i) {
            ref = this.references[i];
            if (ref.identifier === ident) {
                return ref;
            }
        }
        return null;
    };

    // API Scope#isStatic
    // returns this scope is static
    Scope.prototype.isStatic = function isStatic() {
        return !this.dynamic;
    };

    // API Scope#isArgumentsMaterialized
    // return this scope has materialized arguments
    Scope.prototype.isArgumentsMaterialized = function isArgumentsMaterialized() {
        // TODO(Constellation)
        // We can more aggressive on this condition like this.
        //
        // function t() {
        //     // arguments of t is always hidden.
        //     function arguments() {
        //     }
        // }
        var variable;

        // This is not function scope
        if (this.type !== 'function') {
            return true;
        }

        if (!this.isStatic()) {
            return true;
        }

        variable = this.set.get('arguments');
        assert(variable, 'always have arguments variable');
        return variable.tainted || variable.references.length  !== 0;
    };

    // API Scope#isThisMaterialized
    // return this scope has materialized `this` reference
    Scope.prototype.isThisMaterialized = function isThisMaterialized() {
        // This is not function scope
        if (this.type !== 'function') {
            return true;
        }
        if (!this.isStatic()) {
            return true;
        }
        return this.thisFound;
    };

    Scope.mangledName = '__$escope$__';

    Scope.prototype.attach = function attach() {
        if (!this.functionExpressionScope) {
            this.block[Scope.mangledName] = this;
        }
    };

    Scope.prototype.detach = function detach() {
        if (!this.functionExpressionScope) {
            delete this.block[Scope.mangledName];
        }
    };

    Scope.prototype.isUsedName = function (name) {
        if (this.set.has(name)) {
            return true;
        }
        for (var i = 0, iz = this.through.length; i < iz; ++i) {
            if (this.through[i].identifier.name === name) {
                return true;
            }
        }
        return false;
    };

    /**
     * @class ScopeManager
     */
    function ScopeManager(scopes) {
        this.scopes = scopes;
        this.attached = false;
    }

    // Returns appropliate scope for this node
    ScopeManager.prototype.__get = function __get(node) {
        var i, iz, scope;
        if (this.attached) {
            return node[Scope.mangledName] || null;
        }
        if (Scope.isScopeRequired(node)) {
            for (i = 0, iz = this.scopes.length; i < iz; ++i) {
                scope = this.scopes[i];
                if (!scope.functionExpressionScope) {
                    if (scope.block === node) {
                        return scope;
                    }
                }
            }
        }
        return null;
    };

    ScopeManager.prototype.acquire = function acquire(node) {
        return this.__get(node);
    };

    ScopeManager.prototype.release = function release(node) {
        var scope = this.__get(node);
        if (scope) {
            scope = scope.upper;
            while (scope) {
                if (!scope.functionExpressionScope) {
                    return scope;
                }
                scope = scope.upper;
            }
        }
        return null;
    };

    ScopeManager.prototype.attach = function attach() {
        var i, iz;
        for (i = 0, iz = this.scopes.length; i < iz; ++i) {
            this.scopes[i].attach();
        }
        this.attached = true;
    };

    ScopeManager.prototype.detach = function detach() {
        var i, iz;
        for (i = 0, iz = this.scopes.length; i < iz; ++i) {
            this.scopes[i].detach();
        }
        this.attached = false;
    };

    Scope.isScopeRequired = function isScopeRequired(node) {
        return Scope.isVariableScopeRequired(node) || node.type === Syntax.WithStatement || node.type === Syntax.CatchClause;
    };

    Scope.isVariableScopeRequired = function isVariableScopeRequired(node) {
        return node.type === Syntax.Program || node.type === Syntax.FunctionExpression || node.type === Syntax.FunctionDeclaration;
    };

    /**
     * Main interface function. Takes an Esprima syntax tree and returns the
     * analyzed scopes.
     * @function analyze
     * @param {esprima.Tree} tree
     * @param {Object} providedOptions - Options that tailor the scope analysis
     * @param {boolean} [providedOptions.optimistic=false] - the optimistic flag
     * @param {boolean} [providedOptions.directive=false]- the directive flag
     * @param {boolean} [providedOptions.ignoreEval=false]- whether to check 'eval()' calls
     * @return {ScopeManager}
     */
    function analyze(tree, providedOptions) {
        var resultScopes;

        options = updateDeeply(defaultOptions(), providedOptions);
        resultScopes = scopes = [];
        currentScope = null;
        globalScope = null;

        // attach scope and collect / resolve names
        estraverse.traverse(tree, {
            enter: function enter(node) {
                var i, iz, decl;
                if (Scope.isScopeRequired(node)) {
                    new Scope(node, {});
                }

                switch (node.type) {
                case Syntax.AssignmentExpression:
                    if (node.operator === '=') {
                        currentScope.__referencing(node.left, Reference.WRITE, node.right, (!currentScope.isStrict && node.left.name != null) && node);
                    } else {
                        currentScope.__referencing(node.left, Reference.RW, node.right);
                    }
                    currentScope.__referencing(node.right);
                    break;

                case Syntax.ArrayExpression:
                    for (i = 0, iz = node.elements.length; i < iz; ++i) {
                        currentScope.__referencing(node.elements[i]);
                    }
                    break;

                case Syntax.BlockStatement:
                    break;

                case Syntax.BinaryExpression:
                    currentScope.__referencing(node.left);
                    currentScope.__referencing(node.right);
                    break;

                case Syntax.BreakStatement:
                    break;

                case Syntax.CallExpression:
                    currentScope.__referencing(node.callee);
                    for (i = 0, iz = node['arguments'].length; i < iz; ++i) {
                        currentScope.__referencing(node['arguments'][i]);
                    }

                    // check this is direct call to eval
                    if (!options.ignoreEval && node.callee.type === Syntax.Identifier && node.callee.name === 'eval') {
                        currentScope.variableScope.__detectEval();
                    }
                    break;

                case Syntax.CatchClause:
                    currentScope.__define(node.param, {
                        type: Variable.CatchClause,
                        name: node.param,
                        node: node
                    });
                    break;

                case Syntax.ConditionalExpression:
                    currentScope.__referencing(node.test);
                    currentScope.__referencing(node.consequent);
                    currentScope.__referencing(node.alternate);
                    break;

                case Syntax.ContinueStatement:
                    break;

                case Syntax.DirectiveStatement:
                    break;

                case Syntax.DoWhileStatement:
                    currentScope.__referencing(node.test);
                    break;

                case Syntax.DebuggerStatement:
                    break;

                case Syntax.EmptyStatement:
                    break;

                case Syntax.ExpressionStatement:
                    currentScope.__referencing(node.expression);
                    break;

                case Syntax.ForStatement:
                    currentScope.__referencing(node.init);
                    currentScope.__referencing(node.test);
                    currentScope.__referencing(node.update);
                    break;

                case Syntax.ForInStatement:
                    if (node.left.type === Syntax.VariableDeclaration) {
                        currentScope.__referencing(node.left.declarations[0].id, Reference.WRITE, null, false);
                    } else {
                        currentScope.__referencing(node.left, Reference.WRITE, null, (!currentScope.isStrict && node.left.name != null) && node);
                    }
                    currentScope.__referencing(node.right);
                    break;

                case Syntax.FunctionDeclaration:
                    // FunctionDeclaration name is defined in upper scope
                    currentScope.upper.__define(node.id, {
                        type: Variable.FunctionName,
                        name: node.id,
                        node: node
                    });
                    for (i = 0, iz = node.params.length; i < iz; ++i) {
                        currentScope.__define(node.params[i], {
                            type: Variable.Parameter,
                            name: node.params[i],
                            node: node,
                            index: i
                        });
                    }
                    break;

                case Syntax.FunctionExpression:
                    // id is defined in upper scope
                    for (i = 0, iz = node.params.length; i < iz; ++i) {
                        currentScope.__define(node.params[i], {
                            type: Variable.Parameter,
                            name: node.params[i],
                            node: node,
                            index: i
                        });
                    }
                    break;

                case Syntax.Identifier:
                    break;

                case Syntax.IfStatement:
                    currentScope.__referencing(node.test);
                    break;

                case Syntax.Literal:
                    break;

                case Syntax.LabeledStatement:
                    break;

                case Syntax.LogicalExpression:
                    currentScope.__referencing(node.left);
                    currentScope.__referencing(node.right);
                    break;

                case Syntax.MemberExpression:
                    currentScope.__referencing(node.object);
                    if (node.computed) {
                        currentScope.__referencing(node.property);
                    }
                    break;

                case Syntax.NewExpression:
                    currentScope.__referencing(node.callee);
                    for (i = 0, iz = node['arguments'].length; i < iz; ++i) {
                        currentScope.__referencing(node['arguments'][i]);
                    }
                    break;

                case Syntax.ObjectExpression:
                    break;

                case Syntax.Program:
                    break;

                case Syntax.Property:
                    currentScope.__referencing(node.value);
                    break;

                case Syntax.ReturnStatement:
                    currentScope.__referencing(node.argument);
                    break;

                case Syntax.SequenceExpression:
                    for (i = 0, iz = node.expressions.length; i < iz; ++i) {
                        currentScope.__referencing(node.expressions[i]);
                    }
                    break;

                case Syntax.SwitchStatement:
                    currentScope.__referencing(node.discriminant);
                    break;

                case Syntax.SwitchCase:
                    currentScope.__referencing(node.test);
                    break;

                case Syntax.ThisExpression:
                    currentScope.variableScope.__detectThis();
                    break;

                case Syntax.ThrowStatement:
                    currentScope.__referencing(node.argument);
                    break;

                case Syntax.TryStatement:
                    break;

                case Syntax.UnaryExpression:
                    currentScope.__referencing(node.argument);
                    break;

                case Syntax.UpdateExpression:
                    currentScope.__referencing(node.argument, Reference.RW, null);
                    break;

                case Syntax.VariableDeclaration:
                    for (i = 0, iz = node.declarations.length; i < iz; ++i) {
                        decl = node.declarations[i];
                        currentScope.variableScope.__define(decl.id, {
                            type: Variable.Variable,
                            name: decl.id,
                            node: decl,
                            index: i,
                            parent: node
                        });
                        if (decl.init) {
                            // initializer is found
                            currentScope.__referencing(decl.id, Reference.WRITE, decl.init, false);
                            currentScope.__referencing(decl.init);
                        }
                    }
                    break;

                case Syntax.VariableDeclarator:
                    break;

                case Syntax.WhileStatement:
                    currentScope.__referencing(node.test);
                    break;

                case Syntax.WithStatement:
                    // WithStatement object is referenced at upper scope
                    currentScope.upper.__referencing(node.object);
                    break;
                }
            },

            leave: function leave(node) {
                while (currentScope && node === currentScope.block) {
                    currentScope.__close();
                }
            }
        });

        assert(currentScope === null);
        globalScope = null;
        scopes = null;
        options = null;

        return new ScopeManager(resultScopes);
    }

    /** @name module:escope.version */
    exports.version = '1.0.1';
    /** @name module:escope.Reference */
    exports.Reference = Reference;
    /** @name module:escope.Variable */
    exports.Variable = Variable;
    /** @name module:escope.Scope */
    exports.Scope = Scope;
    /** @name module:escope.ScopeManager */
    exports.ScopeManager = ScopeManager;
    /** @name module:escope.analyze */
    exports.analyze = analyze;
}, this));
/* vim: set sw=4 ts=4 et tw=80 : */

},{"estraverse":25}],21:[function(require,module,exports){
/*
  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*jslint bitwise:true plusplus:true */
/*global esprima:true, define:true, exports:true, window: true,
throwError: true, generateStatement: true, peek: true,
parseAssignmentExpression: true, parseBlock: true,
parseClassExpression: true, parseClassDeclaration: true, parseExpression: true,
parseDeclareClass: true, parseDeclareFunction: true,
parseDeclareModule: true, parseDeclareVariable: true,
parseForStatement: true,
parseFunctionDeclaration: true, parseFunctionExpression: true,
parseFunctionSourceElements: true, parseVariableIdentifier: true,
parseImportSpecifier: true, parseInterface: true,
parseLeftHandSideExpression: true, parseParams: true, validateParam: true,
parseSpreadOrAssignmentExpression: true,
parseStatement: true, parseSourceElement: true, parseConciseBody: true,
advanceXJSChild: true, isXJSIdentifierStart: true, isXJSIdentifierPart: true,
scanXJSStringLiteral: true, scanXJSIdentifier: true,
parseXJSAttributeValue: true, parseXJSChild: true, parseXJSElement: true, parseXJSExpressionContainer: true, parseXJSEmptyExpression: true,
parseFunctionTypeParam: true,
parsePrimaryType: true,
parseTypeAlias: true,
parseType: true, parseTypeAnnotatableIdentifier: true, parseTypeAnnotation: true,
parseTypeParameterDeclaration: true,
parseYieldExpression: true, parseAwaitExpression: true
*/

(function (root, factory) {
    'use strict';

    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
    // Rhino, and plain browser loading.

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.esprima = {}));
    }
}(this, function (exports) {
    'use strict';

    var Token,
        TokenName,
        FnExprTokens,
        Syntax,
        PropertyKind,
        Messages,
        Regex,
        SyntaxTreeDelegate,
        XHTMLEntities,
        ClassPropertyType,
        source,
        strict,
        index,
        lineNumber,
        lineStart,
        length,
        delegate,
        lookahead,
        state,
        extra;

    Token = {
        BooleanLiteral: 1,
        EOF: 2,
        Identifier: 3,
        Keyword: 4,
        NullLiteral: 5,
        NumericLiteral: 6,
        Punctuator: 7,
        StringLiteral: 8,
        RegularExpression: 9,
        Template: 10,
        XJSIdentifier: 11,
        XJSText: 12
    };

    TokenName = {};
    TokenName[Token.BooleanLiteral] = 'Boolean';
    TokenName[Token.EOF] = '<end>';
    TokenName[Token.Identifier] = 'Identifier';
    TokenName[Token.Keyword] = 'Keyword';
    TokenName[Token.NullLiteral] = 'Null';
    TokenName[Token.NumericLiteral] = 'Numeric';
    TokenName[Token.Punctuator] = 'Punctuator';
    TokenName[Token.StringLiteral] = 'String';
    TokenName[Token.XJSIdentifier] = 'XJSIdentifier';
    TokenName[Token.XJSText] = 'XJSText';
    TokenName[Token.RegularExpression] = 'RegularExpression';

    // A function following one of those tokens is an expression.
    FnExprTokens = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
                    'return', 'case', 'delete', 'throw', 'void',
                    // assignment operators
                    '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=',
                    '&=', '|=', '^=', ',',
                    // binary/unary operators
                    '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
                    '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
                    '<=', '<', '>', '!=', '!=='];

    Syntax = {
        AnyTypeAnnotation: 'AnyTypeAnnotation',
        ArrayExpression: 'ArrayExpression',
        ArrayPattern: 'ArrayPattern',
        ArrayTypeAnnotation: 'ArrayTypeAnnotation',
        ArrowFunctionExpression: 'ArrowFunctionExpression',
        AssignmentExpression: 'AssignmentExpression',
        BinaryExpression: 'BinaryExpression',
        BlockStatement: 'BlockStatement',
        BooleanTypeAnnotation: 'BooleanTypeAnnotation',
        BreakStatement: 'BreakStatement',
        CallExpression: 'CallExpression',
        CatchClause: 'CatchClause',
        ClassBody: 'ClassBody',
        ClassDeclaration: 'ClassDeclaration',
        ClassExpression: 'ClassExpression',
        ClassImplements: 'ClassImplements',
        ClassProperty: 'ClassProperty',
        ComprehensionBlock: 'ComprehensionBlock',
        ComprehensionExpression: 'ComprehensionExpression',
        ConditionalExpression: 'ConditionalExpression',
        ContinueStatement: 'ContinueStatement',
        DebuggerStatement: 'DebuggerStatement',
        DeclareClass: 'DeclareClass',
        DeclareFunction: 'DeclareFunction',
        DeclareModule: 'DeclareModule',
        DeclareVariable: 'DeclareVariable',
        DoWhileStatement: 'DoWhileStatement',
        EmptyStatement: 'EmptyStatement',
        ExportDeclaration: 'ExportDeclaration',
        ExportBatchSpecifier: 'ExportBatchSpecifier',
        ExportSpecifier: 'ExportSpecifier',
        ExpressionStatement: 'ExpressionStatement',
        ForInStatement: 'ForInStatement',
        ForOfStatement: 'ForOfStatement',
        ForStatement: 'ForStatement',
        FunctionDeclaration: 'FunctionDeclaration',
        FunctionExpression: 'FunctionExpression',
        FunctionTypeAnnotation: 'FunctionTypeAnnotation',
        FunctionTypeParam: 'FunctionTypeParam',
        GenericTypeAnnotation: 'GenericTypeAnnotation',
        Identifier: 'Identifier',
        IfStatement: 'IfStatement',
        ImportDeclaration: 'ImportDeclaration',
        ImportDefaultSpecifier: 'ImportDefaultSpecifier',
        ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
        ImportSpecifier: 'ImportSpecifier',
        InterfaceDeclaration: 'InterfaceDeclaration',
        InterfaceExtends: 'InterfaceExtends',
        IntersectionTypeAnnotation: 'IntersectionTypeAnnotation',
        LabeledStatement: 'LabeledStatement',
        Literal: 'Literal',
        LogicalExpression: 'LogicalExpression',
        MemberExpression: 'MemberExpression',
        MethodDefinition: 'MethodDefinition',
        ModuleSpecifier: 'ModuleSpecifier',
        NewExpression: 'NewExpression',
        NullableTypeAnnotation: 'NullableTypeAnnotation',
        NumberTypeAnnotation: 'NumberTypeAnnotation',
        ObjectExpression: 'ObjectExpression',
        ObjectPattern: 'ObjectPattern',
        ObjectTypeAnnotation: 'ObjectTypeAnnotation',
        ObjectTypeCallProperty: 'ObjectTypeCallProperty',
        ObjectTypeIndexer: 'ObjectTypeIndexer',
        ObjectTypeProperty: 'ObjectTypeProperty',
        Program: 'Program',
        Property: 'Property',
        QualifiedTypeIdentifier: 'QualifiedTypeIdentifier',
        ReturnStatement: 'ReturnStatement',
        SequenceExpression: 'SequenceExpression',
        SpreadElement: 'SpreadElement',
        SpreadProperty: 'SpreadProperty',
        StringLiteralTypeAnnotation: 'StringLiteralTypeAnnotation',
        StringTypeAnnotation: 'StringTypeAnnotation',
        SwitchCase: 'SwitchCase',
        SwitchStatement: 'SwitchStatement',
        TaggedTemplateExpression: 'TaggedTemplateExpression',
        TemplateElement: 'TemplateElement',
        TemplateLiteral: 'TemplateLiteral',
        ThisExpression: 'ThisExpression',
        ThrowStatement: 'ThrowStatement',
        TupleTypeAnnotation: 'TupleTypeAnnotation',
        TryStatement: 'TryStatement',
        TypeAlias: 'TypeAlias',
        TypeAnnotation: 'TypeAnnotation',
        TypeofTypeAnnotation: 'TypeofTypeAnnotation',
        TypeParameterDeclaration: 'TypeParameterDeclaration',
        TypeParameterInstantiation: 'TypeParameterInstantiation',
        UnaryExpression: 'UnaryExpression',
        UnionTypeAnnotation: 'UnionTypeAnnotation',
        UpdateExpression: 'UpdateExpression',
        VariableDeclaration: 'VariableDeclaration',
        VariableDeclarator: 'VariableDeclarator',
        VoidTypeAnnotation: 'VoidTypeAnnotation',
        WhileStatement: 'WhileStatement',
        WithStatement: 'WithStatement',
        XJSIdentifier: 'XJSIdentifier',
        XJSNamespacedName: 'XJSNamespacedName',
        XJSMemberExpression: 'XJSMemberExpression',
        XJSEmptyExpression: 'XJSEmptyExpression',
        XJSExpressionContainer: 'XJSExpressionContainer',
        XJSElement: 'XJSElement',
        XJSClosingElement: 'XJSClosingElement',
        XJSOpeningElement: 'XJSOpeningElement',
        XJSAttribute: 'XJSAttribute',
        XJSSpreadAttribute: 'XJSSpreadAttribute',
        XJSText: 'XJSText',
        YieldExpression: 'YieldExpression',
        AwaitExpression: 'AwaitExpression'
    };

    PropertyKind = {
        Data: 1,
        Get: 2,
        Set: 4
    };

    ClassPropertyType = {
        'static': 'static',
        prototype: 'prototype'
    };

    // Error messages should be identical to V8.
    Messages = {
        UnexpectedToken:  'Unexpected token %0',
        UnexpectedNumber:  'Unexpected number',
        UnexpectedString:  'Unexpected string',
        UnexpectedIdentifier:  'Unexpected identifier',
        UnexpectedReserved:  'Unexpected reserved word',
        UnexpectedTemplate:  'Unexpected quasi %0',
        UnexpectedEOS:  'Unexpected end of input',
        NewlineAfterThrow:  'Illegal newline after throw',
        InvalidRegExp: 'Invalid regular expression',
        UnterminatedRegExp:  'Invalid regular expression: missing /',
        InvalidLHSInAssignment:  'Invalid left-hand side in assignment',
        InvalidLHSInFormalsList:  'Invalid left-hand side in formals list',
        InvalidLHSInForIn:  'Invalid left-hand side in for-in',
        MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
        NoCatchOrFinally:  'Missing catch or finally after try',
        UnknownLabel: 'Undefined label \'%0\'',
        Redeclaration: '%0 \'%1\' has already been declared',
        IllegalContinue: 'Illegal continue statement',
        IllegalBreak: 'Illegal break statement',
        IllegalDuplicateClassProperty: 'Illegal duplicate property in class definition',
        IllegalReturn: 'Illegal return statement',
        IllegalSpread: 'Illegal spread element',
        StrictModeWith:  'Strict mode code may not include a with statement',
        StrictCatchVariable:  'Catch variable may not be eval or arguments in strict mode',
        StrictVarName:  'Variable name may not be eval or arguments in strict mode',
        StrictParamName:  'Parameter name eval or arguments is not allowed in strict mode',
        StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
        ParameterAfterRestParameter: 'Rest parameter must be final parameter of an argument list',
        DefaultRestParameter: 'Rest parameter can not have a default value',
        ElementAfterSpreadElement: 'Spread must be the final element of an element list',
        PropertyAfterSpreadProperty: 'A rest property must be the final property of an object literal',
        ObjectPatternAsRestParameter: 'Invalid rest parameter',
        ObjectPatternAsSpread: 'Invalid spread argument',
        StrictFunctionName:  'Function name may not be eval or arguments in strict mode',
        StrictOctalLiteral:  'Octal literals are not allowed in strict mode.',
        StrictDelete:  'Delete of an unqualified identifier in strict mode.',
        StrictDuplicateProperty:  'Duplicate data property in object literal not allowed in strict mode',
        AccessorDataProperty:  'Object literal may not have data and accessor property with the same name',
        AccessorGetSet:  'Object literal may not have multiple get/set accessors with the same name',
        StrictLHSAssignment:  'Assignment to eval or arguments is not allowed in strict mode',
        StrictLHSPostfix:  'Postfix increment/decrement may not have eval or arguments operand in strict mode',
        StrictLHSPrefix:  'Prefix increment/decrement may not have eval or arguments operand in strict mode',
        StrictReservedWord:  'Use of future reserved word in strict mode',
        MissingFromClause: 'Missing from clause',
        NoAsAfterImportNamespace: 'Missing as after import *',
        InvalidModuleSpecifier: 'Invalid module specifier',
        NoUnintializedConst: 'Const must be initialized',
        ComprehensionRequiresBlock: 'Comprehension must have at least one block',
        ComprehensionError:  'Comprehension Error',
        EachNotAllowed:  'Each is not supported',
        InvalidXJSAttributeValue: 'XJS value should be either an expression or a quoted XJS text',
        ExpectedXJSClosingTag: 'Expected corresponding XJS closing tag for %0',
        AdjacentXJSElements: 'Adjacent XJS elements must be wrapped in an enclosing tag',
        ConfusedAboutFunctionType: 'Unexpected token =>. It looks like ' +
            'you are trying to write a function type, but you ended up ' +
            'writing a grouped type followed by an =>, which is a syntax ' +
            'error. Remember, function type parameters are named so function ' +
            'types look like (name1: type1, name2: type2) => returnType. You ' +
            'probably wrote (type1) => returnType'
    };

    // See also tools/generate-unicode-regex.py.
    Regex = {
        NonAsciiIdentifierStart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]'),
        NonAsciiIdentifierPart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0\u08a2-\u08ac\u08e4-\u08fe\u0900-\u0963\u0966-\u096f\u0971-\u0977\u0979-\u097f\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191c\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1d00-\u1de6\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c\u200d\u203f\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua697\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a\uaa7b\uaa80-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabea\uabec\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]'),
        LeadingZeros: new RegExp('^0+(?!$)')
    };

    // Ensure the condition is true, otherwise throw an error.
    // This is only to have a better contract semantic, i.e. another safety net
    // to catch a logic error. The condition shall be fulfilled in normal case.
    // Do NOT use this to enforce a certain condition on any user input.

    function assert(condition, message) {
        /* istanbul ignore if */
        if (!condition) {
            throw new Error('ASSERT: ' + message);
        }
    }

    function StringMap() {
        this.$data = {};
    }

    StringMap.prototype.get = function (key) {
        key = '$' + key;
        return this.$data[key];
    };

    StringMap.prototype.set = function (key, value) {
        key = '$' + key;
        this.$data[key] = value;
        return this;
    };

    StringMap.prototype.has = function (key) {
        key = '$' + key;
        return Object.prototype.hasOwnProperty.call(this.$data, key);
    };

    StringMap.prototype['delete'] = function (key) {
        key = '$' + key;
        return delete this.$data[key];
    };

    function isDecimalDigit(ch) {
        return (ch >= 48 && ch <= 57);   // 0..9
    }

    function isHexDigit(ch) {
        return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
    }

    function isOctalDigit(ch) {
        return '01234567'.indexOf(ch) >= 0;
    }


    // 7.2 White Space

    function isWhiteSpace(ch) {
        return (ch === 32) ||  // space
            (ch === 9) ||      // tab
            (ch === 0xB) ||
            (ch === 0xC) ||
            (ch === 0xA0) ||
            (ch >= 0x1680 && '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\uFEFF'.indexOf(String.fromCharCode(ch)) > 0);
    }

    // 7.3 Line Terminators

    function isLineTerminator(ch) {
        return (ch === 10) || (ch === 13) || (ch === 0x2028) || (ch === 0x2029);
    }

    // 7.6 Identifier Names and Identifiers

    function isIdentifierStart(ch) {
        return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
            (ch >= 65 && ch <= 90) ||         // A..Z
            (ch >= 97 && ch <= 122) ||        // a..z
            (ch === 92) ||                    // \ (backslash)
            ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch)));
    }

    function isIdentifierPart(ch) {
        return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
            (ch >= 65 && ch <= 90) ||         // A..Z
            (ch >= 97 && ch <= 122) ||        // a..z
            (ch >= 48 && ch <= 57) ||         // 0..9
            (ch === 92) ||                    // \ (backslash)
            ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
    }

    // 7.6.1.2 Future Reserved Words

    function isFutureReservedWord(id) {
        switch (id) {
        case 'class':
        case 'enum':
        case 'export':
        case 'extends':
        case 'import':
        case 'super':
            return true;
        default:
            return false;
        }
    }

    function isStrictModeReservedWord(id) {
        switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'yield':
        case 'let':
            return true;
        default:
            return false;
        }
    }

    function isRestrictedWord(id) {
        return id === 'eval' || id === 'arguments';
    }

    // 7.6.1.1 Keywords

    function isKeyword(id) {
        if (strict && isStrictModeReservedWord(id)) {
            return true;
        }

        // 'const' is specialized as Keyword in V8.
        // 'yield' is only treated as a keyword in strict mode.
        // 'let' is for compatiblity with SpiderMonkey and ES.next.
        // Some others are from future reserved words.

        switch (id.length) {
        case 2:
            return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
            return (id === 'var') || (id === 'for') || (id === 'new') ||
                (id === 'try') || (id === 'let');
        case 4:
            return (id === 'this') || (id === 'else') || (id === 'case') ||
                (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
            return (id === 'while') || (id === 'break') || (id === 'catch') ||
                (id === 'throw') || (id === 'const') ||
                (id === 'class') || (id === 'super');
        case 6:
            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
            return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
            return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
            return (id === 'instanceof');
        default:
            return false;
        }
    }

    // 7.4 Comments

    function skipComment() {
        var ch, blockComment, lineComment;

        blockComment = false;
        lineComment = false;

        while (index < length) {
            ch = source.charCodeAt(index);

            if (lineComment) {
                ++index;
                if (isLineTerminator(ch)) {
                    lineComment = false;
                    if (ch === 13 && source.charCodeAt(index) === 10) {
                        ++index;
                    }
                    ++lineNumber;
                    lineStart = index;
                }
            } else if (blockComment) {
                if (isLineTerminator(ch)) {
                    if (ch === 13) {
                        ++index;
                    }
                    if (ch !== 13 || source.charCodeAt(index) === 10) {
                        ++lineNumber;
                        ++index;
                        lineStart = index;
                        if (index >= length) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    }
                } else {
                    ch = source.charCodeAt(index++);
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                    // Block comment ends with '*/' (char #42, char #47).
                    if (ch === 42) {
                        ch = source.charCodeAt(index);
                        if (ch === 47) {
                            ++index;
                            blockComment = false;
                        }
                    }
                }
            } else if (ch === 47) {
                ch = source.charCodeAt(index + 1);
                // Line comment starts with '//' (char #47, char #47).
                if (ch === 47) {
                    index += 2;
                    lineComment = true;
                } else if (ch === 42) {
                    // Block comment starts with '/*' (char #47, char #42).
                    index += 2;
                    blockComment = true;
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    break;
                }
            } else if (isWhiteSpace(ch)) {
                ++index;
            } else if (isLineTerminator(ch)) {
                ++index;
                if (ch === 13 && source.charCodeAt(index) === 10) {
                    ++index;
                }
                ++lineNumber;
                lineStart = index;
            } else {
                break;
            }
        }
    }

    function scanHexEscape(prefix) {
        var i, len, ch, code = 0;

        len = (prefix === 'u') ? 4 : 2;
        for (i = 0; i < len; ++i) {
            if (index < length && isHexDigit(source[index])) {
                ch = source[index++];
                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
            } else {
                return '';
            }
        }
        return String.fromCharCode(code);
    }

    function scanUnicodeCodePointEscape() {
        var ch, code, cu1, cu2;

        ch = source[index];
        code = 0;

        // At least, one hex digit is required.
        if (ch === '}') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        while (index < length) {
            ch = source[index++];
            if (!isHexDigit(ch)) {
                break;
            }
            code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
        }

        if (code > 0x10FFFF || ch !== '}') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        // UTF-16 Encoding
        if (code <= 0xFFFF) {
            return String.fromCharCode(code);
        }
        cu1 = ((code - 0x10000) >> 10) + 0xD800;
        cu2 = ((code - 0x10000) & 1023) + 0xDC00;
        return String.fromCharCode(cu1, cu2);
    }

    function getEscapedIdentifier() {
        var ch, id;

        ch = source.charCodeAt(index++);
        id = String.fromCharCode(ch);

        // '\u' (char #92, char #117) denotes an escaped character.
        if (ch === 92) {
            if (source.charCodeAt(index) !== 117) {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
            ++index;
            ch = scanHexEscape('u');
            if (!ch || ch === '\\' || !isIdentifierStart(ch.charCodeAt(0))) {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
            id = ch;
        }

        while (index < length) {
            ch = source.charCodeAt(index);
            if (!isIdentifierPart(ch)) {
                break;
            }
            ++index;
            id += String.fromCharCode(ch);

            // '\u' (char #92, char #117) denotes an escaped character.
            if (ch === 92) {
                id = id.substr(0, id.length - 1);
                if (source.charCodeAt(index) !== 117) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
                ++index;
                ch = scanHexEscape('u');
                if (!ch || ch === '\\' || !isIdentifierPart(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
                id += ch;
            }
        }

        return id;
    }

    function getIdentifier() {
        var start, ch;

        start = index++;
        while (index < length) {
            ch = source.charCodeAt(index);
            if (ch === 92) {
                // Blackslash (char #92) marks Unicode escape sequence.
                index = start;
                return getEscapedIdentifier();
            }
            if (isIdentifierPart(ch)) {
                ++index;
            } else {
                break;
            }
        }

        return source.slice(start, index);
    }

    function scanIdentifier() {
        var start, id, type;

        start = index;

        // Backslash (char #92) starts an escaped character.
        id = (source.charCodeAt(index) === 92) ? getEscapedIdentifier() : getIdentifier();

        // There is no keyword or literal with only one character.
        // Thus, it must be an identifier.
        if (id.length === 1) {
            type = Token.Identifier;
        } else if (isKeyword(id)) {
            type = Token.Keyword;
        } else if (id === 'null') {
            type = Token.NullLiteral;
        } else if (id === 'true' || id === 'false') {
            type = Token.BooleanLiteral;
        } else {
            type = Token.Identifier;
        }

        return {
            type: type,
            value: id,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }


    // 7.7 Punctuators

    function scanPunctuator() {
        var start = index,
            code = source.charCodeAt(index),
            code2,
            ch1 = source[index],
            ch2,
            ch3,
            ch4;

        switch (code) {
        // Check for most common single-character punctuators.
        case 40:   // ( open bracket
        case 41:   // ) close bracket
        case 59:   // ; semicolon
        case 44:   // , comma
        case 123:  // { open curly brace
        case 125:  // } close curly brace
        case 91:   // [
        case 93:   // ]
        case 58:   // :
        case 63:   // ?
        case 126:  // ~
            ++index;
            if (extra.tokenize) {
                if (code === 40) {
                    extra.openParenToken = extra.tokens.length;
                } else if (code === 123) {
                    extra.openCurlyToken = extra.tokens.length;
                }
            }
            return {
                type: Token.Punctuator,
                value: String.fromCharCode(code),
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };

        default:
            code2 = source.charCodeAt(index + 1);

            // '=' (char #61) marks an assignment or comparison operator.
            if (code2 === 61) {
                switch (code) {
                case 37:  // %
                case 38:  // &
                case 42:  // *:
                case 43:  // +
                case 45:  // -
                case 47:  // /
                case 60:  // <
                case 62:  // >
                case 94:  // ^
                case 124: // |
                    index += 2;
                    return {
                        type: Token.Punctuator,
                        value: String.fromCharCode(code) + String.fromCharCode(code2),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };

                case 33: // !
                case 61: // =
                    index += 2;

                    // !== and ===
                    if (source.charCodeAt(index) === 61) {
                        ++index;
                    }
                    return {
                        type: Token.Punctuator,
                        value: source.slice(start, index),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                default:
                    break;
                }
            }
            break;
        }

        // Peek more characters.

        ch2 = source[index + 1];
        ch3 = source[index + 2];
        ch4 = source[index + 3];

        // 4-character punctuator: >>>=

        if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
            if (ch4 === '=') {
                index += 4;
                return {
                    type: Token.Punctuator,
                    value: '>>>=',
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }
        }

        // 3-character punctuators: === !== >>> <<= >>=

        if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '>>>',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '<' && ch2 === '<' && ch3 === '=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '<<=',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '>' && ch2 === '>' && ch3 === '=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '>>=',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '.' && ch2 === '.' && ch3 === '.') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: '...',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        // Other 2-character punctuators: ++ -- << >> && ||

        // Don't match these tokens if we're in a type, since they never can
        // occur and can mess up types like Map<string, Array<string>>
        if (ch1 === ch2 && ('+-<>&|'.indexOf(ch1) >= 0) && !state.inType) {
            index += 2;
            return {
                type: Token.Punctuator,
                value: ch1 + ch2,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '=' && ch2 === '>') {
            index += 2;
            return {
                type: Token.Punctuator,
                value: '=>',
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
            ++index;
            return {
                type: Token.Punctuator,
                value: ch1,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        if (ch1 === '.') {
            ++index;
            return {
                type: Token.Punctuator,
                value: ch1,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }

        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }

    // 7.8.3 Numeric Literals

    function scanHexLiteral(start) {
        var number = '';

        while (index < length) {
            if (!isHexDigit(source[index])) {
                break;
            }
            number += source[index++];
        }

        if (number.length === 0) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        if (isIdentifierStart(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseInt('0x' + number, 16),
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanOctalLiteral(prefix, start) {
        var number, octal;

        if (isOctalDigit(prefix)) {
            octal = true;
            number = '0' + source[index++];
        } else {
            octal = false;
            ++index;
            number = '';
        }

        while (index < length) {
            if (!isOctalDigit(source[index])) {
                break;
            }
            number += source[index++];
        }

        if (!octal && number.length === 0) {
            // only 0o or 0O
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseInt(number, 8),
            octal: octal,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanNumericLiteral() {
        var number, start, ch, octal;

        ch = source[index];
        assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'),
            'Numeric literal must start with a decimal digit or a decimal point');

        start = index;
        number = '';
        if (ch !== '.') {
            number = source[index++];
            ch = source[index];

            // Hex number starts with '0x'.
            // Octal number starts with '0'.
            // Octal number in ES6 starts with '0o'.
            // Binary number in ES6 starts with '0b'.
            if (number === '0') {
                if (ch === 'x' || ch === 'X') {
                    ++index;
                    return scanHexLiteral(start);
                }
                if (ch === 'b' || ch === 'B') {
                    ++index;
                    number = '';

                    while (index < length) {
                        ch = source[index];
                        if (ch !== '0' && ch !== '1') {
                            break;
                        }
                        number += source[index++];
                    }

                    if (number.length === 0) {
                        // only 0b or 0B
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }

                    if (index < length) {
                        ch = source.charCodeAt(index);
                        /* istanbul ignore else */
                        if (isIdentifierStart(ch) || isDecimalDigit(ch)) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    }
                    return {
                        type: Token.NumericLiteral,
                        value: parseInt(number, 2),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }
                if (ch === 'o' || ch === 'O' || isOctalDigit(ch)) {
                    return scanOctalLiteral(ch, start);
                }
                // decimal number starts with '0' such as '09' is illegal.
                if (ch && isDecimalDigit(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
            }

            while (isDecimalDigit(source.charCodeAt(index))) {
                number += source[index++];
            }
            ch = source[index];
        }

        if (ch === '.') {
            number += source[index++];
            while (isDecimalDigit(source.charCodeAt(index))) {
                number += source[index++];
            }
            ch = source[index];
        }

        if (ch === 'e' || ch === 'E') {
            number += source[index++];

            ch = source[index];
            if (ch === '+' || ch === '-') {
                number += source[index++];
            }
            if (isDecimalDigit(source.charCodeAt(index))) {
                while (isDecimalDigit(source.charCodeAt(index))) {
                    number += source[index++];
                }
            } else {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
        }

        if (isIdentifierStart(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseFloat(number),
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    // 7.8.4 String Literals

    function scanStringLiteral() {
        var str = '', quote, start, ch, code, unescaped, restore, octal = false;

        quote = source[index];
        assert((quote === '\'' || quote === '"'),
            'String literal must starts with a quote');

        start = index;
        ++index;

        while (index < length) {
            ch = source[index++];

            if (ch === quote) {
                quote = '';
                break;
            } else if (ch === '\\') {
                ch = source[index++];
                if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
                    switch (ch) {
                    case 'n':
                        str += '\n';
                        break;
                    case 'r':
                        str += '\r';
                        break;
                    case 't':
                        str += '\t';
                        break;
                    case 'u':
                    case 'x':
                        if (source[index] === '{') {
                            ++index;
                            str += scanUnicodeCodePointEscape();
                        } else {
                            restore = index;
                            unescaped = scanHexEscape(ch);
                            if (unescaped) {
                                str += unescaped;
                            } else {
                                index = restore;
                                str += ch;
                            }
                        }
                        break;
                    case 'b':
                        str += '\b';
                        break;
                    case 'f':
                        str += '\f';
                        break;
                    case 'v':
                        str += '\x0B';
                        break;

                    default:
                        if (isOctalDigit(ch)) {
                            code = '01234567'.indexOf(ch);

                            // \0 is not octal escape sequence
                            if (code !== 0) {
                                octal = true;
                            }

                            /* istanbul ignore else */
                            if (index < length && isOctalDigit(source[index])) {
                                octal = true;
                                code = code * 8 + '01234567'.indexOf(source[index++]);

                                // 3 digits are only allowed when string starts
                                // with 0, 1, 2, 3
                                if ('0123'.indexOf(ch) >= 0 &&
                                        index < length &&
                                        isOctalDigit(source[index])) {
                                    code = code * 8 + '01234567'.indexOf(source[index++]);
                                }
                            }
                            str += String.fromCharCode(code);
                        } else {
                            str += ch;
                        }
                        break;
                    }
                } else {
                    ++lineNumber;
                    if (ch ===  '\r' && source[index] === '\n') {
                        ++index;
                    }
                    lineStart = index;
                }
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                break;
            } else {
                str += ch;
            }
        }

        if (quote !== '') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.StringLiteral,
            value: str,
            octal: octal,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanTemplate() {
        var cooked = '', ch, start, terminated, tail, restore, unescaped, code, octal;

        terminated = false;
        tail = false;
        start = index;

        ++index;

        while (index < length) {
            ch = source[index++];
            if (ch === '`') {
                tail = true;
                terminated = true;
                break;
            } else if (ch === '$') {
                if (source[index] === '{') {
                    ++index;
                    terminated = true;
                    break;
                }
                cooked += ch;
            } else if (ch === '\\') {
                ch = source[index++];
                if (!isLineTerminator(ch.charCodeAt(0))) {
                    switch (ch) {
                    case 'n':
                        cooked += '\n';
                        break;
                    case 'r':
                        cooked += '\r';
                        break;
                    case 't':
                        cooked += '\t';
                        break;
                    case 'u':
                    case 'x':
                        if (source[index] === '{') {
                            ++index;
                            cooked += scanUnicodeCodePointEscape();
                        } else {
                            restore = index;
                            unescaped = scanHexEscape(ch);
                            if (unescaped) {
                                cooked += unescaped;
                            } else {
                                index = restore;
                                cooked += ch;
                            }
                        }
                        break;
                    case 'b':
                        cooked += '\b';
                        break;
                    case 'f':
                        cooked += '\f';
                        break;
                    case 'v':
                        cooked += '\v';
                        break;

                    default:
                        if (isOctalDigit(ch)) {
                            code = '01234567'.indexOf(ch);

                            // \0 is not octal escape sequence
                            if (code !== 0) {
                                octal = true;
                            }

                            /* istanbul ignore else */
                            if (index < length && isOctalDigit(source[index])) {
                                octal = true;
                                code = code * 8 + '01234567'.indexOf(source[index++]);

                                // 3 digits are only allowed when string starts
                                // with 0, 1, 2, 3
                                if ('0123'.indexOf(ch) >= 0 &&
                                        index < length &&
                                        isOctalDigit(source[index])) {
                                    code = code * 8 + '01234567'.indexOf(source[index++]);
                                }
                            }
                            cooked += String.fromCharCode(code);
                        } else {
                            cooked += ch;
                        }
                        break;
                    }
                } else {
                    ++lineNumber;
                    if (ch ===  '\r' && source[index] === '\n') {
                        ++index;
                    }
                    lineStart = index;
                }
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                ++lineNumber;
                if (ch ===  '\r' && source[index] === '\n') {
                    ++index;
                }
                lineStart = index;
                cooked += '\n';
            } else {
                cooked += ch;
            }
        }

        if (!terminated) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.Template,
            value: {
                cooked: cooked,
                raw: source.slice(start + 1, index - ((tail) ? 1 : 2))
            },
            tail: tail,
            octal: octal,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanTemplateElement(option) {
        var startsWith, template;

        lookahead = null;
        skipComment();

        startsWith = (option.head) ? '`' : '}';

        if (source[index] !== startsWith) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        template = scanTemplate();

        peek();

        return template;
    }

    function scanRegExp() {
        var str, ch, start, pattern, flags, value, classMarker = false, restore, terminated = false, tmp;

        lookahead = null;
        skipComment();

        start = index;
        ch = source[index];
        assert(ch === '/', 'Regular expression literal must start with a slash');
        str = source[index++];

        while (index < length) {
            ch = source[index++];
            str += ch;
            if (classMarker) {
                if (ch === ']') {
                    classMarker = false;
                }
            } else {
                if (ch === '\\') {
                    ch = source[index++];
                    // ECMA-262 7.8.5
                    if (isLineTerminator(ch.charCodeAt(0))) {
                        throwError({}, Messages.UnterminatedRegExp);
                    }
                    str += ch;
                } else if (ch === '/') {
                    terminated = true;
                    break;
                } else if (ch === '[') {
                    classMarker = true;
                } else if (isLineTerminator(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnterminatedRegExp);
                }
            }
        }

        if (!terminated) {
            throwError({}, Messages.UnterminatedRegExp);
        }

        // Exclude leading and trailing slash.
        pattern = str.substr(1, str.length - 2);

        flags = '';
        while (index < length) {
            ch = source[index];
            if (!isIdentifierPart(ch.charCodeAt(0))) {
                break;
            }

            ++index;
            if (ch === '\\' && index < length) {
                ch = source[index];
                if (ch === 'u') {
                    ++index;
                    restore = index;
                    ch = scanHexEscape('u');
                    /* istanbul ignore else */
                    if (ch) {
                        flags += ch;
                        for (str += '\\u'; restore < index; ++restore) {
                            str += source[restore];
                        }
                    } else {
                        index = restore;
                        flags += 'u';
                        str += '\\u';
                    }
                } else {
                    str += '\\';
                }
            } else {
                flags += ch;
                str += ch;
            }
        }

        tmp = pattern;
        if (flags.indexOf('u') >= 0) {
            // Replace each astral symbol and every Unicode code point
            // escape sequence with a single ASCII symbol to avoid throwing on
            // regular expressions that are only valid in combination with the
            // `/u` flag.
            // Note: replacing with the ASCII symbol `x` might cause false
            // negatives in unlikely scenarios. For example, `[\u{61}-b]` is a
            // perfectly valid pattern that is equivalent to `[a-b]`, but it
            // would be replaced by `[x-b]` which throws an error.
            tmp = tmp
                .replace(/\\u\{([0-9a-fA-F]+)\}/g, function ($0, $1) {
                    if (parseInt($1, 16) <= 0x10FFFF) {
                        return 'x';
                    }
                    throwError({}, Messages.InvalidRegExp);
                })
                .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, 'x');
        }

        // First, detect invalid regular expressions.
        try {
            value = new RegExp(tmp);
        } catch (e) {
            throwError({}, Messages.InvalidRegExp);
        }

        // Return a regular expression object for this pattern-flag pair, or
        // `null` in case the current environment doesn't support the flags it
        // uses.
        try {
            value = new RegExp(pattern, flags);
        } catch (exception) {
            value = null;
        }

        peek();

        if (extra.tokenize) {
            return {
                type: Token.RegularExpression,
                value: value,
                regex: {
                    pattern: pattern,
                    flags: flags
                },
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [start, index]
            };
        }
        return {
            literal: str,
            value: value,
            regex: {
                pattern: pattern,
                flags: flags
            },
            range: [start, index]
        };
    }

    function isIdentifierName(token) {
        return token.type === Token.Identifier ||
            token.type === Token.Keyword ||
            token.type === Token.BooleanLiteral ||
            token.type === Token.NullLiteral;
    }

    function advanceSlash() {
        var prevToken,
            checkToken;
        // Using the following algorithm:
        // https://github.com/mozilla/sweet.js/wiki/design
        prevToken = extra.tokens[extra.tokens.length - 1];
        if (!prevToken) {
            // Nothing before that: it cannot be a division.
            return scanRegExp();
        }
        if (prevToken.type === 'Punctuator') {
            if (prevToken.value === ')') {
                checkToken = extra.tokens[extra.openParenToken - 1];
                if (checkToken &&
                        checkToken.type === 'Keyword' &&
                        (checkToken.value === 'if' ||
                         checkToken.value === 'while' ||
                         checkToken.value === 'for' ||
                         checkToken.value === 'with')) {
                    return scanRegExp();
                }
                return scanPunctuator();
            }
            if (prevToken.value === '}') {
                // Dividing a function by anything makes little sense,
                // but we have to check for that.
                if (extra.tokens[extra.openCurlyToken - 3] &&
                        extra.tokens[extra.openCurlyToken - 3].type === 'Keyword') {
                    // Anonymous function.
                    checkToken = extra.tokens[extra.openCurlyToken - 4];
                    if (!checkToken) {
                        return scanPunctuator();
                    }
                } else if (extra.tokens[extra.openCurlyToken - 4] &&
                        extra.tokens[extra.openCurlyToken - 4].type === 'Keyword') {
                    // Named function.
                    checkToken = extra.tokens[extra.openCurlyToken - 5];
                    if (!checkToken) {
                        return scanRegExp();
                    }
                } else {
                    return scanPunctuator();
                }
                // checkToken determines whether the function is
                // a declaration or an expression.
                if (FnExprTokens.indexOf(checkToken.value) >= 0) {
                    // It is an expression.
                    return scanPunctuator();
                }
                // It is a declaration.
                return scanRegExp();
            }
            return scanRegExp();
        }
        if (prevToken.type === 'Keyword') {
            return scanRegExp();
        }
        return scanPunctuator();
    }

    function advance() {
        var ch;

        if (!state.inXJSChild) {
            skipComment();
        }

        if (index >= length) {
            return {
                type: Token.EOF,
                lineNumber: lineNumber,
                lineStart: lineStart,
                range: [index, index]
            };
        }

        if (state.inXJSChild) {
            return advanceXJSChild();
        }

        ch = source.charCodeAt(index);

        // Very common: ( and ) and ;
        if (ch === 40 || ch === 41 || ch === 58) {
            return scanPunctuator();
        }

        // String literal starts with single quote (#39) or double quote (#34).
        if (ch === 39 || ch === 34) {
            if (state.inXJSTag) {
                return scanXJSStringLiteral();
            }
            return scanStringLiteral();
        }

        if (state.inXJSTag && isXJSIdentifierStart(ch)) {
            return scanXJSIdentifier();
        }

        if (ch === 96) {
            return scanTemplate();
        }
        if (isIdentifierStart(ch)) {
            return scanIdentifier();
        }

        // Dot (.) char #46 can also start a floating-point number, hence the need
        // to check the next character.
        if (ch === 46) {
            if (isDecimalDigit(source.charCodeAt(index + 1))) {
                return scanNumericLiteral();
            }
            return scanPunctuator();
        }

        if (isDecimalDigit(ch)) {
            return scanNumericLiteral();
        }

        // Slash (/) char #47 can also start a regex.
        if (extra.tokenize && ch === 47) {
            return advanceSlash();
        }

        return scanPunctuator();
    }

    function lex() {
        var token;

        token = lookahead;
        index = token.range[1];
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;

        lookahead = advance();

        index = token.range[1];
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;

        return token;
    }

    function peek() {
        var pos, line, start;

        pos = index;
        line = lineNumber;
        start = lineStart;
        lookahead = advance();
        index = pos;
        lineNumber = line;
        lineStart = start;
    }

    function lookahead2() {
        var adv, pos, line, start, result;

        // If we are collecting the tokens, don't grab the next one yet.
        /* istanbul ignore next */
        adv = (typeof extra.advance === 'function') ? extra.advance : advance;

        pos = index;
        line = lineNumber;
        start = lineStart;

        // Scan for the next immediate token.
        /* istanbul ignore if */
        if (lookahead === null) {
            lookahead = adv();
        }
        index = lookahead.range[1];
        lineNumber = lookahead.lineNumber;
        lineStart = lookahead.lineStart;

        // Grab the token right after.
        result = adv();
        index = pos;
        lineNumber = line;
        lineStart = start;

        return result;
    }

    function rewind(token) {
        index = token.range[0];
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;
        lookahead = token;
    }

    function markerCreate() {
        if (!extra.loc && !extra.range) {
            return undefined;
        }
        skipComment();
        return {offset: index, line: lineNumber, col: index - lineStart};
    }

    function markerCreatePreserveWhitespace() {
        if (!extra.loc && !extra.range) {
            return undefined;
        }
        return {offset: index, line: lineNumber, col: index - lineStart};
    }

    function processComment(node) {
        var lastChild,
            trailingComments,
            bottomRight = extra.bottomRightStack,
            last = bottomRight[bottomRight.length - 1];

        if (node.type === Syntax.Program) {
            /* istanbul ignore else */
            if (node.body.length > 0) {
                return;
            }
        }

        if (extra.trailingComments.length > 0) {
            if (extra.trailingComments[0].range[0] >= node.range[1]) {
                trailingComments = extra.trailingComments;
                extra.trailingComments = [];
            } else {
                extra.trailingComments.length = 0;
            }
        } else {
            if (last && last.trailingComments && last.trailingComments[0].range[0] >= node.range[1]) {
                trailingComments = last.trailingComments;
                delete last.trailingComments;
            }
        }

        // Eating the stack.
        if (last) {
            while (last && last.range[0] >= node.range[0]) {
                lastChild = last;
                last = bottomRight.pop();
            }
        }

        if (lastChild) {
            if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
                node.leadingComments = lastChild.leadingComments;
                delete lastChild.leadingComments;
            }
        } else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
            node.leadingComments = extra.leadingComments;
            extra.leadingComments = [];
        }

        if (trailingComments) {
            node.trailingComments = trailingComments;
        }

        bottomRight.push(node);
    }

    function markerApply(marker, node) {
        if (extra.range) {
            node.range = [marker.offset, index];
        }
        if (extra.loc) {
            node.loc = {
                start: {
                    line: marker.line,
                    column: marker.col
                },
                end: {
                    line: lineNumber,
                    column: index - lineStart
                }
            };
            node = delegate.postProcess(node);
        }
        if (extra.attachComment) {
            processComment(node);
        }
        return node;
    }

    SyntaxTreeDelegate = {

        name: 'SyntaxTree',

        postProcess: function (node) {
            return node;
        },

        createArrayExpression: function (elements) {
            return {
                type: Syntax.ArrayExpression,
                elements: elements
            };
        },

        createAssignmentExpression: function (operator, left, right) {
            return {
                type: Syntax.AssignmentExpression,
                operator: operator,
                left: left,
                right: right
            };
        },

        createBinaryExpression: function (operator, left, right) {
            var type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression :
                        Syntax.BinaryExpression;
            return {
                type: type,
                operator: operator,
                left: left,
                right: right
            };
        },

        createBlockStatement: function (body) {
            return {
                type: Syntax.BlockStatement,
                body: body
            };
        },

        createBreakStatement: function (label) {
            return {
                type: Syntax.BreakStatement,
                label: label
            };
        },

        createCallExpression: function (callee, args) {
            return {
                type: Syntax.CallExpression,
                callee: callee,
                'arguments': args
            };
        },

        createCatchClause: function (param, body) {
            return {
                type: Syntax.CatchClause,
                param: param,
                body: body
            };
        },

        createConditionalExpression: function (test, consequent, alternate) {
            return {
                type: Syntax.ConditionalExpression,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        },

        createContinueStatement: function (label) {
            return {
                type: Syntax.ContinueStatement,
                label: label
            };
        },

        createDebuggerStatement: function () {
            return {
                type: Syntax.DebuggerStatement
            };
        },

        createDoWhileStatement: function (body, test) {
            return {
                type: Syntax.DoWhileStatement,
                body: body,
                test: test
            };
        },

        createEmptyStatement: function () {
            return {
                type: Syntax.EmptyStatement
            };
        },

        createExpressionStatement: function (expression) {
            return {
                type: Syntax.ExpressionStatement,
                expression: expression
            };
        },

        createForStatement: function (init, test, update, body) {
            return {
                type: Syntax.ForStatement,
                init: init,
                test: test,
                update: update,
                body: body
            };
        },

        createForInStatement: function (left, right, body) {
            return {
                type: Syntax.ForInStatement,
                left: left,
                right: right,
                body: body,
                each: false
            };
        },

        createForOfStatement: function (left, right, body) {
            return {
                type: Syntax.ForOfStatement,
                left: left,
                right: right,
                body: body
            };
        },

        createFunctionDeclaration: function (id, params, defaults, body, rest, generator, expression,
                                             isAsync, returnType, typeParameters) {
            var funDecl = {
                type: Syntax.FunctionDeclaration,
                id: id,
                params: params,
                defaults: defaults,
                body: body,
                rest: rest,
                generator: generator,
                expression: expression,
                returnType: returnType,
                typeParameters: typeParameters
            };

            if (isAsync) {
                funDecl.async = true;
            }

            return funDecl;
        },

        createFunctionExpression: function (id, params, defaults, body, rest, generator, expression,
                                            isAsync, returnType, typeParameters) {
            var funExpr = {
                type: Syntax.FunctionExpression,
                id: id,
                params: params,
                defaults: defaults,
                body: body,
                rest: rest,
                generator: generator,
                expression: expression,
                returnType: returnType,
                typeParameters: typeParameters
            };

            if (isAsync) {
                funExpr.async = true;
            }

            return funExpr;
        },

        createIdentifier: function (name) {
            return {
                type: Syntax.Identifier,
                name: name,
                // Only here to initialize the shape of the object to ensure
                // that the 'typeAnnotation' key is ordered before others that
                // are added later (like 'loc' and 'range'). This just helps
                // keep the shape of Identifier nodes consistent with everything
                // else.
                typeAnnotation: undefined,
                optional: undefined
            };
        },

        createTypeAnnotation: function (typeAnnotation) {
            return {
                type: Syntax.TypeAnnotation,
                typeAnnotation: typeAnnotation
            };
        },

        createFunctionTypeAnnotation: function (params, returnType, rest, typeParameters) {
            return {
                type: Syntax.FunctionTypeAnnotation,
                params: params,
                returnType: returnType,
                rest: rest,
                typeParameters: typeParameters
            };
        },

        createFunctionTypeParam: function (name, typeAnnotation, optional) {
            return {
                type: Syntax.FunctionTypeParam,
                name: name,
                typeAnnotation: typeAnnotation,
                optional: optional
            };
        },

        createNullableTypeAnnotation: function (typeAnnotation) {
            return {
                type: Syntax.NullableTypeAnnotation,
                typeAnnotation: typeAnnotation
            };
        },

        createArrayTypeAnnotation: function (elementType) {
            return {
                type: Syntax.ArrayTypeAnnotation,
                elementType: elementType
            };
        },

        createGenericTypeAnnotation: function (id, typeParameters) {
            return {
                type: Syntax.GenericTypeAnnotation,
                id: id,
                typeParameters: typeParameters
            };
        },

        createQualifiedTypeIdentifier: function (qualification, id) {
            return {
                type: Syntax.QualifiedTypeIdentifier,
                qualification: qualification,
                id: id
            };
        },

        createTypeParameterDeclaration: function (params) {
            return {
                type: Syntax.TypeParameterDeclaration,
                params: params
            };
        },

        createTypeParameterInstantiation: function (params) {
            return {
                type: Syntax.TypeParameterInstantiation,
                params: params
            };
        },

        createAnyTypeAnnotation: function () {
            return {
                type: Syntax.AnyTypeAnnotation
            };
        },

        createBooleanTypeAnnotation: function () {
            return {
                type: Syntax.BooleanTypeAnnotation
            };
        },

        createNumberTypeAnnotation: function () {
            return {
                type: Syntax.NumberTypeAnnotation
            };
        },

        createStringTypeAnnotation: function () {
            return {
                type: Syntax.StringTypeAnnotation
            };
        },

        createStringLiteralTypeAnnotation: function (token) {
            return {
                type: Syntax.StringLiteralTypeAnnotation,
                value: token.value,
                raw: source.slice(token.range[0], token.range[1])
            };
        },

        createVoidTypeAnnotation: function () {
            return {
                type: Syntax.VoidTypeAnnotation
            };
        },

        createTypeofTypeAnnotation: function (argument) {
            return {
                type: Syntax.TypeofTypeAnnotation,
                argument: argument
            };
        },

        createTupleTypeAnnotation: function (types) {
            return {
                type: Syntax.TupleTypeAnnotation,
                types: types
            };
        },

        createObjectTypeAnnotation: function (properties, indexers, callProperties) {
            return {
                type: Syntax.ObjectTypeAnnotation,
                properties: properties,
                indexers: indexers,
                callProperties: callProperties
            };
        },

        createObjectTypeIndexer: function (id, key, value, isStatic) {
            return {
                type: Syntax.ObjectTypeIndexer,
                id: id,
                key: key,
                value: value,
                static: isStatic
            };
        },

        createObjectTypeCallProperty: function (value, isStatic) {
            return {
                type: Syntax.ObjectTypeCallProperty,
                value: value,
                static: isStatic
            };
        },

        createObjectTypeProperty: function (key, value, optional, isStatic) {
            return {
                type: Syntax.ObjectTypeProperty,
                key: key,
                value: value,
                optional: optional,
                static: isStatic
            };
        },

        createUnionTypeAnnotation: function (types) {
            return {
                type: Syntax.UnionTypeAnnotation,
                types: types
            };
        },

        createIntersectionTypeAnnotation: function (types) {
            return {
                type: Syntax.IntersectionTypeAnnotation,
                types: types
            };
        },

        createTypeAlias: function (id, typeParameters, right) {
            return {
                type: Syntax.TypeAlias,
                id: id,
                typeParameters: typeParameters,
                right: right
            };
        },

        createInterface: function (id, typeParameters, body, extended) {
            return {
                type: Syntax.InterfaceDeclaration,
                id: id,
                typeParameters: typeParameters,
                body: body,
                extends: extended
            };
        },

        createInterfaceExtends: function (id, typeParameters) {
            return {
                type: Syntax.InterfaceExtends,
                id: id,
                typeParameters: typeParameters
            };
        },

        createDeclareFunction: function (id) {
            return {
                type: Syntax.DeclareFunction,
                id: id
            };
        },

        createDeclareVariable: function (id) {
            return {
                type: Syntax.DeclareVariable,
                id: id
            };
        },

        createDeclareModule: function (id, body) {
            return {
                type: Syntax.DeclareModule,
                id: id,
                body: body
            };
        },

        createXJSAttribute: function (name, value) {
            return {
                type: Syntax.XJSAttribute,
                name: name,
                value: value || null
            };
        },

        createXJSSpreadAttribute: function (argument) {
            return {
                type: Syntax.XJSSpreadAttribute,
                argument: argument
            };
        },

        createXJSIdentifier: function (name) {
            return {
                type: Syntax.XJSIdentifier,
                name: name
            };
        },

        createXJSNamespacedName: function (namespace, name) {
            return {
                type: Syntax.XJSNamespacedName,
                namespace: namespace,
                name: name
            };
        },

        createXJSMemberExpression: function (object, property) {
            return {
                type: Syntax.XJSMemberExpression,
                object: object,
                property: property
            };
        },

        createXJSElement: function (openingElement, closingElement, children) {
            return {
                type: Syntax.XJSElement,
                openingElement: openingElement,
                closingElement: closingElement,
                children: children
            };
        },

        createXJSEmptyExpression: function () {
            return {
                type: Syntax.XJSEmptyExpression
            };
        },

        createXJSExpressionContainer: function (expression) {
            return {
                type: Syntax.XJSExpressionContainer,
                expression: expression
            };
        },

        createXJSOpeningElement: function (name, attributes, selfClosing) {
            return {
                type: Syntax.XJSOpeningElement,
                name: name,
                selfClosing: selfClosing,
                attributes: attributes
            };
        },

        createXJSClosingElement: function (name) {
            return {
                type: Syntax.XJSClosingElement,
                name: name
            };
        },

        createIfStatement: function (test, consequent, alternate) {
            return {
                type: Syntax.IfStatement,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        },

        createLabeledStatement: function (label, body) {
            return {
                type: Syntax.LabeledStatement,
                label: label,
                body: body
            };
        },

        createLiteral: function (token) {
            var object = {
                type: Syntax.Literal,
                value: token.value,
                raw: source.slice(token.range[0], token.range[1])
            };
            if (token.regex) {
                object.regex = token.regex;
            }
            return object;
        },

        createMemberExpression: function (accessor, object, property) {
            return {
                type: Syntax.MemberExpression,
                computed: accessor === '[',
                object: object,
                property: property
            };
        },

        createNewExpression: function (callee, args) {
            return {
                type: Syntax.NewExpression,
                callee: callee,
                'arguments': args
            };
        },

        createObjectExpression: function (properties) {
            return {
                type: Syntax.ObjectExpression,
                properties: properties
            };
        },

        createPostfixExpression: function (operator, argument) {
            return {
                type: Syntax.UpdateExpression,
                operator: operator,
                argument: argument,
                prefix: false
            };
        },

        createProgram: function (body) {
            return {
                type: Syntax.Program,
                body: body
            };
        },

        createProperty: function (kind, key, value, method, shorthand, computed) {
            return {
                type: Syntax.Property,
                key: key,
                value: value,
                kind: kind,
                method: method,
                shorthand: shorthand,
                computed: computed
            };
        },

        createReturnStatement: function (argument) {
            return {
                type: Syntax.ReturnStatement,
                argument: argument
            };
        },

        createSequenceExpression: function (expressions) {
            return {
                type: Syntax.SequenceExpression,
                expressions: expressions
            };
        },

        createSwitchCase: function (test, consequent) {
            return {
                type: Syntax.SwitchCase,
                test: test,
                consequent: consequent
            };
        },

        createSwitchStatement: function (discriminant, cases) {
            return {
                type: Syntax.SwitchStatement,
                discriminant: discriminant,
                cases: cases
            };
        },

        createThisExpression: function () {
            return {
                type: Syntax.ThisExpression
            };
        },

        createThrowStatement: function (argument) {
            return {
                type: Syntax.ThrowStatement,
                argument: argument
            };
        },

        createTryStatement: function (block, guardedHandlers, handlers, finalizer) {
            return {
                type: Syntax.TryStatement,
                block: block,
                guardedHandlers: guardedHandlers,
                handlers: handlers,
                finalizer: finalizer
            };
        },

        createUnaryExpression: function (operator, argument) {
            if (operator === '++' || operator === '--') {
                return {
                    type: Syntax.UpdateExpression,
                    operator: operator,
                    argument: argument,
                    prefix: true
                };
            }
            return {
                type: Syntax.UnaryExpression,
                operator: operator,
                argument: argument,
                prefix: true
            };
        },

        createVariableDeclaration: function (declarations, kind) {
            return {
                type: Syntax.VariableDeclaration,
                declarations: declarations,
                kind: kind
            };
        },

        createVariableDeclarator: function (id, init) {
            return {
                type: Syntax.VariableDeclarator,
                id: id,
                init: init
            };
        },

        createWhileStatement: function (test, body) {
            return {
                type: Syntax.WhileStatement,
                test: test,
                body: body
            };
        },

        createWithStatement: function (object, body) {
            return {
                type: Syntax.WithStatement,
                object: object,
                body: body
            };
        },

        createTemplateElement: function (value, tail) {
            return {
                type: Syntax.TemplateElement,
                value: value,
                tail: tail
            };
        },

        createTemplateLiteral: function (quasis, expressions) {
            return {
                type: Syntax.TemplateLiteral,
                quasis: quasis,
                expressions: expressions
            };
        },

        createSpreadElement: function (argument) {
            return {
                type: Syntax.SpreadElement,
                argument: argument
            };
        },

        createSpreadProperty: function (argument) {
            return {
                type: Syntax.SpreadProperty,
                argument: argument
            };
        },

        createTaggedTemplateExpression: function (tag, quasi) {
            return {
                type: Syntax.TaggedTemplateExpression,
                tag: tag,
                quasi: quasi
            };
        },

        createArrowFunctionExpression: function (params, defaults, body, rest, expression, isAsync) {
            var arrowExpr = {
                type: Syntax.ArrowFunctionExpression,
                id: null,
                params: params,
                defaults: defaults,
                body: body,
                rest: rest,
                generator: false,
                expression: expression
            };

            if (isAsync) {
                arrowExpr.async = true;
            }

            return arrowExpr;
        },

        createMethodDefinition: function (propertyType, kind, key, value, computed) {
            return {
                type: Syntax.MethodDefinition,
                key: key,
                value: value,
                kind: kind,
                'static': propertyType === ClassPropertyType.static,
                computed: computed
            };
        },

        createClassProperty: function (key, typeAnnotation, computed, isStatic) {
            return {
                type: Syntax.ClassProperty,
                key: key,
                typeAnnotation: typeAnnotation,
                computed: computed,
                static: isStatic
            };
        },

        createClassBody: function (body) {
            return {
                type: Syntax.ClassBody,
                body: body
            };
        },

        createClassImplements: function (id, typeParameters) {
            return {
                type: Syntax.ClassImplements,
                id: id,
                typeParameters: typeParameters
            };
        },

        createClassExpression: function (id, superClass, body, typeParameters, superTypeParameters, implemented) {
            return {
                type: Syntax.ClassExpression,
                id: id,
                superClass: superClass,
                body: body,
                typeParameters: typeParameters,
                superTypeParameters: superTypeParameters,
                implements: implemented
            };
        },

        createClassDeclaration: function (id, superClass, body, typeParameters, superTypeParameters, implemented) {
            return {
                type: Syntax.ClassDeclaration,
                id: id,
                superClass: superClass,
                body: body,
                typeParameters: typeParameters,
                superTypeParameters: superTypeParameters,
                implements: implemented
            };
        },

        createModuleSpecifier: function (token) {
            return {
                type: Syntax.ModuleSpecifier,
                value: token.value,
                raw: source.slice(token.range[0], token.range[1])
            };
        },

        createExportSpecifier: function (id, name) {
            return {
                type: Syntax.ExportSpecifier,
                id: id,
                name: name
            };
        },

        createExportBatchSpecifier: function () {
            return {
                type: Syntax.ExportBatchSpecifier
            };
        },

        createImportDefaultSpecifier: function (id) {
            return {
                type: Syntax.ImportDefaultSpecifier,
                id: id
            };
        },

        createImportNamespaceSpecifier: function (id) {
            return {
                type: Syntax.ImportNamespaceSpecifier,
                id: id
            };
        },

        createExportDeclaration: function (isDefault, declaration, specifiers, source) {
            return {
                type: Syntax.ExportDeclaration,
                'default': !!isDefault,
                declaration: declaration,
                specifiers: specifiers,
                source: source
            };
        },

        createImportSpecifier: function (id, name) {
            return {
                type: Syntax.ImportSpecifier,
                id: id,
                name: name
            };
        },

        createImportDeclaration: function (specifiers, source) {
            return {
                type: Syntax.ImportDeclaration,
                specifiers: specifiers,
                source: source
            };
        },

        createYieldExpression: function (argument, delegate) {
            return {
                type: Syntax.YieldExpression,
                argument: argument,
                delegate: delegate
            };
        },

        createAwaitExpression: function (argument) {
            return {
                type: Syntax.AwaitExpression,
                argument: argument
            };
        },

        createComprehensionExpression: function (filter, blocks, body) {
            return {
                type: Syntax.ComprehensionExpression,
                filter: filter,
                blocks: blocks,
                body: body
            };
        }

    };

    // Return true if there is a line terminator before the next token.

    function peekLineTerminator() {
        var pos, line, start, found;

        pos = index;
        line = lineNumber;
        start = lineStart;
        skipComment();
        found = lineNumber !== line;
        index = pos;
        lineNumber = line;
        lineStart = start;

        return found;
    }

    // Throw an exception

    function throwError(token, messageFormat) {
        var error,
            args = Array.prototype.slice.call(arguments, 2),
            msg = messageFormat.replace(
                /%(\d)/g,
                function (whole, index) {
                    assert(index < args.length, 'Message reference must be in range');
                    return args[index];
                }
            );

        if (typeof token.lineNumber === 'number') {
            error = new Error('Line ' + token.lineNumber + ': ' + msg);
            error.index = token.range[0];
            error.lineNumber = token.lineNumber;
            error.column = token.range[0] - lineStart + 1;
        } else {
            error = new Error('Line ' + lineNumber + ': ' + msg);
            error.index = index;
            error.lineNumber = lineNumber;
            error.column = index - lineStart + 1;
        }

        error.description = msg;
        throw error;
    }

    function throwErrorTolerant() {
        try {
            throwError.apply(null, arguments);
        } catch (e) {
            if (extra.errors) {
                extra.errors.push(e);
            } else {
                throw e;
            }
        }
    }


    // Throw an exception because of the token.

    function throwUnexpected(token) {
        if (token.type === Token.EOF) {
            throwError(token, Messages.UnexpectedEOS);
        }

        if (token.type === Token.NumericLiteral) {
            throwError(token, Messages.UnexpectedNumber);
        }

        if (token.type === Token.StringLiteral || token.type === Token.XJSText) {
            throwError(token, Messages.UnexpectedString);
        }

        if (token.type === Token.Identifier) {
            throwError(token, Messages.UnexpectedIdentifier);
        }

        if (token.type === Token.Keyword) {
            if (isFutureReservedWord(token.value)) {
                throwError(token, Messages.UnexpectedReserved);
            } else if (strict && isStrictModeReservedWord(token.value)) {
                throwErrorTolerant(token, Messages.StrictReservedWord);
                return;
            }
            throwError(token, Messages.UnexpectedToken, token.value);
        }

        if (token.type === Token.Template) {
            throwError(token, Messages.UnexpectedTemplate, token.value.raw);
        }

        // BooleanLiteral, NullLiteral, or Punctuator.
        throwError(token, Messages.UnexpectedToken, token.value);
    }

    // Expect the next token to match the specified punctuator.
    // If not, an exception will be thrown.

    function expect(value) {
        var token = lex();
        if (token.type !== Token.Punctuator || token.value !== value) {
            throwUnexpected(token);
        }
    }

    // Expect the next token to match the specified keyword.
    // If not, an exception will be thrown.

    function expectKeyword(keyword, contextual) {
        var token = lex();
        if (token.type !== (contextual ? Token.Identifier : Token.Keyword) ||
                token.value !== keyword) {
            throwUnexpected(token);
        }
    }

    // Expect the next token to match the specified contextual keyword.
    // If not, an exception will be thrown.

    function expectContextualKeyword(keyword) {
        return expectKeyword(keyword, true);
    }

    // Return true if the next token matches the specified punctuator.

    function match(value) {
        return lookahead.type === Token.Punctuator && lookahead.value === value;
    }

    // Return true if the next token matches the specified keyword

    function matchKeyword(keyword, contextual) {
        var expectedType = contextual ? Token.Identifier : Token.Keyword;
        return lookahead.type === expectedType && lookahead.value === keyword;
    }

    // Return true if the next token matches the specified contextual keyword

    function matchContextualKeyword(keyword) {
        return matchKeyword(keyword, true);
    }

    // Return true if the next token is an assignment operator

    function matchAssign() {
        var op;

        if (lookahead.type !== Token.Punctuator) {
            return false;
        }
        op = lookahead.value;
        return op === '=' ||
            op === '*=' ||
            op === '/=' ||
            op === '%=' ||
            op === '+=' ||
            op === '-=' ||
            op === '<<=' ||
            op === '>>=' ||
            op === '>>>=' ||
            op === '&=' ||
            op === '^=' ||
            op === '|=';
    }

    // Note that 'yield' is treated as a keyword in strict mode, but a
    // contextual keyword (identifier) in non-strict mode, so we need to
    // use matchKeyword('yield', false) and matchKeyword('yield', true)
    // (i.e. matchContextualKeyword) appropriately.
    function matchYield() {
        return state.yieldAllowed && matchKeyword('yield', !strict);
    }

    function matchAsync() {
        var backtrackToken = lookahead, matches = false;

        if (matchContextualKeyword('async')) {
            lex(); // Make sure peekLineTerminator() starts after 'async'.
            matches = !peekLineTerminator();
            rewind(backtrackToken); // Revert the lex().
        }

        return matches;
    }

    function matchAwait() {
        return state.awaitAllowed && matchContextualKeyword('await');
    }

    function consumeSemicolon() {
        var line, oldIndex = index, oldLineNumber = lineNumber,
            oldLineStart = lineStart, oldLookahead = lookahead;

        // Catch the very common case first: immediately a semicolon (char #59).
        if (source.charCodeAt(index) === 59) {
            lex();
            return;
        }

        line = lineNumber;
        skipComment();
        if (lineNumber !== line) {
            index = oldIndex;
            lineNumber = oldLineNumber;
            lineStart = oldLineStart;
            lookahead = oldLookahead;
            return;
        }

        if (match(';')) {
            lex();
            return;
        }

        if (lookahead.type !== Token.EOF && !match('}')) {
            throwUnexpected(lookahead);
        }
    }

    // Return true if provided expression is LeftHandSideExpression

    function isLeftHandSide(expr) {
        return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
    }

    function isAssignableLeftHandSide(expr) {
        return isLeftHandSide(expr) || expr.type === Syntax.ObjectPattern || expr.type === Syntax.ArrayPattern;
    }

    // 11.1.4 Array Initialiser

    function parseArrayInitialiser() {
        var elements = [], blocks = [], filter = null, tmp, possiblecomprehension = true, body,
            marker = markerCreate();

        expect('[');
        while (!match(']')) {
            if (lookahead.value === 'for' &&
                    lookahead.type === Token.Keyword) {
                if (!possiblecomprehension) {
                    throwError({}, Messages.ComprehensionError);
                }
                matchKeyword('for');
                tmp = parseForStatement({ignoreBody: true});
                tmp.of = tmp.type === Syntax.ForOfStatement;
                tmp.type = Syntax.ComprehensionBlock;
                if (tmp.left.kind) { // can't be let or const
                    throwError({}, Messages.ComprehensionError);
                }
                blocks.push(tmp);
            } else if (lookahead.value === 'if' &&
                           lookahead.type === Token.Keyword) {
                if (!possiblecomprehension) {
                    throwError({}, Messages.ComprehensionError);
                }
                expectKeyword('if');
                expect('(');
                filter = parseExpression();
                expect(')');
            } else if (lookahead.value === ',' &&
                           lookahead.type === Token.Punctuator) {
                possiblecomprehension = false; // no longer allowed.
                lex();
                elements.push(null);
            } else {
                tmp = parseSpreadOrAssignmentExpression();
                elements.push(tmp);
                if (tmp && tmp.type === Syntax.SpreadElement) {
                    if (!match(']')) {
                        throwError({}, Messages.ElementAfterSpreadElement);
                    }
                } else if (!(match(']') || matchKeyword('for') || matchKeyword('if'))) {
                    expect(','); // this lexes.
                    possiblecomprehension = false;
                }
            }
        }

        expect(']');

        if (filter && !blocks.length) {
            throwError({}, Messages.ComprehensionRequiresBlock);
        }

        if (blocks.length) {
            if (elements.length !== 1) {
                throwError({}, Messages.ComprehensionError);
            }
            return markerApply(marker, delegate.createComprehensionExpression(filter, blocks, elements[0]));
        }
        return markerApply(marker, delegate.createArrayExpression(elements));
    }

    // 11.1.5 Object Initialiser

    function parsePropertyFunction(options) {
        var previousStrict, previousYieldAllowed, previousAwaitAllowed,
            params, defaults, body, marker = markerCreate();

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = options.generator;
        previousAwaitAllowed = state.awaitAllowed;
        state.awaitAllowed = options.async;
        params = options.params || [];
        defaults = options.defaults || [];

        body = parseConciseBody();
        if (options.name && strict && isRestrictedWord(params[0].name)) {
            throwErrorTolerant(options.name, Messages.StrictParamName);
        }
        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;
        state.awaitAllowed = previousAwaitAllowed;

        return markerApply(marker, delegate.createFunctionExpression(
            null,
            params,
            defaults,
            body,
            options.rest || null,
            options.generator,
            body.type !== Syntax.BlockStatement,
            options.async,
            options.returnType,
            options.typeParameters
        ));
    }


    function parsePropertyMethodFunction(options) {
        var previousStrict, tmp, method;

        previousStrict = strict;
        strict = true;

        tmp = parseParams();

        if (tmp.stricted) {
            throwErrorTolerant(tmp.stricted, tmp.message);
        }

        method = parsePropertyFunction({
            params: tmp.params,
            defaults: tmp.defaults,
            rest: tmp.rest,
            generator: options.generator,
            async: options.async,
            returnType: tmp.returnType,
            typeParameters: options.typeParameters
        });

        strict = previousStrict;

        return method;
    }


    function parseObjectPropertyKey() {
        var marker = markerCreate(),
            token = lex(),
            propertyKey,
            result;

        // Note: This function is called only from parseObjectProperty(), where
        // EOF and Punctuator tokens are already filtered out.

        if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
            if (strict && token.octal) {
                throwErrorTolerant(token, Messages.StrictOctalLiteral);
            }
            return markerApply(marker, delegate.createLiteral(token));
        }

        if (token.type === Token.Punctuator && token.value === '[') {
            // For computed properties we should skip the [ and ], and
            // capture in marker only the assignment expression itself.
            marker = markerCreate();
            propertyKey = parseAssignmentExpression();
            result = markerApply(marker, propertyKey);
            expect(']');
            return result;
        }

        return markerApply(marker, delegate.createIdentifier(token.value));
    }

    function parseObjectProperty() {
        var token, key, id, value, param, expr, computed,
            marker = markerCreate(), returnType, typeParameters;

        token = lookahead;
        computed = (token.value === '[' && token.type === Token.Punctuator);

        if (token.type === Token.Identifier || computed || matchAsync()) {
            id = parseObjectPropertyKey();

            if (match(':')) {
                lex();

                return markerApply(
                    marker,
                    delegate.createProperty(
                        'init',
                        id,
                        parseAssignmentExpression(),
                        false,
                        false,
                        computed
                    )
                );
            }

            if (match('(') || match('<')) {
                if (match('<')) {
                    typeParameters = parseTypeParameterDeclaration();
                }
                return markerApply(
                    marker,
                    delegate.createProperty(
                        'init',
                        id,
                        parsePropertyMethodFunction({
                            generator: false,
                            async: false,
                            typeParameters: typeParameters
                        }),
                        true,
                        false,
                        computed
                    )
                );
            }

            // Property Assignment: Getter and Setter.

            if (token.value === 'get') {
                computed = (lookahead.value === '[');
                key = parseObjectPropertyKey();

                expect('(');
                expect(')');
                if (match(':')) {
                    returnType = parseTypeAnnotation();
                }

                return markerApply(
                    marker,
                    delegate.createProperty(
                        'get',
                        key,
                        parsePropertyFunction({
                            generator: false,
                            async: false,
                            returnType: returnType
                        }),
                        false,
                        false,
                        computed
                    )
                );
            }

            if (token.value === 'set') {
                computed = (lookahead.value === '[');
                key = parseObjectPropertyKey();

                expect('(');
                token = lookahead;
                param = [ parseTypeAnnotatableIdentifier() ];
                expect(')');
                if (match(':')) {
                    returnType = parseTypeAnnotation();
                }

                return markerApply(
                    marker,
                    delegate.createProperty(
                        'set',
                        key,
                        parsePropertyFunction({
                            params: param,
                            generator: false,
                            async: false,
                            name: token,
                            returnType: returnType
                        }),
                        false,
                        false,
                        computed
                    )
                );
            }

            if (token.value === 'async') {
                computed = (lookahead.value === '[');
                key = parseObjectPropertyKey();

                if (match('<')) {
                    typeParameters = parseTypeParameterDeclaration();
                }

                return markerApply(
                    marker,
                    delegate.createProperty(
                        'init',
                        key,
                        parsePropertyMethodFunction({
                            generator: false,
                            async: true,
                            typeParameters: typeParameters
                        }),
                        true,
                        false,
                        computed
                    )
                );
            }

            if (computed) {
                // Computed properties can only be used with full notation.
                throwUnexpected(lookahead);
            }

            return markerApply(
                marker,
                delegate.createProperty('init', id, id, false, true, false)
            );
        }

        if (token.type === Token.EOF || token.type === Token.Punctuator) {
            if (!match('*')) {
                throwUnexpected(token);
            }
            lex();

            computed = (lookahead.type === Token.Punctuator && lookahead.value === '[');

            id = parseObjectPropertyKey();

            if (match('<')) {
                typeParameters = parseTypeParameterDeclaration();
            }

            if (!match('(')) {
                throwUnexpected(lex());
            }

            return markerApply(marker, delegate.createProperty(
                'init',
                id,
                parsePropertyMethodFunction({
                    generator: true,
                    typeParameters: typeParameters
                }),
                true,
                false,
                computed
            ));
        }
        key = parseObjectPropertyKey();
        if (match(':')) {
            lex();
            return markerApply(marker, delegate.createProperty('init', key, parseAssignmentExpression(), false, false, false));
        }
        if (match('(') || match('<')) {
            if (match('<')) {
                typeParameters = parseTypeParameterDeclaration();
            }
            return markerApply(marker, delegate.createProperty(
                'init',
                key,
                parsePropertyMethodFunction({
                    generator: false,
                    typeParameters: typeParameters
                }),
                true,
                false,
                false
            ));
        }
        throwUnexpected(lex());
    }

    function parseObjectSpreadProperty() {
        var marker = markerCreate();
        expect('...');
        return markerApply(marker, delegate.createSpreadProperty(parseAssignmentExpression()));
    }

    function getFieldName(key) {
        var toString = String;
        if (key.type === Syntax.Identifier) {
            return key.name;
        }
        return toString(key.value);
    }

    function parseObjectInitialiser() {
        var properties = [], property, name, kind, storedKind, map = new StringMap(),
            marker = markerCreate(), toString = String;

        expect('{');

        while (!match('}')) {
            if (match('...')) {
                property = parseObjectSpreadProperty();
            } else {
                property = parseObjectProperty();

                if (property.key.type === Syntax.Identifier) {
                    name = property.key.name;
                } else {
                    name = toString(property.key.value);
                }
                kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;

                if (map.has(name)) {
                    storedKind = map.get(name);
                    if (storedKind === PropertyKind.Data) {
                        if (strict && kind === PropertyKind.Data) {
                            throwErrorTolerant({}, Messages.StrictDuplicateProperty);
                        } else if (kind !== PropertyKind.Data) {
                            throwErrorTolerant({}, Messages.AccessorDataProperty);
                        }
                    } else {
                        if (kind === PropertyKind.Data) {
                            throwErrorTolerant({}, Messages.AccessorDataProperty);
                        } else if (storedKind & kind) {
                            throwErrorTolerant({}, Messages.AccessorGetSet);
                        }
                    }
                    map.set(name, storedKind | kind);
                } else {
                    map.set(name, kind);
                }
            }

            properties.push(property);

            if (!match('}')) {
                expect(',');
            }
        }

        expect('}');

        return markerApply(marker, delegate.createObjectExpression(properties));
    }

    function parseTemplateElement(option) {
        var marker = markerCreate(),
            token = scanTemplateElement(option);
        if (strict && token.octal) {
            throwError(token, Messages.StrictOctalLiteral);
        }
        return markerApply(marker, delegate.createTemplateElement({ raw: token.value.raw, cooked: token.value.cooked }, token.tail));
    }

    function parseTemplateLiteral() {
        var quasi, quasis, expressions, marker = markerCreate();

        quasi = parseTemplateElement({ head: true });
        quasis = [ quasi ];
        expressions = [];

        while (!quasi.tail) {
            expressions.push(parseExpression());
            quasi = parseTemplateElement({ head: false });
            quasis.push(quasi);
        }

        return markerApply(marker, delegate.createTemplateLiteral(quasis, expressions));
    }

    // 11.1.6 The Grouping Operator

    function parseGroupExpression() {
        var expr;

        expect('(');

        ++state.parenthesizedCount;

        expr = parseExpression();

        expect(')');

        return expr;
    }

    function matchAsyncFuncExprOrDecl() {
        var token;

        if (matchAsync()) {
            token = lookahead2();
            if (token.type === Token.Keyword && token.value === 'function') {
                return true;
            }
        }

        return false;
    }

    // 11.1 Primary Expressions

    function parsePrimaryExpression() {
        var marker, type, token, expr;

        type = lookahead.type;

        if (type === Token.Identifier) {
            marker = markerCreate();
            return markerApply(marker, delegate.createIdentifier(lex().value));
        }

        if (type === Token.StringLiteral || type === Token.NumericLiteral) {
            if (strict && lookahead.octal) {
                throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
            }
            marker = markerCreate();
            return markerApply(marker, delegate.createLiteral(lex()));
        }

        if (type === Token.Keyword) {
            if (matchKeyword('this')) {
                marker = markerCreate();
                lex();
                return markerApply(marker, delegate.createThisExpression());
            }

            if (matchKeyword('function')) {
                return parseFunctionExpression();
            }

            if (matchKeyword('class')) {
                return parseClassExpression();
            }

            if (matchKeyword('super')) {
                marker = markerCreate();
                lex();
                return markerApply(marker, delegate.createIdentifier('super'));
            }
        }

        if (type === Token.BooleanLiteral) {
            marker = markerCreate();
            token = lex();
            token.value = (token.value === 'true');
            return markerApply(marker, delegate.createLiteral(token));
        }

        if (type === Token.NullLiteral) {
            marker = markerCreate();
            token = lex();
            token.value = null;
            return markerApply(marker, delegate.createLiteral(token));
        }

        if (match('[')) {
            return parseArrayInitialiser();
        }

        if (match('{')) {
            return parseObjectInitialiser();
        }

        if (match('(')) {
            return parseGroupExpression();
        }

        if (match('/') || match('/=')) {
            marker = markerCreate();
            return markerApply(marker, delegate.createLiteral(scanRegExp()));
        }

        if (type === Token.Template) {
            return parseTemplateLiteral();
        }

        if (match('<')) {
            return parseXJSElement();
        }

        throwUnexpected(lex());
    }

    // 11.2 Left-Hand-Side Expressions

    function parseArguments() {
        var args = [], arg;

        expect('(');

        if (!match(')')) {
            while (index < length) {
                arg = parseSpreadOrAssignmentExpression();
                args.push(arg);

                if (match(')')) {
                    break;
                } else if (arg.type === Syntax.SpreadElement) {
                    throwError({}, Messages.ElementAfterSpreadElement);
                }

                expect(',');
            }
        }

        expect(')');

        return args;
    }

    function parseSpreadOrAssignmentExpression() {
        if (match('...')) {
            var marker = markerCreate();
            lex();
            return markerApply(marker, delegate.createSpreadElement(parseAssignmentExpression()));
        }
        return parseAssignmentExpression();
    }

    function parseNonComputedProperty() {
        var marker = markerCreate(),
            token = lex();

        if (!isIdentifierName(token)) {
            throwUnexpected(token);
        }

        return markerApply(marker, delegate.createIdentifier(token.value));
    }

    function parseNonComputedMember() {
        expect('.');

        return parseNonComputedProperty();
    }

    function parseComputedMember() {
        var expr;

        expect('[');

        expr = parseExpression();

        expect(']');

        return expr;
    }

    function parseNewExpression() {
        var callee, args, marker = markerCreate();

        expectKeyword('new');
        callee = parseLeftHandSideExpression();
        args = match('(') ? parseArguments() : [];

        return markerApply(marker, delegate.createNewExpression(callee, args));
    }

    function parseLeftHandSideExpressionAllowCall() {
        var expr, args, marker = markerCreate();

        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

        while (match('.') || match('[') || match('(') || lookahead.type === Token.Template) {
            if (match('(')) {
                args = parseArguments();
                expr = markerApply(marker, delegate.createCallExpression(expr, args));
            } else if (match('[')) {
                expr = markerApply(marker, delegate.createMemberExpression('[', expr, parseComputedMember()));
            } else if (match('.')) {
                expr = markerApply(marker, delegate.createMemberExpression('.', expr, parseNonComputedMember()));
            } else {
                expr = markerApply(marker, delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral()));
            }
        }

        return expr;
    }

    function parseLeftHandSideExpression() {
        var expr, marker = markerCreate();

        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

        while (match('.') || match('[') || lookahead.type === Token.Template) {
            if (match('[')) {
                expr = markerApply(marker, delegate.createMemberExpression('[', expr, parseComputedMember()));
            } else if (match('.')) {
                expr = markerApply(marker, delegate.createMemberExpression('.', expr, parseNonComputedMember()));
            } else {
                expr = markerApply(marker, delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral()));
            }
        }

        return expr;
    }

    // 11.3 Postfix Expressions

    function parsePostfixExpression() {
        var marker = markerCreate(),
            expr = parseLeftHandSideExpressionAllowCall(),
            token;

        if (lookahead.type !== Token.Punctuator) {
            return expr;
        }

        if ((match('++') || match('--')) && !peekLineTerminator()) {
            // 11.3.1, 11.3.2
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwErrorTolerant({}, Messages.StrictLHSPostfix);
            }

            if (!isLeftHandSide(expr)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }

            token = lex();
            expr = markerApply(marker, delegate.createPostfixExpression(token.value, expr));
        }

        return expr;
    }

    // 11.4 Unary Operators

    function parseUnaryExpression() {
        var marker, token, expr;

        if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
            return parsePostfixExpression();
        }

        if (match('++') || match('--')) {
            marker = markerCreate();
            token = lex();
            expr = parseUnaryExpression();
            // 11.4.4, 11.4.5
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwErrorTolerant({}, Messages.StrictLHSPrefix);
            }

            if (!isLeftHandSide(expr)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }

            return markerApply(marker, delegate.createUnaryExpression(token.value, expr));
        }

        if (match('+') || match('-') || match('~') || match('!')) {
            marker = markerCreate();
            token = lex();
            expr = parseUnaryExpression();
            return markerApply(marker, delegate.createUnaryExpression(token.value, expr));
        }

        if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
            marker = markerCreate();
            token = lex();
            expr = parseUnaryExpression();
            expr = markerApply(marker, delegate.createUnaryExpression(token.value, expr));
            if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
                throwErrorTolerant({}, Messages.StrictDelete);
            }
            return expr;
        }

        return parsePostfixExpression();
    }

    function binaryPrecedence(token, allowIn) {
        var prec = 0;

        if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
            return 0;
        }

        switch (token.value) {
        case '||':
            prec = 1;
            break;

        case '&&':
            prec = 2;
            break;

        case '|':
            prec = 3;
            break;

        case '^':
            prec = 4;
            break;

        case '&':
            prec = 5;
            break;

        case '==':
        case '!=':
        case '===':
        case '!==':
            prec = 6;
            break;

        case '<':
        case '>':
        case '<=':
        case '>=':
        case 'instanceof':
            prec = 7;
            break;

        case 'in':
            prec = allowIn ? 7 : 0;
            break;

        case '<<':
        case '>>':
        case '>>>':
            prec = 8;
            break;

        case '+':
        case '-':
            prec = 9;
            break;

        case '*':
        case '/':
        case '%':
            prec = 11;
            break;

        default:
            break;
        }

        return prec;
    }

    // 11.5 Multiplicative Operators
    // 11.6 Additive Operators
    // 11.7 Bitwise Shift Operators
    // 11.8 Relational Operators
    // 11.9 Equality Operators
    // 11.10 Binary Bitwise Operators
    // 11.11 Binary Logical Operators

    function parseBinaryExpression() {
        var expr, token, prec, previousAllowIn, stack, right, operator, left, i,
            marker, markers;

        previousAllowIn = state.allowIn;
        state.allowIn = true;

        marker = markerCreate();
        left = parseUnaryExpression();

        token = lookahead;
        prec = binaryPrecedence(token, previousAllowIn);
        if (prec === 0) {
            return left;
        }
        token.prec = prec;
        lex();

        markers = [marker, markerCreate()];
        right = parseUnaryExpression();

        stack = [left, token, right];

        while ((prec = binaryPrecedence(lookahead, previousAllowIn)) > 0) {

            // Reduce: make a binary expression from the three topmost entries.
            while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
                right = stack.pop();
                operator = stack.pop().value;
                left = stack.pop();
                expr = delegate.createBinaryExpression(operator, left, right);
                markers.pop();
                marker = markers.pop();
                markerApply(marker, expr);
                stack.push(expr);
                markers.push(marker);
            }

            // Shift.
            token = lex();
            token.prec = prec;
            stack.push(token);
            markers.push(markerCreate());
            expr = parseUnaryExpression();
            stack.push(expr);
        }

        state.allowIn = previousAllowIn;

        // Final reduce to clean-up the stack.
        i = stack.length - 1;
        expr = stack[i];
        markers.pop();
        while (i > 1) {
            expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
            i -= 2;
            marker = markers.pop();
            markerApply(marker, expr);
        }

        return expr;
    }


    // 11.12 Conditional Operator

    function parseConditionalExpression() {
        var expr, previousAllowIn, consequent, alternate, marker = markerCreate();
        expr = parseBinaryExpression();

        if (match('?')) {
            lex();
            previousAllowIn = state.allowIn;
            state.allowIn = true;
            consequent = parseAssignmentExpression();
            state.allowIn = previousAllowIn;
            expect(':');
            alternate = parseAssignmentExpression();

            expr = markerApply(marker, delegate.createConditionalExpression(expr, consequent, alternate));
        }

        return expr;
    }

    // 11.13 Assignment Operators

    // 12.14.5 AssignmentPattern

    function reinterpretAsAssignmentBindingPattern(expr) {
        var i, len, property, element;

        if (expr.type === Syntax.ObjectExpression) {
            expr.type = Syntax.ObjectPattern;
            for (i = 0, len = expr.properties.length; i < len; i += 1) {
                property = expr.properties[i];
                if (property.type === Syntax.SpreadProperty) {
                    if (i < len - 1) {
                        throwError({}, Messages.PropertyAfterSpreadProperty);
                    }
                    reinterpretAsAssignmentBindingPattern(property.argument);
                } else {
                    if (property.kind !== 'init') {
                        throwError({}, Messages.InvalidLHSInAssignment);
                    }
                    reinterpretAsAssignmentBindingPattern(property.value);
                }
            }
        } else if (expr.type === Syntax.ArrayExpression) {
            expr.type = Syntax.ArrayPattern;
            for (i = 0, len = expr.elements.length; i < len; i += 1) {
                element = expr.elements[i];
                /* istanbul ignore else */
                if (element) {
                    reinterpretAsAssignmentBindingPattern(element);
                }
            }
        } else if (expr.type === Syntax.Identifier) {
            if (isRestrictedWord(expr.name)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }
        } else if (expr.type === Syntax.SpreadElement) {
            reinterpretAsAssignmentBindingPattern(expr.argument);
            if (expr.argument.type === Syntax.ObjectPattern) {
                throwError({}, Messages.ObjectPatternAsSpread);
            }
        } else {
            /* istanbul ignore else */
            if (expr.type !== Syntax.MemberExpression && expr.type !== Syntax.CallExpression && expr.type !== Syntax.NewExpression) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }
        }
    }

    // 13.2.3 BindingPattern

    function reinterpretAsDestructuredParameter(options, expr) {
        var i, len, property, element;

        if (expr.type === Syntax.ObjectExpression) {
            expr.type = Syntax.ObjectPattern;
            for (i = 0, len = expr.properties.length; i < len; i += 1) {
                property = expr.properties[i];
                if (property.type === Syntax.SpreadProperty) {
                    if (i < len - 1) {
                        throwError({}, Messages.PropertyAfterSpreadProperty);
                    }
                    reinterpretAsDestructuredParameter(options, property.argument);
                } else {
                    if (property.kind !== 'init') {
                        throwError({}, Messages.InvalidLHSInFormalsList);
                    }
                    reinterpretAsDestructuredParameter(options, property.value);
                }
            }
        } else if (expr.type === Syntax.ArrayExpression) {
            expr.type = Syntax.ArrayPattern;
            for (i = 0, len = expr.elements.length; i < len; i += 1) {
                element = expr.elements[i];
                if (element) {
                    reinterpretAsDestructuredParameter(options, element);
                }
            }
        } else if (expr.type === Syntax.Identifier) {
            validateParam(options, expr, expr.name);
        } else if (expr.type === Syntax.SpreadElement) {
            // BindingRestElement only allows BindingIdentifier
            if (expr.argument.type !== Syntax.Identifier) {
                throwError({}, Messages.InvalidLHSInFormalsList);
            }
            validateParam(options, expr.argument, expr.argument.name);
        } else {
            throwError({}, Messages.InvalidLHSInFormalsList);
        }
    }

    function reinterpretAsCoverFormalsList(expressions) {
        var i, len, param, params, defaults, defaultCount, options, rest;

        params = [];
        defaults = [];
        defaultCount = 0;
        rest = null;
        options = {
            paramSet: new StringMap()
        };

        for (i = 0, len = expressions.length; i < len; i += 1) {
            param = expressions[i];
            if (param.type === Syntax.Identifier) {
                params.push(param);
                defaults.push(null);
                validateParam(options, param, param.name);
            } else if (param.type === Syntax.ObjectExpression || param.type === Syntax.ArrayExpression) {
                reinterpretAsDestructuredParameter(options, param);
                params.push(param);
                defaults.push(null);
            } else if (param.type === Syntax.SpreadElement) {
                assert(i === len - 1, 'It is guaranteed that SpreadElement is last element by parseExpression');
                if (param.argument.type !== Syntax.Identifier) {
                    throwError({}, Messages.InvalidLHSInFormalsList);
                }
                reinterpretAsDestructuredParameter(options, param.argument);
                rest = param.argument;
            } else if (param.type === Syntax.AssignmentExpression) {
                params.push(param.left);
                defaults.push(param.right);
                ++defaultCount;
                validateParam(options, param.left, param.left.name);
            } else {
                return null;
            }
        }

        if (options.message === Messages.StrictParamDupe) {
            throwError(
                strict ? options.stricted : options.firstRestricted,
                options.message
            );
        }

        if (defaultCount === 0) {
            defaults = [];
        }

        return {
            params: params,
            defaults: defaults,
            rest: rest,
            stricted: options.stricted,
            firstRestricted: options.firstRestricted,
            message: options.message
        };
    }

    function parseArrowFunctionExpression(options, marker) {
        var previousStrict, previousYieldAllowed, previousAwaitAllowed, body;

        expect('=>');

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = false;
        previousAwaitAllowed = state.awaitAllowed;
        state.awaitAllowed = !!options.async;
        body = parseConciseBody();

        if (strict && options.firstRestricted) {
            throwError(options.firstRestricted, options.message);
        }
        if (strict && options.stricted) {
            throwErrorTolerant(options.stricted, options.message);
        }

        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;
        state.awaitAllowed = previousAwaitAllowed;

        return markerApply(marker, delegate.createArrowFunctionExpression(
            options.params,
            options.defaults,
            body,
            options.rest,
            body.type !== Syntax.BlockStatement,
            !!options.async
        ));
    }

    function parseAssignmentExpression() {
        var marker, expr, token, params, oldParenthesizedCount,
            backtrackToken = lookahead, possiblyAsync = false;

        if (matchYield()) {
            return parseYieldExpression();
        }

        if (matchAwait()) {
            return parseAwaitExpression();
        }

        oldParenthesizedCount = state.parenthesizedCount;

        marker = markerCreate();

        if (matchAsyncFuncExprOrDecl()) {
            return parseFunctionExpression();
        }

        if (matchAsync()) {
            // We can't be completely sure that this 'async' token is
            // actually a contextual keyword modifying a function
            // expression, so we might have to un-lex() it later by
            // calling rewind(backtrackToken).
            possiblyAsync = true;
            lex();
        }

        if (match('(')) {
            token = lookahead2();
            if ((token.type === Token.Punctuator && token.value === ')') || token.value === '...') {
                params = parseParams();
                if (!match('=>')) {
                    throwUnexpected(lex());
                }
                params.async = possiblyAsync;
                return parseArrowFunctionExpression(params, marker);
            }
        }

        token = lookahead;

        // If the 'async' keyword is not followed by a '(' character or an
        // identifier, then it can't be an arrow function modifier, and we
        // should interpret it as a normal identifer.
        if (possiblyAsync && !match('(') && token.type !== Token.Identifier) {
            possiblyAsync = false;
            rewind(backtrackToken);
        }

        expr = parseConditionalExpression();

        if (match('=>') &&
                (state.parenthesizedCount === oldParenthesizedCount ||
                state.parenthesizedCount === (oldParenthesizedCount + 1))) {
            if (expr.type === Syntax.Identifier) {
                params = reinterpretAsCoverFormalsList([ expr ]);
            } else if (expr.type === Syntax.SequenceExpression) {
                params = reinterpretAsCoverFormalsList(expr.expressions);
            }
            if (params) {
                params.async = possiblyAsync;
                return parseArrowFunctionExpression(params, marker);
            }
        }

        // If we haven't returned by now, then the 'async' keyword was not
        // a function modifier, and we should rewind and interpret it as a
        // normal identifier.
        if (possiblyAsync) {
            possiblyAsync = false;
            rewind(backtrackToken);
            expr = parseConditionalExpression();
        }

        if (matchAssign()) {
            // 11.13.1
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwErrorTolerant(token, Messages.StrictLHSAssignment);
            }

            // ES.next draf 11.13 Runtime Semantics step 1
            if (match('=') && (expr.type === Syntax.ObjectExpression || expr.type === Syntax.ArrayExpression)) {
                reinterpretAsAssignmentBindingPattern(expr);
            } else if (!isLeftHandSide(expr)) {
                throwError({}, Messages.InvalidLHSInAssignment);
            }

            expr = markerApply(marker, delegate.createAssignmentExpression(lex().value, expr, parseAssignmentExpression()));
        }

        return expr;
    }

    // 11.14 Comma Operator

    function parseExpression() {
        var marker, expr, expressions, sequence, coverFormalsList, spreadFound, oldParenthesizedCount;

        oldParenthesizedCount = state.parenthesizedCount;

        marker = markerCreate();
        expr = parseAssignmentExpression();
        expressions = [ expr ];

        if (match(',')) {
            while (index < length) {
                if (!match(',')) {
                    break;
                }

                lex();
                expr = parseSpreadOrAssignmentExpression();
                expressions.push(expr);

                if (expr.type === Syntax.SpreadElement) {
                    spreadFound = true;
                    if (!match(')')) {
                        throwError({}, Messages.ElementAfterSpreadElement);
                    }
                    break;
                }
            }

            sequence = markerApply(marker, delegate.createSequenceExpression(expressions));
        }

        if (match('=>')) {
            // Do not allow nested parentheses on the LHS of the =>.
            if (state.parenthesizedCount === oldParenthesizedCount || state.parenthesizedCount === (oldParenthesizedCount + 1)) {
                expr = expr.type === Syntax.SequenceExpression ? expr.expressions : expressions;
                coverFormalsList = reinterpretAsCoverFormalsList(expr);
                if (coverFormalsList) {
                    return parseArrowFunctionExpression(coverFormalsList, marker);
                }
            }
            throwUnexpected(lex());
        }

        if (spreadFound && lookahead2().value !== '=>') {
            throwError({}, Messages.IllegalSpread);
        }

        return sequence || expr;
    }

    // 12.1 Block

    function parseStatementList() {
        var list = [],
            statement;

        while (index < length) {
            if (match('}')) {
                break;
            }
            statement = parseSourceElement();
            if (typeof statement === 'undefined') {
                break;
            }
            list.push(statement);
        }

        return list;
    }

    function parseBlock() {
        var block, marker = markerCreate();

        expect('{');

        block = parseStatementList();

        expect('}');

        return markerApply(marker, delegate.createBlockStatement(block));
    }

    // 12.2 Variable Statement

    function parseTypeParameterDeclaration() {
        var marker = markerCreate(), paramTypes = [];

        expect('<');
        while (!match('>')) {
            paramTypes.push(parseVariableIdentifier());
            if (!match('>')) {
                expect(',');
            }
        }
        expect('>');

        return markerApply(marker, delegate.createTypeParameterDeclaration(
            paramTypes
        ));
    }

    function parseTypeParameterInstantiation() {
        var marker = markerCreate(), oldInType = state.inType, paramTypes = [];

        state.inType = true;

        expect('<');
        while (!match('>')) {
            paramTypes.push(parseType());
            if (!match('>')) {
                expect(',');
            }
        }
        expect('>');

        state.inType = oldInType;

        return markerApply(marker, delegate.createTypeParameterInstantiation(
            paramTypes
        ));
    }

    function parseObjectTypeIndexer(marker, isStatic) {
        var id, key, value;

        expect('[');
        id = parseObjectPropertyKey();
        expect(':');
        key = parseType();
        expect(']');
        expect(':');
        value = parseType();

        return markerApply(marker, delegate.createObjectTypeIndexer(
            id,
            key,
            value,
            isStatic
        ));
    }

    function parseObjectTypeMethodish(marker) {
        var params = [], rest = null, returnType, typeParameters = null;
        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        expect('(');
        while (lookahead.type === Token.Identifier) {
            params.push(parseFunctionTypeParam());
            if (!match(')')) {
                expect(',');
            }
        }

        if (match('...')) {
            lex();
            rest = parseFunctionTypeParam();
        }
        expect(')');
        expect(':');
        returnType = parseType();

        return markerApply(marker, delegate.createFunctionTypeAnnotation(
            params,
            returnType,
            rest,
            typeParameters
        ));
    }

    function parseObjectTypeMethod(marker, isStatic, key) {
        var optional = false, value;
        value = parseObjectTypeMethodish(marker);

        return markerApply(marker, delegate.createObjectTypeProperty(
            key,
            value,
            optional,
            isStatic
        ));
    }

    function parseObjectTypeCallProperty(marker, isStatic) {
        var valueMarker = markerCreate();
        return markerApply(marker, delegate.createObjectTypeCallProperty(
            parseObjectTypeMethodish(valueMarker),
            isStatic
        ));
    }

    function parseObjectType(allowStatic) {
        var callProperties = [], indexers = [], marker, optional = false,
            properties = [], property, propertyKey, propertyTypeAnnotation,
            token, isStatic;

        expect('{');

        while (!match('}')) {
            marker = markerCreate();
            if (allowStatic && matchContextualKeyword('static')) {
                token = lex();
                isStatic = true;
            }

            if (match('[')) {
                indexers.push(parseObjectTypeIndexer(marker, isStatic));
            } else if (match('(') || match('<')) {
                callProperties.push(parseObjectTypeCallProperty(marker, allowStatic));
            } else {
                if (isStatic && match(':')) {
                    propertyKey = markerApply(marker, delegate.createIdentifier(token));
                    throwErrorTolerant(token, Messages.StrictReservedWord);
                } else {
                    propertyKey = parseObjectPropertyKey();
                }
                if (match('<') || match('(')) {
                    // This is a method property
                    properties.push(parseObjectTypeMethod(marker, isStatic, propertyKey));
                } else {
                    if (match('?')) {
                        lex();
                        optional = true;
                    }
                    expect(':');
                    propertyTypeAnnotation = parseType();
                    properties.push(markerApply(marker, delegate.createObjectTypeProperty(
                        propertyKey,
                        propertyTypeAnnotation,
                        optional,
                        isStatic
                    )));
                }
            }

            if (match(';')) {
                lex();
            } else if (!match('}')) {
                throwUnexpected(lookahead);
            }
        }

        expect('}');

        return delegate.createObjectTypeAnnotation(
            properties,
            indexers,
            callProperties
        );
    }

    function parseGenericType() {
        var marker = markerCreate(), returnType = null,
            typeParameters = null, typeIdentifier,
            typeIdentifierMarker = markerCreate;

        typeIdentifier = parseVariableIdentifier();

        while (match('.')) {
            expect('.');
            typeIdentifier = markerApply(marker, delegate.createQualifiedTypeIdentifier(
                typeIdentifier,
                parseVariableIdentifier()
            ));
        }

        if (match('<')) {
            typeParameters = parseTypeParameterInstantiation();
        }

        return markerApply(marker, delegate.createGenericTypeAnnotation(
            typeIdentifier,
            typeParameters
        ));
    }

    function parseVoidType() {
        var marker = markerCreate();
        expectKeyword('void');
        return markerApply(marker, delegate.createVoidTypeAnnotation());
    }

    function parseTypeofType() {
        var argument, marker = markerCreate();
        expectKeyword('typeof');
        argument = parsePrimaryType();
        return markerApply(marker, delegate.createTypeofTypeAnnotation(
            argument
        ));
    }

    function parseTupleType() {
        var marker = markerCreate(), types = [];
        expect('[');
        // We allow trailing commas
        while (index < length && !match(']')) {
            types.push(parseType());
            if (match(']')) {
                break;
            }
            expect(',');
        }
        expect(']');
        return markerApply(marker, delegate.createTupleTypeAnnotation(
            types
        ));
    }

    function parseFunctionTypeParam() {
        var marker = markerCreate(), name, optional = false, typeAnnotation;
        name = parseVariableIdentifier();
        if (match('?')) {
            lex();
            optional = true;
        }
        expect(':');
        typeAnnotation = parseType();
        return markerApply(marker, delegate.createFunctionTypeParam(
            name,
            typeAnnotation,
            optional
        ));
    }

    function parseFunctionTypeParams() {
        var ret = { params: [], rest: null };
        while (lookahead.type === Token.Identifier) {
            ret.params.push(parseFunctionTypeParam());
            if (!match(')')) {
                expect(',');
            }
        }

        if (match('...')) {
            lex();
            ret.rest = parseFunctionTypeParam();
        }
        return ret;
    }

    // The parsing of types roughly parallels the parsing of expressions, and
    // primary types are kind of like primary expressions...they're the
    // primitives with which other types are constructed.
    function parsePrimaryType() {
        var typeIdentifier = null, params = null, returnType = null,
            marker = markerCreate(), rest = null, tmp,
            typeParameters, token, type, isGroupedType = false;

        switch (lookahead.type) {
        case Token.Identifier:
            switch (lookahead.value) {
            case 'any':
                lex();
                return markerApply(marker, delegate.createAnyTypeAnnotation());
            case 'bool':  // fallthrough
            case 'boolean':
                lex();
                return markerApply(marker, delegate.createBooleanTypeAnnotation());
            case 'number':
                lex();
                return markerApply(marker, delegate.createNumberTypeAnnotation());
            case 'string':
                lex();
                return markerApply(marker, delegate.createStringTypeAnnotation());
            }
            return markerApply(marker, parseGenericType());
        case Token.Punctuator:
            switch (lookahead.value) {
            case '{':
                return markerApply(marker, parseObjectType());
            case '[':
                return parseTupleType();
            case '<':
                typeParameters = parseTypeParameterDeclaration();
                expect('(');
                tmp = parseFunctionTypeParams();
                params = tmp.params;
                rest = tmp.rest;
                expect(')');

                expect('=>');

                returnType = parseType();

                return markerApply(marker, delegate.createFunctionTypeAnnotation(
                    params,
                    returnType,
                    rest,
                    typeParameters
                ));
            case '(':
                lex();
                // Check to see if this is actually a grouped type
                if (!match(')') && !match('...')) {
                    if (lookahead.type === Token.Identifier) {
                        token = lookahead2();
                        isGroupedType = token.value !== '?' && token.value !== ':';
                    } else {
                        isGroupedType = true;
                    }
                }

                if (isGroupedType) {
                    type = parseType();
                    expect(')');

                    // If we see a => next then someone was probably confused about
                    // function types, so we can provide a better error message
                    if (match('=>')) {
                        throwError({}, Messages.ConfusedAboutFunctionType);
                    }

                    return type;
                }

                tmp = parseFunctionTypeParams();
                params = tmp.params;
                rest = tmp.rest;

                expect(')');

                expect('=>');

                returnType = parseType();

                return markerApply(marker, delegate.createFunctionTypeAnnotation(
                    params,
                    returnType,
                    rest,
                    null /* typeParameters */
                ));
            }
            break;
        case Token.Keyword:
            switch (lookahead.value) {
            case 'void':
                return markerApply(marker, parseVoidType());
            case 'typeof':
                return markerApply(marker, parseTypeofType());
            }
            break;
        case Token.StringLiteral:
            token = lex();
            if (token.octal) {
                throwError(token, Messages.StrictOctalLiteral);
            }
            return markerApply(marker, delegate.createStringLiteralTypeAnnotation(
                token
            ));
        }

        throwUnexpected(lookahead);
    }

    function parsePostfixType() {
        var marker = markerCreate(), t = parsePrimaryType();
        if (match('[')) {
            expect('[');
            expect(']');
            return markerApply(marker, delegate.createArrayTypeAnnotation(t));
        }
        return t;
    }

    function parsePrefixType() {
        var marker = markerCreate();
        if (match('?')) {
            lex();
            return markerApply(marker, delegate.createNullableTypeAnnotation(
                parsePrefixType()
            ));
        }
        return parsePostfixType();
    }


    function parseIntersectionType() {
        var marker = markerCreate(), type, types;
        type = parsePrefixType();
        types = [type];
        while (match('&')) {
            lex();
            types.push(parsePrefixType());
        }

        return types.length === 1 ?
                type :
                markerApply(marker, delegate.createIntersectionTypeAnnotation(
                    types
                ));
    }

    function parseUnionType() {
        var marker = markerCreate(), type, types;
        type = parseIntersectionType();
        types = [type];
        while (match('|')) {
            lex();
            types.push(parseIntersectionType());
        }
        return types.length === 1 ?
                type :
                markerApply(marker, delegate.createUnionTypeAnnotation(
                    types
                ));
    }

    function parseType() {
        var oldInType = state.inType, type;
        state.inType = true;

        type = parseUnionType();

        state.inType = oldInType;
        return type;
    }

    function parseTypeAnnotation() {
        var marker = markerCreate(), type;

        expect(':');
        type = parseType();

        return markerApply(marker, delegate.createTypeAnnotation(type));
    }

    function parseVariableIdentifier() {
        var marker = markerCreate(),
            token = lex();

        if (token.type !== Token.Identifier) {
            throwUnexpected(token);
        }

        return markerApply(marker, delegate.createIdentifier(token.value));
    }

    function parseTypeAnnotatableIdentifier(requireTypeAnnotation, canBeOptionalParam) {
        var marker = markerCreate(),
            ident = parseVariableIdentifier(),
            isOptionalParam = false;

        if (canBeOptionalParam && match('?')) {
            expect('?');
            isOptionalParam = true;
        }

        if (requireTypeAnnotation || match(':')) {
            ident.typeAnnotation = parseTypeAnnotation();
            ident = markerApply(marker, ident);
        }

        if (isOptionalParam) {
            ident.optional = true;
            ident = markerApply(marker, ident);
        }

        return ident;
    }

    function parseVariableDeclaration(kind) {
        var id,
            marker = markerCreate(),
            init = null,
            typeAnnotationMarker = markerCreate();
        if (match('{')) {
            id = parseObjectInitialiser();
            reinterpretAsAssignmentBindingPattern(id);
            if (match(':')) {
                id.typeAnnotation = parseTypeAnnotation();
                markerApply(typeAnnotationMarker, id);
            }
        } else if (match('[')) {
            id = parseArrayInitialiser();
            reinterpretAsAssignmentBindingPattern(id);
            if (match(':')) {
                id.typeAnnotation = parseTypeAnnotation();
                markerApply(typeAnnotationMarker, id);
            }
        } else {
            /* istanbul ignore next */
            id = state.allowKeyword ? parseNonComputedProperty() : parseTypeAnnotatableIdentifier();
            // 12.2.1
            if (strict && isRestrictedWord(id.name)) {
                throwErrorTolerant({}, Messages.StrictVarName);
            }
        }

        if (kind === 'const') {
            if (!match('=')) {
                throwError({}, Messages.NoUnintializedConst);
            }
            expect('=');
            init = parseAssignmentExpression();
        } else if (match('=')) {
            lex();
            init = parseAssignmentExpression();
        }

        return markerApply(marker, delegate.createVariableDeclarator(id, init));
    }

    function parseVariableDeclarationList(kind) {
        var list = [];

        do {
            list.push(parseVariableDeclaration(kind));
            if (!match(',')) {
                break;
            }
            lex();
        } while (index < length);

        return list;
    }

    function parseVariableStatement() {
        var declarations, marker = markerCreate();

        expectKeyword('var');

        declarations = parseVariableDeclarationList();

        consumeSemicolon();

        return markerApply(marker, delegate.createVariableDeclaration(declarations, 'var'));
    }

    // kind may be `const` or `let`
    // Both are experimental and not in the specification yet.
    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
    function parseConstLetDeclaration(kind) {
        var declarations, marker = markerCreate();

        expectKeyword(kind);

        declarations = parseVariableDeclarationList(kind);

        consumeSemicolon();

        return markerApply(marker, delegate.createVariableDeclaration(declarations, kind));
    }

    // people.mozilla.org/~jorendorff/es6-draft.html

    function parseModuleSpecifier() {
        var marker = markerCreate(),
            specifier;

        if (lookahead.type !== Token.StringLiteral) {
            throwError({}, Messages.InvalidModuleSpecifier);
        }
        specifier = delegate.createModuleSpecifier(lookahead);
        lex();
        return markerApply(marker, specifier);
    }

    function parseExportBatchSpecifier() {
        var marker = markerCreate();
        expect('*');
        return markerApply(marker, delegate.createExportBatchSpecifier());
    }

    function parseExportSpecifier() {
        var id, name = null, marker = markerCreate(), from;
        if (matchKeyword('default')) {
            lex();
            id = markerApply(marker, delegate.createIdentifier('default'));
            // export {default} from "something";
        } else {
            id = parseVariableIdentifier();
        }
        if (matchContextualKeyword('as')) {
            lex();
            name = parseNonComputedProperty();
        }

        return markerApply(marker, delegate.createExportSpecifier(id, name));
    }

    function parseExportDeclaration() {
        var backtrackToken, id, previousAllowKeyword, declaration = null,
            isExportFromIdentifier,
            src = null, specifiers = [],
            marker = markerCreate();

        expectKeyword('export');

        if (matchKeyword('default')) {
            // covers:
            // export default ...
            lex();
            if (matchKeyword('function') || matchKeyword('class')) {
                backtrackToken = lookahead;
                lex();
                if (isIdentifierName(lookahead)) {
                    // covers:
                    // export default function foo () {}
                    // export default class foo {}
                    id = parseNonComputedProperty();
                    rewind(backtrackToken);
                    return markerApply(marker, delegate.createExportDeclaration(true, parseSourceElement(), [id], null));
                }
                // covers:
                // export default function () {}
                // export default class {}
                rewind(backtrackToken);
                switch (lookahead.value) {
                case 'class':
                    return markerApply(marker, delegate.createExportDeclaration(true, parseClassExpression(), [], null));
                case 'function':
                    return markerApply(marker, delegate.createExportDeclaration(true, parseFunctionExpression(), [], null));
                }
            }

            if (matchContextualKeyword('from')) {
                throwError({}, Messages.UnexpectedToken, lookahead.value);
            }

            // covers:
            // export default {};
            // export default [];
            if (match('{')) {
                declaration = parseObjectInitialiser();
            } else if (match('[')) {
                declaration = parseArrayInitialiser();
            } else {
                declaration = parseAssignmentExpression();
            }
            consumeSemicolon();
            return markerApply(marker, delegate.createExportDeclaration(true, declaration, [], null));
        }

        // non-default export
        if (lookahead.type === Token.Keyword) {
            // covers:
            // export var f = 1;
            switch (lookahead.value) {
            case 'let':
            case 'const':
            case 'var':
            case 'class':
            case 'function':
                return markerApply(marker, delegate.createExportDeclaration(false, parseSourceElement(), specifiers, null));
            }
        }

        if (match('*')) {
            // covers:
            // export * from "foo";
            specifiers.push(parseExportBatchSpecifier());

            if (!matchContextualKeyword('from')) {
                throwError({}, lookahead.value ?
                        Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
            }
            lex();
            src = parseModuleSpecifier();
            consumeSemicolon();

            return markerApply(marker, delegate.createExportDeclaration(false, null, specifiers, src));
        }

        expect('{');
        if (!match('}')) {
            do {
                isExportFromIdentifier = isExportFromIdentifier || matchKeyword('default');
                specifiers.push(parseExportSpecifier());
            } while (match(',') && lex());
        }
        expect('}');

        if (matchContextualKeyword('from')) {
            // covering:
            // export {default} from "foo";
            // export {foo} from "foo";
            lex();
            src = parseModuleSpecifier();
            consumeSemicolon();
        } else if (isExportFromIdentifier) {
            // covering:
            // export {default}; // missing fromClause
            throwError({}, lookahead.value ?
                    Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
        } else {
            // cover
            // export {foo};
            consumeSemicolon();
        }
        return markerApply(marker, delegate.createExportDeclaration(false, declaration, specifiers, src));
    }


    function parseImportSpecifier() {
        // import {<foo as bar>} ...;
        var id, name = null, marker = markerCreate();

        id = parseNonComputedProperty();
        if (matchContextualKeyword('as')) {
            lex();
            name = parseVariableIdentifier();
        }

        return markerApply(marker, delegate.createImportSpecifier(id, name));
    }

    function parseNamedImports() {
        var specifiers = [];
        // {foo, bar as bas}
        expect('{');
        if (!match('}')) {
            do {
                specifiers.push(parseImportSpecifier());
            } while (match(',') && lex());
        }
        expect('}');
        return specifiers;
    }

    function parseImportDefaultSpecifier() {
        // import <foo> ...;
        var id, marker = markerCreate();

        id = parseNonComputedProperty();

        return markerApply(marker, delegate.createImportDefaultSpecifier(id));
    }

    function parseImportNamespaceSpecifier() {
        // import <* as foo> ...;
        var id, marker = markerCreate();

        expect('*');
        if (!matchContextualKeyword('as')) {
            throwError({}, Messages.NoAsAfterImportNamespace);
        }
        lex();
        id = parseNonComputedProperty();

        return markerApply(marker, delegate.createImportNamespaceSpecifier(id));
    }

    function parseImportDeclaration() {
        var specifiers, src, marker = markerCreate();

        expectKeyword('import');
        specifiers = [];

        if (lookahead.type === Token.StringLiteral) {
            // covers:
            // import "foo";
            src = parseModuleSpecifier();
            consumeSemicolon();
            return markerApply(marker, delegate.createImportDeclaration(specifiers, src));
        }

        if (!matchKeyword('default') && isIdentifierName(lookahead)) {
            // covers:
            // import foo
            // import foo, ...
            specifiers.push(parseImportDefaultSpecifier());
            if (match(',')) {
                lex();
            }
        }
        if (match('*')) {
            // covers:
            // import foo, * as foo
            // import * as foo
            specifiers.push(parseImportNamespaceSpecifier());
        } else if (match('{')) {
            // covers:
            // import foo, {bar}
            // import {bar}
            specifiers = specifiers.concat(parseNamedImports());
        }

        if (!matchContextualKeyword('from')) {
            throwError({}, lookahead.value ?
                    Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
        }
        lex();
        src = parseModuleSpecifier();
        consumeSemicolon();

        return markerApply(marker, delegate.createImportDeclaration(specifiers, src));
    }

    // 12.3 Empty Statement

    function parseEmptyStatement() {
        var marker = markerCreate();
        expect(';');
        return markerApply(marker, delegate.createEmptyStatement());
    }

    // 12.4 Expression Statement

    function parseExpressionStatement() {
        var marker = markerCreate(), expr = parseExpression();
        consumeSemicolon();
        return markerApply(marker, delegate.createExpressionStatement(expr));
    }

    // 12.5 If statement

    function parseIfStatement() {
        var test, consequent, alternate, marker = markerCreate();

        expectKeyword('if');

        expect('(');

        test = parseExpression();

        expect(')');

        consequent = parseStatement();

        if (matchKeyword('else')) {
            lex();
            alternate = parseStatement();
        } else {
            alternate = null;
        }

        return markerApply(marker, delegate.createIfStatement(test, consequent, alternate));
    }

    // 12.6 Iteration Statements

    function parseDoWhileStatement() {
        var body, test, oldInIteration, marker = markerCreate();

        expectKeyword('do');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        body = parseStatement();

        state.inIteration = oldInIteration;

        expectKeyword('while');

        expect('(');

        test = parseExpression();

        expect(')');

        if (match(';')) {
            lex();
        }

        return markerApply(marker, delegate.createDoWhileStatement(body, test));
    }

    function parseWhileStatement() {
        var test, body, oldInIteration, marker = markerCreate();

        expectKeyword('while');

        expect('(');

        test = parseExpression();

        expect(')');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        body = parseStatement();

        state.inIteration = oldInIteration;

        return markerApply(marker, delegate.createWhileStatement(test, body));
    }

    function parseForVariableDeclaration() {
        var marker = markerCreate(),
            token = lex(),
            declarations = parseVariableDeclarationList();

        return markerApply(marker, delegate.createVariableDeclaration(declarations, token.value));
    }

    function parseForStatement(opts) {
        var init, test, update, left, right, body, operator, oldInIteration,
            marker = markerCreate();
        init = test = update = null;
        expectKeyword('for');

        // http://wiki.ecmascript.org/doku.php?id=proposals:iterators_and_generators&s=each
        if (matchContextualKeyword('each')) {
            throwError({}, Messages.EachNotAllowed);
        }

        expect('(');

        if (match(';')) {
            lex();
        } else {
            if (matchKeyword('var') || matchKeyword('let') || matchKeyword('const')) {
                state.allowIn = false;
                init = parseForVariableDeclaration();
                state.allowIn = true;

                if (init.declarations.length === 1) {
                    if (matchKeyword('in') || matchContextualKeyword('of')) {
                        operator = lookahead;
                        if (!((operator.value === 'in' || init.kind !== 'var') && init.declarations[0].init)) {
                            lex();
                            left = init;
                            right = parseExpression();
                            init = null;
                        }
                    }
                }
            } else {
                state.allowIn = false;
                init = parseExpression();
                state.allowIn = true;

                if (matchContextualKeyword('of')) {
                    operator = lex();
                    left = init;
                    right = parseExpression();
                    init = null;
                } else if (matchKeyword('in')) {
                    // LeftHandSideExpression
                    if (!isAssignableLeftHandSide(init)) {
                        throwError({}, Messages.InvalidLHSInForIn);
                    }
                    operator = lex();
                    left = init;
                    right = parseExpression();
                    init = null;
                }
            }

            if (typeof left === 'undefined') {
                expect(';');
            }
        }

        if (typeof left === 'undefined') {

            if (!match(';')) {
                test = parseExpression();
            }
            expect(';');

            if (!match(')')) {
                update = parseExpression();
            }
        }

        expect(')');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        if (!(opts !== undefined && opts.ignoreBody)) {
            body = parseStatement();
        }

        state.inIteration = oldInIteration;

        if (typeof left === 'undefined') {
            return markerApply(marker, delegate.createForStatement(init, test, update, body));
        }

        if (operator.value === 'in') {
            return markerApply(marker, delegate.createForInStatement(left, right, body));
        }
        return markerApply(marker, delegate.createForOfStatement(left, right, body));
    }

    // 12.7 The continue statement

    function parseContinueStatement() {
        var label = null, marker = markerCreate();

        expectKeyword('continue');

        // Optimize the most common form: 'continue;'.
        if (source.charCodeAt(index) === 59) {
            lex();

            if (!state.inIteration) {
                throwError({}, Messages.IllegalContinue);
            }

            return markerApply(marker, delegate.createContinueStatement(null));
        }

        if (peekLineTerminator()) {
            if (!state.inIteration) {
                throwError({}, Messages.IllegalContinue);
            }

            return markerApply(marker, delegate.createContinueStatement(null));
        }

        if (lookahead.type === Token.Identifier) {
            label = parseVariableIdentifier();

            if (!state.labelSet.has(label.name)) {
                throwError({}, Messages.UnknownLabel, label.name);
            }
        }

        consumeSemicolon();

        if (label === null && !state.inIteration) {
            throwError({}, Messages.IllegalContinue);
        }

        return markerApply(marker, delegate.createContinueStatement(label));
    }

    // 12.8 The break statement

    function parseBreakStatement() {
        var label = null, marker = markerCreate();

        expectKeyword('break');

        // Catch the very common case first: immediately a semicolon (char #59).
        if (source.charCodeAt(index) === 59) {
            lex();

            if (!(state.inIteration || state.inSwitch)) {
                throwError({}, Messages.IllegalBreak);
            }

            return markerApply(marker, delegate.createBreakStatement(null));
        }

        if (peekLineTerminator()) {
            if (!(state.inIteration || state.inSwitch)) {
                throwError({}, Messages.IllegalBreak);
            }

            return markerApply(marker, delegate.createBreakStatement(null));
        }

        if (lookahead.type === Token.Identifier) {
            label = parseVariableIdentifier();

            if (!state.labelSet.has(label.name)) {
                throwError({}, Messages.UnknownLabel, label.name);
            }
        }

        consumeSemicolon();

        if (label === null && !(state.inIteration || state.inSwitch)) {
            throwError({}, Messages.IllegalBreak);
        }

        return markerApply(marker, delegate.createBreakStatement(label));
    }

    // 12.9 The return statement

    function parseReturnStatement() {
        var argument = null, marker = markerCreate();

        expectKeyword('return');

        if (!state.inFunctionBody) {
            throwErrorTolerant({}, Messages.IllegalReturn);
        }

        // 'return' followed by a space and an identifier is very common.
        if (source.charCodeAt(index) === 32) {
            if (isIdentifierStart(source.charCodeAt(index + 1))) {
                argument = parseExpression();
                consumeSemicolon();
                return markerApply(marker, delegate.createReturnStatement(argument));
            }
        }

        if (peekLineTerminator()) {
            return markerApply(marker, delegate.createReturnStatement(null));
        }

        if (!match(';')) {
            if (!match('}') && lookahead.type !== Token.EOF) {
                argument = parseExpression();
            }
        }

        consumeSemicolon();

        return markerApply(marker, delegate.createReturnStatement(argument));
    }

    // 12.10 The with statement

    function parseWithStatement() {
        var object, body, marker = markerCreate();

        if (strict) {
            throwErrorTolerant({}, Messages.StrictModeWith);
        }

        expectKeyword('with');

        expect('(');

        object = parseExpression();

        expect(')');

        body = parseStatement();

        return markerApply(marker, delegate.createWithStatement(object, body));
    }

    // 12.10 The swith statement

    function parseSwitchCase() {
        var test,
            consequent = [],
            sourceElement,
            marker = markerCreate();

        if (matchKeyword('default')) {
            lex();
            test = null;
        } else {
            expectKeyword('case');
            test = parseExpression();
        }
        expect(':');

        while (index < length) {
            if (match('}') || matchKeyword('default') || matchKeyword('case')) {
                break;
            }
            sourceElement = parseSourceElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            consequent.push(sourceElement);
        }

        return markerApply(marker, delegate.createSwitchCase(test, consequent));
    }

    function parseSwitchStatement() {
        var discriminant, cases, clause, oldInSwitch, defaultFound, marker = markerCreate();

        expectKeyword('switch');

        expect('(');

        discriminant = parseExpression();

        expect(')');

        expect('{');

        cases = [];

        if (match('}')) {
            lex();
            return markerApply(marker, delegate.createSwitchStatement(discriminant, cases));
        }

        oldInSwitch = state.inSwitch;
        state.inSwitch = true;
        defaultFound = false;

        while (index < length) {
            if (match('}')) {
                break;
            }
            clause = parseSwitchCase();
            if (clause.test === null) {
                if (defaultFound) {
                    throwError({}, Messages.MultipleDefaultsInSwitch);
                }
                defaultFound = true;
            }
            cases.push(clause);
        }

        state.inSwitch = oldInSwitch;

        expect('}');

        return markerApply(marker, delegate.createSwitchStatement(discriminant, cases));
    }

    // 12.13 The throw statement

    function parseThrowStatement() {
        var argument, marker = markerCreate();

        expectKeyword('throw');

        if (peekLineTerminator()) {
            throwError({}, Messages.NewlineAfterThrow);
        }

        argument = parseExpression();

        consumeSemicolon();

        return markerApply(marker, delegate.createThrowStatement(argument));
    }

    // 12.14 The try statement

    function parseCatchClause() {
        var param, body, marker = markerCreate();

        expectKeyword('catch');

        expect('(');
        if (match(')')) {
            throwUnexpected(lookahead);
        }

        param = parseExpression();
        // 12.14.1
        if (strict && param.type === Syntax.Identifier && isRestrictedWord(param.name)) {
            throwErrorTolerant({}, Messages.StrictCatchVariable);
        }

        expect(')');
        body = parseBlock();
        return markerApply(marker, delegate.createCatchClause(param, body));
    }

    function parseTryStatement() {
        var block, handlers = [], finalizer = null, marker = markerCreate();

        expectKeyword('try');

        block = parseBlock();

        if (matchKeyword('catch')) {
            handlers.push(parseCatchClause());
        }

        if (matchKeyword('finally')) {
            lex();
            finalizer = parseBlock();
        }

        if (handlers.length === 0 && !finalizer) {
            throwError({}, Messages.NoCatchOrFinally);
        }

        return markerApply(marker, delegate.createTryStatement(block, [], handlers, finalizer));
    }

    // 12.15 The debugger statement

    function parseDebuggerStatement() {
        var marker = markerCreate();
        expectKeyword('debugger');

        consumeSemicolon();

        return markerApply(marker, delegate.createDebuggerStatement());
    }

    // 12 Statements

    function parseStatement() {
        var type = lookahead.type,
            marker,
            expr,
            labeledBody;

        if (type === Token.EOF) {
            throwUnexpected(lookahead);
        }

        if (type === Token.Punctuator) {
            switch (lookahead.value) {
            case ';':
                return parseEmptyStatement();
            case '{':
                return parseBlock();
            case '(':
                return parseExpressionStatement();
            default:
                break;
            }
        }

        if (type === Token.Keyword) {
            switch (lookahead.value) {
            case 'break':
                return parseBreakStatement();
            case 'continue':
                return parseContinueStatement();
            case 'debugger':
                return parseDebuggerStatement();
            case 'do':
                return parseDoWhileStatement();
            case 'for':
                return parseForStatement();
            case 'function':
                return parseFunctionDeclaration();
            case 'class':
                return parseClassDeclaration();
            case 'if':
                return parseIfStatement();
            case 'return':
                return parseReturnStatement();
            case 'switch':
                return parseSwitchStatement();
            case 'throw':
                return parseThrowStatement();
            case 'try':
                return parseTryStatement();
            case 'var':
                return parseVariableStatement();
            case 'while':
                return parseWhileStatement();
            case 'with':
                return parseWithStatement();
            default:
                break;
            }
        }

        if (matchAsyncFuncExprOrDecl()) {
            return parseFunctionDeclaration();
        }

        marker = markerCreate();
        expr = parseExpression();

        // 12.12 Labelled Statements
        if ((expr.type === Syntax.Identifier) && match(':')) {
            lex();

            if (state.labelSet.has(expr.name)) {
                throwError({}, Messages.Redeclaration, 'Label', expr.name);
            }

            state.labelSet.set(expr.name, true);
            labeledBody = parseStatement();
            state.labelSet['delete'](expr.name);
            return markerApply(marker, delegate.createLabeledStatement(expr, labeledBody));
        }

        consumeSemicolon();

        return markerApply(marker, delegate.createExpressionStatement(expr));
    }

    // 13 Function Definition

    function parseConciseBody() {
        if (match('{')) {
            return parseFunctionSourceElements();
        }
        return parseAssignmentExpression();
    }

    function parseFunctionSourceElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted,
            oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, oldParenthesizedCount,
            marker = markerCreate();

        expect('{');

        while (index < length) {
            if (lookahead.type !== Token.StringLiteral) {
                break;
            }
            token = lookahead;

            sourceElement = parseSourceElement();
            sourceElements.push(sourceElement);
            if (sourceElement.expression.type !== Syntax.Literal) {
                // this is not directive
                break;
            }
            directive = source.slice(token.range[0] + 1, token.range[1] - 1);
            if (directive === 'use strict') {
                strict = true;
                if (firstRestricted) {
                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
                }
            } else {
                if (!firstRestricted && token.octal) {
                    firstRestricted = token;
                }
            }
        }

        oldLabelSet = state.labelSet;
        oldInIteration = state.inIteration;
        oldInSwitch = state.inSwitch;
        oldInFunctionBody = state.inFunctionBody;
        oldParenthesizedCount = state.parenthesizedCount;

        state.labelSet = new StringMap();
        state.inIteration = false;
        state.inSwitch = false;
        state.inFunctionBody = true;
        state.parenthesizedCount = 0;

        while (index < length) {
            if (match('}')) {
                break;
            }
            sourceElement = parseSourceElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            sourceElements.push(sourceElement);
        }

        expect('}');

        state.labelSet = oldLabelSet;
        state.inIteration = oldInIteration;
        state.inSwitch = oldInSwitch;
        state.inFunctionBody = oldInFunctionBody;
        state.parenthesizedCount = oldParenthesizedCount;

        return markerApply(marker, delegate.createBlockStatement(sourceElements));
    }

    function validateParam(options, param, name) {
        if (strict) {
            if (isRestrictedWord(name)) {
                options.stricted = param;
                options.message = Messages.StrictParamName;
            }
            if (options.paramSet.has(name)) {
                options.stricted = param;
                options.message = Messages.StrictParamDupe;
            }
        } else if (!options.firstRestricted) {
            if (isRestrictedWord(name)) {
                options.firstRestricted = param;
                options.message = Messages.StrictParamName;
            } else if (isStrictModeReservedWord(name)) {
                options.firstRestricted = param;
                options.message = Messages.StrictReservedWord;
            } else if (options.paramSet.has(name)) {
                options.firstRestricted = param;
                options.message = Messages.StrictParamDupe;
            }
        }
        options.paramSet.set(name, true);
    }

    function parseParam(options) {
        var marker, token, rest, param, def;

        token = lookahead;
        if (token.value === '...') {
            token = lex();
            rest = true;
        }

        if (match('[')) {
            marker = markerCreate();
            param = parseArrayInitialiser();
            reinterpretAsDestructuredParameter(options, param);
            if (match(':')) {
                param.typeAnnotation = parseTypeAnnotation();
                markerApply(marker, param);
            }
        } else if (match('{')) {
            marker = markerCreate();
            if (rest) {
                throwError({}, Messages.ObjectPatternAsRestParameter);
            }
            param = parseObjectInitialiser();
            reinterpretAsDestructuredParameter(options, param);
            if (match(':')) {
                param.typeAnnotation = parseTypeAnnotation();
                markerApply(marker, param);
            }
        } else {
            param =
                rest
                ? parseTypeAnnotatableIdentifier(
                    false, /* requireTypeAnnotation */
                    false /* canBeOptionalParam */
                )
                : parseTypeAnnotatableIdentifier(
                    false, /* requireTypeAnnotation */
                    true /* canBeOptionalParam */
                );

            validateParam(options, token, token.value);
        }

        if (match('=')) {
            if (rest) {
                throwErrorTolerant(lookahead, Messages.DefaultRestParameter);
            }
            lex();
            def = parseAssignmentExpression();
            ++options.defaultCount;
        }

        if (rest) {
            if (!match(')')) {
                throwError({}, Messages.ParameterAfterRestParameter);
            }
            options.rest = param;
            return false;
        }

        options.params.push(param);
        options.defaults.push(def);
        return !match(')');
    }

    function parseParams(firstRestricted) {
        var options, marker = markerCreate();

        options = {
            params: [],
            defaultCount: 0,
            defaults: [],
            rest: null,
            firstRestricted: firstRestricted
        };

        expect('(');

        if (!match(')')) {
            options.paramSet = new StringMap();
            while (index < length) {
                if (!parseParam(options)) {
                    break;
                }
                expect(',');
            }
        }

        expect(')');

        if (options.defaultCount === 0) {
            options.defaults = [];
        }

        if (match(':')) {
            options.returnType = parseTypeAnnotation();
        }

        return markerApply(marker, options);
    }

    function parseFunctionDeclaration() {
        var id, body, token, tmp, firstRestricted, message, generator, isAsync,
            previousStrict, previousYieldAllowed, previousAwaitAllowed,
            marker = markerCreate(), typeParameters;

        isAsync = false;
        if (matchAsync()) {
            lex();
            isAsync = true;
        }

        expectKeyword('function');

        generator = false;
        if (match('*')) {
            lex();
            generator = true;
        }

        token = lookahead;

        id = parseVariableIdentifier();

        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        if (strict) {
            if (isRestrictedWord(token.value)) {
                throwErrorTolerant(token, Messages.StrictFunctionName);
            }
        } else {
            if (isRestrictedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictFunctionName;
            } else if (isStrictModeReservedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictReservedWord;
            }
        }

        tmp = parseParams(firstRestricted);
        firstRestricted = tmp.firstRestricted;
        if (tmp.message) {
            message = tmp.message;
        }

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = generator;
        previousAwaitAllowed = state.awaitAllowed;
        state.awaitAllowed = isAsync;

        body = parseFunctionSourceElements();

        if (strict && firstRestricted) {
            throwError(firstRestricted, message);
        }
        if (strict && tmp.stricted) {
            throwErrorTolerant(tmp.stricted, message);
        }
        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;
        state.awaitAllowed = previousAwaitAllowed;

        return markerApply(
            marker,
            delegate.createFunctionDeclaration(
                id,
                tmp.params,
                tmp.defaults,
                body,
                tmp.rest,
                generator,
                false,
                isAsync,
                tmp.returnType,
                typeParameters
            )
        );
    }

    function parseFunctionExpression() {
        var token, id = null, firstRestricted, message, tmp, body, generator, isAsync,
            previousStrict, previousYieldAllowed, previousAwaitAllowed,
            marker = markerCreate(), typeParameters;

        isAsync = false;
        if (matchAsync()) {
            lex();
            isAsync = true;
        }

        expectKeyword('function');

        generator = false;

        if (match('*')) {
            lex();
            generator = true;
        }

        if (!match('(')) {
            if (!match('<')) {
                token = lookahead;
                id = parseVariableIdentifier();

                if (strict) {
                    if (isRestrictedWord(token.value)) {
                        throwErrorTolerant(token, Messages.StrictFunctionName);
                    }
                } else {
                    if (isRestrictedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictFunctionName;
                    } else if (isStrictModeReservedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictReservedWord;
                    }
                }
            }

            if (match('<')) {
                typeParameters = parseTypeParameterDeclaration();
            }
        }

        tmp = parseParams(firstRestricted);
        firstRestricted = tmp.firstRestricted;
        if (tmp.message) {
            message = tmp.message;
        }

        previousStrict = strict;
        previousYieldAllowed = state.yieldAllowed;
        state.yieldAllowed = generator;
        previousAwaitAllowed = state.awaitAllowed;
        state.awaitAllowed = isAsync;

        body = parseFunctionSourceElements();

        if (strict && firstRestricted) {
            throwError(firstRestricted, message);
        }
        if (strict && tmp.stricted) {
            throwErrorTolerant(tmp.stricted, message);
        }
        strict = previousStrict;
        state.yieldAllowed = previousYieldAllowed;
        state.awaitAllowed = previousAwaitAllowed;

        return markerApply(
            marker,
            delegate.createFunctionExpression(
                id,
                tmp.params,
                tmp.defaults,
                body,
                tmp.rest,
                generator,
                false,
                isAsync,
                tmp.returnType,
                typeParameters
            )
        );
    }

    function parseYieldExpression() {
        var delegateFlag, expr, marker = markerCreate();

        expectKeyword('yield', !strict);

        delegateFlag = false;
        if (match('*')) {
            lex();
            delegateFlag = true;
        }

        expr = parseAssignmentExpression();

        return markerApply(marker, delegate.createYieldExpression(expr, delegateFlag));
    }

    function parseAwaitExpression() {
        var expr, marker = markerCreate();
        expectContextualKeyword('await');
        expr = parseAssignmentExpression();
        return markerApply(marker, delegate.createAwaitExpression(expr));
    }

    // 14 Classes

    function validateDuplicateProp(propMap, key, accessor) {
        var propInfo, reversed, name, isValidDuplicateProp;

        name = getFieldName(key);

        if (propMap.has(name)) {
            propInfo = propMap.get(name);
            if (accessor === 'data') {
                isValidDuplicateProp = false;
            } else {
                if (accessor === 'get') {
                    reversed = 'set';
                } else {
                    reversed = 'get';
                }

                isValidDuplicateProp =
                    // There isn't already a specified accessor for this prop
                    propInfo[accessor] === undefined
                    // There isn't already a data prop by this name
                    && propInfo.data === undefined
                    // The only existing prop by this name is a reversed accessor
                    && propInfo[reversed] !== undefined;
            }
            if (!isValidDuplicateProp) {
                throwError(key, Messages.IllegalDuplicateClassProperty);
            }
        } else {
            propInfo = {
                get: undefined,
                set: undefined,
                data: undefined
            };
            propMap.set(name, propInfo);
        }
        propInfo[accessor] = true;
    }

    function parseMethodDefinition(existingPropNames, key, isStatic, generator, computed) {
        var token, param, propType, isValidDuplicateProp = false,
            isAsync, typeParameters, tokenValue, returnType,
            annotationMarker, propMap;

        propType = isStatic ? ClassPropertyType.static : ClassPropertyType.prototype;

        propMap = existingPropNames[propType];

        if (generator) {
            return delegate.createMethodDefinition(
                propType,
                '',
                key,
                parsePropertyMethodFunction({ generator: true }),
                computed
            );
        }

        tokenValue = key.type === 'Identifier' && key.name;

        if (tokenValue === 'get' && !match('(')) {
            key = parseObjectPropertyKey();

            // It is a syntax error if any other properties have a name
            // duplicating this one unless they are a setter
            if (!computed) {
                validateDuplicateProp(propMap, key, 'get');
            }

            expect('(');
            expect(')');
            if (match(':')) {
                returnType = parseTypeAnnotation();
            }
            return delegate.createMethodDefinition(
                propType,
                'get',
                key,
                parsePropertyFunction({ generator: false, returnType: returnType }),
                computed
            );
        }
        if (tokenValue === 'set' && !match('(')) {
            key = parseObjectPropertyKey();

            // It is a syntax error if any other properties have a name
            // duplicating this one unless they are a getter
            if (!computed) {
                validateDuplicateProp(propMap, key, 'set');
            }

            expect('(');
            token = lookahead;
            param = [ parseTypeAnnotatableIdentifier() ];
            expect(')');
            if (match(':')) {
                returnType = parseTypeAnnotation();
            }
            return delegate.createMethodDefinition(
                propType,
                'set',
                key,
                parsePropertyFunction({
                    params: param,
                    generator: false,
                    name: token,
                    returnType: returnType
                }),
                computed
            );
        }

        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        isAsync = tokenValue === 'async' && !match('(');
        if (isAsync) {
            key = parseObjectPropertyKey();
        }

        // It is a syntax error if any other properties have the same name as a
        // non-getter, non-setter method
        if (!computed) {
            validateDuplicateProp(propMap, key, 'data');
        }

        return delegate.createMethodDefinition(
            propType,
            '',
            key,
            parsePropertyMethodFunction({
                generator: false,
                async: isAsync,
                typeParameters: typeParameters
            }),
            computed
        );
    }

    function parseClassProperty(existingPropNames, key, computed, isStatic) {
        var typeAnnotation;

        typeAnnotation = parseTypeAnnotation();
        expect(';');

        return delegate.createClassProperty(
            key,
            typeAnnotation,
            computed,
            isStatic
        );
    }

    function parseClassElement(existingProps) {
        var computed = false, generator = false, key, marker = markerCreate(),
            isStatic = false, possiblyOpenBracketToken;
        if (match(';')) {
            lex();
            return;
        }

        if (lookahead.value === 'static') {
            lex();
            isStatic = true;
        }

        if (match('*')) {
            lex();
            generator = true;
        }

        possiblyOpenBracketToken = lookahead;
        if (matchContextualKeyword('get') || matchContextualKeyword('set')) {
            possiblyOpenBracketToken = lookahead2();
        }

        if (possiblyOpenBracketToken.type === Token.Punctuator
                && possiblyOpenBracketToken.value === '[') {
            computed = true;
        }

        key = parseObjectPropertyKey();

        if (!generator && lookahead.value === ':') {
            return markerApply(marker, parseClassProperty(existingProps, key, computed, isStatic));
        }

        return markerApply(marker, parseMethodDefinition(
            existingProps,
            key,
            isStatic,
            generator,
            computed
        ));
    }

    function parseClassBody() {
        var classElement, classElements = [], existingProps = {}, marker = markerCreate();

        existingProps[ClassPropertyType.static] = new StringMap();
        existingProps[ClassPropertyType.prototype] = new StringMap();

        expect('{');

        while (index < length) {
            if (match('}')) {
                break;
            }
            classElement = parseClassElement(existingProps);

            if (typeof classElement !== 'undefined') {
                classElements.push(classElement);
            }
        }

        expect('}');

        return markerApply(marker, delegate.createClassBody(classElements));
    }

    function parseClassImplements() {
        var id, implemented = [], marker, typeParameters;
        expectContextualKeyword('implements');
        while (index < length) {
            marker = markerCreate();
            id = parseVariableIdentifier();
            if (match('<')) {
                typeParameters = parseTypeParameterInstantiation();
            } else {
                typeParameters = null;
            }
            implemented.push(markerApply(marker, delegate.createClassImplements(
                id,
                typeParameters
            )));
            if (!match(',')) {
                break;
            }
            expect(',');
        }
        return implemented;
    }

    function parseClassExpression() {
        var id, implemented, previousYieldAllowed, superClass = null,
            superTypeParameters, marker = markerCreate(), typeParameters;

        expectKeyword('class');

        if (!matchKeyword('extends') && !matchContextualKeyword('implements') && !match('{')) {
            id = parseVariableIdentifier();
        }

        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        if (matchKeyword('extends')) {
            expectKeyword('extends');
            previousYieldAllowed = state.yieldAllowed;
            state.yieldAllowed = false;
            superClass = parseLeftHandSideExpressionAllowCall();
            if (match('<')) {
                superTypeParameters = parseTypeParameterInstantiation();
            }
            state.yieldAllowed = previousYieldAllowed;
        }

        if (matchContextualKeyword('implements')) {
            implemented = parseClassImplements();
        }

        return markerApply(marker, delegate.createClassExpression(
            id,
            superClass,
            parseClassBody(),
            typeParameters,
            superTypeParameters,
            implemented
        ));
    }

    function parseClassDeclaration() {
        var id, implemented, previousYieldAllowed, superClass = null,
            superTypeParameters, marker = markerCreate(), typeParameters;

        expectKeyword('class');

        id = parseVariableIdentifier();

        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        if (matchKeyword('extends')) {
            expectKeyword('extends');
            previousYieldAllowed = state.yieldAllowed;
            state.yieldAllowed = false;
            superClass = parseLeftHandSideExpressionAllowCall();
            if (match('<')) {
                superTypeParameters = parseTypeParameterInstantiation();
            }
            state.yieldAllowed = previousYieldAllowed;
        }

        if (matchContextualKeyword('implements')) {
            implemented = parseClassImplements();
        }

        return markerApply(marker, delegate.createClassDeclaration(
            id,
            superClass,
            parseClassBody(),
            typeParameters,
            superTypeParameters,
            implemented
        ));
    }

    // 15 Program

    function parseSourceElement() {
        var token;
        if (lookahead.type === Token.Keyword) {
            switch (lookahead.value) {
            case 'const':
            case 'let':
                return parseConstLetDeclaration(lookahead.value);
            case 'function':
                return parseFunctionDeclaration();
            default:
                return parseStatement();
            }
        }

        if (matchContextualKeyword('type')
                && lookahead2().type === Token.Identifier) {
            return parseTypeAlias();
        }

        if (matchContextualKeyword('interface')
                && lookahead2().type === Token.Identifier) {
            return parseInterface();
        }

        if (matchContextualKeyword('declare')) {
            token = lookahead2();
            if (token.type === Token.Keyword) {
                switch (token.value) {
                case 'class':
                    return parseDeclareClass();
                case 'function':
                    return parseDeclareFunction();
                case 'var':
                    return parseDeclareVariable();
                }
            } else if (token.type === Token.Identifier
                    && token.value === 'module') {
                return parseDeclareModule();
            }
        }

        if (lookahead.type !== Token.EOF) {
            return parseStatement();
        }
    }

    function parseProgramElement() {
        if (extra.isModule && lookahead.type === Token.Keyword) {
            switch (lookahead.value) {
            case 'export':
                return parseExportDeclaration();
            case 'import':
                return parseImportDeclaration();
            }
        }

        return parseSourceElement();
    }

    function parseProgramElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted;

        while (index < length) {
            token = lookahead;
            if (token.type !== Token.StringLiteral) {
                break;
            }

            sourceElement = parseProgramElement();
            sourceElements.push(sourceElement);
            if (sourceElement.expression.type !== Syntax.Literal) {
                // this is not directive
                break;
            }
            directive = source.slice(token.range[0] + 1, token.range[1] - 1);
            if (directive === 'use strict') {
                strict = true;
                if (firstRestricted) {
                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
                }
            } else {
                if (!firstRestricted && token.octal) {
                    firstRestricted = token;
                }
            }
        }

        while (index < length) {
            sourceElement = parseProgramElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            sourceElements.push(sourceElement);
        }
        return sourceElements;
    }

    function parseProgram() {
        var body, marker = markerCreate();
        strict = !!extra.isModule;
        peek();
        body = parseProgramElements();
        return markerApply(marker, delegate.createProgram(body));
    }

    // The following functions are needed only when the option to preserve
    // the comments is active.

    function addComment(type, value, start, end, loc) {
        var comment;

        assert(typeof start === 'number', 'Comment must have valid position');

        // Because the way the actual token is scanned, often the comments
        // (if any) are skipped twice during the lexical analysis.
        // Thus, we need to skip adding a comment if the comment array already
        // handled it.
        if (state.lastCommentStart >= start) {
            return;
        }
        state.lastCommentStart = start;

        comment = {
            type: type,
            value: value
        };
        if (extra.range) {
            comment.range = [start, end];
        }
        if (extra.loc) {
            comment.loc = loc;
        }
        extra.comments.push(comment);
        if (extra.attachComment) {
            extra.leadingComments.push(comment);
            extra.trailingComments.push(comment);
        }
    }

    function scanComment() {
        var comment, ch, loc, start, blockComment, lineComment;

        comment = '';
        blockComment = false;
        lineComment = false;

        while (index < length) {
            ch = source[index];

            if (lineComment) {
                ch = source[index++];
                if (isLineTerminator(ch.charCodeAt(0))) {
                    loc.end = {
                        line: lineNumber,
                        column: index - lineStart - 1
                    };
                    lineComment = false;
                    addComment('Line', comment, start, index - 1, loc);
                    if (ch === '\r' && source[index] === '\n') {
                        ++index;
                    }
                    ++lineNumber;
                    lineStart = index;
                    comment = '';
                } else if (index >= length) {
                    lineComment = false;
                    comment += ch;
                    loc.end = {
                        line: lineNumber,
                        column: length - lineStart
                    };
                    addComment('Line', comment, start, length, loc);
                } else {
                    comment += ch;
                }
            } else if (blockComment) {
                if (isLineTerminator(ch.charCodeAt(0))) {
                    if (ch === '\r') {
                        ++index;
                        comment += '\r';
                    }
                    if (ch !== '\r' || source[index] === '\n') {
                        comment += source[index];
                        ++lineNumber;
                        ++index;
                        lineStart = index;
                        if (index >= length) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    }
                } else {
                    ch = source[index++];
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                    comment += ch;
                    if (ch === '*') {
                        ch = source[index];
                        if (ch === '/') {
                            comment = comment.substr(0, comment.length - 1);
                            blockComment = false;
                            ++index;
                            loc.end = {
                                line: lineNumber,
                                column: index - lineStart
                            };
                            addComment('Block', comment, start, index, loc);
                            comment = '';
                        }
                    }
                }
            } else if (ch === '/') {
                ch = source[index + 1];
                if (ch === '/') {
                    loc = {
                        start: {
                            line: lineNumber,
                            column: index - lineStart
                        }
                    };
                    start = index;
                    index += 2;
                    lineComment = true;
                    if (index >= length) {
                        loc.end = {
                            line: lineNumber,
                            column: index - lineStart
                        };
                        lineComment = false;
                        addComment('Line', comment, start, index, loc);
                    }
                } else if (ch === '*') {
                    start = index;
                    index += 2;
                    blockComment = true;
                    loc = {
                        start: {
                            line: lineNumber,
                            column: index - lineStart - 2
                        }
                    };
                    if (index >= length) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                } else {
                    break;
                }
            } else if (isWhiteSpace(ch.charCodeAt(0))) {
                ++index;
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                ++index;
                if (ch ===  '\r' && source[index] === '\n') {
                    ++index;
                }
                ++lineNumber;
                lineStart = index;
            } else {
                break;
            }
        }
    }

    // 16 XJS

    XHTMLEntities = {
        quot: '\u0022',
        amp: '&',
        apos: '\u0027',
        lt: '<',
        gt: '>',
        nbsp: '\u00A0',
        iexcl: '\u00A1',
        cent: '\u00A2',
        pound: '\u00A3',
        curren: '\u00A4',
        yen: '\u00A5',
        brvbar: '\u00A6',
        sect: '\u00A7',
        uml: '\u00A8',
        copy: '\u00A9',
        ordf: '\u00AA',
        laquo: '\u00AB',
        not: '\u00AC',
        shy: '\u00AD',
        reg: '\u00AE',
        macr: '\u00AF',
        deg: '\u00B0',
        plusmn: '\u00B1',
        sup2: '\u00B2',
        sup3: '\u00B3',
        acute: '\u00B4',
        micro: '\u00B5',
        para: '\u00B6',
        middot: '\u00B7',
        cedil: '\u00B8',
        sup1: '\u00B9',
        ordm: '\u00BA',
        raquo: '\u00BB',
        frac14: '\u00BC',
        frac12: '\u00BD',
        frac34: '\u00BE',
        iquest: '\u00BF',
        Agrave: '\u00C0',
        Aacute: '\u00C1',
        Acirc: '\u00C2',
        Atilde: '\u00C3',
        Auml: '\u00C4',
        Aring: '\u00C5',
        AElig: '\u00C6',
        Ccedil: '\u00C7',
        Egrave: '\u00C8',
        Eacute: '\u00C9',
        Ecirc: '\u00CA',
        Euml: '\u00CB',
        Igrave: '\u00CC',
        Iacute: '\u00CD',
        Icirc: '\u00CE',
        Iuml: '\u00CF',
        ETH: '\u00D0',
        Ntilde: '\u00D1',
        Ograve: '\u00D2',
        Oacute: '\u00D3',
        Ocirc: '\u00D4',
        Otilde: '\u00D5',
        Ouml: '\u00D6',
        times: '\u00D7',
        Oslash: '\u00D8',
        Ugrave: '\u00D9',
        Uacute: '\u00DA',
        Ucirc: '\u00DB',
        Uuml: '\u00DC',
        Yacute: '\u00DD',
        THORN: '\u00DE',
        szlig: '\u00DF',
        agrave: '\u00E0',
        aacute: '\u00E1',
        acirc: '\u00E2',
        atilde: '\u00E3',
        auml: '\u00E4',
        aring: '\u00E5',
        aelig: '\u00E6',
        ccedil: '\u00E7',
        egrave: '\u00E8',
        eacute: '\u00E9',
        ecirc: '\u00EA',
        euml: '\u00EB',
        igrave: '\u00EC',
        iacute: '\u00ED',
        icirc: '\u00EE',
        iuml: '\u00EF',
        eth: '\u00F0',
        ntilde: '\u00F1',
        ograve: '\u00F2',
        oacute: '\u00F3',
        ocirc: '\u00F4',
        otilde: '\u00F5',
        ouml: '\u00F6',
        divide: '\u00F7',
        oslash: '\u00F8',
        ugrave: '\u00F9',
        uacute: '\u00FA',
        ucirc: '\u00FB',
        uuml: '\u00FC',
        yacute: '\u00FD',
        thorn: '\u00FE',
        yuml: '\u00FF',
        OElig: '\u0152',
        oelig: '\u0153',
        Scaron: '\u0160',
        scaron: '\u0161',
        Yuml: '\u0178',
        fnof: '\u0192',
        circ: '\u02C6',
        tilde: '\u02DC',
        Alpha: '\u0391',
        Beta: '\u0392',
        Gamma: '\u0393',
        Delta: '\u0394',
        Epsilon: '\u0395',
        Zeta: '\u0396',
        Eta: '\u0397',
        Theta: '\u0398',
        Iota: '\u0399',
        Kappa: '\u039A',
        Lambda: '\u039B',
        Mu: '\u039C',
        Nu: '\u039D',
        Xi: '\u039E',
        Omicron: '\u039F',
        Pi: '\u03A0',
        Rho: '\u03A1',
        Sigma: '\u03A3',
        Tau: '\u03A4',
        Upsilon: '\u03A5',
        Phi: '\u03A6',
        Chi: '\u03A7',
        Psi: '\u03A8',
        Omega: '\u03A9',
        alpha: '\u03B1',
        beta: '\u03B2',
        gamma: '\u03B3',
        delta: '\u03B4',
        epsilon: '\u03B5',
        zeta: '\u03B6',
        eta: '\u03B7',
        theta: '\u03B8',
        iota: '\u03B9',
        kappa: '\u03BA',
        lambda: '\u03BB',
        mu: '\u03BC',
        nu: '\u03BD',
        xi: '\u03BE',
        omicron: '\u03BF',
        pi: '\u03C0',
        rho: '\u03C1',
        sigmaf: '\u03C2',
        sigma: '\u03C3',
        tau: '\u03C4',
        upsilon: '\u03C5',
        phi: '\u03C6',
        chi: '\u03C7',
        psi: '\u03C8',
        omega: '\u03C9',
        thetasym: '\u03D1',
        upsih: '\u03D2',
        piv: '\u03D6',
        ensp: '\u2002',
        emsp: '\u2003',
        thinsp: '\u2009',
        zwnj: '\u200C',
        zwj: '\u200D',
        lrm: '\u200E',
        rlm: '\u200F',
        ndash: '\u2013',
        mdash: '\u2014',
        lsquo: '\u2018',
        rsquo: '\u2019',
        sbquo: '\u201A',
        ldquo: '\u201C',
        rdquo: '\u201D',
        bdquo: '\u201E',
        dagger: '\u2020',
        Dagger: '\u2021',
        bull: '\u2022',
        hellip: '\u2026',
        permil: '\u2030',
        prime: '\u2032',
        Prime: '\u2033',
        lsaquo: '\u2039',
        rsaquo: '\u203A',
        oline: '\u203E',
        frasl: '\u2044',
        euro: '\u20AC',
        image: '\u2111',
        weierp: '\u2118',
        real: '\u211C',
        trade: '\u2122',
        alefsym: '\u2135',
        larr: '\u2190',
        uarr: '\u2191',
        rarr: '\u2192',
        darr: '\u2193',
        harr: '\u2194',
        crarr: '\u21B5',
        lArr: '\u21D0',
        uArr: '\u21D1',
        rArr: '\u21D2',
        dArr: '\u21D3',
        hArr: '\u21D4',
        forall: '\u2200',
        part: '\u2202',
        exist: '\u2203',
        empty: '\u2205',
        nabla: '\u2207',
        isin: '\u2208',
        notin: '\u2209',
        ni: '\u220B',
        prod: '\u220F',
        sum: '\u2211',
        minus: '\u2212',
        lowast: '\u2217',
        radic: '\u221A',
        prop: '\u221D',
        infin: '\u221E',
        ang: '\u2220',
        and: '\u2227',
        or: '\u2228',
        cap: '\u2229',
        cup: '\u222A',
        'int': '\u222B',
        there4: '\u2234',
        sim: '\u223C',
        cong: '\u2245',
        asymp: '\u2248',
        ne: '\u2260',
        equiv: '\u2261',
        le: '\u2264',
        ge: '\u2265',
        sub: '\u2282',
        sup: '\u2283',
        nsub: '\u2284',
        sube: '\u2286',
        supe: '\u2287',
        oplus: '\u2295',
        otimes: '\u2297',
        perp: '\u22A5',
        sdot: '\u22C5',
        lceil: '\u2308',
        rceil: '\u2309',
        lfloor: '\u230A',
        rfloor: '\u230B',
        lang: '\u2329',
        rang: '\u232A',
        loz: '\u25CA',
        spades: '\u2660',
        clubs: '\u2663',
        hearts: '\u2665',
        diams: '\u2666'
    };

    function getQualifiedXJSName(object) {
        if (object.type === Syntax.XJSIdentifier) {
            return object.name;
        }
        if (object.type === Syntax.XJSNamespacedName) {
            return object.namespace.name + ':' + object.name.name;
        }
        /* istanbul ignore else */
        if (object.type === Syntax.XJSMemberExpression) {
            return (
                getQualifiedXJSName(object.object) + '.' +
                getQualifiedXJSName(object.property)
            );
        }
        /* istanbul ignore next */
        throwUnexpected(object);
    }

    function isXJSIdentifierStart(ch) {
        // exclude backslash (\)
        return (ch !== 92) && isIdentifierStart(ch);
    }

    function isXJSIdentifierPart(ch) {
        // exclude backslash (\) and add hyphen (-)
        return (ch !== 92) && (ch === 45 || isIdentifierPart(ch));
    }

    function scanXJSIdentifier() {
        var ch, start, value = '';

        start = index;
        while (index < length) {
            ch = source.charCodeAt(index);
            if (!isXJSIdentifierPart(ch)) {
                break;
            }
            value += source[index++];
        }

        return {
            type: Token.XJSIdentifier,
            value: value,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanXJSEntity() {
        var ch, str = '', start = index, count = 0, code;
        ch = source[index];
        assert(ch === '&', 'Entity must start with an ampersand');
        index++;
        while (index < length && count++ < 10) {
            ch = source[index++];
            if (ch === ';') {
                break;
            }
            str += ch;
        }

        // Well-formed entity (ending was found).
        if (ch === ';') {
            // Numeric entity.
            if (str[0] === '#') {
                if (str[1] === 'x') {
                    code = +('0' + str.substr(1));
                } else {
                    // Removing leading zeros in order to avoid treating as octal in old browsers.
                    code = +str.substr(1).replace(Regex.LeadingZeros, '');
                }

                if (!isNaN(code)) {
                    return String.fromCharCode(code);
                }
            /* istanbul ignore else */
            } else if (XHTMLEntities[str]) {
                return XHTMLEntities[str];
            }
        }

        // Treat non-entity sequences as regular text.
        index = start + 1;
        return '&';
    }

    function scanXJSText(stopChars) {
        var ch, str = '', start;
        start = index;
        while (index < length) {
            ch = source[index];
            if (stopChars.indexOf(ch) !== -1) {
                break;
            }
            if (ch === '&') {
                str += scanXJSEntity();
            } else {
                index++;
                if (ch === '\r' && source[index] === '\n') {
                    str += ch;
                    ch = source[index];
                    index++;
                }
                if (isLineTerminator(ch.charCodeAt(0))) {
                    ++lineNumber;
                    lineStart = index;
                }
                str += ch;
            }
        }
        return {
            type: Token.XJSText,
            value: str,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
        };
    }

    function scanXJSStringLiteral() {
        var innerToken, quote, start;

        quote = source[index];
        assert((quote === '\'' || quote === '"'),
            'String literal must starts with a quote');

        start = index;
        ++index;

        innerToken = scanXJSText([quote]);

        if (quote !== source[index]) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        ++index;

        innerToken.range = [start, index];

        return innerToken;
    }

    /**
     * Between XJS opening and closing tags (e.g. <foo>HERE</foo>), anything that
     * is not another XJS tag and is not an expression wrapped by {} is text.
     */
    function advanceXJSChild() {
        var ch = source.charCodeAt(index);

        // { (123) and < (60)
        if (ch !== 123 && ch !== 60) {
            return scanXJSText(['<', '{']);
        }

        return scanPunctuator();
    }

    function parseXJSIdentifier() {
        var token, marker = markerCreate();

        if (lookahead.type !== Token.XJSIdentifier) {
            throwUnexpected(lookahead);
        }

        token = lex();
        return markerApply(marker, delegate.createXJSIdentifier(token.value));
    }

    function parseXJSNamespacedName() {
        var namespace, name, marker = markerCreate();

        namespace = parseXJSIdentifier();
        expect(':');
        name = parseXJSIdentifier();

        return markerApply(marker, delegate.createXJSNamespacedName(namespace, name));
    }

    function parseXJSMemberExpression() {
        var marker = markerCreate(),
            expr = parseXJSIdentifier();

        while (match('.')) {
            lex();
            expr = markerApply(marker, delegate.createXJSMemberExpression(expr, parseXJSIdentifier()));
        }

        return expr;
    }

    function parseXJSElementName() {
        if (lookahead2().value === ':') {
            return parseXJSNamespacedName();
        }
        if (lookahead2().value === '.') {
            return parseXJSMemberExpression();
        }

        return parseXJSIdentifier();
    }

    function parseXJSAttributeName() {
        if (lookahead2().value === ':') {
            return parseXJSNamespacedName();
        }

        return parseXJSIdentifier();
    }

    function parseXJSAttributeValue() {
        var value, marker;
        if (match('{')) {
            value = parseXJSExpressionContainer();
            if (value.expression.type === Syntax.XJSEmptyExpression) {
                throwError(
                    value,
                    'XJS attributes must only be assigned a non-empty ' +
                        'expression'
                );
            }
        } else if (match('<')) {
            value = parseXJSElement();
        } else if (lookahead.type === Token.XJSText) {
            marker = markerCreate();
            value = markerApply(marker, delegate.createLiteral(lex()));
        } else {
            throwError({}, Messages.InvalidXJSAttributeValue);
        }
        return value;
    }

    function parseXJSEmptyExpression() {
        var marker = markerCreatePreserveWhitespace();
        while (source.charAt(index) !== '}') {
            index++;
        }
        return markerApply(marker, delegate.createXJSEmptyExpression());
    }

    function parseXJSExpressionContainer() {
        var expression, origInXJSChild, origInXJSTag, marker = markerCreate();

        origInXJSChild = state.inXJSChild;
        origInXJSTag = state.inXJSTag;
        state.inXJSChild = false;
        state.inXJSTag = false;

        expect('{');

        if (match('}')) {
            expression = parseXJSEmptyExpression();
        } else {
            expression = parseExpression();
        }

        state.inXJSChild = origInXJSChild;
        state.inXJSTag = origInXJSTag;

        expect('}');

        return markerApply(marker, delegate.createXJSExpressionContainer(expression));
    }

    function parseXJSSpreadAttribute() {
        var expression, origInXJSChild, origInXJSTag, marker = markerCreate();

        origInXJSChild = state.inXJSChild;
        origInXJSTag = state.inXJSTag;
        state.inXJSChild = false;
        state.inXJSTag = false;

        expect('{');
        expect('...');

        expression = parseAssignmentExpression();

        state.inXJSChild = origInXJSChild;
        state.inXJSTag = origInXJSTag;

        expect('}');

        return markerApply(marker, delegate.createXJSSpreadAttribute(expression));
    }

    function parseXJSAttribute() {
        var name, marker;

        if (match('{')) {
            return parseXJSSpreadAttribute();
        }

        marker = markerCreate();

        name = parseXJSAttributeName();

        // HTML empty attribute
        if (match('=')) {
            lex();
            return markerApply(marker, delegate.createXJSAttribute(name, parseXJSAttributeValue()));
        }

        return markerApply(marker, delegate.createXJSAttribute(name));
    }

    function parseXJSChild() {
        var token, marker;
        if (match('{')) {
            token = parseXJSExpressionContainer();
        } else if (lookahead.type === Token.XJSText) {
            marker = markerCreatePreserveWhitespace();
            token = markerApply(marker, delegate.createLiteral(lex()));
        } else {
            token = parseXJSElement();
        }
        return token;
    }

    function parseXJSClosingElement() {
        var name, origInXJSChild, origInXJSTag, marker = markerCreate();
        origInXJSChild = state.inXJSChild;
        origInXJSTag = state.inXJSTag;
        state.inXJSChild = false;
        state.inXJSTag = true;
        expect('<');
        expect('/');
        name = parseXJSElementName();
        // Because advance() (called by lex() called by expect()) expects there
        // to be a valid token after >, it needs to know whether to look for a
        // standard JS token or an XJS text node
        state.inXJSChild = origInXJSChild;
        state.inXJSTag = origInXJSTag;
        expect('>');
        return markerApply(marker, delegate.createXJSClosingElement(name));
    }

    function parseXJSOpeningElement() {
        var name, attribute, attributes = [], selfClosing = false, origInXJSChild, origInXJSTag, marker = markerCreate();

        origInXJSChild = state.inXJSChild;
        origInXJSTag = state.inXJSTag;
        state.inXJSChild = false;
        state.inXJSTag = true;

        expect('<');

        name = parseXJSElementName();

        while (index < length &&
                lookahead.value !== '/' &&
                lookahead.value !== '>') {
            attributes.push(parseXJSAttribute());
        }

        state.inXJSTag = origInXJSTag;

        if (lookahead.value === '/') {
            expect('/');
            // Because advance() (called by lex() called by expect()) expects
            // there to be a valid token after >, it needs to know whether to
            // look for a standard JS token or an XJS text node
            state.inXJSChild = origInXJSChild;
            expect('>');
            selfClosing = true;
        } else {
            state.inXJSChild = true;
            expect('>');
        }
        return markerApply(marker, delegate.createXJSOpeningElement(name, attributes, selfClosing));
    }

    function parseXJSElement() {
        var openingElement, closingElement = null, children = [], origInXJSChild, origInXJSTag, marker = markerCreate();

        origInXJSChild = state.inXJSChild;
        origInXJSTag = state.inXJSTag;
        openingElement = parseXJSOpeningElement();

        if (!openingElement.selfClosing) {
            while (index < length) {
                state.inXJSChild = false; // Call lookahead2() with inXJSChild = false because </ should not be considered in the child
                if (lookahead.value === '<' && lookahead2().value === '/') {
                    break;
                }
                state.inXJSChild = true;
                children.push(parseXJSChild());
            }
            state.inXJSChild = origInXJSChild;
            state.inXJSTag = origInXJSTag;
            closingElement = parseXJSClosingElement();
            if (getQualifiedXJSName(closingElement.name) !== getQualifiedXJSName(openingElement.name)) {
                throwError({}, Messages.ExpectedXJSClosingTag, getQualifiedXJSName(openingElement.name));
            }
        }

        // When (erroneously) writing two adjacent tags like
        //
        //     var x = <div>one</div><div>two</div>;
        //
        // the default error message is a bit incomprehensible. Since it's
        // rarely (never?) useful to write a less-than sign after an XJS
        // element, we disallow it here in the parser in order to provide a
        // better error message. (In the rare case that the less-than operator
        // was intended, the left tag can be wrapped in parentheses.)
        if (!origInXJSChild && match('<')) {
            throwError(lookahead, Messages.AdjacentXJSElements);
        }

        return markerApply(marker, delegate.createXJSElement(openingElement, closingElement, children));
    }

    function parseTypeAlias() {
        var id, marker = markerCreate(), typeParameters = null, right;
        expectContextualKeyword('type');
        id = parseVariableIdentifier();
        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }
        expect('=');
        right = parseType();
        consumeSemicolon();
        return markerApply(marker, delegate.createTypeAlias(id, typeParameters, right));
    }

    function parseInterfaceExtends() {
        var marker = markerCreate(), id, typeParameters = null;

        id = parseVariableIdentifier();
        if (match('<')) {
            typeParameters = parseTypeParameterInstantiation();
        }

        return markerApply(marker, delegate.createInterfaceExtends(
            id,
            typeParameters
        ));
    }

    function parseInterfaceish(marker, allowStatic) {
        var body, bodyMarker, extended = [], id,
            typeParameters = null;

        id = parseVariableIdentifier();
        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }

        if (matchKeyword('extends')) {
            expectKeyword('extends');

            while (index < length) {
                extended.push(parseInterfaceExtends());
                if (!match(',')) {
                    break;
                }
                expect(',');
            }
        }

        bodyMarker = markerCreate();
        body = markerApply(bodyMarker, parseObjectType(allowStatic));

        return markerApply(marker, delegate.createInterface(
            id,
            typeParameters,
            body,
            extended
        ));
    }

    function parseInterface() {
        var body, bodyMarker, extended = [], id, marker = markerCreate(),
            typeParameters = null;

        expectContextualKeyword('interface');
        return parseInterfaceish(marker, /* allowStatic */false);
    }

    function parseDeclareClass() {
        var marker = markerCreate(), ret;
        expectContextualKeyword('declare');
        expectKeyword('class');

        ret = parseInterfaceish(marker, /* allowStatic */true);
        ret.type = Syntax.DeclareClass;
        return ret;
    }

    function parseDeclareFunction() {
        var id, idMarker,
            marker = markerCreate(), params, returnType, rest, tmp,
            typeParameters = null, value, valueMarker;

        expectContextualKeyword('declare');
        expectKeyword('function');
        idMarker = markerCreate();
        id = parseVariableIdentifier();

        valueMarker = markerCreate();
        if (match('<')) {
            typeParameters = parseTypeParameterDeclaration();
        }
        expect('(');
        tmp = parseFunctionTypeParams();
        params = tmp.params;
        rest = tmp.rest;
        expect(')');

        expect(':');
        returnType = parseType();

        value = markerApply(valueMarker, delegate.createFunctionTypeAnnotation(
            params,
            returnType,
            rest,
            typeParameters
        ));

        id.typeAnnotation = markerApply(valueMarker, delegate.createTypeAnnotation(
            value
        ));
        markerApply(idMarker, id);

        consumeSemicolon();

        return markerApply(marker, delegate.createDeclareFunction(
            id
        ));
    }

    function parseDeclareVariable() {
        var id, marker = markerCreate();
        expectContextualKeyword('declare');
        expectKeyword('var');
        id = parseTypeAnnotatableIdentifier();

        consumeSemicolon();

        return markerApply(marker, delegate.createDeclareVariable(
            id
        ));
    }

    function parseDeclareModule() {
        var body = [], bodyMarker, id, idMarker, marker = markerCreate(), token;
        expectContextualKeyword('declare');
        expectContextualKeyword('module');

        if (lookahead.type === Token.StringLiteral) {
            if (strict && lookahead.octal) {
                throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
            }
            idMarker = markerCreate();
            id = markerApply(idMarker, delegate.createLiteral(lex()));
        } else {
            id = parseVariableIdentifier();
        }

        bodyMarker = markerCreate();
        expect('{');
        while (index < length && !match('}')) {
            token = lookahead2();
            switch (token.value) {
            case 'class':
                body.push(parseDeclareClass());
                break;
            case 'function':
                body.push(parseDeclareFunction());
                break;
            case 'var':
                body.push(parseDeclareVariable());
                break;
            default:
                throwUnexpected(lookahead);
            }
        }
        expect('}');

        return markerApply(marker, delegate.createDeclareModule(
            id,
            markerApply(bodyMarker, delegate.createBlockStatement(body))
        ));
    }

    function collectToken() {
        var start, loc, token, range, value, entry;

        /* istanbul ignore else */
        if (!state.inXJSChild) {
            skipComment();
        }

        start = index;
        loc = {
            start: {
                line: lineNumber,
                column: index - lineStart
            }
        };

        token = extra.advance();
        loc.end = {
            line: lineNumber,
            column: index - lineStart
        };

        if (token.type !== Token.EOF) {
            range = [token.range[0], token.range[1]];
            value = source.slice(token.range[0], token.range[1]);
            entry = {
                type: TokenName[token.type],
                value: value,
                range: range,
                loc: loc
            };
            if (token.regex) {
                entry.regex = {
                    pattern: token.regex.pattern,
                    flags: token.regex.flags
                };
            }
            extra.tokens.push(entry);
        }

        return token;
    }

    function collectRegex() {
        var pos, loc, regex, token;

        skipComment();

        pos = index;
        loc = {
            start: {
                line: lineNumber,
                column: index - lineStart
            }
        };

        regex = extra.scanRegExp();
        loc.end = {
            line: lineNumber,
            column: index - lineStart
        };

        if (!extra.tokenize) {
            /* istanbul ignore next */
            // Pop the previous token, which is likely '/' or '/='
            if (extra.tokens.length > 0) {
                token = extra.tokens[extra.tokens.length - 1];
                if (token.range[0] === pos && token.type === 'Punctuator') {
                    if (token.value === '/' || token.value === '/=') {
                        extra.tokens.pop();
                    }
                }
            }

            extra.tokens.push({
                type: 'RegularExpression',
                value: regex.literal,
                regex: regex.regex,
                range: [pos, index],
                loc: loc
            });
        }

        return regex;
    }

    function filterTokenLocation() {
        var i, entry, token, tokens = [];

        for (i = 0; i < extra.tokens.length; ++i) {
            entry = extra.tokens[i];
            token = {
                type: entry.type,
                value: entry.value
            };
            if (entry.regex) {
                token.regex = {
                    pattern: entry.regex.pattern,
                    flags: entry.regex.flags
                };
            }
            if (extra.range) {
                token.range = entry.range;
            }
            if (extra.loc) {
                token.loc = entry.loc;
            }
            tokens.push(token);
        }

        extra.tokens = tokens;
    }

    function patch() {
        if (extra.comments) {
            extra.skipComment = skipComment;
            skipComment = scanComment;
        }

        if (typeof extra.tokens !== 'undefined') {
            extra.advance = advance;
            extra.scanRegExp = scanRegExp;

            advance = collectToken;
            scanRegExp = collectRegex;
        }
    }

    function unpatch() {
        if (typeof extra.skipComment === 'function') {
            skipComment = extra.skipComment;
        }

        if (typeof extra.scanRegExp === 'function') {
            advance = extra.advance;
            scanRegExp = extra.scanRegExp;
        }
    }

    // This is used to modify the delegate.

    function extend(object, properties) {
        var entry, result = {};

        for (entry in object) {
            /* istanbul ignore else */
            if (object.hasOwnProperty(entry)) {
                result[entry] = object[entry];
            }
        }

        for (entry in properties) {
            /* istanbul ignore else */
            if (properties.hasOwnProperty(entry)) {
                result[entry] = properties[entry];
            }
        }

        return result;
    }

    function tokenize(code, options) {
        var toString,
            token,
            tokens;

        toString = String;
        if (typeof code !== 'string' && !(code instanceof String)) {
            code = toString(code);
        }

        delegate = SyntaxTreeDelegate;
        source = code;
        index = 0;
        lineNumber = (source.length > 0) ? 1 : 0;
        lineStart = 0;
        length = source.length;
        lookahead = null;
        state = {
            allowKeyword: true,
            allowIn: true,
            labelSet: new StringMap(),
            inFunctionBody: false,
            inIteration: false,
            inSwitch: false,
            lastCommentStart: -1
        };

        extra = {};

        // Options matching.
        options = options || {};

        // Of course we collect tokens here.
        options.tokens = true;
        extra.tokens = [];
        extra.tokenize = true;
        // The following two fields are necessary to compute the Regex tokens.
        extra.openParenToken = -1;
        extra.openCurlyToken = -1;

        extra.range = (typeof options.range === 'boolean') && options.range;
        extra.loc = (typeof options.loc === 'boolean') && options.loc;

        if (typeof options.comment === 'boolean' && options.comment) {
            extra.comments = [];
        }
        if (typeof options.tolerant === 'boolean' && options.tolerant) {
            extra.errors = [];
        }

        patch();

        try {
            peek();
            if (lookahead.type === Token.EOF) {
                return extra.tokens;
            }

            token = lex();
            while (lookahead.type !== Token.EOF) {
                try {
                    token = lex();
                } catch (lexError) {
                    token = lookahead;
                    if (extra.errors) {
                        extra.errors.push(lexError);
                        // We have to break on the first error
                        // to avoid infinite loops.
                        break;
                    } else {
                        throw lexError;
                    }
                }
            }

            filterTokenLocation();
            tokens = extra.tokens;
            if (typeof extra.comments !== 'undefined') {
                tokens.comments = extra.comments;
            }
            if (typeof extra.errors !== 'undefined') {
                tokens.errors = extra.errors;
            }
        } catch (e) {
            throw e;
        } finally {
            unpatch();
            extra = {};
        }
        return tokens;
    }

    function parse(code, options) {
        var program, toString;

        toString = String;
        if (typeof code !== 'string' && !(code instanceof String)) {
            code = toString(code);
        }

        delegate = SyntaxTreeDelegate;
        source = code;
        index = 0;
        lineNumber = (source.length > 0) ? 1 : 0;
        lineStart = 0;
        length = source.length;
        lookahead = null;
        state = {
            allowKeyword: false,
            allowIn: true,
            labelSet: new StringMap(),
            parenthesizedCount: 0,
            inFunctionBody: false,
            inIteration: false,
            inSwitch: false,
            inXJSChild: false,
            inXJSTag: false,
            inType: false,
            lastCommentStart: -1,
            yieldAllowed: false,
            awaitAllowed: false
        };

        extra = {};
        if (typeof options !== 'undefined') {
            extra.range = (typeof options.range === 'boolean') && options.range;
            extra.loc = (typeof options.loc === 'boolean') && options.loc;
            extra.attachComment = (typeof options.attachComment === 'boolean') && options.attachComment;

            if (extra.loc && options.source !== null && options.source !== undefined) {
                delegate = extend(delegate, {
                    'postProcess': function (node) {
                        node.loc.source = toString(options.source);
                        return node;
                    }
                });
            }

            if (options.sourceType === 'module') {
                extra.isModule = true;
            }
            if (typeof options.tokens === 'boolean' && options.tokens) {
                extra.tokens = [];
            }
            if (typeof options.comment === 'boolean' && options.comment) {
                extra.comments = [];
            }
            if (typeof options.tolerant === 'boolean' && options.tolerant) {
                extra.errors = [];
            }
            if (extra.attachComment) {
                extra.range = true;
                extra.comments = [];
                extra.bottomRightStack = [];
                extra.trailingComments = [];
                extra.leadingComments = [];
            }
        }

        patch();
        try {
            program = parseProgram();
            if (typeof extra.comments !== 'undefined') {
                program.comments = extra.comments;
            }
            if (typeof extra.tokens !== 'undefined') {
                filterTokenLocation();
                program.tokens = extra.tokens;
            }
            if (typeof extra.errors !== 'undefined') {
                program.errors = extra.errors;
            }
        } catch (e) {
            throw e;
        } finally {
            unpatch();
            extra = {};
        }

        return program;
    }

    // Sync with *.json manifests.
    exports.version = '8001.2001.0-dev-harmony-fb';

    exports.tokenize = tokenize;

    exports.parse = parse;

    // Deep copy.
   /* istanbul ignore next */
    exports.Syntax = (function () {
        var name, types = {};

        if (typeof Object.create === 'function') {
            types = Object.create(null);
        }

        for (name in Syntax) {
            if (Syntax.hasOwnProperty(name)) {
                types[name] = Syntax[name];
            }
        }

        if (typeof Object.freeze === 'function') {
            Object.freeze(types);
        }

        return types;
    }());

}));
/* vim: set sw=4 ts=4 et tw=80 : */

},{}],22:[function(require,module,exports){
/*
  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
  Copyright (C) 2013 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*jslint bitwise:true plusplus:true */
/*global esprima:true, define:true, exports:true, window: true,
throwErrorTolerant: true,
throwError: true, generateStatement: true, peek: true,
parseAssignmentExpression: true, parseBlock: true, parseExpression: true,
parseFunctionDeclaration: true, parseFunctionExpression: true,
parseFunctionSourceElements: true, parseVariableIdentifier: true,
parseLeftHandSideExpression: true,
parseUnaryExpression: true,
parseStatement: true, parseSourceElement: true */

(function (root, factory) {
    'use strict';

    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
    // Rhino, and plain browser loading.

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.esprima = {}));
    }
}(this, function (exports) {
    'use strict';

    var Token,
        TokenName,
        FnExprTokens,
        Syntax,
        PropertyKind,
        Messages,
        Regex,
        SyntaxTreeDelegate,
        source,
        strict,
        index,
        lineNumber,
        lineStart,
        length,
        delegate,
        lookahead,
        state,
        extra;

    Token = {
        BooleanLiteral: 1,
        EOF: 2,
        Identifier: 3,
        Keyword: 4,
        NullLiteral: 5,
        NumericLiteral: 6,
        Punctuator: 7,
        StringLiteral: 8,
        RegularExpression: 9
    };

    TokenName = {};
    TokenName[Token.BooleanLiteral] = 'Boolean';
    TokenName[Token.EOF] = '<end>';
    TokenName[Token.Identifier] = 'Identifier';
    TokenName[Token.Keyword] = 'Keyword';
    TokenName[Token.NullLiteral] = 'Null';
    TokenName[Token.NumericLiteral] = 'Numeric';
    TokenName[Token.Punctuator] = 'Punctuator';
    TokenName[Token.StringLiteral] = 'String';
    TokenName[Token.RegularExpression] = 'RegularExpression';

    // A function following one of those tokens is an expression.
    FnExprTokens = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
                    'return', 'case', 'delete', 'throw', 'void',
                    // assignment operators
                    '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=',
                    '&=', '|=', '^=', ',',
                    // binary/unary operators
                    '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
                    '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
                    '<=', '<', '>', '!=', '!=='];

    Syntax = {
        AssignmentExpression: 'AssignmentExpression',
        ArrayExpression: 'ArrayExpression',
        BlockStatement: 'BlockStatement',
        BinaryExpression: 'BinaryExpression',
        BreakStatement: 'BreakStatement',
        CallExpression: 'CallExpression',
        CatchClause: 'CatchClause',
        ConditionalExpression: 'ConditionalExpression',
        ContinueStatement: 'ContinueStatement',
        DoWhileStatement: 'DoWhileStatement',
        DebuggerStatement: 'DebuggerStatement',
        EmptyStatement: 'EmptyStatement',
        ExpressionStatement: 'ExpressionStatement',
        ForStatement: 'ForStatement',
        ForInStatement: 'ForInStatement',
        FunctionDeclaration: 'FunctionDeclaration',
        FunctionExpression: 'FunctionExpression',
        Identifier: 'Identifier',
        IfStatement: 'IfStatement',
        Literal: 'Literal',
        LabeledStatement: 'LabeledStatement',
        LogicalExpression: 'LogicalExpression',
        MemberExpression: 'MemberExpression',
        NewExpression: 'NewExpression',
        ObjectExpression: 'ObjectExpression',
        Program: 'Program',
        Property: 'Property',
        ReturnStatement: 'ReturnStatement',
        SequenceExpression: 'SequenceExpression',
        SwitchStatement: 'SwitchStatement',
        SwitchCase: 'SwitchCase',
        ThisExpression: 'ThisExpression',
        ThrowStatement: 'ThrowStatement',
        TryStatement: 'TryStatement',
        UnaryExpression: 'UnaryExpression',
        UpdateExpression: 'UpdateExpression',
        VariableDeclaration: 'VariableDeclaration',
        VariableDeclarator: 'VariableDeclarator',
        WhileStatement: 'WhileStatement',
        WithStatement: 'WithStatement'
    };

    PropertyKind = {
        Data: 1,
        Get: 2,
        Set: 4
    };

    // Error messages should be identical to V8.
    Messages = {
        UnexpectedToken:  'Unexpected token %0',
        UnexpectedNumber:  'Unexpected number',
        UnexpectedString:  'Unexpected string',
        UnexpectedIdentifier:  'Unexpected identifier',
        UnexpectedReserved:  'Unexpected reserved word',
        UnexpectedEOS:  'Unexpected end of input',
        NewlineAfterThrow:  'Illegal newline after throw',
        InvalidRegExp: 'Invalid regular expression',
        UnterminatedRegExp:  'Invalid regular expression: missing /',
        InvalidLHSInAssignment:  'Invalid left-hand side in assignment',
        InvalidLHSInForIn:  'Invalid left-hand side in for-in',
        MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
        NoCatchOrFinally:  'Missing catch or finally after try',
        UnknownLabel: 'Undefined label \'%0\'',
        Redeclaration: '%0 \'%1\' has already been declared',
        IllegalContinue: 'Illegal continue statement',
        IllegalBreak: 'Illegal break statement',
        IllegalReturn: 'Illegal return statement',
        StrictModeWith:  'Strict mode code may not include a with statement',
        StrictCatchVariable:  'Catch variable may not be eval or arguments in strict mode',
        StrictVarName:  'Variable name may not be eval or arguments in strict mode',
        StrictParamName:  'Parameter name eval or arguments is not allowed in strict mode',
        StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
        StrictFunctionName:  'Function name may not be eval or arguments in strict mode',
        StrictOctalLiteral:  'Octal literals are not allowed in strict mode.',
        StrictDelete:  'Delete of an unqualified identifier in strict mode.',
        StrictDuplicateProperty:  'Duplicate data property in object literal not allowed in strict mode',
        AccessorDataProperty:  'Object literal may not have data and accessor property with the same name',
        AccessorGetSet:  'Object literal may not have multiple get/set accessors with the same name',
        StrictLHSAssignment:  'Assignment to eval or arguments is not allowed in strict mode',
        StrictLHSPostfix:  'Postfix increment/decrement may not have eval or arguments operand in strict mode',
        StrictLHSPrefix:  'Prefix increment/decrement may not have eval or arguments operand in strict mode',
        StrictReservedWord:  'Use of future reserved word in strict mode'
    };

    // See also tools/generate-unicode-regex.py.
    Regex = {
        NonAsciiIdentifierStart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]'),
        NonAsciiIdentifierPart: new RegExp('[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0\u08A2-\u08AC\u08E4-\u08FE\u0900-\u0963\u0966-\u096F\u0971-\u0977\u0979-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191C\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1D00-\u1DE6\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA697\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7B\uAA80-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]')
    };

    // Ensure the condition is true, otherwise throw an error.
    // This is only to have a better contract semantic, i.e. another safety net
    // to catch a logic error. The condition shall be fulfilled in normal case.
    // Do NOT use this to enforce a certain condition on any user input.

    function assert(condition, message) {
        /* istanbul ignore if */
        if (!condition) {
            throw new Error('ASSERT: ' + message);
        }
    }

    function isDecimalDigit(ch) {
        return (ch >= 48 && ch <= 57);   // 0..9
    }

    function isHexDigit(ch) {
        return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
    }

    function isOctalDigit(ch) {
        return '01234567'.indexOf(ch) >= 0;
    }


    // 7.2 White Space

    function isWhiteSpace(ch) {
        return (ch === 0x20) || (ch === 0x09) || (ch === 0x0B) || (ch === 0x0C) || (ch === 0xA0) ||
            (ch >= 0x1680 && [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(ch) >= 0);
    }

    // 7.3 Line Terminators

    function isLineTerminator(ch) {
        return (ch === 0x0A) || (ch === 0x0D) || (ch === 0x2028) || (ch === 0x2029);
    }

    // 7.6 Identifier Names and Identifiers

    function isIdentifierStart(ch) {
        return (ch === 0x24) || (ch === 0x5F) ||  // $ (dollar) and _ (underscore)
            (ch >= 0x41 && ch <= 0x5A) ||         // A..Z
            (ch >= 0x61 && ch <= 0x7A) ||         // a..z
            (ch === 0x5C) ||                      // \ (backslash)
            ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch)));
    }

    function isIdentifierPart(ch) {
        return (ch === 0x24) || (ch === 0x5F) ||  // $ (dollar) and _ (underscore)
            (ch >= 0x41 && ch <= 0x5A) ||         // A..Z
            (ch >= 0x61 && ch <= 0x7A) ||         // a..z
            (ch >= 0x30 && ch <= 0x39) ||         // 0..9
            (ch === 0x5C) ||                      // \ (backslash)
            ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
    }

    // 7.6.1.2 Future Reserved Words

    function isFutureReservedWord(id) {
        switch (id) {
        case 'class':
        case 'enum':
        case 'export':
        case 'extends':
        case 'import':
        case 'super':
            return true;
        default:
            return false;
        }
    }

    function isStrictModeReservedWord(id) {
        switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'yield':
        case 'let':
            return true;
        default:
            return false;
        }
    }

    function isRestrictedWord(id) {
        return id === 'eval' || id === 'arguments';
    }

    // 7.6.1.1 Keywords

    function isKeyword(id) {
        if (strict && isStrictModeReservedWord(id)) {
            return true;
        }

        // 'const' is specialized as Keyword in V8.
        // 'yield' and 'let' are for compatiblity with SpiderMonkey and ES.next.
        // Some others are from future reserved words.

        switch (id.length) {
        case 2:
            return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
            return (id === 'var') || (id === 'for') || (id === 'new') ||
                (id === 'try') || (id === 'let');
        case 4:
            return (id === 'this') || (id === 'else') || (id === 'case') ||
                (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
            return (id === 'while') || (id === 'break') || (id === 'catch') ||
                (id === 'throw') || (id === 'const') || (id === 'yield') ||
                (id === 'class') || (id === 'super');
        case 6:
            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
            return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
            return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
            return (id === 'instanceof');
        default:
            return false;
        }
    }

    // 7.4 Comments

    function addComment(type, value, start, end, loc) {
        var comment, attacher;

        assert(typeof start === 'number', 'Comment must have valid position');

        // Because the way the actual token is scanned, often the comments
        // (if any) are skipped twice during the lexical analysis.
        // Thus, we need to skip adding a comment if the comment array already
        // handled it.
        if (state.lastCommentStart >= start) {
            return;
        }
        state.lastCommentStart = start;

        comment = {
            type: type,
            value: value
        };
        if (extra.range) {
            comment.range = [start, end];
        }
        if (extra.loc) {
            comment.loc = loc;
        }
        extra.comments.push(comment);
        if (extra.attachComment) {
            extra.leadingComments.push(comment);
            extra.trailingComments.push(comment);
        }
    }

    function skipSingleLineComment(offset) {
        var start, loc, ch, comment;

        start = index - offset;
        loc = {
            start: {
                line: lineNumber,
                column: index - lineStart - offset
            }
        };

        while (index < length) {
            ch = source.charCodeAt(index);
            ++index;
            if (isLineTerminator(ch)) {
                if (extra.comments) {
                    comment = source.slice(start + offset, index - 1);
                    loc.end = {
                        line: lineNumber,
                        column: index - lineStart - 1
                    };
                    addComment('Line', comment, start, index - 1, loc);
                }
                if (ch === 13 && source.charCodeAt(index) === 10) {
                    ++index;
                }
                ++lineNumber;
                lineStart = index;
                return;
            }
        }

        if (extra.comments) {
            comment = source.slice(start + offset, index);
            loc.end = {
                line: lineNumber,
                column: index - lineStart
            };
            addComment('Line', comment, start, index, loc);
        }
    }

    function skipMultiLineComment() {
        var start, loc, ch, comment;

        if (extra.comments) {
            start = index - 2;
            loc = {
                start: {
                    line: lineNumber,
                    column: index - lineStart - 2
                }
            };
        }

        while (index < length) {
            ch = source.charCodeAt(index);
            if (isLineTerminator(ch)) {
                if (ch === 0x0D && source.charCodeAt(index + 1) === 0x0A) {
                    ++index;
                }
                ++lineNumber;
                ++index;
                lineStart = index;
                if (index >= length) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
            } else if (ch === 0x2A) {
                // Block comment ends with '*/'.
                if (source.charCodeAt(index + 1) === 0x2F) {
                    ++index;
                    ++index;
                    if (extra.comments) {
                        comment = source.slice(start + 2, index - 2);
                        loc.end = {
                            line: lineNumber,
                            column: index - lineStart
                        };
                        addComment('Block', comment, start, index, loc);
                    }
                    return;
                }
                ++index;
            } else {
                ++index;
            }
        }

        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }

    function skipComment() {
        var ch, start;

        start = (index === 0);
        while (index < length) {
            ch = source.charCodeAt(index);

            if (isWhiteSpace(ch)) {
                ++index;
            } else if (isLineTerminator(ch)) {
                ++index;
                if (ch === 0x0D && source.charCodeAt(index) === 0x0A) {
                    ++index;
                }
                ++lineNumber;
                lineStart = index;
                start = true;
            } else if (ch === 0x2F) { // U+002F is '/'
                ch = source.charCodeAt(index + 1);
                if (ch === 0x2F) {
                    ++index;
                    ++index;
                    skipSingleLineComment(2);
                    start = true;
                } else if (ch === 0x2A) {  // U+002A is '*'
                    ++index;
                    ++index;
                    skipMultiLineComment();
                } else {
                    break;
                }
            } else if (start && ch === 0x2D) { // U+002D is '-'
                // U+003E is '>'
                if ((source.charCodeAt(index + 1) === 0x2D) && (source.charCodeAt(index + 2) === 0x3E)) {
                    // '-->' is a single-line comment
                    index += 3;
                    skipSingleLineComment(3);
                } else {
                    break;
                }
            } else if (ch === 0x3C) { // U+003C is '<'
                if (source.slice(index + 1, index + 4) === '!--') {
                    ++index; // `<`
                    ++index; // `!`
                    ++index; // `-`
                    ++index; // `-`
                    skipSingleLineComment(4);
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    }

    function scanHexEscape(prefix) {
        var i, len, ch, code = 0;

        len = (prefix === 'u') ? 4 : 2;
        for (i = 0; i < len; ++i) {
            if (index < length && isHexDigit(source[index])) {
                ch = source[index++];
                code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
            } else {
                return '';
            }
        }
        return String.fromCharCode(code);
    }

    function getEscapedIdentifier() {
        var ch, id;

        ch = source.charCodeAt(index++);
        id = String.fromCharCode(ch);

        // '\u' (U+005C, U+0075) denotes an escaped character.
        if (ch === 0x5C) {
            if (source.charCodeAt(index) !== 0x75) {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
            ++index;
            ch = scanHexEscape('u');
            if (!ch || ch === '\\' || !isIdentifierStart(ch.charCodeAt(0))) {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
            id = ch;
        }

        while (index < length) {
            ch = source.charCodeAt(index);
            if (!isIdentifierPart(ch)) {
                break;
            }
            ++index;
            id += String.fromCharCode(ch);

            // '\u' (U+005C, U+0075) denotes an escaped character.
            if (ch === 0x5C) {
                id = id.substr(0, id.length - 1);
                if (source.charCodeAt(index) !== 0x75) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
                ++index;
                ch = scanHexEscape('u');
                if (!ch || ch === '\\' || !isIdentifierPart(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
                id += ch;
            }
        }

        return id;
    }

    function getIdentifier() {
        var start, ch;

        start = index++;
        while (index < length) {
            ch = source.charCodeAt(index);
            if (ch === 0x5C) {
                // Blackslash (U+005C) marks Unicode escape sequence.
                index = start;
                return getEscapedIdentifier();
            }
            if (isIdentifierPart(ch)) {
                ++index;
            } else {
                break;
            }
        }

        return source.slice(start, index);
    }

    function scanIdentifier() {
        var start, id, type;

        start = index;

        // Backslash (U+005C) starts an escaped character.
        id = (source.charCodeAt(index) === 0x5C) ? getEscapedIdentifier() : getIdentifier();

        // There is no keyword or literal with only one character.
        // Thus, it must be an identifier.
        if (id.length === 1) {
            type = Token.Identifier;
        } else if (isKeyword(id)) {
            type = Token.Keyword;
        } else if (id === 'null') {
            type = Token.NullLiteral;
        } else if (id === 'true' || id === 'false') {
            type = Token.BooleanLiteral;
        } else {
            type = Token.Identifier;
        }

        return {
            type: type,
            value: id,
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
        };
    }


    // 7.7 Punctuators

    function scanPunctuator() {
        var start = index,
            code = source.charCodeAt(index),
            code2,
            ch1 = source[index],
            ch2,
            ch3,
            ch4;

        switch (code) {

        // Check for most common single-character punctuators.
        case 0x2E:  // . dot
        case 0x28:  // ( open bracket
        case 0x29:  // ) close bracket
        case 0x3B:  // ; semicolon
        case 0x2C:  // , comma
        case 0x7B:  // { open curly brace
        case 0x7D:  // } close curly brace
        case 0x5B:  // [
        case 0x5D:  // ]
        case 0x3A:  // :
        case 0x3F:  // ?
        case 0x7E:  // ~
            ++index;
            if (extra.tokenize) {
                if (code === 0x28) {
                    extra.openParenToken = extra.tokens.length;
                } else if (code === 0x7B) {
                    extra.openCurlyToken = extra.tokens.length;
                }
            }
            return {
                type: Token.Punctuator,
                value: String.fromCharCode(code),
                lineNumber: lineNumber,
                lineStart: lineStart,
                start: start,
                end: index
            };

        default:
            code2 = source.charCodeAt(index + 1);

            // '=' (U+003D) marks an assignment or comparison operator.
            if (code2 === 0x3D) {
                switch (code) {
                case 0x2B:  // +
                case 0x2D:  // -
                case 0x2F:  // /
                case 0x3C:  // <
                case 0x3E:  // >
                case 0x5E:  // ^
                case 0x7C:  // |
                case 0x25:  // %
                case 0x26:  // &
                case 0x2A:  // *
                    index += 2;
                    return {
                        type: Token.Punctuator,
                        value: String.fromCharCode(code) + String.fromCharCode(code2),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        start: start,
                        end: index
                    };

                case 0x21: // !
                case 0x3D: // =
                    index += 2;

                    // !== and ===
                    if (source.charCodeAt(index) === 0x3D) {
                        ++index;
                    }
                    return {
                        type: Token.Punctuator,
                        value: source.slice(start, index),
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        start: start,
                        end: index
                    };
                }
            }
        }

        // 4-character punctuator: >>>=

        ch4 = source.substr(index, 4);

        if (ch4 === '>>>=') {
            index += 4;
            return {
                type: Token.Punctuator,
                value: ch4,
                lineNumber: lineNumber,
                lineStart: lineStart,
                start: start,
                end: index
            };
        }

        // 3-character punctuators: === !== >>> <<= >>=

        ch3 = ch4.substr(0, 3);

        if (ch3 === '>>>' || ch3 === '<<=' || ch3 === '>>=') {
            index += 3;
            return {
                type: Token.Punctuator,
                value: ch3,
                lineNumber: lineNumber,
                lineStart: lineStart,
                start: start,
                end: index
            };
        }

        // Other 2-character punctuators: ++ -- << >> && ||
        ch2 = ch3.substr(0, 2);

        if ((ch1 === ch2[1] && ('+-<>&|'.indexOf(ch1) >= 0)) || ch2 === '=>') {
            index += 2;
            return {
                type: Token.Punctuator,
                value: ch2,
                lineNumber: lineNumber,
                lineStart: lineStart,
                start: start,
                end: index
            };
        }

        // 1-character punctuators: < > = ! + - * % & | ^ /
        if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
            ++index;
            return {
                type: Token.Punctuator,
                value: ch1,
                lineNumber: lineNumber,
                lineStart: lineStart,
                start: start,
                end: index
            };
        }

        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }

    // 7.8.3 Numeric Literals

    function scanHexLiteral(start) {
        var number = '';

        while (index < length) {
            if (!isHexDigit(source[index])) {
                break;
            }
            number += source[index++];
        }

        if (number.length === 0) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        if (isIdentifierStart(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseInt('0x' + number, 16),
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
        };
    }

    function scanOctalLiteral(start) {
        var number = '0' + source[index++];
        while (index < length) {
            if (!isOctalDigit(source[index])) {
                break;
            }
            number += source[index++];
        }

        if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseInt(number, 8),
            octal: true,
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
        };
    }

    function scanNumericLiteral() {
        var number, start, ch;

        ch = source[index];
        assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'),
            'Numeric literal must start with a decimal digit or a decimal point');

        start = index;
        number = '';
        if (ch !== '.') {
            number = source[index++];
            ch = source[index];

            // Hex number starts with '0x'.
            // Octal number starts with '0'.
            if (number === '0') {
                if (ch === 'x' || ch === 'X') {
                    ++index;
                    return scanHexLiteral(start);
                }
                if (isOctalDigit(ch)) {
                    return scanOctalLiteral(start);
                }

                // decimal number starts with '0' such as '09' is illegal.
                if (ch && isDecimalDigit(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
            }

            while (isDecimalDigit(source.charCodeAt(index))) {
                number += source[index++];
            }
            ch = source[index];
        }

        if (ch === '.') {
            number += source[index++];
            while (isDecimalDigit(source.charCodeAt(index))) {
                number += source[index++];
            }
            ch = source[index];
        }

        if (ch === 'e' || ch === 'E') {
            number += source[index++];

            ch = source[index];
            if (ch === '+' || ch === '-') {
                number += source[index++];
            }
            if (isDecimalDigit(source.charCodeAt(index))) {
                while (isDecimalDigit(source.charCodeAt(index))) {
                    number += source[index++];
                }
            } else {
                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
        }

        if (isIdentifierStart(source.charCodeAt(index))) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.NumericLiteral,
            value: parseFloat(number),
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
        };
    }

    // 7.8.4 String Literals

    function scanStringLiteral() {
        var str = '', quote, start, ch, code, unescaped, restore, octal = false, startLineNumber, startLineStart;
        startLineNumber = lineNumber;
        startLineStart = lineStart;

        quote = source[index];
        assert((quote === '\'' || quote === '"'),
            'String literal must starts with a quote');

        start = index;
        ++index;

        while (index < length) {
            ch = source[index++];

            if (ch === quote) {
                quote = '';
                break;
            } else if (ch === '\\') {
                ch = source[index++];
                if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
                    switch (ch) {
                    case 'u':
                    case 'x':
                        restore = index;
                        unescaped = scanHexEscape(ch);
                        if (unescaped) {
                            str += unescaped;
                        } else {
                            index = restore;
                            str += ch;
                        }
                        break;
                    case 'n':
                        str += '\n';
                        break;
                    case 'r':
                        str += '\r';
                        break;
                    case 't':
                        str += '\t';
                        break;
                    case 'b':
                        str += '\b';
                        break;
                    case 'f':
                        str += '\f';
                        break;
                    case 'v':
                        str += '\x0B';
                        break;

                    default:
                        if (isOctalDigit(ch)) {
                            code = '01234567'.indexOf(ch);

                            // \0 is not octal escape sequence
                            if (code !== 0) {
                                octal = true;
                            }

                            if (index < length && isOctalDigit(source[index])) {
                                octal = true;
                                code = code * 8 + '01234567'.indexOf(source[index++]);

                                // 3 digits are only allowed when string starts
                                // with 0, 1, 2, 3
                                if ('0123'.indexOf(ch) >= 0 &&
                                        index < length &&
                                        isOctalDigit(source[index])) {
                                    code = code * 8 + '01234567'.indexOf(source[index++]);
                                }
                            }
                            str += String.fromCharCode(code);
                        } else {
                            str += ch;
                        }
                        break;
                    }
                } else {
                    ++lineNumber;
                    if (ch ===  '\r' && source[index] === '\n') {
                        ++index;
                    }
                    lineStart = index;
                }
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                break;
            } else {
                str += ch;
            }
        }

        if (quote !== '') {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }

        return {
            type: Token.StringLiteral,
            value: str,
            octal: octal,
            startLineNumber: startLineNumber,
            startLineStart: startLineStart,
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
        };
    }

    function testRegExp(pattern, flags) {
        var value;
        try {
            value = new RegExp(pattern, flags);
        } catch (e) {
            throwError({}, Messages.InvalidRegExp);
        }
        return value;
    }

    function scanRegExpBody() {
        var ch, str, classMarker, terminated, body;

        ch = source[index];
        assert(ch === '/', 'Regular expression literal must start with a slash');
        str = source[index++];

        classMarker = false;
        terminated = false;
        while (index < length) {
            ch = source[index++];
            str += ch;
            if (ch === '\\') {
                ch = source[index++];
                // ECMA-262 7.8.5
                if (isLineTerminator(ch.charCodeAt(0))) {
                    throwError({}, Messages.UnterminatedRegExp);
                }
                str += ch;
            } else if (isLineTerminator(ch.charCodeAt(0))) {
                throwError({}, Messages.UnterminatedRegExp);
            } else if (classMarker) {
                if (ch === ']') {
                    classMarker = false;
                }
            } else {
                if (ch === '/') {
                    terminated = true;
                    break;
                } else if (ch === '[') {
                    classMarker = true;
                }
            }
        }

        if (!terminated) {
            throwError({}, Messages.UnterminatedRegExp);
        }

        // Exclude leading and trailing slash.
        body = str.substr(1, str.length - 2);
        return {
            value: body,
            literal: str
        };
    }

    function scanRegExpFlags() {
        var ch, str, flags, restore;

        str = '';
        flags = '';
        while (index < length) {
            ch = source[index];
            if (!isIdentifierPart(ch.charCodeAt(0))) {
                break;
            }

            ++index;
            if (ch === '\\' && index < length) {
                ch = source[index];
                if (ch === 'u') {
                    ++index;
                    restore = index;
                    ch = scanHexEscape('u');
                    if (ch) {
                        flags += ch;
                        for (str += '\\u'; restore < index; ++restore) {
                            str += source[restore];
                        }
                    } else {
                        index = restore;
                        flags += 'u';
                        str += '\\u';
                    }
                    throwErrorTolerant({}, Messages.UnexpectedToken, 'ILLEGAL');
                } else {
                    str += '\\';
                    throwErrorTolerant({}, Messages.UnexpectedToken, 'ILLEGAL');
                }
            } else {
                flags += ch;
                str += ch;
            }
        }

        return {
            value: flags,
            literal: str
        };
    }

    function scanRegExp() {
        var start, body, flags, pattern, value;

        lookahead = null;
        skipComment();
        start = index;

        body = scanRegExpBody();
        flags = scanRegExpFlags();
        value = testRegExp(body.value, flags.value);

        if (extra.tokenize) {
            return {
                type: Token.RegularExpression,
                value: value,
                lineNumber: lineNumber,
                lineStart: lineStart,
                start: start,
                end: index
            };
        }

        return {
            literal: body.literal + flags.literal,
            value: value,
            start: start,
            end: index
        };
    }

    function collectRegex() {
        var pos, loc, regex, token;

        skipComment();

        pos = index;
        loc = {
            start: {
                line: lineNumber,
                column: index - lineStart
            }
        };

        regex = scanRegExp();
        loc.end = {
            line: lineNumber,
            column: index - lineStart
        };

        /* istanbul ignore next */
        if (!extra.tokenize) {
            // Pop the previous token, which is likely '/' or '/='
            if (extra.tokens.length > 0) {
                token = extra.tokens[extra.tokens.length - 1];
                if (token.range[0] === pos && token.type === 'Punctuator') {
                    if (token.value === '/' || token.value === '/=') {
                        extra.tokens.pop();
                    }
                }
            }

            extra.tokens.push({
                type: 'RegularExpression',
                value: regex.literal,
                range: [pos, index],
                loc: loc
            });
        }

        return regex;
    }

    function isIdentifierName(token) {
        return token.type === Token.Identifier ||
            token.type === Token.Keyword ||
            token.type === Token.BooleanLiteral ||
            token.type === Token.NullLiteral;
    }

    function advanceSlash() {
        var prevToken,
            checkToken;
        // Using the following algorithm:
        // https://github.com/mozilla/sweet.js/wiki/design
        prevToken = extra.tokens[extra.tokens.length - 1];
        if (!prevToken) {
            // Nothing before that: it cannot be a division.
            return collectRegex();
        }
        if (prevToken.type === 'Punctuator') {
            if (prevToken.value === ']') {
                return scanPunctuator();
            }
            if (prevToken.value === ')') {
                checkToken = extra.tokens[extra.openParenToken - 1];
                if (checkToken &&
                        checkToken.type === 'Keyword' &&
                        (checkToken.value === 'if' ||
                         checkToken.value === 'while' ||
                         checkToken.value === 'for' ||
                         checkToken.value === 'with')) {
                    return collectRegex();
                }
                return scanPunctuator();
            }
            if (prevToken.value === '}') {
                // Dividing a function by anything makes little sense,
                // but we have to check for that.
                if (extra.tokens[extra.openCurlyToken - 3] &&
                        extra.tokens[extra.openCurlyToken - 3].type === 'Keyword') {
                    // Anonymous function.
                    checkToken = extra.tokens[extra.openCurlyToken - 4];
                    if (!checkToken) {
                        return scanPunctuator();
                    }
                } else if (extra.tokens[extra.openCurlyToken - 4] &&
                        extra.tokens[extra.openCurlyToken - 4].type === 'Keyword') {
                    // Named function.
                    checkToken = extra.tokens[extra.openCurlyToken - 5];
                    if (!checkToken) {
                        return collectRegex();
                    }
                } else {
                    return scanPunctuator();
                }
                // checkToken determines whether the function is
                // a declaration or an expression.
                if (FnExprTokens.indexOf(checkToken.value) >= 0) {
                    // It is an expression.
                    return scanPunctuator();
                }
                // It is a declaration.
                return collectRegex();
            }
            return collectRegex();
        }
        if (prevToken.type === 'Keyword' && prevToken.value !== 'this') {
            return collectRegex();
        }
        return scanPunctuator();
    }

    function advance() {
        var ch;

        skipComment();

        if (index >= length) {
            return {
                type: Token.EOF,
                lineNumber: lineNumber,
                lineStart: lineStart,
                start: index,
                end: index
            };
        }

        ch = source.charCodeAt(index);

        if (isIdentifierStart(ch)) {
            return scanIdentifier();
        }

        // Very common: ( and ) and ;
        if (ch === 0x28 || ch === 0x29 || ch === 0x3B) {
            return scanPunctuator();
        }

        // String literal starts with single quote (U+0027) or double quote (U+0022).
        if (ch === 0x27 || ch === 0x22) {
            return scanStringLiteral();
        }


        // Dot (.) U+002E can also start a floating-point number, hence the need
        // to check the next character.
        if (ch === 0x2E) {
            if (isDecimalDigit(source.charCodeAt(index + 1))) {
                return scanNumericLiteral();
            }
            return scanPunctuator();
        }

        if (isDecimalDigit(ch)) {
            return scanNumericLiteral();
        }

        // Slash (/) U+002F can also start a regex.
        if (extra.tokenize && ch === 0x2F) {
            return advanceSlash();
        }

        return scanPunctuator();
    }

    function collectToken() {
        var loc, token, range, value;

        skipComment();
        loc = {
            start: {
                line: lineNumber,
                column: index - lineStart
            }
        };

        token = advance();
        loc.end = {
            line: lineNumber,
            column: index - lineStart
        };

        if (token.type !== Token.EOF) {
            value = source.slice(token.start, token.end);
            extra.tokens.push({
                type: TokenName[token.type],
                value: value,
                range: [token.start, token.end],
                loc: loc
            });
        }

        return token;
    }

    function lex() {
        var token;

        token = lookahead;
        index = token.end;
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;

        lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();

        index = token.end;
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;

        return token;
    }

    function peek() {
        var pos, line, start;

        pos = index;
        line = lineNumber;
        start = lineStart;
        lookahead = (typeof extra.tokens !== 'undefined') ? collectToken() : advance();
        index = pos;
        lineNumber = line;
        lineStart = start;
    }

    function Position(line, column) {
        this.line = line;
        this.column = column;
    }

    function SourceLocation(startLine, startColumn, line, column) {
        this.start = new Position(startLine, startColumn);
        this.end = new Position(line, column);
    }

    SyntaxTreeDelegate = {

        name: 'SyntaxTree',

        processComment: function (node) {
            var lastChild, trailingComments;

            if (node.type === Syntax.Program) {
                if (node.body.length > 0) {
                    return;
                }
            }

            if (extra.trailingComments.length > 0) {
                if (extra.trailingComments[0].range[0] >= node.range[1]) {
                    trailingComments = extra.trailingComments;
                    extra.trailingComments = [];
                } else {
                    extra.trailingComments.length = 0;
                }
            } else {
                if (extra.bottomRightStack.length > 0 &&
                        extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments &&
                        extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments[0].range[0] >= node.range[1]) {
                    trailingComments = extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
                    delete extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
                }
            }

            // Eating the stack.
            while (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].range[0] >= node.range[0]) {
                lastChild = extra.bottomRightStack.pop();
            }

            if (lastChild) {
                if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
                    node.leadingComments = lastChild.leadingComments;
                    delete lastChild.leadingComments;
                }
            } else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
                node.leadingComments = extra.leadingComments;
                extra.leadingComments = [];
            }


            if (trailingComments) {
                node.trailingComments = trailingComments;
            }

            extra.bottomRightStack.push(node);
        },

        markEnd: function (node, startToken) {
            if (extra.range) {
                node.range = [startToken.start, index];
            }
            if (extra.loc) {
                node.loc = new SourceLocation(
                    startToken.startLineNumber === undefined ?  startToken.lineNumber : startToken.startLineNumber,
                    startToken.start - (startToken.startLineStart === undefined ?  startToken.lineStart : startToken.startLineStart),
                    lineNumber,
                    index - lineStart
                );
                this.postProcess(node);
            }

            if (extra.attachComment) {
                this.processComment(node);
            }
            return node;
        },

        postProcess: function (node) {
            if (extra.source) {
                node.loc.source = extra.source;
            }
            return node;
        },

        createArrayExpression: function (elements) {
            return {
                type: Syntax.ArrayExpression,
                elements: elements
            };
        },

        createAssignmentExpression: function (operator, left, right) {
            return {
                type: Syntax.AssignmentExpression,
                operator: operator,
                left: left,
                right: right
            };
        },

        createBinaryExpression: function (operator, left, right) {
            var type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression :
                        Syntax.BinaryExpression;
            return {
                type: type,
                operator: operator,
                left: left,
                right: right
            };
        },

        createBlockStatement: function (body) {
            return {
                type: Syntax.BlockStatement,
                body: body
            };
        },

        createBreakStatement: function (label) {
            return {
                type: Syntax.BreakStatement,
                label: label
            };
        },

        createCallExpression: function (callee, args) {
            return {
                type: Syntax.CallExpression,
                callee: callee,
                'arguments': args
            };
        },

        createCatchClause: function (param, body) {
            return {
                type: Syntax.CatchClause,
                param: param,
                body: body
            };
        },

        createConditionalExpression: function (test, consequent, alternate) {
            return {
                type: Syntax.ConditionalExpression,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        },

        createContinueStatement: function (label) {
            return {
                type: Syntax.ContinueStatement,
                label: label
            };
        },

        createDebuggerStatement: function () {
            return {
                type: Syntax.DebuggerStatement
            };
        },

        createDoWhileStatement: function (body, test) {
            return {
                type: Syntax.DoWhileStatement,
                body: body,
                test: test
            };
        },

        createEmptyStatement: function () {
            return {
                type: Syntax.EmptyStatement
            };
        },

        createExpressionStatement: function (expression) {
            return {
                type: Syntax.ExpressionStatement,
                expression: expression
            };
        },

        createForStatement: function (init, test, update, body) {
            return {
                type: Syntax.ForStatement,
                init: init,
                test: test,
                update: update,
                body: body
            };
        },

        createForInStatement: function (left, right, body) {
            return {
                type: Syntax.ForInStatement,
                left: left,
                right: right,
                body: body,
                each: false
            };
        },

        createFunctionDeclaration: function (id, params, defaults, body) {
            return {
                type: Syntax.FunctionDeclaration,
                id: id,
                params: params,
                defaults: defaults,
                body: body,
                rest: null,
                generator: false,
                expression: false
            };
        },

        createFunctionExpression: function (id, params, defaults, body) {
            return {
                type: Syntax.FunctionExpression,
                id: id,
                params: params,
                defaults: defaults,
                body: body,
                rest: null,
                generator: false,
                expression: false
            };
        },

        createIdentifier: function (name) {
            return {
                type: Syntax.Identifier,
                name: name
            };
        },

        createIfStatement: function (test, consequent, alternate) {
            return {
                type: Syntax.IfStatement,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        },

        createLabeledStatement: function (label, body) {
            return {
                type: Syntax.LabeledStatement,
                label: label,
                body: body
            };
        },

        createLiteral: function (token) {
            return {
                type: Syntax.Literal,
                value: token.value,
                raw: source.slice(token.start, token.end)
            };
        },

        createMemberExpression: function (accessor, object, property) {
            return {
                type: Syntax.MemberExpression,
                computed: accessor === '[',
                object: object,
                property: property
            };
        },

        createNewExpression: function (callee, args) {
            return {
                type: Syntax.NewExpression,
                callee: callee,
                'arguments': args
            };
        },

        createObjectExpression: function (properties) {
            return {
                type: Syntax.ObjectExpression,
                properties: properties
            };
        },

        createPostfixExpression: function (operator, argument) {
            return {
                type: Syntax.UpdateExpression,
                operator: operator,
                argument: argument,
                prefix: false
            };
        },

        createProgram: function (body) {
            return {
                type: Syntax.Program,
                body: body
            };
        },

        createProperty: function (kind, key, value) {
            return {
                type: Syntax.Property,
                key: key,
                value: value,
                kind: kind
            };
        },

        createReturnStatement: function (argument) {
            return {
                type: Syntax.ReturnStatement,
                argument: argument
            };
        },

        createSequenceExpression: function (expressions) {
            return {
                type: Syntax.SequenceExpression,
                expressions: expressions
            };
        },

        createSwitchCase: function (test, consequent) {
            return {
                type: Syntax.SwitchCase,
                test: test,
                consequent: consequent
            };
        },

        createSwitchStatement: function (discriminant, cases) {
            return {
                type: Syntax.SwitchStatement,
                discriminant: discriminant,
                cases: cases
            };
        },

        createThisExpression: function () {
            return {
                type: Syntax.ThisExpression
            };
        },

        createThrowStatement: function (argument) {
            return {
                type: Syntax.ThrowStatement,
                argument: argument
            };
        },

        createTryStatement: function (block, guardedHandlers, handlers, finalizer) {
            return {
                type: Syntax.TryStatement,
                block: block,
                guardedHandlers: guardedHandlers,
                handlers: handlers,
                finalizer: finalizer
            };
        },

        createUnaryExpression: function (operator, argument) {
            if (operator === '++' || operator === '--') {
                return {
                    type: Syntax.UpdateExpression,
                    operator: operator,
                    argument: argument,
                    prefix: true
                };
            }
            return {
                type: Syntax.UnaryExpression,
                operator: operator,
                argument: argument,
                prefix: true
            };
        },

        createVariableDeclaration: function (declarations, kind) {
            return {
                type: Syntax.VariableDeclaration,
                declarations: declarations,
                kind: kind
            };
        },

        createVariableDeclarator: function (id, init) {
            return {
                type: Syntax.VariableDeclarator,
                id: id,
                init: init
            };
        },

        createWhileStatement: function (test, body) {
            return {
                type: Syntax.WhileStatement,
                test: test,
                body: body
            };
        },

        createWithStatement: function (object, body) {
            return {
                type: Syntax.WithStatement,
                object: object,
                body: body
            };
        }
    };

    // Return true if there is a line terminator before the next token.

    function peekLineTerminator() {
        var pos, line, start, found;

        pos = index;
        line = lineNumber;
        start = lineStart;
        skipComment();
        found = lineNumber !== line;
        index = pos;
        lineNumber = line;
        lineStart = start;

        return found;
    }

    // Throw an exception

    function throwError(token, messageFormat) {
        var error,
            args = Array.prototype.slice.call(arguments, 2),
            msg = messageFormat.replace(
                /%(\d)/g,
                function (whole, index) {
                    assert(index < args.length, 'Message reference must be in range');
                    return args[index];
                }
            );

        if (typeof token.lineNumber === 'number') {
            error = new Error('Line ' + token.lineNumber + ': ' + msg);
            error.index = token.start;
            error.lineNumber = token.lineNumber;
            error.column = token.start - lineStart + 1;
        } else {
            error = new Error('Line ' + lineNumber + ': ' + msg);
            error.index = index;
            error.lineNumber = lineNumber;
            error.column = index - lineStart + 1;
        }

        error.description = msg;
        throw error;
    }

    function throwErrorTolerant() {
        try {
            throwError.apply(null, arguments);
        } catch (e) {
            if (extra.errors) {
                extra.errors.push(e);
            } else {
                throw e;
            }
        }
    }


    // Throw an exception because of the token.

    function throwUnexpected(token) {
        if (token.type === Token.EOF) {
            throwError(token, Messages.UnexpectedEOS);
        }

        if (token.type === Token.NumericLiteral) {
            throwError(token, Messages.UnexpectedNumber);
        }

        if (token.type === Token.StringLiteral) {
            throwError(token, Messages.UnexpectedString);
        }

        if (token.type === Token.Identifier) {
            throwError(token, Messages.UnexpectedIdentifier);
        }

        if (token.type === Token.Keyword) {
            if (isFutureReservedWord(token.value)) {
                throwError(token, Messages.UnexpectedReserved);
            } else if (strict && isStrictModeReservedWord(token.value)) {
                throwErrorTolerant(token, Messages.StrictReservedWord);
                return;
            }
            throwError(token, Messages.UnexpectedToken, token.value);
        }

        // BooleanLiteral, NullLiteral, or Punctuator.
        throwError(token, Messages.UnexpectedToken, token.value);
    }

    // Expect the next token to match the specified punctuator.
    // If not, an exception will be thrown.

    function expect(value) {
        var token = lex();
        if (token.type !== Token.Punctuator || token.value !== value) {
            throwUnexpected(token);
        }
    }

    // Expect the next token to match the specified keyword.
    // If not, an exception will be thrown.

    function expectKeyword(keyword) {
        var token = lex();
        if (token.type !== Token.Keyword || token.value !== keyword) {
            throwUnexpected(token);
        }
    }

    // Return true if the next token matches the specified punctuator.

    function match(value) {
        return lookahead.type === Token.Punctuator && lookahead.value === value;
    }

    // Return true if the next token matches the specified keyword

    function matchKeyword(keyword) {
        return lookahead.type === Token.Keyword && lookahead.value === keyword;
    }

    // Return true if the next token is an assignment operator

    function matchAssign() {
        var op;

        if (lookahead.type !== Token.Punctuator) {
            return false;
        }
        op = lookahead.value;
        return op === '=' ||
            op === '*=' ||
            op === '/=' ||
            op === '%=' ||
            op === '+=' ||
            op === '-=' ||
            op === '<<=' ||
            op === '>>=' ||
            op === '>>>=' ||
            op === '&=' ||
            op === '^=' ||
            op === '|=';
    }

    function consumeSemicolon() {
        var line, oldIndex = index, oldLineNumber = lineNumber,
            oldLineStart = lineStart, oldLookahead = lookahead;

        // Catch the very common case first: immediately a semicolon (U+003B).
        if (source.charCodeAt(index) === 0x3B || match(';')) {
            lex();
            return;
        }

        line = lineNumber;
        skipComment();
        if (lineNumber !== line) {
            index = oldIndex;
            lineNumber = oldLineNumber;
            lineStart = oldLineStart;
            lookahead = oldLookahead;
            return;
        }

        if (lookahead.type !== Token.EOF && !match('}')) {
            throwUnexpected(lookahead);
        }
    }

    // Return true if provided expression is LeftHandSideExpression

    function isLeftHandSide(expr) {
        return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
    }

    // 11.1.4 Array Initialiser

    function parseArrayInitialiser() {
        var elements = [], startToken;

        startToken = lookahead;
        expect('[');

        while (!match(']')) {
            if (match(',')) {
                lex();
                elements.push(null);
            } else {
                elements.push(parseAssignmentExpression());

                if (!match(']')) {
                    expect(',');
                }
            }
        }

        lex();

        return delegate.markEnd(delegate.createArrayExpression(elements), startToken);
    }

    // 11.1.5 Object Initialiser

    function parsePropertyFunction(param, first) {
        var previousStrict, body, startToken;

        previousStrict = strict;
        startToken = lookahead;
        body = parseFunctionSourceElements();
        if (first && strict && isRestrictedWord(param[0].name)) {
            throwErrorTolerant(first, Messages.StrictParamName);
        }
        strict = previousStrict;
        return delegate.markEnd(delegate.createFunctionExpression(null, param, [], body), startToken);
    }

    function parseObjectPropertyKey() {
        var token, startToken;

        startToken = lookahead;
        token = lex();

        // Note: This function is called only from parseObjectProperty(), where
        // EOF and Punctuator tokens are already filtered out.

        if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
            if (strict && token.octal) {
                throwErrorTolerant(token, Messages.StrictOctalLiteral);
            }
            return delegate.markEnd(delegate.createLiteral(token), startToken);
        }

        return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
    }

    function parseObjectProperty() {
        var token, key, id, value, param, startToken;

        token = lookahead;
        startToken = lookahead;

        if (token.type === Token.Identifier) {

            id = parseObjectPropertyKey();

            // Property Assignment: Getter and Setter.

            if (token.value === 'get' && !match(':')) {
                key = parseObjectPropertyKey();
                expect('(');
                expect(')');
                value = parsePropertyFunction([]);
                return delegate.markEnd(delegate.createProperty('get', key, value), startToken);
            }
            if (token.value === 'set' && !match(':')) {
                key = parseObjectPropertyKey();
                expect('(');
                token = lookahead;
                if (token.type !== Token.Identifier) {
                    expect(')');
                    throwErrorTolerant(token, Messages.UnexpectedToken, token.value);
                    value = parsePropertyFunction([]);
                } else {
                    param = [ parseVariableIdentifier() ];
                    expect(')');
                    value = parsePropertyFunction(param, token);
                }
                return delegate.markEnd(delegate.createProperty('set', key, value), startToken);
            }
            expect(':');
            value = parseAssignmentExpression();
            return delegate.markEnd(delegate.createProperty('init', id, value), startToken);
        }
        if (token.type === Token.EOF || token.type === Token.Punctuator) {
            throwUnexpected(token);
        } else {
            key = parseObjectPropertyKey();
            expect(':');
            value = parseAssignmentExpression();
            return delegate.markEnd(delegate.createProperty('init', key, value), startToken);
        }
    }

    function parseObjectInitialiser() {
        var properties = [], property, name, key, kind, map = {}, toString = String, startToken;

        startToken = lookahead;

        expect('{');

        while (!match('}')) {
            property = parseObjectProperty();

            if (property.key.type === Syntax.Identifier) {
                name = property.key.name;
            } else {
                name = toString(property.key.value);
            }
            kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;

            key = '$' + name;
            if (Object.prototype.hasOwnProperty.call(map, key)) {
                if (map[key] === PropertyKind.Data) {
                    if (strict && kind === PropertyKind.Data) {
                        throwErrorTolerant({}, Messages.StrictDuplicateProperty);
                    } else if (kind !== PropertyKind.Data) {
                        throwErrorTolerant({}, Messages.AccessorDataProperty);
                    }
                } else {
                    if (kind === PropertyKind.Data) {
                        throwErrorTolerant({}, Messages.AccessorDataProperty);
                    } else if (map[key] & kind) {
                        throwErrorTolerant({}, Messages.AccessorGetSet);
                    }
                }
                map[key] |= kind;
            } else {
                map[key] = kind;
            }

            properties.push(property);

            if (!match('}')) {
                expect(',');
            }
        }

        expect('}');

        return delegate.markEnd(delegate.createObjectExpression(properties), startToken);
    }

    // 11.1.6 The Grouping Operator

    function parseGroupExpression() {
        var expr;

        expect('(');

        expr = parseExpression();

        expect(')');

        return expr;
    }


    // 11.1 Primary Expressions

    function parsePrimaryExpression() {
        var type, token, expr, startToken;

        if (match('(')) {
            return parseGroupExpression();
        }

        if (match('[')) {
            return parseArrayInitialiser();
        }

        if (match('{')) {
            return parseObjectInitialiser();
        }

        type = lookahead.type;
        startToken = lookahead;

        if (type === Token.Identifier) {
            expr =  delegate.createIdentifier(lex().value);
        } else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
            if (strict && lookahead.octal) {
                throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
            }
            expr = delegate.createLiteral(lex());
        } else if (type === Token.Keyword) {
            if (matchKeyword('function')) {
                return parseFunctionExpression();
            }
            if (matchKeyword('this')) {
                lex();
                expr = delegate.createThisExpression();
            } else {
                throwUnexpected(lex());
            }
        } else if (type === Token.BooleanLiteral) {
            token = lex();
            token.value = (token.value === 'true');
            expr = delegate.createLiteral(token);
        } else if (type === Token.NullLiteral) {
            token = lex();
            token.value = null;
            expr = delegate.createLiteral(token);
        } else if (match('/') || match('/=')) {
            if (typeof extra.tokens !== 'undefined') {
                expr = delegate.createLiteral(collectRegex());
            } else {
                expr = delegate.createLiteral(scanRegExp());
            }
            peek();
        } else {
            throwUnexpected(lex());
        }

        return delegate.markEnd(expr, startToken);
    }

    // 11.2 Left-Hand-Side Expressions

    function parseArguments() {
        var args = [];

        expect('(');

        if (!match(')')) {
            while (index < length) {
                args.push(parseAssignmentExpression());
                if (match(')')) {
                    break;
                }
                expect(',');
            }
        }

        expect(')');

        return args;
    }

    function parseNonComputedProperty() {
        var token, startToken;

        startToken = lookahead;
        token = lex();

        if (!isIdentifierName(token)) {
            throwUnexpected(token);
        }

        return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
    }

    function parseNonComputedMember() {
        expect('.');

        return parseNonComputedProperty();
    }

    function parseComputedMember() {
        var expr;

        expect('[');

        expr = parseExpression();

        expect(']');

        return expr;
    }

    function parseNewExpression() {
        var callee, args, startToken;

        startToken = lookahead;
        expectKeyword('new');
        callee = parseLeftHandSideExpression();
        args = match('(') ? parseArguments() : [];

        return delegate.markEnd(delegate.createNewExpression(callee, args), startToken);
    }

    function parseLeftHandSideExpressionAllowCall() {
        var expr, args, property, startToken, previousAllowIn = state.allowIn;

        startToken = lookahead;
        state.allowIn = true;
        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

        for (;;) {
            if (match('.')) {
                property = parseNonComputedMember();
                expr = delegate.createMemberExpression('.', expr, property);
            } else if (match('(')) {
                args = parseArguments();
                expr = delegate.createCallExpression(expr, args);
            } else if (match('[')) {
                property = parseComputedMember();
                expr = delegate.createMemberExpression('[', expr, property);
            } else {
                break;
            }
            delegate.markEnd(expr, startToken);
        }
        state.allowIn = previousAllowIn;

        return expr;
    }

    function parseLeftHandSideExpression() {
        var expr, property, startToken;
        assert(state.allowIn, 'callee of new expression always allow in keyword.');

        startToken = lookahead;

        expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

        while (match('.') || match('[')) {
            if (match('[')) {
                property = parseComputedMember();
                expr = delegate.createMemberExpression('[', expr, property);
            } else {
                property = parseNonComputedMember();
                expr = delegate.createMemberExpression('.', expr, property);
            }
            delegate.markEnd(expr, startToken);
        }
        return expr;
    }

    // 11.3 Postfix Expressions

    function parsePostfixExpression() {
        var expr, token, startToken = lookahead;

        expr = parseLeftHandSideExpressionAllowCall();

        if (lookahead.type === Token.Punctuator) {
            if ((match('++') || match('--')) && !peekLineTerminator()) {
                // 11.3.1, 11.3.2
                if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                    throwErrorTolerant({}, Messages.StrictLHSPostfix);
                }

                if (!isLeftHandSide(expr)) {
                    throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
                }

                token = lex();
                expr = delegate.markEnd(delegate.createPostfixExpression(token.value, expr), startToken);
            }
        }

        return expr;
    }

    // 11.4 Unary Operators

    function parseUnaryExpression() {
        var token, expr, startToken;

        if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
            expr = parsePostfixExpression();
        } else if (match('++') || match('--')) {
            startToken = lookahead;
            token = lex();
            expr = parseUnaryExpression();
            // 11.4.4, 11.4.5
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                throwErrorTolerant({}, Messages.StrictLHSPrefix);
            }

            if (!isLeftHandSide(expr)) {
                throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
            }

            expr = delegate.createUnaryExpression(token.value, expr);
            expr = delegate.markEnd(expr, startToken);
        } else if (match('+') || match('-') || match('~') || match('!')) {
            startToken = lookahead;
            token = lex();
            expr = parseUnaryExpression();
            expr = delegate.createUnaryExpression(token.value, expr);
            expr = delegate.markEnd(expr, startToken);
        } else if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
            startToken = lookahead;
            token = lex();
            expr = parseUnaryExpression();
            expr = delegate.createUnaryExpression(token.value, expr);
            expr = delegate.markEnd(expr, startToken);
            if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
                throwErrorTolerant({}, Messages.StrictDelete);
            }
        } else {
            expr = parsePostfixExpression();
        }

        return expr;
    }

    function binaryPrecedence(token, allowIn) {
        var prec = 0;

        if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
            return 0;
        }

        switch (token.value) {
        case '||':
            prec = 1;
            break;

        case '&&':
            prec = 2;
            break;

        case '|':
            prec = 3;
            break;

        case '^':
            prec = 4;
            break;

        case '&':
            prec = 5;
            break;

        case '==':
        case '!=':
        case '===':
        case '!==':
            prec = 6;
            break;

        case '<':
        case '>':
        case '<=':
        case '>=':
        case 'instanceof':
            prec = 7;
            break;

        case 'in':
            prec = allowIn ? 7 : 0;
            break;

        case '<<':
        case '>>':
        case '>>>':
            prec = 8;
            break;

        case '+':
        case '-':
            prec = 9;
            break;

        case '*':
        case '/':
        case '%':
            prec = 11;
            break;

        default:
            break;
        }

        return prec;
    }

    // 11.5 Multiplicative Operators
    // 11.6 Additive Operators
    // 11.7 Bitwise Shift Operators
    // 11.8 Relational Operators
    // 11.9 Equality Operators
    // 11.10 Binary Bitwise Operators
    // 11.11 Binary Logical Operators

    function parseBinaryExpression() {
        var marker, markers, expr, token, prec, stack, right, operator, left, i;

        marker = lookahead;
        left = parseUnaryExpression();

        token = lookahead;
        prec = binaryPrecedence(token, state.allowIn);
        if (prec === 0) {
            return left;
        }
        token.prec = prec;
        lex();

        markers = [marker, lookahead];
        right = parseUnaryExpression();

        stack = [left, token, right];

        while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {

            // Reduce: make a binary expression from the three topmost entries.
            while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
                right = stack.pop();
                operator = stack.pop().value;
                left = stack.pop();
                expr = delegate.createBinaryExpression(operator, left, right);
                markers.pop();
                marker = markers[markers.length - 1];
                delegate.markEnd(expr, marker);
                stack.push(expr);
            }

            // Shift.
            token = lex();
            token.prec = prec;
            stack.push(token);
            markers.push(lookahead);
            expr = parseUnaryExpression();
            stack.push(expr);
        }

        // Final reduce to clean-up the stack.
        i = stack.length - 1;
        expr = stack[i];
        markers.pop();
        while (i > 1) {
            expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
            i -= 2;
            marker = markers.pop();
            delegate.markEnd(expr, marker);
        }

        return expr;
    }


    // 11.12 Conditional Operator

    function parseConditionalExpression() {
        var expr, previousAllowIn, consequent, alternate, startToken;

        startToken = lookahead;

        expr = parseBinaryExpression();

        if (match('?')) {
            lex();
            previousAllowIn = state.allowIn;
            state.allowIn = true;
            consequent = parseAssignmentExpression();
            state.allowIn = previousAllowIn;
            expect(':');
            alternate = parseAssignmentExpression();

            expr = delegate.createConditionalExpression(expr, consequent, alternate);
            delegate.markEnd(expr, startToken);
        }

        return expr;
    }

    // 11.13 Assignment Operators

    function parseAssignmentExpression() {
        var token, left, right, node, startToken;

        token = lookahead;
        startToken = lookahead;

        node = left = parseConditionalExpression();

        if (matchAssign()) {
            // LeftHandSideExpression
            if (!isLeftHandSide(left)) {
                throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
            }

            // 11.13.1
            if (strict && left.type === Syntax.Identifier && isRestrictedWord(left.name)) {
                throwErrorTolerant(token, Messages.StrictLHSAssignment);
            }

            token = lex();
            right = parseAssignmentExpression();
            node = delegate.markEnd(delegate.createAssignmentExpression(token.value, left, right), startToken);
        }

        return node;
    }

    // 11.14 Comma Operator

    function parseExpression() {
        var expr, startToken = lookahead;

        expr = parseAssignmentExpression();

        if (match(',')) {
            expr = delegate.createSequenceExpression([ expr ]);

            while (index < length) {
                if (!match(',')) {
                    break;
                }
                lex();
                expr.expressions.push(parseAssignmentExpression());
            }

            delegate.markEnd(expr, startToken);
        }

        return expr;
    }

    // 12.1 Block

    function parseStatementList() {
        var list = [],
            statement;

        while (index < length) {
            if (match('}')) {
                break;
            }
            statement = parseSourceElement();
            if (typeof statement === 'undefined') {
                break;
            }
            list.push(statement);
        }

        return list;
    }

    function parseBlock() {
        var block, startToken;

        startToken = lookahead;
        expect('{');

        block = parseStatementList();

        expect('}');

        return delegate.markEnd(delegate.createBlockStatement(block), startToken);
    }

    // 12.2 Variable Statement

    function parseVariableIdentifier() {
        var token, startToken;

        startToken = lookahead;
        token = lex();

        if (token.type !== Token.Identifier) {
            throwUnexpected(token);
        }

        return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
    }

    function parseVariableDeclaration(kind) {
        var init = null, id, startToken;

        startToken = lookahead;
        id = parseVariableIdentifier();

        // 12.2.1
        if (strict && isRestrictedWord(id.name)) {
            throwErrorTolerant({}, Messages.StrictVarName);
        }

        if (kind === 'const') {
            expect('=');
            init = parseAssignmentExpression();
        } else if (match('=')) {
            lex();
            init = parseAssignmentExpression();
        }

        return delegate.markEnd(delegate.createVariableDeclarator(id, init), startToken);
    }

    function parseVariableDeclarationList(kind) {
        var list = [];

        do {
            list.push(parseVariableDeclaration(kind));
            if (!match(',')) {
                break;
            }
            lex();
        } while (index < length);

        return list;
    }

    function parseVariableStatement() {
        var declarations;

        expectKeyword('var');

        declarations = parseVariableDeclarationList();

        consumeSemicolon();

        return delegate.createVariableDeclaration(declarations, 'var');
    }

    // kind may be `const` or `let`
    // Both are experimental and not in the specification yet.
    // see http://wiki.ecmascript.org/doku.php?id=harmony:const
    // and http://wiki.ecmascript.org/doku.php?id=harmony:let
    function parseConstLetDeclaration(kind) {
        var declarations, startToken;

        startToken = lookahead;

        expectKeyword(kind);

        declarations = parseVariableDeclarationList(kind);

        consumeSemicolon();

        return delegate.markEnd(delegate.createVariableDeclaration(declarations, kind), startToken);
    }

    // 12.3 Empty Statement

    function parseEmptyStatement() {
        expect(';');
        return delegate.createEmptyStatement();
    }

    // 12.4 Expression Statement

    function parseExpressionStatement() {
        var expr = parseExpression();
        consumeSemicolon();
        return delegate.createExpressionStatement(expr);
    }

    // 12.5 If statement

    function parseIfStatement() {
        var test, consequent, alternate;

        expectKeyword('if');

        expect('(');

        test = parseExpression();

        expect(')');

        consequent = parseStatement();

        if (matchKeyword('else')) {
            lex();
            alternate = parseStatement();
        } else {
            alternate = null;
        }

        return delegate.createIfStatement(test, consequent, alternate);
    }

    // 12.6 Iteration Statements

    function parseDoWhileStatement() {
        var body, test, oldInIteration;

        expectKeyword('do');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        body = parseStatement();

        state.inIteration = oldInIteration;

        expectKeyword('while');

        expect('(');

        test = parseExpression();

        expect(')');

        if (match(';')) {
            lex();
        }

        return delegate.createDoWhileStatement(body, test);
    }

    function parseWhileStatement() {
        var test, body, oldInIteration;

        expectKeyword('while');

        expect('(');

        test = parseExpression();

        expect(')');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        body = parseStatement();

        state.inIteration = oldInIteration;

        return delegate.createWhileStatement(test, body);
    }

    function parseForVariableDeclaration() {
        var token, declarations, startToken;

        startToken = lookahead;
        token = lex();
        declarations = parseVariableDeclarationList();

        return delegate.markEnd(delegate.createVariableDeclaration(declarations, token.value), startToken);
    }

    function parseForStatement() {
        var init, test, update, left, right, body, oldInIteration, previousAllowIn = state.allowIn;

        init = test = update = null;

        expectKeyword('for');

        expect('(');

        if (match(';')) {
            lex();
        } else {
            if (matchKeyword('var') || matchKeyword('let')) {
                state.allowIn = false;
                init = parseForVariableDeclaration();
                state.allowIn = previousAllowIn;

                if (init.declarations.length === 1 && matchKeyword('in')) {
                    lex();
                    left = init;
                    right = parseExpression();
                    init = null;
                }
            } else {
                state.allowIn = false;
                init = parseExpression();
                state.allowIn = previousAllowIn;

                if (matchKeyword('in')) {
                    // LeftHandSideExpression
                    if (!isLeftHandSide(init)) {
                        throwErrorTolerant({}, Messages.InvalidLHSInForIn);
                    }

                    lex();
                    left = init;
                    right = parseExpression();
                    init = null;
                }
            }

            if (typeof left === 'undefined') {
                expect(';');
            }
        }

        if (typeof left === 'undefined') {

            if (!match(';')) {
                test = parseExpression();
            }
            expect(';');

            if (!match(')')) {
                update = parseExpression();
            }
        }

        expect(')');

        oldInIteration = state.inIteration;
        state.inIteration = true;

        body = parseStatement();

        state.inIteration = oldInIteration;

        return (typeof left === 'undefined') ?
                delegate.createForStatement(init, test, update, body) :
                delegate.createForInStatement(left, right, body);
    }

    // 12.7 The continue statement

    function parseContinueStatement() {
        var label = null, key;

        expectKeyword('continue');

        // Optimize the most common form: 'continue;'.
        if (source.charCodeAt(index) === 0x3B) {
            lex();

            if (!state.inIteration) {
                throwError({}, Messages.IllegalContinue);
            }

            return delegate.createContinueStatement(null);
        }

        if (peekLineTerminator()) {
            if (!state.inIteration) {
                throwError({}, Messages.IllegalContinue);
            }

            return delegate.createContinueStatement(null);
        }

        if (lookahead.type === Token.Identifier) {
            label = parseVariableIdentifier();

            key = '$' + label.name;
            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                throwError({}, Messages.UnknownLabel, label.name);
            }
        }

        consumeSemicolon();

        if (label === null && !state.inIteration) {
            throwError({}, Messages.IllegalContinue);
        }

        return delegate.createContinueStatement(label);
    }

    // 12.8 The break statement

    function parseBreakStatement() {
        var label = null, key;

        expectKeyword('break');

        // Catch the very common case first: immediately a semicolon (U+003B).
        if (source.charCodeAt(index) === 0x3B) {
            lex();

            if (!(state.inIteration || state.inSwitch)) {
                throwError({}, Messages.IllegalBreak);
            }

            return delegate.createBreakStatement(null);
        }

        if (peekLineTerminator()) {
            if (!(state.inIteration || state.inSwitch)) {
                throwError({}, Messages.IllegalBreak);
            }

            return delegate.createBreakStatement(null);
        }

        if (lookahead.type === Token.Identifier) {
            label = parseVariableIdentifier();

            key = '$' + label.name;
            if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                throwError({}, Messages.UnknownLabel, label.name);
            }
        }

        consumeSemicolon();

        if (label === null && !(state.inIteration || state.inSwitch)) {
            throwError({}, Messages.IllegalBreak);
        }

        return delegate.createBreakStatement(label);
    }

    // 12.9 The return statement

    function parseReturnStatement() {
        var argument = null;

        expectKeyword('return');

        if (!state.inFunctionBody) {
            throwErrorTolerant({}, Messages.IllegalReturn);
        }

        // 'return' followed by a space and an identifier is very common.
        if (source.charCodeAt(index) === 0x20) {
            if (isIdentifierStart(source.charCodeAt(index + 1))) {
                argument = parseExpression();
                consumeSemicolon();
                return delegate.createReturnStatement(argument);
            }
        }

        if (peekLineTerminator()) {
            return delegate.createReturnStatement(null);
        }

        if (!match(';')) {
            if (!match('}') && lookahead.type !== Token.EOF) {
                argument = parseExpression();
            }
        }

        consumeSemicolon();

        return delegate.createReturnStatement(argument);
    }

    // 12.10 The with statement

    function parseWithStatement() {
        var object, body;

        if (strict) {
            // TODO(ikarienator): Should we update the test cases instead?
            skipComment();
            throwErrorTolerant({}, Messages.StrictModeWith);
        }

        expectKeyword('with');

        expect('(');

        object = parseExpression();

        expect(')');

        body = parseStatement();

        return delegate.createWithStatement(object, body);
    }

    // 12.10 The swith statement

    function parseSwitchCase() {
        var test, consequent = [], statement, startToken;

        startToken = lookahead;
        if (matchKeyword('default')) {
            lex();
            test = null;
        } else {
            expectKeyword('case');
            test = parseExpression();
        }
        expect(':');

        while (index < length) {
            if (match('}') || matchKeyword('default') || matchKeyword('case')) {
                break;
            }
            statement = parseStatement();
            consequent.push(statement);
        }

        return delegate.markEnd(delegate.createSwitchCase(test, consequent), startToken);
    }

    function parseSwitchStatement() {
        var discriminant, cases, clause, oldInSwitch, defaultFound;

        expectKeyword('switch');

        expect('(');

        discriminant = parseExpression();

        expect(')');

        expect('{');

        cases = [];

        if (match('}')) {
            lex();
            return delegate.createSwitchStatement(discriminant, cases);
        }

        oldInSwitch = state.inSwitch;
        state.inSwitch = true;
        defaultFound = false;

        while (index < length) {
            if (match('}')) {
                break;
            }
            clause = parseSwitchCase();
            if (clause.test === null) {
                if (defaultFound) {
                    throwError({}, Messages.MultipleDefaultsInSwitch);
                }
                defaultFound = true;
            }
            cases.push(clause);
        }

        state.inSwitch = oldInSwitch;

        expect('}');

        return delegate.createSwitchStatement(discriminant, cases);
    }

    // 12.13 The throw statement

    function parseThrowStatement() {
        var argument;

        expectKeyword('throw');

        if (peekLineTerminator()) {
            throwError({}, Messages.NewlineAfterThrow);
        }

        argument = parseExpression();

        consumeSemicolon();

        return delegate.createThrowStatement(argument);
    }

    // 12.14 The try statement

    function parseCatchClause() {
        var param, body, startToken;

        startToken = lookahead;
        expectKeyword('catch');

        expect('(');
        if (match(')')) {
            throwUnexpected(lookahead);
        }

        param = parseVariableIdentifier();
        // 12.14.1
        if (strict && isRestrictedWord(param.name)) {
            throwErrorTolerant({}, Messages.StrictCatchVariable);
        }

        expect(')');
        body = parseBlock();
        return delegate.markEnd(delegate.createCatchClause(param, body), startToken);
    }

    function parseTryStatement() {
        var block, handlers = [], finalizer = null;

        expectKeyword('try');

        block = parseBlock();

        if (matchKeyword('catch')) {
            handlers.push(parseCatchClause());
        }

        if (matchKeyword('finally')) {
            lex();
            finalizer = parseBlock();
        }

        if (handlers.length === 0 && !finalizer) {
            throwError({}, Messages.NoCatchOrFinally);
        }

        return delegate.createTryStatement(block, [], handlers, finalizer);
    }

    // 12.15 The debugger statement

    function parseDebuggerStatement() {
        expectKeyword('debugger');

        consumeSemicolon();

        return delegate.createDebuggerStatement();
    }

    // 12 Statements

    function parseStatement() {
        var type = lookahead.type,
            expr,
            labeledBody,
            key,
            startToken;

        if (type === Token.EOF) {
            throwUnexpected(lookahead);
        }

        if (type === Token.Punctuator && lookahead.value === '{') {
            return parseBlock();
        }

        startToken = lookahead;

        if (type === Token.Punctuator) {
            switch (lookahead.value) {
            case ';':
                return delegate.markEnd(parseEmptyStatement(), startToken);
            case '(':
                return delegate.markEnd(parseExpressionStatement(), startToken);
            default:
                break;
            }
        }

        if (type === Token.Keyword) {
            switch (lookahead.value) {
            case 'break':
                return delegate.markEnd(parseBreakStatement(), startToken);
            case 'continue':
                return delegate.markEnd(parseContinueStatement(), startToken);
            case 'debugger':
                return delegate.markEnd(parseDebuggerStatement(), startToken);
            case 'do':
                return delegate.markEnd(parseDoWhileStatement(), startToken);
            case 'for':
                return delegate.markEnd(parseForStatement(), startToken);
            case 'function':
                return delegate.markEnd(parseFunctionDeclaration(), startToken);
            case 'if':
                return delegate.markEnd(parseIfStatement(), startToken);
            case 'return':
                return delegate.markEnd(parseReturnStatement(), startToken);
            case 'switch':
                return delegate.markEnd(parseSwitchStatement(), startToken);
            case 'throw':
                return delegate.markEnd(parseThrowStatement(), startToken);
            case 'try':
                return delegate.markEnd(parseTryStatement(), startToken);
            case 'var':
                return delegate.markEnd(parseVariableStatement(), startToken);
            case 'while':
                return delegate.markEnd(parseWhileStatement(), startToken);
            case 'with':
                return delegate.markEnd(parseWithStatement(), startToken);
            default:
                break;
            }
        }

        expr = parseExpression();

        // 12.12 Labelled Statements
        if ((expr.type === Syntax.Identifier) && match(':')) {
            lex();

            key = '$' + expr.name;
            if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                throwError({}, Messages.Redeclaration, 'Label', expr.name);
            }

            state.labelSet[key] = true;
            labeledBody = parseStatement();
            delete state.labelSet[key];
            return delegate.markEnd(delegate.createLabeledStatement(expr, labeledBody), startToken);
        }

        consumeSemicolon();

        return delegate.markEnd(delegate.createExpressionStatement(expr), startToken);
    }

    // 13 Function Definition

    function parseFunctionSourceElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted,
            oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, startToken;

        startToken = lookahead;
        expect('{');

        while (index < length) {
            if (lookahead.type !== Token.StringLiteral) {
                break;
            }
            token = lookahead;

            sourceElement = parseSourceElement();
            sourceElements.push(sourceElement);
            if (sourceElement.expression.type !== Syntax.Literal) {
                // this is not directive
                break;
            }
            directive = source.slice(token.start + 1, token.end - 1);
            if (directive === 'use strict') {
                strict = true;
                if (firstRestricted) {
                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
                }
            } else {
                if (!firstRestricted && token.octal) {
                    firstRestricted = token;
                }
            }
        }

        oldLabelSet = state.labelSet;
        oldInIteration = state.inIteration;
        oldInSwitch = state.inSwitch;
        oldInFunctionBody = state.inFunctionBody;

        state.labelSet = {};
        state.inIteration = false;
        state.inSwitch = false;
        state.inFunctionBody = true;

        while (index < length) {
            if (match('}')) {
                break;
            }
            sourceElement = parseSourceElement();
            if (typeof sourceElement === 'undefined') {
                break;
            }
            sourceElements.push(sourceElement);
        }

        expect('}');

        state.labelSet = oldLabelSet;
        state.inIteration = oldInIteration;
        state.inSwitch = oldInSwitch;
        state.inFunctionBody = oldInFunctionBody;

        return delegate.markEnd(delegate.createBlockStatement(sourceElements), startToken);
    }

    function parseParams(firstRestricted) {
        var param, params = [], token, stricted, paramSet, key, message;
        expect('(');

        if (!match(')')) {
            paramSet = {};
            while (index < length) {
                token = lookahead;
                param = parseVariableIdentifier();
                key = '$' + token.value;
                if (strict) {
                    if (isRestrictedWord(token.value)) {
                        stricted = token;
                        message = Messages.StrictParamName;
                    }
                    if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
                        stricted = token;
                        message = Messages.StrictParamDupe;
                    }
                } else if (!firstRestricted) {
                    if (isRestrictedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictParamName;
                    } else if (isStrictModeReservedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictReservedWord;
                    } else if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
                        firstRestricted = token;
                        message = Messages.StrictParamDupe;
                    }
                }
                params.push(param);
                paramSet[key] = true;
                if (match(')')) {
                    break;
                }
                expect(',');
            }
        }

        expect(')');

        return {
            params: params,
            stricted: stricted,
            firstRestricted: firstRestricted,
            message: message
        };
    }

    function parseFunctionDeclaration() {
        var id, params = [], body, token, stricted, tmp, firstRestricted, message, previousStrict, startToken;

        startToken = lookahead;

        expectKeyword('function');
        token = lookahead;
        id = parseVariableIdentifier();
        if (strict) {
            if (isRestrictedWord(token.value)) {
                throwErrorTolerant(token, Messages.StrictFunctionName);
            }
        } else {
            if (isRestrictedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictFunctionName;
            } else if (isStrictModeReservedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictReservedWord;
            }
        }

        tmp = parseParams(firstRestricted);
        params = tmp.params;
        stricted = tmp.stricted;
        firstRestricted = tmp.firstRestricted;
        if (tmp.message) {
            message = tmp.message;
        }

        previousStrict = strict;
        body = parseFunctionSourceElements();
        if (strict && firstRestricted) {
            throwError(firstRestricted, message);
        }
        if (strict && stricted) {
            throwErrorTolerant(stricted, message);
        }
        strict = previousStrict;

        return delegate.markEnd(delegate.createFunctionDeclaration(id, params, [], body), startToken);
    }

    function parseFunctionExpression() {
        var token, id = null, stricted, firstRestricted, message, tmp, params = [], body, previousStrict, startToken;

        startToken = lookahead;
        expectKeyword('function');

        if (!match('(')) {
            token = lookahead;
            id = parseVariableIdentifier();
            if (strict) {
                if (isRestrictedWord(token.value)) {
                    throwErrorTolerant(token, Messages.StrictFunctionName);
                }
            } else {
                if (isRestrictedWord(token.value)) {
                    firstRestricted = token;
                    message = Messages.StrictFunctionName;
                } else if (isStrictModeReservedWord(token.value)) {
                    firstRestricted = token;
                    message = Messages.StrictReservedWord;
                }
            }
        }

        tmp = parseParams(firstRestricted);
        params = tmp.params;
        stricted = tmp.stricted;
        firstRestricted = tmp.firstRestricted;
        if (tmp.message) {
            message = tmp.message;
        }

        previousStrict = strict;
        body = parseFunctionSourceElements();
        if (strict && firstRestricted) {
            throwError(firstRestricted, message);
        }
        if (strict && stricted) {
            throwErrorTolerant(stricted, message);
        }
        strict = previousStrict;

        return delegate.markEnd(delegate.createFunctionExpression(id, params, [], body), startToken);
    }

    // 14 Program

    function parseSourceElement() {
        if (lookahead.type === Token.Keyword) {
            switch (lookahead.value) {
            case 'const':
            case 'let':
                return parseConstLetDeclaration(lookahead.value);
            case 'function':
                return parseFunctionDeclaration();
            default:
                return parseStatement();
            }
        }

        if (lookahead.type !== Token.EOF) {
            return parseStatement();
        }
    }

    function parseSourceElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted;

        while (index < length) {
            token = lookahead;
            if (token.type !== Token.StringLiteral) {
                break;
            }

            sourceElement = parseSourceElement();
            sourceElements.push(sourceElement);
            if (sourceElement.expression.type !== Syntax.Literal) {
                // this is not directive
                break;
            }
            directive = source.slice(token.start + 1, token.end - 1);
            if (directive === 'use strict') {
                strict = true;
                if (firstRestricted) {
                    throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
                }
            } else {
                if (!firstRestricted && token.octal) {
                    firstRestricted = token;
                }
            }
        }

        while (index < length) {
            sourceElement = parseSourceElement();
            /* istanbul ignore if */
            if (typeof sourceElement === 'undefined') {
                break;
            }
            sourceElements.push(sourceElement);
        }
        return sourceElements;
    }

    function parseProgram() {
        var body, startToken;

        skipComment();
        peek();
        startToken = lookahead;
        strict = false;

        body = parseSourceElements();
        return delegate.markEnd(delegate.createProgram(body), startToken);
    }

    function filterTokenLocation() {
        var i, entry, token, tokens = [];

        for (i = 0; i < extra.tokens.length; ++i) {
            entry = extra.tokens[i];
            token = {
                type: entry.type,
                value: entry.value
            };
            if (extra.range) {
                token.range = entry.range;
            }
            if (extra.loc) {
                token.loc = entry.loc;
            }
            tokens.push(token);
        }

        extra.tokens = tokens;
    }

    function tokenize(code, options) {
        var toString,
            token,
            tokens;

        toString = String;
        if (typeof code !== 'string' && !(code instanceof String)) {
            code = toString(code);
        }

        delegate = SyntaxTreeDelegate;
        source = code;
        index = 0;
        lineNumber = (source.length > 0) ? 1 : 0;
        lineStart = 0;
        length = source.length;
        lookahead = null;
        state = {
            allowIn: true,
            labelSet: {},
            inFunctionBody: false,
            inIteration: false,
            inSwitch: false,
            lastCommentStart: -1
        };

        extra = {};

        // Options matching.
        options = options || {};

        // Of course we collect tokens here.
        options.tokens = true;
        extra.tokens = [];
        extra.tokenize = true;
        // The following two fields are necessary to compute the Regex tokens.
        extra.openParenToken = -1;
        extra.openCurlyToken = -1;

        extra.range = (typeof options.range === 'boolean') && options.range;
        extra.loc = (typeof options.loc === 'boolean') && options.loc;

        if (typeof options.comment === 'boolean' && options.comment) {
            extra.comments = [];
        }
        if (typeof options.tolerant === 'boolean' && options.tolerant) {
            extra.errors = [];
        }

        try {
            peek();
            if (lookahead.type === Token.EOF) {
                return extra.tokens;
            }

            token = lex();
            while (lookahead.type !== Token.EOF) {
                try {
                    token = lex();
                } catch (lexError) {
                    token = lookahead;
                    if (extra.errors) {
                        extra.errors.push(lexError);
                        // We have to break on the first error
                        // to avoid infinite loops.
                        break;
                    } else {
                        throw lexError;
                    }
                }
            }

            filterTokenLocation();
            tokens = extra.tokens;
            if (typeof extra.comments !== 'undefined') {
                tokens.comments = extra.comments;
            }
            if (typeof extra.errors !== 'undefined') {
                tokens.errors = extra.errors;
            }
        } catch (e) {
            throw e;
        } finally {
            extra = {};
        }
        return tokens;
    }

    function parse(code, options) {
        var program, toString;

        toString = String;
        if (typeof code !== 'string' && !(code instanceof String)) {
            code = toString(code);
        }

        delegate = SyntaxTreeDelegate;
        source = code;
        index = 0;
        lineNumber = (source.length > 0) ? 1 : 0;
        lineStart = 0;
        length = source.length;
        lookahead = null;
        state = {
            allowIn: true,
            labelSet: {},
            inFunctionBody: false,
            inIteration: false,
            inSwitch: false,
            lastCommentStart: -1
        };

        extra = {};
        if (typeof options !== 'undefined') {
            extra.range = (typeof options.range === 'boolean') && options.range;
            extra.loc = (typeof options.loc === 'boolean') && options.loc;
            extra.attachComment = (typeof options.attachComment === 'boolean') && options.attachComment;

            if (extra.loc && options.source !== null && options.source !== undefined) {
                extra.source = toString(options.source);
            }

            if (typeof options.tokens === 'boolean' && options.tokens) {
                extra.tokens = [];
            }
            if (typeof options.comment === 'boolean' && options.comment) {
                extra.comments = [];
            }
            if (typeof options.tolerant === 'boolean' && options.tolerant) {
                extra.errors = [];
            }
            if (extra.attachComment) {
                extra.range = true;
                extra.comments = [];
                extra.bottomRightStack = [];
                extra.trailingComments = [];
                extra.leadingComments = [];
            }
        }

        try {
            program = parseProgram();
            if (typeof extra.comments !== 'undefined') {
                program.comments = extra.comments;
            }
            if (typeof extra.tokens !== 'undefined') {
                filterTokenLocation();
                program.tokens = extra.tokens;
            }
            if (typeof extra.errors !== 'undefined') {
                program.errors = extra.errors;
            }
        } catch (e) {
            throw e;
        } finally {
            extra = {};
        }

        return program;
    }

    // Sync with *.json manifests.
    exports.version = '1.2.4';

    exports.tokenize = tokenize;

    exports.parse = parse;

    // Deep copy.
   /* istanbul ignore next */
    exports.Syntax = (function () {
        var name, types = {};

        if (typeof Object.create === 'function') {
            types = Object.create(null);
        }

        for (name in Syntax) {
            if (Syntax.hasOwnProperty(name)) {
                types[name] = Syntax[name];
            }
        }

        if (typeof Object.freeze === 'function') {
            Object.freeze(types);
        }

        return types;
    }());

}));
/* vim: set sw=4 ts=4 et tw=80 : */

},{}],23:[function(require,module,exports){
var estraverse = module.exports = require('estraverse');

var VisitorKeys = require('./keys');

for (var nodeType in VisitorKeys) {
	estraverse.Syntax[nodeType] = nodeType;

	var keys = VisitorKeys[nodeType];

	if (keys) {
		estraverse.VisitorKeys[nodeType] = keys;
	}
}
},{"./keys":24,"estraverse":25}],24:[function(require,module,exports){
var unprefixedKeys = {
	Identifier: [],
	NamespacedName: ['namespace', 'name'],
	MemberExpression: ['object', 'property'],
	EmptyExpression: [],
	ExpressionContainer: ['expression'],
	Element: ['openingElement', 'closingElement', 'children'],
	ClosingElement: ['name'],
	OpeningElement: ['name', 'attributes'],
	Attribute: ['name', 'value'],
	Text: null,
	SpreadAttribute: ['argument']
};

var flowKeys = {
	Type: [],
	AnyTypeAnnotation: [],
	VoidTypeAnnotation: [],
	NumberTypeAnnotation: [],
	StringTypeAnnotation: [],
	StringLiteralTypeAnnotation: ["value", "raw"],
	BooleanTypeAnnotation: [],
	TypeAnnotation: ["typeAnnotation"],
	NullableTypeAnnotation: ["typeAnnotation"],
	FunctionTypeAnnotation: ["params", "returnType", "rest", "typeParameters"],
	FunctionTypeParam: ["name", "typeAnnotation", "optional"],
	ObjectTypeAnnotation: ["properties"],
	ObjectTypeProperty: ["key", "value", "optional"],
	ObjectTypeIndexer: ["id", "key", "value"],
	ObjectTypeCallProperty: ["value"],
	QualifiedTypeIdentifier: ["qualification", "id"],
	GenericTypeAnnotation: ["id", "typeParameters"],
	MemberTypeAnnotation: ["object", "property"],
	UnionTypeAnnotation: ["types"],
	IntersectionTypeAnnotation: ["types"],
	TypeofTypeAnnotation: ["argument"],
	TypeParameterDeclaration: ["params"],
	TypeParameterInstantiation: ["params"],
	ClassProperty: ["key", "typeAnnotation"],
	ClassImplements: [],
	InterfaceDeclaration: ["id", "body", "extends"],
	InterfaceExtends: ["id"],
	TypeAlias: ["id", "typeParameters", "right"],
	TupleTypeAnnotation: ["types"],
	DeclareVariable: ["id"],
	DeclareFunction: ["id"],
	DeclareClass: ["id"],
	DeclareModule: ["id", "body"]
};

for (var key in unprefixedKeys) {
	exports['XJS' + key] = exports['JSX' + key] = unprefixedKeys[key];
}

for (var key in flowKeys) {
	exports[key] = flowKeys[key];
}
},{}],25:[function(require,module,exports){
/*
  Copyright (C) 2012-2013 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/*jslint vars:false, bitwise:true*/
/*jshint indent:4*/
/*global exports:true, define:true*/
(function (root, factory) {
    'use strict';

    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
    // and plain browser loading,
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.estraverse = {}));
    }
}(this, function clone(exports) {
    'use strict';

    var Syntax,
        isArray,
        VisitorOption,
        VisitorKeys,
        objectCreate,
        objectKeys,
        BREAK,
        SKIP,
        REMOVE;

    function ignoreJSHintError() { }

    isArray = Array.isArray;
    if (!isArray) {
        isArray = function isArray(array) {
            return Object.prototype.toString.call(array) === '[object Array]';
        };
    }

    function deepCopy(obj) {
        var ret = {}, key, val;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                val = obj[key];
                if (typeof val === 'object' && val !== null) {
                    ret[key] = deepCopy(val);
                } else {
                    ret[key] = val;
                }
            }
        }
        return ret;
    }

    function shallowCopy(obj) {
        var ret = {}, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    ignoreJSHintError(shallowCopy);

    // based on LLVM libc++ upper_bound / lower_bound
    // MIT License

    function upperBound(array, func) {
        var diff, len, i, current;

        len = array.length;
        i = 0;

        while (len) {
            diff = len >>> 1;
            current = i + diff;
            if (func(array[current])) {
                len = diff;
            } else {
                i = current + 1;
                len -= diff + 1;
            }
        }
        return i;
    }

    function lowerBound(array, func) {
        var diff, len, i, current;

        len = array.length;
        i = 0;

        while (len) {
            diff = len >>> 1;
            current = i + diff;
            if (func(array[current])) {
                i = current + 1;
                len -= diff + 1;
            } else {
                len = diff;
            }
        }
        return i;
    }
    ignoreJSHintError(lowerBound);

    objectCreate = Object.create || (function () {
        function F() { }

        return function (o) {
            F.prototype = o;
            return new F();
        };
    })();

    objectKeys = Object.keys || function (o) {
        var keys = [], key;
        for (key in o) {
            keys.push(key);
        }
        return keys;
    };

    function extend(to, from) {
        objectKeys(from).forEach(function (key) {
            to[key] = from[key];
        });
        return to;
    }

    Syntax = {
        AssignmentExpression: 'AssignmentExpression',
        ArrayExpression: 'ArrayExpression',
        ArrayPattern: 'ArrayPattern',
        ArrowFunctionExpression: 'ArrowFunctionExpression',
        AwaitExpression: 'AwaitExpression', // CAUTION: It's deferred to ES7.
        BlockStatement: 'BlockStatement',
        BinaryExpression: 'BinaryExpression',
        BreakStatement: 'BreakStatement',
        CallExpression: 'CallExpression',
        CatchClause: 'CatchClause',
        ClassBody: 'ClassBody',
        ClassDeclaration: 'ClassDeclaration',
        ClassExpression: 'ClassExpression',
        ComprehensionBlock: 'ComprehensionBlock',  // CAUTION: It's deferred to ES7.
        ComprehensionExpression: 'ComprehensionExpression',  // CAUTION: It's deferred to ES7.
        ConditionalExpression: 'ConditionalExpression',
        ContinueStatement: 'ContinueStatement',
        DebuggerStatement: 'DebuggerStatement',
        DirectiveStatement: 'DirectiveStatement',
        DoWhileStatement: 'DoWhileStatement',
        EmptyStatement: 'EmptyStatement',
        ExportBatchSpecifier: 'ExportBatchSpecifier',
        ExportDeclaration: 'ExportDeclaration',
        ExportSpecifier: 'ExportSpecifier',
        ExpressionStatement: 'ExpressionStatement',
        ForStatement: 'ForStatement',
        ForInStatement: 'ForInStatement',
        ForOfStatement: 'ForOfStatement',
        FunctionDeclaration: 'FunctionDeclaration',
        FunctionExpression: 'FunctionExpression',
        GeneratorExpression: 'GeneratorExpression',  // CAUTION: It's deferred to ES7.
        Identifier: 'Identifier',
        IfStatement: 'IfStatement',
        ImportDeclaration: 'ImportDeclaration',
        ImportDefaultSpecifier: 'ImportDefaultSpecifier',
        ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
        ImportSpecifier: 'ImportSpecifier',
        Literal: 'Literal',
        LabeledStatement: 'LabeledStatement',
        LogicalExpression: 'LogicalExpression',
        MemberExpression: 'MemberExpression',
        MethodDefinition: 'MethodDefinition',
        ModuleSpecifier: 'ModuleSpecifier',
        NewExpression: 'NewExpression',
        ObjectExpression: 'ObjectExpression',
        ObjectPattern: 'ObjectPattern',
        Program: 'Program',
        Property: 'Property',
        ReturnStatement: 'ReturnStatement',
        SequenceExpression: 'SequenceExpression',
        SpreadElement: 'SpreadElement',
        SwitchStatement: 'SwitchStatement',
        SwitchCase: 'SwitchCase',
        TaggedTemplateExpression: 'TaggedTemplateExpression',
        TemplateElement: 'TemplateElement',
        TemplateLiteral: 'TemplateLiteral',
        ThisExpression: 'ThisExpression',
        ThrowStatement: 'ThrowStatement',
        TryStatement: 'TryStatement',
        UnaryExpression: 'UnaryExpression',
        UpdateExpression: 'UpdateExpression',
        VariableDeclaration: 'VariableDeclaration',
        VariableDeclarator: 'VariableDeclarator',
        WhileStatement: 'WhileStatement',
        WithStatement: 'WithStatement',
        YieldExpression: 'YieldExpression'
    };

    VisitorKeys = {
        AssignmentExpression: ['left', 'right'],
        ArrayExpression: ['elements'],
        ArrayPattern: ['elements'],
        ArrowFunctionExpression: ['params', 'defaults', 'rest', 'body'],
        AwaitExpression: ['argument'], // CAUTION: It's deferred to ES7.
        BlockStatement: ['body'],
        BinaryExpression: ['left', 'right'],
        BreakStatement: ['label'],
        CallExpression: ['callee', 'arguments'],
        CatchClause: ['param', 'body'],
        ClassBody: ['body'],
        ClassDeclaration: ['id', 'body', 'superClass'],
        ClassExpression: ['id', 'body', 'superClass'],
        ComprehensionBlock: ['left', 'right'],  // CAUTION: It's deferred to ES7.
        ComprehensionExpression: ['blocks', 'filter', 'body'],  // CAUTION: It's deferred to ES7.
        ConditionalExpression: ['test', 'consequent', 'alternate'],
        ContinueStatement: ['label'],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ['body', 'test'],
        EmptyStatement: [],
        ExportBatchSpecifier: [],
        ExportDeclaration: ['declaration', 'specifiers', 'source'],
        ExportSpecifier: ['id', 'name'],
        ExpressionStatement: ['expression'],
        ForStatement: ['init', 'test', 'update', 'body'],
        ForInStatement: ['left', 'right', 'body'],
        ForOfStatement: ['left', 'right', 'body'],
        FunctionDeclaration: ['id', 'params', 'defaults', 'rest', 'body'],
        FunctionExpression: ['id', 'params', 'defaults', 'rest', 'body'],
        GeneratorExpression: ['blocks', 'filter', 'body'],  // CAUTION: It's deferred to ES7.
        Identifier: [],
        IfStatement: ['test', 'consequent', 'alternate'],
        ImportDeclaration: ['specifiers', 'source'],
        ImportDefaultSpecifier: ['id'],
        ImportNamespaceSpecifier: ['id'],
        ImportSpecifier: ['id', 'name'],
        Literal: [],
        LabeledStatement: ['label', 'body'],
        LogicalExpression: ['left', 'right'],
        MemberExpression: ['object', 'property'],
        MethodDefinition: ['key', 'value'],
        ModuleSpecifier: [],
        NewExpression: ['callee', 'arguments'],
        ObjectExpression: ['properties'],
        ObjectPattern: ['properties'],
        Program: ['body'],
        Property: ['key', 'value'],
        ReturnStatement: ['argument'],
        SequenceExpression: ['expressions'],
        SpreadElement: ['argument'],
        SwitchStatement: ['discriminant', 'cases'],
        SwitchCase: ['test', 'consequent'],
        TaggedTemplateExpression: ['tag', 'quasi'],
        TemplateElement: [],
        TemplateLiteral: ['quasis', 'expressions'],
        ThisExpression: [],
        ThrowStatement: ['argument'],
        TryStatement: ['block', 'handlers', 'handler', 'guardedHandlers', 'finalizer'],
        UnaryExpression: ['argument'],
        UpdateExpression: ['argument'],
        VariableDeclaration: ['declarations'],
        VariableDeclarator: ['id', 'init'],
        WhileStatement: ['test', 'body'],
        WithStatement: ['object', 'body'],
        YieldExpression: ['argument']
    };

    // unique id
    BREAK = {};
    SKIP = {};
    REMOVE = {};

    VisitorOption = {
        Break: BREAK,
        Skip: SKIP,
        Remove: REMOVE
    };

    function Reference(parent, key) {
        this.parent = parent;
        this.key = key;
    }

    Reference.prototype.replace = function replace(node) {
        this.parent[this.key] = node;
    };

    Reference.prototype.remove = function remove() {
        if (isArray(this.parent)) {
            this.parent.splice(this.key, 1);
            return true;
        } else {
            this.replace(null);
            return false;
        }
    };

    function Element(node, path, wrap, ref) {
        this.node = node;
        this.path = path;
        this.wrap = wrap;
        this.ref = ref;
    }

    function Controller() { }

    // API:
    // return property path array from root to current node
    Controller.prototype.path = function path() {
        var i, iz, j, jz, result, element;

        function addToPath(result, path) {
            if (isArray(path)) {
                for (j = 0, jz = path.length; j < jz; ++j) {
                    result.push(path[j]);
                }
            } else {
                result.push(path);
            }
        }

        // root node
        if (!this.__current.path) {
            return null;
        }

        // first node is sentinel, second node is root element
        result = [];
        for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
            element = this.__leavelist[i];
            addToPath(result, element.path);
        }
        addToPath(result, this.__current.path);
        return result;
    };

    // API:
    // return type of current node
    Controller.prototype.type = function () {
        var node = this.current();
        return node.type || this.__current.wrap;
    };

    // API:
    // return array of parent elements
    Controller.prototype.parents = function parents() {
        var i, iz, result;

        // first node is sentinel
        result = [];
        for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
            result.push(this.__leavelist[i].node);
        }

        return result;
    };

    // API:
    // return current node
    Controller.prototype.current = function current() {
        return this.__current.node;
    };

    Controller.prototype.__execute = function __execute(callback, element) {
        var previous, result;

        result = undefined;

        previous  = this.__current;
        this.__current = element;
        this.__state = null;
        if (callback) {
            result = callback.call(this, element.node, this.__leavelist[this.__leavelist.length - 1].node);
        }
        this.__current = previous;

        return result;
    };

    // API:
    // notify control skip / break
    Controller.prototype.notify = function notify(flag) {
        this.__state = flag;
    };

    // API:
    // skip child nodes of current node
    Controller.prototype.skip = function () {
        this.notify(SKIP);
    };

    // API:
    // break traversals
    Controller.prototype['break'] = function () {
        this.notify(BREAK);
    };

    // API:
    // remove node
    Controller.prototype.remove = function () {
        this.notify(REMOVE);
    };

    Controller.prototype.__initialize = function(root, visitor) {
        this.visitor = visitor;
        this.root = root;
        this.__worklist = [];
        this.__leavelist = [];
        this.__current = null;
        this.__state = null;
        this.__fallback = visitor.fallback === 'iteration';
        this.__keys = VisitorKeys;
        if (visitor.keys) {
            this.__keys = extend(objectCreate(this.__keys), visitor.keys);
        }
    };

    function isNode(node) {
        if (node == null) {
            return false;
        }
        return typeof node === 'object' && typeof node.type === 'string';
    }

    function isProperty(nodeType, key) {
        return (nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) && 'properties' === key;
    }

    Controller.prototype.traverse = function traverse(root, visitor) {
        var worklist,
            leavelist,
            element,
            node,
            nodeType,
            ret,
            key,
            current,
            current2,
            candidates,
            candidate,
            sentinel;

        this.__initialize(root, visitor);

        sentinel = {};

        // reference
        worklist = this.__worklist;
        leavelist = this.__leavelist;

        // initialize
        worklist.push(new Element(root, null, null, null));
        leavelist.push(new Element(null, null, null, null));

        while (worklist.length) {
            element = worklist.pop();

            if (element === sentinel) {
                element = leavelist.pop();

                ret = this.__execute(visitor.leave, element);

                if (this.__state === BREAK || ret === BREAK) {
                    return;
                }
                continue;
            }

            if (element.node) {

                ret = this.__execute(visitor.enter, element);

                if (this.__state === BREAK || ret === BREAK) {
                    return;
                }

                worklist.push(sentinel);
                leavelist.push(element);

                if (this.__state === SKIP || ret === SKIP) {
                    continue;
                }

                node = element.node;
                nodeType = element.wrap || node.type;
                candidates = this.__keys[nodeType];
                if (!candidates) {
                    if (this.__fallback) {
                        candidates = objectKeys(node);
                    } else {
                        throw new Error('Unknown node type ' + nodeType + '.');
                    }
                }

                current = candidates.length;
                while ((current -= 1) >= 0) {
                    key = candidates[current];
                    candidate = node[key];
                    if (!candidate) {
                        continue;
                    }

                    if (isArray(candidate)) {
                        current2 = candidate.length;
                        while ((current2 -= 1) >= 0) {
                            if (!candidate[current2]) {
                                continue;
                            }
                            if (isProperty(nodeType, candidates[current])) {
                                element = new Element(candidate[current2], [key, current2], 'Property', null);
                            } else if (isNode(candidate[current2])) {
                                element = new Element(candidate[current2], [key, current2], null, null);
                            } else {
                                continue;
                            }
                            worklist.push(element);
                        }
                    } else if (isNode(candidate)) {
                        worklist.push(new Element(candidate, key, null, null));
                    }
                }
            }
        }
    };

    Controller.prototype.replace = function replace(root, visitor) {
        function removeElem(element) {
            var i,
                key,
                nextElem,
                parent;

            if (element.ref.remove()) {
                // When the reference is an element of an array.
                key = element.ref.key;
                parent = element.ref.parent;

                // If removed from array, then decrease following items' keys.
                i = worklist.length;
                while (i--) {
                    nextElem = worklist[i];
                    if (nextElem.ref && nextElem.ref.parent === parent) {
                        if  (nextElem.ref.key < key) {
                            break;
                        }
                        --nextElem.ref.key;
                    }
                }
            }
        }

        var worklist,
            leavelist,
            node,
            nodeType,
            target,
            element,
            current,
            current2,
            candidates,
            candidate,
            sentinel,
            outer,
            key;

        this.__initialize(root, visitor);

        sentinel = {};

        // reference
        worklist = this.__worklist;
        leavelist = this.__leavelist;

        // initialize
        outer = {
            root: root
        };
        element = new Element(root, null, null, new Reference(outer, 'root'));
        worklist.push(element);
        leavelist.push(element);

        while (worklist.length) {
            element = worklist.pop();

            if (element === sentinel) {
                element = leavelist.pop();

                target = this.__execute(visitor.leave, element);

                // node may be replaced with null,
                // so distinguish between undefined and null in this place
                if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
                    // replace
                    element.ref.replace(target);
                }

                if (this.__state === REMOVE || target === REMOVE) {
                    removeElem(element);
                }

                if (this.__state === BREAK || target === BREAK) {
                    return outer.root;
                }
                continue;
            }

            target = this.__execute(visitor.enter, element);

            // node may be replaced with null,
            // so distinguish between undefined and null in this place
            if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
                // replace
                element.ref.replace(target);
                element.node = target;
            }

            if (this.__state === REMOVE || target === REMOVE) {
                removeElem(element);
                element.node = null;
            }

            if (this.__state === BREAK || target === BREAK) {
                return outer.root;
            }

            // node may be null
            node = element.node;
            if (!node) {
                continue;
            }

            worklist.push(sentinel);
            leavelist.push(element);

            if (this.__state === SKIP || target === SKIP) {
                continue;
            }

            nodeType = element.wrap || node.type;
            candidates = this.__keys[nodeType];
            if (!candidates) {
                if (this.__fallback) {
                    candidates = objectKeys(node);
                } else {
                    throw new Error('Unknown node type ' + nodeType + '.');
                }
            }

            current = candidates.length;
            while ((current -= 1) >= 0) {
                key = candidates[current];
                candidate = node[key];
                if (!candidate) {
                    continue;
                }

                if (isArray(candidate)) {
                    current2 = candidate.length;
                    while ((current2 -= 1) >= 0) {
                        if (!candidate[current2]) {
                            continue;
                        }
                        if (isProperty(nodeType, candidates[current])) {
                            element = new Element(candidate[current2], [key, current2], 'Property', new Reference(candidate, current2));
                        } else if (isNode(candidate[current2])) {
                            element = new Element(candidate[current2], [key, current2], null, new Reference(candidate, current2));
                        } else {
                            continue;
                        }
                        worklist.push(element);
                    }
                } else if (isNode(candidate)) {
                    worklist.push(new Element(candidate, key, null, new Reference(node, key)));
                }
            }
        }

        return outer.root;
    };

    function traverse(root, visitor) {
        var controller = new Controller();
        return controller.traverse(root, visitor);
    }

    function replace(root, visitor) {
        var controller = new Controller();
        return controller.replace(root, visitor);
    }

    function extendCommentRange(comment, tokens) {
        var target;

        target = upperBound(tokens, function search(token) {
            return token.range[0] > comment.range[0];
        });

        comment.extendedRange = [comment.range[0], comment.range[1]];

        if (target !== tokens.length) {
            comment.extendedRange[1] = tokens[target].range[0];
        }

        target -= 1;
        if (target >= 0) {
            comment.extendedRange[0] = tokens[target].range[1];
        }

        return comment;
    }

    function attachComments(tree, providedComments, tokens) {
        // At first, we should calculate extended comment ranges.
        var comments = [], comment, len, i, cursor;

        if (!tree.range) {
            throw new Error('attachComments needs range information');
        }

        // tokens array is empty, we attach comments to tree as 'leadingComments'
        if (!tokens.length) {
            if (providedComments.length) {
                for (i = 0, len = providedComments.length; i < len; i += 1) {
                    comment = deepCopy(providedComments[i]);
                    comment.extendedRange = [0, tree.range[0]];
                    comments.push(comment);
                }
                tree.leadingComments = comments;
            }
            return tree;
        }

        for (i = 0, len = providedComments.length; i < len; i += 1) {
            comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
        }

        // This is based on John Freeman's implementation.
        cursor = 0;
        traverse(tree, {
            enter: function (node) {
                var comment;

                while (cursor < comments.length) {
                    comment = comments[cursor];
                    if (comment.extendedRange[1] > node.range[0]) {
                        break;
                    }

                    if (comment.extendedRange[1] === node.range[0]) {
                        if (!node.leadingComments) {
                            node.leadingComments = [];
                        }
                        node.leadingComments.push(comment);
                        comments.splice(cursor, 1);
                    } else {
                        cursor += 1;
                    }
                }

                // already out of owned node
                if (cursor === comments.length) {
                    return VisitorOption.Break;
                }

                if (comments[cursor].extendedRange[0] > node.range[1]) {
                    return VisitorOption.Skip;
                }
            }
        });

        cursor = 0;
        traverse(tree, {
            leave: function (node) {
                var comment;

                while (cursor < comments.length) {
                    comment = comments[cursor];
                    if (node.range[1] < comment.extendedRange[0]) {
                        break;
                    }

                    if (node.range[1] === comment.extendedRange[0]) {
                        if (!node.trailingComments) {
                            node.trailingComments = [];
                        }
                        node.trailingComments.push(comment);
                        comments.splice(cursor, 1);
                    } else {
                        cursor += 1;
                    }
                }

                // already out of owned node
                if (cursor === comments.length) {
                    return VisitorOption.Break;
                }

                if (comments[cursor].extendedRange[0] > node.range[1]) {
                    return VisitorOption.Skip;
                }
            }
        });

        return tree;
    }

    exports.version = '1.8.1-dev';
    exports.Syntax = Syntax;
    exports.traverse = traverse;
    exports.replace = replace;
    exports.attachComments = attachComments;
    exports.VisitorKeys = VisitorKeys;
    exports.VisitorOption = VisitorOption;
    exports.Controller = Controller;
    exports.cloneEnvironment = function () { return clone({}); };

    return exports;
}));
/* vim: set sw=4 ts=4 et tw=80 : */

},{}],26:[function(require,module,exports){
'use strict';

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var pendingException;
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			try {
				to[keys[i]] = from[keys[i]];
			} catch (err) {
				if (pendingException === undefined) {
					pendingException = err;
				}
			}
		}
	}

	if (pendingException) {
		throw pendingException;
	}

	return to;
};

},{}],27:[function(require,module,exports){
/**
 * @fileoverview Main ESLint object.
 * @author Nicholas C. Zakas
 * @copyright 2013 Nicholas C. Zakas. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var esprima = require("esprima-fb"),
    estraverse = require("estraverse-fb"),
    escope = require("escope"),
    environments = require("../conf/environments.json"),
    assign = require("object-assign"),
    rules = require("./rules"),
    util = require("./util"),
    attachComments = require("./util/attach-comments"),
    Validator = require("./util/validator"),
    RuleContext = require("./rule-context"),
    timing = require("./timing"),
    createTokenStore = require("./token-store.js"),
    EventEmitter = require("events").EventEmitter,
    createDebug = require("debug");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

var debug = createDebug("eslint:linter");

function escapeRegExp(rx) {
    return rx.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

/**
 * Parses a list of "name:boolean_value" or/and "name" options divided by comma or
 * whitespace.
 * @param {string} string The string to parse.
 * @returns {Object} Result map object of names and boolean values
 */
function parseBooleanConfig(string) {
    var items = {};
    // Collapse whitespace around : to make parsing easier
    string = string.replace(/\s*:\s*/g, ":");
    // Collapse whitespace around ,
    string = string.replace(/\s*,\s*/g, ",");
    string.split(/\s|,+/).forEach(function(name) {
        if (!name) {
            return;
        }
        var pos = name.indexOf(":"),
            value;
        if (pos !== -1) {
            value = name.substring(pos + 1, name.length);
            name = name.substring(0, pos);
        }

        items[name] = (value === "true");

    });
    return items;
}

/**
 * Parses a JSON-like config.
 * @param {string} string The string to parse.
 * @returns {Object} Result map object
 */
function parseJsonConfig(string) {
    var items = {};
    string = string.replace(/([a-z0-9\-\/]+):/g, "\"$1\":").replace(/(\]|[0-9])\s+(?=")/, "$1,");
    try {
        items = JSON.parse("{" + string + "}");
    } catch(e) { }

    return items;
}

/**
 * Parses a config of values separated by comma.
 * @param {string} string The string to parse.
 * @returns {Object} Result map of values and true values
 */
function parseListConfig(string) {
    var items = {};
    // Collapse whitespace around ,
    string = string.replace(/\s*,\s*/g, ",");
    string.split(/,+/).forEach(function(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        items[name] = true;
    });
    return items;
}

/**
 * @param {Scope} scope The scope object to check.
 * @param {string} name The name of the variable to look up.
 * @returns {Variable} The variable object if found or null if not.
 */
function getVariable(scope, name) {
    var variable = null;
    scope.variables.some(function(v) {
        if (v.name === name) {
            variable = v;
            return true;
        } else {
            return false;
        }

    });
    return variable;
}

/**
 * Ensures that variables representing built-in properties of the Global Object,
 * and any globals declared by special block comments, are present in the global
 * scope.
 * @param {ASTNode} program The top node of the AST.
 * @param {Scope} globalScope The global scope.
 * @param {Object} config The existing configuration data.
 * @returns {void}
 */
function addDeclaredGlobals(program, globalScope, config) {
    var declaredGlobals = {},
        explicitGlobals = {},
        builtin = environments.builtin;

    assign(declaredGlobals, builtin);

    Object.keys(config.env).forEach(function (name) {
        if (config.env[name]) {
            var environmentGlobals = environments[name] && environments[name].globals;
            if (environmentGlobals) {
                assign(declaredGlobals, environmentGlobals);
            }
        }
    });

    assign(declaredGlobals, config.globals);
    assign(explicitGlobals, config.astGlobals);

    Object.keys(declaredGlobals).forEach(function(name) {
        var variable = getVariable(globalScope, name);
        if (!variable) {
            variable = new escope.Variable(name, globalScope);
            variable.eslintExplicitGlobal = false;
            globalScope.variables.push(variable);
        }
        variable.writeable = declaredGlobals[name];
    });

    Object.keys(explicitGlobals).forEach(function(name) {
        var variable = getVariable(globalScope, name);
        if (!variable) {
            variable = new escope.Variable(name, globalScope);
            variable.eslintExplicitGlobal = true;
            globalScope.variables.push(variable);
        }
        variable.writeable = explicitGlobals[name];
    });
}

/**
 * Add data to reporting configuration to disable reporting for list of rules
 * starting from start location
 * @param  {Object[]} reportingConfig Current reporting configuration
 * @param  {Object} start Position to start
 * @param  {string[]} rules List of rules
 * @returns {void}
 */
function disableReporting(reportingConfig, start, rules) {

    if (rules.length) {
        rules.forEach(function(rule) {
            reportingConfig.push({
                start: start,
                end: null,
                rule: rule
            });
        });
    } else {
        reportingConfig.push({
            start: start,
            end: null,
            rule: null
        });
    }
}

/**
 * Add data to reporting configuration to enable reporting for list of rules
 * starting from start location
 * @param  {Object[]} reportingConfig Current reporting configuration
 * @param  {Object} start Position to start
 * @param  {string[]} rules List of rules
 * @returns {void}
 */
function enableReporting(reportingConfig, start, rules) {
    var i;

    if (rules.length) {
        rules.forEach(function(rule) {
            for (i = reportingConfig.length - 1; i >= 0; i--) {
                if (!reportingConfig[i].end && reportingConfig[i].rule === rule ) {
                    reportingConfig[i].end = start;
                    break;
                }
            }
        });
    } else {
        // find all previous disabled locations if they was started as list of rules
        var prevStart;
        for (i = reportingConfig.length - 1; i >= 0; i--) {
            if (prevStart && prevStart !== reportingConfig[i].start) {
                break;
            }

            if (!reportingConfig[i].end) {
                reportingConfig[i].end = start;
                prevStart = reportingConfig[i].start;
            }
        }
    }
}


/**
 * Parses comments in file to extract file-specific config of rules, globals
 * and environments and merges them with global config; also code blocks
 * where reporting is disabled or enabled and merges them with reporting config.
 * @param {ASTNode} ast The top node of the AST.
 * @param {Object} config The existing configuration data.
 * @param {Object[]} reportingConfig The existing reporting configuration data.
 * @returns {void}
 */
function modifyConfigsFromComments(ast, config, reportingConfig) {

    var commentConfig = {
        astGlobals: {},
        rules: {},
        env: {}
    };
    var commentRules = {};

    ast.comments.forEach(function(comment) {
        if (comment.type === "Block") {

            var value = comment.value.trim();
            var match = /^(eslint-\w+|eslint|globals?)(\s|$)/.exec(value);

            if (match) {
                value = value.substring(match.index + match[1].length);

                switch (match[1]) {
                    case "globals":
                    case "global":
                        util.mixin(commentConfig.astGlobals, parseBooleanConfig(value));
                        break;

                    case "eslint-env":
                        util.mixin(commentConfig.env, parseListConfig(value));
                        break;

                    case "eslint-disable":
                        disableReporting(reportingConfig, comment.loc.start, Object.keys(parseListConfig(value)));
                        break;

                    case "eslint-enable":
                        enableReporting(reportingConfig, comment.loc.start, Object.keys(parseListConfig(value)));
                        break;

                    case "eslint":
                        var items = parseJsonConfig(value);
                        Object.keys(items).forEach(function(name) {
                            var ruleValue = items[name];
                            if (typeof ruleValue === "number" || (Array.isArray(ruleValue) && typeof ruleValue[0] === "number")) {
                                commentRules[name] = ruleValue;
                            }
                        });
                        break;

                    // no default
                }
            }
        }
    });

    // apply environment rules before user rules
    Object.keys(commentConfig.env).forEach(function (name) {
        var environmentRules = environments[name] && environments[name].rules;
        if (commentConfig.env[name] && environmentRules) {
            util.mixin(commentConfig.rules, environmentRules);
        }
    });
    util.mixin(commentConfig.rules, commentRules);

    util.mergeConfigs(config, commentConfig);
}

/**
 * Check if message of rule with ruleId should be ignored in location
 * @param  {Object[]} reportingConfig  Collection of ignore records
 * @param  {string} ruleId   Id of rule
 * @param  {Object} location Location of message
 * @returns {boolean}          True if message should be ignored, false otherwise
 */
function isDisabledByReportingConfig(reportingConfig, ruleId, location) {

    for (var i = 0, c = reportingConfig.length; i < c; i++) {

        var ignore = reportingConfig[i];
        if ((!ignore.rule || ignore.rule === ruleId) &&
            (location.line > ignore.start.line || (location.line === ignore.start.line && location.column >= ignore.start.column)) &&
            (!ignore.end || (location.line < ignore.end.line || (location.line === ignore.end.line && location.column <= ignore.end.column)))) {
                return true;
        }
    }

    return false;
}

/**
 * Process initial config to make it safe to extend by file comment config
 * @param  {Object} config Initial config
 * @returns {Object}        Processed config
 */
function prepareConfig(config) {

    config.globals = config.globals || config.global || {};
    delete config.global;

    var copiedRules = {};
    if (typeof config.rules === "object") {
        Object.keys(config.rules).forEach(function(k) {
            var rule = config.rules[k];
            if (Array.isArray(rule)) {
                copiedRules[k] = rule.slice();
            } else {
                copiedRules[k] = rule;
            }
        });
    }

    return {
        rules: copiedRules,
        globals: util.mergeConfigs({}, config.globals),
        env: util.mergeConfigs({}, config.env || {}),
        settings: util.mergeConfigs({}, config.settings || {})
    };
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Object that is responsible for verifying JavaScript text
 * @name eslint
 */
module.exports = (function() {

    var api = Object.create(new EventEmitter()),
        messages = [],
        currentText = null,
        currentTextLines = [],
        currentConfig = null,
        currentTokens = null,
        currentScopes = null,
        scopeMap = null,
        currentFilename = null,
        controller = null,
        reportingConfig = [],
        commentLocsEnter = [],
        commentLocsExit = [],
        validator;

    /**
     * Parses text into an AST. Moved out here because the try-catch prevents
     * optimization of functions, so it's best to keep the try-catch as isolated
     * as possible
     * @param {string} text The text to parse.
     * @returns {ASTNode} The AST if successful or null if not.
     * @private
     */
    function parse(text) {
        /*
         * Check for parsing errors first. If there's a parsing error, nothing
         * else can happen. However, a parsing error does not throw an error
         * from this method - it's just considered a fatal error message, a
         * problem that ESLint identified just like any other.
         */
        try {
            debug("Parsing text");
            var ast = esprima.parse(text, {
                loc: true,
                range: true,
                raw: true,
                tokens: true,
                comment: true
            });

            attachComments(ast, ast.comments, ast.tokens);

            return ast;
        } catch (ex) {
            debug("Parse failed: " + ex.message);
            messages.push({
                fatal: true,
                severity: 2,

                // messages come as "Line X: Unexpected token foo", so strip off leading part
                message: ex.message.substring(ex.message.indexOf(":") + 1).trim(),

                line: ex.lineNumber,
                column: ex.column
            });

            return null;
        }
    }

    /**
     * Check collection of comments to prevent double event for comment as
     * leading and trailing, then emit event if passing
     * @param {ASTNode[]} comments Collection of comment nodes
     * @param {Object[]} locs List of locations of previous comment nodes
     * @param {string} eventName Event name postfix
     * @returns {void}
     */
    function emitComments(comments, locs, eventName) {

        if (comments.length) {
            comments.forEach(function(node) {
                if (locs.indexOf(node.loc) >= 0) {
                    locs.splice(locs.indexOf(node.loc), 1);
                } else {
                    locs.push(node.loc);
                    api.emit(node.type + eventName, node);
                }
            });
        }
    }

    /**
     * Shortcut to check and emit enter of comment nodes
     * @param {ASTNode[]} comments Collection of comment nodes
     * @returns {void}
     */
    function emitCommentsEnter(comments) {
        emitComments(comments, commentLocsEnter, "Comment");
    }

    /**
     * Shortcut to check and emit exit of comment nodes
     * @param {ASTNode[]} comments Collection of comment nodes
     * @returns {void}
     */
    function emitCommentsExit(comments) {
        emitComments(comments, commentLocsExit, "Comment:exit");
    }

    /**
     * Get the severity level of a rule (0 - none, 1 - warning, 2 - error)
     * Returns 0 if the rule config is not valid (an Array or a number)
     * @param {Array|number} ruleConfig rule configuration
     * @returns {number} 0, 1, or 2, indicating rule severity
     */
    function getRuleSeverity(ruleConfig) {
        if (typeof ruleConfig === "number") {
            return ruleConfig;
        } else if (Array.isArray(ruleConfig)) {
            return ruleConfig[0];
        } else {
            return 0;
        }
    }

    /**
     * Get the options for a rule (not including severity), if any
     * @param {Array|number} ruleConfig rule configuration
     * @returns {Array} of rule options, empty Array if none
     */
    function getRuleOptions(ruleConfig) {
        if (Array.isArray(ruleConfig)) {
            return ruleConfig.slice(1);
        } else {
            return [];
        }
    }

    // set unlimited listeners (see https://github.com/eslint/eslint/issues/524)
    api.setMaxListeners(0);

    /**
     * Resets the internal state of the object.
     * @returns {void}
     */
    api.reset = function() {
        this.removeAllListeners();
        messages = [];
        currentConfig = null;
        currentText = null;
        currentTextLines = [];
        currentTokens = null;
        currentScopes = null;
        scopeMap = null;
        controller = null;
        reportingConfig = [];
        commentLocsEnter = [];
        commentLocsExit = [];
        validator = null;
    };

    /**
     * Verifies the text against the rules specified by the second argument.
     * @param {string} text The JavaScript text to verify.
     * @param {Object} config An object whose keys specify the rules to use.
     * @param {string=} filename The optional filename of the file being checked.
     *      If this is not set, the filename will default to '<input>' in the rule context.
     * @param {boolean=} saveState Indicates if the state from the last run should be saved.
     *      Mostly useful for testing purposes.
     * @returns {Object[]} The results as an array of messages or null if no messages.
     */
    api.verify = function(text, config, filename, saveState) {

        var ast,
            shebang,
            validatorOptions = {};

        // set the current parsed filename
        currentFilename = filename;

        if (!saveState) {
            this.reset();
        }

        ast = parse(text.replace(/^#!([^\r\n]+)/, function(match, captured) {
            shebang = captured;
            return "//" + captured;
        }));

        // if Esprima failed to parse the file, there's no sense in setting up rules
        if (ast) {
            // process initial config to make it safe to extend
            config = prepareConfig(config);

            // get settings information for ECMAScript version and JSX
            if (typeof config.settings.ecmascript === "number" && config.settings.ecmascript > 5) {
                validatorOptions.ecmascript = config.settings.ecmascript;
            }

            validatorOptions.jsx = !!config.settings.jsx;
            validator = new Validator(validatorOptions);
            debug("Language options loaded: " + JSON.stringify(config.settings));

            // parse global comments and modify config
            modifyConfigsFromComments(ast, config, reportingConfig);

            // enable appropriate rules
            Object.keys(config.rules).filter(function(key) {
                return getRuleSeverity(config.rules[key]) > 0;
            }).forEach(function(key) {

                var ruleCreator = rules.get(key),
                    severity = getRuleSeverity(config.rules[key]),
                    options = getRuleOptions(config.rules[key]),
                    rule;

                if (ruleCreator) {
                    try {
                        rule = ruleCreator(new RuleContext(key, api, severity, options, config.settings));

                        // add all the node types as listeners
                        Object.keys(rule).forEach(function(nodeType) {
                            api.on(nodeType, timing.enabled
                                ? timing.time(key, rule[nodeType])
                                : rule[nodeType]
                            );
                        });
                    } catch(ex) {
                        ex.message = "Error while loading rule '" + key + "': " + ex.message;
                        throw ex;
                    }

                } else {
                    throw new Error("Definition for rule '" + key + "' was not found.");
                }
            });

            // save config so rules can access as necessary
            currentConfig = config;
            currentText = text;
            controller = new estraverse.Controller();

            // gather data that may be needed by the rules
            currentScopes = escope.analyze(ast, { ignoreEval: true }).scopes;

            /*
             * Index the scopes by the start range of their block for efficient
             * lookup in getScope.
             */
            scopeMap = [];
            currentScopes.forEach(function (scope, index) {
                var range = scope.block.range[0];

                // Sometimes two scopes are returned for a given node. This is
                // handled later in a known way, so just don't overwrite here.
                if (!scopeMap[range]) {
                    scopeMap[range] = index;
                }
            });

            /*
             * Split text here into array of lines so
             * it's not being done repeatedly
             * by individual rules.
             */
            currentTextLines = currentText.split(/\r?\n|\u2028|\u2029/g);

            // Freezing so array isn't accidentally changed by a rule.
            Object.freeze(currentTextLines);

            currentTokens = createTokenStore(ast.tokens);
            Object.keys(currentTokens).forEach(function(method) {
                api[method] = currentTokens[method];
            });

            // augment global scope with declared global variables
            addDeclaredGlobals(ast, currentScopes[0], currentConfig);

            // remove shebang comments
            if (shebang && ast.comments.length && ast.comments[0].value === shebang) {
                ast.comments.splice(0, 1);

                if (ast.body.length && ast.body[0].leadingComments && ast.body[0].leadingComments[0].value === shebang) {
                    ast.body[0].leadingComments.splice(0, 1);
                }
            }

            /*
             * Each node has a type property. Whenever a particular type of node is found,
             * an event is fired. This allows any listeners to automatically be informed
             * that this type of node has been found and react accordingly.
             */
            controller.traverse(ast, {
                enter: function(node, parent) {

                    var comments = api.getComments(node),
                        validation;

                    debug("Starting traversal");

                    emitCommentsEnter(comments.leading);
                    node.parent = parent;

                    validation = validator.validate(node);
                    if (!validation.valid) {
                        messages.push({
                            fatal: true,
                            severity: 2,
                            message: validation.message,
                            node: node,
                            line: validation.line,
                            column: validation.column
                        });

                        // no further parsing should happen
                        this.break();
                    }


                    api.emit(node.type, node);
                    emitCommentsEnter(comments.trailing);
                },
                leave: function(node) {

                    var comments = api.getComments(node);

                    emitCommentsExit(comments.trailing);
                    api.emit(node.type + ":exit", node);
                    emitCommentsExit(comments.leading);
                }
            });

        }

        // sort by line and column
        messages.sort(function(a, b) {
            var lineDiff = a.line - b.line;

            if (lineDiff === 0) {
                return a.column - b.column;
            } else {
                return lineDiff;
            }
        });

        return messages;
    };

    /**
     * Reports a message from one of the rules.
     * @param {string} ruleId The ID of the rule causing the message.
     * @param {number} severity The severity level of the rule as configured.
     * @param {ASTNode} node The AST node that the message relates to.
     * @param {Object=} location An object containing the error line and column
     *      numbers. If location is not provided the node's start location will
     *      be used.
     * @param {string} message The actual message.
     * @param {Object} opts Optional template data which produces a formatted message
     *     with symbols being replaced by this object's values.
     * @returns {void}
     */
    api.report = function(ruleId, severity, node, location, message, opts) {

        if (typeof location === "string") {
            opts = message;
            message = location;
            location = node.loc.start;
        }

        Object.keys(opts || {}).forEach(function (key) {
            var rx = new RegExp("{{" + escapeRegExp(key) + "}}", "g");
            message = message.replace(rx, opts[key]);
        });

        if (isDisabledByReportingConfig(reportingConfig, ruleId, location)) {
            return;
        }

        messages.push({
            ruleId: ruleId,
            severity: severity,
            node: node,
            message: message,
            line: location.line,
            column: location.column,
            source: api.getSource(node)
        });
    };

    /**
     * Gets the source code for the given node.
     * @param {ASTNode=} node The AST node to get the text for.
     * @param {int=} beforeCount The number of characters before the node to retrieve.
     * @param {int=} afterCount The number of characters after the node to retrieve.
     * @returns {string} The text representing the AST node.
     */
    api.getSource = function(node, beforeCount, afterCount) {
        if (node) {
            return (currentText !== null) ? currentText.slice(Math.max(node.range[0] - (beforeCount || 0), 0),
                node.range[1] + (afterCount || 0)) : null;
        } else {
            return currentText;
        }

    };

    /**
     * Gets the entire source text split into an array of lines.
     * @returns {Array} The source text as an array of lines.
     */
    api.getSourceLines = function() {
        return currentTextLines;
    };

    /**
     * Gets all comments for the given node.
     * @param {ASTNode} node The AST node to get the comments for.
     * @returns {Object} The list of comments indexed by their position.
     */
    api.getComments = function(node) {

        var leadingComments = node.leadingComments || [],
            trailingComments = node.trailingComments || [];

        /*
         * Esprima adds a "comments" array on Program nodes rather than
         * leadingComments/trailingComments. Comments are only left in the
         * Program node comments array if there is no executable code.
         */
        if (node.type === "Program") {
            if (node.body.length === 0) {
                leadingComments = node.comments;
            }
        }

        return {
            leading: leadingComments,
            trailing: trailingComments
        };
    };

    /**
     * Retrieves the JSDoc comment for a given node.
     * @param {ASTNode} node The AST node to get the comment for.
     * @returns {ASTNode} The BlockComment node containing the JSDoc for the
     *      given node or null if not found.
     */
    api.getJSDocComment = function(node) {

        var parent = node.parent,
            line = node.loc.start.line;

        /**
         * Finds a JSDoc comment node in an array of comment nodes.
         * @param {ASTNode[]} comments The array of comment nodes to search.
         * @returns {ASTNode} The node if found, null if not.
         * @private
         */
        function findJSDocComment(comments) {

            if (comments) {
                for (var i = comments.length - 1; i >= 0; i--) {
                    if (comments[i].type === "Block" && comments[i].value.charAt(0) === "*") {

                        if (line - comments[i].loc.end.line <= 1) {
                            return comments[i];
                        } else {
                            break;
                        }
                    }
                }
            }

            return null;
        }

        switch (node.type) {
            case "FunctionDeclaration":
                return findJSDocComment(node.leadingComments);

            case "ArrowFunctionExpression":
            case "FunctionExpression":

                if (parent.type !== "CallExpression" || parent.callee !== node) {
                    while (parent && !parent.leadingComments && !/Function/.test(parent.type)) {
                        parent = parent.parent;
                    }

                    return parent && (parent.type !== "FunctionDeclaration") ? findJSDocComment(parent.leadingComments) : null;
                }

                // falls through

            default:
                return null;
        }
    };

    /**
     * Gets nodes that are ancestors of current node.
     * @returns {ASTNode[]} Array of objects representing ancestors.
     */
    api.getAncestors = function() {
        return controller.parents();
    };


    /**
     * Gets the scope for the current node.
     * @returns {Object} An object representing the current node's scope.
     */
    api.getScope = function() {
        var parents = controller.parents(),
            innerBlock = null,
            selectedScopeIndex;

        // Don't do this for Program nodes - they have no parents
        if (parents.length) {

            // if current node is function declaration, add it to the list
            var current = controller.current();
            if (current.type === "FunctionDeclaration" || current.type === "FunctionExpression") {
                parents.push(current);
            }

            // Ascend the current node's parents
            for (var i = parents.length - 1; i >= 0; --i) {

                // The first node that requires a scope is the node that will be
                // our current node's innermost scope.
                if (escope.Scope.isScopeRequired(parents[i])) {
                    innerBlock = parents[i];
                    break;
                }
            }

            // Find and return the innermost scope
            selectedScopeIndex = scopeMap[innerBlock.range[0]];

            // Named function expressions create two nested scope objects. The
            // outer scope contains only the function expression name. We return
            // the inner scope.
            if (innerBlock.type === "FunctionExpression" && innerBlock.id && innerBlock.id.name) {
                ++selectedScopeIndex;
            }

            return currentScopes[selectedScopeIndex];
        } else {
            return currentScopes[0];    // global scope
        }
    };

    /**
     * Gets the filename for the currently parsed source.
     * @returns {string} The filename associated with the source being parsed.
     *     Defaults to "<input>" if no filename info is present.
     */
    api.getFilename = function() {
        if (typeof currentFilename === "string") {
            return currentFilename;
        } else {
            return "<input>";
        }
    };

    /**
     * Defines a new linting rule.
     * @param {string} ruleId A unique rule identifier
     * @param {Function} ruleModule Function from context to object mapping AST node types to event handlers
     * @returns {void}
     */
    var defineRule = api.defineRule = function(ruleId, ruleModule) {
        rules.define(ruleId, ruleModule);
    };

    /**
     * Defines many new linting rules.
     * @param {object} rules map from unique rule identifier to rule
     * @returns {void}
     */
    api.defineRules = function(rules) {
        Object.getOwnPropertyNames(rules).forEach(function(ruleId) {
            defineRule(ruleId, rules[ruleId]);
        });
    };

    /**
     * Gets the default eslint configuration.
     * @returns {Object} Object mapping rule IDs to their default configurations
     */
    api.defaults = function() {
        return require("../conf/eslint.json");
    };

    return api;

}());

},{"../conf/environments.json":1,"../conf/eslint.json":2,"./rule-context":29,"./rules":30,"./timing":171,"./token-store.js":172,"./util":173,"./util/attach-comments":174,"./util/validator":175,"debug":9,"escope":20,"esprima-fb":21,"estraverse-fb":23,"events":4,"object-assign":26}],28:[function(require,module,exports){
module.exports = function() {
    var rules = Object.create(null);
    rules["block-scoped-var"] = require("./rules/block-scoped-var");
    rules["brace-style"] = require("./rules/brace-style");
    rules["camelcase"] = require("./rules/camelcase");
    rules["comma-spacing"] = require("./rules/comma-spacing");
    rules["comma-style"] = require("./rules/comma-style");
    rules["complexity"] = require("./rules/complexity");
    rules["consistent-return"] = require("./rules/consistent-return");
    rules["consistent-this"] = require("./rules/consistent-this");
    rules["curly"] = require("./rules/curly");
    rules["default-case"] = require("./rules/default-case");
    rules["dot-notation"] = require("./rules/dot-notation");
    rules["eol-last"] = require("./rules/eol-last");
    rules["eqeqeq"] = require("./rules/eqeqeq");
    rules["func-names"] = require("./rules/func-names");
    rules["func-style"] = require("./rules/func-style");
    rules["global-strict"] = require("./rules/global-strict");
    rules["guard-for-in"] = require("./rules/guard-for-in");
    rules["handle-callback-err"] = require("./rules/handle-callback-err");
    rules["key-spacing"] = require("./rules/key-spacing");
    rules["max-depth"] = require("./rules/max-depth");
    rules["max-len"] = require("./rules/max-len");
    rules["max-nested-callbacks"] = require("./rules/max-nested-callbacks");
    rules["max-params"] = require("./rules/max-params");
    rules["max-statements"] = require("./rules/max-statements");
    rules["new-cap"] = require("./rules/new-cap");
    rules["new-parens"] = require("./rules/new-parens");
    rules["no-alert"] = require("./rules/no-alert");
    rules["no-array-constructor"] = require("./rules/no-array-constructor");
    rules["no-bitwise"] = require("./rules/no-bitwise");
    rules["no-caller"] = require("./rules/no-caller");
    rules["no-catch-shadow"] = require("./rules/no-catch-shadow");
    rules["no-comma-dangle"] = require("./rules/no-comma-dangle");
    rules["no-cond-assign"] = require("./rules/no-cond-assign");
    rules["no-console"] = require("./rules/no-console");
    rules["no-constant-condition"] = require("./rules/no-constant-condition");
    rules["no-control-regex"] = require("./rules/no-control-regex");
    rules["no-debugger"] = require("./rules/no-debugger");
    rules["no-delete-var"] = require("./rules/no-delete-var");
    rules["no-div-regex"] = require("./rules/no-div-regex");
    rules["no-dupe-keys"] = require("./rules/no-dupe-keys");
    rules["no-else-return"] = require("./rules/no-else-return");
    rules["no-empty-class"] = require("./rules/no-empty-class");
    rules["no-empty-label"] = require("./rules/no-empty-label");
    rules["no-empty"] = require("./rules/no-empty");
    rules["no-eq-null"] = require("./rules/no-eq-null");
    rules["no-eval"] = require("./rules/no-eval");
    rules["no-ex-assign"] = require("./rules/no-ex-assign");
    rules["no-extend-native"] = require("./rules/no-extend-native");
    rules["no-extra-bind"] = require("./rules/no-extra-bind");
    rules["no-extra-boolean-cast"] = require("./rules/no-extra-boolean-cast");
    rules["no-extra-parens"] = require("./rules/no-extra-parens");
    rules["no-extra-semi"] = require("./rules/no-extra-semi");
    rules["no-extra-strict"] = require("./rules/no-extra-strict");
    rules["no-fallthrough"] = require("./rules/no-fallthrough");
    rules["no-floating-decimal"] = require("./rules/no-floating-decimal");
    rules["no-func-assign"] = require("./rules/no-func-assign");
    rules["no-implied-eval"] = require("./rules/no-implied-eval");
    rules["no-inline-comments"] = require("./rules/no-inline-comments");
    rules["no-inner-declarations"] = require("./rules/no-inner-declarations");
    rules["no-invalid-regexp"] = require("./rules/no-invalid-regexp");
    rules["no-irregular-whitespace"] = require("./rules/no-irregular-whitespace");
    rules["no-iterator"] = require("./rules/no-iterator");
    rules["no-label-var"] = require("./rules/no-label-var");
    rules["no-labels"] = require("./rules/no-labels");
    rules["no-lone-blocks"] = require("./rules/no-lone-blocks");
    rules["no-lonely-if"] = require("./rules/no-lonely-if");
    rules["no-loop-func"] = require("./rules/no-loop-func");
    rules["no-mixed-requires"] = require("./rules/no-mixed-requires");
    rules["no-mixed-spaces-and-tabs"] = require("./rules/no-mixed-spaces-and-tabs");
    rules["no-multi-spaces"] = require("./rules/no-multi-spaces");
    rules["no-multi-str"] = require("./rules/no-multi-str");
    rules["no-multiple-empty-lines"] = require("./rules/no-multiple-empty-lines");
    rules["no-native-reassign"] = require("./rules/no-native-reassign");
    rules["no-negated-in-lhs"] = require("./rules/no-negated-in-lhs");
    rules["no-nested-ternary"] = require("./rules/no-nested-ternary");
    rules["no-new-func"] = require("./rules/no-new-func");
    rules["no-new-object"] = require("./rules/no-new-object");
    rules["no-new-require"] = require("./rules/no-new-require");
    rules["no-new-wrappers"] = require("./rules/no-new-wrappers");
    rules["no-new"] = require("./rules/no-new");
    rules["no-obj-calls"] = require("./rules/no-obj-calls");
    rules["no-octal-escape"] = require("./rules/no-octal-escape");
    rules["no-octal"] = require("./rules/no-octal");
    rules["no-path-concat"] = require("./rules/no-path-concat");
    rules["no-plusplus"] = require("./rules/no-plusplus");
    rules["no-process-env"] = require("./rules/no-process-env");
    rules["no-process-exit"] = require("./rules/no-process-exit");
    rules["no-proto"] = require("./rules/no-proto");
    rules["no-redeclare"] = require("./rules/no-redeclare");
    rules["no-regex-spaces"] = require("./rules/no-regex-spaces");
    rules["no-reserved-keys"] = require("./rules/no-reserved-keys");
    rules["no-restricted-modules"] = require("./rules/no-restricted-modules");
    rules["no-return-assign"] = require("./rules/no-return-assign");
    rules["no-script-url"] = require("./rules/no-script-url");
    rules["no-self-compare"] = require("./rules/no-self-compare");
    rules["no-sequences"] = require("./rules/no-sequences");
    rules["no-shadow-restricted-names"] = require("./rules/no-shadow-restricted-names");
    rules["no-shadow"] = require("./rules/no-shadow");
    rules["no-space-before-semi"] = require("./rules/no-space-before-semi");
    rules["no-spaced-func"] = require("./rules/no-spaced-func");
    rules["no-sparse-arrays"] = require("./rules/no-sparse-arrays");
    rules["no-sync"] = require("./rules/no-sync");
    rules["no-ternary"] = require("./rules/no-ternary");
    rules["no-trailing-spaces"] = require("./rules/no-trailing-spaces");
    rules["no-undef-init"] = require("./rules/no-undef-init");
    rules["no-undef"] = require("./rules/no-undef");
    rules["no-undefined"] = require("./rules/no-undefined");
    rules["no-underscore-dangle"] = require("./rules/no-underscore-dangle");
    rules["no-unreachable"] = require("./rules/no-unreachable");
    rules["no-unused-expressions"] = require("./rules/no-unused-expressions");
    rules["no-unused-vars"] = require("./rules/no-unused-vars");
    rules["no-use-before-define"] = require("./rules/no-use-before-define");
    rules["no-void"] = require("./rules/no-void");
    rules["no-warning-comments"] = require("./rules/no-warning-comments");
    rules["no-with"] = require("./rules/no-with");
    rules["no-wrap-func"] = require("./rules/no-wrap-func");
    rules["one-var"] = require("./rules/one-var");
    rules["operator-assignment"] = require("./rules/operator-assignment");
    rules["padded-blocks"] = require("./rules/padded-blocks");
    rules["quote-props"] = require("./rules/quote-props");
    rules["quotes"] = require("./rules/quotes");
    rules["radix"] = require("./rules/radix");
    rules["semi"] = require("./rules/semi");
    rules["sort-vars"] = require("./rules/sort-vars");
    rules["space-after-keywords"] = require("./rules/space-after-keywords");
    rules["space-before-blocks"] = require("./rules/space-before-blocks");
    rules["space-in-brackets"] = require("./rules/space-in-brackets");
    rules["space-in-parens"] = require("./rules/space-in-parens");
    rules["space-infix-ops"] = require("./rules/space-infix-ops");
    rules["space-return-throw-case"] = require("./rules/space-return-throw-case");
    rules["space-unary-ops"] = require("./rules/space-unary-ops");
    rules["spaced-line-comment"] = require("./rules/spaced-line-comment");
    rules["strict"] = require("./rules/strict");
    rules["use-isnan"] = require("./rules/use-isnan");
    rules["valid-jsdoc"] = require("./rules/valid-jsdoc");
    rules["valid-typeof"] = require("./rules/valid-typeof");
    rules["vars-on-top"] = require("./rules/vars-on-top");
    rules["wrap-iife"] = require("./rules/wrap-iife");
    rules["wrap-regex"] = require("./rules/wrap-regex");
    rules["yoda"] = require("./rules/yoda");

    return rules;
};
},{"./rules/block-scoped-var":31,"./rules/brace-style":32,"./rules/camelcase":33,"./rules/comma-spacing":34,"./rules/comma-style":35,"./rules/complexity":36,"./rules/consistent-return":37,"./rules/consistent-this":38,"./rules/curly":39,"./rules/default-case":40,"./rules/dot-notation":41,"./rules/eol-last":42,"./rules/eqeqeq":43,"./rules/func-names":44,"./rules/func-style":45,"./rules/global-strict":46,"./rules/guard-for-in":47,"./rules/handle-callback-err":48,"./rules/key-spacing":49,"./rules/max-depth":50,"./rules/max-len":51,"./rules/max-nested-callbacks":52,"./rules/max-params":53,"./rules/max-statements":54,"./rules/new-cap":55,"./rules/new-parens":56,"./rules/no-alert":57,"./rules/no-array-constructor":58,"./rules/no-bitwise":59,"./rules/no-caller":60,"./rules/no-catch-shadow":61,"./rules/no-comma-dangle":62,"./rules/no-cond-assign":63,"./rules/no-console":64,"./rules/no-constant-condition":65,"./rules/no-control-regex":66,"./rules/no-debugger":67,"./rules/no-delete-var":68,"./rules/no-div-regex":69,"./rules/no-dupe-keys":70,"./rules/no-else-return":71,"./rules/no-empty":74,"./rules/no-empty-class":72,"./rules/no-empty-label":73,"./rules/no-eq-null":75,"./rules/no-eval":76,"./rules/no-ex-assign":77,"./rules/no-extend-native":78,"./rules/no-extra-bind":79,"./rules/no-extra-boolean-cast":80,"./rules/no-extra-parens":81,"./rules/no-extra-semi":82,"./rules/no-extra-strict":83,"./rules/no-fallthrough":84,"./rules/no-floating-decimal":85,"./rules/no-func-assign":86,"./rules/no-implied-eval":87,"./rules/no-inline-comments":88,"./rules/no-inner-declarations":89,"./rules/no-invalid-regexp":90,"./rules/no-irregular-whitespace":91,"./rules/no-iterator":92,"./rules/no-label-var":93,"./rules/no-labels":94,"./rules/no-lone-blocks":95,"./rules/no-lonely-if":96,"./rules/no-loop-func":97,"./rules/no-mixed-requires":98,"./rules/no-mixed-spaces-and-tabs":99,"./rules/no-multi-spaces":100,"./rules/no-multi-str":101,"./rules/no-multiple-empty-lines":102,"./rules/no-native-reassign":103,"./rules/no-negated-in-lhs":104,"./rules/no-nested-ternary":105,"./rules/no-new":110,"./rules/no-new-func":106,"./rules/no-new-object":107,"./rules/no-new-require":108,"./rules/no-new-wrappers":109,"./rules/no-obj-calls":111,"./rules/no-octal":113,"./rules/no-octal-escape":112,"./rules/no-path-concat":114,"./rules/no-plusplus":115,"./rules/no-process-env":116,"./rules/no-process-exit":117,"./rules/no-proto":118,"./rules/no-redeclare":119,"./rules/no-regex-spaces":120,"./rules/no-reserved-keys":121,"./rules/no-restricted-modules":122,"./rules/no-return-assign":123,"./rules/no-script-url":124,"./rules/no-self-compare":125,"./rules/no-sequences":126,"./rules/no-shadow":128,"./rules/no-shadow-restricted-names":127,"./rules/no-space-before-semi":129,"./rules/no-spaced-func":130,"./rules/no-sparse-arrays":131,"./rules/no-sync":132,"./rules/no-ternary":133,"./rules/no-trailing-spaces":134,"./rules/no-undef":136,"./rules/no-undef-init":135,"./rules/no-undefined":137,"./rules/no-underscore-dangle":138,"./rules/no-unreachable":139,"./rules/no-unused-expressions":140,"./rules/no-unused-vars":141,"./rules/no-use-before-define":142,"./rules/no-void":143,"./rules/no-warning-comments":144,"./rules/no-with":145,"./rules/no-wrap-func":146,"./rules/one-var":147,"./rules/operator-assignment":148,"./rules/padded-blocks":149,"./rules/quote-props":150,"./rules/quotes":151,"./rules/radix":152,"./rules/semi":153,"./rules/sort-vars":154,"./rules/space-after-keywords":155,"./rules/space-before-blocks":156,"./rules/space-in-brackets":157,"./rules/space-in-parens":158,"./rules/space-infix-ops":159,"./rules/space-return-throw-case":160,"./rules/space-unary-ops":161,"./rules/spaced-line-comment":162,"./rules/strict":163,"./rules/use-isnan":164,"./rules/valid-jsdoc":165,"./rules/valid-typeof":166,"./rules/vars-on-top":167,"./rules/wrap-iife":168,"./rules/wrap-regex":169,"./rules/yoda":170}],29:[function(require,module,exports){
/**
 * @fileoverview RuleContext utility for rules
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

var PASSTHROUGHS = [
        "getSource",
        "getSourceLines",
        "getTokens",
        "getTokensBefore",
        "getTokenBefore",
        "getTokensAfter",
        "getTokenAfter",
        "getFirstTokens",
        "getFirstToken",
        "getLastTokens",
        "getLastToken",
        "getTokensBetween",
        "getComments",
        "getAncestors",
        "getScope",
        "getJSDocComment",
        "getFilename"
    ];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Acts as an abstraction layer between rules and the main eslint object.
 * @constructor
 * @param {string} ruleId The ID of the rule using this object.
 * @param {eslint} eslint The eslint object.
 * @param {number} severity The configured severity level of the rule.
 * @param {array} options The configuration information to be added to the rule.
 * @param {object} settings The configuration settings passed from the config file.
 */
function RuleContext(ruleId, eslint, severity, options, settings) {

    /**
     * The read-only ID of the rule.
     */
    Object.defineProperty(this, "id", {
        value: ruleId
    });

    /**
     * The read-only options of the rule
     */
    Object.defineProperty(this, "options", {
        value: options
    });

    /**
     * The read-only settings shared between all rules
     */
    Object.defineProperty(this, "settings", {
        value: settings
    });

    // copy over passthrough methods
    PASSTHROUGHS.forEach(function(name) {
        this[name] = function() {
            return eslint[name].apply(eslint, arguments);
        };
    }, this);

    /**
     * Passthrough to eslint.report() that automatically assigns the rule ID and severity.
     * @param {ASTNode} node The AST node related to the message.
     * @param {Object=} location The location of the error.
     * @param {string} message The message to display to the user.
     * @param {Object} opts Optional template data which produces a formatted message
     *     with symbols being replaced by this object's values.
     * @returns {void}
     */
    this.report = function(node, location, message, opts) {
        eslint.report(ruleId, severity, node, location, message, opts);
    };

}

RuleContext.prototype = {
    constructor: RuleContext
};

module.exports = RuleContext;

},{}],30:[function(require,module,exports){
/**
 * @fileoverview Defines a storage for rules.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var loadRules = require("./load-rules");

//------------------------------------------------------------------------------
// Privates
//------------------------------------------------------------------------------

var rules = Object.create(null);

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Registers a rule module for rule id in storage.
 * @param {String} ruleId Rule id (file name).
 * @param {Function} ruleModule Rule handler.
 * @returns {void}
 */
function define(ruleId, ruleModule) {
    rules[ruleId] = ruleModule;
}

exports.define = define;

/**
 * Loads and registers all rules from passed rules directory.
 * @param {String} [rulesDir] Path to rules directory, may be relative. Defaults to `lib/rules`.
 * @returns {void}
 */
function load(rulesDir) {
    var newRules = loadRules(rulesDir);
    Object.keys(newRules).forEach(function(ruleId) {
        define(ruleId, newRules[ruleId]);
    });
}

exports.load = load;

/**
 * Registers all given rules of a plugin.
 * @param {Object} pluginRules A key/value map of rule definitions.
 * @param {String} pluginName The name of the plugin without prefix (`eslint-plugin-`).
 * @returns {void}
 */
exports.import = function (pluginRules, pluginName) {
    Object.keys(pluginRules).forEach(function (ruleId) {
        var qualifiedRuleId = pluginName + "/" + ruleId,
            rule = pluginRules[ruleId];

        define(qualifiedRuleId, rule);
    });
};

/**
 * Access rule handler by id (file name).
 * @param {String} ruleId Rule id (file name).
 * @returns {Function} Rule handler.
 */
exports.get = function(ruleId) {
    return rules[ruleId];
};

/**
 * Reset rules storage.
 * Should be used only in tests.
 * @returns {void}
 */
exports.testClear = function() {
    rules = Object.create(null);
};

//------------------------------------------------------------------------------
// Initialization
//------------------------------------------------------------------------------

// loads built-in rules
load();

},{"./load-rules":28}],31:[function(require,module,exports){
/**
 * @fileoverview Rule to check for "block scoped" variables by binding context
 * @author Matt DuVall <http://www.mattduvall.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var scopeStack = [];

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Determines whether an identifier is in declaration position or is a non-declaration reference.
     * @param {ASTNode} id The identifier.
     * @param {ASTNode} parent The identifier's parent AST node.
     * @returns {Boolean} true when the identifier is in declaration position.
     */
    function isDeclaration(id, parent) {
        switch (parent.type) {
            case "FunctionDeclaration":
            case "FunctionExpression":
                return parent.params.indexOf(id) > -1 || id === parent.id;

            case "VariableDeclarator":
                return id === parent.id;

            case "CatchClause":
                return id === parent.param;

            default:
                return false;
        }
    }

    /**
     * Determines whether an identifier is in property position.
     * @param {ASTNode} id The identifier.
     * @param {ASTNode} parent The identifier's parent AST node.
     * @returns {Boolean} true when the identifier is in property position.
     */
    function isProperty(id, parent) {
        switch (parent.type) {
            case "MemberExpression":
                return id === parent.property && !parent.computed;

            case "Property":
                return id === parent.key;

            default:
                return false;
        }
    }

    /**
     * Pushes a new scope object on the scope stack.
     * @returns {void}
     */
    function pushScope() {
        scopeStack.push([]);
    }

    /**
     * Removes the topmost scope object from the scope stack.
     * @returns {void}
     */
    function popScope() {
        scopeStack.pop();
    }

    /**
     * Declares the given names in the topmost scope object.
     * @param {[String]} names A list of names to declare.
     * @returns {void}
     */
    function declare(names) {
        [].push.apply(scopeStack[scopeStack.length - 1], names);
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    function functionHandler(node) {
        pushScope();
        declare(node.params.map(function(id) {
            return id.name;
        }));
        declare(node.id ? [node.id.name] : []);
        declare(["arguments"]);
    }

    function variableDeclarationHandler(node) {
        declare(node.declarations.map(function(decl) {
            return decl.id.name;
        }));
    }

    return {
        "Program": function() {
            scopeStack = [context.getScope().variables.map(function(v) {
                return v.name;
            })];
        },

        "BlockStatement": function(node) {
            var statements = node.body;
            pushScope();
            statements.forEach(function(stmt) {
                if (stmt.type === "VariableDeclaration") {
                    variableDeclarationHandler(stmt);
                } else if (stmt.type === "FunctionDeclaration") {
                    declare([stmt.id.name]);
                }
            });
        },

        "VariableDeclaration": function (node) {
            if (node.parent.type === "SwitchCase") {
                variableDeclarationHandler(node);
            }
        },

        "BlockStatement:exit": popScope,

        "CatchClause": function(node) {
            pushScope();
            declare([node.param.name]);
        },
        "CatchClause:exit": popScope,

        "FunctionDeclaration": functionHandler,
        "FunctionDeclaration:exit": popScope,

        "FunctionExpression": functionHandler,
        "FunctionExpression:exit": popScope,

        "ArrowFunctionExpression": functionHandler,
        "ArrowFunctionExpression:exit": popScope,

        "ForStatement": function(node) {
            pushScope();
            if (node.init && node.init.type === "VariableDeclaration") {
                variableDeclarationHandler(node.init);
            }
        },
        "ForStatement:exit": popScope,

        "ForInStatement": function(node) {
            pushScope();
            if (node.left.type === "VariableDeclaration") {
                variableDeclarationHandler(node.left);
            }
        },
        "ForInStatement:exit": popScope,

        "Identifier": function(node) {
            var ancestor = context.getAncestors().pop();
            if (isDeclaration(node, ancestor) || isProperty(node, ancestor)) {
                return;
            }
            for (var i = 0, l = scopeStack.length; i < l; i++) {
                if (scopeStack[i].indexOf(node.name) > -1) {
                    return;
                }
            }

            context.report(node, "\"" + node.name + "\" used outside of binding context.");
        }
    };

};

},{}],32:[function(require,module,exports){
/**
 * @fileoverview Rule to flag block statements that do not use the one true brace style
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    var style = context.options[0] || "1tbs";
    var params = context.options[1] || {};

    var OPEN_MESSAGE = "Opening curly brace does not appear on the same line as controlling statement.",
        BODY_MESSAGE = "Statement inside of curly braces should be on next line.",
        CLOSE_MESSAGE = "Closing curly brace does not appear on the same line as the subsequent block.",
        CLOSE_MESSAGE_SINGLE = "Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.",
        CLOSE_MESSAGE_STROUSTRUP = "Closing curly brace appears on the same line as the subsequent block.";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Binds a list of properties to a function that verifies that the opening
     * curly brace is on the same line as its controlling statement of a given
     * node.
     * @param {...string} The properties to check on the node.
     * @returns {Function} A function that will perform the check on a node
     */
    function checkBlock() {
        var blockProperties = arguments;
        return function(node) {
            [].forEach.call(blockProperties, function(blockProp) {
                var block = node[blockProp], previousToken, curlyToken, curlyTokenEnd, curlyTokensOnSameLine;
                block = node[blockProp];
                if (block && block.type === "BlockStatement") {
                    previousToken = context.getTokenBefore(block);
                    curlyToken = context.getFirstToken(block);
                    curlyTokenEnd = context.getLastToken(block);
                    curlyTokensOnSameLine = curlyToken.loc.start.line === curlyTokenEnd.loc.start.line;

                    if (previousToken.loc.start.line !== curlyToken.loc.start.line) {
                        context.report(node, OPEN_MESSAGE);
                    } else if (block.body.length && params.allowSingleLine) {
                        if (curlyToken.loc.start.line === block.body[0].loc.start.line && !curlyTokensOnSameLine) {
                            context.report(block.body[0], BODY_MESSAGE);
                        } else if (curlyTokenEnd.loc.start.line === block.body[block.body.length - 1].loc.start.line && !curlyTokensOnSameLine) {
                            context.report(block.body[block.body.length - 1], CLOSE_MESSAGE_SINGLE);
                        }
                    } else if (block.body.length && curlyToken.loc.start.line === block.body[0].loc.start.line) {
                        context.report(block.body[0], BODY_MESSAGE);
                    }
                }
            });
        };
    }

    /**
     * Enforces the configured brace style on IfStatements
     * @param {ASTNode} node An IfStatement node.
     * @returns {void}
     */
    function checkIfStatement(node) {
        var tokens;

        checkBlock("consequent", "alternate")(node);

        if (node.alternate && node.alternate.type === "BlockStatement") {
            tokens = context.getTokensBefore(node.alternate, 2);
            if (style === "1tbs") {
                if (tokens[0].loc.start.line !== tokens[1].loc.start.line) {
                    context.report(node.alternate, CLOSE_MESSAGE);
                }
            } else if (style === "stroustrup") {
                if (tokens[0].loc.start.line === tokens[1].loc.start.line) {
                    context.report(node.alternate, CLOSE_MESSAGE_STROUSTRUP);
                }
            }
        }
    }

    /**
     * Enforces the configured brace style on TryStatements
     * @param {ASTNode} node A TryStatement node.
     * @returns {void}
     */
    function checkTryStatement(node) {
        var tokens;

        checkBlock("block", "finalizer")(node);

        if (node.finalizer && node.finalizer.type === "BlockStatement") {
            tokens = context.getTokensBefore(node.finalizer, 2);
            if (style === "1tbs") {
                if (tokens[0].loc.start.line !== tokens[1].loc.start.line) {
                    context.report(node.finalizer, CLOSE_MESSAGE);
                }
            } else if (style === "stroustrup") {
                if (tokens[0].loc.start.line === tokens[1].loc.start.line) {
                    context.report(node.finalizer, CLOSE_MESSAGE_STROUSTRUP);
                }
            }
        }
    }

    /**
     * Enforces the configured brace style on CatchClauses
     * @param {ASTNode} node A CatchClause node.
     * @returns {void}
     */
    function checkCatchClause(node) {
        var previousToken = context.getTokenBefore(node),
            firstToken = context.getFirstToken(node);

        checkBlock("body")(node);

        if (node.body && node.body.type === "BlockStatement") {
            if (style === "1tbs") {
                if (previousToken.loc.start.line !== firstToken.loc.start.line) {
                    context.report(node, CLOSE_MESSAGE);
                }
            } else if (style === "stroustrup") {
                if (previousToken.loc.start.line === firstToken.loc.start.line) {
                    context.report(node, CLOSE_MESSAGE_STROUSTRUP);
                }
            }
        }
    }

    /**
     * Enforces the configured brace style on SwitchStatements
     * @param {ASTNode} node A SwitchStatement node.
     * @returns {void}
     */
    function checkSwitchStatement(node) {
        var tokens;
        if (node.cases && node.cases.length) {
            tokens = context.getTokensBefore(node.cases[0], 2);
            if (tokens[0].loc.start.line !== tokens[1].loc.start.line) {
                context.report(node, OPEN_MESSAGE);
            }
        } else {
            tokens = context.getLastTokens(node, 3);
            if (tokens[0].loc.start.line !== tokens[1].loc.start.line) {
                context.report(node, OPEN_MESSAGE);
            }
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "FunctionDeclaration": checkBlock("body"),
        "FunctionExpression": checkBlock("body"),
        "ArrowFunctionExpression": checkBlock("body"),
        "IfStatement": checkIfStatement,
        "TryStatement": checkTryStatement,
        "CatchClause": checkCatchClause,
        "DoWhileStatement": checkBlock("body"),
        "WhileStatement": checkBlock("body"),
        "WithStatement": checkBlock("body"),
        "ForStatement": checkBlock("body"),
        "ForInStatement": checkBlock("body"),
        "SwitchStatement": checkSwitchStatement
    };

};

},{}],33:[function(require,module,exports){
/**
 * @fileoverview Rule to flag non-camelcased identifiers
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Checks if a string contains an underscore and isn't all upper-case
     * @param {String} name The string to check.
     * @returns {boolean} if the string is underscored
     * @private
     */
    function isUnderscored(name) {

        // if there's an underscore, it might be A_CONSTANT, which is okay
        return name.indexOf("_") > -1 && name !== name.toUpperCase();
    }

    /**
     * Reports an AST node as a rule violation.
     * @param {ASTNode} node The node to report.
     * @returns {void}
     * @private
     */
    function report(node) {
        context.report(node, "Identifier '{{name}}' is not in camel case.", { name: node.name });
    }

    return {

        "Identifier": function(node) {

            // Leading and trailing underscores are commonly used to flag private/protected identifiers, strip them
            var name = node.name.replace(/^_+|_+$/g, ""),
                effectiveParent = (node.parent.type === "MemberExpression") ? node.parent.parent : node.parent;

            // MemberExpressions get special rules
            if (node.parent.type === "MemberExpression") {

                // Always report underscored object names
                if (node.parent.object.type === "Identifier" &&
                        node.parent.object.name === node.name &&
                        isUnderscored(name)) {
                    report(node);

                // Report AssignmentExpressions only if they are the left side of the assignment
                } else if (effectiveParent.type === "AssignmentExpression" &&
                        isUnderscored(name) &&
                        (effectiveParent.right.type !== "MemberExpression" ||
                        effectiveParent.left.type === "MemberExpression" &&
                        effectiveParent.left.property.name === node.name)) {
                    report(node);
                }

            // Report anything that is underscored that isn't a CallExpression
            } else if (isUnderscored(name) && effectiveParent.type !== "CallExpression") {
                report(node);
            }
        }
    };

};

},{}],34:[function(require,module,exports){
/**
 * @fileoverview Comma spacing - validates spacing before and after comma
 * @author Vignesh Anand aka vegetableman.
 * @copyright 2014 Vignesh Anand. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    var options = {
        before: context.options[0] ? !!context.options[0].before : false,
        after: context.options[0] ? !!context.options[0].after : true
    };

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Determines whether two adjacent tokens have whitespace between them.
     * @param {Object} left - The left token object.
     * @param {Object} right - The right token object.
     * @returns {boolean} Whether or not there is space between the tokens.
     */
    function isSpaced(left, right) {
        return left.range[1] < right.range[0];
    }

    /**
     * Run report.
     * @param {ASTNode} node The binary expression node to check.
     * @param {string} msg The error msg to show.
     * @private
     * @returns {void}
     */
    function report(node, msg) {
        context.report(node, msg);
    }

    /**
     * Show space required message.
     * @param {string} dir The location of spacing.
     * @private
     * @returns {string} The spacing error msg.
     */
    function getSpaceReqMsg(dir) {
        return "A space is required " + dir + " ','.";
    }

    /**
     * Show no space message.
     * @param {string} dir The location of spacing
     * @private
     * @returns {string} The spacing error msg.
     */
    function getNoSpaceMsg(dir) {
        return "There should be no space " + dir + " ','.";
    }

    /**
     * Validates the spacing before and after commas.
     * @param {ASTNode} node The binary expression node to check.
     * @param {string} property The property of the node.
     * @private
     * @returns {void}
     */
    function validateCommaSpacing(node, property) {
        var items = node[property];

        if (items && items.length > 1) {
            items.forEach(function(item, index) {
                var tokenBefore = context.getTokenBefore(item),
                    itemBefore = items[index - 1],
                    tokenEndLine;

                if (tokenBefore && tokenBefore.value === ",") {
                    tokenEndLine = tokenBefore.loc.end.line;

                    // single line
                    if (tokenEndLine === itemBefore.loc.end.line &&
                        tokenEndLine === item.loc.start.line) {
                        if (options.before && options.after) {
                            if (!isSpaced(itemBefore, tokenBefore)) {
                                report(item, getSpaceReqMsg("before"));
                            }
                            if (!isSpaced(tokenBefore, item)) {
                                report(item, getSpaceReqMsg("after"));
                            }
                        } else if (options.before) {
                            if (!isSpaced(itemBefore, tokenBefore)) {
                                report(item, getSpaceReqMsg("before"));
                            }
                            if (isSpaced(tokenBefore, item)) {
                                report(item, getNoSpaceMsg("after"));
                            }
                        } else if (options.after) {
                            if (!isSpaced(tokenBefore, item)) {
                                report(item, getSpaceReqMsg("after"));
                            }
                            if (isSpaced(itemBefore, tokenBefore)) {
                                report(item, getNoSpaceMsg("before"));
                            }
                        } else {
                            if (isSpaced(itemBefore, tokenBefore)) {
                                report(item, getNoSpaceMsg("before"));
                            }
                            if (isSpaced(tokenBefore, item)) {
                                report(item, getNoSpaceMsg("after"));
                            }
                        }
                    }
                }
            });
        }
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        "VariableDeclaration": function(node) {
            validateCommaSpacing(node, "declarations");
        },
        "ObjectExpression": function(node) {
            validateCommaSpacing(node, "properties");
        },
        "ArrayExpression": function(node) {
            validateCommaSpacing(node, "elements");
        },
        "SequenceExpression": function(node) {
            validateCommaSpacing(node, "expressions");
        },
        "ArrowFunctionExpression": function(node) {
            validateCommaSpacing(node, "params");
        },
        "FunctionExpression": function(node) {
            validateCommaSpacing(node, "params");
        },
        "FunctionDeclaration": function(node) {
            validateCommaSpacing(node, "params");
        },
        "CallExpression": function(node) {
            validateCommaSpacing(node, "arguments");
        },
        "NewExpression": function(node) {
            validateCommaSpacing(node, "arguments");
        }
    };

};

},{}],35:[function(require,module,exports){
/**
 * @fileoverview Comma style - enforces comma styles of two types: last and first
 * @author Vignesh Anand aka vegetableman
 * @copyright 2014 Vignesh Anand. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var style = context.options[0] || "last";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Checks the comma placement with regards to a declaration/property/element
     * @param {ASTNode} node The binary expression node to check
     * @private
     * @returns {void}
     */
    function validateComma(node) {
        var items = node.declarations || node.properties || node.elements;

        if (items.length > 1) {
            items.forEach(function(item, index) {
                var tokenBefore = context.getTokenBefore(item),
                    itemBefore = items[index - 1];

                if (tokenBefore.value === ",") {
                    // if single line
                    if (tokenBefore.loc.end.line === item.loc.start.line &&
                        tokenBefore.loc.end.line === itemBefore.loc.end.line) {
                        return;
                    }
                    // lone comma
                    else if (tokenBefore.loc.end.line !== item.loc.start.line &&
                        tokenBefore.loc.end.line !== itemBefore.loc.end.line) {
                        context.report(item, {
                            line: tokenBefore.loc.end.line,
                            column: tokenBefore.loc.start.column
                        }, "Bad line breaking before and after ','.");
                    }
                    else if (style === "first" &&
                        tokenBefore.loc.start.line !== item.loc.start.line) {
                        context.report(item, "',' should be placed first.");
                    }
                    else if (style === "last" &&
                        tokenBefore.loc.end.line === item.loc.start.line) {
                        context.report(item, {
                            line: itemBefore.loc.end.line,
                            column: itemBefore.loc.end.column
                        }, "',' should be placed last.");
                    }
                }
            });
        }
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        "VariableDeclaration": validateComma,
        "ObjectExpression": validateComma,
        "ArrayExpression": validateComma
    };

};

},{}],36:[function(require,module,exports){
/**
 * @fileoverview Counts the cyclomatic complexity of each function of the script. See http://en.wikipedia.org/wiki/Cyclomatic_complexity.
 * Counts the number of if, conditional, for, whilte, try, switch/case,
 * @author Patrick Brosset
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var THRESHOLD = context.options[0];

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    // Using a stack to store complexity (handling nested functions)
    var fns = [];

    // When parsing a new function, store it in our function stack
    function startFunction() {
        fns.push(1);
    }

    function endFunction(node) {
        var complexity = fns.pop(), name = "anonymous";

        if (node.id) {
            name = node.id.name;
        }
        if (complexity > THRESHOLD) {
            context.report(node, "Function '{{name}}' has a complexity of {{complexity}}.", { name: name, complexity: complexity });
        }
    }

    function increaseComplexity() {
        if (fns.length) {
            fns[fns.length - 1] ++;
        }
    }

    function increaseSwitchComplexity(node) {
        // Avoiding `default`
        if (node.test) {
            increaseComplexity(node);
        }
    }

    function increaseLogicalComplexity(node) {
        // Avoiding &&
        if (node.operator === "||") {
            increaseComplexity(node);
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "FunctionDeclaration": startFunction,
        "FunctionExpression": startFunction,
        "ArrowFunctionExpression": startFunction,
        "FunctionDeclaration:exit": endFunction,
        "FunctionExpression:exit": endFunction,
        "ArrowFunctionExpression:exit": endFunction,

        "CatchClause": increaseComplexity,
        "ConditionalExpression": increaseComplexity,
        "LogicalExpression": increaseLogicalComplexity,
        "ForStatement": increaseComplexity,
        "ForInStatement": increaseComplexity,
        "IfStatement": increaseComplexity,
        "SwitchCase": increaseSwitchComplexity,
        "WhileStatement": increaseComplexity,
        "DoWhileStatement": increaseComplexity
    };

};

},{}],37:[function(require,module,exports){
/**
 * @fileoverview Rule to flag consistent return values
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var functions = [];

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Marks entrance into a function by pushing a new object onto the functions
     * stack.
     * @returns {void}
     * @private
     */
    function enterFunction() {
        functions.push({});
    }

    /**
     * Marks exit of a function by popping off the functions stack.
     * @returns {void}
     * @private
     */
    function exitFunction() {
        functions.pop();
    }


    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "FunctionDeclaration": enterFunction,
        "FunctionExpression": enterFunction,
        "ArrowFunctionExpression": enterFunction,
        "FunctionDeclaration:exit": exitFunction,
        "FunctionExpression:exit": exitFunction,
        "ArrowFunctionExpression:exit": exitFunction,

        "ReturnStatement": function(node) {

            var returnInfo = functions[functions.length - 1],
                returnTypeDefined = "type" in returnInfo;

            if (returnTypeDefined) {

                if (returnInfo.type !== !!node.argument) {
                    context.report(node, "Expected " + (returnInfo.type ? "a" : "no") + " return value.");
                }

            } else {
                returnInfo.type = !!node.argument;
            }

        }
    };

};

},{}],38:[function(require,module,exports){
/**
 * @fileoverview Rule to enforce consistent naming of "this" context variables
 * @author Raphael Pigulla
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "VariableDeclaration": function(node) {
            var alias = context.options[0];

            node.declarations.forEach(function(declaration) {
                if (declaration.id.name === alias &&
                        !(declaration.init && declaration.init.type === "ThisExpression")) {

                    context.report(
                        node,
                        "Designated 'this' alias '{{alias}}' is not assigned " +
                            "to the current execution context.",
                        { alias: declaration.id.name }
                    );
                }

                if (declaration.init &&
                        declaration.init.type === "ThisExpression" &&
                        declaration.id.name !== alias) {

                    context.report(
                        node,
                        "Unexpected alias '{{alias}}' for 'this'.",
                        { alias: declaration.id.name }
                    );
                }
            });
        }
    };

};

},{}],39:[function(require,module,exports){
/**
 * @fileoverview Rule to flag statements without curly braces
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var multiOnly = (context.options[0] === "multi");

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Checks the body of a node to see if it's a block statement. Depending on
     * the rule options, reports the appropriate problems.
     * @param {ASTNode} node The node to report if there's a problem.
     * @param {ASTNode} body The body node to check for blocks.
     * @param {string} name The name to report if there's a problem.
     * @param {string} suffix Additional string to add to the end of a report.
     * @returns {void}
     */
    function checkBody(node, body, name, suffix) {
        var hasBlock = (body.type === "BlockStatement");

        if (multiOnly) {
            if (hasBlock && body.body.length === 1) {
                context.report(node, "Unnecessary { after '{{name}}'{{suffix}}.",
                    {
                        name: name,
                        suffix: (suffix ? " " + suffix : "")
                    }
                );
            }
        } else {
            if (!hasBlock) {
                context.report(node, "Expected { after '{{name}}'{{suffix}}.",
                    {
                        name: name,
                        suffix: (suffix ? " " + suffix : "")
                    }
                );
            }
        }
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "IfStatement": function(node) {

            checkBody(node, node.consequent, "if", "condition");

            if (node.alternate && node.alternate.type !== "IfStatement") {
                checkBody(node, node.alternate, "else");
            }

        },

        "WhileStatement": function(node) {
            checkBody(node, node.body, "while", "condition");
        },

        "DoWhileStatement": function (node) {
            checkBody(node, node.body, "do");
        },

        "ForStatement": function(node) {
            checkBody(node, node.body, "for", "condition");
        }
    };

};

},{}],40:[function(require,module,exports){
/**
 * @fileoverview require default case in switch statements
 * @author Aliaksei Shytkin
 */
"use strict";

var COMMENT_VALUE = "no default";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Shortcut to get last element of array
     * @param  {*[]} collection Array
     * @returns {*} Last element
     */
    function last(collection) {
        return collection[collection.length - 1];
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "SwitchStatement": function(node) {

            if (!node.cases.length) {
                // skip check of empty switch because there is no easy way
                // to extract comments inside it now
                return;
            }

            var hasDefault = node.cases.some(function(v) {
                return v.test === null;
            });

            if (!hasDefault) {

                var comment;
                var comments;

                var lastCase = last(node.cases);
                comments = context.getComments(lastCase).trailing;

                if (comments.length) {
                    comment = last(comments);
                }

                if (!comment || comment.value.trim() !== COMMENT_VALUE) {
                    context.report(node, "Expected a default case.");
                }
            }
        }
    };
};

},{}],41:[function(require,module,exports){
/**
 * @fileoverview Rule to warn about using dot notation instead of square bracket notation when possible.
 * @author Josh Perez
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var validIdentifier = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
var keywords = [
    "this",
    "function",
    "if",
    "return",
    "var",
    "else",
    "for",
    "new",
    "arguments",
    "in",
    "typeof",
    "while",
    "case",
    "break",
    "try",
    "catch",
    "delete",
    "throw",
    "switch",
    "continue",
    "default",
    "instanceof",
    "do",
    "void",
    "finally",
    "with",
    "debugger",
    "eval",
    "implements",
    "interface",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield",
    "let",
    "class",
    "enum",
    "export",
    "extends",
    "import",
    "super",
    "true",
    "false",
    "null",
    "abstract",
    "boolean",
    "byte",
    "char",
    "const",
    "double",
    "final",
    "float",
    "goto",
    "int",
    "long",
    "native",
    "short",
    "synchronized",
    "throws",
    "transient",
    "volatile"
];

function canBeWrittenInDotNotation(node) {
    return node.computed === true &&
        node.property.type === "Literal" &&
        validIdentifier.test(node.property.value) &&
        keywords.indexOf("" + node.property.value) === -1;
}

module.exports = function(context) {
    return {
        "MemberExpression": function(node) {
            if (canBeWrittenInDotNotation(node)) {
                context.report(node, "['" + node.property.value + "'] is better written in dot notation.");
            }
        }
    };
};

},{}],42:[function(require,module,exports){
/**
 * @fileoverview Require file to end with single newline.
 * @author Nodeca Team <https://github.com/nodeca>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "Program": function checkBadEOF(node) {
            // Get the whole source code, not for node only.
            var src = context.getSource(), location = {column: 1};

            if (src.length === 0) {
                return;
            }

            if (src[src.length - 1] !== "\n") {
                // file is not newline-terminated
                location.line = src.split(/\n/g).length;
                context.report(node, location, "Newline required at end of file but not found.");
            } else if (/\n\s*\n$/.test(src)) {
                // last line is empty
                location.line = src.split(/\n/g).length - 1;
                context.report(node, location, "Unexpected blank line at end of file.");
            }
        }

    };

};

},{}],43:[function(require,module,exports){
/**
 * @fileoverview Rule to flag statements that use != and == instead of !== and ===
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    /**
     * Checks if either operand of a binary expression is a typeof operation
     * @param {ASTNode} node The node to check
     * @returns {boolean} if one of the operands is typeof
     * @private
     */
    function isTypeOf(node) {
        return [node.left, node.right].some(function(node) {
            return node.type === "UnaryExpression" && node.operator === "typeof";
        });
    }

    /**
     * Checks if operands are literals of the same type (via typeof)
     * @param {ASTNode} node The node to check
     * @returns {boolean} if operands are of same type
     * @private
     */
    function areLiteralsAndSameType(node) {
        return node.left.type === "Literal" && node.right.type === "Literal" &&
                typeof node.left.value === typeof node.right.value;
    }

    /**
     * Checks if one of the operands is a literal null
     * @param {ASTNode} node The node to check
     * @returns {boolean} if operands are null
     * @private
     */
    function isNullCheck(node) {
        return (node.right.type === "Literal" && node.right.value === null) ||
                (node.left.type === "Literal" && node.left.value === null);
    }

    /**
     * Gets the location (line and column) of the binary expression's operator
     * @param {ASTNode} node The binary expression node to check
     * @param {String} operator The operator to find
     * @returns {Object} { line, column } location of operator
     * @private
     */
    function getOperatorLocation(node) {
        var opToken = context.getTokenAfter(node.left);
        return {line: opToken.loc.start.line, column: opToken.loc.start.column};
    }

    return {
        "BinaryExpression": function(node) {
            if (node.operator !== "==" && node.operator !== "!=") {
                return;
            }

            if (context.options[0] === "smart" && (isTypeOf(node) ||
                    areLiteralsAndSameType(node)) || isNullCheck(node)) {
                return;
            }

            if (context.options[0] === "allow-null" && isNullCheck(node)) {
                return;
            }

            context.report(
                node, getOperatorLocation(node),
                "Expected '{{op}}=' and instead saw '{{op}}'.",
                {op: node.operator}
            );
        }
    };

};

},{}],44:[function(require,module,exports){
/**
 * @fileoverview Rule to warn when a function expression does not have a name.
 * @author Kyle T. Nunery
 */
 "use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    return {
        "FunctionExpression": function(node) {

            var name = node.id && node.id.name;

            if (!name) {
                context.report(node, "Missing function expression name.");
            }
        }
    };
};

},{}],45:[function(require,module,exports){
/**
 * @fileoverview Rule to enforce a particular function style
 * @author Nicholas C. Zakas
 * @copyright 2013 Nicholas C. Zakas. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var style = context.options[0],
        enforceDeclarations = (style === "declaration");

    return {

        "FunctionDeclaration": function(node) {
            if (!enforceDeclarations) {
                context.report(node, "Expected a function expression.");
            }
        },

        "FunctionExpression": function() {
            var parent = context.getAncestors().pop();

            if (enforceDeclarations && parent.type === "VariableDeclarator") {
                context.report(parent, "Expected a function declaration.");
            }
        },

        "ArrowFunctionExpression": function() {
            var parent = context.getAncestors().pop();

            if (enforceDeclarations && parent.type === "VariableDeclarator") {
                context.report(parent, "Expected a function declaration.");
            }
        }

    };

};

},{}],46:[function(require,module,exports){
/**
 * @fileoverview Rule to flag or require global strict mode.
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var mode = context.options[0];

    if (mode === "always") {

        return {
            "Program": function(node) {
                if (node.body.length > 0) {
                    var statement = node.body[0];

                    if (!(statement.type === "ExpressionStatement" && statement.expression.value === "use strict")) {
                        context.report(node, "Use the global form of \"use strict\".");
                    }
                }
            }
        };

    } else { // mode = "never"

        return {
            "ExpressionStatement": function(node) {
                var parent = context.getAncestors().pop();

                if (node.expression.value === "use strict" && parent.type === "Program") {
                    context.report(node, "Use the function form of \"use strict\".");
                }
            }
        };

    }

};

},{}],47:[function(require,module,exports){
/**
 * @fileoverview Rule to flag for-in loops without if statements inside
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "ForInStatement": function(node) {

            /*
             * If the for-in statement has {}, then the real body is the body
             * of the BlockStatement. Otherwise, just use body as provided.
             */
            var body = node.body.type === "BlockStatement" ? node.body.body[0] : node.body;

            if (body && body.type !== "IfStatement") {
                context.report(node, "The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.");
            }
        }
    };

};

},{}],48:[function(require,module,exports){
/**
 * @fileoverview Ensure handling of errors when we know they exist.
 * @author Jamund Ferguson
 * @copyright 2014 Jamund Ferguson. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var errorArgument = context.options[0] || "err";
    var callbacks = [];
    var scopes = 0;

    /**
     * Checks if the given argument should be interpreted as a regexp pattern.
     * @param {string} stringToCheck The string which should be checked.
     * @returns {boolean} Whether or not the string should be interpreted as a pattern.
     */
    function isPattern(stringToCheck) {
        var firstChar = stringToCheck[0];
        return firstChar === "^";
    }

    /**
     * Checks if the given name matches the configured error argument.
     * @param {string} name The name which should be compared.
     * @returns {boolean} Whether or not the given name matches the configured error variable name.
     */
    function matchesConfiguredErrorName(name) {
        if (isPattern(errorArgument)) {
            var regexp = new RegExp(errorArgument);
            return regexp.test(name);
        }
        return name === errorArgument;
    }

    /**
     * Check the arguments to see if we need to start tracking the error object.
     * @param {ASTNode} node The AST node to check.
     * @returns {void}
     */
    function startFunction(node) {

        // keep track of nested scopes
        scopes++;

        // check if the first argument matches our argument name
        var firstArg = node.params && node.params[0];
        if (firstArg && matchesConfiguredErrorName(firstArg.name)) {
            callbacks.push({handled: false, depth: scopes, errorVariableName: firstArg.name});
        }
    }

    /**
     * At the end of a function check to see if the error was handled.
     * @param {ASTNode} node The AST node to check.
     * @returns {void}
     */
    function endFunction(node) {

        var callback = callbacks[callbacks.length - 1] || {};

        // check if a callback is ending, if so pop it off the stack
        if (callback.depth === scopes) {
            callbacks.pop();

            // check if there were no handled errors since the last callback
            if (!callback.handled) {
                context.report(node, "Expected error to be handled.");
            }
        }

        // less nested functions
        scopes--;

    }

    /**
     * Check to see if we're handling the error object properly.
     * @param {ASTNode} node The AST node to check.
     * @returns {void}
     */
    function checkForError(node) {
        if (callbacks.length > 0) {
            var callback = callbacks[callbacks.length - 1] || {};

            // make sure the node's name matches our error argument name
            var isAboutError = node.name === callback.errorVariableName;

            // we don't consider these use cases as "handling" the error
            var doNotCount = ["FunctionDeclaration", "ArrowFunctionExpression", "FunctionExpression", "CatchClause"];

            // make sure this identifier isn't used as part of one of them
            var isHandled = doNotCount.indexOf(node.parent.type) === -1;

            if (isAboutError && isHandled) {
                // record that this callback handled its error
                callback.handled = true;
            }
        }
    }

    return {
        "FunctionDeclaration": startFunction,
        "FunctionExpression": startFunction,
        "ArrowFunctionExpression": startFunction,
        "Identifier": checkForError,
        "FunctionDeclaration:exit": endFunction,
        "FunctionExpression:exit": endFunction,
        "ArrowFunctionExpression:exit": endFunction
    };

};

},{}],49:[function(require,module,exports){
/**
 * @fileoverview Rule to specify spacing of object literal keys and values
 * @author Brandon Mills
 * @copyright 2014 Brandon Mills. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether a string contains a line terminator as defined in
 * http://www.ecma-international.org/ecma-262/5.1/#sec-7.3
 * @param {string} str String to test.
 * @returns {boolean} True if str contains a line terminator.
 */
function containsLineTerminator(str) {
    return /[\n\r\u2028\u2029]/.test(str);
}

/**
 * Gets an object literal property's key as the identifier name or string value.
 * @param {ASTNode} property Property node whose key to retrieve.
 * @returns {string} The property's key.
 */
function getKey(property) {
    return property.key.name || property.key.value;
}

/**
 * Gets the number of characters in a key, including quotes around string keys.
 * @param {ASTNode} property Property of on object literal.
 * @returns {int} Width of the key, including string quotes where present.
 */
function getKeyWidth(property) {
    var key = property.key;
    return (key.type === "Identifier" ? key.name : key.raw).length;
}

/**
 * Gets the last element of an array.
 * @param {Array} arr An array.
 * @returns {any} Last element of arr.
 */
function last(arr) {
    return arr[arr.length - 1];
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var messages = {
    key: "{{error}} space after key \"{{key}}\".",
    value: "{{error}} space before value for key \"{{key}}\"."
};

module.exports = function(context) {

    /**
     * OPTIONS
     * "key-spacing": [2, {
     *     beforeColon: false,
     *     afterColon: true,
     *     align: "colon" // Optional, or "value"
     * }
     */

    var options = context.options[0] || {},
        align = options.align,
        beforeColon = +!!options.beforeColon, // Defaults to false
        afterColon = +!(options.afterColon === false); // Defaults to true

    /**
     * Gets the whitespace around the colon in an object literal property.
     * @param {ASTNode} property Property node from an object literal.
     * @returns {Object} Whitespace before and after the property's colon.
     */
    function getPropertyWhitespace(property) {
        var whitespace = /^(\s*):(\s*)/.exec(context.getSource().slice(
            property.key.range[1], property.value.range[0]
        ));

        if (whitespace) {
            return {
                beforeColon: whitespace[1],
                afterColon: whitespace[2]
            };
        }
    }

    /**
     * Reports an appropriately-formatted error if spacing is incorrect on one
     * side of the colon.
     * @param {ASTNode} property Key-value pair in an object literal.
     * @param {string} side Side being verified - either "key" or "value".
     * @param {string} whitespace Actual whitespace string.
     * @param {int} expected Expected whitespace length.
     * @returns {void}
     */
    function report(property, side, whitespace, expected) {
        var diff = whitespace.length - expected;

        if (diff && !(expected && containsLineTerminator(whitespace))) {
            context.report(property[side], messages[side], {
                error: diff > 0 ? "Extra" : "Missing",
                key: getKey(property)
            });
        }
    }

    /**
     * Verifies correct vertical alignment of a group of properties.
     * @param {ASTNode[]} properties List of Property AST nodes.
     * @returns {void}
     */
    function verifyAlignment(properties) {
        var length = properties.length,
            widths = properties.map(getKeyWidth), // Width of keys, including quotes
            targetWidth = Math.max.apply(null, widths),
            i, property, whitespace, width;

        // Conditionally include one space before or after colon
        targetWidth += (align === "colon" ? beforeColon : afterColon);

        for (i = 0; i < length; i++) {
            property = properties[i];
            whitespace = getPropertyWhitespace(property);

            if (!whitespace) {
                continue; // Object literal getters/setters lack a colon
            }

            width = widths[i];

            if (align === "value") {
                report(property, "key", whitespace.beforeColon, beforeColon);
                report(property, "value", whitespace.afterColon, targetWidth - width);
            } else { // align = "colon"
                report(property, "key", whitespace.beforeColon, targetWidth - width);
                report(property, "value", whitespace.afterColon, afterColon);
            }
        }
    }

    if (align) { // Verify vertical alignment

        return {
            "ObjectExpression": function(node) {
                node.properties.reduce(function(groups, property) {
                    var currentGroup = last(groups);
                    var prev = last(currentGroup);

                    if (!prev || property.loc.start.line - prev.loc.end.line <= 1) {
                        currentGroup.push(property);
                    } else {
                        groups.push([property]);
                    }

                    return groups;
                }, [[]]).forEach(function(group) {
                    verifyAlignment(group);
                });
            }
        };

    } else { // Strictly obey beforeColon and afterColon in each property

        return {
            "Property": function (node) {
                var whitespace = getPropertyWhitespace(node);
                if (whitespace) { // Object literal getters/setters lack colons
                    report(node, "key", whitespace.beforeColon, beforeColon);
                    report(node, "value", whitespace.afterColon, afterColon);
                }
            }
        };

    }

};

},{}],50:[function(require,module,exports){
/**
 * @fileoverview A rule to set the maximum depth block can be nested in a function.
 * @author Ian Christian Myers
 * @copyright 2013 Ian Christian Myers. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    var functionStack = [],
        maxDepth = context.options[0] || 4;

    function startFunction() {
        functionStack.push(0);
    }

    function endFunction() {
        functionStack.pop();
    }

    function pushBlock(node) {
        var len = ++functionStack[functionStack.length - 1];

        if (len > maxDepth) {
            context.report(node, "Blocks are nested too deeply ({{depth}}).",
                    { depth: len });
        }
    }

    function popBlock() {
        functionStack[functionStack.length - 1]--;
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "Program": startFunction,
        "FunctionDeclaration": startFunction,
        "FunctionExpression": startFunction,
        "ArrowFunctionExpression": startFunction,

        "IfStatement": pushBlock,
        "SwitchStatement": pushBlock,
        "TryStatement": pushBlock,
        "DoWhileStatement": pushBlock,
        "WhileStatement": pushBlock,
        "WithStatement": pushBlock,
        "ForStatement": pushBlock,
        "ForInStatement": pushBlock,
        "ForOfStatement": pushBlock,

        "IfStatement:exit": popBlock,
        "SwitchStatement:exit": popBlock,
        "TryStatement:exit": popBlock,
        "DoWhileStatement:exit": popBlock,
        "WhileStatement:exit": popBlock,
        "WithStatement:exit": popBlock,
        "ForStatement:exit": popBlock,
        "ForInStatement:exit": popBlock,
        "ForOfStatement:exit": popBlock,

        "FunctionDeclaration:exit": endFunction,
        "FunctionExpression:exit": endFunction,
        "ArrowFunctionExpression:exit": endFunction,
        "Program:exit": endFunction
    };

};

},{}],51:[function(require,module,exports){
/**
 * @fileoverview Rule to check for max length on a line.
 * @author Matt DuVall <http://www.mattduvall.com>
 * @copyright 2013 Matt DuVall. All rights reserved.
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    /**
     * Creates a string that is made up of repeating a given string a certain
     * number of times. This uses exponentiation of squares to achieve significant
     * performance gains over the more traditional implementation of such
     * functionality.
     * @param {string} str The string to repeat.
     * @param {int} num The number of times to repeat the string.
     * @returns {string} The created string.
     * @private
     */
    function stringRepeat(str, num) {
        var result = "";
        for (num |= 0; num > 0; num >>>= 1, str += str) {
            if (num & 1) {
                result += str;
            }
        }
        return result;
    }

    var tabWidth = context.options[1];

    var maxLength = context.options[0],
        tabString = stringRepeat(" ", tabWidth);

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------
    function checkProgramForMaxLength(node) {
        var lines = context.getSourceLines();

        // Replace the tabs
        // Split (honors line-ending)
        // Iterate
        lines.forEach(function(line, i) {
            if (line.replace(/\t/g, tabString).length > maxLength) {
                context.report(node, { line: i + 1, col: 1 }, "Line " + (i + 1) + " exceeds the maximum line length of " + maxLength + ".");
            }
        });
    }


    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "Program": checkProgramForMaxLength
    };

};

},{}],52:[function(require,module,exports){
/**
 * @fileoverview Rule to enforce a maximum number of nested callbacks.
 * @author Ian Christian Myers
 * @copyright 2013 Ian Christian Myers. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Constants
    //--------------------------------------------------------------------------

    var THRESHOLD = context.options[0];

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    var callbackStack = [];

    /**
     * Checks a given function node for too many callbacks.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     * @private
     */
    function checkFunction(node) {
        var parent = node.parent;

        if (parent.type === "CallExpression") {
            callbackStack.push(node);
        }

        if (callbackStack.length > THRESHOLD) {
            var opts = {num: callbackStack.length, max: THRESHOLD};
            context.report(node, "Too many nested callbacks ({{num}}). Maximum allowed is {{max}}.", opts);
        }
    }

    /**
     * Pops the call stack.
     * @returns {void}
     * @private
     */
    function popStack() {
        callbackStack.pop();
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "ArrowFunctionExpression": checkFunction,
        "ArrowFunctionExpression:exit": popStack,

        "FunctionExpression": checkFunction,
        "FunctionExpression:exit": popStack
    };

};

},{}],53:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when a function has too many parameters
 * @author Ilya Volodin
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 * @copyright 2013 Ilya Volodin. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var numParams = context.options[0] || 3;

    /**
     * Checks a function to see if it has too many parameters.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     * @private
     */
    function checkFunction(node) {
        if (node.params.length > numParams) {
            context.report(node, "This function has too many parameters ({{count}}). Maximum allowed is {{max}}.", {
                count: node.params.length,
                max: numParams
            });
        }
    }

    return {
        "FunctionDeclaration": checkFunction,
        "ArrowFunctionExpression": checkFunction,
        "FunctionExpression": checkFunction
    };

};

},{}],54:[function(require,module,exports){
/**
 * @fileoverview A rule to set the maximum number of statements in a function.
 * @author Ian Christian Myers
 * @copyright 2013 Ian Christian Myers. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    var functionStack = [],
        maxStatements = context.options[0] || 10;

    function startFunction() {
        functionStack.push(0);
    }

    function endFunction(node) {
        var count = functionStack.pop();

        if (count > maxStatements) {
            context.report(node, "This function has too many statements ({{count}}). Maximum allowed is {{max}}.",
                    { count: count, max: maxStatements });
        }
    }

    function countStatements(node) {
        functionStack[functionStack.length - 1] += node.body.length;
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "FunctionDeclaration": startFunction,
        "FunctionExpression": startFunction,
        "ArrowFunctionExpression": startFunction,

        "BlockStatement": countStatements,

        "FunctionDeclaration:exit": endFunction,
        "FunctionExpression:exit": endFunction,
        "ArrowFunctionExpression:exit": endFunction
    };

};

},{}],55:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of constructors without capital letters
 * @author Nicholas C. Zakas
 * @copyright 2013-2014 Nicholas C. Zakas. All rights reserved.
 */

"use strict";

var CAPS_ALLOWED = [
    "Object",
    "Function",
    "Number",
    "String",
    "Boolean",
    "Date",
    "Array",
    "Symbol",
    "RegExp"
];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var config = context.options[0] || {};
    config.newIsCap = config.newIsCap === false ? false : true;
    config.capIsNew = config.capIsNew === false ? false : true;

    var listeners = {};

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Get exact callee name from expression
     * @param {ASTNode} node CallExpression or NewExpression node
     * @returns {String} name
     */
    function extractNameFromExpression(node) {

        var name = "",
            property;

        if (node.callee.type === "MemberExpression") {
            property = node.callee.property;

            if (property.type === "Literal" && (typeof property.value === "string")) {
                name = property.value;
            } else if (property.type === "Identifier" && !node.callee.computed) {
                name = property.name;
            }
        } else {
            name = node.callee.name;
        }
        return name;
    }

    /**
     * Returns the capitalization state of the string -
     * Whether the first character is uppercase, lowercase, or non-alphabetic
     * @param {String} str String
     * @returns {String} capitalization state: "non-alpha", "lower", or "upper"
     */
    function getCap(str) {
        var firstChar = str.charAt(0);

        var firstCharLower = firstChar.toLowerCase();
        var firstCharUpper = firstChar.toUpperCase();

        if (firstCharLower === firstCharUpper) {
            // char has no uppercase variant, so it's non-alphabetic
            return "non-alpha";
        } else if (firstChar === firstCharLower) {
            return "lower";
        } else {
            return "upper";
        }
    }

    /**
     * Check if capitalization is allowed for a CallExpression
     * @param {ASTNode} node CallExpression node
     * @param {String} calleeName Capitalized callee name from a CallExpression
     * @returns {Boolean} Returns true if the callee may be capitalized
     */
    function isCapAllowed(node, calleeName) {
        if (CAPS_ALLOWED.indexOf(calleeName) >= 0) {
            return true;
        }
        if (calleeName === "UTC" && node.callee.type === "MemberExpression") {
            // allow if callee is Date.UTC
            return node.callee.object.type === "Identifier" &&
                   node.callee.object.name === "Date";
        }
        return false;
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    if (config.newIsCap) {
        listeners.NewExpression = function(node) {

            var constructorName = extractNameFromExpression(node);
            if (constructorName && getCap(constructorName) === "lower") {
                context.report(node, "A constructor name should not start with a lowercase letter.");
            }
        };
    }

    if (config.capIsNew) {
        listeners.CallExpression = function(node) {

            var calleeName = extractNameFromExpression(node);
            if (calleeName && getCap(calleeName) === "upper" && !isCapAllowed(node, calleeName)) {
                context.report(node, "A function with a name starting with an uppercase letter should only be used as a constructor.");
            }
        };
    }

    return listeners;
};

},{}],56:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when using constructor without parentheses
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "NewExpression": function(node) {
            var tokens = context.getTokens(node);
            var prenticesTokens = tokens.filter(function(token) {
                return token.value === "(" || token.value === ")";
            });
            if (prenticesTokens.length < 2) {
                context.report(node, "Missing '()' invoking a constructor");
            }
        }
    };

};

},{}],57:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of alert, confirm, prompt
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

function matchProhibited(name) {
    return name.match(/^(alert|confirm|prompt)$/);
}

function report(context, node, result) {
    context.report(node, "Unexpected {{name}}.", { name: result[1] });
}


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "CallExpression": function(node) {

            var result;

            // without window.
            if (node.callee.type === "Identifier") {

                result = matchProhibited(node.callee.name);

                if (result) {
                    report(context, node, result);
                }

            } else if (node.callee.type === "MemberExpression" && node.callee.property.type === "Identifier") {

                result = matchProhibited(node.callee.property.name);

                if (result && node.callee.object.name === "window") {
                    report(context, node, result);
                }

            }

        }
    };

};

},{}],58:[function(require,module,exports){
/**
 * @fileoverview Disallow construction of dense arrays using the Array constructor
 * @author Matt DuVall <http://www.mattduvall.com/>
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    function check(node) {
        if (
            node.arguments.length !== 1 &&
            node.callee.type === "Identifier" &&
            node.callee.name === "Array"
        ) {
            context.report(node, "The array literal notation [] is preferrable.");
        }
    }

    return {
        "CallExpression": check,
        "NewExpression": check
    };

};

},{}],59:[function(require,module,exports){
/**
 * @fileoverview Rule to flag bitwise identifiers
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    function report(node) {
        context.report(node, "Unexpected use of '{{operator}}'.", { operator: node.operator });
    }

    return {
        "BinaryExpression": function(node) {

            // warn for ^ | & ~ << >> >>>
            if (node.operator.match(/^(?:[\^&\|~]|<<|>>>?)$/)) {
                report(node);
            }

        },

        "UnaryExpression": function(node) {

            // warn for ~
            if (node.operator === "~") {
                report(node);
            }

        }
    };

};

},{}],60:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of arguments.callee and arguments.caller.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "MemberExpression": function(node) {
            var objectName = node.object.name,
                propertyName = node.property.name;

            if (objectName === "arguments" && !node.computed && propertyName && propertyName.match(/^calle[er]$/)) {
                context.report(node, "Avoid arguments.{{property}}.", { property: propertyName });
            }

        }
    };

};

},{}],61:[function(require,module,exports){
/**
 * @fileoverview Rule to flag variable leak in CatchClauses in IE 8 and earlier
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    function paramIsShadowing(scope, name) {
        var found = scope.variables.some(function(variable) {
            return variable.name === name;
        });

        if (found) {
            return true;
        }

        if (scope.upper) {
            return paramIsShadowing(scope.upper, name);
        }

        return false;
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {

        "CatchClause": function(node) {
            var scope = context.getScope();

            if (paramIsShadowing(scope, node.param.name)) {
                context.report(node, "Value of '{{name}}' may be overwritten in IE 8 and earlier.",
                        { name: node.param.name });
            }
        }
    };

};

},{}],62:[function(require,module,exports){
/**
 * @fileoverview Rule to flag trailing commas in object literals.
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

     //-------------------------------------------------------------------------
     // Helpers
     //-------------------------------------------------------------------------

    function checkForTrailingComma(node) {
        var items = node.properties || node.elements,
            length = items.length,
            lastItem, penultimateToken;

        if (length) {
            lastItem = items[length - 1];
            if (lastItem) {
                penultimateToken = context.getLastToken(node, 1);
                if (penultimateToken.value === ",") {
                    context.report(lastItem, penultimateToken.loc.start, "Trailing comma.");
                }
            }
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "ObjectExpression": checkForTrailingComma,
        "ArrayExpression": checkForTrailingComma
    };

};

},{}],63:[function(require,module,exports){
/**
 * @fileoverview Rule to flag assignment in a conditional statement's test expression
 * @author Stephen Murray <spmurrayzzz>
 */
"use strict";

var NODE_DESCRIPTIONS = {
    "DoWhileStatement": "a 'do...while' statement",
    "ForStatement": "a 'for' statement",
    "IfStatement": "an 'if' statement",
    "WhileStatement": "a 'while' statement"
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var prohibitAssign = (context.options[0] || "except-parens");

    /**
     * Check whether an AST node is the test expression for a conditional statement.
     * @param {!Object} node The node to test.
     * @returns {boolean} `true` if the node is the text expression for a conditional statement; otherwise, `false`.
     */
    function isConditionalTestExpression(node) {
        return node.parent &&
            node.parent.test &&
            node === node.parent.test;
    }

    /**
     * Given an AST node, perform a bottom-up search for the first ancestor that represents a conditional statement.
     * @param {!Object} node The node to use at the start of the search.
     * @returns {?Object} The closest ancestor node that represents a conditional statement.
     */
    function findConditionalAncestor(node) {
        var currentAncestor = node;

        while ((currentAncestor = currentAncestor.parent)) {
            if (isConditionalTestExpression(currentAncestor)) {
                return currentAncestor.parent;
            }
        }

        return null;
    }

    /**
     * Check whether the code represented by an AST node is enclosed in parentheses.
     * @param {!Object} node The node to test.
     * @returns {boolean} `true` if the code is enclosed in parentheses; otherwise, `false`.
     */
    function isParenthesised(node) {
        var previousToken = context.getTokenBefore(node),
            nextToken = context.getTokenAfter(node);

        return previousToken.value === "(" && previousToken.range[1] <= node.range[0] &&
            nextToken.value === ")" && nextToken.range[0] >= node.range[1];
    }

    /**
     * Check whether the code represented by an AST node is enclosed in two sets of parentheses.
     * @param {!Object} node The node to test.
     * @returns {boolean} `true` if the code is enclosed in two sets of parentheses; otherwise, `false`.
     */
    function isParenthesisedTwice(node) {
        var previousToken = context.getTokenBefore(node, 1),
            nextToken = context.getTokenAfter(node, 1);

        return isParenthesised(node) &&
            previousToken.value === "(" && previousToken.range[1] <= node.range[0] &&
            nextToken.value === ")" && nextToken.range[0] >= node.range[1];
    }

    /**
     * Check a conditional statement's test expression for top-level assignments that are not enclosed in parentheses.
     * @param {!Object} node The node for the conditional statement.
     * @returns {void}
     */
    function testForAssign(node) {
        if (node.test && (node.test.type === "AssignmentExpression") && !isParenthesisedTwice(node.test)) {
            // must match JSHint's error message
            context.report(node, "Expected a conditional expression and instead saw an assignment.");
        }
    }

    /**
     * Check whether an assignment expression is descended from a conditional statement's test expression.
     * @param {!Object} node The node for the assignment expression.
     * @returns {void}
     */
    function testForConditionalAncestor(node) {
        var ancestor = findConditionalAncestor(node);

        if (ancestor) {
            context.report(ancestor, "Unexpected assignment within {{type}}.", {
                type: NODE_DESCRIPTIONS[ancestor.type] || ancestor.type
            });
        }
    }

    if (prohibitAssign === "always") {
        return {
            "AssignmentExpression": testForConditionalAncestor
        };
    }

    return {
        "DoWhileStatement": testForAssign,
        "ForStatement": testForAssign,
        "IfStatement": testForAssign,
        "WhileStatement": testForAssign
    };

};

},{}],64:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of console object
 * @author Nicholas C. Zakas
 */


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "MemberExpression": function(node) {

            if (node.object.name === "console") {
                context.report(node, "Unexpected console statement.");
            }

        }
    };

};

},{}],65:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use constant conditions
 * @author Christian Schulz <http://rndm.de>
 * @copyright 2014 Christian Schulz. All rights reserved.
 */


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Checks if a node has a constant truthiness value.
     * @param {ASTNode} node The AST node to check.
     * @returns {Bool} true when node's truthiness is constant
     * @private
     */
    function isConstant(node) {
        switch (node.type) {
            case "Literal":
            case "ArrowFunctionExpression":
            case "FunctionExpression":
            case "ObjectExpression":
            case "ArrayExpression":
                return true;
            case "UnaryExpression":
                return isConstant(node.argument);
            case "BinaryExpression":
            case "LogicalExpression":
                return isConstant(node.left) && isConstant(node.right);
            case "AssignmentExpression":
                return isConstant(node.right);
            case "SequenceExpression":
                return isConstant(node.expressions[node.expressions.length - 1]);
            // no default
        }
        return false;
    }

    /**
     * Reports when the given node contains a constant condition.
     * @param {ASTNode} node The AST node to check.
     * @returns {void}
     * @private
     */
    function checkConstantCondition(node) {
        if (node.test && isConstant(node.test)) {
            context.report(node, "Unexpected constant condition.");
        }
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        "ConditionalExpression": checkConstantCondition,
        "IfStatement": checkConstantCondition,
        "WhileStatement": checkConstantCondition,
        "DoWhileStatement": checkConstantCondition,
        "ForStatement": checkConstantCondition
    };

};

},{}],66:[function(require,module,exports){
/**
 * @fileoverview Rule to forbid control charactes from regular expressions.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";


    function getRegExp(node) {

        if (node.value instanceof RegExp) {
            return node.value;
        } else if (typeof node.value === "string") {

            var parent = context.getAncestors().pop();
            if ((parent.type === "NewExpression" || parent.type === "CallExpression") &&
            parent.callee.type === "Identifier" && parent.callee.name === "RegExp") {

                // there could be an invalid regular expression string
                try {
                    return new RegExp(node.value);
                } catch (ex) {
                    return null;
                }

            }
        } else {
            return null;
        }

    }



    return {

        "Literal": function(node) {

            var computedValue,
                regex = getRegExp(node);

            if (regex) {
                computedValue = regex.toString();
                if (/[\x00-\x1f]/.test(computedValue)) {
                    context.report(node, "Unexpected control character in regular expression.");
                }
            }
        }
    };

};

},{}],67:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of a debugger statement
 * @author Nicholas C. Zakas
 */


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "DebuggerStatement": function(node) {
            context.report(node, "Unexpected 'debugger' statement.");
        }
    };

};

},{}],68:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when deleting variables
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "UnaryExpression": function(node) {
            if (node.operator === "delete" && node.argument.type === "Identifier") {
                context.report(node, "Variables should not be deleted.");
            }
        }
    };

};

},{}],69:[function(require,module,exports){
/**
 * @fileoverview Rule to check for ambiguous div operator in regexes
 * @author Matt DuVall <http://www.mattduvall.com>
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "Literal": function(node) {
            var token = context.getFirstToken(node);

            if (token.type === "RegularExpression" && token.value[1] === "=") {
                context.report(node, "A regular expression literal can be confused with '/='.");
            }
        }
    };

};

},{}],70:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of duplicate keys in an object.
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "ObjectExpression": function(node) {

            // Object that will be a map of properties--safe because we will
            // prefix all of the keys.
            var nodeProps = {};

            node.properties.forEach(function(property) {
                var keyName = property.key.name || property.key.value;
                var key = property.kind + "-" + keyName;

                if (nodeProps[key]) {
                    context.report(node, "Duplicate key '{{key}}'.", { key: keyName });
                } else {
                    nodeProps[key] = true;
                }
            });

        }
    };

};

},{}],71:[function(require,module,exports){
/**
 * @fileoverview Rule to flag `else` after a `return` in `if`
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Display the context report if rule is violated
     *
     * @param {Node} node The 'else' node
     * @returns {void}
     */
    function displayReport(node) {
        context.report(node, "Unexpected 'else' after 'return'.");
    }

    /**
     * Check to see if the node is a ReturnStatement
     *
     * @param {Node} node The node being evaluated
     * @returns {boolean} True if node is a return
     */
    function checkForReturn(node) {
        return node.type === "ReturnStatement";
    }

    /**
     * Naive return checking, does not iterate through the whole
     * BlockStatement because we make the assumption that the ReturnStatement
     * will be the last node in the body of the BlockStatement.
     *
     * @param {Node} node The consequent/alternate node
     * @returns {boolean} True if it has a return
     */
    function naiveHasReturn(node) {
        if (node.type === "BlockStatement") {
            var body = node.body;
            return checkForReturn(body[body.length - 1]);
        }
        return checkForReturn(node);
    }

    /**
     * Check to see if the node is valid for evaluation,
     * meaning it has an else and not an else-if
     *
     * @param {Node} node The node being evaluated
     * @returns {boolean} True if the node is valid
     */
    function hasElse(node) {
        return node.alternate && node.consequent && node.alternate.type !== "IfStatement";
    }

    /**
     * If the consequent is an IfStatement, check to see if it has an else
     * and both its consequent and alternate path return, meaning this is
     * a nested case of rule violation.  If-Else not considered currently.
     *
     * @param {Node} node The consequent node
     * @returns {boolean} True if this is a nested rule violation
     */
    function checkForIf(node) {
        return node.type === "IfStatement" && hasElse(node) &&
            naiveHasReturn(node.alternate) && naiveHasReturn(node.consequent);
    }

    /**
     * Check the consequent/body node to make sure it is not
     * a ReturnStatement or an IfStatement that returns on both
     * code paths.  If it is, display the context report.
     *
     * @param {Node} node The consequent or body node
     * @param {Node} alternate The alternate node
     * @returns {void}
     */
    function checkForReturnOrIf(node, alternate) {
        if (checkForReturn(node) || checkForIf(node)) {
            displayReport(alternate);
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {

        "IfStatement": function (node) {
            // Don't bother finding a ReturnStatement, if there's no `else`
            // or if the alternate is also an if (indicating an else if).
            if (hasElse(node)) {
                var consequent = node.consequent,
                    alternate = node.alternate;
                // If we have a BlockStatement, check each consequent body node.
                if (consequent.type === "BlockStatement") {
                    var body = consequent.body;
                    body.forEach(function (bodyNode) {
                        checkForReturnOrIf(bodyNode, alternate);
                    });
                // If not a block statement, make sure the consequent isn't a ReturnStatement
                // or an IfStatement with returns on both paths
                } else {
                    checkForReturnOrIf(consequent, alternate);
                }
            }
        }

    };

};

},{}],72:[function(require,module,exports){
/**
 * @fileoverview Rule to flag the use of empty character classes in regular expressions
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/*
plain-English description of the following regexp:
0. `^` fix the match at the beginning of the string
1. `\/`: the `/` that begins the regexp
2. `([^\\[]|\\.|\[([^\\\]]|\\.)+\])*`: regexp contents; 0 or more of the following
  2.0. `[^\\[]`: any character that's not a `\` or a `[` (anything but escape sequences and character classes)
  2.1. `\\.`: an escape sequence
  2.2. `\[([^\\\]]|\\.)+\]`: a character class that isn't empty
3. `\/` the `/` that ends the regexp
4. `[gimy]*`: optional regexp flags
5. `$`: fix the match at the end of the string
*/
var regex = /^\/([^\\[]|\\.|\[([^\\\]]|\\.)+\])*\/[gimy]*$/;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "Literal": function(node) {
            var token = context.getFirstToken(node);
            if (token.type === "RegularExpression" && !regex.test(token.value)) {
                context.report(node, "Empty class.");
            }
        }

    };

};

},{}],73:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when label is not used for a loop or switch
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "LabeledStatement": function(node) {
            if (node.body.type !== "ForStatement" && node.body.type !== "WhileStatement" && node.body.type !== "DoWhileStatement" && node.body.type !== "SwitchStatement" && node.body.type !== "ForInStatement") {
                context.report(node, "Unexpected label {{l}}", {l: node.label.name});
            }
        }
    };

};

},{}],74:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of an empty block statement
 * @author Nicholas C. Zakas
 * @copyright Nicholas C. Zakas. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "BlockStatement": function(node) {
            var ancestors = context.getAncestors(),
                parent = ancestors[ancestors.length - 1],
                parentType = parent.type,
                isFinallyBlock = (parentType === "TryStatement") && (parent.finalizer === node);

            if (/Function|CatchClause/.test(parentType) ||
                    (isFinallyBlock && !parent.handlers.length)) {
                return;
            }

            if (node.body.length === 0) {
                context.report(node, "Empty block statement.");
            }
        },

        "SwitchStatement": function(node) {

            if (typeof node.cases === "undefined" || node.cases.length === 0) {
                context.report(node, "Empty switch statement.");
            }
        }
    };

};

},{}],75:[function(require,module,exports){
/**
 * @fileoverview Rule to flag comparisons to null without a type-checking
 * operator.
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    "use strict";

    return {

        "BinaryExpression": function(node) {
            var badOperator = node.operator === "==" || node.operator === "!=";

            if (node.right.type === "Literal" && node.right.raw === "null" && badOperator ||
                    node.left.type === "Literal" && node.left.raw === "null" && badOperator) {
                context.report(node, "Use ‘===’ to compare with ‘null’.");
            }
        }
    };

};

},{}],76:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of eval() statement
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var IMPLIED_EVAL = /set(?:Timeout|Interval)/;

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Determines if a node represents a call to setTimeout/setInterval with
     * a string argument.
     * @param {ASTNode} node The node to check.
     * @returns {boolean} True if the node matches, false if not.
     * @private
     */
    function isImpliedEval(node) {

        var isMemberExpression = (node.callee.type === "MemberExpression"),
            isIdentifier = (node.callee.type === "Identifier"),
            isSetMethod = (isIdentifier && IMPLIED_EVAL.test(node.callee.name)) ||
                (isMemberExpression && node.callee.object.name === "window" &&
                IMPLIED_EVAL.test(node.callee.property.name)),
            hasStringArgument = node.arguments.length && (typeof node.arguments[0].value === "string");

        return isSetMethod && hasStringArgument;
    }


    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        "CallExpression": function(node) {
            if (node.callee.name === "eval") {
                context.report(node, "eval can be harmful.");
            } else if (isImpliedEval(node)) {
                if (node.arguments.length && (typeof node.arguments[0].value === "string")) {
                    context.report(node, "Implied eval can be harmful. Pass a function instead of a string.");
                }
            }
        }
    };

};

},{}],77:[function(require,module,exports){
/**
 * @fileoverview Rule to flag assignment of the exception parameter
 * @author Stephen Murray <spmurrayzzz>
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var inCatch = false,
        exceptionName = null;

    return {

        "CatchClause": function(node) {
            inCatch = true;
            exceptionName = node.param.name;
        },

        "CatchClause:exit": function() {
            inCatch = false;
            exceptionName = null;
        },

        "AssignmentExpression": function(node) {

            if (inCatch) {

                if (node.left.name === exceptionName) {
                    context.report(node, "Do not assign to the exception parameter.");
                }
            }
        }

    };

};

},{}],78:[function(require,module,exports){
/**
 * @fileoverview Rule to flag adding properties to native object's prototypes.
 * @author David Nelson
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var BUILTINS = [
    "Object", "Function", "Array", "String", "Boolean", "Number", "Date",
    "RegExp", "Error", "EvalError", "RangeError", "ReferenceError",
    "SyntaxError", "TypeError", "URIError"
];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        // handle the Array.prototype.extra style case
        "AssignmentExpression": function(node) {
            var lhs = node.left, affectsProto;

            if (lhs.type !== "MemberExpression" || lhs.object.type !== "MemberExpression") {
                return;
            }

            affectsProto = lhs.object.computed ?
                lhs.object.property.type === "Literal" && lhs.object.property.value === "prototype" :
                lhs.object.property.name === "prototype";

            if (!affectsProto) {
                return;
            }

            BUILTINS.forEach(function(builtin) {
                if (lhs.object.object.name === builtin) {
                    context.report(node, builtin + " prototype is read only, properties should not be added.");
                }
            });
        },

        // handle the Object.defineProperty(Array.prototype) case
        "CallExpression": function(node) {

            var callee = node.callee,
                subject,
                object;

            // only worry about Object.defineProperty
            if (callee.type === "MemberExpression" &&
                callee.object.name === "Object" &&
                callee.property.name === "defineProperty") {

                // verify the object being added to is a native prototype
                subject = node.arguments[0];
                object = subject.object;

                if (object &&
                    object.type === "Identifier" &&
                    (BUILTINS.indexOf(object.name) > -1) &&
                    subject.property.name === "prototype") {

                    context.report(node, object.name + " prototype is read only, properties should not be added.");
                }
            }

        }
    };

};

},{}],79:[function(require,module,exports){
/**
 * @fileoverview Rule to flag unnecessary bind calls
 * @author Bence Dányi <bence@danyi.me>
 * @copyright 2014 Bence Dányi. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var scope = [{
        depth: -1,
        found: 0
    }];

    /**
     * Get the topmost scope
     * @returns {Object} The topmost scope
     */
    function getTopScope() {
        return scope[scope.length - 1];
    }

    /**
     * Increment the depth of the top scope
     * @returns {void}
     */
    function incrementScopeDepth() {
        var top = getTopScope();
        top.depth++;
    }

    /**
     * Decrement the depth of the top scope
     * @returns {void}
     */
    function decrementScopeDepth() {
        var top = getTopScope();
        top.depth--;
    }

    return {
        "CallExpression": function(node) {
            if (node.arguments.length === 1 &&
                node.callee.type === "MemberExpression" &&
                node.callee.property.name === "bind" &&
                /FunctionExpression$/.test(node.callee.object.type)) {
                scope.push({
                    call: node,
                    depth: -1,
                    found: 0
                });
            }
        },
        "CallExpression:exit": function(node) {
            var top = getTopScope();
            if (top.call === node && top.found === 0) {
                context.report(node, "The function binding is unnecessary.");
                scope.pop();
            }
        },
        "ArrowFunctionExpression": incrementScopeDepth,
        "ArrowFunctionExpression:exit": decrementScopeDepth,
        "FunctionExpression": incrementScopeDepth,
        "FunctionExpression:exit": decrementScopeDepth,
        "FunctionDeclaration": incrementScopeDepth,
        "FunctionDeclaration:exit": decrementScopeDepth,
        "ThisExpression": function() {
            var top = getTopScope();
            if (top.depth === 0) {
                top.found++;
            }
        }
    };

};

},{}],80:[function(require,module,exports){
/**
 * @fileoverview Rule to flag unnecessary double negation in Boolean contexts
 * @author Brandon Mills
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "UnaryExpression": function (node) {
            var ancestors = context.getAncestors(),
                parent = ancestors.pop(),
                grandparent = ancestors.pop();

            // Exit early if it's guaranteed not to match
            if (node.operator !== "!" ||
                    parent.type !== "UnaryExpression" ||
                    parent.operator !== "!") {
                return;
            }

            // if (<bool>) ...
            if (grandparent.type === "IfStatement") {
                context.report(node, "Redundant double negation in an if statement condition.");

            // do ... while (<bool>)
            } else if (grandparent.type === "DoWhileStatement") {
                context.report(node, "Redundant double negation in a do while loop condition.");

            // while (<bool>) ...
            } else if (grandparent.type === "WhileStatement") {
                context.report(node, "Redundant double negation in a while loop condition.");

            // <bool> ? ... : ...
            } else if ((grandparent.type === "ConditionalExpression" &&
                    parent === grandparent.test)) {
                context.report(node, "Redundant double negation in a ternary condition.");

            // for (...; <bool>; ...) ...
            } else if ((grandparent.type === "ForStatement" &&
                    parent === grandparent.test)) {
                context.report(node, "Redundant double negation in a for loop condition.");

            // !<bool>
            } else if ((grandparent.type === "UnaryExpression" &&
                    grandparent.operator === "!")) {
                context.report(node, "Redundant multiple negation.");

            // Boolean(<bool>)
            } else if ((grandparent.type === "CallExpression" &&
                    grandparent.callee.type === "Identifier" &&
                    grandparent.callee.name === "Boolean")) {
                context.report(node, "Redundant double negation in call to Boolean().");

            // new Boolean(<bool>)
            } else if ((grandparent.type === "NewExpression" &&
                    grandparent.callee.type === "Identifier" &&
                    grandparent.callee.name === "Boolean")) {
                context.report(node, "Redundant double negation in Boolean constructor call.");
            }
        }
    };

};

},{}],81:[function(require,module,exports){
/**
 * @fileoverview Disallow parenthesesisng higher precedence subexpressions.
 * @author Michael Ficarra
 * @copyright 2014 Michael Ficarra. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    function isParenthesised(node) {
        var previousToken = context.getTokenBefore(node),
            nextToken = context.getTokenAfter(node);

        return previousToken && nextToken &&
            previousToken.value === "(" && previousToken.range[1] <= node.range[0] &&
            nextToken.value === ")" && nextToken.range[0] >= node.range[1];
    }

    function isParenthesisedTwice(node) {
        var previousToken = context.getTokenBefore(node, 1),
            nextToken = context.getTokenAfter(node, 1);

        return isParenthesised(node) && previousToken && nextToken &&
            previousToken.value === "(" && previousToken.range[1] <= node.range[0] &&
            nextToken.value === ")" && nextToken.range[0] >= node.range[1];
    }

    function precedence(node) {

        switch (node.type) {
            case "SequenceExpression":
                return 0;

            case "AssignmentExpression":
                return 1;

            case "ConditionalExpression":
                return 3;

            case "LogicalExpression":
                switch (node.operator) {
                    case "||":
                        return 4;
                    case "&&":
                        return 5;
                    // no default
                }

                /* falls through */
            case "BinaryExpression":
                switch (node.operator) {
                    case "|":
                        return 6;
                    case "^":
                        return 7;
                    case "&":
                        return 8;
                    case "==":
                    case "!=":
                    case "===":
                    case "!==":
                        return 9;
                    case "<":
                    case "<=":
                    case ">":
                    case ">=":
                    case "in":
                    case "instanceof":
                        return 10;
                    case "<<":
                    case ">>":
                    case ">>>":
                        return 11;
                    case "+":
                    case "-":
                        return 12;
                    case "*":
                    case "/":
                    case "%":
                        return 13;
                    // no default
                }
                /* falls through */
            case "UnaryExpression":
                return 14;
            case "UpdateExpression":
                return 15;
            case "CallExpression":
                // IIFE is allowed to have parens in any position (#655)
                if (node.callee.type === "FunctionExpression") {
                    return -1;
                }
                return 16;
            case "NewExpression":
                return 17;
            // no default
        }
        return 18;
    }

    function report(node) {
        context.report(node, "Gratuitous parentheses around expression.");
    }

    function dryUnaryUpdate(node) {
        if (isParenthesised(node.argument) && precedence(node.argument) >= precedence(node)) {
            report(node.argument);
        }
    }

    function dryCallNew(node) {
        if (isParenthesised(node.callee) && precedence(node.callee) >= precedence(node) &&
        !(node.type === "CallExpression" && node.callee.type === "FunctionExpression")) {
            report(node.callee);
        }
        if (node.arguments.length === 1) {
            if (isParenthesisedTwice(node.arguments[0]) && precedence(node.arguments[0]) >= precedence({type: "AssignmentExpression"})) {
                report(node.arguments[0]);
            }
        } else {
            [].forEach.call(node.arguments, function(arg) {
                if (isParenthesised(arg) && precedence(arg) >= precedence({type: "AssignmentExpression"})) {
                    report(arg);
                }
            });
        }
    }

    function dryBinaryLogical(node) {
        var prec = precedence(node);
        if (isParenthesised(node.left) && precedence(node.left) >= prec) {
            report(node.left);
        }
        if (isParenthesised(node.right) && precedence(node.right) > prec) {
            report(node.right);
        }
    }

    return {
        "ArrayExpression": function(node) {
            [].forEach.call(node.elements, function(e) {
                if (e && isParenthesised(e) && precedence(e) >= precedence({type: "AssignmentExpression"})) {
                    report(e);
                }
            });
        },
        "AssignmentExpression": function(node) {
            if (isParenthesised(node.right) && precedence(node.right) >= precedence(node)) {
                report(node.right);
            }
        },
        "BinaryExpression": dryBinaryLogical,
        "CallExpression": dryCallNew,
        "ConditionalExpression": function(node) {
            if (isParenthesised(node.test) && precedence(node.test) >= precedence({type: "LogicalExpression", operator: "||"})) {
                report(node.test);
            }
            if (isParenthesised(node.consequent) && precedence(node.consequent) >= precedence({type: "AssignmentExpression"})) {
                report(node.consequent);
            }
            if (isParenthesised(node.alternate) && precedence(node.alternate) >= precedence({type: "AssignmentExpression"})) {
                report(node.alternate);
            }
        },
        "DoWhileStatement": function(node) {
            if (isParenthesisedTwice(node.test)) {
                report(node.test);
            }
        },
        "ExpressionStatement": function(node) {
            var firstToken;
            if (isParenthesised(node.expression)) {
                firstToken = context.getFirstToken(node.expression);
                if (firstToken.value !== "function" && firstToken.value !== "{") {
                    report(node.expression);
                }
            }
        },
        "ForInStatement": function(node) {
            if (isParenthesised(node.right)) {
                report(node.right);
            }
        },
        "ForStatement": function(node) {
            if (node.init && isParenthesised(node.init)) {
                report(node.init);
            }

            if (node.test && isParenthesised(node.test)) {
                report(node.test);
            }

            if (node.update && isParenthesised(node.update)) {
                report(node.update);
            }
        },
        "IfStatement": function(node) {
            if (isParenthesisedTwice(node.test)) {
                report(node.test);
            }
        },
        "LogicalExpression": dryBinaryLogical,
        "MemberExpression": function(node) {
            if (
                isParenthesised(node.object) &&
                precedence(node.object) >= precedence(node) &&
                (
                    node.computed ||
                    !(
                        node.object.type === "Literal" &&
                        typeof node.object.value === "number" &&
                        /^[0-9]+$/.test(context.getFirstToken(node.object).value)
                    )
                )
            ) {
                report(node.object);
            }
        },
        "NewExpression": dryCallNew,
        "ObjectExpression": function(node) {
            [].forEach.call(node.properties, function(e) {
                var v = e.value;
                if (v && isParenthesised(v) && precedence(v) >= precedence({type: "AssignmentExpression"})) {
                    report(v);
                }
            });
        },
        "ReturnStatement": function(node) {
            if (node.argument && isParenthesised(node.argument)) {
                report(node.argument);
            }
        },
        "SequenceExpression": function(node) {
            [].forEach.call(node.expressions, function(e) {
                if (isParenthesised(e) && precedence(e) >= precedence(node)) {
                    report(e);
                }
            });
        },
        "SwitchCase": function(node) {
            if (node.test && isParenthesised(node.test)) {
                report(node.test);
            }
        },
        "SwitchStatement": function(node) {
            if (isParenthesisedTwice(node.discriminant)) {
                report(node.discriminant);
            }
        },
        "ThrowStatement": function(node) {
            if (isParenthesised(node.argument)) {
                report(node.argument);
            }
        },
        "UnaryExpression": dryUnaryUpdate,
        "UpdateExpression": dryUnaryUpdate,
        "VariableDeclarator": function(node) {
            if (node.init && isParenthesised(node.init) && precedence(node.init) >= precedence({type: "AssignmentExpression"})) {
                report(node.init);
            }
        },
        "WhileStatement": function(node) {
            if (isParenthesisedTwice(node.test)) {
                report(node.test);
            }
        },
        "WithStatement": function(node) {
            if (isParenthesisedTwice(node.object)) {
                report(node.object);
            }
        }
    };

};

},{}],82:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of unnecessary semicolons
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "EmptyStatement": function(node) {
            context.report(node, "Unnecessary semicolon.");
        }
    };

};

},{}],83:[function(require,module,exports){
/**
 * @fileoverview Rule to flag unnecessary strict directives.
 * @author Ian Christian Myers
 * @copyright 2014 Ian Christian Myers. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    function directives(block) {
        var ds = [], body = block.body, e, i, l;

        for (i = 0, l = body.length; i < l; ++i) {
            e = body[i];

            if (
                e.type === "ExpressionStatement" &&
                e.expression.type === "Literal" &&
                typeof e.expression.value === "string"
            ) {
                ds.push(e.expression);
            } else {
                break;
            }
        }
        return ds;
    }

    function isStrict(directive) {
        return directive.value === "use strict";
    }

    function checkForUnnecessaryUseStrict(node) {
        var useStrictDirectives = directives(node).filter(isStrict),
            scope,
            upper;

        switch (useStrictDirectives.length) {
            case 0:
                break;

            case 1:
                scope = context.getScope();
                upper = scope.upper;

                if (upper && upper.functionExpressionScope) {
                    upper = upper.upper;
                }

                if (upper && upper.isStrict) {
                    context.report(useStrictDirectives[0], "Unnecessary 'use strict'.");
                }
                break;

            default:
                context.report(useStrictDirectives[1], "Multiple 'use strict' directives.");
        }
    }

    return {

        "Program": checkForUnnecessaryUseStrict,

        "ArrowFunctionExpression": function(node) {
            checkForUnnecessaryUseStrict(node.body);
        },

        "FunctionExpression": function(node) {
            checkForUnnecessaryUseStrict(node.body);
        },

        "FunctionDeclaration": function(node) {
            checkForUnnecessaryUseStrict(node.body);
        }
    };

};

},{}],84:[function(require,module,exports){
/**
 * @fileoverview Rule to flag fall-through cases in switch statements.
 * @author Matt DuVall <http://mattduvall.com/>
 */
"use strict";


var FALLTHROUGH_COMMENT = /falls\sthrough/;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var switches = [];

    return {

        "SwitchCase": function(node) {

            var consequent = node.consequent,
                switchData = switches[switches.length - 1],
                i,
                comments,
                comment;

            /*
             * Some developers wrap case bodies in blocks, so if there is just one
             * node and it's a block statement, check inside.
             */
            if (consequent.length === 1 && consequent[0].type === "BlockStatement") {
                consequent = consequent[0];
            }

            // checking on previous case
            if (!switchData.lastCaseClosed) {

                // a fall through comment will be the last trailing comment of the last case
                comments = context.getComments(switchData.lastCase).trailing;
                comment = comments[comments.length - 1];

                // unless the user doesn't like semicolons, in which case it's first leading comment of this case
                if (!comment) {
                    comments = context.getComments(node).leading;
                    comment = comments[comments.length - 1];
                }

                // check for comment
                if (!comment || !FALLTHROUGH_COMMENT.test(comment.value)) {

                    context.report(switchData.lastCase,
                        "Expected a \"break\" statement before \"{{code}}\".",
                        { code: node.test ? "case" : "default" });
                }
            }

            // now dealing with the current case
            switchData.lastCaseClosed = false;
            switchData.lastCase = node;

            // try to verify using statements - go backwards as a fast path for the search
            if (consequent.length) {
                for (i = consequent.length - 1; i >= 0; i--) {
                    if (/(?:Break|Continue|Return|Throw)Statement/.test(consequent[i].type)) {
                        switchData.lastCaseClosed = true;
                        break;
                    }
                }
            } else {
                // the case statement has no statements, so it must logically fall through
                switchData.lastCaseClosed = true;
            }

            /*
             * Any warnings are triggered when the next SwitchCase occurs.
             * There is no need to warn on the last SwitchCase, since it can't
             * fall through to anything.
             */
        },

        "SwitchStatement": function(node) {
            switches.push({
                node: node,
                lastCaseClosed: true,
                lastCase: null
            });
        },

        "SwitchStatement:exit": function() {
            switches.pop();
        }
    };

};

},{}],85:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of a leading/trailing decimal point in a numeric literal
 * @author James Allardice
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "Literal": function(node) {

            if (typeof node.value === "number") {
                if (node.raw.indexOf(".") === 0) {
                    context.report(node, "A leading decimal point can be confused with a dot.");
                }
                if (node.raw.indexOf(".") === node.raw.length - 1) {
                    context.report(node, "A trailing decimal point can be confused with a dot.");
                }
            }
        }
    };

};

},{}],86:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of function declaration identifiers as variables.
 * @author Ian Christian Myers
 * @copyright 2013 Ian Christian Myers. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /*
     * Walk the scope chain looking for either a FunctionDeclaration or a
     * VariableDeclaration with the same name as left-hand side of the
     * AssignmentExpression. If we find the FunctionDeclaration first, then we
     * warn, because a FunctionDeclaration is trying to become a Variable or a
     * FunctionExpression. If we find a VariableDeclaration first, then we have
     * a legitimate shadow variable.
     */
    function checkIfIdentifierIsFunction(scope, name) {
        var variable,
            def,
            i,
            j;

        // Loop over all of the identifiers available in scope.
        for (i = 0; i < scope.variables.length; i++) {
            variable = scope.variables[i];

            // For each identifier, see if it was defined in _this_ scope.
            for (j = 0; j < variable.defs.length; j++) {
                def = variable.defs[j];

                // Identifier is a function and was declared in this scope
                if (def.name.name === name && def.type === "FunctionName") {
                    return true;
                }

                // Identifier is a variable and was declared in this scope. This
                // is a legitimate shadow variable.
                if (def.name.name === name) {
                    return false;
                }
            }
        }

        // Check the upper scope.
        if (scope.upper) {
            return checkIfIdentifierIsFunction(scope.upper, name);
        }

        // We've reached the global scope and haven't found anything.
        return false;
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {

        "AssignmentExpression": function(node) {
            var scope = context.getScope(),
                name = node.left.name;

            if (checkIfIdentifierIsFunction(scope, name)) {
                context.report(node, "'{{name}}' is a function.", { name: name });
            }

        }

    };

};

},{}],87:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of implied eval via setTimeout and setInterval
 * @author James Allardice
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "CallExpression": function(node) {

            if (node.callee.type === "Identifier") {
                var callee = node.callee.name;

                if (callee === "setTimeout" || callee === "setInterval") {
                    var argument = node.arguments[0];
                    if (argument && argument.type === "Literal" && typeof argument.value === "string") {
                        context.report(node, "Implied eval. Consider passing a function instead of a string.");
                    }
                }
            }
        }
    };

};

},{}],88:[function(require,module,exports){
/**
 * @fileoverview Enforces or disallows inline comments.
 * @author Greg Cochard
 * @copyright 2014 Greg Cochard. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    /**
     * Will check that comments are not on lines starting with or ending with code
     * @param {ASTNode} node The comment node to check
     * @private
     * @returns {void}
     */
    function testCodeAroundComment(node) {

        // Get the whole line and cut it off at the start of the comment
        var startLine = String(context.getSourceLines()[node.loc.start.line - 1]);
        var endLine = String(context.getSourceLines()[node.loc.end.line - 1]);

        var preamble = startLine.slice(0, node.loc.start.column).trim();

        // Also check after the comment
        var postamble = endLine.slice(node.loc.end.column).trim();

        // Should be empty if there was only whitespace around the comment
        if (preamble || postamble) {
            context.report(node, "Unexpected comment inline with code.");
        }
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "LineComment": testCodeAroundComment,
        "BlockComment": testCodeAroundComment

    };
};

},{}],89:[function(require,module,exports){
/**
 * @fileoverview Rule to enforce declarations in program or function body root.
 * @author Brandon Mills
 * @copyright 2014 Brandon Mills. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    /**
     * Find the nearest Program or Function ancestor node.
     * @returns {Object} Ancestor's type and distance from node.
     */
    function nearestBody() {
        var ancestors = context.getAncestors(),
            ancestor = ancestors.pop(),
            generation = 1;

        while (ancestor && ["Program", "FunctionDeclaration",
                "FunctionExpression"].indexOf(ancestor.type) < 0) {
            generation += 1;
            ancestor = ancestors.pop();
        }

        return {
            // Type of containing ancestor
            type: ancestor.type,
            // Separation between ancestor and node
            distance: generation
        };
    }

    /**
     * Ensure that a given node is at a program or function body's root.
     * @param {ASTNode} node Declaration node to check.
     * @returns {void}
     */
    function check(node) {
        var body = nearestBody(node),
            valid = ((body.type === "Program" && body.distance === 1) ||
                body.distance === 2);

        if (!valid) {
            context.report(node, "Move {{type}} declaration to {{body}} root.",
                {
                    type: (node.type === "FunctionDeclaration" ?
                        "function" : "variable"),
                    body: (body.type === "Program" ?
                        "program" : "function body")
                }
            );
        }
    }

    return {

        "FunctionDeclaration": check,
        "VariableDeclaration": function(node) {
            if (context.options[0] === "both") {
                check(node);
            }
        }

    };

};

},{}],90:[function(require,module,exports){
/**
 * @fileoverview Validate strings passed to the RegExp constructor
 * @author Michael Ficarra
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    function isString(node) {
        return node && node.type === "Literal" && typeof node.value === "string";
    }

    function check(node) {
        if (node.callee.type === "Identifier" && node.callee.name === "RegExp" && isString(node.arguments[0])) {
            try {
                if (isString(node.arguments[1])) {
                    void new RegExp(node.arguments[0].value, node.arguments[1].value);
                } else {
                    void new RegExp(node.arguments[0].value);
                }
            } catch(e) {
                context.report(node, e.message);
            }
        }
    }

    return {
        "CallExpression": check,
        "NewExpression": check
    };

};

},{}],91:[function(require,module,exports){
/**
 * @fileoverview Rule to disalow whitespace that is not a tab or space, whitespace inside strings and comments are allowed
 * @author Jonathan Kingston
 * @copyright 2014 Jonathan Kingston. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    "use strict";

    var irregularWhitespace = /[\u0085\u00A0\ufeff\f\v\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u202f\u205f\u3000]+/mg;

    // Module store of errors that we have found
    var errors = [];

    /**
     * Removes errors that occur inside a string node
     * @param {ASTNode} node to check for matching errors.
     * @returns {void}
     * @private
     */
    function removeStringError(node) {
        var locStart = node.loc.start;
        var locEnd = node.loc.end;

        errors = errors.filter(function (error) {
            var errorLoc = error[1];
            if (errorLoc.line >= locStart.line && errorLoc.line <= locEnd.line) {
                if (errorLoc.column >= locStart.column && errorLoc.column <= locEnd.column) {
                    return false;
                }
            }
            return true;
        });
    }

    /**
     * Checks nodes for errors that we are choosing to ignore and calls the relevent methods to remove the errors
     * @param {ASTNode} node to check for matching errors.
     * @returns {void}
     * @private
     */
    function removeInvalidNodeErrors(node) {
        if (typeof node.value === "string") {
            // If we have irregular characters remove them from the errors list
            if (node.value.match(irregularWhitespace)) {
                removeStringError(node);
            }
        }
    }

    return {
        "Program": function (node) {
            /**
             * As we can easily fire warnings for all white space issues with all the source its simpler to fire them here
             * This means we can check all the application code without having to worry about issues caused in the parser tokens
             * When writing this code also evaluating per node was missing out connecting tokens in some cases
             * We can later filter the errors when they are found to be not an issue in nodes we don't care about
             */
            var sourceLines = context.getSourceLines();

            sourceLines.forEach(function (sourceLine, lineIndex) {
                var location,
                    match = irregularWhitespace.exec(sourceLine);

                if (match !== null) {
                    location = {
                        line: lineIndex + 1,
                        column: match.index
                    };

                    errors.push([node, location, "Irregular whitespace not allowed"]);
                }
            });
        },
        "Identifier": removeInvalidNodeErrors,
        "Literal": removeInvalidNodeErrors,
        "Statement": removeInvalidNodeErrors,
        "Expression": removeInvalidNodeErrors,
        "Program:exit": function () {

            // If we have any errors remaining report on them
            errors.forEach(function (error) {
                context.report.apply(this, error);
            });
        }
    };
};

},{}],92:[function(require,module,exports){
/**
 * @fileoverview Rule to flag usage of __iterator__ property
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "MemberExpression": function(node) {

            if (node.property &&
                    (node.property.type === "Identifier" && node.property.name === "__iterator__" && !node.computed) ||
                    (node.property.type === "Literal" && node.property.value === "__iterator__")) {
                context.report(node, "Reserved name '__iterator__'.");
            }
        }
    };

};

},{}],93:[function(require,module,exports){
/**
 * @fileoverview Rule to flag labels that are the same as an identifier
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    function findIdentifier(scope, identifier) {
        var found = false;

        scope.variables.forEach(function(variable) {
            if (variable.name === identifier) {
                found = true;
            }
        });

        scope.references.forEach(function(reference) {
            if (reference.identifier.name === identifier) {
                found = true;
            }
        });

        // If we have not found the identifier in this scope, check the parent
        // scope.
        if (scope.upper && !found) {
            return findIdentifier(scope.upper, identifier);
        }

        return found;
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {

        "LabeledStatement": function(node) {

            // Fetch the innermost scope.
            var scope = context.getScope();

            // Recursively find the identifier walking up the scope, starting
            // with the innermost scope.
            if (findIdentifier(scope, node.label.name)) {
                context.report(node, "Found identifier with same name as label.");
            }
        }

    };

};

},{}],94:[function(require,module,exports){
/**
 * @fileoverview Disallow Labeled Statements
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "LabeledStatement": function(node) {
            context.report(node, "Unexpected labeled statement.");
        },

        "BreakStatement": function(node) {

            if (node.label) {
                context.report(node, "Unexpected label in break statement.");
            }

        },

        "ContinueStatement": function(node) {

            if (node.label) {
                context.report(node, "Unexpected label in continue statement.");
            }

        }


    };

};

},{}],95:[function(require,module,exports){
/**
 * @fileoverview Rule to flag blocks with no reason to exist
 * @author Brandon Mills
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "BlockStatement": function (node) {
            // Check for any occurrence of BlockStatement > BlockStatement or
            // Program > BlockStatement
            var parent = context.getAncestors().pop();
            if (parent.type === "BlockStatement" || parent.type === "Program") {
                context.report(node, "Block is nested inside another block.");
            }
        }
    };

};

},{}],96:[function(require,module,exports){
/**
 * @fileoverview Rule to disallow if as the only statmenet in an else block
 * @author Brandon Mills
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        "IfStatement": function(node) {
            var ancestors = context.getAncestors(),
                parent = ancestors.pop(),
                grandparent = ancestors.pop();

            if (parent && parent.type === "BlockStatement" &&
                    parent.body.length === 1 && grandparent &&
                    grandparent.type === "IfStatement" &&
                    parent === grandparent.alternate) {
                context.report(node, "Unexpected if as the only statement in an else block.");
            }
        }
    };

};

},{}],97:[function(require,module,exports){
/**
 * @fileoverview Rule to flag creation of function inside a loop
 * @author Ilya Volodin
 * @copyright 2013 Ilya Volodin. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    function checkForLoops(node) {
        var ancestors = context.getAncestors();

        if (ancestors.some(function(ancestor) {
            return ancestor.type === "ForStatement" || ancestor.type === "WhileStatement" || ancestor.type === "DoWhileStatement";
        })) {
            context.report(node, "Don't make functions within a loop");
        }
    }

    return {
        "ArrowFunctionExpression": checkForLoops,
        "FunctionExpression": checkForLoops,
        "FunctionDeclaration": checkForLoops
    };
};

},{}],98:[function(require,module,exports){
/**
 * @fileoverview Rule to enforce grouped require statements for Node.JS
 * @author Raphael Pigulla
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    "use strict";

    /**
     * Returns the list of built-in modules.
     *
     * @returns {string[]} An array of built-in Node.js modules.
     */
    function getBuiltinModules() {
        // This list is generated using `require("repl")._builtinLibs.concat('repl').sort()`
        // This particular list was generated using node v0.11.9
        return [
            "assert", "buffer", "child_process", "cluster", "crypto",
            "dgram", "dns", "domain", "events", "fs", "http", "https",
            "net", "os", "path", "punycode", "querystring", "readline",
            "repl", "smalloc", "stream", "string_decoder", "tls", "tty",
            "url", "util", "vm", "zlib"
        ];
    }

    var BUILTIN_MODULES = getBuiltinModules();

    var DECL_REQUIRE = "require",
        DECL_UNINITIALIZED = "uninitialized",
        DECL_OTHER = "other";

    var REQ_CORE = "core",
        REQ_FILE = "file",
        REQ_MODULE = "module",
        REQ_COMPUTED = "computed";

    /**
     * Determines the type of a declaration statement.
     * @param {ASTNode} initExpression The init node of the VariableDeclarator.
     * @returns {string} The type of declaration represented by the expression.
     */
    function getDeclarationType(initExpression) {
        if (!initExpression) {
            // "var x;"
            return DECL_UNINITIALIZED;
        }

        if (initExpression.type === "CallExpression" &&
            initExpression.callee.type === "Identifier" &&
            initExpression.callee.name === "require"
        ) {
            // "var x = require('util');"
            return DECL_REQUIRE;
        } else if (initExpression.type === "MemberExpression") {
            // "var x = require('glob').Glob;"
            return getDeclarationType(initExpression.object);
        }

        // "var x = 42;"
        return DECL_OTHER;
    }

    /**
     * Determines the type of module that is loaded via require.
     * @param {ASTNode} initExpression The init node of the VariableDeclarator.
     * @returns {string} The module type.
     */
    function inferModuleType(initExpression) {
        if (initExpression.type === "MemberExpression") {
            // "var x = require('glob').Glob;"
            return inferModuleType(initExpression.object);
        } else if (initExpression["arguments"].length === 0) {
            // "var x = require();"
            return REQ_COMPUTED;
        }

        var arg = initExpression["arguments"][0];

        if (arg.type !== "Literal" || typeof arg.value !== "string") {
            // "var x = require(42);"
            return REQ_COMPUTED;
        }

        if (BUILTIN_MODULES.indexOf(arg.value) !== -1) {
            // "var fs = require('fs');"
            return REQ_CORE;
        } else if (/^\.{0,2}\//.test(arg.value)) {
            // "var utils = require('./utils');"
            return REQ_FILE;
        } else {
            // "var async = require('async');"
            return REQ_MODULE;
        }
    }

    /**
     * Check if the list of variable declarations is mixed, i.e. whether it
     * contains both require and other declarations.
     * @param {ASTNode} declarations The list of VariableDeclarators.
     * @returns {boolean} True if the declarations are mixed, false if not.
     */
    function isMixed(declarations) {
        var contains = {};

        declarations.forEach(function (declaration) {
            var type = getDeclarationType(declaration.init);
            contains[type] = true;
        });

        return !!(
            contains[DECL_REQUIRE] &&
            (contains[DECL_UNINITIALIZED] || contains[DECL_OTHER])
        );
    }

    /**
     * Check if all require declarations in the given list are of the same
     * type.
     * @param {ASTNode} declarations The list of VariableDeclarators.
     * @returns {boolean} True if the declarations are grouped, false if not.
     */
    function isGrouped(declarations) {
        var found = {};

        declarations.forEach(function (declaration) {
            if (getDeclarationType(declaration.init) === DECL_REQUIRE) {
                found[inferModuleType(declaration.init)] = true;
            }
        });

        return Object.keys(found).length <= 1;
    }


    return {

        "VariableDeclaration": function(node) {
            var grouping = !!context.options[0];

            if (isMixed(node.declarations)) {
                context.report(
                    node,
                    "Do not mix 'require' and other declarations."
                );
            } else if (grouping && !isGrouped(node.declarations)) {
                context.report(
                    node,
                    "Do not mix core, module, file and computed requires."
                );
            }
        }
    };

};

},{}],99:[function(require,module,exports){
/**
 * @fileoverview Disallow mixed spaces and tabs for indentation
 * @author Jary Niebur
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 * @copyright 2014 Jary Niebur. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var smartTabs;

    switch (context.options[0]) {
        case true: // Support old syntax, maybe add deprecation warning here
        case "smart-tabs":
            smartTabs = true;
            break;
        default:
            smartTabs = false;
    }

    var COMMENT_START = /^\s*\/\*/,
        MAYBE_COMMENT = /^\s*\*/;

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "Program": function(node) {
            /*
             * At least one space followed by a tab
             * or the reverse before non-tab/-space
             * characters begin.
             */
            var regex = /^(?=[\t ]*(\t | \t))/,
                match,
                lines = context.getSourceLines();

            if (smartTabs) {
                /*
                 * At least one space followed by a tab
                 * before non-tab/-space characters begin.
                 */
                regex = /^(?=[\t ]* \t)/;
            }

            lines.forEach(function(line, i) {
                match = regex.exec(line);

                if (match) {

                    if (!MAYBE_COMMENT.test(line) && !COMMENT_START.test(lines[i - 1])) {
                        context.report(node, { line: i + 1, column: match.index + 1 }, "Mixed spaces and tabs.");
                    }

                }
            });
        }

    };

};

},{}],100:[function(require,module,exports){
/**
 * @fileoverview Disallow use of multiple spaces.
 * @author Vignesh Anand aka vegetableman.
 * @copyright 2014 Vignesh Anand. All rights reserved.
 * @copyright 2014 Brandon Mills. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

var OPERATORS = {
    "Punctuator": {
        "*": true, "/": true, "%": true, "+": true, "-": true, "<<": true,
        ">>": true, ">>>": true, "<": true, "<=": true, ">": true, ">=": true,
        "==": true, "!=": true, "===": true, "!==": true, "&": true, "^": true,
        "|": true, "&&": true, "||": true, "=": true, "+=": true, "-=": true,
        "*=": true, "/=": true, "%=": true, "<<=": true, ">>=": true,
        ">>>=": true, "&=": true, "^=": true, "|=": true, "?": true, ":": true,
        ",": true
    },
    "Keyword": {
        "in": true,
        "instanceof": true
    }
};

/**
 * Determines whether a token is a binary operator.
 * @param   {Token}   token The token.
 * @returns {Boolean}       Whether the token is a binary operator.
 */
function isOperator(token) {
    var type = OPERATORS[token.type];
    return (type && type[token.value]) || false;
}

/**
 * Gets the index of the first element of an array that satisfies a predicate.
 * Like Array.prototype.indexOf(), but with a predicate instead of equality.
 * @param   {Array}    array     An array to search.
 * @param   {Function} predicate A function returning true if its argument
 *                               satisfies a condition.
 * @returns {Number}             The index of the first element that satisifies
 *                               the predicate, or -1 if no elements match.
 */
function findIndex(array, predicate) {
    for (var i = 0, l = array.length; i < l; i++) {
        if (predicate(array[i])) {
            return i;
        }
    }
    return -1;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    /**
     * Validates that two adjacent tokens are separated by less than two spaces.
     * @param   {Token} left  Token on the left side.
     * @param   {Token} right Token on the right side.
     * @returns {void}
     */
    function validate(left, right) {
        var op;

        if (
            left.loc.end.line === right.loc.start.line &&
            right.range[0] - left.range[1] > 1
        ) {
            op = isOperator(left) ? left : right;
            context.report(op, "Multiple spaces found {{side}} '{{op}}'.", {
                side: op === right ? "before" : "after",
                op: op.value
            });
        }
    }

    /**
     * Validates the spacing of two nodes with an operator between them.
     * @param   {ASTNode} left  Node left of the operator.
     * @param   {ASTNode} right Node right of the operator.
     * @returns {void}
     */
    function validateBetween(left, right) {
        var tokens = context.getTokensBetween(left, right, 1),
            operatorIndex = findIndex(tokens, isOperator),
            op = tokens[operatorIndex];

        validate(tokens[operatorIndex - 1], op);
        validate(op, tokens[operatorIndex + 1]);
    }

    /**
     * Report if there are multiple spaces on the expression.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     * @private
     */
    function checkExpression(node) {
        validateBetween(node.left, node.right);
    }

    /**
     * Report if there are multiple spaces around conditional ternary operators.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     * @private
     */
    function checkConditional(node) {
        validateBetween(node.test, node.consequent);
        validateBetween(node.consequent, node.alternate);
    }

    /**
     * Report if there are multiple spaces around equal operator in variable declaration.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     * @private
     */
    function checkVar(node) {
        if (node.init) {
            validateBetween(node.id, node.init);
        }
    }

    /**
     * Generates a function to check object literals and other list-like nodes.
     * @param {String} property Name of the node's collection property.
     * @returns {Function} A function that checks spacing within list-like node.
     * @private
     */
    function checkList(property) {
        /**
         * Report if there are multiple spaces around list of items in objects,
         * function parameters, sequences and declarations.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         * @private
         */
        return function(node) {
            var items = node[property];

            for (var i = 0, l = items.length; i < l - 1; i++) {
                validateBetween(items[i], items[i + 1]);
            }
        };
    }

    /**
     * Checks arrays literals, allowing that some elements may be empty.
     * @param {ASTNode} node An ArrayExpression.
     * @returns {void}
     * @private
     */
    function checkArray(node) {
        var elements = node.elements,
            elementIndex = 0,
            tokens = context.getTokens(node),
            tokenIndex = 0,
            length = tokens.length,
            dest;

        // Check spacing at the beginning, around commas, and at the end
        while (tokenIndex < length - 1) {
            validate(tokens[tokenIndex], tokens[++tokenIndex]);

            // Don't advance to the next element until both sides of the comma
            // have been checked
            if (tokens[tokenIndex].value !== ",") {
                // Skip to just before the end of the array or the next comma
                if (elements[elementIndex]) {
                    dest = elements[elementIndex].range[1];
                    // Move to the end of the element
                    while (tokens[tokenIndex].range[1] < dest) {
                        ++tokenIndex;
                    }
                    // Move past anything (like closing parens) between the end
                    // of the node and the following comma or end brace.
                    while (
                        tokenIndex + 1 < tokens.length &&
                        tokens[tokenIndex + 1].value !== ","
                    ) {
                        ++tokenIndex;
                    }
                }
                ++elementIndex;
            }
        }
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        "AssignmentExpression": checkExpression,
        "BinaryExpression": checkExpression,
        "LogicalExpression": checkExpression,
        "ConditionalExpression": checkConditional,
        "VariableDeclarator": checkVar,
        "ArrayExpression": checkArray,
        "ObjectExpression": checkList("properties"),
        "SequenceExpression": checkList("expressions"),
        "FunctionExpression": checkList("params"),
        "FunctionDeclaration": checkList("params"),
        "VariableDeclaration": checkList("declarations")
    };

};

},{}],101:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when using multiline strings
 * @author Ilya Volodin
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 * @copyright 2013 Ilya Volodin. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    "use strict";

    /**
     * Determines if a given node is part of JSX syntax.
     * @param {ASTNode} node The node to check.
     * @returns {boolean} True if the node is a JSX node, false if not.
     * @private
     */
    function isJSXElement(node) {
        return node.type.indexOf("XJS") === 0;
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {

        "Literal": function(node) {
            var lineBreak = /\n/;

            if (lineBreak.test(node.raw) && !isJSXElement(node.parent)) {
                context.report(node, "Multiline support is limited to browsers supporting ES5 only.");
            }
        }
    };

};

},{}],102:[function(require,module,exports){
/**
 * @fileoverview Disallows multiple blank lines.
 * implementation adapted from the no-trailing-spaces rule.
 * @author Greg Cochard
 * @copyright 2014 Greg Cochard. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    // Use options.max or 2 as default
    var numLines = 2;

    if (context.options.length) {
        numLines = context.options[0].max;
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "Program": function checkBlankLines(node) {
            var lines = context.getSourceLines(),
                currentLocation = -1,
                lastLocation,
                blankCounter = 0,
                location,
                trimmedLines = lines.map(function(str) {
                    return str.trim();
                });

            // Aggregate and count blank lines
            do {
                lastLocation = currentLocation;
                currentLocation = trimmedLines.indexOf("", currentLocation + 1);
                if (lastLocation === currentLocation - 1) {
                    blankCounter++;
                } else {
                    if (blankCounter >= numLines) {
                        location = {
                            line: lastLocation + 1,
                            column: lines[lastLocation].length
                        };
                        context.report(node, location, "Multiple blank lines not allowed.");
                    }

                    // Finally, reset the blank counter
                    blankCounter = 0;
                }
            } while (currentLocation !== -1);
        }
    };

};

},{}],103:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when re-assigning native objects
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var nativeObjects = ["Array", "Boolean", "Date", "decodeURI",
                        "decodeURIComponent", "encodeURI", "encodeURIComponent",
                        "Error", "eval", "EvalError", "Function", "isFinite",
                        "isNaN", "JSON", "Math", "Number", "Object", "parseInt",
                        "parseFloat", "RangeError", "ReferenceError", "RegExp",
                        "String", "SyntaxError", "TypeError", "URIError",
                        "Map", "NaN", "Set", "WeakMap", "Infinity", "undefined"];

    return {

        "AssignmentExpression": function(node) {
            if (nativeObjects.indexOf(node.left.name) >= 0) {
                context.report(node, node.left.name + " is a read-only native object.");
            }
        },

        "VariableDeclarator": function(node) {
            if (nativeObjects.indexOf(node.id.name) >= 0) {
                context.report(node, "Redefinition of '{{nativeObject}}'.", { nativeObject: node.id.name });
            }
        }
    };

};

},{}],104:[function(require,module,exports){
/**
 * @fileoverview A rule to disallow negated left operands of the `in` operator
 * @author Michael Ficarra
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "BinaryExpression": function(node) {
            if (node.operator === "in" && node.left.type === "UnaryExpression" && node.left.operator === "!") {
                context.report(node, "The `in` expression's left operand is negated");
            }
        }
    };

};

},{}],105:[function(require,module,exports){
/**
 * @fileoverview Rule to flag nested ternary expressions
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "ConditionalExpression": function(node) {
            if (node.alternate.type === "ConditionalExpression" ||
                    node.consequent.type === "ConditionalExpression") {
                context.report(node, "Do not nest ternary expressions");
            }
        }
    };
};

},{}],106:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when using new Function
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "NewExpression": function(node) {
            if (node.callee.name === "Function") {
                context.report(node, "The Function constructor is eval.");
            }
        }
    };

};

},{}],107:[function(require,module,exports){
/**
 * @fileoverview A rule to disallow calls to the Object constructor
 * @author Matt DuVall <http://www.mattduvall.com/>
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "NewExpression": function(node) {
            if (node.callee.name === "Object") {
                context.report(node, "The object literal notation {} is preferrable.");
            }
        }
    };

};

},{}],108:[function(require,module,exports){
/**
 * @fileoverview Rule to disallow use of new operator with the `require` function
 * @author Wil Moore III
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "NewExpression": function(node) {
            if (node.callee.type === "Identifier" && node.callee.name === "require") {
                context.report(node, "Unexpected use of new with require.");
            }
        }
    };

};

},{}],109:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when using constructor for wrapper objects
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "NewExpression": function(node) {
            var wrapperObjects = ["String", "Number", "Boolean", "Math", "JSON"];
            if (wrapperObjects.indexOf(node.callee.name) > -1) {
                context.report(node, "Do not use {{fn}} as a constructor.", { fn: node.callee.name });
            }
        }
    };

};

},{}],110:[function(require,module,exports){
/**
 * @fileoverview Rule to flag statements with function invocation preceded by
 * "new" and not part of assignment
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "ExpressionStatement": function(node) {

            if (node.expression.type === "NewExpression") {
                context.report(node, "Do not use 'new' for side effects.");
            }
        }
    };

};

},{}],111:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of an object property of the global object (Math and JSON) as a function
 * @author James Allardice
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "CallExpression": function(node) {

            if (node.callee.type === "Identifier") {
                var name = node.callee.name;
                if (name === "Math" || name === "JSON") {
                    context.report(node, "'{{name}}' is not a function.", { name: name });
                }
            }
        }
    };

};

},{}],112:[function(require,module,exports){
/**
 * @fileoverview Rule to flag octal escape sequences in string literals.
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "Literal": function(node) {
            if (typeof node.value !== "string") {
                return;
            }
            var match = node.raw.match(/^([^\\]|\\[^0-7])*\\([0-7])/),
                octalDigit;

            if (match) {
                octalDigit = match[2];
                context.report(node, "Don't use octal: '\\{{octalDigit}}'. Use '\\u....' instead.",
                        { octalDigit: octalDigit });
            }
        }

    };

};

},{}],113:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when initializing octal literal
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "Literal": function(node) {
            if (typeof node.value === "number" && /^0[0-7]/.test(node.raw)) {
                context.report(node, "Octal literals should not be used.");
            }
        }
    };

};

},{}],114:[function(require,module,exports){
/**
 * @fileoverview Disallow string concatenation when using __dirname and __filename
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var MATCHER = /^__(?:dir|file)name$/;

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "BinaryExpression": function(node) {

            var left = node.left,
                right = node.right;

            if (node.operator === "+" &&
                    ((left.type === "Identifier" && MATCHER.test(left.name)) ||
                    (right.type === "Identifier" && MATCHER.test(right.name)))
            ) {

                context.report(node, "Use path.join() or path.resolve() instead of + to create paths.");
            }
        }

    };

};

},{}],115:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of unary increment and decrement operators.
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "UpdateExpression": function(node) {
            context.report(node, "Unary operator '" + node.operator + "' used.");
        }

    };

};

},{}],116:[function(require,module,exports){
/**
 * @fileoverview Disallow the use of process.env()
 * @author Vignesh Anand
 * @copyright 2014 Vignesh Anand. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "MemberExpression": function(node) {
            var objectName = node.object.name,
                propertyName = node.property.name;

            if (objectName === "process" && !node.computed && propertyName && propertyName === "env") {
                context.report(node, "Unexpected use of process.env.");
            }

        }

    };

};

},{}],117:[function(require,module,exports){
/**
 * @fileoverview Disallow the use of process.exit()
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "CallExpression": function(node) {
            var callee = node.callee;

            if (callee.type === "MemberExpression" && callee.object.name === "process" &&
                callee.property.name === "exit"
            ) {
                context.report(node, "Don't use process.exit(); throw an error instead.");
            }
        }

    };

};

},{}],118:[function(require,module,exports){
/**
 * @fileoverview Rule to flag usage of __proto__ property
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "MemberExpression": function(node) {

            if (node.property &&
                    (node.property.type === "Identifier" && node.property.name === "__proto__" && !node.computed) ||
                    (node.property.type === "Literal" && node.property.value === "__proto__")) {
                context.report(node, "The '__proto__' property is deprecated.");
            }
        }
    };

};

},{}],119:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when the same variable is declared more then once.
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    function findVariables() {
        var scope = context.getScope();

        scope.variables.forEach(function(variable) {
            if (variable.identifiers && variable.identifiers.length > 1) {
                variable.identifiers.sort(function(a, b) {
                    return a.range[1] - b.range[1];
                });

                for (var i = 1, l = variable.identifiers.length; i < l; i++) {
                    context.report(variable.identifiers[i], "{{a}} is already defined", {a: variable.name});
                }
            }
        });
    }

    return {
        "Program": findVariables,
        "FunctionExpression": findVariables,
        "FunctionDeclaration": findVariables
    };
};

},{}],120:[function(require,module,exports){
/**
 * @fileoverview Rule to count multiple spaces in regular expressions
 * @author Matt DuVall <http://www.mattduvall.com/>
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "Literal": function(node) {
            var token = context.getFirstToken(node),
                nodeType = token.type,
                nodeValue = token.value,
                multipleSpacesRegex = /( {2,})+?/,
                regexResults;

            if (nodeType === "RegularExpression") {
                regexResults = multipleSpacesRegex.exec(nodeValue);

                if (regexResults !== null) {
                    context.report(node, "Spaces are hard to count. Use {" + regexResults[0].length + "}.");
                }
            }
        }
    };

};

},{}],121:[function(require,module,exports){
/**
 * @fileoverview Rule to disallow reserved words being used as keys
 * @author Emil Bay
 * @copyright 2014 Emil Bay. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var MESSAGE = "Reserved word '{{key}}' used as key.";

    var reservedWords = [
        "abstract",
        "boolean", "break", "byte",
        "case", "catch", "char", "class", "const", "continue",
        "debugger", "default", "delete", "do", "double",
        "else", "enum", "export", "extends",
        "final", "finally", "float", "for", "function",
        "goto",
        "if", "implements", "import", "in", "instanceof", "int", "interface",
        "long",
        "native", "new",
        "package", "private", "protected", "public",
        "return",
        "short", "static", "super", "switch", "synchronized",
        "this", "throw", "throws", "transient", "try", "typeof",
        "var", "void", "volatile",
        "while", "with"
    ];

    return {

        "ObjectExpression": function(node) {
            node.properties.forEach(function(property) {

                if (property.key.type === "Identifier") {
                    var keyName = property.key.name;

                    if (reservedWords.indexOf("" + keyName) !== -1) {
                        context.report(node, MESSAGE, { key: keyName });
                    }
                }

            });

        }
    };

};

},{}],122:[function(require,module,exports){
/**
 * @fileoverview Restrict usage of specified node modules.
 * @author Christian Schulz
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    // trim restricted module names
    var restrictedModules = context.options;

    // if no modules are restricted we don't need to check the CallExpressions
    if (restrictedModules.length === 0) {
        return {};
    }

    /**
     * Function to check if a node is a string literal.
     * @param {ASTNode} node The node to check.
     * @returns {boolean} If the node is a string literal.
     */
    function isString(node) {
        return node && node.type === "Literal" && typeof node.value === "string";
    }

    /**
     * Function to check if a node is a require call.
     * @param {ASTNode} node The node to check.
     * @returns {boolean} If the node is a require call.
     */
    function isRequireCall(node) {
        return node.callee.type === "Identifier" && node.callee.name === "require";
    }

    /**
     * Function to check if a node has an argument that is an restricted module and return its name.
     * @param {ASTNode} node The node to check
     * @returns {undefined|String} restricted module name or undefined if node argument isn't restricted.
     */
    function getRestrictedModuleName(node) {
        var moduleName;

        // node has arguments and first argument is string
        if (node.arguments.length && isString(node.arguments[0])) {
            var argumentValue = node.arguments[0].value.trim();

            // check if argument value is in restricted modules array
            if (restrictedModules.indexOf(argumentValue) !== -1) {
                moduleName = argumentValue;
            }
        }

        return moduleName;
    }

    return {
        "CallExpression": function (node) {
            if (isRequireCall(node)) {
                var restrictedModuleName = getRestrictedModuleName(node);

                if (restrictedModuleName) {
                    context.report(node, "'{{moduleName}}' module is restricted from being used.", {
                        moduleName: restrictedModuleName
                    });
                }
            }
        }
    };
};

},{}],123:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when return statement contains assignment
 * @author Ilya Volodin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "ReturnStatement": function(node) {
            if (node.argument && node.argument.type === "AssignmentExpression") {
                context.report(node, "Return statement should not contain assignment.");
            }
        }
    };

};

},{}],124:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when using javascript: urls
 * @author Ilya Volodin
 */
/*jshint scripturl: true */
/*eslint no-script-url: 0*/

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "Literal": function(node) {

            var value;

            if (node.value && typeof node.value === "string") {
                value = node.value.toLowerCase();

                if (value.indexOf("javascript:") === 0) {
                    context.report(node, "Script URL is a form of eval.");
                }
            }
        }
    };

};

},{}],125:[function(require,module,exports){
/**
 * @fileoverview Rule to flag comparison where left part is the same as the right
 * part.
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    "use strict";

    return {

        "BinaryExpression": function(node) {
            var operators = ["===", "==", "!==", "!=", ">", "<", ">=", "<="];
            if (operators.indexOf(node.operator) > -1 &&
                (node.left.type === "Identifier" && node.right.type === "Identifier" && node.left.name === node.right.name ||
                node.left.type === "Literal" && node.right.type === "Literal" && node.left.value === node.right.value)) {
                context.report(node, "Comparing to itself is potentially pointless.");
            }
        }
    };

};

},{}],126:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of comma operator
 * @author Brandon Mills
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    /**
     * Parts of the grammar that are required to have parens.
     */
    var parenthesized = {
        "DoWhileStatement": "test",
        "IfStatement": "test",
        "SwitchStatement": "discriminant",
        "WhileStatement": "test",
        "WithStatement": "object"

        // Omitting CallExpression - commas are parsed as argument separators
        // Omitting NewExpression - commas are parsed as argument separators
        // Omitting ForInStatement - parts aren't individually parenthesised
        // Omitting ForStatement - parts aren't individually parenthesised
    };

    /**
     * Determines whether a node is required by the grammar to be wrapped in
     * parens, e.g. the test of an if statement.
     * @param {ASTNode} node - The AST node
     * @returns {boolean} True if parens around node belong to parent node.
     */
    function requiresExtraParens(node) {
        return node.parent && parenthesized[node.parent.type] != null &&
                node === node.parent[parenthesized[node.parent.type]];
    }

    /**
     * Check if a node is wrapped in parens.
     * @param {ASTNode} node - The AST node
     * @returns {boolean} True if the node has a paren on each side.
     */
    function isParenthesised(node) {
        var previousToken = context.getTokenBefore(node),
            nextToken = context.getTokenAfter(node);

        return previousToken && nextToken &&
            previousToken.value === "(" && previousToken.range[1] <= node.range[0] &&
            nextToken.value === ")" && nextToken.range[0] >= node.range[1];
    }

    /**
     * Check if a node is wrapped in two levels of parens.
     * @param {ASTNode} node - The AST node
     * @returns {boolean} True if two parens surround the node on each side.
     */
    function isParenthesisedTwice(node) {
        var previousToken = context.getTokenBefore(node, 1),
            nextToken = context.getTokenAfter(node, 1);

        return isParenthesised(node) && previousToken && nextToken &&
            previousToken.value === "(" && previousToken.range[1] <= node.range[0] &&
            nextToken.value === ")" && nextToken.range[0] >= node.range[1];
    }

    return {
        "SequenceExpression": function(node) {
            // Always allow sequences in for statement update
            if (node.parent.type === "ForStatement" &&
                    (node === node.parent.init || node === node.parent.update)) {
                return;
            }

            // Wrapping a sequence in extra parens indicates intent
            if (requiresExtraParens(node)) {
                if (isParenthesisedTwice(node)) {
                    return;
                }
            } else {
                if (isParenthesised(node)) {
                    return;
                }
            }

            context.report(node, "Unexpected use of comma operator.");
        }
    };

};

},{}],127:[function(require,module,exports){
/**
 * @fileoverview Disallow shadowing of NaN, undefined, and Infinity (ES5 section 15.1.1)
 * @author Michael Ficarra
 * @copyright 2013 Michael Ficarra. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var RESTRICTED = ["undefined", "NaN", "Infinity", "arguments", "eval"];

    function checkForViolation(id) {
        if (RESTRICTED.indexOf(id.name) > -1) {
            context.report(id, "Shadowing of global property \"" + id.name + "\".");
        }
    }

    return {
        "VariableDeclarator": function(node) {
            checkForViolation(node.id);
        },
        "ArrowFunctionExpression": function(node) {
            if (node.id) {
                checkForViolation(node.id);
            }
            [].map.call(node.params, checkForViolation);
        },
        "FunctionExpression": function(node) {
            if (node.id) {
                checkForViolation(node.id);
            }
            [].map.call(node.params, checkForViolation);
        },
        "FunctionDeclaration": function(node) {
            checkForViolation(node.id);
            [].map.call(node.params, checkForViolation);
        },
        "CatchClause": function(node) {
            checkForViolation(node.param);
        }
    };

};

},{}],128:[function(require,module,exports){
/**
 * @fileoverview Rule to flag on declaring variables already declared in the outer scope
 * @author Ilya Volodin
 * @copyright 2013 Ilya Volodin. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    /**
     * Checks if a variable is contained in the list of given scope variables.
     * @param {Object} variable The variable to check.
     * @param {Array} scopeVars The scope variables to look for.
     * @returns {boolean} Whether or not the variable is contains in the list of scope variables.
     */
    function isContainedInScopeVars(variable, scopeVars) {
        return scopeVars.some(function (scopeVar) {
            if (scopeVar.identifiers.length > 0) {
                return variable.name === scopeVar.name;
            }
            return false;
        });
    }

    /**
     * Checks if the given variables are shadowed in the given scope.
     * @param {Array} variables The variables to look for
     * @param {Object} scope The scope to be checked.
     * @returns {void}
     */
    function checkShadowsInScope(variables, scope) {
        variables.forEach(function (variable) {
            if (isContainedInScopeVars(variable, scope.variables)) {
                context.report(variable.identifiers[0], "{{a}} is already declared in the upper scope.", {a: variable.name});
            }
        });
    }

    /**
     * Filters all variables of a list which already occur in another list.
     * @param {Array} variableListA List of variables which should be filtered.
     * @param {Array} variableListB List of variables which should no occur in variableListA.
     * @returns {Array} Filtered list of variables.
     */
    function filterVariableList(variableListA, variableListB) {
        return variableListA.filter(function (variableA) {
            return !variableListB.some(function (variableB) {
                return variableA.name === variableB.name;
            });
        });
    }

    /**
     * Checks the given node for shadowed variables.
     * @param {ASTNode} node The AST node of a FunctionDeclaration or FunctionExpression.
     * @returns {void}
     */
    function checkForShadows(node) {
        var scope = context.getScope(),
            args = node.params,
            variables = filterVariableList(scope.variables, args);

        // iterate through the array of variables and find duplicates with the upper scope
        var upper = scope.upper;
        while (upper) {
            checkShadowsInScope(variables, upper);
            upper = upper.upper;
        }
    }

    return {
        "FunctionDeclaration": checkForShadows,
        "FunctionExpression": checkForShadows
    };

};

},{}],129:[function(require,module,exports){
/**
 * @fileoverview Rule to require variables declared without whitespace before the lines semicolon
 * @author Jonathan Kingston
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var semicolonWhitespace = /\s;$/;

    return {
        "VariableDeclaration": function(node) {
            var source = context.getSource(node);
            if (semicolonWhitespace.test(source)) {
                context.report(node, "Variable declared with trailing whitespace before semicolon");
            }
        },
        "ExpressionStatement": function(node) {
            var source = context.getSource(node);
            if (semicolonWhitespace.test(source)) {
                context.report(node, "Expression called with trailing whitespace before semicolon");
            }
        }
    };
};

},{}],130:[function(require,module,exports){
/**
 * @fileoverview Rule to check that spaced function application
 * @author Matt DuVall <http://www.mattduvall.com>
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    function detectOpenSpaces(node) {
        var lastCalleeToken = context.getLastToken(node.callee);
        var tokens = context.getTokens(node);
        var i = tokens.indexOf(lastCalleeToken), l = tokens.length;
        while (i < l && tokens[i].value !== "(") {
            ++i;
        }
        if (i >= l) {
            return;
        }
        // look for a space between the callee and the open paren
        if (tokens[i - 1].range[1] !== tokens[i].range[0]) {
            context.report(node, "Unexpected space between function name and paren.");
        }
    }

    return {
        "CallExpression": detectOpenSpaces,
        "NewExpression": detectOpenSpaces
    };

};

},{}],131:[function(require,module,exports){
/**
 * @fileoverview Disallow sparse arrays
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {


    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "ArrayExpression": function(node) {

            var emptySpot = node.elements.indexOf(null) > -1;

            if (emptySpot) {
                context.report(node, "Unexpected comma in middle of array.");
            }
        }

    };

};

},{}],132:[function(require,module,exports){
/**
 * @fileoverview Rule to check for properties whose identifier ends with the string Sync
 * @author Matt DuVall<http://mattduvall.com/>
 */

/*jshint node:true*/

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "MemberExpression": function(node) {
            var propertyName = node.property.name,
                syncRegex = /.*Sync$/;

            if (syncRegex.exec(propertyName) !== null) {
                context.report(node, "Unexpected sync method: '" + propertyName + "'.");
            }
        }
    };

};

},{}],133:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of ternary operators.
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "ConditionalExpression": function(node) {
            context.report(node, "Ternary operator used.");
        }

    };

};

},{}],134:[function(require,module,exports){
/**
 * @fileoverview Disallow trailing spaces at the end of lines.
 * @author Nodeca Team <https://github.com/nodeca>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var TRAILER = "[ \t\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]+$";

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "Program": function checkTrailingSpaces(node) {

            // Let's hack. Since Esprima does not return whitespace nodes,
            // fetch the source code and do black magic via regexps.

            var src = context.getSource(),
                re = new RegExp(TRAILER, "mg"),
                match, lines, location;

            while ((match = re.exec(src)) !== null) {
                lines = src.slice(0, re.lastIndex).split(/\r?\n/g);

                location = {
                    line: lines.length,
                    column: lines[lines.length - 1].length - match[0].length + 1
                };

                // Passing node is a bit dirty, because message data will contain
                // big text in `source`. But... who cares :) ?
                // One more kludge will not make worse the bloody wizardry of this plugin.
                context.report(node, location, "Trailing spaces not allowed.");
            }
        }

    };
};

},{}],135:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when initializing to undefined
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "VariableDeclarator": function(node) {
            var name = node.id.name;
            var init = node.init && node.init.name;

            if (init === "undefined") {
                context.report(node, "It's not necessary to initialize '{{name}}' to undefined.", { name: name });
            }
        }
    };

};

},{}],136:[function(require,module,exports){
/**
 * @fileoverview Rule to flag references to undeclared variables.
 * @author Mark Macdonald
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

function isImplicitGlobal(variable) {
    return variable.defs.every(function(def) {
        return def.type === "ImplicitGlobalVariable";
    });
}

/**
 * Gets the declared variable, defined in `scope`, that `ref` refers to.
 * @param {Scope} scope The scope in which to search.
 * @param {Reference} ref The reference to find in the scope.
 * @returns {Variable} The variable, or null if ref refers to an undeclared variable.
 */
function getDeclaredGlobalVariable(scope, ref) {
    var declaredGlobal = null;
    scope.variables.some(function(variable) {
        if (variable.name === ref.identifier.name) {
            // If it's an implicit global, it must have a `writeable` field (indicating it was declared)
            if (!isImplicitGlobal(variable) || {}.hasOwnProperty.call(variable, "writeable")) {
                declaredGlobal = variable;
                return true;
            }
        }
        return false;
    });
    return declaredGlobal;
}

/**
 * Checks if the given node is the argument of a typeof operator.
 * @param {ASTNode} node The AST node being checked.
 * @returns {boolean} Whether or not the node is the argument of a typeof operator.
 */
function hasTypeOfOperator(node) {
    var parent = node.parent;
    return parent.type === "UnaryExpression" && parent.operator === "typeof";
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "Program:exit": function(/*node*/) {

            var globalScope = context.getScope();

            globalScope.through.forEach(function(ref) {
                var variable = getDeclaredGlobalVariable(globalScope, ref),
                    name = ref.identifier.name;

                if (hasTypeOfOperator(ref.identifier)) {
                    return;
                }

                if (!variable) {
                    context.report(ref.identifier, "'{{name}}' is not defined.", { name: name });
                } else if (ref.isWrite() && variable.writeable === false) {
                    context.report(ref.identifier, "'{{name}}' is read only.", { name: name });
                }
            });
        }
    };

};

},{}],137:[function(require,module,exports){
/**
 * @fileoverview Rule to flag references to the undefined variable.
 * @author Michael Ficarra
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "Identifier": function(node) {
            if (node.name === "undefined") {
                var parent = context.getAncestors().pop();
                if (!parent || parent.type !== "MemberExpression" || node !== parent.property || parent.computed) {
                    context.report(node, "Unexpected use of undefined.");
                }
            }
        }
    };

};

},{}],138:[function(require,module,exports){
/**
 * @fileoverview Rule to flag trailing underscores in variable declarations.
 * @author Matt DuVall <http://www.mattduvall.com>
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //-------------------------------------------------------------------------
    // Helpers
    //-------------------------------------------------------------------------

    function hasTrailingUnderscore(identifier) {
        var len = identifier.length;

        return identifier !== "_" && (identifier[0] === "_" || identifier[len - 1] === "_");
    }

    function isSpecialCaseIdentifierForMemberExpression(identifier) {
        return identifier === "__proto__";
    }

    function isSpecialCaseIdentifierInVariableExpression(identifier) {
        // Checks for the underscore library usage here
        return identifier === "_";
    }

    function checkForTrailingUnderscoreInFunctionDeclaration(node) {
        var identifier = node.id.name;

        if (typeof identifier !== "undefined" && hasTrailingUnderscore(identifier)) {
            context.report(node, "Unexpected dangling '_' in '" + identifier + "'.");
        }
    }

    function checkForTrailingUnderscoreInVariableExpression(node) {
        var identifier = node.id.name;

        if (typeof identifier !== "undefined" && hasTrailingUnderscore(identifier) &&
            !isSpecialCaseIdentifierInVariableExpression(identifier)) {
            context.report(node, "Unexpected dangling '_' in '" + identifier + "'.");
        }
    }

    function checkForTrailingUnderscoreInMemberExpression(node) {
        var identifier = node.property.name;

        if (typeof identifier !== "undefined" && hasTrailingUnderscore(identifier) &&
            !isSpecialCaseIdentifierForMemberExpression(identifier)) {
            context.report(node, "Unexpected dangling '_' in '" + identifier + "'.");
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "FunctionDeclaration": checkForTrailingUnderscoreInFunctionDeclaration,
        "VariableDeclarator": checkForTrailingUnderscoreInVariableExpression,
        "MemberExpression": checkForTrailingUnderscoreInMemberExpression
    };

};

},{}],139:[function(require,module,exports){
/**
 * @fileoverview Checks for unreachable code due to return, throws, break, and continue.
 * @author Joel Feenstra
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------


function report(context, node, unreachableType) {
    var keyword;
    switch (unreachableType) {
        case "BreakStatement":
            keyword = "break";
            break;
        case "ContinueStatement":
            keyword = "continue";
            break;
        case "ReturnStatement":
            keyword = "return";
            break;
        case "ThrowStatement":
            keyword = "throw";
            break;
        default:
            return;
    }
    context.report(node, "Found unexpected statement after a {{type}}.", { type: keyword });
}


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    /**
     * Checks if a node is an exception for no-unreachable because of variable/function hoisting
     * @param {ASTNode} node The AST node to check.
     * @returns {boolean} if the node doesn't trigger unreachable
     * @private
     */
    function isUnreachableAllowed(node) {
        return node.type === "FunctionDeclaration" ||
            node.type === "VariableDeclaration" &&
            node.declarations.every(function(declaration) {
                return declaration.type === "VariableDeclarator" && declaration.init === null;
            });
    }

    /*
     * Verifies that the given node is the last node or followed exclusively by
     * hoisted declarations
     * @param {ASTNode} node Node that should be the last node
     * @returns {void}
     * @private
     */
    function checkNode(node) {
        var parent = context.getAncestors().pop();
        var field, i, sibling;

        switch (parent.type) {
            case "SwitchCase":
                field = "consequent";
                break;
            case "Program":
            case "BlockStatement":
                field = "body";
                break;
            default:
                return;
        }

        for (i = parent[field].length - 1; i >= 0; i--) {
            sibling = parent[field][i];
            if (sibling === node) {
                return; // Found the last reachable statement, all done
            }

            if (!isUnreachableAllowed(sibling)) {
                report(context, sibling, node.type);
            }
        }
    }

    return {
        "ReturnStatement": checkNode,
        "ThrowStatement": checkNode,
        "ContinueStatement": checkNode,
        "BreakStatement": checkNode
    };

};

},{}],140:[function(require,module,exports){
/**
 * @fileoverview Flag expressions in statement position that do not side effect
 * @author Michael Ficarra
 * @copyright 2013 Michael Ficarra. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    /**
     * @param {ASTNode} node - any node
     * @returns {Boolean} whether the given node structurally represents a directive
     */
    function looksLikeDirective(node) {
       return node.type === "ExpressionStatement" &&
           node.expression.type === "Literal" && typeof node.expression.value === "string";
    }

    /**
     * @param {Function} predicate - ([a] -> Boolean) the function used to make the determination
     * @param {a[]} list - the input list
     * @returns {a[]} the leading sequence of members in the given list that pass the given predicate
     */
    function takeWhile(predicate, list) {
        for (var i = 0, l = list.length; i < l; ++i) {
            if (!predicate(list[i])) {
                break;
            }
        }
        return [].slice.call(list, 0, i);
    }

    /**
     * @param {ASTNode} node - a Program or BlockStatement node
     * @returns {ASTNode[]} the leading sequence of directive nodes in the given node's body
     */
    function directives(node) {
        return takeWhile(looksLikeDirective, node.body);
    }

    /**
     * @param {ASTNode} node - any node
     * @param {ASTNode[]} ancestors - the given node's ancestors
     * @returns {Boolean} whether the given node is considered a directive in its current position
     */
    function isDirective(node, ancestors) {
        var parent = ancestors[ancestors.length - 1],
            grandparent = ancestors[ancestors.length - 2];
        return (parent.type === "Program" || parent.type === "BlockStatement" &&
                (/Function/.test(grandparent.type))) &&
                directives(parent).indexOf(node) >= 0;
    }

    return {
        "ExpressionStatement": function(node) {

            var type = node.expression.type,
                ancestors = context.getAncestors();

            if (
                !/^(?:Assignment|Call|New|Update)Expression$/.test(type) &&
                (type !== "UnaryExpression" || ["delete", "void"].indexOf(node.expression.operator) < 0) &&
                !isDirective(node, ancestors)
            ) {
                context.report(node, "Expected an assignment or function call and instead saw an expression.");
            }
        }
    };

};

},{}],141:[function(require,module,exports){
/**
 * @fileoverview Rule to flag declared but unused variables
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var config = {
        vars: "all",
        args: "after-used"
    };

    if (context.options[0]) {
        if (typeof context.options[0] === "string") {
            config.vars = context.options[0];
        } else {
            config.vars = context.options[0].vars || config.vars;
            config.args = context.options[0].args || config.args;
        }
    }

    var MESSAGE = "{{name}} is defined but never used";

    /**
     * @param {Reference} ref - an escope Reference
     * @returns {Boolean} whether the given reference represents a read operation
     */
    function isReadRef(ref) {
        return ref.isRead();
    }

    /**
     * @param {Scope} scope - an escope Scope object
     * @returns {Variable[]} most of the local variables with no read references
     */
    function unusedLocals(scope) {
        var unused = [];
        var variables = scope.variables;
        if (scope.type !== "global") {
            for (var i = 0, l = variables.length; i < l; ++i) {

                // skip function expression names
                if (scope.functionExpressionScope || variables[i].eslintJSXUsed) {
                    continue;
                }
                // skip implicit "arguments" variable
                if (scope.type === "function" && variables[i].name === "arguments" && variables[i].identifiers.length === 0) {
                    continue;
                }
                var type = variables[i].defs[0].type;
                // skip catch variables
                if (type === "CatchClause") {
                    continue;
                }
                // if "args" option is "none", skip any parameter
                if (config.args === "none" && type === "Parameter") {
                    continue;
                }
                // if "args" option is "after-used", skip all but the last parameter
                if (config.args === "after-used" && type === "Parameter" && variables[i].defs[0].index < variables[i].defs[0].node.params.length - 1) {
                    continue;
                }
                if (variables[i].references.filter(isReadRef).length === 0) {
                    unused.push(variables[i]);
                }
            }
        }
        return [].concat.apply(unused, [].map.call(scope.childScopes, unusedLocals));
    }

    return {
        "Program:exit": function(programNode) {
            var globalScope = context.getScope();
            var unused = unusedLocals(globalScope);
            var i, l;

            // determine unused globals
            if (config.vars === "all") {
                var unresolvedRefs = globalScope.through.filter(isReadRef).map(function(ref) {
                    return ref.identifier.name;
                });
                for (i = 0, l = globalScope.variables.length; i < l; ++i) {
                    if (unresolvedRefs.indexOf(globalScope.variables[i].name) < 0) {
                        unused.push(globalScope.variables[i]);
                    }
                }
            }

            for (i = 0, l = unused.length; i < l; ++i) {
                if (unused[i].eslintExplicitGlobal) {
                    context.report(programNode, MESSAGE, unused[i]);
                } else if (unused[i].defs.length > 0) {
                    context.report(unused[i].identifiers[0], MESSAGE, unused[i]);
                }
            }
        },

        "XJSIdentifier": function(node) {
            var scope = context.getScope(),
                variables = scope.variables,
                i,
                len;

            // mark XJSIdentifiers with a special flag
            for (i = 0, len = variables.length; i < len; i++) {
                if (variables[i].name === node.name) {
                    variables[i].eslintJSXUsed = true;
                    break;
                }
            }
        }
    };

};

},{}],142:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of variables before they are defined
 * @author Ilya Volodin
 * @copyright 2013 Ilya Volodin. All rights reserved.
 */

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

var NO_FUNC = "nofunc";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    function findDeclaration(name, scope) {
        // try searching in the current scope first
        for (var i = 0, l = scope.variables.length; i < l; i++) {
            if (scope.variables[i].name === name) {
                return scope.variables[i];
            }
        }
        // check if there's upper scope and call recursivly till we find the variable
        if (scope.upper) {
            return findDeclaration(name, scope.upper);
        }
    }

    function findVariables() {
        var scope = context.getScope();
        var typeOption = context.options[0];

        function checkLocationAndReport(reference, declaration) {
            if (typeOption !== NO_FUNC || declaration.defs[0].type !== "FunctionName") {
                if (declaration.identifiers[0].range[1] > reference.identifier.range[1]) {
                    context.report(reference.identifier, "{{a}} was used before it was defined", {a: reference.identifier.name});
                }
            }
        }

        scope.references.forEach(function(reference) {
            // if the reference is resolved check for declaration location
            // if not, it could be function invocation, try to find manually
            if (reference.resolved && reference.resolved.identifiers.length > 0) {
                checkLocationAndReport(reference, reference.resolved);
            } else {
                var declaration = findDeclaration(reference.identifier.name, scope);
                // if there're no identifiers, this is a global environment variable
                if (declaration && declaration.identifiers.length !== 0) {
                    checkLocationAndReport(reference, declaration);
                }
            }
        });
    }

    return {
        "Program": findVariables,
        "FunctionExpression": findVariables,
        "FunctionDeclaration": findVariables
    };
};

},{}],143:[function(require,module,exports){
/**
 * @fileoverview Rule to disallow use of void operator.
 * @author Mike Sidorov
 * @copyright 2014 Mike Sidorov. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        "UnaryExpression": function(node) {
            if (node.operator === "void") {
                context.report(node, "Expected 'undefined' and instead saw 'void'.");
            }
        }
    };

};

},{}],144:[function(require,module,exports){
/**
 * @fileoverview Rule that warns about used warning comments
 * @author Alexander Schmidt <https://github.com/lxanders>
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    "use strict";

    var configuration = context.options[0] || {},
        warningTerms = configuration.terms || ["todo", "fixme", "xxx"],
        location = configuration.location || "start";

    /**
     * Prepares a specified comment for being checked.
     * @param {String} comment The comment to prepare.
     * @returns {String} The specified comment prepared for being checked.
     */
    function prepareCommentForChecking(comment) {
        var commentToCheck;

        commentToCheck = comment.toLowerCase();
        commentToCheck = commentToCheck.trim();

        return commentToCheck;
    }

    /**
     * Checks if the specified comment starts with a specified term.
     * @param {String} commentToCheck The comment to check.
     * @param {String} lowerCaseTerm The term to search for.
     * @returns {Boolean} True if the comment started with the specified term, else false.
     */
    function commentStartsWithTerm(commentToCheck, lowerCaseTerm) {
        return commentToCheck.indexOf(lowerCaseTerm) === 0;
    }

    /**
     * Checks if the specified comment contains a specified term at any location.
     * @param {String} commentToCheck The comment to check.
     * @param {String} lowerCaseTerm The term to search for.
     * @returns {Boolean} True if the term was contained in the comment, else false.
     */
    function commentContainsTerm(commentToCheck, lowerCaseTerm) {
        return commentToCheck.indexOf(lowerCaseTerm) !== -1;
    }


    /**
     * Checks the specified comment for matches of the configured warning terms and returns the matches.
     * @param {String} comment The comment which is checked.
     * @returns {Array} All matched warning terms for this comment.
     */
    function commentContainsWarningTerm(comment) {
        var matches = [];

        warningTerms.forEach(function (term) {
            var lowerCaseTerm = term.toLowerCase(),
                commentToCheck = prepareCommentForChecking(comment);

            if (location === "start") {
                if (commentStartsWithTerm(commentToCheck, lowerCaseTerm)) {
                    matches.push(term);
                }
            } else if (location === "anywhere") {
                if (commentContainsTerm(commentToCheck, lowerCaseTerm)) {
                    matches.push(term);
                }
            }
        });

        return matches;
    }

    /**
     * Checks the specified node for matching warning comments and reports them.
     * @param {ASTNode} node The AST node being checked.
     * @returns {void} undefined.
     */
    function checkComment(node) {
        var matches = commentContainsWarningTerm(node.value);

        matches.forEach(function (matchedTerm) {
            context.report(node, "Unexpected " + matchedTerm + " comment.");
        });
    }

    return {
        "BlockComment": checkComment,
        "LineComment": checkComment
    };
};

},{}],145:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of with statement
 * @author Nicholas C. Zakas
 */


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "WithStatement": function(node) {
            context.report(node, "Unexpected use of 'with' statement.");
        }
    };

};

},{}],146:[function(require,module,exports){
/**
 * @fileoverview Rule to flag wrapping non-iife in parens
 * @author Ilya Volodin
 * @copyright 2013 Ilya Volodin. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";


    /**
     * Checks a function expression to see if its surrounded by parens.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     * @private
     */
    function checkFunction(node) {
        var ancestors = context.getAncestors(),
            previousToken, nextToken;

        if (!/CallExpression|NewExpression/.test(ancestors.pop().type)) {
            previousToken = context.getTokenBefore(node);
            nextToken = context.getTokenAfter(node);
            if (previousToken.value === "(" && nextToken.value === ")") {
                context.report(node, "Wrapping non-IIFE function literals in parens is unnecessary.");
            }
        }
    }

    return {
        "ArrowFunctionExpression": checkFunction,
        "FunctionExpression": checkFunction
    };

};

},{}],147:[function(require,module,exports){
/**
 * @fileoverview A rule to ensure the use of a single variable declaration.
 * @author Ian Christian Myers
 * @copyright 2013 Ian Christian Myers. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    var functionStack = [];

    function startFunction() {
        functionStack.push(false);
    }

    function endFunction() {
        functionStack.pop();
    }

    function checkDeclarations(node) {
        if (functionStack[functionStack.length - 1]) {
            context.report(node, "Combine this with the previous 'var' statement.");
        } else {
            functionStack[functionStack.length - 1] = true;
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "Program": startFunction,
        "FunctionDeclaration": startFunction,
        "FunctionExpression": startFunction,
        "ArrowFunctionExpression": startFunction,

        "VariableDeclaration": checkDeclarations,

        "Program:exit": endFunction,
        "FunctionDeclaration:exit": endFunction,
        "FunctionExpression:exit": endFunction,
        "ArrowFunctionExpression:exit": endFunction
    };

};

},{}],148:[function(require,module,exports){
/**
 * @fileoverview Rule to replace assignment expressions with operator assignment
 * @author Brandon Mills
 * @copyright 2014 Brandon Mills. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether an operator is commutative and has an operator assignment
 * shorthand form.
 * @param   {string}  operator Operator to check.
 * @returns {boolean}          True if the operator is commutative and has a
 *     shorthand form.
 */
function isCommutativeOperatorWithShorthand(operator) {
    return ["+", "*", "&", "^", "|"].indexOf(operator) >= 0;
}

/**
 * Checks whether an operator is not commuatative and has an operator assignment
 * shorthand form.
 * @param   {string}  operator Operator to check.
 * @returns {boolean}          True if the operator is not commuatative and has
 *     a shorthand form.
 */
function isNonCommutativeOperatorWithShorthand(operator) {
    return ["-", "/", "%", "<<", ">>", ">>>"].indexOf(operator) >= 0;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Checks whether two expressions reference the same value. For example:
 *     a = a
 *     a.b = a.b
 *     a[0] = a[0]
 *     a['b'] = a['b']
 * @param   {ASTNode} a Left side of the comparison.
 * @param   {ASTNode} b Right side of the comparison.
 * @returns {boolean}   True if both sides match and reference the same value.
 */
function same(a, b) {
    if (a.type !== b.type) {
        return false;
    }

    switch (a.type) {
        case "Identifier":
            return a.name === b.name;
        case "Literal":
            return a.value === b.value;
        case "MemberExpression":
            // x[0] = x[0]
            // x[y] = x[y]
            // x.y = x.y
            return same(a.object, b.object) && same(a.property, b.property);
        default:
            return false;
    }
}

module.exports = function(context) {

    /**
     * Ensures that an assignment uses the shorthand form where possible.
     * @param   {ASTNode} node An AssignmentExpression node.
     * @returns {void}
     */
    function verify(node) {
        var expr, left, operator;

        if (node.operator !== "=" || node.right.type !== "BinaryExpression") {
            return;
        }

        left = node.left;
        expr = node.right;
        operator = expr.operator;

        if (isCommutativeOperatorWithShorthand(operator)) {
            if (same(left, expr.left) || same(left, expr.right)) {
                context.report(node, "Assignment can be replaced with operator assignment.");
            }
        } else if (isNonCommutativeOperatorWithShorthand(operator)) {
            if (same(left, expr.left)) {
                context.report(node, "Assignment can be replaced with operator assignment.");
            }
        }
    }

    /**
     * Warns if an assignment expression uses operator assignment shorthand.
     * @param   {ASTNode} node An AssignmentExpression node.
     * @returns {void}
     */
    function prohibit(node) {
        if (node.operator !== "=") {
            context.report(node, "Unexpected operator assignment shorthand.");
        }
    }

    return {
        "AssignmentExpression": context.options[0] !== "never" ? verify : prohibit
    };

};

},{}],149:[function(require,module,exports){
/**
 * @fileoverview A rule to ensure blank lines within blocks.
 * @author Mathias Schreck <https://github.com/lo1tuma>
 * @copyright 2014 Mathias Schreck. All rights reserved.
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    var requirePadding = context.options[0] !== "never";

    /**
     * Checks if the given non empty block node has a blank line before its first child node.
     * @param {ASTNode} node The AST node of a BlockStatement.
     * @returns {boolean} Whether or not the block starts with a blank line.
     */
    function isNonEmptyBlockTopPadded(node) {
        var blockStart = node.loc.start.line,
            first = node.body[0],
            firstLine = first.loc.start.line,
            expectedFirstLine = blockStart + 2,
            leadingComments = context.getComments(first).leading;

        if (leadingComments.length > 0) {
            firstLine = leadingComments[0].loc.start.line;
        }

        return expectedFirstLine <= firstLine;
    }

    /**
     * Checks if the given non empty block node has a blank line after its last child node.
     * @param {ASTNode} node The AST node of a BlockStatement.
     * @returns {boolean} Whether or not the block ends with a blank line.
     */
    function isNonEmptyBlockBottomPadded(node) {
        var blockEnd = node.loc.end.line,
            last = node.body[node.body.length - 1],
            lastLine = last.loc.end.line,
            expectedLastLine = blockEnd - 2,
            trailingComments = context.getComments(last).trailing;

        if (trailingComments.length > 0) {
            lastLine = trailingComments[trailingComments.length - 1].loc.end.line;
        }

        return lastLine <= expectedLastLine;
    }

    /**
     * Checks if the given non empty block node starts AND ends with a blank line.
     * @param {ASTNode} node The AST node of a BlockStatement.
     * @returns {boolean} Whether or not the block starts and ends with a blank line.
     */
    function isNonEmptyBlockPadded(node) {
        return isNonEmptyBlockTopPadded(node) && isNonEmptyBlockBottomPadded(node);
    }

    /**
     * Checks if the given non empty block node starts OR ends with a blank line.
     * @param {ASTNode} node The AST node of a BlockStatement.
     * @returns {boolean} Whether or not the block starts and ends with a blank line.
     */
    function hasNonEmptyBlockExtraPadding(node) {
        return isNonEmptyBlockTopPadded(node) || isNonEmptyBlockBottomPadded(node);
    }

    /**
     * Checks the given BlockStatement node to be padded if the block is not empty.
     * @param {ASTNode} node The AST node of a BlockStatement.
     * @returns {void} undefined.
     */
    function checkPadding(node) {
        if (node.body.length > 0) {
            if (requirePadding) {
                if (!isNonEmptyBlockPadded(node)) {
                    context.report(node, "Block must be padded by blank lines.");
                }
            } else {
                if (hasNonEmptyBlockExtraPadding(node)) {
                    context.report(node, "Block must not be padded by blank lines.");
                }
            }
        }
    }

    return {
        "BlockStatement": checkPadding
    };

};

},{}],150:[function(require,module,exports){
/**
 * @fileoverview Rule to flag non-quoted property names in object literals.
 * @author Mathias Bynens <http://mathiasbynens.be/>
 * @copyright 2014 Brandon Mills. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var esprima = require("esprima");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var MODE = context.options[0];

    /**
     * Ensures that a property's key is quoted only when necessary
     * @param   {ASTNode} node Property AST node
     * @returns {void}
     */
    function asNeeded(node) {
        var key = node.key,
            tokens;

        if (key.type === "Literal" && typeof key.value === "string") {
            try {
                tokens = esprima.tokenize(key.value);
            } catch (e) {
                return;
            }

            if (tokens.length === 1 &&
                (["Identifier", "Null", "Boolean"].indexOf(tokens[0].type) >= 0 ||
                (tokens[0].type === "Numeric" && "" + +tokens[0].value === tokens[0].value))
            ) {
                context.report(node, "Unnecessarily quoted property `{{value}}` found.", key);
            }
        }
    }

    /**
     * Ensures that a property's key is quoted
     * @param   {ASTNode} node Property AST node
     * @returns {void}
     */
    function always(node) {
        var key = node.key;

        if (!(key.type === "Literal" && typeof key.value === "string")) {
            context.report(node, "Unquoted property `{{key}}` found.", {
                key: key.name || key.value
            });
        }
    }

    return {
        "Property": MODE === "as-needed" ? asNeeded : always
    };

};

},{"esprima":22}],151:[function(require,module,exports){
/**
 * @fileoverview A rule to choose between single and double quote marks
 * @author Matt DuVall <http://www.mattduvall.com/>, Brandon Payton
 */

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

var QUOTE_SETTINGS = {
    "double": {
        quote: "\"",
        alternateQuote: "'",
        description: "doublequote"
    },
    "single": {
        quote: "'",
        alternateQuote: "\"",
        description: "singlequote"
    }
};

var AVOID_ESCAPE = "avoid-escape";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    /**
     * Validate that a string passed in is surrounded by the specified character
     * @param  {string} val The text to check.
     * @param  {string} character The character to see if it's surrounded by.
     * @returns {boolean} True if the text is surrounded by the character, false if not.
     * @private
     */
    function isSurroundedBy(val, character) {
        return val[0] === character && val[val.length - 1] === character;
    }

    /**
     * Determines if a given node is part of JSX syntax.
     * @param {ASTNode} node The node to check.
     * @returns {boolean} True if the node is a JSX node, false if not.
     * @private
     */
    function isJSXElement(node) {
        return node.type.indexOf("XJS") === 0;
    }

    return {

        "Literal": function(node) {
            var val = node.value,
                rawVal = node.raw,
                quoteOption = context.options[0],
                settings = QUOTE_SETTINGS[quoteOption],
                avoidEscape = context.options[1] === AVOID_ESCAPE,
                isValid;

            if (settings && typeof val === "string") {
                isValid = isJSXElement(node.parent) || isSurroundedBy(rawVal, settings.quote);

                if (!isValid && avoidEscape) {
                    isValid = isSurroundedBy(rawVal, settings.alternateQuote) && rawVal.indexOf(settings.quote) >= 0;
                }

                if (!isValid) {
                    context.report(node, "Strings must use " + settings.description + ".");
                }
            }
        }
    };

};

},{}],152:[function(require,module,exports){
/**
 * @fileoverview Rule to flag use of parseInt without a radix argument
 * @author James Allardice
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "CallExpression": function(node) {

            var radix;

            if (node.callee.name === "parseInt") {

                if (node.arguments.length < 2) {
                    context.report(node, "Missing radix parameter.");
                } else {

                    radix = node.arguments[1];

                    // don't allow non-numeric literals or undefined
                    if ((radix.type === "Literal" && typeof radix.value !== "number") ||
                        (radix.type === "Identifier" && radix.name === "undefined")
                    ) {
                        context.report(node, "Invalid radix parameter.");
                    }
                }

            }
        }
    };

};

},{}],153:[function(require,module,exports){
/**
 * @fileoverview Rule to flag missing semicolons.
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = function(context) {

    var OPT_OUT_PATTERN = /[\[\(\/\+\-]/;

    var always = context.options[0] !== "never";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Checks a node to see if it's followed by a semicolon.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     */
    function checkForSemicolon(node) {
        var lastToken = context.getLastToken(node),
            nextToken = context.getTokenAfter(node);

        if (always) {
            if (lastToken.type !== "Punctuator" || lastToken.value !== ";") {
                context.report(node, lastToken.loc.end, "Missing semicolon.");
            }
        } else {
            if (lastToken.type === "Punctuator" && lastToken.value === ";") {

                if (!nextToken || !(OPT_OUT_PATTERN.test(nextToken.value))) {
                    context.report(node, node.loc.end, "Extra semicolon.");
                }

            }
        }
    }

    /**
     * Checks to see if there's a semicolon after a variable declaration.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     */
    function checkForSemicolonForVariableDeclaration(node) {

        var ancestors = context.getAncestors(),
            parentIndex = ancestors.length - 1,
            parent = ancestors[parentIndex];

        if ((parent.type !== "ForStatement" || parent.init !== node) &&
            (parent.type !== "ForInStatement" || parent.left !== node)
        ) {
            checkForSemicolon(node);
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {

        "VariableDeclaration": checkForSemicolonForVariableDeclaration,
        "ExpressionStatement": checkForSemicolon,
        "ReturnStatement": checkForSemicolon,
        "DebuggerStatement": checkForSemicolon,
        "BreakStatement": checkForSemicolon,
        "ContinueStatement": checkForSemicolon,
        "EmptyStatement": function (node) {
            var nextToken;

            if (!always) {
                nextToken = context.getTokenAfter(node) || context.getLastToken(node);

                if (!(OPT_OUT_PATTERN.test(nextToken.value))) {
                    context.report(node, "Extra semicolon.");
                }
            }


        }
    };

};

},{}],154:[function(require,module,exports){
/**
 * @fileoverview Rule to require sorting of variables within a single Variable Declaration block
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var configuration = context.options[0] || {},
        ignoreCase = configuration.ignoreCase || false;

    return {
        "VariableDeclaration": function(node) {
            node.declarations.reduce(function(memo, decl) {
                var lastVariableName = memo.id.name,
                    currenVariableName = decl.id.name;

                if (ignoreCase) {
                    lastVariableName = lastVariableName.toLowerCase();
                    currenVariableName = currenVariableName.toLowerCase();
                }

                if (currenVariableName < lastVariableName) {
                    context.report(decl, "Variables within the same declaration block should be sorted alphabetically");
                    return memo;
                } else {
                    return decl;
                }
            }, node.declarations[0]);
        }
    };
};

},{}],155:[function(require,module,exports){
/**
 * @fileoverview Rule to enforce the number of spaces after certain keywords
 * @author Nick Fisher
 * @copyright 2014 Nick Fisher. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    // unless the first option is `"never"`, then a space is required
    var requiresSpace = context.options[0] !== "never",
        config = context.options[1] || { checkFunctionKeyword: false };

    /**
     * Check if the separation of two adjacent tokens meets the spacing rules, and report a problem if not.
     *
     * @param {ASTNode} node  The node to which the potential problem belongs.
     * @param {Token} left    The first token.
     * @param {Token} right   The second token
     * @returns {void}
     */
    function checkTokens(node, left, right) {
        var hasSpace = left.range[1] < right.range[0],
            value = left.value;

        if (hasSpace !== requiresSpace) {
            context.report(node, "Keyword \"{{value}}\" must {{not}}be followed by whitespace.", {
                value: value,
                not: requiresSpace ? "" : "not "
            });
        }
    }

    /**
     * Check if the given node (`if`, `for`, `while`, etc), has the correct spacing after it.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     */
    function check(node) {
        var tokens = context.getFirstTokens(node, 2);
        checkTokens(node, tokens[0], tokens[1]);
    }

    return {
        "IfStatement": function (node) {
            check(node);
            // check the `else`
            if (node.alternate && node.alternate.type !== "IfStatement") {
                checkTokens(node.alternate, context.getTokenBefore(node.alternate), context.getFirstToken(node.alternate));
            }
        },
        "ForStatement": check,
        "ForOfStatement": check,
        "ForInStatement": check,
        "WhileStatement": check,
        "DoWhileStatement": function (node) {
            check(node);
            // check the `while`
            var whileTokens = context.getTokensBefore(node.test, 2);
            checkTokens(node, whileTokens[0], whileTokens[1]);
        },
        "SwitchStatement": check,
        "TryStatement": function (node) {
            check(node);
            // check the `finally`
            if (node.finalizer) {
                checkTokens(node.finalizer, context.getTokenBefore(node.finalizer), context.getFirstToken(node.finalizer));
            }
        },
        "CatchStatement": check,
        "WithStatement": check,
        "FunctionExpression": function (node) {
            if (config.checkFunctionKeyword) {
                check(node);
            }
        }
    };
};

},{}],156:[function(require,module,exports){
/**
 * @fileoverview A rule to ensure whitespace before blocks.
 * @author Mathias Schreck <https://github.com/lo1tuma>
 * @copyright 2014 Mathias Schreck. All rights reserved.
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    var requireSpace = context.options[0] !== "never";

    /**
     * Determines whether two adjacent tokens are have whitespace between them.
     * @param {Object} left - The left token object.
     * @param {Object} right - The right token object.
     * @returns {boolean} Whether or not there is space between the tokens.
     */
    function isSpaced(left, right) {
        return left.range[1] < right.range[0];
    }

    /**
     * Determines whether two adjacent tokens are on the same line.
     * @param {Object} left - The left token object.
     * @param {Object} right - The right token object.
     * @returns {boolean} Whether or not the tokens are on the same line.
     */
    function isSameLine(left, right) {
        return left.loc.start.line === right.loc.start.line;
    }

    /**
     * Checks the given BlockStatement node has a preceding space if it doesn’t start on a new line.
     * @param {ASTNode|Token} node The AST node of a BlockStatement.
     * @returns {void} undefined.
     */
    function checkPrecedingSpace(node) {
        var precedingToken = context.getTokenBefore(node),
            hasSpace;

        if (precedingToken && isSameLine(precedingToken, node)) {
            hasSpace = isSpaced(precedingToken, node);

            if (requireSpace) {
                if (!hasSpace) {
                    context.report(node, "Missing space before opening brace.");
                }
            } else {
                if (hasSpace) {
                    context.report(node, "Unexpected space before opening brace.");
                }
            }
        }
    }

    /**
     * Checks if the CaseBlock of an given SwitchStatement node has a preceding space.
     * @param {ASTNode} node The node of a SwitchStatement.
     * @returns {void} undefined.
     */
    function checkSpaceBeforeCaseBlock(node) {
        var cases = node.cases,
            firstCase,
            openingBrace;

        if (cases.length > 0) {
            firstCase = cases[0];
            openingBrace = context.getTokenBefore(firstCase);
        } else {
            openingBrace = context.getLastToken(node, 1);
        }

        checkPrecedingSpace(openingBrace);
    }

    return {
        "BlockStatement": checkPrecedingSpace,
        "SwitchStatement": checkSpaceBeforeCaseBlock
    };

};

},{}],157:[function(require,module,exports){
/**
 * @fileoverview Disallows or enforces spaces inside of brackets.
 * @author Ian Christian Myers
 * @copyright 2014 Brandyn Bennett. All rights reserved.
 * @copyright 2014 Michael Ficarra. No rights reserved.
 * @copyright 2014 Vignesh Anand. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    var spaced = context.options[0] === "always";

    /**
     * Determines whether an option is set, relative to the spacing option.
     * If spaced is "always", then check whether option is set to false.
     * If spaced is "never", then check whether option is set to true.
     * @param {Object} option - The option to exclude.
     * @returns {boolean} Whether or not the property is excluded.
     */
    function isOptionSet(option) {
        return context.options[1] != null ? context.options[1][option] === !spaced : false;
    }

    var options = {
        spaced: spaced,
        singleElementException: isOptionSet("singleValue"),
        objectsInArraysException: isOptionSet("objectsInArrays"),
        arraysInArraysException: isOptionSet("arraysInArrays"),
        arraysInObjectsException: isOptionSet("arraysInObjects"),
        objectsInObjectsException: isOptionSet("objectsInObjects"),
        propertyNameException: isOptionSet("propertyName")
    };

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Determines whether two adjacent tokens are have whitespace between them.
     * @param {Object} left - The left token object.
     * @param {Object} right - The right token object.
     * @returns {boolean} Whether or not there is space between the tokens.
     */
    function isSpaced(left, right) {
        return left.range[1] < right.range[0];
    }

    /**
     * Determines whether two adjacent tokens are on the same line.
     * @param {Object} left - The left token object.
     * @param {Object} right - The right token object.
     * @returns {boolean} Whether or not the tokens are on the same line.
     */
    function isSameLine(left, right) {
        return left.loc.start.line === right.loc.start.line;
    }

    /**
    * Reports that there shouldn't be a space after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoBeginningSpace(node, token) {
        context.report(node, token.loc.start,
            "There should be no space after '" + token.value + "'");
    }

    /**
    * Reports that there shouldn't be a space before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoEndingSpace(node, token) {
        context.report(node, token.loc.start,
            "There should be no space before '" + token.value + "'");
    }

    /**
    * Reports that there should be a space after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportRequiredBeginningSpace(node, token) {
        context.report(node, token.loc.start,
            "A space is required after '" + token.value + "'");
    }

    /**
    * Reports that there should be a space before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportRequiredEndingSpace(node, token) {
        context.report(node, token.loc.start,
                    "A space is required before '" + token.value + "'");
    }


    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        MemberExpression: function(node) {
            if (!node.computed) {
                return;
            }

            var property = node.property,
                before = context.getTokenBefore(property),
                first = context.getFirstToken(property),
                last = context.getLastToken(property),
                after = context.getTokenAfter(property);

            var propertyNameMustBeSpaced = options.propertyNameException ?
                                    !options.spaced : options.spaced;

            if (isSameLine(before, first) || isSameLine(last, after)) {
                if (propertyNameMustBeSpaced) {
                    if (!isSpaced(before, first) && isSameLine(before, first)) {
                        reportRequiredBeginningSpace(node, before);
                    }
                    if (!isSpaced(last, after) && isSameLine(last, after)) {
                        reportRequiredEndingSpace(node, after);
                    }
                } else {
                    if (isSpaced(before, first)) {
                        reportNoBeginningSpace(node, before);
                    }
                    if (isSpaced(last, after)) {
                        reportNoEndingSpace(node, after);
                    }
                }
            }
        },

        ArrayExpression: function(node) {
            if (node.elements.length === 0) {
                return;
            }

            var first = context.getFirstToken(node),
                second = context.getFirstToken(node, 1),
                penultimate = context.getLastToken(node, 1),
                last = context.getLastToken(node);

            var openingBracketMustBeSpaced =
                options.objectsInArraysException && second.value === "{" ||
                options.arraysInArraysException && second.value === "[" ||
                options.singleElementException && node.elements.length === 1
                ? !options.spaced : options.spaced;

            var closingBracketMustBeSpaced =
                options.objectsInArraysException && penultimate.value === "}" ||
                options.arraysInArraysException && penultimate.value === "]" ||
                options.singleElementException && node.elements.length === 1
                ? !options.spaced : options.spaced;

            if (isSameLine(first, second) || isSameLine(penultimate, last)) {
                if (openingBracketMustBeSpaced && !isSpaced(first, second)) {
                    reportRequiredBeginningSpace(node, first);
                }
                if (!openingBracketMustBeSpaced && isSpaced(first, second)) {
                    reportNoBeginningSpace(node, first);
                }
                if (closingBracketMustBeSpaced && !isSpaced(penultimate, last)) {
                    reportRequiredEndingSpace(node, last);
                }
                if (!closingBracketMustBeSpaced && isSpaced(penultimate, last)) {
                    reportNoEndingSpace(node, last);
                }
            }
        },

        ObjectExpression: function(node) {
            if (node.properties.length === 0) {
                return;
            }

            var first = context.getFirstToken(node),
                second = context.getFirstToken(node, 1),
                penultimate = context.getLastToken(node, 1),
                last = context.getLastToken(node);

            var closingCurlyBraceMustBeSpaced =
                options.arraysInObjectsException && penultimate.value === "]" ||
                options.objectsInObjectsException && penultimate.value === "}"
                ? !options.spaced : options.spaced;

            if (isSameLine(first, second) || isSameLine(penultimate, last)) {
                if (options.spaced && !isSpaced(first, second)) {
                    reportRequiredBeginningSpace(node, first);
                }
                if (!options.spaced && isSpaced(first, second)) {
                    reportNoBeginningSpace(node, first);
                }
                if (closingCurlyBraceMustBeSpaced && !isSpaced(penultimate, last)) {
                    reportRequiredEndingSpace(node, last);
                }
                if (!closingCurlyBraceMustBeSpaced && isSpaced(penultimate, last)) {
                    reportNoEndingSpace(node, last);
                }
            }
        }

    };

};

},{}],158:[function(require,module,exports){
/**
 * @fileoverview Disallows or enforces spaces inside of parentheses.
 * @author Jonathan Rajavuori
 * @copyright 2014 David Clark. All rights reserved.
 * @copyright 2014 Jonathan Rajavuori. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var MISSING_SPACE_MESSAGE = "There must be a space inside this paren.",
        REJECTED_SPACE_MESSAGE = "There should be no spaces inside this paren.",
        exceptionsArray = (context.options.length === 2) ? context.options[1].exceptions : [],
        options = {},
        rejectedSpaceRegExp,
        missingSpaceRegExp,
        spaceChecks;

    if (exceptionsArray && exceptionsArray.length) {
        options.braceException = exceptionsArray.indexOf("{}") !== -1 || false;
        options.bracketException = exceptionsArray.indexOf("[]") !== -1 || false;
        options.parenException = exceptionsArray.indexOf("()") !== -1 || false;
        options.empty = exceptionsArray.indexOf("empty") !== -1 || false;
    }

    /**
     * Used with the `never` option to produce, given the exception options,
     * two regular expressions to check for missing and rejected spaces.
     * @param {Object} opts The exception options
     * @returns {Object} `missingSpace` and `rejectedSpace` regular expressions
     * @private
     */
    function getNeverChecks(opts) {
        var missingSpaceOpeners = [],
            missingSpaceClosers = [],
            rejectedSpaceOpeners = [" ", "\\n", "\\r"],
            rejectedSpaceClosers = [" ", "\\n", "\\r"],
            missingSpaceCheck,
            rejectedSpaceCheck;

        // Populate openers and closers
        if (opts.braceException) {
            missingSpaceOpeners.push("\\{");
            missingSpaceClosers.push("\\}");
            rejectedSpaceOpeners.push("\\{");
            rejectedSpaceClosers.push("\\}");
        }
        if (opts.bracketException) {
            missingSpaceOpeners.push("\\[");
            missingSpaceClosers.push("\\]");
            rejectedSpaceOpeners.push("\\[");
            rejectedSpaceClosers.push("\\]");
        }
        if (opts.parenException) {
            missingSpaceOpeners.push("\\(");
            missingSpaceClosers.push("\\)");
            rejectedSpaceOpeners.push("\\(");
            rejectedSpaceClosers.push("\\)");
        }
        if (opts.empty) {
            missingSpaceOpeners.push("\\)");
            missingSpaceClosers.push("\\(");
            rejectedSpaceOpeners.push("\\)");
            rejectedSpaceClosers.push("\\(");
        }

        if (missingSpaceOpeners.length) {
            missingSpaceCheck = "\\((" + missingSpaceOpeners.join("|") + ")";
            if (missingSpaceClosers.length) {
                missingSpaceCheck += "|";
            }
        }
        if (missingSpaceClosers.length) {
            missingSpaceCheck += "(" + missingSpaceClosers.join("|") + ")\\)";
        }

        // compose the rejected regexp
        rejectedSpaceCheck = "\\( +[^" + rejectedSpaceOpeners.join("") + "]";
        rejectedSpaceCheck += "|[^" + rejectedSpaceClosers.join("") + "] +\\)";

        return {
            // e.g. \((\{)|(\})\) --- where {} is an exception
            missingSpace: missingSpaceCheck || ".^",
            // e.g. \( +[^ \n\r\{]|[^ \n\r\}] +\) --- where {} is an exception
            rejectedSpace: rejectedSpaceCheck
        };
    }

    /**
     * Used with the `always` option to produce, given the exception options,
     * two regular expressions to check for missing and rejected spaces.
     * @param {Object} opts The exception options
     * @returns {Object} `missingSpace` and `rejectedSpace` regular expressions
     * @private
     */
    function getAlwaysChecks(opts) {
        var missingSpaceOpeners = [" ", "\\)", "\\r", "\\n"],
            missingSpaceClosers = [" ", "\\(", "\\r", "\\n"],
            rejectedSpaceOpeners = [],
            rejectedSpaceClosers = [],
            missingSpaceCheck,
            rejectedSpaceCheck;

        // Populate openers and closers
        if (opts.braceException) {
            missingSpaceOpeners.push("\\{");
            missingSpaceClosers.push("\\}");
            rejectedSpaceOpeners.push(" \\{");
            rejectedSpaceClosers.push("\\} ");
        }
        if (opts.bracketException) {
            missingSpaceOpeners.push("\\[");
            missingSpaceClosers.push("\\]");
            rejectedSpaceOpeners.push(" \\[");
            rejectedSpaceClosers.push("\\] ");
        }
        if (opts.parenException) {
            missingSpaceOpeners.push("\\(");
            missingSpaceClosers.push("\\)");
            rejectedSpaceOpeners.push(" \\(");
            rejectedSpaceClosers.push("\\) ");
        }
        if (opts.empty) {
            rejectedSpaceOpeners.push(" \\)");
            rejectedSpaceClosers.push("\\( ");
        }

        // compose the allowed regexp
        missingSpaceCheck = "\\([^" + missingSpaceOpeners.join("") + "]";
        missingSpaceCheck += "|[^" + missingSpaceClosers.join("") + "]\\)";

        // compose the rejected regexp
        if (rejectedSpaceOpeners.length) {
            rejectedSpaceCheck = "\\((" + rejectedSpaceOpeners.join("|") + ")";
            if (rejectedSpaceClosers.length) {
                rejectedSpaceCheck += "|";
            }
        }
        if (rejectedSpaceClosers.length) {
            rejectedSpaceCheck += "(" + rejectedSpaceClosers.join("|") + ")\\)";
        }

        return {
            // e.g. \([^ \)\r\n\{]|[^ \(\r\n\}]\) --- where {} is an exception
            missingSpace: missingSpaceCheck,
            // e.g. \(( \{})|(\} )\) --- where {} is an excpetion
            rejectedSpace: rejectedSpaceCheck || ".^"
        };
    }

    spaceChecks = (context.options[0] === "always") ? getAlwaysChecks(options) : getNeverChecks(options);
    missingSpaceRegExp = new RegExp(spaceChecks.missingSpace, "mg");
    rejectedSpaceRegExp = new RegExp(spaceChecks.rejectedSpace, "mg");


    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    var skipRanges = [];

    /**
     * Adds the range of a node to the set to be skipped when checking parens
     * @param {ASTNode} node The node to skip
     * @returns {void}
     * @private
     */
    function addSkipRange(node) {
        skipRanges.push(node.range);
    }

    /**
     * Sorts the skipRanges array. Must be called before shouldSkip
     * @returns {void}
     * @private
     */
    function sortSkipRanges() {
        skipRanges.sort(function (a, b) {
            return a[0] - b[0];
        });
    }

    /**
     * Checks if a certain position in the source should be skipped
     * @param {Number} pos The 0-based index in the source
     * @returns {boolean} whether the position should be skipped
     * @private
     */
    function shouldSkip(pos) {
        var i, len, range;
        for (i = 0, len = skipRanges.length; i < len; i += 1) {
            range = skipRanges[i];
            if (pos < range[0]) {
                break;
            } else if (pos < range[1]) {
                return true;
            }
        }
        return false;
    }


    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "Program:exit": function checkParenSpaces(node) {

            var match,
                nextLine,
                column,
                line = 1,
                source = context.getSource(),
                pos = 0;

            function checkMatch(match, message) {
                if (source.charAt(match.index) !== "(") {
                    // Matched a closing paren pattern
                    match.index += 1;
                }

                if (!shouldSkip(match.index)) {
                    while ((nextLine = source.indexOf("\n", pos)) !== -1 && nextLine < match.index) {
                        pos = nextLine + 1;
                        line += 1;
                    }
                    column = match.index - pos;

                    context.report(node, { line: line, column: column }, message);
                }
            }

            sortSkipRanges();

            while ((match = rejectedSpaceRegExp.exec(source)) !== null) {
                checkMatch(match, REJECTED_SPACE_MESSAGE);
            }

            while ((match = missingSpaceRegExp.exec(source)) !== null) {
                checkMatch(match, MISSING_SPACE_MESSAGE);
            }

        },


        // These nodes can contain parentheses that this rule doesn't care about

        LineComment: addSkipRange,

        BlockComment: addSkipRange,

        Literal: addSkipRange

    };

};

},{}],159:[function(require,module,exports){
/**
 * @fileoverview Require spaces around infix operators
 * @author Michael Ficarra
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var OPERATORS = [
        "*", "/", "%", "+", "-", "<<", ">>", ">>>", "<", "<=", ">", ">=", "in",
        "instanceof", "==", "!=", "===", "!==", "&", "^", "|", "&&", "||", "=",
        "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "^=", "|=",
        "?", ":", ","
    ];

    function isSpaced(left, right) {
        var op, tokens = context.getTokensBetween(left, right, 1);
        for (var i = 1, l = tokens.length - 1; i < l; ++i) {
            op = tokens[i];
            if (
                op.type === "Punctuator" &&
                OPERATORS.indexOf(op.value) >= 0 &&
                (tokens[i - 1].range[1] >= op.range[0] || op.range[1] >= tokens[i + 1].range[0])
            ) {
                return false;
            }
        }
        return true;
    }

    function report(node) {
        context.report(node, "Infix operators must be spaced.");
    }

    function checkBinary(node) {
        if (!isSpaced(node.left, node.right)) {
            report(node);
        }
    }

    function checkConditional(node) {
        if (!isSpaced(node.test, node.consequent) || !isSpaced(node.consequent, node.alternate)) {
            report(node);
        }
    }

    function checkVar(node) {
        if (node.init && !isSpaced(node.id, node.init)) {
            report(node);
        }
    }

    return {
        "AssignmentExpression": checkBinary,
        "BinaryExpression": checkBinary,
        "LogicalExpression": checkBinary,
        "ConditionalExpression": checkConditional,
        "VariableDeclarator": checkVar
    };

};

},{}],160:[function(require,module,exports){
/**
 * @fileoverview Require spaces following return, throw, and case
 * @author Michael Ficarra
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    function check(node) {
        var tokens = context.getFirstTokens(node, 2),
            value = tokens[0].value;

        if (tokens[0].range[1] >= tokens[1].range[0]) {
            context.report(node, "Keyword \"" + value + "\" must be followed by whitespace.");
        }
    }

    return {
        "ReturnStatement": function(node) {
            if (node.argument) {
                check(node);
            }
        },
        "SwitchCase": function(node) {
            if (node.test) {
                check(node);
            }
        },
        "ThrowStatement": check
    };

};

},{}],161:[function(require,module,exports){
/**
 * @fileoverview This rule shoud require or disallow spaces before or after unary operations.
 * @author Marcin Kumorek
 * @copyright 2014 Marcin Kumorek. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    var options = context.options && Array.isArray(context.options) && context.options[0] || { words: true, nonwords: false };

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
    * Check if the parent unary operator is "!" in order to know if it's "!!" convert to Boolean or just "!" negation
    * @param {ASTnode} node AST node
    * @returns {boolean} Whether or not the parent is unary "!" operator
    */
    function isParentUnaryBangExpression(node) {
        return node && node.parent && node.parent.type === "UnaryExpression" && node.parent.operator === "!";
    }

    /**
    * Checks if the type is a unary word expression
    * @param {string} type value of AST token
    * @returns {boolean} Whether the word is in the list of known words
    */
    function isWordExpression(type) {
        return ["delete", "new", "typeof", "void"].indexOf(type) !== -1;
    }

    /**
    * Check if the node's child argument is an "ObjectExpression"
    * @param {ASTnode} node AST node
    * @returns {boolean} Whether or not the argument's type is "ObjectExpression"
    */
    function isArgumentObjectExpression(node) {
        return node.argument && node.argument.type && node.argument.type === "ObjectExpression";
    }

    /**
    * Check Unary Word Operators for spaces after the word operator
    * @param {ASTnode} node AST node
    * @param {object} firstToken first token from the AST node
    * @param {object} secondToken second token from the AST node
    * @returns {void}
    */
    function checkUnaryWordOperatorForSpaces(node, firstToken, secondToken) {
        if (options.words) {
            if (secondToken.range[0] === firstToken.range[1]) {
                context.report(node, "Unary word operator \"" + firstToken.value + "\" must be followed by whitespace.");
            }
        }

        if (!options.words && isArgumentObjectExpression(node)) {
            if (secondToken.range[0] > firstToken.range[1]) {
                context.report(node, "Unexpected space after unary word operator \"" + firstToken.value + "\".");
            }
        }
    }

    /**
    * Checks UnaryExpression, UpdateExpression and NewExpression for spaces before and after the operator
    * @param {ASTnode} node AST node
    * @returns {void}
    */
    function checkForSpaces(node) {
        var tokens = context.getFirstTokens(node, 2),
            firstToken = tokens[0],
            secondToken = tokens[1];

         if (isWordExpression(firstToken.value)) {
             checkUnaryWordOperatorForSpaces(node, firstToken, secondToken);
             return void 0;
         }

        if (options.nonwords) {
            if (node.prefix) {
                if (isParentUnaryBangExpression(node)) {
                    return void 0;
                }
                if (firstToken.range[1] === secondToken.range[0]) {
                    context.report(node, "Unary operator \"" + firstToken.value + "\" must be followed by whitespace.");
                }
            } else {
                if (firstToken.range[1] === secondToken.range[0]) {
                    context.report(node, "Space is required before unary expressions \"" + secondToken.value + "\".");
                }
            }
        } else {
            if (node.prefix) {
                if (secondToken.range[0] > firstToken.range[1]) {
                    context.report(node, "Unexpected space after unary operator \"" + firstToken.value + "\".");
                }
            } else {
                if (secondToken.range[0] > firstToken.range[1]) {
                    context.report(node, "Unexpected space before unary operator \"" + secondToken.value + "\".");
                }
            }
        }
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        "UnaryExpression": checkForSpaces,
        "UpdateExpression": checkForSpaces,
        "NewExpression": checkForSpaces
    };

};

},{}],162:[function(require,module,exports){
/**
 * @fileoverview Enforces or disallows a space beginning a single-line comment.
 * @author Greg Cochard
 * @copyright 2014 Greg Cochard. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    // Unless the first option is never, require a space
    var requireSpace = context.options[0] !== "never";

    // Default to match anything, so all will fail if there are no exceptions
    var exceptionMatcher = new RegExp(" ");

    // Grab the exceptions array and build a RegExp matcher for it
    var hasExceptions = context.options.length === 2;
    var unescapedExceptions = hasExceptions ? context.options[1].exceptions : [];
    var exceptions;

    if (unescapedExceptions.length) {
        exceptions = unescapedExceptions.map(function(s) {
            return s.replace(/([.*+?${}()|\^\[\]\/\\])/g, "\\$1");
        });
        exceptionMatcher = new RegExp("(^(" + exceptions.join(")+$)|(^(") + ")+$)");
    }


    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "LineComment": function checkCommentForSpace(node) {

            if (requireSpace) {

                // If length is zero, ignore it
                if (node.value.length === 0) {
                    return;
                }

                // Space expected and not found
                if (node.value.indexOf(" ") !== 0) {

                    /*
                     * Do two tests; one for space starting the line,
                     * and one for a comment comprised only of exceptions
                     */
                    if (hasExceptions && !exceptionMatcher.test(node.value)) {
                        context.report(node, "Expected exception block or space after // in comment.");
                    } else if (!hasExceptions) {
                        context.report(node, "Expected space after // in comment.");
                    }
                }

            } else {

                if (node.value.indexOf(" ") === 0) {
                    context.report(node, "Unexpected space after // in comment.");
                }
            }
        }

    };
};

},{}],163:[function(require,module,exports){
/**
 * @fileoverview Rule to ensure code is running in strict mode.
 * @author Nicholas C. Zakas
 * @copyright 2013-2014 Nicholas C. Zakas. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var scopes = [];

    /**
     * Determines if a given node is "use strict".
     * @param {ASTNode} node The node to check.
     * @returns {boolean} True if the node is a strict pragma, false if not.
     * @void
     */
    function isStrictPragma(node) {
        return (node && node.type === "ExpressionStatement" &&
                node.expression.value === "use strict");
    }

    /**
     * When you enter a scope, push the strict value from the previous scope
     * onto the stack.
     * @param {ASTNode} node The AST node being checked.
     * @returns {void}
     * @private
     */
    function enterScope(node) {

        var isStrict = false,
            isProgram = (node.type === "Program"),
            isParentGlobal = scopes.length === 1,
            isParentStrict = scopes.length ? scopes[scopes.length - 1] : false;

        // look for the "use strict" pragma
        if (isProgram) {
            isStrict = isStrictPragma(node.body[0]) || isParentStrict;
        } else {
            isStrict = isStrictPragma(node.body.body[0]) || isParentStrict;
        }

        scopes.push(isStrict);

        // never warn if the parent is strict or the function is strict
        if (!isParentStrict && !isStrict && isParentGlobal) {
            context.report(node, "Missing \"use strict\" statement.");
        }
    }

    /**
     * When you exit a scope, pop off the top scope and see if it's true or
     * false.
     * @returns {void}
     * @private
     */
    function exitScope() {
        scopes.pop();
    }

    return {

        "Program": enterScope,
        "FunctionDeclaration": enterScope,
        "FunctionExpression": enterScope,
        "ArrowFunctionExpression": enterScope,

        "Program:exit": exitScope,
        "FunctionDeclaration:exit": exitScope,
        "FunctionExpression:exit": exitScope,
        "ArrowFunctionExpression:exit": exitScope
    };

};

},{}],164:[function(require,module,exports){
/**
 * @fileoverview Rule to flag comparisons to the value NaN
 * @author James Allardice
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
        "BinaryExpression": function(node) {

            if (!/^[|&^]$/.test(node.operator) && node.left.name === "NaN" || node.right.name === "NaN") {
                context.report(node, "Use the isNaN function to compare with NaN.");
            }
        }
    };

};

},{}],165:[function(require,module,exports){
/**
 * @fileoverview Validates JSDoc comments are syntactically correct
 * @author Nicholas C. Zakas
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var doctrine = require("doctrine");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var options = context.options[0] || {},
        prefer = options.prefer || {},

        // these both default to true, so you have to explicitly make them false
        requireReturn = options.requireReturn === false ? false : true,
        requireParamDescription = options.requireParamDescription === false ? false : true;

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    // Using a stack to store if a function returns or not (handling nested functions)
    var fns = [];

    /**
     * When parsing a new function, store it in our function stack.
     * @returns {void}
     * @private
     */
    function startFunction() {
        fns.push({returnPresent: false});
    }

    /**
     * Indicate that return has been found in the current function.
     * @param {ASTNode} node The return node.
     * @returns {void}
     * @private
     */
    function addReturn(node) {
        var functionState = fns[fns.length - 1];

        if (functionState && node.argument !== null) {
            functionState.returnPresent = true;
        }
    }

    /**
     * Validate the JSDoc node and output warnings if anything is wrong.
     * @param {ASTNode} node The AST node to check.
     * @returns {void}
     * @private
     */
    function checkJSDoc(node) {
        var jsdocNode = context.getJSDocComment(node),
            functionData = fns.pop(),
            hasReturns = false,
            hasConstructor = false,
            params = Object.create(null),
            jsdoc;

        // make sure only to validate JSDoc comments
        if (jsdocNode) {

            try {
                jsdoc = doctrine.parse(jsdocNode.value, {
                    strict: true,
                    unwrap: true,
                    sloppy: true
                });
            } catch (ex) {

                if (/braces/i.test(ex.message)) {
                    context.report(jsdocNode, "JSDoc type missing brace.");
                } else {
                    context.report(jsdocNode, "JSDoc syntax error.");
                }

                return;
            }

            jsdoc.tags.forEach(function(tag) {

                switch (tag.title) {

                    case "param":
                        if (!tag.type) {
                            context.report(jsdocNode, "Missing JSDoc parameter type for '{{name}}'.", { name: tag.name });
                        }

                        if (!tag.description && requireParamDescription) {
                            context.report(jsdocNode, "Missing JSDoc parameter description for '{{name}}'.", { name: tag.name });
                        }

                        if (params[tag.name]) {
                            context.report(jsdocNode, "Duplicate JSDoc parameter '{{name}}'.", { name: tag.name });
                        } else if (tag.name.indexOf(".") === -1) {
                            params[tag.name] = 1;
                        }
                        break;

                    case "return":
                    case "returns":
                        hasReturns = true;

                        if (!requireReturn && !functionData.returnPresent && tag.type.name !== "void" && tag.type.name !== "undefined") {
                            context.report(jsdocNode, "Unexpected @" + tag.title + " tag; function has no return statement.");
                        } else {
                            if (!tag.type) {
                                context.report(jsdocNode, "Missing JSDoc return type.");
                            }

                            if (tag.type.name !== "void" && !tag.description) {
                                context.report(jsdocNode, "Missing JSDoc return description.");
                            }
                        }

                        break;

                    case "constructor":
                        hasConstructor = true;
                        break;

                    // no default
                }

                // check tag preferences
                if (prefer.hasOwnProperty(tag.title)) {
                    context.report(jsdocNode, "Use @{{name}} instead.", { name: prefer[tag.title] });
                }

            });

            // check for functions missing @returns
            if (!hasReturns && !hasConstructor) {
                if (requireReturn || functionData.returnPresent) {
                    context.report(jsdocNode, "Missing JSDoc @returns for function.");
                }
            }

            // check the parameters
            var jsdocParams = Object.keys(params);

            node.params.forEach(function(param, i) {
                var name = param.name;

                if (jsdocParams[i] && (name !== jsdocParams[i])) {
                    context.report(jsdocNode, "Expected JSDoc for '{{name}}' but found '{{jsdocName}}'.", {
                        name: name,
                        jsdocName: jsdocParams[i]
                    });
                } else if (!params[name]) {
                    context.report(jsdocNode, "Missing JSDoc for parameter '{{name}}'.", {
                        name: name
                    });
                }
            });

        }

    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        "ArrowFunctionExpression": startFunction,
        "FunctionExpression": startFunction,
        "FunctionDeclaration": startFunction,
        "ArrowFunctionExpression:exit": checkJSDoc,
        "FunctionExpression:exit": checkJSDoc,
        "FunctionDeclaration:exit": checkJSDoc,
        "ReturnStatement": addReturn
    };

};

},{"doctrine":14}],166:[function(require,module,exports){
/**
 * @fileoverview Ensures that the results of typeof are compared against a valid string
 * @author Ian Christian Myers
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var VALID_TYPES = ["symbol", "undefined", "object", "boolean", "number", "string", "function"],
        OPERATORS = ["==", "===", "!=", "!=="];

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "UnaryExpression": function (node) {
            var parent, sibling;

            if (node.operator === "typeof") {
                parent = context.getAncestors().pop();

                if (parent.type === "BinaryExpression" && OPERATORS.indexOf(parent.operator) !== -1) {
                    sibling = parent.left === node ? parent.right : parent.left;

                    if (sibling.type === "Literal" && VALID_TYPES.indexOf(sibling.value) === -1) {
                        context.report(sibling, "Invalid typeof comparison value");
                    }
                }
            }
        }

    };

};

},{}],167:[function(require,module,exports){
/**
 * @fileoverview Rule to enforce var declarations are only at the top of a function.
 * @author Danny Fritz
 * @author Gyandeep Singh
 * @copyright 2014 Danny Fritz. All rights reserved.
 * @copyright 2014 Gyandeep Singh. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    var errorMessage = "All \"var\" declarations must be at the top of the function scope.";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * @param {ASTNode} node - any node
     * @returns {Boolean} whether the given node structurally represents a directive
     */
    function looksLikeDirective(node) {
        return node.type === "ExpressionStatement" &&
            node.expression.type === "Literal" && typeof node.expression.value === "string";
    }

    /**
     * Checks whether this variable is on top of the block body
     * @param {ASTNode} node - The node to check
     * @param {ASTNode[]} statements - collection of ASTNodes for the parent node block
     * @returns {Boolean} True if var is on top otherwise false
     */
    function isVarOnTop (node, statements) {
        var i = 0, l = statements.length;

        // skip over directives
        for (; i < l; ++i) {
            if (!looksLikeDirective(statements[i])) {
                break;
            }
        }

        for (; i < l; ++i) {
            if (statements[i].type !== "VariableDeclaration") {
                return false;
            }
            if (statements[i] === node) {
                return true;
            }
        }
    }

    /**
     * Checks whether variable is on top at the global level
     * @param {ASTNode} node - The node to check
     * @param {ASTNode} parent - Parent of the node
     * @returns {void}
     */
    function globalVarCheck (node, parent) {
        if (!isVarOnTop(node, parent.body)) {
            context.report(node, errorMessage);
        }
    }

    /**
     * Checks whether variable is on top at functional block scope level
     * @param {ASTNode} node - The node to check
     * @param {ASTNode} parent - Parent of the node
     * @param {ASTNode} grandParent - Parent of the node's parent
     * @returns {void}
     */
    function blockScopeVarCheck (node, parent, grandParent) {
        if (!(/Function/.test(grandParent.type) &&
                parent.type === "BlockStatement" &&
                isVarOnTop(node, parent.body))) {
            context.report(node, errorMessage);
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "VariableDeclaration": function (node) {
            var ancestors = context.getAncestors();
            var parent = ancestors.pop();
            var grandParent = ancestors.pop();

            if (node.kind === "var") {// check variable is `var` type and not `let` or `const`
                if (parent.type === "Program") {// That means its a global variable
                    globalVarCheck(node, parent);
                } else {
                    blockScopeVarCheck(node, parent, grandParent);
                }
            }
        }
    };

};

},{}],168:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when IIFE is not wrapped in parens
 * @author Ilya Volodin
 * @copyright 2013 Ilya Volodin. All rights reserved.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";
    var style = context.options[0] || "outside";

    function wrapped(node) {
        var previousToken = context.getTokenBefore(node),
            nextToken = context.getTokenAfter(node);
        return previousToken && previousToken.value === "(" &&
            nextToken && nextToken.value === ")";
    }

    return {

        "CallExpression": function(node) {
            if (node.callee.type === "FunctionExpression") {
                var callExpressionWrapped = wrapped(node),
                    functionExpressionWrapped = wrapped(node.callee);

                if (!callExpressionWrapped && !functionExpressionWrapped) {
                    context.report(node, "Wrap an immediate function invocation in parentheses.");
                } else if (style === "inside" && !functionExpressionWrapped) {
                    context.report(node, "Wrap only the function expression in parens.");
                } else if (style === "outside" && !callExpressionWrapped) {
                    context.report(node, "Move the invocation into the parens that contain the function.");
                }
            }
        }
    };

};

},{}],169:[function(require,module,exports){
/**
 * @fileoverview Rule to flag when regex literals are not wrapped in parens
 * @author Matt DuVall <http://www.mattduvall.com>
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {

        "Literal": function(node) {
            var token = context.getFirstToken(node),
                nodeType = token.type,
                source,
                grandparent,
                ancestors;

            if (nodeType === "RegularExpression") {
                source = context.getTokenBefore(node);
                ancestors = context.getAncestors();
                grandparent = ancestors[ancestors.length - 1];

                if (grandparent.type === "MemberExpression" && grandparent.object === node &&
                    (!source || source.value !== "(")) {
                    context.report(node, "Wrap the regexp literal in parens to disambiguate the slash.");
                }
            }
        }
    };

};

},{}],170:[function(require,module,exports){
/**
 * @fileoverview Rule to require or disallow yoda comparisons
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {

    // Default to "never" (!always) if no option

    var always = (context.options[0] === "always");

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Determines whether an operator is a comparison operator.
     * @param {String} operator The operator to check.
     * @returns {Boolean} Whether or not it is a comparison operator.
     */
    function isComparisonOperator(operator) {
        return (/^(==|===|!=|!==|<|>|<=|>=)$/).test(operator);
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "BinaryExpression": function (node) {

            if (always) {

                // Comparisons must always be yoda-style: if ("blue" === color)

                if (node.right.type === "Literal" && isComparisonOperator(node.operator)) {
                    context.report(node, "Expected literal to be on the left side of " + node.operator + ".");
                }

            } else {

                // Comparisons must never be yoda-style (default)

                if (node.left.type === "Literal" && isComparisonOperator(node.operator)) {
                    context.report(node, "Expected literal to be on the right side of " + node.operator + ".");
                }

            }

        }

    };

};

},{}],171:[function(require,module,exports){
(function (process){
/**
 * @fileoverview Tracks performance of individual rules.
 * @author Brandon Mills
 * @copyright 2014 Brandon Mills. All rights reserved.
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/* istanbul ignore next */
function alignLeft(str, len, ch) {
    return str + new Array(len - str.length + 1).join(ch || " ");
}

/* istanbul ignore next */
function alignRight(str, len, ch) {
    return new Array(len - str.length + 1).join(ch || " ") + str;
}

//------------------------------------------------------------------------------
// Module definition
//------------------------------------------------------------------------------

var enabled = !!process.env.TIMING;

var HEADERS = ["Rule", "Time (ms)", "Relative"];
var ALIGN = [alignLeft, alignRight, alignRight];

/* istanbul ignore next */
function display(data) {
    var total = 0;
    var rows = Object.keys(data)
        .map(function(key) {
            var time = data[key];
            total += time;
            return [key, time];
        })
        .sort(function(a, b) {
            return b[1] - a[1];
        })
        .slice(0, 10);

    rows.forEach(function(row) {
        row.push((row[1] * 100 / total).toFixed(1) + "%");
        row[1] = row[1].toFixed(3);
    });

    rows.unshift(HEADERS);

    var widths = [];
    rows.forEach(function(row) {
        var len = row.length, i, n;
        for (i = 0; i < len; i++) {
            n = row[i].length;
            if (!widths[i] || n > widths[i]) {
                widths[i] = n;
            }
        }
    });

    var table = rows.map(function(row) {
        return row.map(function(cell, index) {
            return ALIGN[index](cell, widths[index]);
        }).join(" | ");
    });
    table.splice(1, 0, widths.map(function(w, index) {
        if (index !== 0 && index !== widths.length - 1) {
            w++;
        }

        return ALIGN[index](":", w + 1, "-");
    }).join("|"));

    console.log(table.join("\n"));
}

/* istanbul ignore next */
module.exports = (function() {

    var data = Object.create(null);

    function time(key, fn) {
        if (typeof data[key] === "undefined") {
            data[key] = 0;
        }

        return function() {
            var t = process.hrtime();
            fn.apply(null, Array.prototype.slice.call(arguments));
            t = process.hrtime(t);
            data[key] += t[0] * 1e3 + t[1] / 1e6;
        };
    }

    if (enabled) {
        process.on("exit", function() {
            display(data);
        });
    }

    return {
        time: time,
        enabled: enabled
    };

}());

}).call(this,require('_process'))
},{"_process":6}],172:[function(require,module,exports){
/**
 * @fileoverview Object to handle access and retrieval of tokens.
 * @author Brandon Mills
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 * @copyright 2014 Brandon Mills. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Implementation
//------------------------------------------------------------------------------

module.exports = function(tokens) {
    var api = {},
        starts = Object.create(null),
        ends = Object.create(null),
        index, length, range;

    /**
     * Gets tokens in a given interval.
     * @param {int} start Inclusive index of the first token. 0 if negative.
     * @param {int} end Exclusive index of the last token.
     * @returns {[Token]} Tokens in the interval.
     */
    function get(start, end) {
        var result = [],
            i;

        for (i = Math.max(0, start); i < end && i < length; i++) {
            result.push(tokens[i]);
        }

        return result;
    }

    /**
     * Gets the index in the tokens array of the last token belonging to a node.
     * Usually a node ends exactly at a token, but due to ASI, sometimes a
     * node's range extends beyond its last token.
     * @param {ASTNode} node The node for which to find the last token's index.
     * @returns {int} Index in the tokens array of the node's last token.
     */
    function lastTokenIndex(node) {
        var end = node.range[1],
            cursor = ends[end];

        // If the node extends beyond its last token, get the token before the
        // next token
        if (typeof cursor === "undefined") {
            cursor = starts[end] - 1;
        }

        // If there isn't a next token, the desired token is the last one in the
        // array
        if (isNaN(cursor)) {
            cursor = length - 1;
        }

        return cursor;
    }

    // Map tokens' start and end range to the index in the tokens array
    for (index = 0, length = tokens.length; index < length; index++) {
        range = tokens[index].range;
        starts[range[0]] = index;
        ends[range[1]] = index;
    }

    /**
     * Gets a number of tokens that precede a given node's tokens in the token stream.
     * @param {ASTNode} node The AST node.
     * @param {int} [beforeCount=0] The number of tokens before the node to retrieve.
     * @returns {[Token]} Array of objects representing tokens.
     */
    api.getTokensBefore = function(node, beforeCount) {
        var first = starts[node.range[0]];
        return get(first - (beforeCount || 0), first);
    };

    /**
     * Gets the token that precedes a given node's tokens in the token stream.
     * @param {ASTNode} node The AST node.
     * @param {int} [skip=0] A number of tokens to skip before the given node.
     * @returns {Token} An object representing the token.
     */
    api.getTokenBefore = function(node, skip) {
        return tokens[starts[node.range[0]] - (skip || 0) - 1];
    };

    /**
     * Gets a number of tokens that precede a given node's tokens in the token stream.
     * @param {ASTNode} node The AST node.
     * @param {int} [afterCount=0] The number of tokens after the node to retrieve.
     * @returns {[Token]} Array of objects representing tokens.
     */
    api.getTokensAfter = function(node, afterCount) {
        var start = lastTokenIndex(node) + 1;
        return get(start, start + (afterCount || 0));
    };

    /**
     * Gets the token that follows a given node's tokens in the token stream.
     * @param {ASTNode} node The AST node.
     * @param {int} [skip=0] A number of tokens to skip after the given node.
     * @returns {Token} An object representing the token.
     */
    api.getTokenAfter = function(node, skip) {
        return tokens[lastTokenIndex(node) + (skip || 0) + 1];
    };

    /**
     * Gets all tokens that are related to the given node.
     * @param {ASTNode} node The AST node.
     * @param {int} [beforeCount=0] The number of tokens before the node to retrieve.
     * @param {int} [afterCount=0] The number of tokens after the node to retrieve.
     * @returns {[Token]} Array of objects representing tokens.
     */
    api.getTokens = function(node, beforeCount, afterCount) {
        return get(
            starts[node.range[0]] - (beforeCount || 0),
            lastTokenIndex(node) + (afterCount || 0) + 1
        );
    };

    /**
     * Gets the first `count` tokens of the given node's token stream.
     * @param {ASTNode} node The AST node.
     * @param {int} [count=0] The number of tokens of the node to retrieve.
     * @returns {[Token]} Array of objects representing tokens.
     */
    api.getFirstTokens = function(node, count) {
        var first = starts[node.range[0]];
        return get(
            first,
            Math.min(lastTokenIndex(node) + 1, first + (count || 0))
        );
    };

    /**
     * Gets the first token of the given node's token stream.
     * @param {ASTNode} node The AST node.
     * @param {int} [skip=0] A number of tokens to skip.
     * @returns {Token} An object representing the token.
     */
    api.getFirstToken = function(node, skip) {
        return tokens[starts[node.range[0]] + (skip || 0)];
    };

    /**
     * Gets the last `count` tokens of the given node.
     * @param {ASTNode} node The AST node.
     * @param {int} [count=0] The number of tokens of the node to retrieve.
     * @returns {[Token]} Array of objects representing tokens.
     */
    api.getLastTokens = function(node, count) {
        var last = lastTokenIndex(node) + 1;
        return get(Math.max(starts[node.range[0]], last - (count || 0)), last);
    };

    /**
     * Gets the last token of the given node's token stream.
     * @param {ASTNode} node The AST node.
     * @param {int} [skip=0] A number of tokens to skip.
     * @returns {Token} An object representing the token.
     */
    api.getLastToken = function(node, skip) {
        return tokens[lastTokenIndex(node) - (skip || 0)];
    };

    /**
     * Gets all of the tokens between two non-overlapping nodes.
     * @param {ASTNode} left Node before the desired token range.
     * @param {ASTNode} right Node after the desired token range.
     * @param {int} [padding=0] Number of extra tokens on either side of center.
     * @returns {Token[]} Tokens between left and right plus padding.
     */
    api.getTokensBetween = function(left, right, padding) {
        padding = padding || 0;
        return get(
            lastTokenIndex(left) + 1 - padding,
            starts[right.range[0]] + padding
        );
    };

    return api;
};

},{}],173:[function(require,module,exports){
/**
 * @fileoverview Common utilities.
 */
"use strict";

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

var PLUGIN_NAME_PREFIX = "eslint-plugin-";

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------
/**
 * Merges two objects together and assigns the result to the initial object. Can be used for shallow cloning.
 * @param {Object} target of the cloning operation
 * @param {Object} source object
 * @returns {void}
 */
exports.mixin = function(target, source) {
    Object.keys(source).forEach(function(key) {
        target[key] = source[key];
    });
};

/**
 * Merges two config objects. This will not only add missing keys, but will also modify values to match.
 * @param {Object} base config object
 * @param {Object} custom config object. Overrides in this config object will take priority over base.
 * @returns {Object} merged config object.
 */
exports.mergeConfigs = function mergeConfigs(base, custom) {

    Object.keys(custom).forEach(function (key) {
        var property = custom[key];

        if (key === "plugins") {
            if (!base[key]) {
                base[key] = [];
            }

            property.forEach(function (plugin) {
                // skip duplicates
                if (base[key].indexOf(plugin) === -1) {
                    base[key].push(plugin);
                }
            });
            return;
        }

        if (Array.isArray(base[key]) && !Array.isArray(property) && typeof property === "number") {
            // assume that we are just overriding first attribute
            base[key][0] = custom[key];
            return;
        }

        if (typeof property === "object" && !Array.isArray(property)) {
            // base[key] might not exist, so be careful with recursion here
            base[key] = mergeConfigs(base[key] || {}, custom[key]);
        } else {
            base[key] = custom[key];
        }
    });

    return base;
};

/**
 * Removes the prefix `eslint-plugin-` from a plugin name.
 * @param {string} pluginName The name of the plugin which may has the prefix.
 * @returns {string} The name of the plugin without prefix.
 */
exports.removePluginPrefix = function removePluginPrefix(pluginName) {
    var nameWithoutPrefix;

    if (pluginName.indexOf(PLUGIN_NAME_PREFIX) === 0) {
        nameWithoutPrefix = pluginName.substring(PLUGIN_NAME_PREFIX.length);
    } else {
        nameWithoutPrefix = pluginName;
    }

    return nameWithoutPrefix;
};

exports.PLUGIN_NAME_PREFIX = PLUGIN_NAME_PREFIX;

},{}],174:[function(require,module,exports){
/**
 * @fileoverview Attaches comments to the AST in the spots that ESLint expects.
 *      This logic is based on code from estraverse(https://github.com/estools/estraverse)
 * @author Nicholas C. Zakas
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 */
/*
  Copyright (C) 2012-2013 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*eslint no-underscore-dangle:0 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var estraverse = require("estraverse-fb"),
    deepCopy = require("deepcopy"),
    debug = require("debug");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

debug = debug("eslint:attach-comments");


// based on LLVM libc++ upper_bound / lower_bound
// MIT License
/**
 * Finds the last item in the array that matches a given condition.
 * Based on LLVM libc++ upper_bound/lower_bound (MIT License)
 * @param {Array} array The array to search.
 * @param {Function} func The function that indicates when an item is bounds.
 * @returns {int} The index in the array of the last matching item.
 * @private
 */
function upperBound(array, func) {
    var diff,
        len,
        i,
        current;

    len = array.length;
    i = 0;

    while (len) {
        diff = len >>> 1;
        current = i + diff;

        if (func(array[current])) {
            len = diff;
        } else {
            i = current + 1;
            len -= diff + 1;
        }
    }

    return i;
}

/**
 * Extends a comment's calculate range so that it takes the space between tokens.
 * This makes it easier for the traversal to know which comments belong to which
 * nodes.
 * @param {Object} comment The comment object.
 * @param {Object[]} tokens The array of tokens to search.
 * @returns {Object} The comment object.
 * @private
 */
function extendCommentRange(comment, tokens) {
    var target;

    target = upperBound(tokens, function search(token) {
        return token.range[0] > comment.range[0];
    });


    comment._blockBoundary = (!!tokens[target] && tokens[target].value === "}");

    comment.extendedRange = [comment.range[0], comment.range[1]];

    if (target !== tokens.length) {
        comment.extendedRange[1] = tokens[target].range[0];
    }


    target -= 1;
    if (target >= 0) {
        comment.extendedRange[0] = tokens[target].range[1];
    }

    return comment;
}

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

/**
 * Attaches comments to their appropriate locations in the AST. This follows the
 * attachment scheme as it was in Esprima 1.2.2.
 * @param {ASTNode} tree The root AST node for a program.
 * @param {Object[]} providedComments Array of comments found in the program.
 * @param {Object[]} tokens Array of tokens for the program.
 * @returns {ASTNode} The first argument.
 */
module.exports = function(tree, providedComments, tokens) {

    var controller = new estraverse.Controller(),
        comments = [],
        len,
        i,
        cursor;

    if (!tree.range) {
        throw new Error("attachComments needs range information");
    }

    if (providedComments.length === 0) {
        debug("No comments provided, exiting");
        return tree;
    }

    for (i = 0, len = providedComments.length; i < len; i += 1) {
        comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
    }

    // This is based on John Freeman's implementation.
    cursor = 0;

    controller.traverse(tree, {
        enter: function (node) {
            var comment;

            debug("Evaluating " + node.type + " for leading comments");

            if (node.type === "Program" && node.body.length > 0) {
                debug("Non-empty program, skipping to next node");
                return;
            }

            while (cursor < comments.length) {
                comment = comments[cursor];

                // means the comment is after the node
                if (comment.extendedRange[1] > node.range[0]) {
                    debug("Exiting loop for " + node.type);
                    break;
                }

                if (comment.extendedRange[1] <= node.range[0] && !comment._blockBoundary) {

                    debug("Adding leading comments for " + node.type);

                    /*istanbul ignore else*/
                    if (!node.leadingComments) {
                        node.leadingComments = [];
                    }
                    node.leadingComments.push(comment);
                    comments.splice(cursor, 1);
                } else {
                    debug("Incrementing cursor");
                    cursor += 1;
                }
            }

            // already out of owned node
            if (cursor === comments.length) {
                debug("All comments have been assigned, exiting");
                this.skip();
                return;
            }

            if (comments[cursor].extendedRange[0] > node.range[1]) {
                debug("Skipping the subtree of " + node.type);
                this.skip();
            }
        },
        leave: function(node) {
            debug("LEAVE: " + node.type);
            /*
             * This is really messy. Esprima 1.2.2 always duplicated trailing
             * comments on SwitchCase nodes as leading comments on their next
             * sibling SwitchCase node.
             */
            if (node.type === "SwitchStatement") {

                debug("Special casing SwitchStatement");

                for (i = 1; i < node.cases.length; i++) {
                    if (node.cases[i].leadingComments) {
                        node.cases[i - 1].trailingComments = node.cases[i].leadingComments.concat();
                    }
                }
            }
        }
    });

    debug("Looking for trailing comments");
    cursor = 0;

    if (comments.length) {
        controller.traverse(tree, {
            leave: function (node, parent) {
                var comment;

                debug("Evaluating " + node.type + " for trailing comments");

                while (cursor < comments.length) {
                    debug("Looking at comments");

                    comment = comments[cursor];
                    if (node.range[1] < comment.extendedRange[0]) {
                        debug("Out of range");
                        break;
                    }

                    if (node.range[1] === comment.extendedRange[0]) {
                        debug("Range matches");

                        /*
                         * More special casing for SwitchCase. If a trailing comment
                         * exists for the last child of a SwitchCase, move it to
                         * the SwitchCase itself.
                         */
                        if (parent.type === "SwitchCase" && parent.consequent[parent.consequent.length - 1] === node) {

                            /*istanbul ignore else*/
                            if (!parent.trailingComments) {
                                parent.trailingComments = [];
                            }

                            parent.trailingComments.push(comment);

                        } else {

                            /*istanbul ignore else*/
                            if (!node.trailingComments) {
                                node.trailingComments = [];
                            }

                            node.trailingComments.push(comment);

                        }


                        comments.splice(cursor, 1);
                    } else {
                        debug("Incrementing cursor");
                        cursor += 1;
                    }
                }

                // already out of owned node
                if (cursor === comments.length) {
                    this.break();
                    return;
                }

                if (comments[cursor].extendedRange[0] > node.range[1]) {
                    this.skip();
                }
            }
        });

    }

    // anything that's left over needs to go onto Program
    if (comments.length) {
        if (tree.body.length) {

            var firstChild = tree.body[0];

            // NOTE: Not sure if this is needed, commenting out for now
            /*
             * Special case for SwitchStatement with trailing comments.
             * If there's at least one SwitchCase, attach the comments
             * to the last SwitchCase as trailingComments.
             */
            // if (firstChild.type === "SwitchStatement" && firstChild.cases.length) {
            //     debug("Special casing SwitchStatement trailing comments");
            //     firstChild.cases[firstChild.cases.length - 1].trailingComments = comments;
            // } else if (firstChild.type === "BlockStatement" && firstChild.body.length) {
            //     debug("Special casing BlockStatement trailing comments");
            //     firstChild.body[firstChild.body.length - 1].trailingComments = comments;
            // } else {
            firstChild.trailingComments = comments;

        }
    }

    return tree;
};

},{"debug":9,"deepcopy":12,"estraverse-fb":23}],175:[function(require,module,exports){
/**
 * @fileoverview Determines which features are supported in which ECMAScript environments.
 * @author Nicholas C. Zakas
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 */
/*eslint no-underscore-dangle:0*/

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var assign = require("object-assign"),
    debug = require("debug"),
    nodeTypes = require("../../conf/nodetypes.json");

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

debug = debug("eslint:validator");

var defaultOptions = {
    ecmascript: 5,
    jsx: false
};

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

/**
 * Validates ECMAScript syntax against a known set of language options.
 * @param {Object} options The language options to check against.
 * @constructor
 */
function Validator(options) {

    /**
     * The language options to check against.
     * @type {Object}
     * @private
     */
    this._options = assign(Object.create(defaultOptions), options || {});
}

Validator.prototype = {

    constructor: Validator,

    /**
     * Simple validation for a node that determines whether or not the node
     * is valid in the AST. This doesn't check for unsupported properties,
     * just for unknown node types.
     * @param {ASTNode} node The node to check.
     * @returns {boolean} True if the node is allowed, false if not.
     */
    isValid: function(node) {
        var nodeInfo = nodeTypes[node.type];

        if (nodeInfo && "version" in nodeInfo) {
            if (typeof nodeInfo.version === "number") {
                return nodeInfo.version <= this._options.ecmascript;
            } else if (nodeInfo.version === "jsx") {
                return this._options.jsx;
            }
        }

        return false;
    },

    /**
     * Returns validation information for a given node. The information contains
     * any error message that is appropriate based on not just the node type,
     * but also the properties of the object.
     * @param {ASTNode} node The node to check.
     * @returns {Object} Information about the validity of the node.,
     */
    validate: function(node) {

        var valid = this.isValid(node),
            nodeInfo = nodeTypes[node.type],
            message,
            line,
            column;

        if (valid) {

            // double check for special cases
            if (/^Function/.test(node.type)) {

                // ES6 generators are just FunctionDeclaration/FunctionExpression nodes
                if (this._options.ecmascript < 6 && node.generator) {
                    valid = false;
                    message = "Unexpected token \"*\".";
                    line = node.loc.start.line;
                    column = node.loc.start.column + 8;
                }
            }

        } else {
            message = nodeInfo.message;
            line = node.loc.start.line;
            column = node.loc.start.column;
        }

        return {
            valid: valid,
            message: message,
            line: line,
            column: column
        };
    }

};

module.exports = Validator;

},{"../../conf/nodetypes.json":3,"debug":9,"object-assign":26}]},{},[27])(27)
});