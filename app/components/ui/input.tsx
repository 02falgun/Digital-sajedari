import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-lg border border-border-custom bg-bg-secondary px-4 text-sm text-text-primary outline-none transition-all duration-200 placeholder:text-text-secondary/50 focus:border-accent focus:ring-2 focus:ring-accent/15",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
