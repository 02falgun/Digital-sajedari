"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="group relative rounded-xl border border-border-custom bg-bg-secondary p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-sm">
      
      {/* Icon Frame */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-custom bg-bg-primary text-text-primary group-hover:text-accent transition-colors">
        <Icon className="w-5 h-5" />
      </div>

      {/* Title & Description */}
      <h3 className="mt-6 text-xl font-display font-bold tracking-tight text-text-primary">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary font-semibold">
        {description}
      </p>

      {/* Get a Quote Action Link */}
      <div className="mt-6">
        <a 
          href="#contact" 
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-accent-hover transition-colors"
        >
          Get a Quote
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

    </div>
  );
}
