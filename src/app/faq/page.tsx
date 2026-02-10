"use client";

import { useState } from "react";
import { SlowFade } from "@/components/motion/slow-fade";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SlowFade delay={0.05 * index}>
      <div className="border-b border-border">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-6 flex items-center justify-between text-left group"
        >
          <span className="text-[16px] font-light text-foreground group-hover:text-signal transition-colors duration-500">
            {question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <ChevronDown size={18} className="text-muted" strokeWidth={1.5} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-[15px] font-light leading-[1.8] text-muted max-w-[700px]">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlowFade>
  );
}

export default function FAQPage() {
  const { t, tRaw } = useI18n();
  const faqItems = tRaw("faq.items") || [];

  return (
    <div className="min-h-screen py-24 px-8 md:px-16">
      <div className="max-w-[900px] mx-auto">
        <SlowFade>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extralight leading-[1.1] text-foreground mb-8">
            {t("faq.title")}
          </h1>
        </SlowFade>

        <SlowFade delay={0.1}>
          <div className="w-[80px] h-px bg-signal mb-16" />
        </SlowFade>

        <div className="space-y-0">
          {faqItems.map((item: { q: string; a: string }, index: number) => (
            <FAQItem
              key={index}
              question={item.q}
              answer={item.a}
              index={index}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <SlowFade delay={0.5}>
          <div className="mt-20 pt-12 border-t border-border text-center">
            <p className="text-[15px] font-light text-muted mb-4">
              {t("faq.contact.text")}
            </p>
            <a
              href={`mailto:${t("faq.contact.email")}`}
              className="text-[14px] font-light text-signal hover:text-foreground transition-colors duration-500"
            >
              {t("faq.contact.email")}
            </a>
          </div>
        </SlowFade>
      </div>
    </div>
  );
}
