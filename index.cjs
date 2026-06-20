"use strict"

// Batteries-included ESLint 9 (flat config) for TypeScript — frontend and backend.
// Everything (eslint itself + every plugin) is bundled as a dependency of this
// package, so consuming projects only ever do:
//
//   // eslint.config.js
//   import lumelabs from "@lumelabs/eslint-config"
//   export default lumelabs
//
// Authored as CommonJS so it can be require()'d or import()'ed from either a
// CJS or ESM eslint.config file.

const js = require("@eslint/js")
const tseslint = require("typescript-eslint")
const react = require("eslint-plugin-react")
const reactHooks = require("eslint-plugin-react-hooks")
const jsxA11y = require("eslint-plugin-jsx-a11y")
const importPlugin = require("eslint-plugin-import")
const prettier = require("eslint-config-prettier")
const globals = require("globals")

// Each rule module exports a plain { rules, settings? } object. Plugin wiring and
// shared presets are applied below; these modules only carry our own overrides.
const bestPractices = require("./rules/best-practices")
const errors = require("./rules/errors")
const es6 = require("./rules/es6")
const variables = require("./rules/variables")
const style = require("./rules/style")
const strict = require("./rules/strict")
const typescriptRules = require("./rules/typescript-eslint")
const imports = require("./rules/imports")
const reactRules = require("./rules/react")
const reactHooksRules = require("./rules/react-hooks")
const reactA11yRules = require("./rules/react-a11y")

const customRules = {
    ...bestPractices.rules,
    ...errors.rules,
    ...es6.rules,
    ...variables.rules,
    ...style.rules,
    ...strict.rules,
    ...typescriptRules.rules,
    ...imports.rules,
    ...reactRules.rules,
    ...reactHooksRules.rules,
    ...reactA11yRules.rules,
}

module.exports = [
    // Never linted
    {
        ignores: ["**/*.stories.*", "**/*.cjs"],
    },

    // Base presets
    js.configs.recommended,
    ...tseslint.configs.recommended,
    react.configs.flat.recommended,
    jsxA11y.flatConfigs.recommended,
    importPlugin.flatConfigs.recommended,

    // Language setup, react-hooks plugin, shared settings and all our overrides
    {
        plugins: {
            "react-hooks": reactHooks,
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        settings: {
            ...imports.settings,
            ...reactRules.settings,
        },
        rules: customRules,
    },

    // Test files: expose Jest globals and relax a couple of rules
    {
        files: ["**/*.{test,spec}.{js,jsx,ts,tsx}", "**/tests/**"],
        languageOptions: {
            globals: { ...globals.jest },
        },
        rules: {
            "import/no-extraneous-dependencies": "off",
            "@typescript-eslint/no-explicit-any": "off",
        },
    },

    // MUST be last — turns off every rule that would fight Prettier
    prettier,
]
