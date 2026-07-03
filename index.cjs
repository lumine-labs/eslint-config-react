"use strict"

// Batteries-included ESLint 9 (flat config) for TypeScript — frontend and backend.
// Everything (eslint itself + every plugin) is bundled as a dependency of this
// package, so consuming projects only ever do:
//
//   // eslint.config.js
//   import lumelabs from "@lumelabs/eslint-config"
//   export default lumelabs
//
// This entry is plain JavaScript only — no TypeScript parser/plugin at all — so it
// works in any project with zero setup. For TypeScript projects, use:
//
//   import lumelabs from "@lumelabs/eslint-config/typescript"
//
// Authored as CommonJS so it can be require()'d or import()'ed from either a
// CJS or ESM eslint.config file.

const js = require("@eslint/js")
const react = require("eslint-plugin-react")
const reactHooks = require("eslint-plugin-react-hooks")
const jsxA11y = require("eslint-plugin-jsx-a11y")
const importX = require("eslint-plugin-import-x")
const { createTypeScriptImportResolver } = require("eslint-import-resolver-typescript")
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
    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"], // automatic JSX runtime — disables react-in-jsx-scope + jsx-uses-react
    jsxA11y.flatConfigs.recommended,

    // Language setup, plugins, shared settings and all our overrides
    {
        plugins: {
            "react-hooks": reactHooks,
            "import-x": importX,
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
            // TypeScript resolves first (with type defs), then Node — import-x's modern resolver API
            "import-x/resolver-next": [
                createTypeScriptImportResolver({ alwaysTryTypes: true }),
                importX.createNodeResolver(),
            ],
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
            "import-x/no-extraneous-dependencies": "off",
        },
    },

    // MUST be last — turns off every rule that would fight Prettier
    prettier,
]
