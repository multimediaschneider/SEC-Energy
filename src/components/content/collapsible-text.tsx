import React, { useEffect, useRef, useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleTextProps {
  children: ReactNode;
  collapsibleContent: ReactNode;
}

export default function CollapsibleText({
  children,
  collapsibleContent,
}: CollapsibleTextProps): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.0,
        rootMargin: "0% 0px",
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const toggleOpen = (): void => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center items-center w-full px-2 sm:px-0">
      <div className="w-full sm:w-4/5 rounded-sm m-2 p-3 sm:p-6 bg-gray-50 shadow-lg shadow-zinc-400">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleOpen}
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-emerald-700 pr-2">
              {children}
            </h2>
            {isOpen ? (
              <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-700 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-700 flex-shrink-0" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-4 pt-4 pr-6 text-sm sm:text-base lg:text-lg font-light text-zinc-800">
              {collapsibleContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
