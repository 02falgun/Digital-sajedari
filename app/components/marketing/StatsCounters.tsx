"use client";

import * as React from "react";

function useCountUp(target: number, durationMs = 1200) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return value;
}

export function StatsCounters() {
  const [seen, setSeen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const c1 = useCountUp(seen ? 100 : 0, 1150);
  const c2 = useCountUp(seen ? 250 : 0, 1300);
  const c3 = useCountUp(seen ? 98 : 0, 1350);
  const c4 = useCountUp(seen ? 5 : 0, 1000);

  const stats = [
    { value: c1, suffix: "+", label: "Clients Partnered" },
    { value: c2, suffix: "+", label: "Projects Delivered" },
    { value: c3, suffix: "%", label: "Satisfaction Rate" },
    { value: c4, suffix: "+", label: "Years of Strategy" },
  ];

  return (
    <div ref={ref} className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center text-center">
            <div className="text-[32px] sm:text-[44px] font-display font-extrabold tracking-tight text-text-primary leading-none">
              {s.value}
              <span className="text-accent ml-0.5">
                {s.suffix}
              </span>
            </div>
            <div className="mt-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-text-secondary/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
