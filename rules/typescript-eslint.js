module.exports = {
    // ── Syntactic rules — consumed by the BASE config (index.cjs) ──
    // No type information needed, so these run in any project without a tsconfig.
    // (Plugin + the non-type-checked `recommended` preset are wired in index.cjs.)
    rules: {
        // --- Loosen a few recommended rules to taste ---
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-object-type": "off",
        "@typescript-eslint/no-unsafe-function-type": "off",
        "@typescript-eslint/no-wrapper-object-types": "warn",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/naming-convention": "off",

        // Allow require() — hybrid FE/BE; some backend/config interop still uses it
        "@typescript-eslint/no-require-imports": "off",

        // Unused vars as error, but allow intentional _-prefixed ones
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],

        // Use-before-define, but allow hoisted function declarations
        "@typescript-eslint/no-use-before-define": ["error", { functions: false }],

        // Variable shadowing as a warning
        "@typescript-eslint/no-shadow": "warn",

        // Enforce `import type` for type-only imports (tree-shaking + clarity)
        "@typescript-eslint/consistent-type-imports": [
            "error",
            { prefer: "type-imports", fixStyle: "inline-type-imports" },
        ],

        // Ensure a type-only import never triggers a runtime side-effect import
        "@typescript-eslint/no-import-type-side-effects": "error",
    },

    // ── Type-AWARE rules — consumed ONLY by the /type-checked entry (type-checked.cjs) ──
    // These require type information (projectService). Enabling them in the base config,
    // which has no tsconfig wired up, would make ESLint throw on every file — which is
    // exactly why they live in a separate export, not in `rules` above.
    typeAwareRules: {
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

        // --- Disabled by preference ---

        // unhandled promises / forgotten awaits — disabled by preference
        "@typescript-eslint/no-floating-promises": "off",

        // prefer ?? over || — disabled by preference
        "@typescript-eslint/prefer-nullish-coalescing": "off",
    },
}
