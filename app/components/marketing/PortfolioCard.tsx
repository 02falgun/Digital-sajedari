import * as React from "react";
import { cn } from "@/lib/utils";

export function PortfolioCard({
  category,
  title,
  description,
  imageUrl,
  className,
}: {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative rounded-xl overflow-hidden border border-border-custom bg-bg-secondary h-[360px] w-full transition-all duration-500 hover:shadow-md",
        className
      )}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 pointer-events-none"
        loading="lazy"
      />

      {/* Dark Overlay (Darkens on hover to contrast the text) */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/75 z-10 transition-all duration-500 pointer-events-none" />

      {/* Category Pill Tag (top-left, always visible) */}
      <div className="absolute left-6 top-6 rounded-lg bg-bg-primary/90 border border-border-custom text-text-primary px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest z-20 backdrop-blur-md transition-colors group-hover:bg-accent group-hover:text-bg-primary group-hover:border-transparent">
        {category}
      </div>

      {/* Text Overlay (appears on hover) */}
      <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end text-white">
        <h3 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight uppercase transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 translate-y-4 group-hover:translate-y-0 max-w-lg">
          {description}
        </p>

        <div className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#CCFF00] dark:text-[#CCFF00] light:text-[#059669] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
          <span className="text-accent">↗ View Case Study</span>
        </div>
      </div>
    </article>
  );
}
