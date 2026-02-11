"use client";

import { Instagram, Twitter, Youtube } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t pb-20 md:pb-0" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1200px] px-8 py-6 flex items-center justify-between">
        <p
          className="text-[11px] font-light tracking-[0.1em]"
          style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
        >
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>

        <div className="flex items-center gap-5">
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
      </div>
    </footer>
  );
}
