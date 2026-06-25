"use client";

import { useState } from "react";

export default function PaymentModal({ asset, user, onClose, onSuccess }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert("Payment Successful");
      setLoading(false);

      if (onSuccess) onSuccess();
      if (onClose) onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[9999]">
      <div className="bg-[#11192d] w-[450px] p-6 rounded-2xl text-white shadow-2xl">
        <h2 className="text-2xl font-bold mb-5">
          Payment Modal
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-3 rounded-lg bg-[#1b2742]"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />

          <input
            type="text"
            placeholder="MM/YY"
            className="w-full p-3 rounded-lg bg-[#1b2742]"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />

          <input
            type="text"
            placeholder="CVV"
            className="w-full p-3 rounded-lg bg-[#1b2742]"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={onClose}
            className="w-1/2 bg-gray-500 py-3 rounded-lg"
          >
            Close
          </button>

          <button
            onClick={handlePay}
            disabled={loading}
            className="w-1/2 bg-purple-600 py-3 rounded-lg"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
}