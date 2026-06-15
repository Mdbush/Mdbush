import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center flex flex-col gap-6">
          <div className="text-6xl">🔍</div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
            <p className="mt-2 text-gray-500">
              The page you&apos;re looking for doesn&apos;t exist or has moved.
            </p>
          </div>
          <Link
            href="/"
            className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors text-sm"
          >
            ← Back to store
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
