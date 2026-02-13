import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.06]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-small text-white/30">© 2026 Vibe</p>
          <div className="flex items-center gap-8">
            <Link
              href="/about"
              className="text-small text-white/30 hover:text-white/60 transition-colors"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-small text-white/30 hover:text-white/60 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/product"
              className="text-small text-white/30 hover:text-white/60 transition-colors"
            >
              Product
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
