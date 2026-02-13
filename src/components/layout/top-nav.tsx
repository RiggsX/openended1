"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { useI18n } from "@/lib/i18n";
import { useSession } from "next-auth/react";

export function TopNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const { t, locale, setLocale } = useI18n();
  const { data: session } = useSession();

  const navBg = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]);

  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);

  // Fix: Use layout effect to avoid hydration mismatch
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/product", label: t("nav.product") },
    { href: "/about", label: t("nav.about") },
    { href: "/faq", label: t("nav.faq") },
  ];

  // 如果已登录，添加 Dashboard 链接
  if (session) {
    navItems.push({ href: "/dashboard", label: t("nav.dashboard") });
  }

  return (
    <motion.nav
      style={{
        backgroundColor: navBg,
        backdropFilter: navBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" />
            <span className="text-xl font-light tracking-tight">OPENENDED</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-small transition-colors duration-300 hover:text-white group"
                >
                  <span
                    className={isActive ? "text-white" : "text-white/50"}
                    suppressHydrationWarning
                  >
                    {item.label}
                  </span>
                  {isActive ? (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  ) : null}
                  {!isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Language Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {mounted ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLocale("en")}
                  className={`px-3 py-1.5 rounded text-xs font-light transition-all duration-300 ${
                    locale === "en"
                      ? "bg-white text-black"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                  suppressHydrationWarning
                >
                  EN
                </button>
                <button
                  onClick={() => setLocale("zh")}
                  className={`px-3 py-1.5 rounded text-xs font-light transition-all duration-300 ${
                    locale === "zh"
                      ? "bg-white text-black"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                  suppressHydrationWarning
                >
                  中文
                </button>
              </div>
            ) : null}
            <Link
              href="/auth/signin"
              className="text-small px-6 py-2.5 border border-white/[0.12] hover:bg-white/[0.02] transition-all rounded"
              suppressHydrationWarning
            >
              {t("nav.signin")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1px] bg-white transition-all"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[1px] bg-white transition-all"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1px] bg-white transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden border-t border-white/[0.06]"
      >
        <div className="container py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-small py-2 transition-colors ${
                pathname === item.href ? "text-white" : "text-white/50 hover:text-white"
              }`}
              suppressHydrationWarning
            >
              {item.label}
            </Link>
          ))}

          {mounted ? (
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setLocale("en")}
                className={`flex-1 px-3 py-2 rounded text-xs font-light transition-all ${
                  locale === "en"
                    ? "bg-white text-black"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
                suppressHydrationWarning
              >
                EN
              </button>
              <button
                onClick={() => setLocale("zh")}
                className={`flex-1 px-3 py-2 rounded text-xs font-light transition-all ${
                  locale === "zh"
                    ? "bg-white text-black"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
                suppressHydrationWarning
              >
                中文
              </button>
            </div>
          ) : null}

          <Link
            href="/auth/signin"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-small py-2.5 text-center border border-white/[0.12] hover:bg-white/[0.02] transition-all rounded"
            suppressHydrationWarning
          >
            {t("nav.signin")}
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
