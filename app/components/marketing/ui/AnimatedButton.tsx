"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function AnimatedButton({
  variant = "primary",
  children,
  className,
  type = "button",
  onClick,
  disabled,
  form,
}: AnimatedButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (variant !== "primary" || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Attract the button (magnetic effect) by 35% of cursor vector distance
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (variant === "primary") {
    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        form={form}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.1 }}
        className={cn(
          "inline-flex h-12 px-6 items-center justify-center rounded-lg bg-accent text-bg-primary font-bold text-xs uppercase tracking-wider transition-colors hover:bg-accent-hover shadow-sm active:scale-98 cursor-pointer focus:outline-none",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }

  // Secondary Variant: Right-arrow (->) slides right and fades out/in on hover
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      form={form}
      initial="initial"
      whileHover="hover"
      className={cn(
        "group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-hover cursor-pointer focus:outline-none transition-colors",
        className
      )}
    >
      <span>{children}</span>
      <span className="relative flex items-center justify-center w-4 h-4 overflow-hidden">
        {/* Existing arrow slides out to the right */}
        <motion.span
          className="absolute"
          variants={{
            initial: { x: 0, opacity: 1 },
            hover: { x: 12, opacity: 0 }
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.span>
        
        {/* New arrow slides in from the left */}
        <motion.span
          className="absolute"
          variants={{
            initial: { x: -12, opacity: 0 },
            hover: { x: 0, opacity: 1 }
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.span>
      </span>
    </motion.button>
  );
}
