# @lumelabs/eslint-config

> ⚠️ **Experimental / Internal Use**
>
> Primarily intended for personal and internal use. It may change, break, or be
> restructured at any time. Don't rely on it for public projects unless you're
> prepared to maintain your own fork. Issues/feature requests may be closed without response.

Opinionated, **batteries-included ESLint 9 (flat config)** for **JavaScript and TypeScript**
projects — both **frontend (React)** and **backend**. Designed for modern setups using
Vite/Webpack and Prettier. It prioritizes practical correctness over ideology and avoids
rules that create noise or force unnatural code.

Two entry points, matching the project you're linting:
- **`@lumelabs/eslint-config`** — plain JavaScript (+ React/a11y/import). Zero setup.
- **`@lumelabs/eslint-config/typescript`** — everything above, plus the full TypeScript
  rule set (syntactic *and* type-aware). Requires a real `tsconfig.json`.

---

## Features

- **ESLint 9 flat config** (`eslint.config.js`)
- **Batteries included** — `eslint` itself and every plugin are bundled as dependencies.
  Install one package; you don't add `eslint` or any plugin yourself.
- **Two clear entry points** — plain JS by default, or the full TypeScript rule set
  (including type-aware rules like `no-misused-promises`, `switch-exhaustiveness-check`)
  via `/typescript`. No mixing syntactic and type-aware TS rules across configs to reason about.
- React + React Hooks (incl. the React Compiler rules, tuned to warn) + JSX a11y
- `eslint-plugin-import-x` rules (named-exports enforced; default exports disallowed)
- **Prettier-compatible** — all formatting rules are turned off; Prettier owns formatting
- Jest globals auto-enabled for test files only

---

## Requirements

- **ESLint 9** — bundled with this package; do **not** install `eslint` separately in your project.
- **TypeScript** (only if using the `/typescript` entry) — provided by your project (declared
  as an optional peer dependency), with a real `tsconfig.json` in the project.
- Node.js 18.18+ / 20+ (per ESLint 9).

---

## Installation

```bash
npm install --save-dev @lumelabs/eslint-config
```

That's it — no other ESLint packages to install.

---

## Usage

Create `eslint.config.js` (ESM) in your project root:

```js
import lumelabs from "@lumelabs/eslint-config"

export default lumelabs
```

Or `eslint.config.cjs` (CommonJS):

```js
const lumelabs = require("@lumelabs/eslint-config")

module.exports = lumelabs
```

### TypeScript projects

The default export (`.`) is **plain JavaScript** — no TypeScript parser or plugin at all —
so it works with zero setup. For TypeScript projects, use the `/typescript` entry instead.
It layers on the **full** typescript-eslint rule set — syntactic rules (`consistent-type-imports`,
`no-unused-vars`, …) and type-aware rules (`no-misused-promises`, `switch-exhaustiveness-check`,
`await-thenable`, …) together, as one config. It requires your project to have a real
`tsconfig.json` (auto-discovered via `projectService`):

```js
import lumelabs from "@lumelabs/eslint-config/typescript"

export default lumelabs
```

Plain JS/config files within a TypeScript project automatically have type-checking turned
back off, so they never error.

### Overriding rules per project

The export is a flat-config array — spread it and append your own config objects:

```js
import lumelabs from "@lumelabs/eslint-config"

export default [
    ...lumelabs,
    {
        rules: {
            // e.g. relax the named-exports rule for a framework that needs default exports
            "import-x/no-default-export": "off",
        },
    },
]
```

---

## Notes

- **Named exports are enforced** (`import-x/no-default-export`). `*.cjs` files are ignored, so
  CommonJS config files are unaffected. For frameworks that require default exports
  (e.g. Next.js pages), override the rule for the relevant paths as shown above.
- **`*.stories.*` and `*.cjs` are not linted** by default.
- **React Compiler rules** (`react-hooks/*`) are enabled as **warnings** (not errors), so they
  nudge rather than block. The compiler-infrastructure rules are off until you adopt the
  React Compiler — flip them on per-project when you do.
- Bumping ESLint (e.g. to v10) is centralized here: update this package and republish, and
  every project follows on its next install.
