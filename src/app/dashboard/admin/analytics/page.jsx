"use client";

import Sidebar from "@/components/dashboard/AdminSidebar";

export default function AnalyticsPage() {
  return (
    <div className="flex bg-[#050816] text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Analytics</h1>

        <div className="bg-[#11192d] p-6 rounded-2xl">
          Coming soon...
        </div>
      </div>
    </div>
  );
}