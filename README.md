<div align="center">
  <h3 align="center">Boilerplate - Frontend</h3>

  <section id='badges'>
    <img src="https://img.shields.io/badge/package_version-0.1.0-blue" alt="Package Version" />
    <img src="https://img.shields.io/badge/node_version-21.0.0-brightgreen" alt="Node Version" />
    <img src="https://img.shields.io/badge/react-18.3.1-blue" alt="React Version" />
  </section>
  <br />
  <br />
</div>

# Documentação da Estrutura do Projeto Front-End

- [Introduction](#introduction)
- [Packages](#packages)
- [Installation](#installation)
- [Project Execution](#project-execution)
- [Folder Organization](#folder-organization)
- [Styling](#styling)
- [Commits](#commits)
- [Tests](#tests)

## Introduction

This documentation describes the structure of the front-end project, including its folder organization, development flow, required packages, and instructions for running and testing.

## Packages

The project requires minimum Node.js version 18.0.0.

## Installation

To clone this project, you need to have access to the repository in Azure and configure your SSH key. If you haven't already configured your SSH key, follow the instructions provided by the Azure platform. After configuring your SSH key, clone the project using the following command:

```
git clone git@azure.com:sua-conta/nome-do-repositorio.git
```

## Project Execution

To run the project locally, follow these steps:

- Run `npm install -g plop` to install folder generator.
- Run `npm install` or `yarn` to install dependencies.
- Run `npm run dev` or `yarn dev` to start the project.

## Folder Organization

- Pages: Contains the application pages, including subfolders:
- Functions: Logic and API calls specific to each page.
- Hooks: Custom hooks for reusing logic and API calls.
- Template: Reusable page templates.
- Index: Main file that exports shared components and props.
- Context: Contains contexts used in requests that are shared across multiple locations in the application.
- Domain: Contains services related to the application domain.
- Components: Reusable global components.

```

vxp-partner-v2/
├── node_modules/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── contexts/
│ ├── domain/
│ ├── infra/
│ ├── pages/
│ │ ├── functions/
│ │ ├── hooks/
│ │ ├── template/
│ │ └── Index.js
├── routes
├── .gitignore
├── package.json
├── README.md
└── yarn.lock

```

## Styling

- Use Storybook to develop and visualize components.

- Ready components must be developed in Storybook and updated in the project version.
- To update the project with the new Storybook, you need to delete the Storybook folder or node_modules and reinstall the dependencies.

## Commits

- Use `npm run commit` or `yarn commit` to commit according to commitlint rules.

## Tests

- Run `npm run test` or `yarn test` to run all tests.
- Run `npm run test:watch` or `yarn test:watch` to run the tests in watch mode.
- Run `npm run test:cypress` or `yarn test:cypress` to run end-to-end tests with Cypress.

### Generate new folders in the architecture

- Run `npm run template:gen` and insert yout page name.
- Example: dashboard
