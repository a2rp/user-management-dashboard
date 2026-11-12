# User Management Dashboard

A full-stack user directory with sign-in and administrator, editor, and viewer roles. The React dashboard uses an Express API backed by MongoDB.

## Features

- Sign in with email and password
- Create, search, edit, and remove users according to role
- Store passwords as bcrypt hashes
- Keep signed-in sessions in an HTTP-only cookie
- Enforce role permissions in the API
- Validate requests and limit repeated sign-in attempts

## Requirements

- Node.js 20 or newer
- MongoDB, running locally or available through a connection URI

## Run locally

### Configure the backend

```bash
cd backend
npm install
```

Copy `.env.example` to `.env`, then set the MongoDB connection and a private JWT secret. Generate a secret with:

```bash
node -p "require('node:crypto').randomBytes(48).toString('base64')"
```

The secret must be at least 32 bytes. Add the initial administrator details to the ignored `.env` file:

```env
INITIAL_ADMIN_NAME=Your Name
INITIAL_ADMIN_EMAIL=you@example.com
INITIAL_ADMIN_PASSWORD=use-a-unique-password-of-at-least-12-characters
```

Create the first administrator once, then remove the three `INITIAL_ADMIN_*` entries from `.env`:

```bash
npm run create:admin
```

Start the API:

```bash
npm run devStart
```

The API listens on `http://localhost:1198` by default. Configure one or more comma-separated frontend origins with `FRONTEND_ORIGINS` if the frontend runs somewhere else. Production cookies require HTTPS, and browser write requests must come from one of the configured origins.

### Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm start
```

The frontend uses `http://localhost:1198/api/v1` by default. Set `REACT_APP_API_URL` before starting it to use another API address.

## Roles

| Role | Permissions |
| --- | --- |
| Administrator | View users, create users, edit names and roles, and remove other users |
| Editor | View users and edit names; cannot change roles or remove accounts |
| Viewer | View the user directory |

Permissions are checked by the backend. Changing browser storage or showing a dashboard control does not grant API access.

## API routes

| Method | Route | Access |
| --- | --- | --- |
| `POST` | `/api/v1/login` | Public; sets the session cookie |
| `GET` | `/api/v1/session` | Signed in |
| `POST` | `/api/v1/logout` | Clears the session cookie |
| `GET` | `/api/v1/user-all` | Signed in |
| `POST` | `/api/v1/user` | Signed in; body contains an email |
| `POST` | `/api/v1/user-add` | Administrator |
| `PATCH` | `/api/v1/user-update` | Administrator or editor |
| `DELETE` | `/api/v1/user-delete/:email` | Administrator |

New passwords must be at least 12 characters and no more than 72 UTF-8 bytes. Existing bcrypt-hashed passwords remain usable.

## Screenshots

### Sign in

![Login screen](https://github.com/a2rp/user-management-dashboard/assets/5670738/93ccae2c-b860-4a3f-81c1-766b2fe1687b)

### User dashboard

![User dashboard](https://github.com/a2rp/user-management-dashboard/assets/5670738/d1dba7a6-bee7-4f8d-a15a-2e53e4424765)

### Add a user

![Add user form](https://github.com/a2rp/user-management-dashboard/assets/5670738/d19ebf29-2eee-47f9-8b7c-bfdc2a4da26d)
