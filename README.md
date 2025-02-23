[![Frontend tests](https://github.com/cjrace/wedding-race/actions/workflows/frontend-tests.yml/badge.svg)](https://github.com/cjrace/wedding-race/actions/workflows/frontend-tests.yml)
[![Backend Tests](https://github.com/cjrace/wedding-race/actions/workflows/backend-tests.yml/badge.svg)](https://github.com/cjrace/wedding-race/actions/workflows/backend-tests.yml)
[![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)

# Wedding Race

Not just any old wedding race, but the wedding of Race! Currently a static site holding overview information on the Wedding, so the dual service set up and tests are complete overkill (though a fun learning experience), it's done this way as it will be expanded to include the ability for guests to login, RVSP and do all kinds of other helpful things later in the year (hopefully...).

## Getting Started

There are two separate projcets in this repo, designed to be deployed as separate containers.

- backend (Python - FastAPI)
- frontend (React - Next.js)

You'll need to work through getting each service running in it's own right and then you'll be able to run everything together using docker compose.

If you want to edit any of the infrastructure you'll likely want to install the [Google Cloud SDK](https://cloud.google.com/sdk?hl=en).

## Frontend
This project uses [Next.js App Router](https://nextjs.org/docs/app). Package management is handled by [yarn](https://yarnpkg.com/getting-started). Main libraries used so far are:

Styling and components

- [Mantine](https://mantine.dev/)
- [Tabler icons](https://tabler-icons.io/)

Remember to move into the frontend folder using `cd frontend` before running any the commands below.

1. Create a `frontend/.env.local` file

Copy from the `frontend/.env.example` file and add the appropiate environment variables

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

### Frontend container

Assuming you have [docker](https://docs.docker.com/get-started/) installed and running, you can run the frontend service in it's own container, for simplicity you can use shortcut that both builds and runs the container image (set in `package.json`)

```bash
yarn docker
```

### Tests

[Prettier](https://prettier.io/) is used for code formatting, [ESLint](https://eslint.org/) is used for linting, [Jest](https://jestjs.io/) is used for testing components and basic end to end tests have been set up using [Playwright](https://playwright.dev/).

To format all scripts, run linting checks, run jest tests, compile a production build, and then run the end to end tests run:

```bash
yarn test
```

### Handy scripts

View other available commands for the frontend project, including for running linting, formatting (including how to check format without making changes), compiling and more using:

```bash
yarn run
```

## Backend
Currently the backend is a very simple service using [Python FastAPI](https://fastapi.tiangolo.com/). Remember to move into the backend folder using `cd backend` before running any the commands below.

[Poetry](https://python-poetry.org/) is used for managing the dependencies. [Black](https://black.readthedocs.io/en/stable/index.html) is used to format the Python files, use `poetry run black .` to style the code.

1. [Install Python](https://www.python.org/downloads/)

- Check your version using `python --version`

2. [Install Poetry](https://python-poetry.org/docs/#installing-with-the-official-installer)

- Follow the instructions for the official installer
- Pay attention to the console output and add the environment variable to the path
- Test you have it working by running `poetry --version`

3. Install dependencies

```bash
poetry install
```

4. Run the API server

```bash
poetry run uvicorn main:app --reload
```

### Backend container

Like the frontend, you can run the backend service as a docker container

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
poetry run pytest
```

## Everything together

You can run both services together locally in a single command using docker compose:

```bash
docker-compose up -d --build
```

Visit the frontend and backend at the following URLs:

- http://localhost:3000/ (frontend)
- http://localhost:8000/ (backend)

Close this down using

```bash
docker-compose down
```

## Pre-commit hooks

[Husky](https://typicode.github.io/husky) is used to manage pre-commit hooks, currently this is used to enforce [Prettier](https://prettier.io/) formatting in the frontend project.

## Deployment

We'll eventually deploy this to https://www.wedding-race.com/. Deploys will be automatically triggered from pushes to the main branch.

---

Both applications are currently deployed using Google Cloud Run, which builds automatically from pushes to the main branch, using the respective docker containers. Though this will be simplified soon for the initial version of the site.
