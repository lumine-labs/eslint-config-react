"use strict"

// OPT-IN type-aware superset of the base config.
//
//   // eslint.config.js
//   import lumelabs from "@lumelabs/eslint-config/type-checked"
//   export default lumelabs
//
// Adds the high-value type-aware rules (no-floating-promises, no-misused-promises,
// await-thenable, switch-exhaustiveness-check, …). Requires the consuming project
// to have a real tsconfig — `projectService` auto-discovers the nearest one.
// Plain JS/config files have type-checking turned back off so they never crash.

const tseslint = require("typescript-eslint")
const prettier = require("eslint-config-prettier")
const base = require("./index.cjs")

module.exports = [
    ...base,

    // Type-aware rule sets (stable "recommended" tier, not the semver-volatile "strict")
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,

    // Turn on type information + tune the noisier type-aware rules
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd(),
            },
        },
        rules: {
            // async handlers passed to JSX props (onClick={async () => …}) are fine
            "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: { attributes: false } }],
            // logging / string-building with numbers & booleans is normal
            "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true, allowBoolean: true }],
            // exhaustiveness for discriminated unions (reducers, message handlers)
            "@typescript-eslint/switch-exhaustiveness-check": "error",
            // pairs with consistent-type-imports from the base config
            "@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: true }],
            // better stack traces; replaces the deprecated core no-return-await
            "@typescript-eslint/return-await": ["error", "in-try-catch"],
            // too noisy unless the consumer enables `noUncheckedIndexedAccess` in tsconfig
            "@typescript-eslint/no-unnecessary-condition": "off",
        },
    },

    // Plain JS / config files can't be type-checked — disable type-aware rules there
    {
        ...tseslint.configs.disableTypeChecked,
        files: ["**/*.{js,cjs,mjs}"],
    },

    // Keep Prettier last
    prettier,
]
