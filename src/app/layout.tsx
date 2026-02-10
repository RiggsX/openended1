import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "OPENENDED — Luxury Streetwear & Digital Culture",
  description:
    "Where luxury meets street culture. Curated fashion, digital content, and identity — for those who refuse to be defined.",
  keywords: [
    "streetwear",
    "fashion",
    "luxury streetwear",
    "independent brands",
    "digital identity",
    "OPENENDED",
    "style",
    "digital culture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
