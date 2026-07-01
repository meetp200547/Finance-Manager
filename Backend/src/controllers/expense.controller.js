const Expense = require("../models/expense.model");

// @desc    Create new expense
// @route   POST /api/expenses
// @access  Private
const createExpense = async (req, res) => {
  try {
    const { type,title, amount, category, date, notes } = req.body;

    if (!title || amount === undefined || !type || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, amount, and category are required",
      });
    }

    // Validate category
    const validCategories = [
      "Food",
      "Transport",
      "Shopping",
      "Entertainment",
      "Bills",
      "Health",
      "Other",
    ];

    if (!validCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: `Invalid category. Must be one of: ${validCategories.join(", ")}`,
      });
    }

    const expense = await Expense.create({
      type,
      title,
      amount,
      category,
      date: date || new Date(),
      notes: notes || "",
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Expense created successfully",
      expense,
    });
  } catch (error) {
    console.error("Create expense error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc    Get all expenses for logged-in user, optionally filtered by month and year
// @route   GET /api/expenses
// @access  Private
const getExpenses = async (req, res) => {
  try {
    const { month, year } = req.query;
    let query = { user: req.user._id };

    if (month && year) {
      const m = parseInt(month, 10);
      const y = parseInt(year, 10);

      if (isNaN(m) || isNaN(y) || m < 1 || m > 12) {
        return res.status(400).json({
          success: false,
          message: "Invalid month or year parameter. Month must be between 1 and 12, and year must be a valid number.",
        });
      }

      // UTC start and end dates
      const startDate = new Date(Date.UTC(y, m - 1, 1));
      const endDate = new Date(Date.UTC(y, m, 1));

      query.date = {
        $gte: startDate,
        $lt: endDate,
      };
    } 

    const expenses = await Expense.find(query).sort({
      date: -1,
    });

    res.status(200).json({
      success: true,
      count: expenses.length,
      expenses,
    });
  } catch (error) {
    console.error("Get expenses error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc    Update expense fields
// @route   PUT /api/expenses/:id
// @access  Private
const updateExpense = async (req, res) => {
  try {
    const { type, title, amount, category, date, notes } = req.body;
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      });
    }

    // Verify user ownership
    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this expense",
      });
    }

    // Validate category if provided
    if (category) {
      const validCategories = [
        "Food",
        "Transport",
        "Shopping",
        "Entertainment",
        "Bills",
        "Health",
        "Other",
      ];
      if (!validCategories.includes(category)) {
        return res.status(400).json({
          success: false,
          message: `Invalid category. Must be one of: ${validCategories.join(", ")}`,
        });
      }
      expense.category = category;
    }

    // Update other fields if provided
    if (title !== undefined) {
      if (!title.trim()) {
        return res.status(400).json({
          success: false,
          message: "Title cannot be empty",
        });
      }
      expense.title = title;
    }

    if (amount !== undefined) {
      if (amount < 0) {
        return res.status(400).json({
          success: false,
          message: "Amount must be a non-negative number",
        });
      }
      expense.amount = amount;
    }

    if (date !== undefined) {
      expense.date = date;
    }

    if (notes !== undefined) {
      expense.notes = notes;
    }
    if (type !== undefined) {
      if (!["Expense", "Income"].includes(type)) {
        return res.status(400).json({
          success: false,
          message: "Invalid type. Must be either 'Expense' or 'Income'",
        });
      }
      expense.type = type;
    }

    const updatedExpense = await expense.save();

    res.status(200).json({
      success: true,
      message: "Expense updated successfully",
      expense: updatedExpense,
    });
  } catch (error) {
    console.error("Update expense error:", error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc    Delete expense belonging to logged-in user
// @route   DELETE /api/expenses/:id
// @access  Private
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      });
    }

    // Verify user ownership
    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this expense",
      });
    }

    await expense.deleteOne();

    res.status(200).json({
      success: true,
      message: "Expense deleted successfully",
    });
  } catch (error) {
    console.error("Delete expense error:", error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      });
    }
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
};
