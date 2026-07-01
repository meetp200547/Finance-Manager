import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses ,onSelect }) {
  const groupedExpenses = expenses.reduce(
    (groups, expense) => {
      const date = new Date(
        expense.date
      ).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      if (!groups[date]) {
        groups[date] = [];
      }

      groups[date].push(expense);

      return groups;
    },
    {}
  );

  return (
    <div className="mt-6">
      {Object.entries(groupedExpenses).map(
        ([date, expenses]) => (
          <div
            key={date}
            className="mb-8"
          >
            <h2 className="text-xl font-bold mb-4">
              {date}
            </h2>

            {expenses.map((expense) => (
              <ExpenseCard
                key={expense._id}
                expense={expense}
                onSelect={onSelect}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default ExpenseList;