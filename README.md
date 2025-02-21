[![Tests](https://github.com/cjrace/wedding-race/actions/workflows/tests.yml/badge.svg)](https://github.com/cjrace/wedding-race/actions/workflows/tests.yml)
[![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

# Wedding Race

Not just any old wedding race, but the wedding of Race! Currently a static site holding overview information on the Wedding, though this will be expanded to include the ability for guests to login, RVSP and do all kinds of helpful things (hopefully...).

## Getting Started

### Frontend
This project uses [Next.js App Router](https://nextjs.org/docs/app). Package management is handled by [yarn](https://yarnpkg.com/getting-started). Main libraries used so far are:

Styling and components

- [Mantine](https://mantine.dev/)
- [Tabler icons](https://tabler-icons.io/)

[Docker](https://www.docker.com/) is used to help with deployments and can be used to run the project locally. General recommendation for this project is to use docker for building and manually testing the site, but then use `yarn test` frequently for testing the code itself.

If you go into the frontend folder using `cd wedding-race-frontend` you can then run all the existing README commands as normal.

### Backend
?

### Requirements

You'll need to setup an .env file with the credentials needed to access the databases etc, follow the example from `.env.example`.

### Run locally with Docker

1. [Install Docker](https://docs.docker.com/get-docker/)

2. Build a container

```bash
docker build -t wedding-race .
```

3. Run the container

```bash
docker run -p 3000:3000 wedding-race
```

Or, just use the shortcut that runs both of these commands back to back as set in `package.json`

```bash
yarn docker
```

### Run locally without Docker

Being able to run the project without docker will allow you to run tests locally, so is worth doing.

1. Install [node.js](https://nodejs.org/en/download)

2. Install [yarn](https://yarnpkg.com/getting-started/install)

3. Install dependencies from `yarn.lock`

```bash
yarn install
```

4. Run the development server

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

View other available commands, including for running linting, formatting (including how to check format without making changes), compiling and more using:

```bash
yarn run
```

### Pre-commit hooks

[Husky](https://typicode.github.io/husky) is used to manage pre-commit hooks, currently this is used to enforce [Prettier](https://prettier.io/) formatting on all code.

## Deployment

We'll eventually deploy this to https://www.wedding-race.com/. Deploys will be automatically triggered from pushes to the main branch.

---

This application is currently deployed using Google Cloud Run, which builds automatically from pushes to the main branch, using the docker container.

The URL is: https://wedding-race-95409422489.europe-west2.run.app.

### Initial setup notes

Once you have the [Google Cloud SDK](https://cloud.google.com/sdk?hl=en) installed (and have followed any prompts to authenticate) you can switch into the right project by:

1. Listing out projects you have

```bash
gcloud projects list
```

2. Switch into desired project (should have been in the list if you're authenticated)

```bash
gcloud config set project wedding-race
```

I used europe-west2 as the region, you can make this your default region by running:

```bash
gcloud config set run/region europe-west2
```

Once set up with a Google Cloud project and the SDK, I ran the following to get the site deployed (first time around - not neccessary anymore).

1. Set up build container

```bash
gcloud builds submit --tag gcr.io/wedding-race/wedding-race --project wedding-race
```

2. Deploy a container image

```bash
gcloud run deploy --image gcr.io/wedding-race/wedding-race --project wedding-race --platform managed --allow-unauthenticated
```

Looking inside Google Cloud Platform itself I saw there were ways to do this using the UI and automatically link into the GitHub repo, so I deleted that initial service instance and then I create a new service instance in the UI by clicking some things to get to the setup we have now.
