# @lumelabs/eslint-config-react

> ⚠️ **Experimental / Internal Use Only**
>
> This configuration is primarily intended for personal and internal use.
> It may change, break, or be restructured at any time without notice.
>
> **Do not rely on this package for production or public projects unless you are prepared to maintain your own fork.**
>
> **Issues and feature requests may be closed without response.**

Opinionated ESLint configuration for **TypeScript + React** projects.

This preset is designed for modern setups using TypeScript, React, Vite/Webpack, and Prettier.
It prioritizes practical correctness over strict ideology and avoids rules that tend to create noise
or force unnatural code patterns.

---

## Features

- ESLint **8.x** only (fully bundled, no peer dependency juggling)
- TypeScript-first (no JS-only compromises)
- React + React Hooks + JSX a11y included
- Prettier-compatible
- Sensible defaults based on real-world usage, not theory
- No legacy or deprecated ESLint patterns

---

## Installation

```bash
npm install --save-dev @lumelabs/eslint-config-react
