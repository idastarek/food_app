# Food App

## A full-stack application which takes ingredients as input and outputs suggested recipes. Built with React, Vite, TypeScript, ExpressJS and PostgreSQL.

## How to install and run the project

### 1. Clone the repository

```
https://github.com/idastarek/food_app.git
```

### 2. Install Node JS and pnpm

Install Node with pnpm for dependency management.

Follow instructions on this page, selecting the appropriate operation system and pnpm.

Node version 22 is recommended.

```
https://nodejs.org/en/download
```

### 3. Install dependencies

Since this project uses a pnpm workspace, you only need to run one command at the root:

```
pnpm install
```

This will install dependencies for all packages (frontend, backend, and root) and link them automatically.

### 4. Set up Postgre SQL

### 4.1 Download PostgreSQL and pgAdmin -

https://www.postgresql.org/download/
https://www.pgadmin.org/

### 4.2 Create the user and the database

```
-- Connect as the default postgres superuser
CREATE USER food_app_user WITH PASSWORD 'your_password';
CREATE DATABASE food_app_db OWNER food_app_user;
```

### 5. Update .env file

In backend/.env, add your database credentials:

```
DB_USER=food_app_user
DB_PASSWORD=your_password
DB_NAME=food_app
DB_HOST=localhost
DB_PORT=5432
```

### 6. Run the backend server

```
pnpm dev
```

The server runs on http://localhost:3000
Note: seeing CANNOT GET / is normal if no root route is defined.

### 7. Create the .env file

Follow the instructions in the .env.example.

### 8. Create tables in the database

Run the following command to create tables in the database with prisma.

```
npx prisma migrate dev --name init
```

### 9. Seed the database

Run the following command to seed the database with sample data.

```
npx prisma db seed
```
