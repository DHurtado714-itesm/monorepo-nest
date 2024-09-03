# NestJS Microservices Monorepo 🚀

This repository is a monorepo containing two NestJS microservices that communicate using **Redis** as a message broker. The microservices are designed to demonstrate inter-service communication in a scalable architecture, utilizing Redis Pub/Sub for efficient message passing.

## 📁 Repository Structure

The monorepo is organized as follows:

```
|
├── apps/
│  ├── mailapp/
│  │  ├── test/
│  │  │  └── ...
│  │  │
│  │  ├── src/
│  │  │  ├── mailapp.controller.ts
│  │  │  ├── main.ts
│  │  │  ├── mailapp.service.ts
│  │  │  ├── mailapp.module.ts
│  │  │  └── mailapp.controller.spec.ts
│  │  │
│  │  └── tsconfig.app.json
│  │
│  └── monorepo-nest/
│     ├── test/
│     │  └── ...
│     │
│     ├── src/
│     │  ├── main.ts
│     │  ├── app.service.ts
│     │  ├── app.module.ts
│     │  ├── app.controller.spec.ts
│     │  └── app.controller.ts
│     │
│     └── tsconfig.app.json
│
│
├── pnpm-lock.yaml
├── makefile
├── nest-cli.json
├── README.md
├── .gitignore
├── package.json
├── tsconfig.build.json
├── .prettierrc
├── .eslintrc.js
├── tsconfig.json
└── docker-compose.yml
```

## ✨ Features

- **Redis Pub/Sub**: Utilizes Redis as a message broker for efficient communication between microservices.
- **Dockerized Services**: Each microservice runs in its own Docker container for consistency and ease of deployment.
- **Monorepo Structure**: Simplifies development and code sharing between microservices.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
