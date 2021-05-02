# Contribution Guidelines

Styled System has a [Code of Conduct][].
Please review and help enforce this code of conduct to help us foster an open and inclusive project.

[code of conduct]: ./CODE_OF_CONDUCT.md

## How to Contribute

Feel free to contribute by opening and commenting on issues, helping answer questions, updating docs, or opening a pull request.
For quick bug fixes or PRs that address an open issue, feel free to open a PR.
If you'd like to suggest a new feature or change to the API, please open an issue for discussion first.

## Pull Requests

To submit a pull request, follow these steps

1. Fork and clone this repo
2. Create a branch for your changes
3. Install dependencies with `yarn`
4. Ensure tests are passing by running `yarn test`
5. If you're fixing a bug, it's recommended to write a failing test before writing any code
6. Make changes locally and commit them
7. Try to make sure tests still pass and that there's 100% coverage
8. Push your branch to origin
9. Open a pull request in this repository with a clear title and description and link to any relevant issues
10. Wait for a maintainer to review your PR


## Documentation Site

The documentation site is a separate package in the `docs/` folder.
To view the documentation site locally, run the following:

```sh
cd docs
yarn && yarn start
```

## Architecture

Styled system is intentionally decoupled from React and the CSS-in-JS libraries it works with.
It's a very small library of utility functions that accept `props` as an argument and return CSS style objects.

To avoid additional build tools, the entire source code is in a single `src/index.js` file,
with the core part of the library at the top and built-in style functions below.
This allows users of this library to take advantage of features like tree-shaking in webpack.

### Monorepo

This repo is set up as a monorepo using Yarn workspaces and Lerna.

