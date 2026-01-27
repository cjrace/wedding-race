[![Automated tests](https://github.com/cjrace/wedding-race/actions/workflows/automated-tests.yml/badge.svg)](https://github.com/cjrace/wedding-race/actions/workflows/automated-tests.yml)
[![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

# Wedding Race

Not just any old wedding race, but the wedding of Race!

Not the neatest codebase, or in line with what plan A, B, or C was, but it's vaguely functional...

## Getting Started

This project uses [Next.js App Router](https://nextjs.org/docs/app). Package management is handled by [yarn](https://yarnpkg.com/getting-started). Main libraries used so far are:

Styling and components

- [Mantine](https://mantine.dev/)
- [Tabler icons](https://tabler-icons.io/)

1. Create a `.env.local` file

Copy from the `.env.example` file and add the appropriate environment variables

2. Install [node.js](https://nodejs.org/en/download)

3. Install [yarn](https://yarnpkg.com/getting-started/install)

4. Install dependencies from `yarn.lock`

```bash
yarn install
```

5. Run the development server

```bash
yarn dev
```

### Tests

[Prettier](https://prettier.io/) is used for code formatting, [ESLint](https://eslint.org/) is used for linting, [Jest](https://jestjs.io/) is used for testing components and basic end to end tests have been set up using [Playwright](https://playwright.dev/).

To format all scripts, run linting checks, run jest tests, compile a production build, and then run the end to end tests run:

```bash
yarn test
```

### Handy scripts

View other available commands for the project, including for running linting, formatting (including how to check format without making changes), compiling and more using:

```bash
yarn run
```

## Deployment

Deploys are automatically triggered from pushes to the main branch through [Vercel](https://vercel.com/) to https://www.wedding-race.com/.

The docker containers and previous backend project where originally deployed in Google Cloud Run, but are not currently in use. If you want to edit any of the infrastructure in Google Cloud you'll likely want to install the [Google Cloud SDK](https://cloud.google.com/sdk?hl=en).
