"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SlowFade } from "@/components/motion/slow-fade";
import { useI18n } from "@/lib/i18n";

export default function SignInPage() {
  const router = useRouter();
  const { t } = useI18n();
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
          setError(data.error || t("auth.signin.errors.registrationFailed"));
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
          isRegister
            ? t("auth.signin.errors.loginFailed")
            : t("auth.signin.errors.invalidCredentials"),
        );
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch {
      setError(t("auth.signin.errors.somethingWrong"));
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-[400px] w-full">
        <SlowFade>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extralight text-foreground text-center mb-4">
            {isRegister ? t("auth.signin.createTitle") : t("auth.signin.title")}
          </h1>
        </SlowFade>

        <SlowFade delay={0.1}>
          <p className="text-[15px] font-light text-muted text-center mb-12">
            {isRegister ? t("auth.signin.createSubtitle") : t("auth.signin.subtitle")}
          </p>
        </SlowFade>

        <SlowFade delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister ? (
              <input
                type="text"
                placeholder={t("auth.signin.name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-signal transition-colors"
              />
            ) : null}

            <input
              type="email"
              placeholder={t("auth.signin.email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-signal transition-colors"
            />

            <input
              type="password"
              placeholder={t("auth.signin.password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-signal transition-colors"
            />

            {error ? <p className="text-red-500 text-sm text-center">{error}</p> : null}

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading
                ? t("auth.signin.loading")
                : isRegister
                  ? t("auth.signin.createButton")
                  : t("auth.signin.signInButton")}
            </Button>
          </form>

          <p className="text-center text-sm text-muted mt-6">
            {isRegister ? t("auth.signin.alreadyHaveAccount") : t("auth.signin.noAccount")}{" "}
            <button
              onClick={() => {
                setIsRegister(!isRegister);
                setError("");
              }}
              className="text-signal hover:underline"
            >
              {isRegister ? t("auth.signin.signInLink") : t("auth.signin.createLink")}
            </button>
          </p>
        </SlowFade>
      </div>
    </div>
  );
}
