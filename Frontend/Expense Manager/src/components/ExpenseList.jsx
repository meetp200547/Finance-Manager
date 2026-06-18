import ExpenseCard from "./ExpenseCard";

function ExpenseList() {
  const expenses = [
    {
      id: 1,
      title: "Pizza",
      amount: 300,
      category: "Food",
    },
    {
      id: 2,
      title: "Coffee",
      amount: 80,
      category: "Food",
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">
        10 June 2026
      </h2>

      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;