"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { useRef } from "react";

interface IdentityCardProps {
  username: string;
  vibeScore: number;
  level: string;
  levelEmoji: string;
  styleDna: { label: string; value: number }[];
  badges: string[];
  variant?: "compact" | "full";
}

export function IdentityCard({
  username,
  vibeScore,
  level,
  levelEmoji,
  styleDna,
  badges,
  variant = "full",
}: IdentityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const isCompact = variant === "compact";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      className={`relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl ${
        isCompact ? "w-[260px] p-4" : "w-[340px] p-6"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Neon border glow — gold-toned */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[var(--accent)] opacity-30" />
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-20"
        style={{
          boxShadow: "inset 0 0 30px rgba(200, 169, 126, 0.1), 0 0 40px rgba(200, 169, 126, 0.08)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Avatar placeholder — gold/rose/amber gradient */}
        <div
          className={`flex-shrink-0 rounded-full bg-gradient-to-br from-[var(--accent)] via-[var(--neon-magenta)] to-[var(--neon-orange)] ${
            isCompact ? "h-12 w-12" : "h-16 w-16"
          }`}
          style={{
            boxShadow: "0 0 20px rgba(200, 169, 126, 0.3)",
          }}
        />
        <div>
          <div
            className={`font-bold text-[var(--foreground)] ${isCompact ? "text-sm" : "text-lg"}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            @{username}
          </div>
          <div
            className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span>{levelEmoji}</span>
            <span className="uppercase tracking-wider">{level}</span>
          </div>
        </div>
      </div>

      {/* Vibe Score — gold */}
      <div className={`relative z-10 ${isCompact ? "mt-3" : "mt-5"}`}>
        <div
          className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Vibe Score
        </div>
        <div className="flex items-baseline gap-1">
          <span
            className={`font-black text-[var(--accent)] ${isCompact ? "text-2xl" : "text-4xl"}`}
            style={{
              fontFamily: "var(--font-display)",
              textShadow: "0 0 20px rgba(200, 169, 126, 0.5)",
            }}
          >
            {vibeScore}
          </span>
          <span className="text-sm text-[var(--accent)]">⚡</span>
        </div>
      </div>

      {/* Style DNA */}
      {!isCompact && (
        <div className="relative z-10 mt-4">
          <div
            className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Style DNA
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {styleDna.map((s) => (
              <span
                key={s.label}
                className="rounded-full border border-[var(--border)] bg-[var(--muted)] px-2.5 py-0.5 text-[10px] text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.label} {s.value}%
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Badges */}
      <div className={`relative z-10 ${isCompact ? "mt-3" : "mt-4"}`}>
        <div className="flex gap-2">
          {badges.map((badge, i) => (
            <span key={i} className={isCompact ? "text-base" : "text-xl"}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* OPENENDED watermark */}
      <div
        className="absolute bottom-2 right-3 text-[8px] uppercase tracking-[0.3em] text-[var(--border)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        OPENENDED
      </div>
    </motion.div>
  );
}
