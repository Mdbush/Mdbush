"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const questions = [
  {
    question: "What's your biggest challenge right now?",
    options: [
      { label: "I lose track of clients and can't see my pipeline clearly", value: "crm" },
      { label: "I write the same emails and proposals from scratch every time", value: "ai" },
      { label: "Every project feels chaotic — no standard way of doing things", value: "sop" },
      { label: "I need everything — I'm building a real business system", value: "os" },
    ],
  },
  {
    question: "How do you currently track your clients?",
    options: [
      { label: "WhatsApp chats and my memory", value: "crm" },
      { label: "A spreadsheet that I keep meaning to improve", value: "crm" },
      { label: "Notion or another tool — but it's messy", value: "os" },
      { label: "I have a system — I need help with content and communication", value: "ai" },
    ],
  },
  {
    question: "What would save you the most time this week?",
    options: [
      { label: "Not having to write proposals from scratch", value: "ai" },
      { label: "Knowing exactly which clients owe me money", value: "crm" },
      { label: "Having a checklist for every new project I start", value: "sop" },
      { label: "All of the above, honestly", value: "os" },
    ],
  },
];

const products: Record<string, { name: string; slug: string; emoji: string; price: string; tagline: string; color: string; why: string; alsoConsider: string }> = {
  crm: {
    name: "Freelancer Client CRM",
    slug: "freelancer-client-crm",
    emoji: "📋",
    price: "AED 175",
    tagline: "Track every client, project, and invoice in one Notion workspace.",
    color: "bg-blue-50 border-blue-200",
    why: "Your biggest time drain is client tracking. This CRM gives you one place for leads, active projects, invoices, and follow-ups — set up in 20 minutes, saves 3+ hours a week.",
    alsoConsider: "ai-prompt-pack-pro",
  },
  ai: {
    name: "AI Prompt Pack Pro",
    slug: "ai-prompt-pack-pro",
    emoji: "🤖",
    price: "AED 109",
    tagline: "200 tested prompts for proposals, emails, content, and client work.",
    color: "bg-purple-50 border-purple-200",
    why: "Writing from scratch kills your productivity. These 200 prompts are pre-tested and organized by task — proposals in 5 minutes, follow-up emails in 2, LinkedIn posts in 10. No more staring at blank pages.",
    alsoConsider: "freelancer-client-crm",
  },
  sop: {
    name: "SOP Starter Pack",
    slug: "sop-starter-pack",
    emoji: "📝",
    price: "AED 175",
    tagline: "50 SOPs for onboarding, finance, content, and client management.",
    color: "bg-green-50 border-green-200",
    why: "Chaotic projects cost you time and credibility. These 50 SOPs give you a standard process for client onboarding, revision requests, invoicing, and every repeatable task in your business.",
    alsoConsider: "freelancer-client-crm",
  },
  os: {
    name: "Solopreneur OS",
    slug: "solopreneur-os",
    emoji: "🚀",
    price: "AED 249",
    tagline: "Your entire business in one Notion workspace.",
    color: "bg-orange-50 border-orange-200",
    why: "You're ready to build a real system. The Solopreneur OS gives you a revenue dashboard, 90-day goal planner, content calendar, and task system — everything you need to run a professional solo business from one Notion workspace.",
    alsoConsider: "freelancer-client-crm",
  },
};

function getRecommendation(answers: string[]): string {
  const counts: Record<string, number> = { crm: 0, ai: 0, sop: 0, os: 0 };
  for (const a of answers) counts[a] = (counts[a] ?? 0) + 1;
  const max = Math.max(...Object.values(counts));
  const winners = Object.entries(counts)
    .filter(([, v]) => v === max)
    .map(([k]) => k);
  if (winners.length > 1) return "os";
  return winners[0];
}

export default function StartPage() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  function handleAnswer(value: string) {
    const next = [...answers, value];
    setAnswers(next);
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(3);
    }
  }

  function reset() {
    setStep(0);
    setAnswers([]);
  }

  const recommendation = step === 3 ? products[getRecommendation(answers)] : null;

  return (
    <>
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-10">

        {/* Dark gradient hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-10 text-center">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Start Here</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
            Find your perfect SoloKit tool
          </h1>
          <p className="text-gray-300 text-sm">3 questions · 30 seconds · instant recommendation</p>
        </div>

        {step < 3 && (
          <div>
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Question {step + 1} / 3
              </span>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-8 rounded-full transition-colors ${
                      i <= step ? "bg-emerald-500" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question */}
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              {questions[step].question}
            </h2>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.value + opt.label}
                  onClick={() => handleAnswer(opt.value)}
                  className="w-full text-left border border-gray-200 rounded-xl p-4 hover:border-emerald-500 hover:bg-emerald-50 transition-all text-sm text-gray-800 font-medium"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && recommendation && (
          <div>
            <p className="text-center text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-6">Your result</p>

            <div className={`border-2 rounded-2xl p-7 mb-5 ${recommendation.color}`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl shrink-0">{recommendation.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{recommendation.name}</h2>
                  <p className="text-sm text-gray-500 mt-0.5">{recommendation.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-5 border-t border-gray-200 pt-4">
                {recommendation.why}
              </p>

              <div className="flex items-center justify-between gap-4">
                <p className="text-2xl font-bold text-gray-900">{recommendation.price}</p>
                <Link
                  href={`/products/${recommendation.slug}`}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm"
                >
                  Get this product →
                </Link>
              </div>
            </div>

            {/* Guarantee */}
            <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 text-sm text-emerald-800">
              <span className="text-lg shrink-0">🛡️</span>
              <span>30-day money-back guarantee. If it&apos;s not right, email us for a full refund.</span>
            </div>

            {/* Also consider */}
            {(() => {
              const other = products[recommendation.alsoConsider];
              if (!other) return null;
              return (
                <div className="border border-gray-200 rounded-xl p-4 mb-6 hover:border-emerald-300 transition-colors">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Also consider</p>
                  <Link href={`/products/${other.slug}`} className="flex items-center gap-3 group">
                    <span className="text-2xl">{other.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">{other.name}</p>
                      <p className="text-xs text-gray-500 truncate">{other.tagline}</p>
                    </div>
                    <span className="text-sm font-bold text-emerald-600 shrink-0">{other.price} →</span>
                  </Link>
                </div>
              );
            })()}

            <div className="flex flex-col items-center gap-3 text-sm text-gray-400">
              <Link href="/#products" className="hover:text-emerald-600 transition-colors">
                Browse all 4 products →
              </Link>
              <button onClick={reset} className="hover:text-gray-700 transition-colors">
                Retake quiz
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
