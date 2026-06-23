module.exports = {
    // Plugin wiring lives in index.cjs. We intentionally do NOT extend
    // "plugin:react-hooks/recommended": as of eslint-plugin-react-hooks v7 that preset
    // enables the entire React Compiler ruleset at "error". We enumerate every rule
    // explicitly so a plugin upgrade can never silently turn new ones on.
    rules: {
        // --- Core Hooks rules ---

        // Hooks must be called at the top level, unconditionally
        // https://react.dev/reference/rules/rules-of-hooks
        "react-hooks/rules-of-hooks": "error",

        // Verify the dependency list of useEffect/useCallback/useMemo/etc.
        // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
        "react-hooks/exhaustive-deps": "warn",

        // --- Rules of React (from the React Compiler ruleset) ---
        // Kept as warnings: each catches a real "you're probably holding it wrong"
        // case, but each also has legitimate exceptions, so we notify instead of block.

        // Calling setState synchronously inside an effect (cascading re-renders).
        // Valid in some cases (e.g. deriving state), so warn rather than error.
        "react-hooks/set-state-in-effect": "warn",

        // Calling setState during render (infinite-loop risk). Valid only for the
        // documented "adjust state while rendering on prop change" pattern, so warn.
        "react-hooks/set-state-in-render": "warn",

        // Render must be pure — no side effects during render
        "react-hooks/purity": "warn",

        // Do not mutate props, state, hook arguments, or values returned by hooks
        "react-hooks/immutability": "warn",

        // Do not read or write ref.current during render
        "react-hooks/refs": "warn",

        // Do not read or mutate global/module state during render
        "react-hooks/globals": "warn",

        // Correct useMemo usage
        "react-hooks/use-memo": "warn",

        // Components/hooks should be defined statically, not recreated on each render
        // (overlaps with react/no-unstable-nested-components)
        "react-hooks/static-components": "warn",

        // Do not define components or hooks inside factory functions
        "react-hooks/component-hook-factories": "warn",

        // Correct error-boundary usage
        "react-hooks/error-boundaries": "warn",

        // --- React Compiler infrastructure rules ---
        // Off: these only mean anything once you actually adopt the React Compiler.
        // Turn them on per-project if/when you enable the compiler.

        // Existing useMemo/useCallback must stay valid so the compiler can preserve them
        "react-hooks/preserve-manual-memoization": "off",

        // React Compiler runtime feature-gating config
        "react-hooks/gating": "off",

        // Validates the React Compiler config object
        "react-hooks/config": "off",

        // Warns about syntax the compiler cannot handle
        "react-hooks/unsupported-syntax": "off",

        // Warns about libraries that are incompatible with the compiler
        "react-hooks/incompatible-library": "off",
    },
}
