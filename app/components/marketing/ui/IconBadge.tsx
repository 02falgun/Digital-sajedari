import * as React from "react";

import { cn } from "@/lib/utils";

export function IconBadge({
  icon,
  label,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl bg-emerald-500/10 px-4 py-2 border border-emerald-300/20",
        className
      )}
      aria-label={label}
    >
      <span className="text-[#C6FF00]">{icon}</span>
      <span className="text-sm font-semibold text-slate-800">{label}</span>
    </div>
  );
}

