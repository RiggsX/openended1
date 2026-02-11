"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { SlowFade } from "@/components/motion/slow-fade";
import { Button } from "@/components/ui/button";

interface Workflow {
  id: string;
  title: string;
  description: string;
  tier: string;
  category: string;
  tags: string[];
  content: string;
  createdAt: string;
}

export default function WorkflowDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [workflow, setWorkflow] = useState<Workflow | null>(null);
  const [loading, setLoading] = useState(true);

  const subscription = (session?.user as { subscription?: { tier: string } })?.subscription;
  const userTier = subscription?.tier || "none";

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  const fetchWorkflow = useCallback(async () => {
    try {
      const response = await fetch(`/api/admin/workflows/${params.id}`);
      const data = await response.json();
      setWorkflow(data.workflow);
    } catch (error) {
      console.error("Error fetching workflow:", error);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id && status === "authenticated") {
      fetchWorkflow();
    }
  }, [params.id, status, fetchWorkflow]);

  const canAccess = (workflowTier: string) => {
    const tierLevel = { none: 0, core: 1, plus: 2, pro: 3 };
    return (
      tierLevel[userTier as keyof typeof tierLevel] >=
      tierLevel[workflowTier as keyof typeof tierLevel]
    );
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (!session || !workflow) {
    return null;
  }

  const hasAccess = canAccess(workflow.tier);

  return (
    <div className="min-h-screen py-24 px-8 md:px-16">
      <div className="max-w-[900px] mx-auto">
        <SlowFade>
          <button
            onClick={() => router.back()}
            className="text-[14px] font-light text-muted hover:text-signal transition-colors mb-8"
          >
            ← Back to Library
          </button>
        </SlowFade>

        <SlowFade delay={0.1}>
          <div className="mb-6">
            <span className="text-[12px] font-light tracking-wider uppercase text-signal">
              {workflow.tier}
            </span>
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-extralight text-foreground mt-2 mb-4">
              {workflow.title}
            </h1>
            <p className="text-[16px] font-light text-muted mb-4">{workflow.description}</p>
            <div className="flex flex-wrap gap-2">
              {workflow.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-light text-muted border border-border px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </SlowFade>

        {!hasAccess ? (
          <SlowFade delay={0.2}>
            <div className="border border-signal/40 bg-surface p-8 text-center">
              <p className="text-[15px] font-light text-muted mb-4">
                🔒 This workflow requires a {workflow.tier.toUpperCase()} subscription
              </p>
              <Button onClick={() => router.push("/product")}>Upgrade Plan</Button>
            </div>
          </SlowFade>
        ) : (
          <SlowFade delay={0.2}>
            <div className="border border-border bg-card p-8">
              <div
                className="prose prose-invert max-w-none text-[15px] font-light leading-[1.8]"
                dangerouslySetInnerHTML={{
                  __html: workflow.content.replace(/\n/g, "<br />"),
                }}
              />
            </div>
          </SlowFade>
        )}
      </div>
    </div>
  );
}
