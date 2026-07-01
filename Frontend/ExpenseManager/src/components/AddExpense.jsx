function AddExpense({ onClick,darkMode }) {
  return (
    <button
      onClick={onClick}
      className="
      fixed
      bottom-6
      left-1/2
      -translate-x-1/2
      bg-blue-600
      hover:bg-blue-700
      text-white
      dark:bg-slate-700

      font-semibold
      px-8
      py-4
      rounded-full
      shadow-lg
      transition-all
      duration-200
      "
    >
      + Add Transaction
    </button>
  );
}

export default AddExpense;