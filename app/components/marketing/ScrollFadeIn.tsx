"use client";

import * as React from "react";

export function ScrollFadeIn({
  children,
  className,
  delay = 0,
  duration = 850,
  amount = 0.18,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: amount }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [amount]);

  const transform = React.useMemo(() => {
    if (isVisible) {
      return "translate3d(0, 0, 0) scale(1)";
    }

    switch (direction) {
      case "down":
        return "translate3d(0, -18px, 0) scale(0.98)";
      case "left":
        return "translate3d(24px, 0, 0) scale(0.98)";
      case "right":
        return "translate3d(-24px, 0, 0) scale(0.98)";
      case "up":
      default:
        return "translate3d(0, 24px, 0) scale(0.98)";
    }
  }, [direction, isVisible]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

