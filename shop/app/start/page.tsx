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

const products: Record<string, { name: string; slug: string; emoji: string; price: string; tagline: string; color: string }> = {
  crm: {
    name: "Freelancer Client CRM",
    slug: "freelancer-client-crm",
    emoji: "📋",
    price: "AED 175",
    tagline: "Track every client, project, and invoice in one Notion workspace.",
    color: "bg-blue-50 border-blue-200",
  },
  ai: {
    name: "AI Prompt Pack Pro",
    slug: "ai-prompt-pack-pro",
    emoji: "🤖",
    price: "AED 109",
    tagline: "200 tested prompts for proposals, emails, content, and client work.",
    color: "bg-purple-50 border-purple-200",
  },
  sop: {
    name: "SOP Starter Pack",
    slug: "sop-starter-pack",
    emoji: "📝",
    price: "AED 175",
    tagline: "50 SOPs for onboarding, finance, content, and client management.",
    color: "bg-green-50 border-green-200",
  },
  os: {
    name: "Solopreneur OS",
    slug: "solopreneur-os",
    emoji: "🚀",
    price: "AED 249",
    tagline: "Your complete business operating system — all 4 tools in one workspace.",
    color: "bg-orange-50 border-orange-200",
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
  const [step, setStep] = useState<number>(0); // 0-2 = questions, 3 = result
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

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Start Here</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-2">
            Find your perfect SoloKit tool
          </h1>
          <p className="text-gray-500">3 questions. 30 seconds.</p>
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
                      i <= step ? "bg-gray-900" : "bg-gray-200"
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
                  className="w-full text-left border border-gray-200 rounded-xl p-4 hover:border-gray-900 hover:bg-gray-50 transition-all text-sm text-gray-800 font-medium"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && recommendation && (
          <div>
            <p className="text-center text-sm text-gray-500 mb-6">Based on your answers, we recommend:</p>

            <div className={`border-2 rounded-2xl p-8 text-center ${recommendation.color}`}>
              <div className="text-5xl mb-4">{recommendation.emoji}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{recommendation.name}</h2>
              <p className="text-gray-600 mb-1">{recommendation.tagline}</p>
              <p className="text-xl font-bold text-gray-900 mt-4 mb-6">{recommendation.price}</p>

              <Link
                href={`/products/${recommendation.slug}`}
                className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-700 transition-colors text-sm"
              >
                Get this product →
              </Link>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 text-sm text-gray-500">
              <Link href="/#products" className="underline hover:text-gray-800">
                See all products →
              </Link>
              <button onClick={reset} className="underline hover:text-gray-800">
                Take quiz again
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
