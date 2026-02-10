"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Fingerprint, Sparkles, ArrowRight, Zap, Crown, Palette } from "lucide-react";
import { IdentityCard } from "@/components/ui/identity-card";

const features = [
  {
    icon: Crown,
    title: "Style Archetype",
    description:
      "Discover your unique style DNA across 5 dimensions — Street, Minimal, Dark, Y2K, and Cyber.",
  },
  {
    icon: Zap,
    title: "Vibe Score",
    description:
      "Earn points through engagement, purchases, and community participation. Level up your digital presence.",
  },
  {
    icon: Palette,
    title: "Collection Showcase",
    description: "Display your curated pieces and digital assets. Your wardrobe, digitized.",
  },
];

const sampleStyleDna = [
  { label: "Street", value: 85 },
  { label: "Minimal", value: 60 },
  { label: "Dark", value: 72 },
  { label: "Y2K", value: 45 },
  { label: "Cyber", value: 90 },
];

export default function IdentityPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
            style={{ background: "var(--accent)" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex items-center gap-2"
        >
          <Fingerprint className="h-4 w-4 text-[var(--accent)]" />
          <span
            className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Digital Identity
          </span>
          <Sparkles className="h-4 w-4 text-[var(--accent)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 mt-6 text-5xl font-bold leading-tight text-[var(--foreground)] md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Define Your
          <br />
          <span className="shimmer-gold text-[var(--accent)]">Style DNA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative z-10 mt-6 max-w-lg text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Your unique digital identity in the OPENENDED universe. Discover your style archetype,
          build your collection, and evolve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 mt-8"
        >
          <Link
            href="/identity/create"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition-all hover:shadow-[0_0_30px_rgba(200,169,126,0.3)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Create Your Identity
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 backdrop-blur-xl transition-all hover:border-[var(--accent)]/20 hover:shadow-[0_0_30px_rgba(200,169,126,0.05)]"
            >
              <feature.icon className="h-8 w-8 text-[var(--accent)]" />
              <h3
                className="mt-4 text-lg font-semibold text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {feature.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Identity Card Preview */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h2
            className="mb-2 text-xs uppercase tracking-[0.3em] text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Preview
          </h2>
          <p
            className="mb-10 text-2xl font-semibold text-[var(--foreground)] md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Card, Your Identity
          </p>

          {/* Glow behind card */}
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 -m-10 rounded-full opacity-30 blur-[80px]"
              style={{ background: "var(--accent)" }}
            />
            <IdentityCard
              username="PHANTOM"
              vibeScore={2847}
              level="ARCHITECT"
              levelEmoji="👑"
              styleDna={sampleStyleDna}
              badges={["🔥", "💎", "⚡", "🎭"]}
            />
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="relative mx-auto max-w-3xl px-6 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2
            className="text-3xl font-bold text-[var(--foreground)] md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to discover who you are?
          </h2>
          <p
            className="mt-4 text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Take the style quiz and unlock your digital identity.
          </p>
          <Link
            href="/identity/create"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition-all hover:shadow-[0_0_30px_rgba(200,169,126,0.3)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
