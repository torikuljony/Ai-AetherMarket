"use client";

import { useEffect, useState } from "react";

export default function CreatorOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-8">Creator Orders</h1>

      <div className="space-y-4">
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="bg-[#11192d] p-5 rounded-xl">
              <h2 className="font-bold text-lg">{order.promptTitle}</h2>
              <p className="text-gray-400">Buyer: {order.buyerName}</p>
              <p className="text-gray-400">Email: {order.buyerEmail}</p>
              <p className="text-green-400 font-semibold mt-2">
                ${order.price}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}