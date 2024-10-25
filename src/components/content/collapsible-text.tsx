"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleTextLeftProps {
  children: ReactNode;
  collapsibleContent: ReactNode;
}

export default function CollapsibleText({
  children,
  collapsibleContent,
}: CollapsibleTextLeftProps): JSX.Element {
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
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  const toggleOpen = (): void => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/5 m-2 p-6  bg-gray-50 shadow-lg shadow-zinc-400">
        <div className="">
          <div
            ref={ref}
            className={`transition- duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={toggleOpen}
            >
              <div className="">
                <h2 className="text-2xl font-bold text-emerald-700">
                  {children}
                </h2>
              </div>
              {isOpen ? (
                <ChevronUp className="w-8 h-8 text-emerald-700" />
              ) : (
                <ChevronDown className="w-8 h-8 text-emerald-700" />
              )}
            </div>
            <div
              className={`overflow-hidden duration-300 ease-in-out ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-6 pt-4 text-lg font-light text-zinc-800">
                {collapsibleContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
