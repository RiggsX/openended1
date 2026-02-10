"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";

const styleKeywords = [
  "Minimalist",
  "Avant-garde",
  "Streetwear",
  "Techwear",
  "Y2K",
  "Dark Academia",
  "Cyberpunk",
  "Vintage",
  "Luxury",
  "Grunge",
  "Futuristic",
  "Artisan",
];

const outfitVibes = [
  {
    id: "night-out",
    title: "Night Out",
    description: "Bold, statement pieces that command attention",
  },
  {
    id: "daily-uniform",
    title: "Daily Uniform",
    description: "Effortless style that works every day",
  },
  {
    id: "creative-expression",
    title: "Creative Expression",
    description: "Fashion as art, rules don't apply",
  },
  {
    id: "power-move",
    title: "Power Move",
    description: "Sharp, intentional, every detail matters",
  },
];

const valuesOptions = [
  "Quality over quantity",
  "Unique finds",
  "Sustainable fashion",
  "Brand heritage",
  "Innovation",
  "Community",
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function CreateIdentityPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<{
    keywords: string[];
    vibe: string;
    values: string[];
  }>({
    keywords: [],
    vibe: "",
    values: [],
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  function toggleKeyword(keyword: string) {
    setAnswers((prev) => {
      const exists = prev.keywords.includes(keyword);
      if (exists) {
        return { ...prev, keywords: prev.keywords.filter((k) => k !== keyword) };
      }
      if (prev.keywords.length >= 3) return prev;
      return { ...prev, keywords: [...prev.keywords, keyword] };
    });
  }

  function selectVibe(vibe: string) {
    setAnswers((prev) => ({ ...prev, vibe }));
  }

  function toggleValue(value: string) {
    setAnswers((prev) => {
      const exists = prev.values.includes(value);
      if (exists) {
        return { ...prev, values: prev.values.filter((v) => v !== value) };
      }
      if (prev.values.length >= 2) return prev;
      return { ...prev, values: [...prev.values, value] };
    });
  }

  function canProceed() {
    if (step === 1) return answers.keywords.length === 3;
    if (step === 2) return answers.vibe !== "";
    if (step === 3) return answers.values.length === 2;
    return false;
  }

  function handleNext() {
    if (step < totalSteps) {
      setDirection(1);
      setStep((s) => s + 1);
    } else {
      router.push("/identity/profile");
    }
  }

  function handleBack() {
    if (step > 1) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Top bar */}
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 pt-8">
        <Link
          href="/identity"
          className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          ← Back
        </Link>
        <span
          className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Step {step} of {totalSteps}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mx-auto mt-6 max-w-2xl px-6">
        <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--muted)]">
          <motion.div
            className="h-full rounded-full bg-[var(--accent)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="mx-auto max-w-2xl px-6 pb-32 pt-16">
        <AnimatePresence mode="wait" custom={direction}>
          {step === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <h1
                className="text-3xl font-bold text-[var(--foreground)] md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What draws you in?
              </h1>
              <p
                className="mt-3 text-[var(--muted-foreground)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Pick <span className="text-[var(--accent)]">3</span> style keywords that resonate
                with you.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {styleKeywords.map((keyword) => {
                  const selected = answers.keywords.includes(keyword);
                  return (
                    <button
                      key={keyword}
                      onClick={() => toggleKeyword(keyword)}
                      className={`rounded-full border px-5 py-2.5 text-sm transition-all ${
                        selected
                          ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] shadow-[0_0_15px_rgba(200,169,126,0.15)]"
                          : "border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
                      }`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {keyword}
                    </button>
                  );
                })}
              </div>

              <p
                className="mt-6 text-xs text-[var(--muted-foreground)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {answers.keywords.length}/3 selected
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <h1
                className="text-3xl font-bold text-[var(--foreground)] md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your ideal outfit vibe?
              </h1>
              <p
                className="mt-3 text-[var(--muted-foreground)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Choose the one that speaks to you.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {outfitVibes.map((vibe) => {
                  const selected = answers.vibe === vibe.id;
                  return (
                    <button
                      key={vibe.id}
                      onClick={() => selectVibe(vibe.id)}
                      className={`rounded-2xl border p-6 text-left transition-all ${
                        selected
                          ? "border-[var(--accent)] bg-[var(--accent)]/5 shadow-[0_0_25px_rgba(200,169,126,0.1)]"
                          : "border-[var(--glass-border)] bg-[var(--glass)] hover:border-[var(--accent)]/30"
                      }`}
                    >
                      <h3
                        className={`text-lg font-semibold ${
                          selected ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                        }`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {vibe.title}
                      </h3>
                      <p
                        className="mt-2 text-sm text-[var(--muted-foreground)]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {vibe.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <h1
                className="text-3xl font-bold text-[var(--foreground)] md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What matters most?
              </h1>
              <p
                className="mt-3 text-[var(--muted-foreground)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Pick <span className="text-[var(--accent)]">2</span> values that define your
                approach to fashion.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {valuesOptions.map((value) => {
                  const selected = answers.values.includes(value);
                  return (
                    <button
                      key={value}
                      onClick={() => toggleValue(value)}
                      className={`rounded-full border px-5 py-2.5 text-sm transition-all ${
                        selected
                          ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] shadow-[0_0_15px_rgba(200,169,126,0.15)]"
                          : "border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)] hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
                      }`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>

              <p
                className="mt-6 text-xs text-[var(--muted-foreground)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {answers.values.length}/2 selected
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--muted-foreground)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
              canProceed()
                ? "bg-[var(--accent)] text-[var(--accent-foreground)] hover:shadow-[0_0_30px_rgba(200,169,126,0.3)]"
                : "cursor-not-allowed bg-[var(--muted)] text-[var(--muted-foreground)]"
            }`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {step === totalSteps ? (
              <>
                Complete
                <Check className="h-4 w-4" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
