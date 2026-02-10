"use client";

import Link from "next/link";
import { Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import { useState } from "react";

const linkColumns = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "New Arrivals", href: "/shop/new" },
      { label: "Brands", href: "/shop/brands" },
    ],
  },
  {
    title: "Content",
    links: [
      { label: "Stories", href: "/content/stories" },
      { label: "Style Guide", href: "/content/style-guide" },
      { label: "Culture", href: "/content/culture" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic
    setEmail("");
  };

  return (
    <footer className="relative">
      {/* Luxury divider */}
      <div
        className="h-[1px] w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--border), rgba(200, 169, 126, 0.3), var(--border), transparent)",
        }}
      />

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left section */}
          <div className="md:col-span-5 space-y-8">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-0">
              <span
                className="uppercase text-2xl tracking-[0.2em] text-[var(--accent)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                OPEN
              </span>
              <span
                className="uppercase text-2xl tracking-[0.2em] text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ENDED
              </span>
            </Link>

            {/* Tagline */}
            <p
              className="text-sm text-[var(--muted-foreground)] max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Where luxury meets street culture. Curated fashion, digital content, and identity.
            </p>

            {/* Newsletter */}
            <div className="space-y-4">
              <span
                className="block text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Join the Circle
              </span>
              <form onSubmit={handleSubmit} className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-transparent border border-[var(--border)] border-r-0 px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-3 hover:opacity-80 transition-opacity duration-300"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Link columns */}
          {linkColumns.map((column) => (
            <div key={column.title} className="md:col-span-2 space-y-6">
              <h4
                className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social icons */}
          <div className="md:col-span-1 flex md:flex-col md:items-end items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-300"
              >
                <social.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center md:justify-between gap-4">
          <span
            className="text-[11px] text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            &copy; 2025 OPENENDED. All rights reserved.
          </span>
          <span
            className="text-[11px] text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Crafted with precision.
          </span>
        </div>
      </div>
    </footer>
  );
}
