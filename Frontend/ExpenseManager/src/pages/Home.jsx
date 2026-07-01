import Navbar from "../components/Navbar";
import MonthSelector from "../components/MonthSelector";
import SummaryCards from "../components/SummaryCards";
import SearchBar from "../components/SearchBar";
import ExpenseList from "../components/ExpenseList";
import { useState , useEffect } from "react";
import AddExpense from "../components/AddExpense";
import AddExpenseModal from "../components/AddExpenseModal";
import { createExpense, getExpenses , updateExpense, deleteExpense } from "../services/expenseService";
import EditExpenseModal from "../components/EditExpenseModal";


function Home({darkMode,setDarkMode}) {
  const [currentMonth, setCurrentMonth] =
    useState(new Date());
    const [showModal, setShowModal] =
  useState(false);
  const [expenses, setExpenses] = 
  useState([]);
  const [selectedDate, setSelectedDate] =
  useState("");
  const [selectedExpense,
  setSelectedExpense] =
  useState(null);

  const filteredExpenses =
  selectedDate === ""
    ? expenses
    : expenses.filter((expense) => {
        const expenseDate =
          new Date(expense.date)
            .toISOString()
            .split("T")[0];

        return (
          expenseDate === selectedDate
        );
      });
  const totalIncome = expenses
  .filter((item) => item.type === "Income")
  .reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

const totalExpense = expenses
  .filter((item) => item.type === "Expense")
  .reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

const balance = totalIncome - totalExpense;
  const fetchExpenses = async () => {
  try {
    const month =
      currentMonth.getMonth() + 1;

    const year =
      currentMonth.getFullYear();

    const data = await getExpenses(
      month,
      year
    );

    setExpenses(data.expenses);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchExpenses();
}, [currentMonth]);
  const handleSaveExpense = async (
  expenseData
) => {
  try {
    await createExpense(expenseData);

    await fetchExpenses();

    setShowModal(false);

    alert("Expense Added");
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to create expense"
    );
  }
  };

  const handleUpdateExpense =
  async (id, data) => {
    try {
      await updateExpense(
        id,
        data
      );

      await fetchExpenses();

      setSelectedExpense(
        null
      );
    } catch (err) {
      console.log(err);
    }
};
const handleDeleteExpense =
  async (id) => {
    try {
      await deleteExpense(id);

      await fetchExpenses();

      setSelectedExpense(
        null
      );
    } catch (err) {
      console.log(err);
    }
};

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
    <div 
  className="
  max-w-6xl
  mx-auto
  min-h-screen
  py-4
  px-10

  
  overflow-hidden

  bg-slate-100
  dark:bg-slate-900

  text-black
  dark:text-white
">
      <Navbar darkMode={darkMode}
      setDarkMode={setDarkMode} />

      <MonthSelector
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />

      <SummaryCards
  income={totalIncome}
  expense={totalExpense}
  balance={balance}
/>

<SearchBar
  selectedDate={selectedDate}
  setSelectedDate={setSelectedDate}
/>  
     <ExpenseList
  expenses={filteredExpenses}
  onSelect={setSelectedExpense}
/>
      <AddExpense
  onClick={() => setShowModal(true)}
  darkMode={darkMode}
/>

<AddExpenseModal
darkMode={darkMode} 
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  onSave={handleSaveExpense}
/>
<EditExpenseModal
  expense={selectedExpense}
  onClose={() =>
    setSelectedExpense(
      null
    )
  }
  onUpdate={
    handleUpdateExpense
  }
  onDelete={
    handleDeleteExpense
  }
/>

      
    </div>
    </div>
  );
}

export default Home;