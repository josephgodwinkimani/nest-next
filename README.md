<p align="center">
<a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="128" alt="Nest Logo" /></a>
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
  </a>
</p>

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/next">
    <img alt="" src="https://img.shields.io/npm/v/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Join the community on GitHub" href="https://github.com/vercel/next.js/discussions">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=Next.js&labelColor=000000&logoWidth=20">
  </a>
</p>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

This project is a full-stack application that combines a [Nest](https://github.com/nestjs/nest) backend (REST API) with a [Next](https://nextjs.org/) frontend, providing a seamless experience for building and serving a single-page application (SPA). The backend serves as an API while the frontend handles user interactions and displays data.

## Installation

```bash
$ pnpm install
```

## Run both frontend and backend servers concurrently

> This command will automatically reload both servers upon detecting changes in either application.

```bash
$ pnpm run start:all
```

Now visit http://localhost:3000 to see the frontend and http://localhost:3000/api/ for the api/backend.

## Related Projects

- [Nest.js GraphQL, Prisma, Docker API Starter](https://github.com/josephgodwinkimani/nestjs-graphql-prisma) — Nest.js Hybrid Application (HTTP server with microservice listeners) with GraphQL (schema first), Prisma, MySQL (easily replaceble), MongoDB, Jest, Docker.
- [Laravel Boilerplate for building REST APIs](https://github.com/josephgodwinkimani/laravel-api-boilerplate) — A Laravel boilerplate for building REST APIs that support multi-tenancy, multiple MIME types using Fractal, API documentation, Eloquent model monitoring, and other credible libraries. 
- [nestjsx/crud Starter](https://github.com/josephgodwinkimani/nestjsx-crud-starter) — @nestjsx/crud starter repository for RESTful APIs running on Fastify.
- [Refine Boilerplate for Web (PWA), Desktop and Mobile](https://github.com/josephgodwinkimani/refine-starter) — A Cross-Platform starter template for Refine.dev that utilizes the Simple REST data provider to fetch and display data from a REST API (you can easily replace with GraphQL data provider)
- [vite-react-nestjs-ts](https://github.com/josephgodwinkimani/vite-react-nestjs-ts) — Full-stack application that combines a Nest backend (Hybrid ~ REST + GraphQL API) with a Vite-based React frontend, providing a seamless experience for building and serving a single-page application (SPA). The backend serves as an API while the frontend handles user interactions and displays data.
- [Fastify v3 Starter Template with Fastify, Swagger, Effect, TypeORM, Playwright and Vitest](https://github.com/josephgodwinkimani/fastify-starters/tree/effect-ts) — This is a starter template for building a Fastify Hybrid (API + web) app with Playwright and Vitest. It provides a basic structure for setting up an API + web with Fastify with Effect for providing a structured way to manage side effects, Playwright for e2e testing and Vitest for unit testing, Swagger for API documentation.
- [Laravel React Inertia Starter](https://github.com/josephgodwinkimani/laravel-inertia-react-starter) — Laravel 11 + Breeze (Inertia SSR) + Interactive components for Tailwind CSS
- [Laravel SaaS Boilerplate for building Multi-Tenant Applications](https://github.com/josephgodwinkimani/laravel-multi-tenant-saas-boilerplate) — Laravel Jetstream with API support via Laravel Sanctum (no team management), Support Multi-tenancy, TALL stack, Livewire Tables, Livewire Charts, WireUI Blade Components, Heroicons
- [Vite PWA + React + Typescript + Cypress starter template](https://github.com/josephgodwinkimani/vite-react-pwa-cypress) — minimal setup to get React working in Vite with HMR, Cypress for e2e/component testing and some ESLint useful rules.
- [tRPC-fastify-starter](https://github.com/josephgodwinkimani/tRPC-fastify-starter) — A basic starting point for fully typesafe tRPC APIs. (tRPC Starter Template with Fastify, Drizzle ORM, Jest and MySQL)
- [mui-pankod-superplate](https://github.com/josephgodwinkimani/mui-pankod-superplate) — Superplate by Pankod dashboard template that includes Material UI, GraphQL, React Router v5, i18n, Docker, Eslint
- [next-boilerplate](https://github.com/josephgodwinkimani/next-boilerplate) — Cross-Platform NextJS 14+ App Router boilerplate with support for simple internationalized routing with no limits, Firebase authentication, Redux client state management and Cypress e2e testing
- [react-query-boilerplate](https://github.com/josephgodwinkimani/react-query-boilerplate) — Tanstack React Query v4 + Ionic React v7 + Vite v4 + Capacitor v5
- [ionic-react-vite-starter](https://github.com/josephgodwinkimani/ionic-react-vite-starter) — Ionic React v6 + Vite SWC, PWA
- 