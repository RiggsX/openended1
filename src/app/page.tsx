"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/lib/i18n";

interface AudienceItem {
  bold: string;
  rest: string;
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, tRaw } = useI18n();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      {/* Hero */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-subtle opacity-40" />

        <motion.div
          className="container text-center relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-small text-white/40 mb-8">AI Workflow Platform</p>
            <h1 className="text-[clamp(2.5rem,8vw,4rem)] font-extralight leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto whitespace-pre-line">
              {t("home.hero.title")}
            </h1>
            <p className="text-body text-white/50 mb-12 max-w-xl mx-auto">
              {t("home.hero.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/product"
              className="inline-block text-small px-8 py-3 bg-white text-black hover:bg-white/90 transition-all rounded"
            >
              {t("home.hero.cta")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-32 relative">
        <div className="container max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-title mb-12 whitespace-pre-line">{t("home.problem.title")}</h2>

            <div className="space-y-8">
              <p className="text-body text-white/60 leading-relaxed">{t("home.problem.p1")}</p>
              <p className="text-body text-white/60 leading-relaxed">{t("home.problem.p2")}</p>
              <p className="text-body text-white/60 leading-relaxed">{t("home.problem.p3")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* System */}
      <section className="py-16 md:py-32 relative">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-title">{t("home.system.title")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {[
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
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="card-minimal p-8 rounded h-full">
                  <p className="text-small text-white/30 mb-4">{item.num}</p>
                  <h3 className="text-lg font-normal mb-3">{item.title}</h3>
                  <p className="text-body text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-body text-white/60 mb-2">{t("home.system.footer")}</p>
            <p className="text-body text-white">{t("home.system.footerHighlight")}</p>
          </motion.div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 md:py-32 relative">
        <div className="container max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-title mb-12 whitespace-pre-line">{t("home.audience.title")}</h2>

            <div className="space-y-6">
              {(tRaw("home.audience.items") as AudienceItem[]).map(
                (item: AudienceItem, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="border-l border-white/[0.12] pl-6 py-3 hover:border-white/30 transition-colors"
                  >
                    <p className="text-sm">
                      <span className="font-normal">{item.bold}</span>
                      <span className="text-white/50"> {item.rest}</span>
                    </p>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 border-t border-white/[0.06]">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-title mb-6">{t("home.cta.title")}</h2>
            <p className="text-body text-white/50 mb-10">{t("home.cta.subtitle")}</p>
            <Link
              href="/product"
              className="inline-block text-small px-8 py-3 bg-white text-black hover:bg-white/90 transition-all rounded"
            >
              {t("home.cta.button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
