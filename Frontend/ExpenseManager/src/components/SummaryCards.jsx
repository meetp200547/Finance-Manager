function SummaryCards({
  income,
  expense,
  balance,
}) {
  return (
    <div className="grid grid-cols-3 gap-4 my-6">
      <div className="p-6 rounded-xl shadow-lg">
        <h3>Income</h3>

        <p className="text-xl font-bold text-green-500">
          ₹{income.toLocaleString()}
        </p>
      </div>

      <div className="p-6 rounded-xl shadow-lg">
        <h3>Expenses</h3>

        <p className="text-xl font-bold text-red-500">
          ₹{expense.toLocaleString()}
        </p>
      </div>

      <div className="p-6 rounded-xl shadow-lg">
        <h3>Balance</h3>

        <p className="text-xl font-bold">
          ₹{balance.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default SummaryCards;