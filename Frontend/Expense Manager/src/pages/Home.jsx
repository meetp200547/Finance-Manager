import Navbar from "../components/Navbar";
import MonthSelector from "../components/MonthSelector";
import SummaryCards from "../components/SummaryCards";
import SearchBar from "../components/SearchBar";
import ExpenseList from "../components/ExpenseList";
import { useState } from "react";

function Home() {
  const [currentMonth, setCurrentMonth] =
    useState(new Date());
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />

      <MonthSelector
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />

      <SummaryCards />

      <SearchBar />

      <ExpenseList />
      <button
        className="
        fixed
        bottom-6
        left-1/2
        -translate-x-1/2

        bg-blue-600
        hover:bg-blue-700

        text-white
        font-semibold

        px-8
        py-4

        rounded-full
        shadow-lg

        transition-all
        duration-200
        "
      >
        + Record Expense
      </button>
    </div>
  );
}

export default Home;