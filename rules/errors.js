module.exports = {
    rules: {
        // Enforces that a return statement is present in property getters
        // https://eslint.org/docs/rules/getter-return
        "getter-return": ["error", { allowImplicit: true }],

        // disallow assignment in conditional expressions
        // https://eslint.org/docs/rules/no-cond-assign
        "no-cond-assign": ["error", "always"],

        // also flag optional chaining mixed with arithmetic (a?.b + c)
        // https://eslint.org/docs/rules/no-unsafe-optional-chaining
        "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],

        // require a string literal as the typeof comparand
        // https://eslint.org/docs/rules/valid-typeof
        "valid-typeof": ["error", { requireStringLiterals: true }],

        // constant conditions are usually mid-development, not shipped bugs
        // https://eslint.org/docs/rules/no-constant-condition
        "no-constant-condition": "warn",

        // empty blocks are often intentional (placeholder catch, etc.)
        // https://eslint.org/docs/rules/no-empty
        "no-empty": "warn",

        // a serial N+1 await in a loop is a real perf footgun; sequential awaits are
        // sometimes intentional, so warn rather than block
        // https://eslint.org/docs/rules/no-await-in-loop
        "no-await-in-loop": "warn",

        // discourage console (allow warn/error); backend logging is common, so warn
        // https://eslint.org/docs/rules/no-console
        "no-console": ["warn", { allow: ["warn", "error"] }],

        // disallow returning a value from a Promise executor
        // https://eslint.org/docs/rules/no-promise-executor-return
        "no-promise-executor-return": "warn",

        // catch `${x}` written inside a normal (non-template) string
        // https://eslint.org/docs/rules/no-template-curly-in-string
        "no-template-curly-in-string": "error",

        // disallow loops whose body can only ever run once
        // https://eslint.org/docs/rules/no-unreachable-loop
        "no-unreachable-loop": ["error", { ignore: [] }],

        // disallow variables that are read but never assigned
        // https://eslint.org/docs/rules/no-unassigned-vars
        "no-unassigned-vars": "error",

        // disallow assignments whose value is never read (dead stores)
        // https://eslint.org/docs/rules/no-useless-assignment
        "no-useless-assignment": "error",

        // preserve the original error via `cause` when re-throwing inside catch
        // https://eslint.org/docs/rules/preserve-caught-error
        "preserve-caught-error": "warn",
    },
}
