"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Die einfachste Lösung ist, die komplexen Offset-Typen von Framer Motion zu umgehen
interface ScrollBorderProps {
  targetRef?: React.RefObject<HTMLElement>;
  position?: "left" | "right";
  baseOpacity?: number;
  activeOpacity?: number;
  width?: number;
  color?: string;
  className?: string;
  offsets?: [any, any];
  offset?: string; // Für den genauen Abstand vom Rand, z.B. "0px" oder "16px"
}

/**
 * ScrollBorder - A component that shows a scroll-activated border animation
 *
 * Can be used in two modes:
 * 1. With framer-motion (preferred): pass no targetRef but the component as a child of the target
 * 2. With DOM measurements: pass a targetRef to the element you want to track
 */
const ScrollBorder = ({
  targetRef,
  position = "left",
  baseOpacity = 0.2,
  activeOpacity = 0.8,
  width = 4,
  color = "bg-emerald-700",
  className = "",
  offsets = ["start end", "end start"],
  offset = "0px", // Standard ist am Rand (0px Abstand)
}: ScrollBorderProps) => {
  // State approach (used if targetRef is provided)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Framer Motion approach (used if this component is a child of the target element)
  const ownRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef || ownRef,
    offset: offsets,
  });

  // Transform scrollYProgress to a 0-100% range for the border height
  const borderHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  // Only set up the scroll listener if targetRef is provided (legacy mode)
  useEffect(() => {
    if (!targetRef) return; // Skip if using Framer Motion approach

    const handleScroll = () => {
      if (!targetRef.current) return;

      const element = targetRef.current;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Check if element is in viewport
      if (
        scrollPosition + viewportHeight > elementTop &&
        scrollPosition < elementTop + elementHeight
      ) {
        setIsVisible(true);

        // Calculate progress relative to the element
        const relativeProgress =
          ((scrollPosition + viewportHeight - elementTop) /
            (elementHeight + viewportHeight)) *
          100;

        setScrollProgress(Math.min(Math.max(relativeProgress, 0), 100));
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetRef]);

  // If using targetRef approach and element is not visible, don't render
  if (targetRef && !isVisible) return null;

  // When using Framer Motion approach
  if (!targetRef) {
    return (
      <div
        ref={ownRef}
        className={`absolute top-0 bottom-0 ${className}`}
        style={{ [position]: offset }} // Dynamische Position
      >
        {/* Base line (always visible) */}
        <div
          className={`absolute top-0 bottom-0 ${color}`}
          style={{
            width: `${width}px`,
            opacity: baseOpacity,
            [position]: 0, // Dieser Wert bleibt fix 0
          }}
        />

        {/* Progress line (animated with framer-motion) */}
        <motion.div
          className={`absolute top-0 ${color}`}
          style={{
            width: `${width}px`,
            height: borderHeight,
            opacity: activeOpacity,
            [position]: 0, // Dieser Wert bleibt fix 0
          }}
        />
      </div>
    );
  }

  // When using targetRef approach (legacy)
  return (
    <div
      className={`absolute top-0 bottom-0 ${className}`}
      style={{ [position]: offset }}
    >
      {/* Base line (always visible) */}
      <div
        className={`absolute top-0 bottom-0 ${color}`}
        style={{
          width: `${width}px`,
          opacity: baseOpacity,
          [position]: 0,
        }}
      />

      {/* Progress line */}
      <div
        className={`absolute top-0 ${color} transition-all duration-300 ease-out`}
        style={{
          width: `${width}px`,
          height: `${scrollProgress}%`,
          opacity: activeOpacity,
          [position]: 0,
        }}
      />
    </div>
  );
};

export default ScrollBorder;
