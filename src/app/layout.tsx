import type { Metadata } from "next";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Footer } from "@/components/layout/footer";
import { I18nProvider } from "@/lib/i18n";
import { SessionProvider } from "@/components/providers/session-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "OPENENDED — AI Workflow System",
  description:
    "A structured AI workflow system. Stop figuring out AI. Start using it.",
  keywords: ["AI", "workflow", "system", "productivity", "prompts", "automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SessionProvider>
          <I18nProvider>
            {/* Fixed sidebar navigation — desktop only */}
            <SidebarNav />

            {/* Main content area — offset for sidebar */}
            <div className="relative pl-0 md:pl-[var(--nav-width)]">
              <div className="min-h-screen">{children}</div>
              <Footer />
            </div>

            {/* Mobile bottom tab bar */}
            <MobileNav />
          </I18nProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
