"use client";

import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { workflowData } from "@/lib/workflow-data";

interface WorkflowStep {
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  prompt: string;
  promptZh: string;
}

export default function WorkflowDetailPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const { t, locale } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const workflowId = params?.id as string;
  const workflow = workflowData[workflowId];

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  const copyPrompt = (prompt: string, stepIndex: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  if (status === "loading" || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="loading">
          <p className="text-small text-white/40">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session || !workflow) {
    return null;
  }

  const isZh = locale === "zh";
  const title = isZh ? workflow.titleZh : workflow.title;
  const description = isZh ? workflow.descriptionZh : workflow.description;

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Link
            href="/dashboard/workflows"
            className="text-small text-white/40 hover:text-white/60 transition-colors mb-4 inline-block"
          >
            ← {t("workflows.backToLibrary")}
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-small text-white/40">{workflow.category}</span>
            <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-white/50">
              {workflow.tier}
            </span>
          </div>

          <h1 className="text-display mb-4">{title}</h1>
          <p className="text-body text-white/50 mb-6">{description}</p>

          <div className="flex items-center gap-6 text-sm text-white/40">
            <span>
              {workflow.steps.length} {t("workflows.steps")}
            </span>
          </div>
        </motion.div>

        {/* Beginner Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="card-minimal p-8 rounded mb-12"
        >
          <h2 className="text-lg font-normal mb-4">{t("workflows.howToUse")}</h2>
          <ol className="space-y-3 text-sm text-white/60">
            <li className="flex items-start">
              <span className="text-white/40 mr-3">1.</span>
              <span>{t("workflows.step1")}</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/40 mr-3">2.</span>
              <span>{t("workflows.step2")}</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/40 mr-3">3.</span>
              <span>{t("workflows.step3")}</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/40 mr-3">4.</span>
              <span>{t("workflows.step4")}</span>
            </li>
          </ol>
        </motion.div>

        {/* Detailed Tutorial for Beginners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="card-minimal p-8 rounded mb-12 bg-white/[0.02]"
        >
          <h2 className="text-lg font-normal mb-4">
            {isZh ? "🎓 新手详细教程" : "🎓 Detailed Tutorial for Beginners"}
          </h2>

          <div className="space-y-6 text-sm text-white/60">
            <div>
              <h3 className="text-white/80 font-normal mb-2">
                {isZh ? "什么是工作流？" : "What is a Workflow?"}
              </h3>
              <p className="leading-relaxed">
                {isZh
                  ? "工作流是一系列经过测试的步骤，帮助你使用 AI 完成特定任务。每个步骤都包含一个精心设计的提示词，你只需复制粘贴到 ChatGPT 或 Claude 中即可。"
                  : "A workflow is a series of tested steps that help you complete a specific task using AI. Each step contains a carefully crafted prompt that you simply copy and paste into ChatGPT or Claude."}
              </p>
            </div>

            <div>
              <h3 className="text-white/80 font-normal mb-2">
                {isZh ? "如何使用提示词？" : "How to Use Prompts?"}
              </h3>
              <ol className="space-y-2 list-decimal list-inside leading-relaxed">
                <li>
                  {isZh
                    ? "点击提示词框下方的「复制提示词」按钮"
                    : "Click the 'Copy Prompt' button below the prompt box"}
                </li>
                <li>
                  {isZh
                    ? "打开 ChatGPT (chat.openai.com) 或 Claude (claude.ai)"
                    : "Open ChatGPT (chat.openai.com) or Claude (claude.ai)"}
                </li>
                <li>{isZh ? "粘贴提示词到对话框中" : "Paste the prompt into the chat box"}</li>
                <li>
                  {isZh
                    ? "将 [方括号] 中的内容替换为你的实际信息"
                    : "Replace [bracketed text] with your actual information"}
                </li>
                <li>
                  {isZh
                    ? "按回车发送，等待 AI 回复"
                    : "Press Enter to send and wait for AI's response"}
                </li>
                <li>
                  {isZh
                    ? "保存 AI 的回复，你会在后续步骤中用到"
                    : "Save AI's response - you'll need it in later steps"}
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-white/80 font-normal mb-2">
                {isZh ? "💡 专业提示" : "💡 Pro Tips"}
              </h3>
              <ul className="space-y-2 leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    {isZh
                      ? "不要跳过步骤 - 每个步骤都基于前一步的结果"
                      : "Don't skip steps - each builds on the previous one"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    {isZh
                      ? "如果 AI 的回复不够详细，可以要求它「展开说明」或「提供更多细节」"
                      : "If AI's response isn't detailed enough, ask it to 'expand' or 'provide more details'"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    {isZh
                      ? "将每步的 AI 回复保存到文档中，方便后续参考"
                      : "Save each AI response in a document for easy reference"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    {isZh
                      ? "可以根据你的具体情况调整提示词，但保持核心结构不变"
                      : "Feel free to adapt prompts to your situation, but keep the core structure"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    {isZh
                      ? "第一次使用可能需要 1-2 小时，但之后会越来越快"
                      : "First time may take 1-2 hours, but you'll get faster with practice"}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded p-4">
              <p className="text-white/70">
                <span className="text-white/90 font-normal">
                  {isZh ? "⚠️ 重要提醒：" : "⚠️ Important:"}
                </span>{" "}
                {isZh
                  ? "这些提示词在 ChatGPT-4、Claude 3.5 Sonnet 或更高版本上效果最好。免费版本可能效果有限。"
                  : "These prompts work best with ChatGPT-4, Claude 3.5 Sonnet, or higher. Free versions may have limited results."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {workflow.steps.map((step: WorkflowStep, i: number) => {
            const stepTitle = isZh ? step.titleZh : step.title;
            const stepDesc = isZh ? step.descriptionZh : step.description;
            const stepPrompt = isZh ? step.promptZh : step.prompt;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="card-minimal p-8 rounded"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-white/50">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-normal mb-2">{stepTitle}</h3>
                    <p className="text-sm text-white/50">{stepDesc}</p>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.06] rounded p-6 relative">
                  <pre className="text-sm text-white/70 leading-relaxed mb-4 whitespace-pre-wrap font-sans">
                    {stepPrompt}
                  </pre>
                  <button
                    onClick={() => copyPrompt(stepPrompt, i)}
                    className="text-xs px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-all"
                  >
                    {copiedStep === i ? `✓ ${t("workflows.copied")}` : t("workflows.copyPrompt")}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <Link
            href="/dashboard/workflows"
            className="inline-block text-small px-8 py-3 border border-white/[0.12] hover:bg-white/[0.02] transition-all rounded"
          >
            {t("workflows.browseMore")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
