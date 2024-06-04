# PERN Stack Todo App

This is a full-featured Todo application built with the PERN stack (PostgreSQL, Express.js, React, Node.js). The application allows users to manage their daily tasks efficiently with user authentication, CRUD operations on todos, and more.

## Features

- **User Authentication**
  - Secure user authentication using JWT tokens.
  - Login and registration functionality.
  - Password encryption for security.

- **User Management**
  - Creation and deletion of user accounts.
  - Profile management for users.

- **Todo Management**
  - Create, read, update, and delete todos.
  
- **Responsive Design**
  - Fully responsive UI, works on both desktop and mobile devices.


## Tech Stack

- **Backend**
  - Node.js
  - Express.js
  - PostgreSQL for the database
  - JWT for authentication

## Getting Started

### Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/pern-todo-app.git
    ```

2. Navigate to the project directory:
    ```sh
    cd pern-todo-app
    ```

3. Install dependencies for both the client and server:
    ```sh
    cd client
    npm install
    cd ../server
    npm install
    ```

4. Set up the PostgreSQL database:
    - Create a new database named `todoapp`.
    - Create a `.env` file in the server directory and add your database credentials:
    


### Running the Application

1. Start the backend server:
    ```sh
    cd server
    npm start
    ```

2. Start the frontend development server:
    ```sh
    cd client
    npm start
    ```

## API Endpoints

### Authentication

- **POST /api/signup** - Register a new user
- **POST /api/login** - Login a user

### Users

- **GET /api/users/:id** - Get user details
- **DELETE /api/users/:id** - Delete a user account

### Todos

- **GET /api/todos** - Get all todos
- **POST /api/todos** - Create a new todo
- **PUT /api/todos/:id** - Update a todo
- **DELETE /api/todos/:id** - Delete a todo

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please contact me at [your.email@example.com](mailto:your.email@example.com).

---

Happy coding!
