module.exports = {
    // Plugin + preset wiring lives in index.cjs (tseslint.configs.recommended).
    // Type-AWARE rules live in the /type-checked entry, not here, so the base config
    // works without a configured tsconfig/projectService.
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

        // --- Modern additions (syntactic & safe; type-aware variants are in /type-checked) ---

        // Enforce `import type` for type-only imports (tree-shaking + clarity)
        "@typescript-eslint/consistent-type-imports": [
            "error",
            { prefer: "type-imports", fixStyle: "inline-type-imports" },
        ],

        // Ensure a type-only import never triggers a runtime side-effect import
        "@typescript-eslint/no-import-type-side-effects": "error",
    },
}
