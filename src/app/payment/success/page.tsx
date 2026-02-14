"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { SlowFade } from "@/components/motion/slow-fade";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

function PaymentSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const [processing, setProcessing] = useState(true);

  const tier = searchParams.get("tier");
  const interval = searchParams.get("interval");

  useEffect(() => {
    // Simulate processing time (webhook should handle activation)
    const timer = setTimeout(() => {
      setProcessing(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-[600px] text-center">
        {processing ? (
          <SlowFade>
            <div className="mb-8">
              <div className="w-16 h-16 border-2 border-signal/20 border-t-signal rounded-full animate-spin mx-auto mb-6" />
              <h1 className="text-[clamp(2rem,5vw,3rem)] font-extralight text-foreground mb-4">
                Processing Payment...
              </h1>
              <p className="text-[16px] font-light text-muted">
                Please wait while we confirm your payment
              </p>
            </div>
          </SlowFade>
        ) : (
          <>
            <SlowFade>
              <div className="w-20 h-20 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-signal" strokeWidth={1.5} />
              </div>
            </SlowFade>

            <SlowFade delay={0.1}>
              <h1 className="text-[clamp(2rem,5vw,3rem)] font-extralight text-foreground mb-4">
                Payment Successful!
              </h1>
            </SlowFade>

            <SlowFade delay={0.2}>
              <p className="text-[16px] font-light text-muted mb-8">
                Welcome to OPENENDED {tier?.toUpperCase()}
                <br />
                Your {interval === "monthly" ? "monthly" : "yearly"} membership is now active
              </p>
            </SlowFade>

            <SlowFade delay={0.3}>
              <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
            </SlowFade>
          </>
        )}
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}
