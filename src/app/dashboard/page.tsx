"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SlowFade } from "@/components/motion/slow-fade";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const subscription = (session.user as { subscription?: { tier: string; interval: string; status: string; currentPeriodEnd: string } })?.subscription;

  return (
    <div className="min-h-screen py-24 px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <SlowFade>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extralight text-foreground mb-8">
            Dashboard
          </h1>
        </SlowFade>

        <SlowFade delay={0.1}>
          <div className="border border-border bg-card p-8 mb-8">
            <h2 className="text-[20px] font-extralight text-foreground mb-4">
              Subscription Status
            </h2>
            {subscription ? (
              <div className="space-y-2">
                <p className="text-[15px] font-light text-muted">
                  <span className="text-foreground">Plan:</span> OPENENDED{" "}
                  {subscription.tier.charAt(0).toUpperCase() + subscription.tier.slice(1)}
                </p>
                <p className="text-[15px] font-light text-muted">
                  <span className="text-foreground">Billing:</span>{" "}
                  {subscription.interval === "monthly" ? "Monthly" : "Yearly"}
                </p>
                <p className="text-[15px] font-light text-muted">
                  <span className="text-foreground">Status:</span>{" "}
                  <span className="text-signal capitalize">{subscription.status}</span>
                </p>
                <p className="text-[15px] font-light text-muted">
                  <span className="text-foreground">Next billing:</span>{" "}
                  {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-[15px] font-light text-muted mb-4">
                  You don&apos;t have an active subscription.
                </p>
                <Button onClick={() => router.push("/product")}>
                  Choose a Plan
                </Button>
              </div>
            )}
          </div>
        </SlowFade>

        <SlowFade delay={0.2}>
          <div className="border border-border bg-card p-8">
            <h2 className="text-[20px] font-extralight text-foreground mb-4">
              Your Workflows
            </h2>
            <p className="text-[15px] font-light text-muted">
              Workflow library coming soon...
            </p>
          </div>
        </SlowFade>
      </div>
    </div>
  );
}
