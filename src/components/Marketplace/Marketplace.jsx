"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Filters from "./Filters";
import AssetsGrid from "./AssetsGrid";
import Trending from "./Trending";
import MarketStats from "./MarketStats";
import AssetDetail from "./AssetDetail";
import PaymentModal from "./PaymentModal";
import useAuth from "@/hooks/useAuth";

export default function Marketplace() {
  const { user } = useAuth();
  const router = useRouter();

  const [filters, setFilters] = useState({
    difficulty: [],
    price: "",
  });

  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showProPayment, setShowProPayment] = useState(false);

  const handleCardClick = (asset) => {
    if (!user) {
      router.push("/login"); // login page থাকলে
      return;
    }

    setSelectedAsset(asset);
  };

  const handleBack = () => {
    setSelectedAsset(null);
  };

  const handleProSuccess = async () => {
    try {
      const res = await fetch("/api/users/pro", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ PRO Membership Activated Successfully!");
        setShowProPayment(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (selectedAsset) {
    return <AssetDetail asset={selectedAsset} onBack={handleBack} />;
  }

  return (
    <section className="bg-[#050816] px-8 py-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-2">
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        <div className="col-span-7">
          {user?.membership !== "pro" && (
            <div className="mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl p-6">
              <h2 className="text-3xl font-bold text-black mb-2">
                Upgrade to PRO 💎
              </h2>
              <p className="text-black/80 mb-4">
                Get unlimited access to all premium prompts with one purchase.
              </p>

              <button
                onClick={() => {
                  if (!user) {
                    router.push("/login");
                    return;
                  }
                  setShowProPayment(true);
                }}
                className="bg-black text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
              >
                Buy PRO Now
              </button>
            </div>
          )}

          <h1 className="text-white text-3xl font-bold mb-6">
            Latest Assets
          </h1>

          <AssetsGrid filters={filters} onCardClick={handleCardClick} />
        </div>

        <div className="col-span-3">
          <Trending />
          <MarketStats />
        </div>
      </div>

      {showProPayment && (
        <PaymentModal
          asset={{
            id: "pro-membership",
            title: "PRO Membership",
            price: 29,
            description: "Unlimited access to all premium prompts",
          }}
          user={user}
          onClose={() => setShowProPayment(false)}
          onSuccess={handleProSuccess}
        />
      )}
    </section>
  );
}