"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  ShoppingBag,
} from "lucide-react";

export default function AdminSidebar() {
  return (
    <div className="w-[260px] min-h-screen bg-[#0c1020] border-r border-[#1f2336] p-6">
      <h1 className="text-2xl font-bold text-[#d8c3ff] mb-10">
        Admin Dashboard
      </h1>

      <div className="space-y-3">
        <Link href="/dashboard/admin" className="flex gap-3 px-4 py-3 rounded-xl bg-[#171d32]">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/dashboard/admin/prompts" className="flex gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]">
          <FileText size={18} />
          Prompts
        </Link>

        <Link href="/dashboard/admin/orders" className="flex gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]">
          <ShoppingBag size={18} />
          Orders
        </Link>

        <Link href="/dashboard/admin/analytics" className="flex gap-3 px-4 py-3 rounded-xl hover:bg-[#171d32]">
          <BarChart3 size={18} />
          Analytics
        </Link>
      </div>
    </div>
  );
}