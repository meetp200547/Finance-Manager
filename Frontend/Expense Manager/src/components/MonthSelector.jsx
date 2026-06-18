function MonthSelector({
  currentMonth,
  setCurrentMonth,
}) {
  const goToPreviousMonth = () => {
    const newDate = new Date(currentMonth);

    newDate.setMonth(
      currentMonth.getMonth() - 1
    );

    setCurrentMonth(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentMonth);

    newDate.setMonth(
      currentMonth.getMonth() + 1
    );

    setCurrentMonth(newDate);
  };

  return (
    <div className="flex items-center justify-center gap-6 my-6">
      <button
        onClick={goToPreviousMonth}
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
      >
        ←
      </button>

      <h2 className="text-2xl font-bold">
        {currentMonth.toLocaleString(
          "default",
          {
            month: "long",
            year: "numeric",
          }
        )}
      </h2>

      <button
        onClick={goToNextMonth}
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
      >
        →
      </button>
    </div>
  );
}

export default MonthSelector;