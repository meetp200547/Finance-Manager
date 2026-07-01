function ExpenseCard({ expense ,onSelect}) {
  return (
    <div onClick={() => onSelect(expense)} className="flex justify-between items-center p-4 border-b dark:border-slate-600 dark:text-white">
      <div>
        <h3>{expense.title}</h3>

        <p className="text-sm text-gray-500">
          {expense.category}
        </p>
      </div>

      <p
        className={`font-bold ${
          expense.type === "Income"
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {expense.type === "Income"
          ? "+"
          : "-"}
        ₹{expense.amount}
      </p>
    </div>
  );
}

export default ExpenseCard;