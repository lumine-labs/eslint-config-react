module.exports = {
    // Pure formatting rules used to live here, but Prettier owns formatting and
    // eslint-config-prettier turns every one of them off anyway. Only the
    // non-formatting (code-convention) rules remain.
    rules: {
        // require camelCase names
        camelcase: ["error", { properties: "never", ignoreDestructuring: false }],

        // require a capital letter for constructors
        "new-cap": [
            "error",
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
            },
        ],

        // disallow use of the Array constructor
        "no-array-constructor": "error",

        // disallow certain syntax forms
        // https://eslint.org/docs/rules/no-restricted-syntax
        "no-restricted-syntax": [
            "error",
            {
                selector: "ForInStatement",
                message:
                    "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
            },
            {
                selector: "LabeledStatement",
                message:
                    "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
            },
            {
                selector: "WithStatement",
                message:
                    "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
            },
        ],

        // disallow ternary operators when simpler alternatives exist
        // https://eslint.org/docs/rules/no-unneeded-ternary
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],

        // require one declaration per variable statement
        "one-var": ["error", "never"],

        // require assignment operator shorthand where possible
        // https://eslint.org/docs/rules/operator-assignment
        "operator-assignment": ["error", "always"],

        // disallow Math.pow in favor of the ** operator
        // https://eslint.org/docs/rules/prefer-exponentiation-operator
        "prefer-exponentiation-operator": "warn",

        // prefer object spread over Object.assign
        // https://eslint.org/docs/rules/prefer-object-spread
        "prefer-object-spread": "warn",

        // require function expressions to have a name
        // https://eslint.org/docs/rules/func-names
        "func-names": "warn",

        // require a space after // or /* in a comment
        // (not a Prettier concern — Prettier never reformats comment bodies)
        // https://eslint.org/docs/rules/spaced-comment
        "spaced-comment": [
            "error",
            "always",
            {
                line: {
                    exceptions: ["-", "+"],
                    markers: ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
                },
                block: {
                    exceptions: ["-", "+"],
                    markers: ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
                    balanced: true,
                },
            },
        ],
    },
}
