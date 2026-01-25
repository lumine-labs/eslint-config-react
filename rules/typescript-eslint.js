module.exports = {
    plugins: ["@typescript-eslint"],

    extends: ["plugin:@typescript-eslint/recommended"],

    rules: {
        // TypeScript
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-shadow": ["warn"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unsafe-function-type": "off",
        "@typescript-eslint/no-empty-object-type": "off",
        "@typescript-eslint/no-wrapper-object-types": "warn",
        // "@typescript-eslint/consistent-type-imports": [
        //     "error",
        //     { prefer: "type-imports", fixStyle: "inline-type-imports" },
        // ],
        // "@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: true }],
    },
}
