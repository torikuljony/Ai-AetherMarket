"use client";

import { useState } from "react";
import Filters from "@/components/Marketplace/Filters";
import { SlidersHorizontal, X } from "lucide-react";

export default function MarketplacePage() {
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    difficulty: [],
    price: "",
  });

  return (
    <div className="bg-[#050816] min-h-screen text-white">
      
      {/* Mobile Filter Button */}
      <div className="lg:hidden px-4 py-4">
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center gap-2 bg-[#11192d] border border-[#2a2f46] px-4 py-3 rounded-xl w-full justify-center"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>

      <div className="flex gap-6 px-4 lg:px-8">
        
        {/* Desktop Filters */}
        <div className="hidden lg:block w-[280px]">
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* AssetsGrid / Marketplace content */}
        </div>
      </div>

      {/* Mobile Drawer */}
      {showFilters && (
        <>
          {/* Background Overlay */}
          <div
            onClick={() => setShowFilters(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-[#050816] z-50 p-4 overflow-y-auto transition-all">
            
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>

              <button onClick={() => setShowFilters(false)}>
                <X size={24} />
              </button>
            </div>

            <Filters filters={filters} setFilters={setFilters} />
          </div>
        </>
      )}
    </div>
  );
}