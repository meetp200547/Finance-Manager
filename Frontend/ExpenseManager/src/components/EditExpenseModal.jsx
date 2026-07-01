import { useState, useEffect }
from "react";

function EditExpenseModal({
  expense,
  onClose,
  onUpdate,
  onDelete,
}) {
  const [formData,
    setFormData] = useState({
      title: "",
      amount: "",
      category: "",
      type: "",
      date: "",
      notes: "",
    });

  useEffect(() => {
    if (expense) {
      setFormData({
        title: expense.title,
        amount: expense.amount,
        category: expense.category,
        type: expense.type,
        date:
        expense.date.split("T")[0],
        notes: expense.notes || "",
      });
    }
  }, [expense]);

  if (!expense) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl w-full max-w-md">

        <h2 className="text-2xl font-bold mb-4">
          Edit Expense
        </h2>

        {/* same fields as AddExpenseModal */}
        <form className="space-y-4">
  <input
    type="text"
    value={formData.title}
    onChange={(e) =>
      setFormData({
        ...formData,
        title: e.target.value,
      })
    }
    className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="number"
    value={formData.amount}
    onChange={(e) =>
      setFormData({
        ...formData,
        amount: e.target.value,
      })
    }
    className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 "
  />

  <select
    value={formData.type}
    onChange={(e) =>
      setFormData({
        ...formData,
        type: e.target.value,
      })
    }
    className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="Income">
      Income
    </option>

    <option value="Expense">
      Expense
    </option>
  </select>

  <select
    value={formData.category}
    onChange={(e) =>
      setFormData({
        ...formData,
        category: e.target.value,
      })
    }
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
    type="date"
    value={formData.date}
    onChange={(e) =>
      setFormData({
        ...formData,
        date: e.target.value,
      })
    }
    className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <textarea
    value={formData.notes}
    onChange={(e) =>
      setFormData({
        ...formData,
        notes: e.target.value,
      })
    }
    className="w-full border border-gray-300 dark:border-slate-700 p-3 rounded bg-white text-black dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Notes"
  />
</form>

        <div className="flex gap-3 mt-4">

          <button
            onClick={() =>
              onUpdate(
                expense._id,
                formData
              )
            }
            className="
              flex-1
              bg-blue-600
              text-white
              py-2
              rounded
            "
          >
            Save Changes
          </button>

          <button
            onClick={() =>
              onDelete(
                expense._id
              )
            }
            className="
              flex-1
              bg-red-600
              text-white
              py-2
              rounded
            "
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditExpenseModal;