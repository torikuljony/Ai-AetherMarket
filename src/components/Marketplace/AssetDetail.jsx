"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import PaymentModal from "../PaymentModal";

export default function AssetDetail({ asset, onBack }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  
  const isProUser = user?.membership === "pro";

  // Debug: Check if promptText is coming
  console.log("Asset received in AssetDetail:", asset);

  if (!asset) return null;

  useEffect(() => {
    if (!user?.email || !asset?.id) return;

    const checkPurchase = async () => {
      try {
        const res = await fetch(`/api/orders?email=${user.email}`);
        const data = await res.json();
        const found = data.find((item) => item.promptId === asset.id);
        if (found) setPurchased(true);
      } catch (error) {
        console.log(error);
      }
    };

    checkPurchase();
  }, [user, asset]);

  const handleBuy = async () => {
    if (!user) {
      alert("Please login first.");
      return;
    }

    setShowPayment(true);
  };

  const unlocked = isProUser || purchased;

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 rounded-3xl text-gray-300 hover:text-white transition-all duration-300 mb-8 backdrop-blur-sm"
          >
            <span className="text-2xl transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span className="font-semibold tracking-wide">Back to Marketplace</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Image Section */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={asset.image}
                alt={asset.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">{asset.title}</h1>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">
                  {asset.price === 0 ? "FREE" : `$${asset.price}`}
                </span>

                {unlocked ? (
                  <div className="px-8 py-3 rounded-2xl bg-green-500 text-black font-bold">
                    🔓 Unlocked
                  </div>
                ) : (
                  <button
                    onClick={handleBuy}
                    disabled={loading}
                    className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-2xl font-semibold disabled:opacity-70"
                  >
                    {loading ? "Processing..." : "Buy Now"}
                  </button>
                )}
              </div>

              <p className="text-gray-300 text-lg">{asset.description}</p>

              {/* Prompt Section */}
              <div className="bg-[#1a1a1a] p-6 rounded-3xl">
                <h3 className="font-semibold mb-4">Prompt Access</h3>
                {unlocked ? (
                  <div className="space-y-3">
                    <p className="text-green-400 font-bold">
                      Prompt unlocked successfully
                    </p>
                    <div className="bg-black p-4 rounded-xl text-sm text-gray-300 whitespace-pre-line leading-relaxed">
                      {asset.promptText || "Prompt content will appear here."}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400">
                    Purchase this prompt to unlock full content.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          asset={{
            ...asset,
            creatorEmail: asset.creatorEmail || "creator@gmail.com",
            creatorName: asset.creatorName || "Creator User",
          }}
          user={user}
          onClose={() => setShowPayment(false)}
          onSuccess={() => setPurchased(true)}
        />
      )}
    </>
  );
}