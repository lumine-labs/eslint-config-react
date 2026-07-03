"use strict"

// TypeScript superset of the base config — for TypeScript projects.
//
//   // eslint.config.js
//   import lumelabs from "@lumelabs/eslint-config/typescript"
//   export default lumelabs
//
// Layers the full typescript-eslint rule set (syntactic + type-aware) on top of the
// base JS/React/a11y/import config. Requires the consuming project to have a real
// tsconfig — `projectService` auto-discovers the nearest one. Plain JS/config files
// have type-checking turned back off so they never crash.

const tseslint = require("typescript-eslint")
const prettier = require("eslint-config-prettier")
const globals = require("globals")
const base = require("./index.cjs")
const typescriptRules = require("./rules/typescript-eslint")

module.exports = [
    ...base,

    // Type-checked presets (each already includes its non-type-checked counterpart's rules)
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,

    // Turn on type information; our tuned overrides live in rules/typescript-eslint.js
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd(),
            },
        },
        rules: typescriptRules.rules,
    },

    // Plain JS / config files can't be type-checked — disable type-aware rules there
    {
        ...tseslint.configs.disableTypeChecked,
        files: ["**/*.{js,cjs,mjs}"],
    },

    // Test files: expose Jest globals and relax a couple of rules
    {
        files: ["**/*.{test,spec}.{js,jsx,ts,tsx}", "**/tests/**"],
        languageOptions: {
            globals: { ...globals.jest },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
        },
    },

    // Keep Prettier last
    prettier,
]
