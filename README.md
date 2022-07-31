# Weblate
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/ramanverma2k/weblate/blob/main/LICENSE)

### Pre-configured opinionated starter template for web development.

## Features

- [Vite v3](https://vitejs.dev/).
- [React 18](https://beta.reactjs.org/).
- Full Typescript Support.
- [Eslint](https://eslint.org/) for linting & static analysis with [Standard](https://github.com/standard/standard) config.
- [Vitest](https://vitest.dev/) for testing.

## Folder Structure

Nothing too fancy, simple, clean & manageable structure:

```
vite-template-react
├── node_modules
├── public
└── src
    |── __tests__
        |── App.test.tsx
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── vite-env.d.ts
|── test
|    |── setup.ts
├── .eslintrc
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
```
## Run locally

Get a copy of the code using git:

```
git clone --depth 1 https://github.com/ramanverma2k/weblate.git
cd weblate
git commit --amend -m "Initial commit" --author "YOUR_NAME <YOUR_EMAIL@gmail.com>"
```

Install dependencies:

```
npm i
```

Now, you can start a local web server by running:

```
npm run dev
```

Open http://localhost:5174 to view it in the browser.

#### Available Scripts

You can run following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.               |
| npm run build | Builds the app for production. |
| npm run preview | Preview the production build. |
| npm run lint | Get errors & warning with static analysis using eslint. |
| npm run lint:fix | Fix linting issues. |
| npm run test | Run tests. |
