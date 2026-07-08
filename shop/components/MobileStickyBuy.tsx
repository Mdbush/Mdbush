"use client";

import { useState, useEffect, useRef } from "react";
import { track } from "@vercel/analytics";
import { formatPrice } from "@/lib/products";

export default function MobileStickyBuy({
  productSlug,
  productName,
  price,
}: {
  productSlug: string;
  productName: string;
  price: number;
}) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleSubmit() {
    setLoading(true);
    track("checkout_click", { product: productSlug, price, source: "mobile_sticky" });
  }

  return (
    <>
      {/* Sentinel placed at the top of the page — sticky bar appears after this scrolls out of view */}
      <div ref={sentinelRef} className="h-px" />

      {/* Sticky bar — mobile only */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-4 py-3 shadow-lg transition-transform duration-200 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 truncate">{productName}</p>
            <p className="text-base font-bold text-gray-900">{formatPrice(price)}</p>
          </div>
          <form action="/api/checkout" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="productSlug" value={productSlug} />
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-colors text-sm disabled:opacity-70 whitespace-nowrap"
            >
              {loading ? "Loading…" : "Buy Now →"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
