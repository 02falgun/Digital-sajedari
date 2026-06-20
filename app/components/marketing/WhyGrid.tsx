import * as React from "react";
import { BarChart3, ShieldCheck, Zap, FileText } from "lucide-react";

export function WhyChooseUsGrid() {
  const items = [
    { title: "Experienced Team", icon: Zap },
    { title: "Proven Results", icon: BarChart3 },
    { title: "Transparent Reporting", icon: FileText },
    { title: "Affordable Solutions", icon: ShieldCheck },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <div
            key={it.title}
            className="rounded-[28px] bg-[#184D3B] p-5 border border-[#C6FF00]/15 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#C6FF00]/15 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#C6FF00]" />
              </div>
              <div className="text-[16px] font-extrabold text-white">
                {it.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

