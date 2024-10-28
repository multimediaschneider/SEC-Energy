import React, { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BodySubHeading from "@/components/content/body-sub-heading";

interface ExpandableSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ExpandableSection({
  title,
  children,
  className = "",
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`mt-3 ${className}`}>
      <div className="flex justify-center items-center w-full px-4 sm:px-0 ">
        <div className="w-full p-3 sm:w-4/5 sm:p-6 bg-gray-50 shadow-lg shadow-zinc-400">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsExpanded(!isExpanded);
              }
            }}
          >
            <div className="pr-2">
              <BodySubHeading>{title}</BodySubHeading>
            </div>
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-700 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-700 flex-shrink-0" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 text-sm sm:text-base lg:text-lg font-light text-zinc-800">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
