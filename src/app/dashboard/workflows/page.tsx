"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SlowFade } from "@/components/motion/slow-fade";
import { Button } from "@/components/ui/button";

interface Workflow {
  id: string;
  title: string;
  description: string;
  tier: string;
  category: string;
  tags: string[];
  createdAt: string;
}

export default function WorkflowsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  const subscription = (session?.user as { subscription?: { tier: string } })?.subscription;
  const userTier = subscription?.tier || "none";

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  const fetchWorkflows = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/workflows");
      const data = await response.json();
      setWorkflows(data.workflows || []);
    } catch (error) {
      console.error("Error fetching workflows:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      fetchWorkflows();
    }
  }, [status, fetchWorkflows]);

  const canAccess = (workflowTier: string) => {
    const tierLevel = { none: 0, core: 1, plus: 2, pro: 3 };
    return (
      tierLevel[userTier as keyof typeof tierLevel] >=
      tierLevel[workflowTier as keyof typeof tierLevel]
    );
  };

  const categories = ["all", ...new Set(workflows.map((w) => w.category))];

  const filteredWorkflows = workflows.filter((w) => filter === "all" || w.category === filter);

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen py-24 px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <SlowFade>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extralight text-foreground mb-8">
            Workflow Library
          </h1>
        </SlowFade>

        {!subscription && (
          <SlowFade delay={0.1}>
            <div className="border border-signal/40 bg-surface p-6 mb-8">
              <p className="text-[15px] font-light text-muted mb-4">
                Subscribe to access premium workflows
              </p>
              <Button onClick={() => router.push("/product")}>Choose a Plan</Button>
            </div>
          </SlowFade>
        )}

        {/* Category Filter */}
        <SlowFade delay={0.15}>
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-[14px] font-light border transition-colors whitespace-nowrap ${
                  filter === cat
                    ? "border-signal text-signal"
                    : "border-border text-muted hover:border-signal/40"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </SlowFade>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkflows.map((workflow, i) => {
            const hasAccess = canAccess(workflow.tier);
            return (
              <SlowFade key={workflow.id} delay={0.2 + i * 0.05}>
                <div
                  className={`border bg-card p-6 transition-all duration-300 ${
                    hasAccess
                      ? "border-border hover:border-signal/40 cursor-pointer"
                      : "border-border/50 opacity-60"
                  }`}
                  onClick={() => hasAccess && router.push(`/dashboard/workflows/${workflow.id}`)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`text-[12px] font-light tracking-wider uppercase ${
                        hasAccess ? "text-signal" : "text-muted"
                      }`}
                    >
                      {workflow.tier}
                    </span>
                    {!hasAccess && <span className="text-[12px] font-light text-muted">🔒</span>}
                  </div>

                  <h3 className="text-[18px] font-extralight text-foreground mb-2">
                    {workflow.title}
                  </h3>

                  <p className="text-[14px] font-light text-muted mb-4 line-clamp-2">
                    {workflow.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {workflow.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-light text-muted border border-border px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SlowFade>
            );
          })}
        </div>

        {filteredWorkflows.length === 0 && (
          <SlowFade delay={0.2}>
            <div className="text-center py-16">
              <p className="text-[15px] font-light text-muted">
                No workflows found in this category
              </p>
            </div>
          </SlowFade>
        )}
      </div>
    </div>
  );
}
