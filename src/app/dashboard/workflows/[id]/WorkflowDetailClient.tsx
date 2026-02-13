"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import type { UserTier } from "@/lib/subscription";

interface WorkflowStep {
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  prompt: string;
  promptZh: string;
}

interface Workflow {
  id: number;
  title: string;
  titleZh: string;
  category: string;
  tier: string;
  description: string;
  descriptionZh: string;
  steps: WorkflowStep[];
}

interface Props {
  workflow: Workflow;
  hasAccess: boolean;
  userTier: UserTier;
  isAdmin: boolean;
}

export default function WorkflowDetailClient({ workflow, hasAccess, userTier, isAdmin }: Props) {
  const { t, locale } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const copyPrompt = (prompt: string, stepIndex: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white/40">Loading...</div>
      </div>
    );
  }

  // 如果没有权限，显示升级提示
  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/dashboard/workflows"
            className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors"
          >
            ← {t("common.back")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-minimal p-12 text-center"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                <svg
                  className="w-8 h-8 text-white/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-light mb-4">
                {locale === "zh" ? workflow.titleZh : workflow.title}
              </h1>
              <p className="text-white/60 mb-2">
                {locale === "zh"
                  ? `此工作流需要 ${workflow.tier} 订阅`
                  : `This workflow requires ${workflow.tier} subscription`}
              </p>
              <p className="text-white/40 text-sm">
                {locale === "zh"
                  ? `您当前的订阅层级：${userTier.toUpperCase()}`
                  : `Your current tier: ${userTier.toUpperCase()}`}
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 bg-white text-black rounded hover:bg-white/90 transition-colors"
              >
                {locale === "zh" ? "升级订阅" : "Upgrade Subscription"}
              </Link>
              <div>
                <Link
                  href="/dashboard/workflows"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {locale === "zh" ? "返回工作流列表" : "Back to Workflows"}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // 有权限，显示完整内容
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/dashboard/workflows"
          className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors"
        >
          ← {t("common.back")}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/5 rounded text-sm text-white/60">
              {workflow.category}
            </span>
            <span className="px-3 py-1 bg-white/5 rounded text-sm text-white/60">
              {workflow.tier}
            </span>
            {isAdmin ? (
              <span className="px-3 py-1 bg-green-500/20 rounded text-sm text-green-400">
                {locale === "zh" ? "管理员" : "Admin"}
              </span>
            ) : null}
          </div>
          <h1 className="text-4xl font-light mb-4">
            {locale === "zh" ? workflow.titleZh : workflow.title}
          </h1>
          <p className="text-xl text-white/60">
            {locale === "zh" ? workflow.descriptionZh : workflow.description}
          </p>
        </motion.div>

        <div className="space-y-8">
          {workflow.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-minimal p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-white/40 mb-2">
                    {t("workflow.step")} {index + 1}
                  </div>
                  <h2 className="text-2xl font-light mb-2">
                    {locale === "zh" ? step.titleZh : step.title}
                  </h2>
                  <p className="text-white/60">
                    {locale === "zh" ? step.descriptionZh : step.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-6 bg-white/5 rounded relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-white/40">{t("workflow.prompt")}</span>
                  <button
                    onClick={() => copyPrompt(locale === "zh" ? step.promptZh : step.prompt, index)}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-sm transition-colors"
                  >
                    {copiedStep === index ? t("workflow.copied") : t("workflow.copy")}
                  </button>
                </div>
                <pre className="text-sm text-white/80 whitespace-pre-wrap font-mono">
                  {locale === "zh" ? step.promptZh : step.prompt}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/dashboard/workflows"
            className="inline-block px-8 py-3 bg-white/5 hover:bg-white/10 rounded transition-colors"
          >
            {t("workflow.backToList")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
