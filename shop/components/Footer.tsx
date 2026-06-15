export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} SoloKit. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Secure checkout via Lemon Squeezy</span>
          <span>·</span>
          <span>Instant delivery</span>
          <span>·</span>
          <span>30-day guarantee</span>
        </div>
      </div>
    </footer>
  );
}
