module.exports = {
    // Plugin wiring + resolver settings live in index.cjs (eslint-plugin-import-x,
    // import-x/resolver-next). Pure resolution rules (no-unresolved, named, default,
    // namespace) are intentionally omitted — TypeScript already does that, faster and
    // more accurately.
    rules: {
        // --- Correctness ---

        // Disallow invalid exports, e.g. multiple defaults
        "import-x/export": "error",

        // Disallow a default import name that matches a named export
        "import-x/no-named-as-default": "error",
        "import-x/no-named-as-default-member": "off",

        // Forbid mutable exports (`export let`)
        "import-x/no-mutable-exports": "error",

        // Disallow AMD require/define
        "import-x/no-amd": "error",

        // Forbid a module from importing itself
        "import-x/no-self-import": "error",

        // Forbid cyclic dependencies — warn, since they're common and often
        // unavoidable in TypeScript/backend code (e.g. type-only cycles)
        "import-x/no-cycle": ["warn", { maxDepth: "∞" }],

        // Forbid importing another package via a relative path
        "import-x/no-relative-packages": "error",

        // Forbid useless path segments (./foo/../bar)
        "import-x/no-useless-path-segments": ["error", { commonjs: true }],

        // Forbid absolute import paths
        "import-x/no-absolute-path": "error",

        // Forbid require() with an expression
        "import-x/no-dynamic-require": "error",

        // Forbid webpack loader syntax in imports
        "import-x/no-webpack-loader-syntax": "error",

        // Forbid mixing ESM imports with CommonJS module.exports
        "import-x/no-import-module-exports": ["error", { exceptions: [] }],

        // --- Style / hygiene ---

        // Imports must appear before other statements
        "import-x/first": "error",

        // No duplicate imports from the same module
        "import-x/no-duplicates": "error",

        // Require a newline after the import block
        "import-x/newline-after-import": "error",

        // Disallow renaming a default import to a named export's name
        "import-x/no-named-default": "error",

        // Consistent (extensionless) file extensions in import paths
        "import-x/extensions": [
            "error",
            "ignorePackages",
            { js: "never", mjs: "never", jsx: "never", ts: "never", tsx: "never" },
        ],

        // Enforce named exports; forbid default exports (project-wide convention).
        // `*.cjs` is ignored globally; frameworks that require default exports
        // (e.g. Next.js pages) can override this for the relevant paths.
        "import-x/no-default-export": "error",

        // Prefer inline type specifiers — replaced with @typescript-eslint/consistent-type-imports
        "import-x/consistent-type-specifier-style": "off",

        // Disallow empty named import blocks: `import {} from "x"`
        "import-x/no-empty-named-blocks": "error",
    },
}
