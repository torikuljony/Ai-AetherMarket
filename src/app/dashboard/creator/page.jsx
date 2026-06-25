"use client";

import { useEffect, useState } from "react";

export default function CreatorDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const totalSales = orders.length;
  const totalRevenue = orders.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-8">Creator Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#11192d] p-6 rounded-xl">
          <p className="text-gray-400">Total Orders</p>
          <h2 className="text-3xl font-bold mt-2">{totalSales}</h2>
        </div>

        <div className="bg-[#11192d] p-6 rounded-xl">
          <p className="text-gray-400">Total Sales</p>
          <h2 className="text-3xl font-bold mt-2">{totalSales}</h2>
        </div>

        <div className="bg-[#11192d] p-6 rounded-xl">
          <p className="text-gray-400">Total Earnings</p>
          <h2 className="text-3xl font-bold mt-2">${totalRevenue}</h2>
        </div>
      </div>

      <div className="bg-[#11192d] p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>

        <div className="space-y-4">
          {orders.slice(0, 5).map((order) => (
            <div key={order._id} className="bg-[#1b233b] p-4 rounded-xl">
              <p className="font-bold">{order.promptTitle}</p>
              <p className="text-gray-400 text-sm">{order.buyerName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}