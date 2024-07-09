# README

## Table of Contents
1. [Repo 1: Secure User Authentication and Authorization API with JWT](#project-1)
    - [Introduction](#introduction-1)
    - [Features](#features-1)
    - [Installation](#installation-1)
    - [Usage](#usage-1)
    - [Endpoints](#endpoints-1)
2. [Repo 2: Secure User Authentication and Authorization API without JWT](#project-2)
    - [Introduction](#introduction-2)
    - [Features](#features-2)
    - [Installation](#installation-2)
    - [Usage](#usage-2)
    - [Endpoints](#endpoints-2)

## Project 1: Secure User Authentication and Authorization API with JWT

### Introduction

This project provides a secure user authentication and authorization API using Node.js, Express, MongoDB, and JSON Web Tokens (JWT). JWT is used to ensure secure transmission of user data.
This Includes Password Encryprion using BcryptJs and allows to genrate salts of upto 100 chars long.

### Features

- User registration and login
- Password hashing for security
- JWT generation for authentication
- Protected routes accessible only with valid tokens
- Secure storage of user data in MongoDB Clusters

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/purple-claw/Node.JS_User_Authentication_API.git
    cd Node.JS_User_Authentication_API
    ```
2. Install dependencies:
    ```bash
    npm install express bcryptjs mongoose jsonwebtoken dotenv nodemon
    ```
3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    ```

4. Start the server:
    ```bash
    npm server.js
    ```
    or
   ```bash
   nodemon server.js
   ```
   or
   ```bash
   node server.js
   ```

### Usage

The API runs on `http://localhost:3000`. Use tools like REST Client to interact with the endpoints and send Requests to Server.

### Endpoints

- **POST /register**
    - Registers a new user.
    - Body parameters:
        ```json
        {
            "username": "your-username",
            "email": "your-email",
            "password": "your-password"
        }
        ```
    - Response:
        ```json
        {
            "message": "User registered successfully"
        }
        ```

- **POST /login**
    - Logs in a user and returns a JWT.
    - Body parameters:
        ```json
        {
            "username": "your-username",
            "password": "your-password"
        }
        ```
    - Response:
        ```json
        {
            "token": "your-jwt-token"
        }
        ```

- **GET /protected**
    - Accesses a protected route.
    - Header: `Authorization: Bearer your-jwt-token`
    - Response:
        ```json
        {
            "message": "This is a protected route"
        }
        ```

---

## Repo - 2: Secure User Authentication and Authorization API without JWT

### Introduction

This project provides a secure user authentication and authorization API using Node.js, Express, and MongoDB. It ensures secure user data handling without the use of JWT.

### Features

- User registration and login
- Password hashing for security
- Session-based authentication
- Protected routes accessible only with valid sessions
- Secure storage of user data in MongoDB Clusters

### Installation

1. Clone the repository:
    ```bash
    git cclone https://github.com/purple-claw/Node.JS_User_Authentication_API.git
    cd Node.JS_User_Authentication_API
    ```
2. Install dependencies:
    ```bash
    npm install mongoose express nodemon dotenv bcryptjs jsonwebtoken
    ```
3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```
    MONGODB_URI=your-mongodb-uri
    SESSION_SECRET=your-session-secret
    ```

4. Start the server:
    ```bash
    npm server.js
    ```
    or
   ```bash
   nodemon server.js
   ```
   or
   ```bash
   node server.js
   ```

### Usage

The API runs on `http://localhost:3000`. Use tools like Postman to interact with the endpoints.

### Endpoints

- **POST /register**
    - Registers a new user.
    - Body parameters:
        ```json
        {
            "username": "your-username",
            "password": "your-password"
        }
        ```
    - Response:
        ```json
        {
            "message": "User registered successfully"
        }
        ```

- **POST /login**
    - Logs in a user and creates a session.
    - Body parameters:
        ```json
        {
            "username": "your-username",
            "password": "your-password"
        }
        ```
    - Response:
        ```json
        {
            "message": "User logged in successfully"
        }
        ```

- **GET /protected**
    - Accesses a protected route.
    - Requires an active session.
    - Response:
        ```json
        {
            "message": "This is a protected route"
        }
        ```

---

Both projects provide secure user authentication and authorization mechanisms tailored to different use cases. Choose the one that best fits your needs.
