"use client";

import { SlowFade } from "@/components/motion/slow-fade";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t, tRaw } = useI18n();
  const sections = tRaw("about.sections") || [];

  return (
    <div className="min-h-screen py-24 px-8 md:px-16">
      <div className="max-w-[800px] mx-auto">
        <SlowFade>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extralight leading-[1.1] text-foreground mb-8">
            {t("about.title")}
          </h1>
        </SlowFade>

        <SlowFade delay={0.1}>
          <div className="w-[80px] h-px bg-signal mb-16" />
        </SlowFade>

        {sections.map((section: { title: string; paragraphs: string[] }, sIdx: number) => (
          <section key={sIdx} className="mb-24">
            <SlowFade delay={0.15 + sIdx * 0.15}>
              <h2 className="text-[28px] font-extralight text-foreground mb-6">
                {section.title}
              </h2>
            </SlowFade>

            {section.paragraphs.map((paragraph: string, pIdx: number) => {
              const isLast = pIdx === section.paragraphs.length - 1;
              return (
                <SlowFade key={pIdx} delay={0.2 + sIdx * 0.15 + pIdx * 0.05}>
                  <p
                    className={`text-[16px] font-light leading-[1.9] ${
                      isLast ? "text-foreground" : "text-muted"
                    } ${pIdx < section.paragraphs.length - 1 ? "mb-6" : ""}`}
                  >
                    {paragraph}
                  </p>
                </SlowFade>
              );
            })}
          </section>
        ))}

        {/* Closing Statement */}
        <section>
          <SlowFade delay={0.9}>
            <div className="border-l-2 border-signal pl-6 py-4">
              <p className="text-[17px] font-light leading-[1.8] text-foreground italic">
                {t("about.closing")}
              </p>
            </div>
          </SlowFade>
        </section>
      </div>
    </div>
  );
}
