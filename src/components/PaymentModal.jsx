"use client";

import { useState } from "react";

export default function PaymentModal({
  asset,
  user,
  onClose,
  onSuccess,
}) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          promptId: asset.id,
          promptTitle: asset.title,
          price: asset.price,
          buyerEmail: user.email,
          buyerName: user.displayName || user.email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Payment Successful!");
        onSuccess();
        onClose();
      } else {
        alert(data.message || "Payment Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Payment Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      <div className="bg-[#11192d] w-full max-w-md rounded-3xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-6">Card Payment</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#1b2742] outline-none"
          />

          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#1b2742] outline-none"
          />

          <input
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#1b2742] outline-none"
          />
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={handlePay}
            disabled={loading}
            className="flex-1 py-3 rounded-xl bg-purple-600"
          >
            {loading ? "Processing..." : "Pay"}
          </button>
        </div>
      </div>
    </div>
  );
}