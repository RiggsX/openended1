"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SlowFade } from "@/components/motion/slow-fade";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const EASE_SMOOTH: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function HomePage() {
  const { t, tRaw } = useI18n();
  
  const systemCards = [
    {
      num: "01",
      title: t("home.system.workflows.title"),
      desc: t("home.system.workflows.desc"),
    },
    {
      num: "02",
      title: t("home.system.prompts.title"),
      desc: t("home.system.prompts.desc"),
    },
    {
      num: "03",
      title: t("home.system.updates.title"),
      desc: t("home.system.updates.desc"),
    },
  ];

  const audienceItems = tRaw("home.audience.items") || [];

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════
          SECTION 1 — Hero
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-8 md:px-16 py-32">
        <div className="max-w-[900px] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE_SMOOTH }}
            className="text-[clamp(2.5rem,7vw,5rem)] font-extralight leading-[1.05] text-foreground"
          >
            {t("home.hero.title").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < t("home.hero.title").split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE_SMOOTH }}
            className="mt-8 text-[17px] font-light leading-[1.7] text-muted max-w-[600px] mx-auto"
          >
            {t("home.hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: EASE_SMOOTH }}
            className="mt-12"
          >
            <Link href="/product">
              <Button size="lg">{t("home.hero.cta")}</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — The Problem
      ═══════════════════════════════════════ */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-[700px] mx-auto">
          <SlowFade>
            <div className="w-[60px] h-px bg-signal mb-16 mx-auto" />
          </SlowFade>

          <SlowFade delay={0.1}>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-extralight leading-[1.15] text-foreground text-center mb-12">
              {t("home.problem.title").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t("home.problem.title").split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>
          </SlowFade>

          <SlowFade delay={0.15}>
            <p className="text-[16px] font-light leading-[1.9] text-muted">
              {t("home.problem.p1")}
            </p>
          </SlowFade>

          <SlowFade delay={0.2}>
            <p className="mt-6 text-[16px] font-light leading-[1.9] text-muted">
              {t("home.problem.p2")}
            </p>
          </SlowFade>

          <SlowFade delay={0.25}>
            <p className="mt-6 text-[16px] font-light leading-[1.9] text-foreground">
              {t("home.problem.p3")}
            </p>
          </SlowFade>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — What It Is
      ═══════════════════════════════════════ */}
      <section className="py-32 px-8 md:px-16 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <SlowFade>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-extralight leading-[1.15] text-foreground text-center mb-20">
              {t("home.system.title")}
            </h2>
          </SlowFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
            {systemCards.map((card, i) => (
              <SlowFade key={card.num} delay={0.1 + i * 0.08}>
                <div className="border border-border bg-card p-8 transition-colors duration-700 hover:border-signal/40">
                  <div className="text-signal text-[14px] font-light tracking-[0.2em] mb-4">
                    {card.num}
                  </div>
                  <h3 className="text-[20px] font-extralight text-foreground mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[14px] font-light leading-[1.8] text-muted">
                    {card.desc}
                  </p>
                </div>
              </SlowFade>
            ))}
          </div>

          <SlowFade delay={0.35}>
            <p className="text-[15px] font-light leading-[1.8] text-muted text-center max-w-[600px] mx-auto">
              {t("home.system.footer")}
              <br />
              <span className="text-foreground">
                {t("home.system.footerHighlight")}
              </span>
            </p>
          </SlowFade>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — Who It's For
      ═══════════════════════════════════════ */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-[800px] mx-auto">
          <SlowFade>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-extralight leading-[1.15] text-foreground text-center mb-16">
              {t("home.audience.title").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t("home.audience.title").split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>
          </SlowFade>

          <div className="space-y-6">
            {audienceItems.map((item: any, i: number) => (
              <SlowFade key={i} delay={0.1 + i * 0.08}>
                <div className="border-l-2 border-signal pl-6 py-2">
                  <p className="text-[15px] font-light leading-[1.8] text-muted">
                    <span className="text-foreground">{item.bold}</span>{" "}
                    {item.rest}
                  </p>
                </div>
              </SlowFade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 — Final CTA
      ═══════════════════════════════════════ */}
      <section className="py-32 px-8 md:px-16 flex items-center justify-center">
        <div className="text-center max-w-[700px]">
          <SlowFade>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-extralight text-foreground mb-6">
              {t("home.cta.title")}
            </h2>
          </SlowFade>

          <SlowFade delay={0.1}>
            <p className="text-[16px] font-light text-muted mb-10">
              {t("home.cta.subtitle")}
            </p>
          </SlowFade>

          <SlowFade delay={0.2}>
            <Link href="/product">
              <Button size="lg">{t("home.cta.button")}</Button>
            </Link>
          </SlowFade>
        </div>
      </section>
    </div>
  );
}
