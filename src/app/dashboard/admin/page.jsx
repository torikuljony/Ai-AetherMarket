"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/AdminSidebar";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const totalSales = orders.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <div className="flex bg-[#050816] text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#11192d] p-6 rounded-2xl">
            <h2 className="text-gray-400">Total Orders</h2>
            <p className="text-3xl font-bold mt-2">{orders.length}</p>
          </div>

          <div className="bg-[#11192d] p-6 rounded-2xl">
            <h2 className="text-gray-400">Total Revenue</h2>
            <p className="text-3xl font-bold mt-2">${totalSales}</p>
          </div>

          <div className="bg-[#11192d] p-6 rounded-2xl">
            <h2 className="text-gray-400">Completed Orders</h2>
            <p className="text-3xl font-bold mt-2">
              {orders.filter((o) => o.status === "completed").length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}