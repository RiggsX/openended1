"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

interface PricingTier {
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export default function ProductPage() {
  const { t, tRaw } = useI18n();
  const [isYearly, setIsYearly] = useState(false);

  const tiers = tRaw("product.pricing.tiers") as PricingTier[];

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
            <h1 className="text-display mb-6">{t("product.title")}</h1>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-lg font-normal mb-6">{t("product.whatYouGet")}</h3>
              <ul className="space-y-3">
                {(tRaw("product.valuePoints") as string[]).map((point, i) => (
                  <li key={i} className="text-body text-white/60 flex items-start">
                    <span className="mr-2">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-lg font-normal mb-6">{t("product.whatNot")}</h3>
              <ul className="space-y-3">
                {(tRaw("product.notPoints") as string[]).map((point, i) => (
                  <li key={i} className="text-body text-white/60 flex items-start">
                    <span className="mr-2">✗</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-title mb-4">{t("product.pricing.title")}</h2>
            <p className="text-body text-white/50 mb-8">{t("product.pricing.subtitle")}</p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 p-1 bg-white/[0.02] border border-white/[0.06] rounded">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded text-small transition-all ${
                  !isYearly ? "bg-white text-black" : "text-white/50 hover:text-white"
                }`}
              >
                {t("product.billingToggle.monthly")}
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded text-small transition-all ${
                  isYearly ? "bg-white text-black" : "text-white/50 hover:text-white"
                }`}
              >
                {t("product.billingToggle.yearly")}
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tiers.map((tier: PricingTier, i: number) => {
              const isFeatured = tier.name === "Plus";
              const price = isYearly ? tier.price.yearly : tier.price.monthly;
              const period = isYearly ? t("product.yearly") : t("product.monthly");
              const savings = isYearly && tier.price.monthly * 12 - tier.price.yearly;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={`card-minimal p-8 rounded h-full relative ${isFeatured ? "border-white/[0.15]" : ""}`}
                  >
                    {isFeatured ? (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="text-xs px-3 py-1 bg-white text-black rounded-full">
                          {t("product.recommended")}
                        </span>
                      </div>
                    ) : null}

                    <p className="text-small text-white/40 mb-2">{tier.name}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-light">${price}</span>
                      <span className="text-white/50 text-sm">{period}</span>
                    </div>
                    {isYearly && savings > 0 ? (
                      <p className="text-xs text-white/40 mb-4">
                        {t("product.yearlySave")} ${savings}
                      </p>
                    ) : null}
                    <p className="text-sm text-white/60 mb-4">{tier.tagline}</p>
                    <p className="text-body text-white/50 text-sm mb-6 leading-relaxed">
                      <span className="text-white/40">{t("product.forLabel")}</span> {tier.audience}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature: string, j: number) => (
                        <li key={j} className="text-sm text-white/60 flex items-start">
                          <span className="mr-2">·</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full text-small px-6 py-2.5 border border-white/[0.12] hover:bg-white/[0.02] transition-all rounded">
                      {t("product.getButton")}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <p className="text-body text-white/60 text-center">
              {t("product.pricing.guide.core")} <span className="text-white">Core</span>
            </p>
            <p className="text-body text-white/60 text-center">
              {t("product.pricing.guide.plus")} <span className="text-white">Plus</span>
            </p>
            <p className="text-body text-white/60 text-center">
              {t("product.pricing.guide.pro")} <span className="text-white">Pro</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-title mb-6">{t("home.cta.title")}</h2>
            <p className="text-body text-white/50 mb-10">{t("home.cta.subtitle")}</p>
            <Link
              href="/auth/signin"
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
