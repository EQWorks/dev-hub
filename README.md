# Dev Hub

A centralized resource for project documentation.

---

## Content Management

The content of this website is pulled from repository root-level `docs/` directories containing Markdown files.

The content must be a Markdown file with appropriate metadata and elements (to be determined), see the [Mastering Markdown guide](https://guides.github.com/features/mastering-markdown/) for more information on creating Markdown files.

---

## Development

This website is built using the [Next.js](https://nextjs.org/) framework.

To get the website running locally, please do the following:

1. Ensure your environment has [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), and [npm](https://www.npmjs.com/) installed.
2. Clone repository, run `git clone git@github.com:EQWorks/dev-hub.git`.
3. Install dependencies, run `yarn`.
4. Start the website in development mode, run `yarn dev`.
5. View website at http://localhost:3000.

---

## Production

We are not quite there yet, however we will be deploying this to [GitHub pages](https://pages.github.com/), as the result of this project will be a Static-Site Generated (SSG) website.

---

## Available Scripts

The [Next.js CLI](https://nextjs.org/docs/api-reference/cli) allows you to start, build, and export your application.

- `yarn dev` starts the application in development mode with hot-code reloading, error reporting, and more.
- `yarn build` creates an optimized production build of your application. The output displays information about each route.
- `yarn start` starts the application in production mode. The application should be compiled with `yarn build` first.
