"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading" || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="loading">
          <p className="text-small text-white/40">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const subscription = (
    session.user as {
      subscription?: { tier: string; interval: string; status: string; currentPeriodEnd: string };
    }
  )?.subscription;

  const tier = subscription?.tier || "none";
  const isActive = subscription?.status === "active";

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
          <p className="text-body text-white/50">{session.user?.email}</p>
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
                  {isActive ? (
                    <>
                      OPENENDED <span className="text-white/50">{tier.toUpperCase()}</span>
                    </>
                  ) : (
                    <span className="text-white/50">{t("dashboard.noSubscription")}</span>
                  )}
                </h2>
              </div>
              {isActive ? (
                <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded">
                  <span className="text-xs text-white/70 uppercase tracking-wider">
                    {subscription.status}
                  </span>
                </div>
              ) : null}
            </div>

            {isActive ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">
                    {t("dashboard.billing")}
                  </p>
                  <p className="text-sm text-white/70">
                    {subscription.interval === "monthly"
                      ? t("dashboard.monthly")
                      : t("dashboard.yearly")}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">
                    {t("dashboard.nextBilling")}
                  </p>
                  <p className="text-sm text-white/70">
                    {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">
                    {t("dashboard.accessLevel")}
                  </p>
                  <p className="text-sm text-white/70">
                    {tier === "core" && t("dashboard.coreLibrary")}
                    {tier === "plus" && t("dashboard.corePlusAdvanced")}
                    {tier === "pro" && t("dashboard.fullAccess")}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-body text-white/50 mb-8">{t("dashboard.subscribeMessage")}</p>
            )}

            <div className="flex items-center gap-4">
              {isActive ? (
                <>
                  <Link
                    href="/dashboard/workflows"
                    className="text-small px-6 py-2.5 bg-white text-black hover:bg-white/90 transition-all rounded"
                  >
                    {t("dashboard.browseWorkflows")}
                  </Link>
                  <button className="text-small px-6 py-2.5 border border-white/[0.12] hover:bg-white/[0.02] transition-all rounded">
                    {t("dashboard.manageSubscription")}
                  </button>
                </>
              ) : (
                <Link
                  href="/product"
                  className="text-small px-6 py-2.5 bg-white text-black hover:bg-white/90 transition-all rounded"
                >
                  {t("dashboard.choosePlan")}
                </Link>
              )}
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        {isActive ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="card-minimal p-6 rounded">
              <p className="text-small text-white/40 mb-2">{t("dashboard.workflowsAvailable")}</p>
              <p className="text-3xl font-light">45</p>
            </div>
            <div className="card-minimal p-6 rounded">
              <p className="text-small text-white/40 mb-2">{t("dashboard.newThisMonth")}</p>
              <p className="text-3xl font-light">4</p>
            </div>
            <div className="card-minimal p-6 rounded">
              <p className="text-small text-white/40 mb-2">{t("dashboard.memberSince")}</p>
              <p className="text-3xl font-light">
                {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
              </p>
            </div>
          </motion.div>
        ) : null}

        {/* Recent Workflows */}
        {isActive ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-title">{t("dashboard.recentWorkflows")}</h2>
              <Link
                href="/dashboard/workflows"
                className="text-small text-white/50 hover:text-white transition-colors"
              >
                {t("dashboard.viewAll")} →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Content Strategy Framework",
                  category: "Content",
                  tier: "Core",
                  updated: "2 days ago",
                },
                {
                  title: "Market Research Analysis",
                  category: "Research",
                  tier: "Plus",
                  updated: "5 days ago",
                },
                {
                  title: "Product Launch Checklist",
                  category: "Operations",
                  tier: "Core",
                  updated: "1 week ago",
                },
                {
                  title: "Customer Interview Guide",
                  category: "Research",
                  tier: "Plus",
                  updated: "2 weeks ago",
                },
              ].map((workflow, i) => (
                <Link
                  key={i}
                  href={`/dashboard/workflows/${i + 1}`}
                  className="card-minimal p-6 rounded block group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">
                        {workflow.category}
                      </p>
                      <h3 className="text-lg font-normal group-hover:text-white transition-colors">
                        {workflow.title}
                      </h3>
                    </div>
                    <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-white/50">
                      {workflow.tier}
                    </span>
                  </div>
                  <p className="text-xs text-white/40">Updated {workflow.updated}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
