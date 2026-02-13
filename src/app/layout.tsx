import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/layout/top-nav";
import { Footer } from "@/components/layout/footer";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "OPENENDED - AI Workflow Platform",
  description: "Transform your workflow with AI-powered automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <Providers>
          <TopNav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
