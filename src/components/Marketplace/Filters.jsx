export default function Filters({ filters, setFilters }) {
  const handleDifficulty = (value) => {
    const exists = filters.difficulty.includes(value);

    let updated;
    if (exists) {
      updated = filters.difficulty.filter((d) => d !== value);
    } else {
      updated = [...filters.difficulty, value];
    }

    setFilters({ ...filters, difficulty: updated });
  };

  const handlePrice = (value) => {
    setFilters({ ...filters, price: value });
  };

  return (
    <div className="w-full max-w-full overflow-hidden bg-[#11192d] border border-[#2a2f46] rounded-2xl p-3 sm:p-5 text-white">
      <h2 className="text-base sm:text-xl font-bold mb-4 sm:mb-6 break-words">
        Filters
      </h2>

      {/* DIFFICULTY */}
      <div className="mb-5 sm:mb-8">
        <h3 className="text-[11px] sm:text-sm text-gray-400 mb-3 sm:mb-4">
          DIFFICULTY
        </h3>

        <div className="space-y-3 text-xs sm:text-base text-gray-300">
          <label className="flex items-start gap-2 min-w-0 break-words">
            <input
              className="mt-1 shrink-0"
              type="checkbox"
              checked={filters.difficulty.includes("Beginner")}
              onChange={() => handleDifficulty("Beginner")}
            />
            <span className="break-words">Beginner</span>
          </label>

          <label className="flex items-start gap-2 min-w-0 break-words">
            <input
              className="mt-1 shrink-0"
              type="checkbox"
              checked={filters.difficulty.includes("Intermediate")}
              onChange={() => handleDifficulty("Intermediate")}
            />
            <span className="break-words">Intermediate</span>
          </label>

          <label className="flex items-start gap-2 min-w-0 break-words">
            <input
              className="mt-1 shrink-0"
              type="checkbox"
              checked={filters.difficulty.includes("Advanced")}
              onChange={() => handleDifficulty("Advanced")}
            />
            <span className="break-words">Advanced</span>
          </label>
        </div>
      </div>

      {/* PRICE */}
      <div>
        <h3 className="text-[11px] sm:text-sm text-gray-400 mb-3 sm:mb-4">
          PRICE RANGE
        </h3>

        <div className="space-y-3 text-xs sm:text-base text-gray-300">
          <label className="flex items-start gap-2 min-w-0 break-words">
            <input
              className="mt-1 shrink-0"
              type="radio"
              name="price"
              checked={filters.price === "free"}
              onChange={() => handlePrice("free")}
            />
            <span className="break-words">Free</span>
          </label>

          <label className="flex items-start gap-2 min-w-0 break-words">
            <input
              className="mt-1 shrink-0"
              type="radio"
              name="price"
              checked={filters.price === "under5"}
              onChange={() => handlePrice("under5")}
            />
            <span className="break-words">Under $5</span>
          </label>

          <label className="flex items-start gap-2 min-w-0 break-words">
            <input
              className="mt-1 shrink-0"
              type="radio"
              name="price"
              checked={filters.price === "5-15"}
              onChange={() => handlePrice("5-15")}
            />
            <span className="break-words">$5 - $15</span>
          </label>
        </div>
      </div>
    </div>
  );
}