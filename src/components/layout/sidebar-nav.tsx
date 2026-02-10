"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const NAV_ITEMS = [
  { href: "/", key: "nav.home" },
  { href: "/product", key: "nav.product" },
  { href: "/about", key: "nav.about" },
  { href: "/faq", key: "nav.faq" },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function SidebarNav() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const { t, locale, setLocale } = useI18n();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className="fixed left-0 top-0 bottom-0 z-50 hidden md:flex flex-col justify-between border-r py-8 transition-all duration-700"
      style={{
        width: expanded ? "var(--nav-width-expanded)" : "var(--nav-width)",
        borderColor: "var(--border)",
        background: "var(--background)",
        transitionTimingFunction: "var(--ease-smooth)",
      }}
    >
      {/* Brand name — rotated vertically */}
      <div className="relative flex items-center justify-center h-24">
        <motion.span
          className="absolute whitespace-nowrap text-[10px] font-light tracking-[0.35em] origin-center"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--foreground)",
            rotate: expanded ? "0deg" : "-90deg",
            opacity: expanded ? 1 : 0.5,
          }}
          animate={{
            rotate: expanded ? 0 : -90,
            opacity: expanded ? 1 : 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <Link href="/">OPENENDED</Link>
        </motion.span>
      </div>

      {/* Navigation items */}
      <div className="flex flex-col items-start gap-8 px-6">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-4"
            >
              {/* Dot indicator */}
              <span
                className="block h-[6px] w-[6px] rounded-full shrink-0 transition-colors duration-500"
                style={{
                  backgroundColor: active
                    ? "var(--signal)"
                    : "var(--muted)",
                  transitionTimingFunction: "var(--ease-smooth)",
                }}
              />

              {/* Label — appears on expand */}
              <motion.span
                className="text-[11px] font-light tracking-[0.15em] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-body)",
                  color: active ? "var(--foreground)" : "var(--muted)",
                }}
                animate={{
                  opacity: expanded ? 1 : 0,
                  x: expanded ? 0 : -8,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {t(item.key)}
              </motion.span>
            </Link>
          );
        })}
      </div>

      {/* Social icons — bottom of rail */}
      <div className="flex flex-col items-center gap-4 px-6">
        {/* Language toggle */}
        <button
          onClick={() => setLocale(locale === "en" ? "zh" : "en")}
          className="text-[10px] font-light tracking-[0.15em] text-muted hover:text-foreground transition-colors duration-500"
          style={{
            transitionTimingFunction: "var(--ease-smooth)",
          }}
        >
          {locale === "en" ? "中文" : "EN"}
        </button>

        {SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="transition-colors duration-500 hover:text-foreground"
              style={{
                color: "var(--muted)",
                transitionTimingFunction: "var(--ease-smooth)",
              }}
            >
              <Icon size={14} />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
