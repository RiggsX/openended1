"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SlowFade } from "@/components/motion/slow-fade";
import { Button } from "@/components/ui/button";

type WorkflowTier = "core" | "plus" | "pro";

interface WorkflowForm {
  title: string;
  description: string;
  tier: WorkflowTier;
  category: string;
  content: string;
  tags: string;
}

export default function AdminWorkflowsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState<WorkflowForm>({
    title: "",
    description: "",
    tier: "core",
    category: "",
    content: "",
    tags: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // TODO: 添加管理员权限检查
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/workflows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(",").map((t) => t.trim()),
        }),
      });

      if (!response.ok) throw new Error("Failed to create workflow");

      setMessage("✅ Workflow created successfully!");
      setForm({
        title: "",
        description: "",
        tier: "core",
        category: "",
        content: "",
        tags: "",
      });
    } catch (error) {
      setMessage("❌ Error creating workflow");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-24 px-8 md:px-16">
      <div className="max-w-[800px] mx-auto">
        <SlowFade>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extralight text-foreground mb-8">
            Create Workflow
          </h1>
        </SlowFade>

        <SlowFade delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-[15px] font-light text-foreground mb-2">Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border text-foreground text-[15px] font-light focus:outline-none focus:border-signal transition-colors"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-[15px] font-light text-foreground mb-2">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border text-foreground text-[15px] font-light focus:outline-none focus:border-signal transition-colors h-24 resize-none"
                required
              />
            </div>

            {/* Tier */}
            <div>
              <label className="block text-[15px] font-light text-foreground mb-2">
                Access Tier
              </label>
              <select
                value={form.tier}
                onChange={(e) => setForm({ ...form, tier: e.target.value as WorkflowTier })}
                className="w-full px-4 py-3 bg-surface border border-border text-foreground text-[15px] font-light focus:outline-none focus:border-signal transition-colors"
              >
                <option value="core">Core</option>
                <option value="plus">Plus</option>
                <option value="pro">Pro</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-[15px] font-light text-foreground mb-2">Category</label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                placeholder="e.g., Productivity, Strategy, Communication"
                className="w-full px-4 py-3 bg-surface border border-border text-foreground text-[15px] font-light focus:outline-none focus:border-signal transition-colors"
                required
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-[15px] font-light text-foreground mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                value={form.tags}
                onChange={(e) => setForm({ ...form, tags: e.target.value })}
                placeholder="e.g., planning, meetings, email"
                className="w-full px-4 py-3 bg-surface border border-border text-foreground text-[15px] font-light focus:outline-none focus:border-signal transition-colors"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-[15px] font-light text-foreground mb-2">
                Workflow Content (Markdown)
              </label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border text-foreground text-[15px] font-light focus:outline-none focus:border-signal transition-colors h-64 resize-none font-mono text-[13px]"
                required
              />
            </div>

            {/* Submit */}
            <div className="flex items-center gap-4">
              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Workflow"}
              </Button>
              {message ? (
                <span className="text-[14px] font-light text-muted">{message}</span>
              ) : null}
            </div>
          </form>
        </SlowFade>
      </div>
    </div>
  );
}
