function ThemeToggle({
  darkMode,
  setDarkMode,
}) {
  return (
    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      className="
      py-2 px-2.5
      rounded-full
      text-xl
      bg-gray-200
      dark:bg-slate-700
      "
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;