# saikou-server

Saikou back end server

## API Documentation

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
