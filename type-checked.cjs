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
const { typeAwareRules } = require("./rules/typescript-eslint")

module.exports = [
    ...base,

    // Type-aware rule sets (stable "recommended" tier, not the semver-volatile "strict")
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,

    // Turn on type information; our tuned type-aware overrides live in
    // rules/typescript-eslint.js (the `typeAwareRules` export)
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd(),
            },
        },
        rules: typeAwareRules,
    },

    // Plain JS / config files can't be type-checked — disable type-aware rules there
    {
        ...tseslint.configs.disableTypeChecked,
        files: ["**/*.{js,cjs,mjs}"],
    },

    // Keep Prettier last
    prettier,
]
