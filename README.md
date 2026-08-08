# Food App

A full-stack pantry app that takes ingredients as input and suggests recipes. Built with React, Vite, TypeScript, Express, Prisma, and PostgreSQL.

## Project Status

This is an in-progress learning project. The current focus is moving the app from a frontend/localStorage prototype toward a backend and database-backed flow.

## Tech Stack

- Frontend: React, Vite, TypeScript
- Backend: Express, TypeScript
- Database: PostgreSQL
- Database toolkit: Prisma
- Package manager: pnpm workspaces

## Prerequisites

Before running the project, install:

- Node.js 22: https://nodejs.org/en/download
- pnpm: https://pnpm.io/installation
- PostgreSQL: https://www.postgresql.org/download/
- pgAdmin, optional but useful: https://www.pgadmin.org/

## How To Run The Project

### 1. Clone the repository

```powershell
git clone https://github.com/idastarek/food_app.git
cd food_app
```

### 2. Install dependencies

Run this from the project root:

```powershell
pnpm install
```

This installs dependencies for the root, frontend, and backend packages.

### 3. Create the PostgreSQL user and database

Create a local PostgreSQL database named `food_app_db` and a user named `food_app_user`.

You can run this SQL in pgAdmin's Query Tool while connected as the default `postgres` user:

```sql
CREATE USER food_app_user WITH PASSWORD 'your_password';
CREATE DATABASE food_app_db OWNER food_app_user;
```

Replace `your_password` with your own local database password.

### 4. Create the backend environment file

Create a file called `backend/.env`.

You can copy the example file:

```powershell
cd backend
copy .env.example .env
```

Then update `backend/.env` with your local database details:

```env
DB_USER=food_app_user
DB_HOST=localhost
DB_NAME=food_app_db
DB_PORT=5432
DB_PASSWORD=your_password
NODE_ENV=development
PORT=3000
DATABASE_URL="postgresql://food_app_user:your_password@localhost:5432/food_app_db?schema=public"
```

The `DB_PASSWORD` and `DATABASE_URL` values should use the same password you set when creating the PostgreSQL user.

Steps 5 and 6 are mainly needed when setting up the project for the first time, using a new device, or working with a fresh local database.
If your local database already has the required tables and sample data, skip the migration and seed steps.

### 5. Create the database tables

From the `backend` folder, run:

```powershell
pnpm prisma migrate dev
```

This creates or updates the local PostgreSQL tables using the saved Prisma migrations.

### 6. Seed the database

If this is your first time setting up the local database, seed it with sample data.

From the `backend` folder, run:

```powershell
pnpm prisma db seed
```

This inserts sample ingredients and recipes into the database.

The seed script skips duplicates, so it can be rerun safely against a local database.

### 7. Generate the Prisma Client

From the `backend` folder, run:

```powershell
pnpm prisma generate
```

This generates the local Prisma Client used by the backend to query PostgreSQL. The generated files are not committed to the repository, so this step is needed after cloning the project.

### 8. Start the backend

From the `backend` folder, run:

```powershell
pnpm dev
```

The backend runs on http://localhost:3000.

You can test it by calling the ingredients API:

```bash
curl http://localhost:3000/api/ingredients
```

### 9. Start the frontend

Open a second terminal. From the project root, run:

```powershell
cd frontend
pnpm dev
```

Vite will print the local frontend URL in the terminal, usually http://localhost:5173.

## Useful Commands

Run backend development server:

```powershell
cd backend
pnpm dev
```

Run frontend development server:

```powershell
cd frontend
pnpm dev
```

Run frontend tests:

```powershell
cd frontend
pnpm test
```

Check backend TypeScript build:

```powershell
cd backend
pnpm build
```
