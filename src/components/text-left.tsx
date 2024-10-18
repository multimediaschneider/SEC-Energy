"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface TextLeftProps {
  children: ReactNode;
}

export default function TextLeft({ children }: TextLeftProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px",
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
  }, []);

  return (
    <div className="flex justify-center w-full pt-24 pb-24">
      <div className="w-4/5 rounded-xl">
        <div className="flex">
          <div
            ref={ref}
            className={`max-w-2xl transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="m-6 text-5xl font-extralight text-white">
              {children}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
