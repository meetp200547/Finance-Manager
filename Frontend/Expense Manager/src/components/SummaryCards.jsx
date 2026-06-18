function SummaryCards() {
  return (
    <div className="grid grid-cols-3 gap-4 my-6">
      <div className="p-4 rounded-xl shadow">
        <h3>Income</h3>
        <p className="text-xl font-bold text-green-500">
          ₹50,000
        </p>
      </div>

      <div className="p-4 rounded-xl shadow">
        <h3>Expenses</h3>
        <p className="text-xl font-bold text-red-500">
          ₹12,231
        </p>
      </div>

      <div className="p-4 rounded-xl shadow">
        <h3>Balance</h3>
        <p className="text-xl font-bold">
          ₹37,769
        </p>
      </div>
    </div>
  );
}

export default SummaryCards;