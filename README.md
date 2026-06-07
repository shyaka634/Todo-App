# ✅ Todo App — Backend API

A backend REST API for a Todo application, built as a hobby challenge in **7 hours**. The API allows users to create, read, update, and delete tasks, powered by Express and MongoDB.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## 📖 About the Project

This is a hobby project built as a personal challenge to develop a fully functional **Todo REST API** within 7 hours. It handles all core task management operations and is structured for scalability with clear separation of concerns across models, routes, middleware, and config.

---

## ✨ Features

- 📝 **Create** new todo tasks
- 📋 **Read** all tasks or a single task by ID
- ✏️ **Update** task details or completion status
- 🗑️ **Delete** tasks
- 🔒 **Middleware** support (e.g. error handling, authentication-ready)
- 🌱 **Environment-based configuration** via `.env`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | Runtime environment |
| [Express.js](https://expressjs.com/) | Web framework and routing |
| [MongoDB](https://www.mongodb.com/) | NoSQL database |
| [Mongoose](https://mongoosejs.com/) | MongoDB object modeling (ODM) |
| dotenv | Environment variable management |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shyaka634/Todo-App.git
   cd Todo-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory (see [Environment Variables](#environment-variables)):
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start the server**

   Development mode:
   ```bash
   npm run dev
   ```

   Production mode:
   ```bash
   npm start
   ```

5. **The API will be running at:**
   ```
   http://localhost:5000
   ```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get a single todo by ID |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/:id` | Update a todo by ID |
| DELETE | `/api/todos/:id` | Delete a todo by ID |

### Example Request Body (POST / PUT)

```json
{
  "title": "Buy groceries",
  "completed": false
}
```

### Example Response

```json
{
  "_id": "64a1f2b3c4e5f6a7b8c9d0e1",
  "title": "Buy groceries",
  "completed": false,
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

---

## 📁 Project Structure

```
Todo-App/
├── config/              # Database connection and app configuration
├── middleware/          # Custom Express middleware (error handling, etc.)
├── models/              # Mongoose schemas and models
├── routes/              # Express route definitions
├── .env                 # Environment variables (not committed)
├── package.json         # Project metadata and dependencies
├── package-lock.json
└── server.js            # App entry point
```

---

## 🔐 Environment Variables

Create a `.env` file in the root of the project with the following variables:

| Variable | Description | Example |
|---|---|---|
| `PORT` | Port the server runs on | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/tododb` |

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

> ⚡ Built in 7 hours as a personal coding challenge — powered by Express & MongoDB.
