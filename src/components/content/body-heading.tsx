"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface BodyHeadingProps {
  children: ReactNode;
}

export default function BodyHeading({ children }: BodyHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
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

  return (
    <div className="flex justify-center w-full pt-8 sm:pt-10 md:pt-12">
      <div className="flex flex-col w-11/12 sm:w-10/12 md:w-4/5 border-y-2 pt-3 md:pt-10 border-gray-400 mb-8 pb-2 sm:pb-8">
        <div className="">
          <div
            ref={ref}
            className={`max-w-2xl transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary">
              {children}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
