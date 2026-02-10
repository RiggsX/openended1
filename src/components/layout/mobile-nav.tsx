"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, Info, HelpCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const TAB_ITEMS = [
  { href: "/", key: "nav.home", icon: Home },
  { href: "/product", key: "nav.product", icon: Package },
  { href: "/about", key: "nav.about", icon: Info },
  { href: "/faq", key: "nav.faq", icon: HelpCircle },
];

export function MobileNav() {
  const pathname = usePathname();
  const { t } = useI18n();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around border-t py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
      style={{
        background: "var(--background)",
        borderColor: "var(--border)",
      }}
    >
      {TAB_ITEMS.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 px-4 py-1 transition-colors duration-500"
            style={{
              color: active ? "var(--signal)" : "var(--muted)",
              transitionTimingFunction: "var(--ease-smooth)",
            }}
          >
            <Icon size={18} strokeWidth={active ? 1.8 : 1.2} />
            <span
              className="text-[9px] tracking-[0.1em] font-light"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(item.key)}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
