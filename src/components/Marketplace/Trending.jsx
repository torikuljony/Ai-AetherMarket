export default function Trending() {
  return (
    <div className="w-full max-w-full overflow-hidden bg-[#11192d] border border-[#2a2f46] rounded-2xl p-3 sm:p-5 text-white">
      <h2 className="text-base sm:text-xl font-bold mb-4 sm:mb-6">
        Trending
      </h2>

      <div className="space-y-4 sm:space-y-5">
        <div className="min-w-0">
          <h3 className="font-semibold text-sm sm:text-base break-words leading-snug">
            Macro Iris Photorealism
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            2.4k sales
          </p>
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-sm sm:text-base break-words leading-snug">
            Ghostwriter Suite Pro
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            1.1k sales
          </p>
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-sm sm:text-base break-words leading-snug">
            Baroque Cyborg Portrait
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            988 sales
          </p>
        </div>
      </div>
    </div>
  );
}