"use client";

import { motion } from "framer-motion";
import { Play, Clock, ArrowRight, Film, BookOpen, Camera, Headphones } from "lucide-react";

const featuredContent = {
  title: "The Rise of Digital Fashion",
  category: "Documentary",
  duration: "12:34",
  description:
    "Exploring how technology is reshaping the fashion industry — from virtual runways to AI-designed garments.",
};

const contentItems = [
  {
    title: "Street Culture: Tokyo After Dark",
    category: "Short Film",
    duration: "8:21",
    gradient: "from-[var(--accent)]/20 to-[var(--neon-magenta)]/20",
  },
  {
    title: "Behind the Seams: Phantom Collection",
    category: "BTS",
    duration: "15:07",
    gradient: "from-[var(--neon-magenta)]/20 to-[var(--neon-orange)]/20",
  },
  {
    title: "Neon Nights: A Visual Journey",
    category: "Visual",
    duration: "6:45",
    gradient: "from-[var(--neon-orange)]/20 to-[var(--accent)]/20",
  },
  {
    title: "The Art of Layering",
    category: "Style Guide",
    duration: "10:12",
    gradient: "from-[var(--neon-cyan)]/20 to-[var(--accent)]/20",
  },
];

const categories = [
  { icon: Film, label: "Film", count: "12 pieces" },
  { icon: BookOpen, label: "Editorial", count: "8 pieces" },
  { icon: Camera, label: "Photography", count: "24 pieces" },
  { icon: Headphones, label: "Audio", count: "6 pieces" },
];

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="relative flex flex-col items-center px-6 pb-16 pt-32 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
            style={{ background: "var(--neon-magenta)" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <span
            className="text-xs uppercase tracking-[0.3em] text-[var(--neon-magenta)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Content
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 mt-5 text-5xl font-bold text-[var(--foreground)] md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Digital
          <br />
          Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mt-5 max-w-md text-base text-[var(--muted-foreground)] md:text-lg"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Films, editorials, and audio — curated stories from the OPENENDED universe.
        </motion.p>
      </section>

      {/* Featured Content */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <button className="group relative w-full overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl transition-all hover:border-[var(--neon-magenta)]/20">
            {/* Thumbnail area */}
            <div className="relative aspect-video w-full bg-gradient-to-br from-[var(--neon-magenta)]/10 via-[var(--accent)]/5 to-[var(--neon-orange)]/10">
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-white/20">
                  <Play className="h-8 w-8 text-white" fill="white" />
                </div>
              </div>

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent p-8 pt-20">
                <div className="flex items-center gap-3">
                  <span
                    className="rounded-full bg-[var(--neon-magenta)]/20 px-3 py-1 text-xs text-[var(--neon-magenta)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {featuredContent.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                    <Clock className="h-3 w-3" />
                    {featuredContent.duration}
                  </span>
                </div>
                <h2
                  className="mt-3 text-left text-2xl font-bold text-[var(--foreground)] md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {featuredContent.title}
                </h2>
                <p
                  className="mt-2 max-w-lg text-left text-sm text-[var(--muted-foreground)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {featuredContent.description}
                </p>
              </div>
            </div>
          </button>
        </motion.div>
      </section>

      {/* Content Grid */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 flex items-center justify-between"
        >
          <h2
            className="text-2xl font-bold text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Latest
          </h2>
          <button
            className="flex items-center gap-1 text-xs uppercase tracking-[0.15em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            View All
            <ArrowRight className="h-3 w-3" />
          </button>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {contentItems.map((item, i) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] text-left backdrop-blur-xl transition-all hover:border-[var(--neon-magenta)]/20"
            >
              {/* Thumbnail */}
              <div className={`relative aspect-[16/10] w-full bg-gradient-to-br ${item.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-white/20">
                    <Play className="h-5 w-5 text-white" fill="white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs text-[var(--neon-magenta)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                    <Clock className="h-3 w-3" />
                    {item.duration}
                  </span>
                </div>
                <h3
                  className="mt-2 text-lg font-semibold text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-5xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2
            className="mb-8 text-2xl font-bold text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.06 }}
                className="flex flex-col items-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 backdrop-blur-xl transition-all hover:border-[var(--neon-magenta)]/20 hover:shadow-[0_0_25px_rgba(196,160,176,0.06)]"
              >
                <cat.icon className="h-8 w-8 text-[var(--neon-magenta)]" />
                <span
                  className="mt-3 text-sm font-semibold text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.label}
                </span>
                <span
                  className="mt-1 text-xs text-[var(--muted-foreground)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
