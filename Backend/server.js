const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db/db");

require("dotenv").config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

const authRoutes = require("./src/routes/auth.routes");
const expenseRoutes = require("./src/routes/expense.routes");

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});