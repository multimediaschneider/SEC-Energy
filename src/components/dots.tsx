import React, { useState, useEffect } from "react";
import { Dot } from "lucide-react";

export default function Dots() {
  const [activeWindow, setActiveWindow] = useState<number[]>([]);
  const totalDots = 6;
  const windowSize = 6;
  const animationDuration = 90;
  const pauseDuration = 100;

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
    return activeWindow.includes(index) ? "text-white" : "text-emerald-600";
  };

  // Angepasste Dot-Größen
  const dotClasses =
    "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px]";

  return (
    <div className="flex flex-col items-center">
      {/* First Row */}
      <div className="flex">
        <Dot className={`transition-colors ${getDotColor(0)} ${dotClasses}`} />
        <Dot className={`transition-colors ${getDotColor(1)} ${dotClasses}`} />
        <Dot className={`transition-colors ${getDotColor(2)} ${dotClasses}`} />
      </div>

      {/* Second Row - Center two dots */}
      <div className="flex justify-center">
        <Dot className={`transition-colors ${getDotColor(3)} ${dotClasses}`} />
        <Dot className={`transition-colors ${getDotColor(4)} ${dotClasses}`} />
      </div>

      {/* Third Row - Center the last dot */}
      <div className="flex justify-center">
        <Dot className={`transition-colors ${getDotColor(5)} ${dotClasses}`} />
      </div>
    </div>
  );
}
