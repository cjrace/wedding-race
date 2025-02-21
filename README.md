[![Frontend tests](https://github.com/cjrace/wedding-race/actions/workflows/frontend-tests.yml/badge.svg)](https://github.com/cjrace/wedding-race/actions/workflows/frontend-tests.yml)
[![Backend Tests](https://github.com/cjrace/wedding-race/actions/workflows/backend-tests.yml/badge.svg)](https://github.com/cjrace/wedding-race/actions/workflows/backend-tests.yml)
[![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

# Wedding Race

Not just any old wedding race, but the wedding of Race! Currently a static site holding overview information on the Wedding, though this will be expanded to include the ability for guests to login, RVSP and do all kinds of helpful things (hopefully...).

## Getting Started

There are two separate projcets in this repo, designed to be deployed as separate containers.

- wedding-race-backend
- wedding-race-frontend

### Run projects

For running everything quickly, first, [install Docker](https://docs.docker.com/get-docker/)

You can run the whole thing together locally using docker compose:

```bash
docker-compose up -d --build
```

You can then visit the frontend and backend at the following:

- http://localhost:3000/ (frontend)
- http://localhost:8000/ (backend)

Close this down using

```bash
docker-compose down
```

## Frontend
This project uses [Next.js App Router](https://nextjs.org/docs/app). Package management is handled by [yarn](https://yarnpkg.com/getting-started). Main libraries used so far are:

Styling and components

- [Mantine](https://mantine.dev/)
- [Tabler icons](https://tabler-icons.io/)

Remember to move into the frontend folder using `cd wedding-race-frontend` before running any the commands below.

### Run locally with Docker

1. Build a container

```bash
docker build -t wedding-race-frontend .
```

3. Run the container

```bash
docker run -p 3000:3000 wedding-race-frontend
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

## Backend
Currently the backend is a very simple service delivering the wedding date using [Python FastAPI](https://fastapi.tiangolo.com/). Remember to move into the frontend folder using `cd wedding-race-backend` before running any the commands below.

1. [Install Python](https://www.python.org/downloads/)

2. Install dependencies

```bash
pip install -r requirements.txt
```

3. Run the API server

```bash
uvicorn main:app --reload
```

Or using docker...

1. Build the image
```bash
docker build -t wedding-race-backend .
```

2. Run that container
```bash
docker run -p 8000:8000 wedding-race-backend
```

The endpoints will then be visible at http://localhost:8000/, for example:

- http://localhost:8000/api/weddingdate

### Tests

Tests for the backend project are written using [pytest](https://docs.pytest.org/en/stable/getting-started.html), to run them simply run:

```bash
pytest
```

## Pre-commit hooks

[Husky](https://typicode.github.io/husky) is used to manage pre-commit hooks, currently this is used to enforce [Prettier](https://prettier.io/) formatting in the frontend project.

## Deployment

We'll eventually deploy this to https://www.wedding-race.com/. Deploys will be automatically triggered from pushes to the main branch.

---

This application is currently deployed using Google Cloud Run, which builds automatically from pushes to the main branch, using the docker container. The URL for the frontend currently is: https://wedding-race-95409422489.europe-west2.run.app.
