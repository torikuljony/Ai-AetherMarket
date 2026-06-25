"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Upload,
  ShoppingBag,
} from "lucide-react";

export default function CreatorSidebar() {
  return (
    
    <div className="w-[260px] min-h-screen bg-[#0c1020] border-r border-[#1f2336] p-6">
      <h1 className="text-2xl font-bold text-[#d8c3ff] mb-10">
        Creator Panel
      </h1>

      <div className="space-y-3">
        <Link href="/dashboard/admin" className="flex gap-3 px-4 py-3 rounded-xl bg-[#171d32]">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/dashboard/creator/upload" className="flex gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]">
          <Upload size={18} />
          Upload Prompt
        </Link>

        <Link href="/dashboard/creator/orders" className="flex gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]">
          <ShoppingBag size={18} />
          Orders
        </Link>
      </div>
    </div>
  );
}