"use client";

import { Search, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Hero({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm.trim());
  };

  return (
    <section className="min-h-[calc(100vh-72px)] bg-[#050816] flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent pointer-events-none"></div>

      {/* TITLE */}
      <div className="text-center max-w-5xl">
        <h1 className="font-bold leading-tight text-3xl sm:text-5xl md:text-7xl tracking-tighter">
          <span className="inline-block animate-fade-in-up">
            The Intelligence Layer for
          </span>
          <br />
          <span className="inline-block animate-fade-in-up animation-delay-300 bg-gradient-to-r from-[#d8c3ff] via-[#a78bff] to-[#7b61ff] bg-clip-text text-transparent">
            Creative Output
          </span>
        </h1>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-6 sm:mt-8 text-center text-[#b8bdd0] text-sm sm:text-lg max-w-3xl animate-fade-in-up animation-delay-600 px-2">
        Discover, trade, and deploy high-fidelity prompts optimized
        for leading AI models.
      </p>

      {/* SEARCH BAR */}
      <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 w-full max-w-3xl relative">
        <div className="group relative">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full rounded-3xl border border-[#2d3148] bg-[#0c1020]/90 backdrop-blur-2xl px-4 sm:px-6 py-4 sm:py-0 shadow-2xl shadow-black/50 transition-all duration-300 focus-within:border-[#7b61ff] focus-within:ring-2 focus-within:ring-[#7b61ff]/30 hover:border-[#7b61ff]/70 sm:h-16">

            <div className="flex items-center w-full">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#8d92a7]" />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search prompts, models, creators..."
                className="flex-1 ml-3 sm:ml-4 bg-transparent outline-none text-white placeholder:text-[#777c91] text-sm sm:text-lg"
              />

              <Sparkles className="w-5 h-5 text-violet-400 ml-2 hidden sm:block" />
            </div>

            <button
              type="submit"
              className="mt-4 sm:mt-0 sm:ml-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-2.5 rounded-2xl bg-gradient-to-r from-[#7b61ff] to-[#a78bff] text-white font-semibold hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-violet-500/30 flex items-center justify-center gap-2"
            >
              Search
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 px-2">
        <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#31354d] bg-[#14192d] text-sm sm:text-base text-white hover:border-[#7b61ff] hover:bg-[#1f2336] transition-all duration-200">
          Midjourney
        </button>
        <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#31354d] bg-[#14192d] text-sm sm:text-base text-white hover:border-[#7b61ff] hover:bg-[#1f2336] transition-all duration-200">
          ChatGPT
        </button>
        <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#31354d] bg-[#14192d] text-sm sm:text-base text-white hover:border-[#7b61ff] hover:bg-[#1f2336] transition-all duration-200">
          Stable Diffusion
        </button>
        <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#31354d] bg-[#14192d] text-sm sm:text-base text-white hover:border-[#7b61ff] hover:bg-[#1f2336] transition-all duration-200">
          Claude
        </button>
      </div>

      <p className="text-[10px] sm:text-xs text-gray-500 mt-6 sm:mt-8 text-center px-4 animate-fade-in-up animation-delay-900">
        Popular: Cyberpunk Portrait, SQL Optimizer, Isometric Cityscape...
      </p>
    </section>
  );
}