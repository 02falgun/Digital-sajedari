import * as React from "react";

export function MarketingSectionHeading({

  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClasses = align === "left" ? "items-start text-left" : "items-center";

  return (
    <div
      className={`flex flex-col gap-3 ${alignClasses} max-w-3xl mx-auto`}
    >
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-[0.22em] uppercase text-emerald-400/90">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-[44px] leading-[1.02] font-[800] tracking-tight text-[#0F172A] dark:text-white sm:text-[54px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-[18px] leading-7 text-slate-600 dark:text-slate-300 max-w-2xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

