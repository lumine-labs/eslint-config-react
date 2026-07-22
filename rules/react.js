module.exports = {
    // Plugin + preset wiring lives in index.cjs (react.configs.flat.recommended +
    // jsx-runtime). This module carries our overrides only.
    //
    // Scope: modern React — function components, hooks, automatic JSX runtime, React 19.
    // All PropTypes rules and all class-component / lifecycle rules have been removed:
    // they're dead in a TypeScript function-component codebase (PropTypes was dropped
    // from React 19; we type props instead).
    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        // --- Correctness ---

        // Prevent missing key prop on list items
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        "react/jsx-key": ["error", { warnOnDuplicates: true }],

        // Prevent duplicate props in JSX
        "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],

        // Disallow undeclared variables in JSX
        "react/jsx-no-undef": "error",

        // Prevent variables used in JSX from being marked as unused
        "react/jsx-uses-vars": "error",

        // Prevent passing children both as a prop and as JSX children
        "react/no-children-prop": "error",

        // Prevent `dangerouslySetInnerHTML` together with children
        "react/no-danger-with-children": "error",

        // Prevent usage of deprecated APIs
        "react/no-deprecated": "error",

        // Prevent usage of unknown DOM properties
        "react/no-unknown-property": "error",

        // Prevent invalid characters from appearing in markup
        "react/no-unescaped-entities": "error",

        // Prevent string refs (removed in React 19)
        "react/no-string-refs": "error",

        // Warn against findDOMNode (removed in React 19)
        "react/no-find-dom-node": "error",

        // Disallow using ReactDOM.render's return value
        "react/no-render-return-value": "error",

        // Prevent void DOM elements (img, br, …) from receiving children
        "react/void-dom-elements-no-children": "error",

        // Prevent React.Fragment/namespaced element misuse
        "react/no-namespace": "error",

        // Prevent invalid HTML attribute values (e.g. on <a rel>)
        "react/no-invalid-html-attribute": "error",

        // Prevent `this` in stateless function components
        "react/no-this-in-sfc": "error",

        // Prevent comment strings from being rendered as text
        "react/jsx-no-comment-textnodes": "error",

        // Prevent style={"..."} — must be an object
        "react/style-prop-object": "error",

        // --- Performance / hooks-era footguns ---

        // Prevent creating new components on every render (drops child state)
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
        "react/no-unstable-nested-components": ["error", { allowAsProps: true }],

        // Prevent unstable values (new objects/arrays/fns) as Context values
        "react/jsx-no-constructed-context-values": "warn",

        // Inline object/array literals as default props break memoization
        "react/no-object-type-as-default-prop": "warn",

        // Avoid array indexes as keys
        "react/no-array-index-key": "error",

        // --- Safety / a11y-adjacent ---

        // Disallow target="_blank" without rel=noreferrer (reverse-tabnabbing)
        "react/jsx-no-target-blank": ["error", { enforceDynamicLinks: "always" }],

        // Disallow `javascript:` URLs
        "react/jsx-no-script-url": ["error", [{ name: "Link", props: ["to"] }]],

        // Disallow `dangerouslySetInnerHTML`
        "react/no-danger": "warn",

        // Require an explicit type on <button> (defaults to "submit")
        "react/button-has-type": "warn",

        // Require sandbox attribute on <iframe>
        "react/iframe-missing-sandbox": "warn",

        // Prevent `0`/`NaN` leaking into the DOM from `cond && <X/>`
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
        "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],

        // --- Style / consistency (non-formatting; Prettier-safe) ---

        // Enforce PascalCase for user-defined components
        "react/jsx-pascal-case": "warn",

        // Enforce boolean prop shorthand (`<X disabled />` not `disabled={true}`)
        "react/jsx-boolean-value": ["error", "never", { always: [] }],

        // Omit unnecessary curly braces in JSX
        "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],

        // Prefer `<>` fragment syntax
        "react/jsx-fragments": ["error", "syntax"],

        // Disallow useless fragments
        "react/jsx-no-useless-fragment": "error",

        // Self-close components without children
        "react/self-closing-comp": "error",

        // Enforce destructuring-symmetric useState naming ([x, setX])
        "react/hook-use-state": "off",

        // Disallow duplicate prop spreads ({...a} {...b} silently clobbers)
        "react/jsx-props-no-spread-multi": "error",

        // Only .jsx/.tsx files may contain JSX
        "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],

        // .bind() / inline function declarations in JSX props (arrows allowed)
        "react/jsx-no-bind": [
            "error",
            {
                ignoreRefs: true,
                allowArrowFunctions: true,
                allowFunctions: false,
                allowBind: false,
                ignoreDOMComponents: true,
            },
        ],

        // Allow literal strings in JSX (off — i18n handles this if needed)
        "react/jsx-no-literals": ["off", { noStrings: true }],
    },
}
