import React, { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BodySubHeading from "@/components/body-sub-heading";

interface ExpandableSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ExpandableSection = ({
  title,
  children,
  className = "",
}: ExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`mt-4 ${className}`}>
      <div className="flex justify-center">
        <div className="w-4/5 p-6 rounded-sm bg-gray-50 shadow-lg shadow-zinc-300">
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
            <div className="">
              <BodySubHeading>{title}</BodySubHeading>
            </div>
            {isExpanded ? (
              <ChevronUp className="w-8 h-8 text-emerald-700 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-8 h-8 text-emerald-700 flex-shrink-0" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableSection;
