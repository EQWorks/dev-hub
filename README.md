# Dev Hub

A centralized resource for project documentation.

---

## Content Management

The content of this website is pulled from repository root-level `docs/` directories containing [MDX](https://mdxjs.com/) files with proper use of [YAML Front matter](https://jekyllrb.com/docs/front-matter/).

### Directory Structure

To have the content of a repository included in the `dev-hub`, the directory structure must adhere to the following:

1. The repository contains a root-level `docs/` directory.
2. The `docs/` and all respective sub-directories must contain an `index.mdx`.

- Example repository directory structure:

```yaml
project
│   .gitignore
│   LICENSE
│   package.json
│   README.md
│   yarn.lock
│
└───docs
│   │   index.mdx
│   │
│   └───marketplace
│   │   │   billing-customers.mdx
│   │   │   index.mdx
│   │   │   security-requirements.mdx
│   │
│   └───rest-api
│   │   │   authentication-basics.mdx
│   │   │   getting-started.mdx
│   │   │   index.mdx
│
└───src
│   index.js
```

### Front Matter

All MDX files must contain the appropriate YAML Front matter elements:

#### `version`

- **Purpose:** Indicates the version to which a page applies.
- **Type:** `String`
- **Required:** `true`
- **Notes:** The `'*'` is used to denote all releases for the version.
- **Example:**

```yaml
version: "v2.1.1"
```

#### `title`

- **Purpose:** Set a human-friendly title for use in the rendered page's `<title>` tag and an `h1` element at the top of the page.
- **Type:** `String`
- **Required:** `false`. If omitted, the page `<title>` will still be set with a generic value like `'EQ Works Dev Hub'`.
- **Example:**

```yaml
title: "Getting started with LOCUS"
```

#### `shortTitle`

- **Purpose:** An abbreviated variant of the page title for use in breadcrumbs.
- **Type:** `String`
- **Required:** `false`. If omitted, the `title` will be used.
- **Example:**

```yaml
title: "Getting started with LOCUS"
shortTitle: "LOCUS"
```

#### `intro`

- **Purpose:** Sets the intro for the page. This string will render after the `title`.
- **Type:** `String`
- **Required:** `false`
- **Example:**

```yaml
intro: "LOCUS is a product made by EQ Works."
```

### Example MDX File

```yaml
---
version: "*"
title: "Getting Started with LOCUS"
shortTitle: "LOCUS"
intro: "You can use LOCUS to do all sorts of crazy things."
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

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

The website is deployed to [GitHub pages](https://pages.github.com/) by pushing to the `main` branch, as a Static-Site Generated (SSG) website.

---

## Available Scripts

- `yarn build` creates an optimized production build of your application. The output displays information about each route.
- `yarn dev` starts the application in development mode with hot-code reloading, error reporting, and more.
- `yarn export` allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.
- `yarn lint` runs ESLint towards all project directories and files except those specified inside the `.eslintignore` configuration file.
- `yarn start` starts the application in production mode. The application should be compiled with `yarn build` first.
