"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { workflowData } from "@/lib/workflow-data";

export default function WorkflowsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t, locale } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTier, setSelectedTier] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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
      subscription?: { tier: string; status: string };
    }
  )?.subscription;

  const userTier = subscription?.tier || "none";
  const isActive = subscription?.status === "active";
  const isZh = locale === "zh";

  // 将 workflowData 转换为数组
  const workflows = Object.values(workflowData).map((wf) => ({
    id: wf.id,
    title: isZh ? wf.titleZh : wf.title,
    category: wf.category,
    tier: wf.tier,
    description: isZh ? wf.descriptionZh : wf.description,
    steps: wf.steps.length,
  }));

  const categories = [
    { key: "All", label: t("workflows.all") },
    { key: "Content", label: t("workflows.content") },
    { key: "Research", label: t("workflows.research") },
    { key: "Operations", label: t("workflows.operations") },
    { key: "Marketing", label: t("workflows.marketing") },
    { key: "Strategy", label: t("workflows.strategy") },
  ];

  const tiers = [
    { key: "All", label: t("workflows.all") },
    { key: "Core", label: "Core" },
    { key: "Plus", label: "Plus" },
    { key: "Pro", label: "Pro" },
  ];

  const filteredWorkflows = workflows.filter((workflow) => {
    const categoryMatch = selectedCategory === "All" || workflow.category === selectedCategory;
    const tierMatch = selectedTier === "All" || workflow.tier === selectedTier;
    const searchMatch =
      searchQuery === "" ||
      workflow.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workflow.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && tierMatch && searchMatch;
  });

  const hasAccess = (workflowTier: string) => {
    if (!isActive) return false;
    if (userTier === "pro") return true;
    if (userTier === "plus" && (workflowTier === "Core" || workflowTier === "Plus")) return true;
    if (userTier === "core" && workflowTier === "Core") return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Link
            href="/dashboard"
            className="text-small text-white/40 hover:text-white/60 transition-colors mb-4 inline-block"
          >
            ← {t("workflows.backToDashboard")}
          </Link>
          <h1 className="text-display mb-4">{t("workflows.title")}</h1>
          <p className="text-body text-white/50">
            {isActive
              ? `${filteredWorkflows.length} ${t("workflows.available")}`
              : t("workflows.subscribeMessage")}
          </p>
        </motion.div>

        {/* Search & Filters */}
        {isActive ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 space-y-6"
          >
            {/* Search Bar */}
            <div className="card-minimal p-6 rounded">
              <input
                type="text"
                placeholder={isZh ? "搜索工作流..." : "Search workflows..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.02] border border-white/[0.06] rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="card-minimal p-6 rounded">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <p className="text-small text-white/40 mb-3">{t("workflows.category")}</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => setSelectedCategory(cat.key)}
                        className={`px-4 py-2 rounded text-xs transition-all ${
                          selectedCategory === cat.key
                            ? "bg-white text-black"
                            : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tier Filter */}
                <div>
                  <p className="text-small text-white/40 mb-3">{t("workflows.tier")}</p>
                  <div className="flex flex-wrap gap-2">
                    {tiers.map((tier) => (
                      <button
                        key={tier.key}
                        onClick={() => setSelectedTier(tier.key)}
                        className={`px-4 py-2 rounded text-xs transition-all ${
                          selectedTier === tier.key
                            ? "bg-white text-black"
                            : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Workflows Grid */}
        {isActive ? (
          filteredWorkflows.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredWorkflows.map((workflow, i) => {
                const canAccess = hasAccess(workflow.tier);

                return (
                  <motion.div
                    key={workflow.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={canAccess ? `/dashboard/workflows/${workflow.id}` : "#"}
                      className={`card-minimal p-6 rounded block group h-full ${
                        !canAccess ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-white/40 uppercase tracking-wider">
                              {workflow.category}
                            </span>
                            <span className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded text-white/50">
                              {workflow.tier}
                            </span>
                          </div>
                          <h3
                            className={`text-lg font-normal mb-2 ${canAccess ? "group-hover:text-white" : ""} transition-colors`}
                          >
                            {workflow.title}
                          </h3>
                        </div>
                        {!canAccess && (
                          <div className="flex-shrink-0 ml-4">
                            <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-white/40">
                              🔒 {t("workflows.locked")}
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-sm text-white/50 mb-4 leading-relaxed">
                        {workflow.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-white/40">
                        <span>
                          {workflow.steps} {t("workflows.steps")}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="card-minimal p-12 rounded text-center"
            >
              <p className="text-body text-white/50">
                {isZh ? "没有找到匹配的工作流" : "No workflows found matching your criteria"}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedTier("All");
                }}
                className="mt-6 text-small px-6 py-2.5 border border-white/[0.12] hover:bg-white/[0.02] transition-all rounded"
              >
                {isZh ? "清除筛选" : "Clear Filters"}
              </button>
            </motion.div>
          )
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="card-minimal p-12 rounded text-center"
          >
            <h2 className="text-title mb-4">{t("workflows.subscribeToAccess")}</h2>
            <p className="text-body text-white/50 mb-8 max-w-xl mx-auto">
              {t("workflows.subscribeDescription")}
            </p>
            <Link
              href="/product"
              className="inline-block text-small px-8 py-3 bg-white text-black hover:bg-white/90 transition-all rounded"
            >
              {t("workflows.viewPlans")}
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
