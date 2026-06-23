module.exports = {
    // Formatting rules (arrow-spacing, generator-star-spacing, template-curly-spacing,
    // rest-spread-spacing, yield-star-spacing, arrow-parens, no-confusing-arrow) were
    // removed — Prettier owns formatting. Deprecated rules (no-new-symbol, prefer-reflect)
    // were dropped.
    rules: {
        // enforce no braces where they can be omitted (off — stylistic preference)
        "arrow-body-style": "off",

        // verify super() calls in constructors
        "constructor-super": "error",

        // disallow modifying variables of class declarations
        "no-class-assign": "error",

        // disallow modifying const variables
        "no-const-assign": "error",

        // disallow duplicate class members
        "no-dupe-class-members": "error",

        // disallow importing the same module twice (import-x/no-duplicates also covers this)
        "no-duplicate-imports": "off",

        // disallow specified names in exports
        "no-restricted-exports": [
            "error",
            {
                restrictedNamedExports: [
                    "default", // use `export default` syntax instead (where allowed)
                    "then", // breaks dynamic import()
                ],
            },
        ],

        // disallow specific imports (off — configure per project)
        "no-restricted-imports": ["off", { paths: [], patterns: [] }],

        // disallow this/super before super()
        "no-this-before-super": "error",

        // disallow useless computed property keys
        "no-useless-computed-key": "error",

        // disallow unnecessary constructors (off)
        "no-useless-constructor": "off",

        // disallow renaming import/export/destructured assignment to the same name
        "no-useless-rename": ["error", { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }],

        // require let/const instead of var
        "no-var": "error",

        // require object literal shorthand
        "object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],

        // prefer arrow functions as callbacks
        "prefer-arrow-callback": ["error", { allowNamedFunctions: false, allowUnboundThis: true }],

        // prefer const for never-reassigned bindings
        "prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: true }],

        // prefer destructuring (off — too aggressive as a hard rule)
        "prefer-destructuring": "off",

        // prefer binary/octal/hex literals over parseInt()
        "prefer-numeric-literals": "error",

        // use rest parameters instead of arguments
        "prefer-rest-params": "error",

        // use spread instead of .apply()
        "prefer-spread": "error",

        // prefer template literals over string concatenation
        "prefer-template": "error",

        // require yield in generator functions
        "require-yield": "error",

        // import sorting (off — delegate to a dedicated plugin/editor if desired)
        "sort-imports": "off",

        // require a description for Symbol()
        "symbol-description": "error",
    },
}
