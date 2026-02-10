"use client";

import { motion } from "framer-motion";
import { IdentityCard } from "@/components/ui/identity-card";
import { RadarChart } from "@/components/ui/radar-chart";
import { Crown, TrendingUp, Award, Calendar } from "lucide-react";

const userData = {
  username: "PHANTOM",
  vibeScore: 2847,
  level: "ARCHITECT",
  levelEmoji: "👑",
  styleDna: [
    { label: "Street", value: 85 },
    { label: "Minimal", value: 60 },
    { label: "Dark", value: 72 },
    { label: "Y2K", value: 45 },
    { label: "Cyber", value: 90 },
  ],
  badges: ["🔥", "💎", "⚡", "🎭"],
};

const stats = [
  {
    icon: TrendingUp,
    value: "2,847",
    label: "Vibe Score",
  },
  {
    icon: Crown,
    value: "Architect",
    label: "Level",
  },
  {
    icon: Award,
    value: "24",
    label: "Items Collected",
  },
  {
    icon: Calendar,
    value: "2025",
    label: "Member Since",
  },
];

const recentActivity = [
  {
    action: "Earned badge",
    detail: "🎭 Style Chameleon — adapted 5 different aesthetics",
    time: "2 hours ago",
  },
  {
    action: "Collected item",
    detail: "Phantom Hoodie — Dark Collection",
    time: "1 day ago",
  },
  {
    action: "Leveled up",
    detail: "Reached Architect tier — unlocked exclusive drops",
    time: "3 days ago",
  },
  {
    action: "Community vote",
    detail: "Voted on next season's color palette",
    time: "5 days ago",
  },
];

const earnedBadges = [
  { emoji: "🔥", label: "Early Adopter" },
  { emoji: "💎", label: "Diamond Hands" },
  { emoji: "⚡", label: "Power Buyer" },
  { emoji: "🎭", label: "Style Chameleon" },
  { emoji: "🌙", label: "Night Owl" },
  { emoji: "👁️", label: "Trendsetter" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <div className="mx-auto max-w-4xl px-6 pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Your Profile
          </span>
          <h1
            className="mt-3 text-4xl font-bold text-[var(--foreground)] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Identity Dashboard
          </h1>
        </motion.div>
      </div>

      {/* Identity Card */}
      <section className="mx-auto flex max-w-4xl justify-center px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute inset-0 -m-10 rounded-full opacity-25 blur-[80px]"
            style={{ background: "var(--accent)" }}
          />
          <IdentityCard
            username={userData.username}
            vibeScore={userData.vibeScore}
            level={userData.level}
            levelEmoji={userData.levelEmoji}
            styleDna={userData.styleDna}
            badges={userData.badges}
            variant="full"
          />
        </motion.div>
      </section>

      {/* Stats Row */}
      <section className="mx-auto max-w-4xl px-6 pt-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-5 backdrop-blur-xl"
            >
              <stat.icon className="h-5 w-5 text-[var(--accent)]" />
              <div
                className="mt-3 text-2xl font-bold text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div
                className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--muted-foreground)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Style DNA Radar */}
      <section className="mx-auto max-w-4xl px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2
            className="text-2xl font-bold text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Style DNA
          </h2>
          <p
            className="mt-2 text-sm text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Your unique style fingerprint across 5 dimensions.
          </p>
          <div className="mt-8 flex justify-center">
            <RadarChart data={userData.styleDna} size={300} />
          </div>
        </motion.div>
      </section>

      {/* Recent Activity */}
      <section className="mx-auto max-w-4xl px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2
            className="text-2xl font-bold text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Recent Activity
          </h2>
          <div className="mt-6 space-y-4">
            {recentActivity.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                className="flex items-start justify-between rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-4 backdrop-blur-xl"
              >
                <div>
                  <div
                    className="text-xs uppercase tracking-[0.15em] text-[var(--accent)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {activity.action}
                  </div>
                  <div
                    className="mt-1 text-sm text-[var(--foreground)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {activity.detail}
                  </div>
                </div>
                <span
                  className="flex-shrink-0 text-xs text-[var(--muted-foreground)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {activity.time}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Badges */}
      <section className="mx-auto max-w-4xl px-6 pb-32 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2
            className="text-2xl font-bold text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Badges Earned
          </h2>
          <p
            className="mt-2 text-sm text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Your collection of achievements and milestones.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-6">
            {earnedBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
                className="flex flex-col items-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-4 backdrop-blur-xl transition-all hover:border-[var(--accent)]/20"
              >
                <span className="text-3xl">{badge.emoji}</span>
                <span
                  className="mt-2 text-center text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
