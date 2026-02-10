"use client";

import Link from "next/link";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Content", href: "/content" },
  { label: "Identity", href: "/identity" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--glass-border)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl h-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0">
            <span
              className="neon-text uppercase text-xl tracking-[0.2em] text-[var(--accent)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              OPEN
            </span>
            <span
              className="uppercase text-xl tracking-[0.2em] text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ENDED
            </span>
          </Link>

          {/* Desktop Nav — Center */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative uppercase tracking-[0.15em] text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300 pb-1"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {link.label}
                {/* Underline: slides in from left */}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions — Right */}
          <div className="hidden md:flex items-center gap-5">
            <button
              aria-label="Search"
              className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <Link
              href="/cart"
              aria-label="Shopping bag"
              className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href="/account"
              aria-label="Account"
              className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              <User className="h-[18px] w-[18px]" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-[var(--foreground)] z-50 relative"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[var(--background)]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl uppercase tracking-[0.15em] text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Gold decorative line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-12 h-[1px] bg-[var(--accent)] my-10"
            />

            {/* Mobile action icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-center gap-8"
            >
              <Link
                href="/cart"
                onClick={() => setMobileOpen(false)}
                aria-label="Shopping bag"
                className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-300"
              >
                <ShoppingBag className="h-6 w-6" />
              </Link>
              <Link
                href="/account"
                onClick={() => setMobileOpen(false)}
                aria-label="Account"
                className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-300"
              >
                <User className="h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
