"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center flex flex-col gap-6">
        <div className="text-6xl">⚠️</div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
          <p className="mt-2 text-gray-500">
            An unexpected error occurred. Please try again.
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors text-sm"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-gray-400 transition-colors text-sm"
          >
            Back to store
          </Link>
        </div>
      </div>
    </main>
  );
}
