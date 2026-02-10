"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SlowFade } from "@/components/motion/slow-fade";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function ProductPage() {
  const { t, tRaw } = useI18n();
  const { data: session } = useSession();
  const router = useRouter();
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (tier: string) => {
    if (!session) {
      router.push("/auth/signin");
      return;
    }

    setLoading(tier);
    try {
      const response = await fetch("/api/subscriptions/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, interval: billing }),
      });

      const data = await response.json();
      
      if (data.approvalUrl) {
        window.location.href = data.approvalUrl;
      } else {
        throw new Error("No approval URL returned");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Failed to create subscription. Please try again.");
      setLoading(null);
    }
  };

  const valuePoints = tRaw("product.valuePoints") || [];
  const notPoints = tRaw("product.notPoints") || [];
  const pricingTiers = tRaw("product.pricing.tiers") || [];

  return (
    <div className="min-h-screen py-24 px-8 md:px-16">
      {/* ═══════════════════════════════════════
          Product Description
      ═══════════════════════════════════════ */}
      <section className="max-w-[900px] mx-auto mb-32">
        <SlowFade>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extralight leading-[1.1] text-foreground mb-8">
            {t("product.title")}
          </h1>
        </SlowFade>

        <SlowFade delay={0.1}>
          <div className="w-[80px] h-px bg-signal mb-16" />
        </SlowFade>

        <SlowFade delay={0.2}>
          <h2 className="text-[24px] font-extralight text-foreground mb-8">
            {t("product.whatYouGet")}
          </h2>
        </SlowFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {valuePoints.map((point: string, i: number) => (
            <SlowFade key={point} delay={0.25 + i * 0.05}>
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <Check size={18} className="text-signal" strokeWidth={1.5} />
                </div>
                <p className="text-[15px] font-light leading-[1.7] text-foreground">
                  {point}
                </p>
              </div>
            </SlowFade>
          ))}
        </div>

        <SlowFade delay={0.5}>
          <h2 className="text-[24px] font-extralight text-foreground mb-8">
            {t("product.whatNot")}
          </h2>
        </SlowFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notPoints.map((point: string, i: number) => (
            <SlowFade key={point} delay={0.55 + i * 0.05}>
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <X size={18} className="text-muted" strokeWidth={1.5} />
                </div>
                <p className="text-[15px] font-light leading-[1.7] text-muted">
                  {point}
                </p>
              </div>
            </SlowFade>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Pricing Section
      ═══════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto mb-24">
        <SlowFade>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extralight leading-[1.15] text-foreground text-center mb-4">
            {t("product.pricing.title")}
          </h2>
        </SlowFade>

        <SlowFade delay={0.05}>
          <p className="text-[16px] font-light text-muted text-center mb-12">
            {t("product.pricing.subtitle")}
          </p>
        </SlowFade>

        {/* Billing Toggle */}
        <SlowFade delay={0.08}>
          <div className="flex items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setBilling("monthly")}
              className={`text-[14px] font-light px-5 py-2 border transition-all duration-500 ${
                billing === "monthly"
                  ? "border-signal text-signal"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {t("product.billingToggle.monthly")}
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`text-[14px] font-light px-5 py-2 border transition-all duration-500 ${
                billing === "yearly"
                  ? "border-signal text-signal"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {t("product.billingToggle.yearly")}
            </button>
          </div>
        </SlowFade>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier: any, i: number) => {
            const recommended = tier.name === "Plus";
            const price = billing === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
            const suffix = billing === "monthly" ? t("product.monthly") : t("product.yearly");
            const yearlySaving = tier.monthlyPrice * 12 - tier.yearlyPrice;

            return (
              <SlowFade key={tier.name} delay={0.1 + i * 0.1}>
                <div
                  className={`relative border bg-card p-8 transition-all duration-[0.9s] hover:border-signal/60 ${
                    recommended
                      ? "border-signal lg:scale-105"
                      : "border-border"
                  }`}
                >
                  {recommended && (
                    <div className="absolute -top-3 left-8 bg-signal text-background px-4 py-1 text-[11px] font-light tracking-[0.15em]">
                      {t("product.recommended")}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-[28px] font-extralight text-foreground mb-2">
                      OPENENDED {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-[48px] font-extralight text-signal">
                        ${price}
                      </span>
                      <span className="text-[16px] font-light text-muted">
                        {suffix}
                      </span>
                    </div>
                    {billing === "yearly" && yearlySaving > 0 && (
                      <p className="text-[13px] font-light text-signal mb-4">
                        {t("product.yearlySave")} ${yearlySaving}
                      </p>
                    )}
                    <p className="text-[14px] font-light text-muted italic mb-6">
                      {tier.tagline}
                    </p>
                    <p className="text-[13px] font-light leading-[1.7] text-muted">
                      <span className="text-foreground">{t("product.forLabel")}</span> {tier.audience}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature: string) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="mt-1 shrink-0">
                          <Check
                            size={16}
                            className="text-signal"
                            strokeWidth={1.5}
                          />
                        </div>
                        <p className="text-[13px] font-light leading-[1.7] text-muted">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={recommended ? "primary" : "secondary"}
                    className="w-full"
                    onClick={() => handleSubscribe(tier.name.toLowerCase())}
                    disabled={loading === tier.name.toLowerCase()}
                  >
                    {loading === tier.name.toLowerCase()
                      ? "Processing..."
                      : `${t("product.getButton")} ${tier.name}`}
                  </Button>
                </div>
              </SlowFade>
            );
          })}
        </div>

        <SlowFade delay={0.4}>
          <p className="text-[14px] font-light leading-[1.8] text-muted text-center max-w-[800px] mx-auto">
            {t("product.pricing.guide.core")} <span className="text-foreground">Core</span>.
            <br />
            {t("product.pricing.guide.plus")} <span className="text-foreground">Plus</span>.
            <br />
            {t("product.pricing.guide.pro")} <span className="text-foreground">Pro</span>.
          </p>
        </SlowFade>
      </section>
    </div>
  );
}
