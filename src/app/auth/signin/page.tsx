"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SlowFade } from "@/components/motion/slow-fade";

export default function SignInPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isRegister) {
        // Register first
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, name }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Registration failed");
          setLoading(false);
          return;
        }
      }

      // Sign in
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(
          isRegister ? "Registration succeeded but login failed" : "Invalid email or password",
        );
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-[400px] w-full">
        <SlowFade>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extralight text-foreground text-center mb-4">
            {isRegister ? "Create Account" : "Sign In"}
          </h1>
        </SlowFade>

        <SlowFade delay={0.1}>
          <p className="text-[15px] font-light text-muted text-center mb-12">
            {isRegister
              ? "Join OPENENDED to access premium workflows"
              : "Access your workflows and manage your subscription"}
          </p>
        </SlowFade>

        <SlowFade delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister ? (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-signal transition-colors"
              />
            ) : null}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-signal transition-colors"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-signal transition-colors"
            />

            {error ? <p className="text-red-500 text-sm text-center">{error}</p> : null}

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? "Loading..." : isRegister ? "Create Account" : "Sign In"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted mt-6">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => {
                setIsRegister(!isRegister);
                setError("");
              }}
              className="text-signal hover:underline"
            >
              {isRegister ? "Sign In" : "Create Account"}
            </button>
          </p>
        </SlowFade>
      </div>
    </div>
  );
}
