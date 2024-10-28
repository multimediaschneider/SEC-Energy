"use client";

import React, { useState } from "react";
import CustomButton from "../../custom-button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TextComponentProps {
  title: string;
  contentOne: string;
  contentTwo: string;
  buttonText: string;
  buttonAction?: () => void;
  buttonClassName?: string;
  className?: string;
}

export function TextComponent({
  title,
  contentOne,
  contentTwo,
  buttonText,
  buttonAction = () => {},
  buttonClassName = "",
  className = "",
}: TextComponentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const splitText = (text: string) => {
    const splitPoint = "Erfahrung in der Energiebranche.";
    const index = text.indexOf(splitPoint);
    if (index === -1) return [text, ""];

    return [
      text.slice(0, index + splitPoint.length),
      text.slice(index + splitPoint.length),
    ];
  };

  const [firstPart, secondPart] = splitText(contentOne);

  return (
    <div
      className={`w-full md:w-1/2 p-6 sm:p-8 md:p-6 bg-emerald-700 bg-opacity-20 ${className} relative`}
    >
      {title && (
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-700 mb-4">
          {title}
        </h1>
      )}
      <div className="text-lg sm:text-xl md:text-1xl lg:text-2xl font-extralight text-emerald-700 leading-relaxed pb-20 md:pb-0">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold pb-3">
          {firstPart}
        </p>
        <div
          className={`md:block ${
            isExpanded ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <p className="mt-4">{secondPart}</p>
          {contentTwo && <p className="mt-4">{contentTwo}</p>}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-emerald-700 mt-4 md:hidden"
        >
          {isExpanded ? (
            <>
              <span>Weniger anzeigen</span>
              <ChevronUp size={20} />
            </>
          ) : (
            <>
              <span>Weiterlesen</span>
              <ChevronDown size={20} />
            </>
          )}
        </button>
      </div>

      {/* Button for mobile view */}
      <div className="md:hidden absolute bottom-6 left-6 right-6">
        <CustomButton name="Kontakt" href="#kontakt" className="w-full" />
      </div>

      {/* Button for larger screens */}
      <div className={`mt-6 ${!isExpanded && "md:block hidden"}`}>
        <CustomButton name="Kontakt" href="#kontakt" />
      </div>
    </div>
  );
}
