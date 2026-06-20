import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-border-custom bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none resize-none transition-all duration-200 placeholder:text-text-secondary/50 focus:border-accent focus:ring-2 focus:ring-accent/15",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
