"use client";
import { useEmailSubscribe } from "./useEmailSubscribe";

export default function EmailCapture() {
  const { email, setEmail, status, handleSubmit } = useEmailSubscribe();

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-14">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Free · No credit card</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          10 AI prompts every freelancer needs
        </h2>
        <p className="text-gray-400 text-sm mb-5 leading-relaxed">
          Our 10 highest-performing prompts for client proposals, follow-up emails,
          invoice reminders, and content — delivered to your inbox.
        </p>

        <div className="flex flex-col gap-1.5 mb-6 text-left max-w-xs mx-auto">
          {["Client proposal that wins projects", "Follow-up email that re-opens cold leads", "Overdue invoice reminder", "Scope creep reply", "LinkedIn bio prompt"].map((item) => (
            <p key={item} className="text-sm text-gray-400 flex items-center gap-2">
              <span className="text-green-400 shrink-0">✓</span>
              {item}
            </p>
          ))}
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="text-gray-600 shrink-0">+</span>
            5 more prompts
          </p>
        </div>

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
              {status === "loading" ? "Sending…" : "Send me the prompts →"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-red-400 text-xs">Something went wrong. Try again.</p>
        )}

        <p className="mt-4 text-gray-600 text-xs">No spam. Unsubscribe anytime. Or <a href="/free" className="underline text-gray-500 hover:text-gray-400">view them online now</a>.</p>
      </div>
    </section>
  );
}
