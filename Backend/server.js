const express = require("express");
const connectDB = require('./src/db/db');
require('dotenv').config();

connectDB();
const app = express();

app.use(express.json());
const authRoutes = require("./src/routes/auth.routes");
const expenseRoutes = require("./src/routes/expense.routes");

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});