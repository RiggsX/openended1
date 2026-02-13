"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import type { UserTier } from "@/lib/subscription";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  tier: string;
}

interface Subscription {
  id: string;
  tier: string;
  status: string;
  currentPeriodEnd: Date;
}

interface Props {
  user: User;
  tier: UserTier;
  isAdmin: boolean;
  hasActiveSubscription: boolean;
  subscription: Subscription | null;
}

export default function DashboardClient({
  user,
  tier,
  isAdmin,
  hasActiveSubscription,
  subscription,
}: Props) {
  const { t, locale } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white/40">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-small text-white/40 mb-4">Dashboard</p>
          <h1 className="text-display mb-4">{t("dashboard.welcome")}</h1>
          <p className="text-body text-white/50">{user.email}</p>
          {isAdmin ? (
            <div className="mt-4">
              <span className="px-3 py-1 bg-green-500/20 rounded text-sm text-green-400">
                {locale === "zh" ? "管理员账号" : "Admin Account"}
              </span>
            </div>
          ) : null}
        </motion.div>

        {/* Subscription Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="card-minimal p-8 rounded">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-small text-white/40 mb-2">{t("dashboard.currentPlan")}</p>
                <h2 className="text-2xl font-light">
                  {isAdmin ? (
                    <>
                      OPENENDED <span className="text-green-400">ADMIN (ALL ACCESS)</span>
                    </>
                  ) : hasActiveSubscription ? (
                    <>
                      OPENENDED <span className="text-white/50">{tier.toUpperCase()}</span>
                    </>
                  ) : (
                    <span className="text-white/50">
                      {locale === "zh" ? "免费版" : "Free Tier"}
                    </span>
                  )}
                </h2>
              </div>
              {!isAdmin && (
                <Link
                  href="/pricing"
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded transition-colors text-sm"
                >
                  {hasActiveSubscription
                    ? locale === "zh"
                      ? "管理订阅"
                      : "Manage"
                    : locale === "zh"
                      ? "升级"
                      : "Upgrade"}
                </Link>
              )}
            </div>

            {subscription && !isAdmin ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-small text-white/40 mb-1">
                    {locale === "zh" ? "状态" : "Status"}
                  </p>
                  <p className="text-white/80 capitalize">{subscription.status}</p>
                </div>
                <div>
                  <p className="text-small text-white/40 mb-1">
                    {locale === "zh" ? "订阅层级" : "Tier"}
                  </p>
                  <p className="text-white/80 uppercase">{subscription.tier}</p>
                </div>
                <div>
                  <p className="text-small text-white/40 mb-1">
                    {locale === "zh" ? "续订日期" : "Renews"}
                  </p>
                  <p className="text-white/80">
                    {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="card-minimal p-6 rounded">
            <p className="text-small text-white/40 mb-2">{t("dashboard.workflowsAvailable")}</p>
            <p className="text-3xl font-light">90</p>
          </div>
          <div className="card-minimal p-6 rounded">
            <p className="text-small text-white/40 mb-2">{t("dashboard.workflowsUsed")}</p>
            <p className="text-3xl font-light">0</p>
          </div>
          <div className="card-minimal p-6 rounded">
            <p className="text-small text-white/40 mb-2">{t("dashboard.savedTime")}</p>
            <p className="text-3xl font-light">0h</p>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl font-light mb-6">{t("dashboard.quickActions")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/dashboard/workflows"
              className="card-minimal p-8 rounded hover:bg-white/5 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-light mb-2 group-hover:text-white transition-colors">
                    {t("dashboard.browseWorkflows")}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {locale === "zh"
                      ? "浏览所有可用的 AI 工作流"
                      : "Browse all available AI workflows"}
                  </p>
                </div>
                <svg
                  className="w-6 h-6 text-white/40 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            {!isAdmin && !hasActiveSubscription && (
              <Link
                href="/pricing"
                className="card-minimal p-8 rounded hover:bg-white/5 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-light mb-2 group-hover:text-white transition-colors">
                      {locale === "zh" ? "升级订阅" : "Upgrade Plan"}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {locale === "zh" ? "解锁所有高级工作流" : "Unlock all premium workflows"}
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-white/40 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
