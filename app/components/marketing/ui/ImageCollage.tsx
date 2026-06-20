import * as React from "react";
import Image from "next/image";

export function HeroCollage() {
  // Uses decorative gradient blocks as “images” when no real photo assets exist.
  return (
    <div className="relative w-full h-[420px] sm:h-[520px]">
      <div className="absolute inset-0 rounded-[32px] bg-[#184D3B]/5 border border-[#184D3B]/15" />

      <div className="absolute left-6 top-10 w-[190px] h-[240px] rounded-[30px] overflow-hidden bg-gradient-to-br from-[#184D3B] to-[#C6FF00]/30 border border-[#184D3B]/20 shadow-xl shadow-emerald-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(198,255,0,0.35),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(24,77,59,0.45),transparent_60%)]" />
      </div>

      <div className="absolute right-0 top-0 w-[210px] h-[170px] rounded-[30px] overflow-hidden bg-white border border-[#184D3B]/15 shadow-lg shadow-emerald-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(198,255,0,0.35),transparent_55%),linear-gradient(135deg,rgba(24,77,59,0.18),rgba(255,255,255,0.9))]" />
      </div>

      <div className="absolute right-6 bottom-10 w-[220px] h-[240px] rounded-[30px] overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#184D3B] border border-[#184D3B]/25 shadow-xl shadow-emerald-500/10">
        <div className="absolute inset-0 opacity-90">
          <Image
            src="/PHOTO-2026-06-19-23-27-17.jpg"
            alt="Digital Sajhedari brand"
            width={1}
            height={1}
            className="w-full h-full object-cover opacity-35"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(198,255,0,0.38),transparent_60%)]" />
      </div>

      {/* Floating lime decorative elements */}
      <span className="absolute left-0 bottom-0 w-16 h-16 rounded-full bg-[#C6FF00]/25 blur-[1px]" />
      <span className="absolute right-8 top-28 w-10 h-10 rounded-full bg-[#C6FF00]/30" />
      <span className="absolute right-2 top-2 w-[14px] h-[14px] rounded-full bg-[#C6FF00]" />

      {/* Tiny cards */}
      <div className="absolute left-[120px] top-[210px] w-[150px] h-[90px] rounded-[26px] bg-white/80 border border-[#184D3B]/15 backdrop-blur" />
      <div className="absolute left-[95px] top-[35px] w-[140px] h-[70px] rounded-[26px] bg-white/70 border border-[#184D3B]/15 backdrop-blur" />
    </div>
  );
}

export function WhyChooseCollage() {
  return (
    <div className="relative h-[420px] sm:h-[520px] w-full">
      <div className="absolute inset-0 rounded-[32px] bg-white border border-[#184D3B]/10 shadow-lg" />
      <div className="absolute left-6 top-10 w-[230px] h-[280px] rounded-[32px] bg-gradient-to-br from-[#184D3B] to-[#C6FF00]/25 border border-[#184D3B]/20" />
      <div className="absolute right-10 top-6 w-[210px] h-[150px] rounded-[32px] bg-white border border-[#184D3B]/15 shadow-md" />
      <div className="absolute right-8 bottom-8 w-[240px] h-[220px] rounded-[32px] bg-[#0F172A] border border-[#184D3B]/25 shadow-xl" />

      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute right-12 top-20 w-5 h-5 rounded-full bg-[#C6FF00]" />
        <span className="absolute left-8 bottom-10 w-10 h-10 rounded-full bg-[#C6FF00]/25" />
      </div>
    </div>
  );
}

