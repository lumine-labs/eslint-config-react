module.exports = {
    // All @typescript-eslint rule overrides — both syntactic and type-aware — in one
    // place. Consumed only by the `typescript.cjs` entry, which is TypeScript-only and
    // always has `projectService` wired up, so there's no need to split these by whether
    // they require type information.
    rules: {
        // https://typescript-eslint.io/rules/no-explicit-any/
        "@typescript-eslint/no-explicit-any": "warn",

        // https://typescript-eslint.io/rules/no-non-null-assertion/
        "@typescript-eslint/no-non-null-assertion": "off",

        // https://typescript-eslint.io/rules/no-empty-object-type/
        "@typescript-eslint/no-empty-object-type": "off",

        // https://typescript-eslint.io/rules/no-unsafe-function-type/
        "@typescript-eslint/no-unsafe-function-type": "error",

        // https://typescript-eslint.io/rules/no-wrapper-object-types/
        "@typescript-eslint/no-wrapper-object-types": "error",

        // https://typescript-eslint.io/rules/ban-ts-comment/
        "@typescript-eslint/ban-ts-comment": "off",

        // https://typescript-eslint.io/rules/explicit-function-return-type/
        "@typescript-eslint/explicit-function-return-type": "off",

        // https://typescript-eslint.io/rules/explicit-module-boundary-types/
        "@typescript-eslint/explicit-module-boundary-types": "off",

        // https://typescript-eslint.io/rules/explicit-member-accessibility/
        "@typescript-eslint/explicit-member-accessibility": "off",

        // https://typescript-eslint.io/rules/naming-convention/
        "@typescript-eslint/naming-convention": "off",

        // https://typescript-eslint.io/rules/no-require-imports/
        // Allow require() — hybrid FE/BE; some backend/config interop still uses it
        "@typescript-eslint/no-require-imports": "off",

        // https://typescript-eslint.io/rules/no-unused-vars/
        // Unused vars as error, but allow intentional _-prefixed ones
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],

        // https://typescript-eslint.io/rules/no-use-before-define/
        // Use-before-define, but allow hoisted function declarations
        "@typescript-eslint/no-use-before-define": ["error", { functions: false }],

        // https://typescript-eslint.io/rules/no-shadow/
        // Variable shadowing as a warning
        "@typescript-eslint/no-shadow": "warn",

        // https://typescript-eslint.io/rules/consistent-type-imports/
        // Enforce `import type` for type-only imports (tree-shaking + clarity)
        "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],

        // https://typescript-eslint.io/rules/no-import-type-side-effects/
        // Ensure a type-only import never triggers a runtime side-effect import
        "@typescript-eslint/no-import-type-side-effects": "error",

        // https://typescript-eslint.io/rules/no-misused-promises/
        // async handlers passed to JSX props (onClick={async () => …}) are fine
        "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: { attributes: false } }],

        // https://typescript-eslint.io/rules/restrict-template-expressions/
        // logging / string-building with numbers & booleans is normal
        "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true, allowBoolean: true }],

        // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
        // exhaustiveness for discriminated unions (reducers, message handlers)
        "@typescript-eslint/switch-exhaustiveness-check": ["error", { considerDefaultExhaustiveForUnions: true }],

        // https://typescript-eslint.io/rules/consistent-type-exports/
        // pairs with consistent-type-imports above
        "@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: true }],

        // https://typescript-eslint.io/rules/return-await/
        // better stack traces; replaces the deprecated core no-return-await
        "@typescript-eslint/return-await": ["error", "in-try-catch"],

        // https://typescript-eslint.io/rules/no-unnecessary-condition/
        // too noisy unless the consumer enables `noUncheckedIndexedAccess` in tsconfig
        "@typescript-eslint/no-unnecessary-condition": "off",

        // https://typescript-eslint.io/rules/no-floating-promises/
        // unhandled promises / forgotten awaits — disabled by preference
        "@typescript-eslint/no-floating-promises": "off",

        // https://typescript-eslint.io/rules/prefer-nullish-coalescing/
        // prefer ?? over || — disabled by preference
        "@typescript-eslint/prefer-nullish-coalescing": "off",

        // https://typescript-eslint.io/rules/consistent-type-definitions/
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],

        // https://typescript-eslint.io/rules/no-unsafe-member-access/
        "@typescript-eslint/no-unsafe-member-access": "off",

        // https://typescript-eslint.io/rules/no-unsafe-assignment/
        "@typescript-eslint/no-unsafe-assignment": "off",
    },
}
