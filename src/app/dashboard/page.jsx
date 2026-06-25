"use client";

import { useEffect, useState } from "react";
import UserSidebar from "@/components/dashboard/UserSidebar";
import useAuth from "@/hooks/useAuth";

export default function UserDashboard() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`/api/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  const totalSpend = orders.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <div className="flex bg-[#050816] text-white min-h-screen">
      <UserSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#11192d] p-6 rounded-2xl">
            <h2 className="text-gray-400">Purchased Prompts</h2>
            <p className="text-3xl font-bold mt-2">{orders.length}</p>
          </div>

          <div className="bg-[#11192d] p-6 rounded-2xl">
            <h2 className="text-gray-400">Total Spend</h2>
            <p className="text-3xl font-bold mt-2">${totalSpend}</p>
          </div>
        </div>

        <div className="bg-[#11192d] rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-5">Purchase History</h2>

          {orders.length === 0 ? (
            <p>No purchases yet.</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="bg-[#1a2338] p-4 rounded-xl flex justify-between"
                >
                  <div>
                    <h3 className="font-bold">{order.promptTitle}</h3>
                    <p className="text-sm text-gray-400">{order.status}</p>
                  </div>

                  <p className="font-bold text-green-400">${order.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}