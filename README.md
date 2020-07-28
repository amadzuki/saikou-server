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
