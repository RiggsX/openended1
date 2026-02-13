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
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [devCode, setDevCode] = useState(""); // 开发环境显示验证码

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || t("auth.signin.errors.somethingWrong"));
        setLoading(false);
        return;
      }

      // 开发环境显示验证码
      if (data.devCode) {
        setDevCode(data.devCode);
      }

      setStep("code");
      setLoading(false);
    } catch {
      setError(t("auth.signin.errors.somethingWrong"));
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || t("auth.signin.errors.invalidCredentials"));
        setLoading(false);
        return;
      }

      // 验证成功，使用 credentials 登录
      const result = await signIn("credentials", {
        email,
        code, // 使用验证码
        redirect: false,
      });

      if (result?.error) {
        setError(t("auth.signin.errors.loginFailed"));
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
            {t("auth.signin.title")}
          </h1>
        </SlowFade>

        <SlowFade delay={0.1}>
          <p className="text-[15px] font-light text-muted text-center mb-12">
            {step === "email" ? t("auth.signin.emailSubtitle") : t("auth.signin.codeSubtitle")}
          </p>
        </SlowFade>

        <SlowFade delay={0.2}>
          {step === "email" ? (
            <form onSubmit={handleSendCode} className="space-y-4">
              <input
                type="email"
                placeholder={t("auth.signin.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-signal transition-colors"
              />

              {error ? <p className="text-red-500 text-sm text-center">{error}</p> : null}

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? t("auth.signin.loading") : t("auth.signin.sendCode")}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyCode} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={t("auth.signin.code")}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                  maxLength={6}
                  className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-signal transition-colors text-center text-2xl tracking-widest"
                />
                {devCode ? (
                  <p className="text-xs text-green-400 text-center mt-2">
                    开发环境验证码: {devCode}
                  </p>
                ) : null}
              </div>

              {error ? <p className="text-red-500 text-sm text-center">{error}</p> : null}

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? t("auth.signin.loading") : t("auth.signin.verify")}
              </Button>

              <button
                type="button"
                onClick={() => {
                  setStep("email");
                  setCode("");
                  setError("");
                  setDevCode("");
                }}
                className="w-full text-sm text-muted hover:text-foreground transition-colors"
              >
                {t("auth.signin.changeEmail")}
              </button>
            </form>
          )}
        </SlowFade>
      </div>
    </div>
  );
}
