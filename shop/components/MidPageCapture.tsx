"use client";
import { useEmailSubscribe } from "./useEmailSubscribe";

export default function MidPageCapture() {
  const { email, setEmail, status, handleSubmit } = useEmailSubscribe();

  if (status === "success") {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
          <p className="text-green-700 font-semibold text-sm">✓ Done — check your inbox for the bonus prompts.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">5 more prompts — free</p>
            <p className="text-white font-bold text-lg leading-tight mb-1">
              Get 5 bonus prompts in your inbox
            </p>
            <p className="text-gray-400 text-sm">
              Rate negotiation · Client red flags · Project scoping · Retainer pitch · Cold outreach
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:items-center shrink-0">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 w-full sm:w-52"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-white text-gray-900 font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm shrink-0 disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send →"}
            </button>
          </form>
        </div>
        {status === "error" && (
          <p className="mt-3 text-red-400 text-xs">Something went wrong — try again.</p>
        )}
        <p className="mt-3 text-gray-600 text-xs">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
