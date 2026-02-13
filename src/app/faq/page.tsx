"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const { t, tRaw } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = tRaw("faq.items") as FAQItem[];

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
            <h1 className="text-display mb-6">{t("faq.title")}</h1>
            <p className="text-body text-white/60 max-w-2xl">
              {t("faq.contact.text")}{" "}
              <a
                href={`mailto:${t("faq.contact.email")}`}
                className="text-white hover:text-white/70 transition-colors"
              >
                {t("faq.contact.email")}
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq: FAQItem, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left card-minimal p-6 rounded"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-normal pr-8">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                    >
                      <div className="relative w-4 h-4">
                        <span className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/50 -translate-y-1/2" />
                        <span className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/50 -translate-x-1/2" />
                      </div>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/[0.06] mt-4">
                          <p className="text-body text-white/60 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-title mb-6">{t("faq.contact.text")}</h2>
            <a
              href={`mailto:${t("faq.contact.email")}`}
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
