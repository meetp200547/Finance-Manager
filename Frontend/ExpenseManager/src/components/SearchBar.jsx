function SearchBar({
  selectedDate,
  setSelectedDate,
}) {
  return (
    <div className="my-6">
      <div
        className="
          bg-white
  dark:bg-slate-800

  rounded-2xl
  shadow-md
  p-4
        "
      >
       

        <div className="flex-1">
          <label
            className="
            block
            text-sm
            text-gray-500
            mb-1
            "
          >
            Filter by Date
          </label>

          <input
            type="date"
            lang="en-GB"
            value={selectedDate}
            onChange={(e) =>
              setSelectedDate(
                e.target.value
              )
            }
            className="
               w-full

    bg-white
    dark:bg-slate-700

    text-black
    dark:text-white

    border
    border-gray-200
    dark:border-slate-600

    rounded-xl
    px-4
    py-2
            "
          />
        </div>

        {selectedDate && (
          <button
            onClick={() =>
              setSelectedDate("")
            }
            className="
              mt-2
              px-3
              py-2
              bg-gray-100
              dark:bg-slate-600
              hover:bg-gray-200
              dark:hover:bg-slate-700
              rounded-xl
              text-sm
              font-medium
              transition
            "
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;