"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

interface AboutSection {
  title: string;
  paragraphs: string[];
}

export default function AboutPage() {
  const { t, tRaw } = useI18n();
  const sections = tRaw("about.sections") as AboutSection[];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-display mb-6">{t("about.title")}</h1>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section: AboutSection, i: number) => (
        <section key={i} className={`py-20 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}>
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-title mb-8">{section.title}</h2>
              <div className="space-y-6">
                {section.paragraphs.map((p: string, j: number) => (
                  <p key={j} className="text-body text-white/60 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Closing */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-title mb-6">{t("about.closing")}</h2>
            <a
              href="mailto:hello@openended.com"
              className="inline-block text-small px-8 py-3 bg-white text-black hover:bg-white/90 transition-all rounded"
            >
              {t("faq.contact.email")}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
