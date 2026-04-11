# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn install        # Install dependencies
yarn dev            # Start development server
yarn lint           # Run ESLint
yarn pretty         # Format with Prettier
yarn jest           # Run Jest unit tests only
yarn jest <path>    # Run a single test file
yarn playwright test # Run E2E tests only (requires a built app)
yarn test           # Full suite: prettier check, eslint, jest, next build, playwright
yarn run            # List all available scripts
```

## Architecture

Next.js App Router application for a wedding website.

**Key directories:**

- `app/` — Next.js pages and API routes. `(home)/` is the landing page group. `api/` handles RSVP submission, invite checking, Spotify, and quiz suggestions.
- `components/` — Shared React components; unit tests live in `components/tests/`.
- `styles/` — CSS modules and Mantine theme config.
- `db/` — Neon serverless PostgreSQL connection (`db/neon.ts`). Falls back to a mock when `DATABASE_URL` is not set.
- `types/` — TypeScript type definitions.
- `sql/` — Raw SQL scripts.
- `playwright-tests/` — E2E browser tests (Chromium, Firefox, Mobile Chrome).

**Styling:** Mantine v8 with PostCSS (`postcss-preset-mantine`, `postcss-simple-vars`). Mantine breakpoint variables are defined in `postcss.config.cjs`.

**Build output:** `output: standalone` in `next.config.mjs` — Playwright E2E tests run against the standalone server at `node .next/standalone/server.js`.

## Testing Notes

Jest uses jsdom with `jest.setup.cjs` providing mocks for `matchMedia` and `ResizeObserver`. Path alias `@/` maps to the repo root in both TypeScript and Jest.
