"use client";

import { useState, useRef } from "react";
import { track } from "@vercel/analytics";
import { formatPrice } from "@/lib/products";

export default function CheckoutButton({
  productSlug,
  price,
}: {
  productSlug: string;
  price: number;
}) {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit() {
    setLoading(true);
    // Fire-and-forget (sendBeacon) — survives the navigation to Lemon Squeezy.
    track("checkout_click", { product: productSlug, price });
    // Form submits normally — browser follows the 303 redirect to Lemon Squeezy
  }

  return (
    <form
      ref={formRef}
      action="/api/checkout"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="productSlug" value={productSlug} />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-emerald-500 text-white font-semibold py-3.5 rounded-xl hover:bg-emerald-400 transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Taking you to checkout…
          </>
        ) : (
          `Buy Now — ${formatPrice(price)}`
        )}
      </button>
    </form>
  );
}
