import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "default"
  | "outline"
  | "ghost"
  | "secondary"
  | "link";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      type = "button",
      ...props
    },
    ref
  ) => {
    const base =
      "relative inline-flex items-center justify-center gap-2 font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-60 overflow-hidden";

    const variants: Record<ButtonVariant, string> = {
      default:
        "bg-accent text-bg-primary shadow-sm hover:bg-accent-hover active:scale-98",
      outline:
        "bg-bg-primary border border-border-custom text-text-primary hover:border-accent/40 hover:text-accent hover:bg-bg-secondary active:scale-98",
      ghost:
        "bg-transparent border border-transparent text-text-primary hover:bg-bg-secondary hover:text-accent",
      secondary:
        "bg-bg-secondary text-text-primary border border-border-custom hover:bg-bg-primary",
      link: "bg-transparent text-accent underline underline-offset-4 hover:text-text-primary",
    };

    const sizes: Record<ButtonSize, string> = {
      sm: "h-10 px-5 text-xs rounded-lg",
      md: "h-12 px-6 text-sm rounded-xl",
      lg: "h-14 px-8 text-base rounded-xl",
      icon: "h-12 w-12 p-0 rounded-xl",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {props.children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";
