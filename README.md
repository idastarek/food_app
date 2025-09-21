# Food App

## A full-stack application which takes ingredients as input and outputs suggested recipes. Built with React, Vite, TypeScript, ExpressJS and PostgreSQL.

## How to install and run the project

### 1. Clone the repository

```
https://github.com/idastarek/food_app.git
```

### 2. Install Node JS and dependencies

Install Node with pnpm for dependency management.

Follow instructions on this page, selecting the appropriate operation system and pnpm.

Node version 22 is recommended.

```
https://nodejs.org/en/download
```

### 2.1 Install root dependencies

```
pnpm install
```

### 2.2 Install frontend dependencies

```
cd frontend
pnpm install
```

### 2.3 Install backend dependencies

```
cd ../backend
pnpm install
```

### 3. Set up Postgre SQL

### 3.1 Download PostgreSQL and pgAdmin -

https://www.postgresql.org/download/
https://www.pgadmin.org/

### 3.2 Create the user and and the database

```
-- Connect as the default postgres superuser
CREATE USER food_app_user WITH PASSWORD 'your_password';
CREATE DATABASE food_app_db OWNER food_app_user;
```

### 4. Update .env file

In backend/.env, add your database credentials:

```
DB_USER=food_app_user
DB_PASSWORD=your_password
DB_NAME=food_app
DB_HOST=localhost
DB_PORT=5432
```

### 5. Run the backend server

```
pnpm dev
```

The server runs on http://localhost:3000
Note: seeing CANNOT GET / is normal if no root route is defined.

### 6. Create the .env file

Follow the instructions in the .env.example.

### 7. Create tables in the database

Run the following command to create tables in the database with prisma.

```
npx prisma migrate dev --name init
```

### 8. Seed the database

Run the following command to seed the database with sample data.

```
npx prisma db seed
```
