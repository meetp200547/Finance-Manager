# Expense Manager

Expense Manager is a full-stack MERN application for tracking personal income and expenses. It provides secure authentication, complete CRUD functionality, monthly and date-wise filtering, dark mode support, and a responsive user interface.

Built as a portfolio project to strengthen full-stack development skills using modern web technologies.

---

## Features

* Secure user authentication with JWT
* User registration and login
* Add, edit, and delete transactions
* Track both income and expenses
* Monthly and date-wise filtering
* Dynamic dashboard with:

  * Total Income
  * Total Expenses
  * Remaining Balance
* Transactions grouped by date
* Dark mode support
* Responsive UI with modal-based forms

---

## Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Tailwind CSS v4
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

---

## Project Structure

```text
Finance-Manager/
│
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── Frontend/
    ├── components/
    ├── pages/
    ├── services/
    ├── routes/
    └── App.jsx
```

---

## Installation

### Backend

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash
npm start
```

### Frontend

```bash
cd Frontend/Expense\ Manager
npm install
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | `/api/auth/register` |
| POST   | `/api/auth/login`    |

### Expenses

| Method | Endpoint                     |
| ------ | ---------------------------- |
| GET    | `/api/expenses?month=&year=` |
| POST   | `/api/expenses`              |
| PUT    | `/api/expenses/:id`          |
| DELETE | `/api/expenses/:id`          |

---

## Current Functionality

* JWT Authentication
* Protected Routes
* Expense CRUD Operations
* Income & Expense Tracking
* Monthly and Date Filtering
* Dynamic Summary Cards
* Dark Mode
* Responsive Design

---

## Planned Features

* Statistics Dashboard (Recharts)
* OCR Bill Scanner
* Expense Analytics
* Export Transactions

---

## Author

**Meet**

A full-stack MERN project built to practice authentication, REST APIs, CRUD operations, and responsive React application development.
