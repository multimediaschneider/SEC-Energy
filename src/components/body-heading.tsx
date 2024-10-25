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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="flex justify-center w-full pt-12">
      <div className="w-4/5 rounded-xl border-b-solid border-b pb-8">
        <div className="flex">
          <div
            ref={ref}
            className={`max-w-2xl transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold text-emerald-700">{children}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
