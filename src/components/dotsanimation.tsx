"use client";

import React, { useState, useEffect } from "react";
import { Dot } from "lucide-react";

export default function Dots() {
  const [activeWindow, setActiveWindow] = useState<number[]>([]);
  const totalDots = 6;
  const windowSize = 6; // Number of dots lit at once
  const animationDuration = 90; // Reduced ms per step for faster animation
  const pauseDuration = 100; // 2 seconds pause

  useEffect(() => {
    const animateDots = () => {
      let currentStep = -windowSize;
      const interval = setInterval(() => {
        currentStep++;
        if (currentStep > totalDots) {
          clearInterval(interval);
          setActiveWindow([]);
          setTimeout(animateDots, pauseDuration);
        } else {
          setActiveWindow(
            Array.from(
              { length: windowSize },
              (_, i) => currentStep + i
            ).filter((index) => index >= 0 && index < totalDots)
          );
        }
      }, animationDuration);
    };

    animateDots();

    return () => {
      setActiveWindow([]);
    };
  }, []);

  const getDotColor = (index: number) => {
    return activeWindow.includes(index) ? "text-white" : "text-emerald-600"; // Set color based on state
  };

  const dotSize = 35; // Change this to any size you want (in pixels)

  return (
    <div className="flex flex-col items-center">
      {/* First Row */}
      <div className="flex">
        <Dot size={dotSize} className={`transition-colors ${getDotColor(0)}`} />
        <Dot size={dotSize} className={`transition-colors ${getDotColor(1)}`} />
        <Dot size={dotSize} className={`transition-colors ${getDotColor(2)}`} />
      </div>

      {/* Second Row - Center two dots */}
      <div className="flex justify-center">
        <Dot size={dotSize} className={`transition-colors ${getDotColor(3)}`} />
        <Dot size={dotSize} className={`transition-colors ${getDotColor(4)}`} />
      </div>

      {/* Third Row - Center the last dot */}
      <div className="flex justify-center">
        <Dot size={dotSize} className={`transition-colors ${getDotColor(5)}`} />
      </div>
    </div>
  );
}
