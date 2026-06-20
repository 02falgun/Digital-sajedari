"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Position of cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring settings for smooth lag/inertia effect (luxury feel)
  const springConfig = { damping: 40, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Define inner dot springs at the top level to adhere to the Rules of Hooks
  const dotXSpring = useSpring(cursorX, { damping: 50, stiffness: 800 });
  const dotYSpring = useSpring(cursorY, { damping: 50, stiffness: 800 });

  useEffect(() => {
    // Disable cursor on mobile/touch screens
    const isTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };

    if (isTouchDevice()) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 18); // Center the 36px ring
      cursorY.set(e.clientY - 18);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, input, textarea, [role="button"], [data-cursor="pointer"], .cursor-pointer'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer Halo ring (follows with spring physics) */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          border: isHovered
            ? "2px solid #CCFF00"
            : "1.5px solid rgba(204, 255, 0, 0.4)",
          backgroundColor: isHovered ? "rgba(204, 255, 0, 0.1)" : "transparent",
          boxShadow: isHovered
            ? "0 0 16px rgba(204, 255, 0, 0.4)"
            : "none",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />

      {/* Inner Dot cursor (follows instantly) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000] bg-[#CCFF00]"
        style={{
          x: dotXSpring,
          y: dotYSpring,
          transform: "translate(14px, 14px)", // offset to align with center of 36px ring
          boxShadow: "0 0 8px rgba(204, 255, 0, 0.8)",
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
