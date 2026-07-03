module.exports = {
    rules: {
        // enforces return statements in callbacks of array's methods
        // https://eslint.org/docs/rules/array-callback-return
        "array-callback-return": ["error", { allowImplicit: true }],

        // require default case in switch statements
        // https://eslint.org/docs/rules/default-case
        "default-case": ["warn", { commentPattern: "^no default$" }],

        // Enforce default clauses in switch statements to be last
        // https://eslint.org/docs/rules/default-case-last
        "default-case-last": "error",

        // https://eslint.org/docs/rules/default-param-last
        "default-param-last": "error",

        // encourages use of dot notation whenever possible
        // https://eslint.org/docs/rules/dot-notation
        "dot-notation": ["error", { allowKeywords: true }],

        // require the use of === and !==
        // https://eslint.org/docs/rules/eqeqeq
        eqeqeq: ["error", "always", { null: "ignore" }],

        // Require grouped accessor pairs in object literals and classes
        // https://eslint.org/docs/rules/grouped-accessor-pairs
        "grouped-accessor-pairs": "error",

        // enforce a maximum number of classes per file
        // https://eslint.org/docs/rules/max-classes-per-file
        "max-classes-per-file": "off",

        // disallow the use of alert, confirm, and prompt
        // https://eslint.org/docs/rules/no-alert
        "no-alert": "warn",

        // disallow use of arguments.caller or arguments.callee
        // https://eslint.org/docs/rules/no-caller
        "no-caller": "error",

        // Disallow returning value in constructor
        // https://eslint.org/docs/rules/no-constructor-return
        "no-constructor-return": "error",

        // disallow else after a return in an if
        // https://eslint.org/docs/rules/no-else-return
        "no-else-return": ["error", { allowElseIf: false }],

        // disallow empty functions, except for standalone funcs/arrows
        // https://eslint.org/docs/rules/no-empty-function
        "no-empty-function": "warn",

        // disallow empty destructuring patterns
        // https://eslint.org/docs/rules/no-empty-pattern
        "no-empty-pattern": "warn",

        // disallow use of eval()
        // https://eslint.org/docs/rules/no-eval
        "no-eval": "error",

        // disallow adding to native types
        // https://eslint.org/docs/rules/no-extend-native
        "no-extend-native": "error",

        // disallow unnecessary function binding
        // https://eslint.org/docs/rules/no-extra-bind
        "no-extra-bind": "error",

        // disallow use of eval()-like methods
        // https://eslint.org/docs/rules/no-implied-eval
        "no-implied-eval": "error",

        // disallow usage of __iterator__ property
        // https://eslint.org/docs/rules/no-iterator
        "no-iterator": "error",

        // disallow unnecessary nested blocks
        // https://eslint.org/docs/rules/no-lone-blocks
        "no-lone-blocks": "error",

        // disallow creation of functions within loops
        // https://eslint.org/docs/rules/no-loop-func
        "no-loop-func": "warn",

        // disallow use of multiline strings
        // https://eslint.org/docs/rules/no-multi-str
        "no-multi-str": "off",

        // disallow use of new operator when not part of the assignment or comparison
        // https://eslint.org/docs/rules/no-new
        "no-new": "error",

        // disallow use of new operator for Function object
        // https://eslint.org/docs/rules/no-new-func
        "no-new-func": "error",

        // disallows creating new instances of String, Number, and Boolean
        // https://eslint.org/docs/rules/no-new-wrappers
        "no-new-wrappers": "error",

        // Disallow calls to the Object constructor without an argument
        // https://eslint.org/docs/latest/rules/no-object-constructor
        "no-object-constructor": "off",

        // disallow use of octal escape sequences in string literals, such as
        // var foo = 'Copyright \251';
        // https://eslint.org/docs/rules/no-octal-escape
        "no-octal-escape": "error",

        // disallow usage of __proto__ property
        // https://eslint.org/docs/rules/no-proto
        "no-proto": "error",

        // disallow declaring the same variable more than once
        // https://eslint.org/docs/rules/no-redeclare
        "no-redeclare": "warn",

        // disallow certain object properties
        // https://eslint.org/docs/rules/no-restricted-properties
        "no-restricted-properties": [
            "error",
            {
                object: "arguments",
                property: "callee",
                message: "arguments.callee is deprecated",
            },
            {
                object: "global",
                property: "isFinite",
                message: "Please use Number.isFinite instead",
            },
            {
                object: "self",
                property: "isFinite",
                message: "Please use Number.isFinite instead",
            },
            {
                object: "window",
                property: "isFinite",
                message: "Please use Number.isFinite instead",
            },
            {
                object: "global",
                property: "isNaN",
                message: "Please use Number.isNaN instead",
            },
            {
                object: "self",
                property: "isNaN",
                message: "Please use Number.isNaN instead",
            },
            {
                object: "window",
                property: "isNaN",
                message: "Please use Number.isNaN instead",
            },
            {
                property: "__defineGetter__",
                message: "Please use Object.defineProperty instead.",
            },
            {
                property: "__defineSetter__",
                message: "Please use Object.defineProperty instead.",
            },
            {
                object: "Math",
                property: "pow",
                message: "Use the exponentiation operator (**) instead.",
            },
        ],

        // disallow redundant `return await`
        // https://eslint.org/docs/rules/no-return-await
        "no-return-await": "off",

        // disallow use of `javascript:` urls.
        // https://eslint.org/docs/rules/no-script-url
        "no-script-url": "error",

        // disallow comparisons where both sides are exactly the same
        // https://eslint.org/docs/rules/no-self-compare
        "no-self-compare": "error",

        // disallow use of comma operator
        // https://eslint.org/docs/rules/no-sequences
        "no-sequences": "error",

        // restrict what can be thrown as an exception
        // https://eslint.org/docs/rules/no-throw-literal
        "no-throw-literal": "error",

        // disallow usage of expressions in statement position
        // https://eslint.org/docs/rules/no-unused-expressions
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: false,
                allowTernary: false,
                allowTaggedTemplates: false,
            },
        ],

        // disallow useless string concatenation
        // https://eslint.org/docs/rules/no-useless-concat
        "no-useless-concat": "error",

        // disallow redundant return; keywords
        // https://eslint.org/docs/rules/no-useless-return
        "no-useless-return": "warn",

        // require using Error objects as Promise rejection reasons
        // https://eslint.org/docs/rules/prefer-promise-reject-errors
        "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

        // prefer Object.hasOwn() over hasOwnProperty.call() (ES2022)
        // https://eslint.org/docs/rules/prefer-object-has-own
        "prefer-object-has-own": "error",

        // prefer regex literals over new RegExp() where possible
        // https://eslint.org/docs/rules/prefer-regex-literals
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],

        // require use of the second argument for parseInt()
        // https://eslint.org/docs/rules/radix
        radix: "error",

        // require or disallow Yoda conditions
        // https://eslint.org/docs/rules/yoda
        yoda: "error",
    },
}
