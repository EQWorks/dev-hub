# Dev Hub

A centralized resource for project documentation.

---

## Content Management

The content of this app is pulled from repository root-level `docs/` directories containing [Markdown](https://guides.github.com/features/mastering-markdown/) files with proper use of [YAML Front Matter](https://jekyllrb.com/docs/front-matter/).

### Directory Structure

To have the content of a repository included in the `dev-hub`, the directory structure must adhere to the following convention:

- The repository contains a root-level `docs/` directory.
- The `docs/` and all respective sub-directories must contain an `index.md`.
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
│   │   index.md
│   │
│   └───marketplace
│   │   │   billing-customers.md
│   │   │   index.md
│   │   │   security-requirements.md
│   │
│   └───rest-api
│   │   │   authentication-basics.md
│   │   │   getting-started.md
│   │   │   index.md
│
└───src
│   index.js
```

### Front Matter

All Markdown files must contain the appropriate YAML Front matter elements:

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

### Example Markdown File

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

This app is built using [Create React App](https://github.com/facebook/create-react-app).

To get the app running locally, please do the following:

1. Ensure your environment has [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), and [npm](https://www.npmjs.com/) installed.
2. Clone repository, run `git clone git@github.com:EQWorks/dev-hub.git`.
3. Install dependencies, run `yarn`.
4. Run the app in development mode, run `yarn start`.
5. View app at http://localhost:3000.

---

## Production

We are not quite there yet, however we will be deploying this to [GitHub pages](https://pages.github.com/), as the result of this project will be a Static-Site Generated (SSG) app.

---

## Available Scripts

- `yarn build` builds the app for production to the `build` directory. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
- `yarn lint` runs ESLint towards all project directories and files except those specified inside the `.eslintignore` configuration file.
- `yarn start` runs the app in development mode. The page will reload if you make edits. You will also see any lint errors in the console.
- `yarn test` laucnes the test runner in the interactive watch mode.
