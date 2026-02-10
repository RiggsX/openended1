"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { SlowFade } from "@/components/motion/slow-fade";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-[400px] w-full">
        <SlowFade>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extralight text-foreground text-center mb-4">
            Sign in to OPENENDED
          </h1>
        </SlowFade>

        <SlowFade delay={0.1}>
          <p className="text-[15px] font-light text-muted text-center mb-12">
            Access your workflows and manage your subscription
          </p>
        </SlowFade>

        <SlowFade delay={0.2}>
          <Button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="w-full"
            size="lg"
          >
            Continue with Google
          </Button>
        </SlowFade>
      </div>
    </div>
  );
}
