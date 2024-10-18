"use client";

import React, { useState, useEffect } from "react";
import { Dot } from "lucide-react";

export default function Dots() {
  const [activeWindow, setActiveWindow] = useState<number[]>([]);
  const totalDots = 6;
  const windowSize = 3; // Number of dots lit at once
  const animationDuration = 120; // ms per step
  const pauseDuration = 2000; // 2 seconds pause

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
    return activeWindow.includes(index) ? "white" : "currentColor";
  };

  return (
    <div className="flex flex-col flex-grow items-center text-transparent pt-12">
      <div className="flex">
        <Dot
          className="transition-colors duration-140"
          color={getDotColor(0)}
        />
        <Dot className="transition-colors duration-90" color={getDotColor(1)} />
        <Dot className="transition-colors duration-80" color={getDotColor(2)} />
      </div>
      <div className="flex items-center">
        <Dot className="transition-colors duration-70" color={getDotColor(3)} />
        <Dot className="transition-colors duration-60" color={getDotColor(4)} />
      </div>
      <Dot className="transition-colors duration-40" color={getDotColor(5)} />
    </div>
  );
}
