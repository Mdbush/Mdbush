"use client";
import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-gray-900 py-14">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Free download</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Get 10 free AI prompts for freelancers
        </h2>
        <p className="text-gray-400 text-sm mb-7 leading-relaxed">
          Drop your email and get our 10 highest-performing prompts for client proposals, follow-ups, and content — instantly.
        </p>

        {status === "success" ? (
          <div className="bg-green-900/30 border border-green-700 rounded-xl p-5 text-green-400 text-sm font-medium">
            ✓ Check your inbox — your free prompts are on the way.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-500"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm shrink-0 disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Get free prompts →"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-red-400 text-xs">Something went wrong. Try again.</p>
        )}

        <p className="mt-4 text-gray-600 text-xs">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
