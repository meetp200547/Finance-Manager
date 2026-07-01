import { useState } from "react";

export default function AddExpenseModal({
  darkMode,
  isOpen,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState({
    type:"Expense",
    title: "",
    amount: "",
    category: "Food",
    date: new Date().toISOString().split("T")[0],
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="p-6 rounded-xl w-full max-w-md bg-white text-black dark:bg-slate-800 dark:text-white">
        <h2 className="text-2xl font-bold mb-4">
          Record Expense
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Expense">
              Expense
            </option>

            <option value="Income">
              Income
            </option>
          </select>
          <input
            name="title"
            placeholder="Expense title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Entertainment</option>
            <option>Bills</option>
            <option>Health</option>
            <option>Other</option>
          </select>

          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition-colors duration-200 dark:bg-slate-700"
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-black py-3 rounded hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}