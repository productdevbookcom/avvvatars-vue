# Vue Typescript Bundle Template

![Vue Typescript Bundle Template](https://github.com/productdevbookcom/assets/blob/main/vue-ts-bundle-template.jpg?raw=true)


This is a template for creating a Typescript bundle. It is based on the [Typescript](https://www.typescriptlang.org/) compiler with the [Vite](https://vitejs.dev/) bundler.

## Features

- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [Vite](https://vitejs.dev/)
- [x] [Vue](https://vuejs.org/)
- [x] [Vue Macros](https://github.com/sxzz/unplugin-vue-macros)
- [x] [ESLint](https://eslint.org/) with [Antfu's ESLint Config](https://github.com/antfu/eslint-config)
- [x] [Bumpp](https://github.com/antfu/bumpp) github changelog generator
- [x] [Vitest](https://vitest.dev/)
- [x] [Pnpm](https://pnpm.io/)
- [x] [GitHub Actions]()
- [x] [NPM Local Registry]()
- [x] [Renovate]()


## Usage

1. To use this template, click the "Use this template" button above.
2. Clone the repository to your local machine.
3. Run `pnpm install` to install the dependencies.
4. Run `pnpm build` to build the bundle.
5. Run `pnpm start` to start the bundle.
6. Run `pnpm lint` to lint the code. (You can also run `pnpm lint:fix` to fix the linting errors.)
7. Run `pnpm test` to run the tests. (You can also run `pnpm test:watch` to run the tests in watch mode.)
8. Run `pnpm release` to bump the version. Terminal will ask you to select the version type. And then it will automatically commit and push the changes. GitHub Actions will automatically publish git tags. NPM local registry will automatically publish the package.

## Configuration

### Github Secrets

[Github Token](https://github.com/settings/tokens) is required github changelog generator. You can create a token.  Select the `repo` scope. Then add the token to the repository secrets. 

`REPOCHANGELOG_TOKEN` - add the token to the repository secrets.

### Renovate

[Setup Github App](https://github.com/apps/renovate) for Renovate.

## License

This project is licensed under the [MIT License](LICENSE).
