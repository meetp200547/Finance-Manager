const express = require("express");
const {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expense.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

// Protect all routes
router.use(protect);

// Routes mapping
router.post("/", createExpense);
router.get("/", getExpenses);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

module.exports = router;
