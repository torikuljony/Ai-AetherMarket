"use client";

import Navbar from "../Navbar/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <main className="pt-[72px]">
        {children}
      </main>
    </div>
  );
}