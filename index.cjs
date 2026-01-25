module.exports = {
    extends: [
        "eslint:recommended",

        // TypeScript rules
        require.resolve("./rules/typescript-eslint"),

        // Base JS rules
        require.resolve("./rules/best-practices"),
        require.resolve("./rules/errors"),
        require.resolve("./rules/node"),
        require.resolve("./rules/style"),
        require.resolve("./rules/variables"),
        require.resolve("./rules/es6"),
        require.resolve("./rules/imports"),
        require.resolve("./rules/strict"),

        // React rules
        require.resolve("./rules/react"),
        require.resolve("./rules/react-hooks"),
        require.resolve("./rules/react-a11y"),

        "prettier",

        // Override. Use only if rules are not applied within "rules/*"
        require.resolve("./override"),
    ],

    ignorePatterns: ["**/node_modules/**", "*.stories.*", "**/*.cjs"],
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        // Import
        // "import-helpers/order-imports": "off",
        // "import/no-cycle": "warn",
    },
    overrides: [
        // Test files
        {
            files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx", "**/tests/**"],
            rules: {
                "import/no-extraneous-dependencies": "off",
                "@typescript-eslint/no-explicit-any": "off",
            },
        },
    ],
}
