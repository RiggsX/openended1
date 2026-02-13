"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { workflowData } from "@/lib/workflow-data";
import type { UserTier } from "@/lib/subscription";

interface Props {
  userTier: UserTier;
  isAdmin: boolean;
}

const TIER_HIERARCHY: Record<UserTier, number> = {
  free: 0,
  core: 1,
  plus: 2,
  pro: 3,
};

export default function WorkflowsListClient({ userTier, isAdmin }: Props) {
  const { t, locale } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const workflows = Object.values(workflowData);

  // 获取所有分类
  const categories = ["all", ...new Set(workflows.map((w) => w.category))];

  // 过滤工作流
  const filteredWorkflows =
    selectedCategory === "all"
      ? workflows
      : workflows.filter((w) => w.category === selectedCategory);

  // 检查用户是否可以访问工作流
  const canAccess = (workflowTier: string): boolean => {
    if (isAdmin) return true;
    const userLevel = TIER_HIERARCHY[userTier];
    const workflowLevel = TIER_HIERARCHY[workflowTier.toLowerCase() as UserTier];
    return userLevel >= workflowLevel;
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white/40">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-white/60 hover:text-white mb-6 transition-colors"
          >
            ← {t("common.back")}
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-light mb-2">{t("workflows.title")}</h1>
              <p className="text-white/60">
                {locale === "zh"
                  ? `您的订阅层级：${userTier.toUpperCase()}`
                  : `Your tier: ${userTier.toUpperCase()}`}
                {isAdmin ? (
                  <span className="ml-2 px-2 py-1 bg-green-500/20 rounded text-xs text-green-400">
                    {locale === "zh" ? "管理员" : "Admin"}
                  </span>
                ) : null}
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded transition-colors ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {category === "all" ? (locale === "zh" ? "全部" : "All") : category}
            </button>
          ))}
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkflows.map((workflow, index) => {
            const hasAccess = canAccess(workflow.tier);

            return (
              <motion.div
                key={workflow.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={hasAccess ? `/dashboard/workflows/${workflow.id}` : "#"}
                  className={`block card-minimal p-6 h-full transition-all ${
                    hasAccess ? "hover:bg-white/10 cursor-pointer" : "opacity-60 cursor-not-allowed"
                  }`}
                  onClick={(e) => {
                    if (!hasAccess) {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/60">
                          {workflow.category}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            workflow.tier === "Core"
                              ? "bg-blue-500/20 text-blue-400"
                              : workflow.tier === "Plus"
                                ? "bg-purple-500/20 text-purple-400"
                                : "bg-amber-500/20 text-amber-400"
                          }`}
                        >
                          {workflow.tier}
                        </span>
                      </div>
                      <h3 className="text-xl font-light mb-2">
                        {locale === "zh" ? workflow.titleZh : workflow.title}
                      </h3>
                      <p className="text-sm text-white/60 line-clamp-2">
                        {locale === "zh" ? workflow.descriptionZh : workflow.description}
                      </p>
                    </div>
                    {!hasAccess && (
                      <div className="ml-4">
                        <svg
                          className="w-5 h-5 text-white/40"
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
                    )}
                  </div>

                  {!hasAccess && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs text-white/40">
                        {locale === "zh"
                          ? `需要 ${workflow.tier} 订阅`
                          : `Requires ${workflow.tier} subscription`}
                      </p>
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Upgrade CTA */}
        {userTier !== "pro" && !isAdmin && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 card-minimal p-8 text-center"
          >
            <h2 className="text-2xl font-light mb-4">
              {locale === "zh" ? "解锁更多工作流" : "Unlock More Workflows"}
            </h2>
            <p className="text-white/60 mb-6">
              {locale === "zh"
                ? "升级订阅以访问所有高级工作流"
                : "Upgrade your subscription to access all premium workflows"}
            </p>
            <Link
              href="/pricing"
              className="inline-block px-8 py-3 bg-white text-black rounded hover:bg-white/90 transition-colors"
            >
              {locale === "zh" ? "查看定价" : "View Pricing"}
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
