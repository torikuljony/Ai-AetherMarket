"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function UserSidebar() {
  return (
    <div className="w-[260px] min-h-screen bg-[#0c1020] border-r border-[#1f2336] p-6">
      <h1 className="text-2xl font-bold text-[#d8c3ff] mb-10">
        User Dashboard
      </h1>

      <div className="space-y-3">
        <Link
          href="/dashboard/user/orders"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#171d32] hover:bg-[#232b47]"
        >
          <ShoppingBag size={18} />
          Orders
        </Link>
      </div>
    </div>
  );
}