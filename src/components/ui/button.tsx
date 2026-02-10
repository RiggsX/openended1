import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const base =
      "inline-flex items-center justify-center font-light tracking-[0.1em] transition-all";

    const variants = {
      primary:
        "bg-[var(--signal)] text-[var(--background)] hover:opacity-80",
      secondary:
        "border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--signal)] hover:text-[var(--signal)]",
      ghost:
        "text-[var(--muted)] hover:text-[var(--foreground)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-[11px]",
      md: "px-6 py-3 text-[12px]",
      lg: "px-8 py-4 text-[13px]",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        style={{
          transitionDuration: "var(--duration-medium)",
          transitionTimingFunction: "var(--ease-smooth)",
        }}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
