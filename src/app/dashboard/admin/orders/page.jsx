"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/components/dashboard/AdminSidebar";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="flex bg-[#050816] text-white min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">All Orders</h1>

        <div className="space-y-4">
          {orders.map(order => (
            <div key={order._id} className="bg-[#11192d] p-5 rounded-xl">
              <h2>{order.promptTitle}</h2>
              <p>{order.buyerName}</p>
              <p>{order.buyerEmail}</p>
              <p>${order.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}