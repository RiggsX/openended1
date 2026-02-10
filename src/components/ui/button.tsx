import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-bold transition-all rounded-full";

    const variants = {
      primary:
        "bg-[var(--accent)] text-[var(--accent-foreground)] hover:scale-105 hover:shadow-[0_0_30px_rgba(228,255,26,0.3)]",
      secondary:
        "border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
      ghost: "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
