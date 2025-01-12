"use client";

import React, { useEffect, useState, useRef } from "react";

interface ScrollBorderProps {
  targetRef: React.RefObject<HTMLElement>; // Reference to the section we want to track
  position?: "left" | "right";
  baseOpacity?: number;
  activeOpacity?: number;
  width?: number;
  color?: string;
  className?: string;
}

const ScrollBorder = ({
  targetRef,
  position = "left",
  baseOpacity = 0.2,
  activeOpacity = 0.8,
  width = 4,
  color = "bg-emerald-700",
  className = "",
}: ScrollBorderProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

  if (!isVisible) return null;

  return (
    <div className={`absolute top-0 bottom-0 ${position}-0 ${className}`}>
      {/* Base line (always visible) */}
      <div
        className={`absolute ${position}-0 top-0 bottom-0 ${color}`}
        style={{
          width: `${width}px`,
          opacity: baseOpacity,
        }}
      />

      {/* Progress line */}
      <div
        className={`absolute ${position}-0 top-0 ${color} transition-all duration-300 ease-out`}
        style={{
          width: `${width}px`,
          height: `${scrollProgress}%`,
          opacity: activeOpacity,
        }}
      />
    </div>
  );
};

export default ScrollBorder;
