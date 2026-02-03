module.exports = {
    plugins: ["react-hooks"],

    extends: ["plugin:react-hooks/recommended"],

    rules: {
        // Verify the list of the dependencies for Hooks like useEffect and similar
        // https://github.com/facebook/react/blob/1204c789776cb01fbaf3e9f032e7e2ba85a44137/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
        "react-hooks/exhaustive-deps": "warn",

        "react-hooks/immutability": "off",
    },
}
