function ExpenseCard({ expense }) {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h3>{expense.title}</h3>

        <p className="text-sm text-gray-500">
          {expense.category}
        </p>
      </div>

      <p className="font-bold text-red-500">
        ₹{expense.amount}
      </p>
    </div>
  );
}

export default ExpenseCard;