# saikou-server

> Saikou API. Saikou is a social media project for anime and manga enthusiasts to share their hobby each other.

![Website](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fsaikou.api.ahmadmarzuki.com)
![CircleCI](https://img.shields.io/circleci/build/github/amadzuki/saikou-server?style=for-the-badge&token=ac24bbb738b1e0836cae185a6a2eb5f776efe016)

## Table of Contents

- Abstract
- [Repositories](#repositories)
- [Tech Stacks](#tech-stacks)
- [API Endpoints](#api-endpoints)
  - [Index](#index)
  - [Auth](#auth)
  - [Users](#users)
  - [Anime](#anime)
  - [Manga](#manga)
- [Application Structure](#application-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Setup Environment Variables](#setup-environment-variables)
  - [Run Development](#run-development)
  - [Deployment](#deployment)
- [Author](#author)
- [License](#license)

---

## Repositories

There are 3 repos in the project: `saikou` is for documentary, `saikou-client` is the web app using React and lastly `saikou-server` is the back-end server using Express and mongoDB. You can check it at the following:

[saikou](https://github.com/amadzuki/saikou)

[saikou-client](https://github.com/amadzuki/saikou-client)

[saikou-server](https://github.com/amadzuki/saikou-server)

## Tech Stacks

- **Git** — Distributed version control system
  - **GitHub** — Provides hosting for software development and version control using Git
- **JavaScript** — The primary programming language
  - **Node.js** — JavaScript runtime environment and package manager
  - **npm, Yarn** — JavaScript runtime environment and package manager
- **REST API** — REpresentational State Transfer, architectural style for distributed hypermedia systems
- **Nodemon** — Tool to automatically restart Node application when file changes
- **PM2** — Process manager for Node.js
  - [**PM2.IO**](https://pm2.io) — PM2+ Monit to monitor PM2 instances (formerly named Keymetrics)
- **Express** — Minimal and flexible Node.js web application framework
- **MongoDB** — Cross-platform document-oriented database program
  - **Mongoose** — Schema-based Object-Data Modeling (ODM) for MongoDB
    - **Mongoose Unique Validator** — A plugin which adds pre-save validation for unique fields within a Mongoose schema.
    - **Mongoose Auto Increment** — A plugin that auto-increments any ID field on your schema every time a document is saved.
- **`morgan`** — HTTP request logger middleware for Node.js
- **`cors`** — Express middleware that to enable CORS with various options
- **`bcrypt`** — Library to hash passwords
- **`crypto`** — JavaScript library of crypto standards
- **Express Helmet** — Secure Express app by setting various HTTP headers
- **JSON Web Token (JWT)** — Compact URL-safe means of representing claims
  - **`jsonwebtoken`** — JWT implementationm, symmetric and asymmetric
- **HTTPie** — Command-line HTTP client that will make you smile
- **ESLint** — Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript
  - **Prettier** — Opinionated code formatter and extension for code editor
  - **Standard** — JavaScript style guide, linter, and formatter
- **Google Cloud Platform (GCP)** — Suite of cloud computing services that runs on the same infrastructure that Google uses internally
  - **Google Compute Engine (GCE)** — Configurable virtual machines running in Google's data centers
- **Nginx** — High-performance HTTP web server, load balancer, and reverse proxy
- **Let's Encrypt** — Free SSL/TLS Certificates to enable HTTPS
  - **Certbot** — Automatically enable HTTPS on your website by deploying Let's Encrypt certificates
- **Circle CI** — Intelligent and user-friendly Continuous Integration and Deployment (CI/CD)
- **Cloudflare** — Enterprise-grade authoritative DNS service
- **Uniregistry** — Retail domain name registrar

## API Endpoints

### Index

| HTTP  | Endpoint | Description       |
| ----- | -------- | ----------------- |
| `GET` | `/`      | Show info message |

### Auth

| Endpoint         | HTTP   | Description                   |
| ---------------- | ------ | ----------------------------- |
| `/auth/register` | `POST` | Register new user             |
| `/auth/login`    | `POST` | Login to existing user        |
| `/auth/logout`   | `POST` | Logout the authenticated user |

### Users

| HTTP     | Endpoint     | Description       |
| -------- | ------------ | ----------------- |
| `GET`    | `/users`     | Get all users     |
| `GET`    | `/users/:id` | Get user by id    |
| `POST`   | `/users`     | Add new user      |
| `PUT`    | `/users/:id` | Update user by id |
| `DELETE` | `/users/:id` | Delete user by id |
| `DELETE` | `/users`     | Delete all users  |

### Anime

| HTTP     | Endpoint     | Description        |
| -------- | ------------ | ------------------ |
| `GET`    | `/anime`     | Get all anime      |
| `GET`    | `/anime/:id` | Get anime by id    |
| `POST`   | `/anime`     | Add new anime      |
| `PUT`    | `/anime/:id` | Update anime by id |
| `DELETE` | `/anime/:id` | Delete anime by id |
| `DELETE` | `/anime`     | Delete all anime   |

### Manga

| HTTP     | Endpoint     | Description        |
| -------- | ------------ | ------------------ |
| `GET`    | `/manga`     | Get all manga      |
| `GET`    | `/manga/:id` | Get manga by id    |
| `POST`   | `/manga`     | Add new manga      |
| `PUT`    | `/manga/:id` | Update manga by id |
| `DELETE` | `/manga/:id` | Delete manga by id |
| `DELETE` | `/manga`     | Delete all manga   |

## Application Structure

## Getting Started

### Installation

Install dependencies using `yarn`:

```sh
yarn
```

### Setup Environment Variables

For development:

```sh
PORT=3000
MONGODB_URI=mongodb://localhost:27017/saikou-data
API_URL=http://localhost:3000
JWT_SECRET=saikounohimitsu
SERVER_USER=(GCE username)
SERVER_HOST=(GCE public ip)
```

For production:

```sh
PORT=3000
MONGODB_URI=mongodb://localhost:27017/saikou-data
API_URL=https://saikou.api.ahmadmarzuki.com
JWT_SECRET=saikounohimitsu
SERVER_USER=(GCE username)
SERVER_HOST=(GCE public ip)
```

### Run Development

```sh
yarn dev
```

### Deployment

- Setup domain on Uniregistry.
- Setup DNS on Cloudflare.
- Setup server on Google Compute Engine using `f1-micro` (1 vCPU, 0.6 GB memory).
  - Not Google App Engine, as we need the database in it but not using DBaaS.
  - If you need more power, use `g1-small` (1 vCPU, 1.7 GB memory).
- (Optional) Setup storage server on Google Cloud Storage.
  - By default the upload API fallbacks to `public/uploads` folder.
- Setup Node.js toolchain and databse in the desired server instance.
- Run PM2 deploy scripts:
  - `yarn pm2:deploy:setup`
  - `yarn pm2:deploy`

## Authors

- [Ahmad Marzuki](https://ahmadmarzuki.com) ([@amadzuki](https://github.com/amadzuki))

## License

MIT
