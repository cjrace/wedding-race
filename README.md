[![Playwright tests](https://github.com/cjrace/wedding-race/actions/workflows/playwright.yml/badge.svg)](https://github.com/cjrace/wedding-race/actions/workflows/playwright.yml)
[![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

# Wedding Race

Not just any old wedding race, but the wedding of Race!

## Getting Started

This project uses [Next.js App Router](https://nextjs.org/docs/app). Package management is handled by [yarn](https://yarnpkg.com/getting-started). Main libraries used so far are:

Styling and components

- [Mantine](https://mantine.dev/)

### Run locally

Start by installing dependencies:

```bash
yarn install
```

Then you'll need to setup an .env file with the credentials needed to access the user database and manage the auth, follow the example from `.env.example`.

You can run the development server (automatically opens a browser tab to preview the site):

```bash
yarn dev
```

### Tests

[Prettier](https://prettier.io/) is used for code formatting, [ESLint](https://eslint.org/) is used for linting and basic end to end tests have been set up using [Playwright](https://playwright.dev/).

To format all scripts, run linting checks, compile a production build, and then run the end to end tests run:

```bash
yarn test
```

### Handy scripts

View other available commands, including for running linting, formatting (including how to check format without making changes), compiling and more using:

```bash
yarn run
```

### Pre-commit hooks

[Husky](https://typicode.github.io/husky) is used to manage pre-commit hooks, currently this is used to enforce [Prettier](https://prettier.io/) formatting on all code.

## Deployment

We'll eventually deploy this to https://www.wedding-race.com/. Deploys will be automatically triggered from pushes to the main branch.
