"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import CustomButton from "../custom-button";

interface TextLeftProps {
  children: ReactNode;
}

export default function TextLeft({ children }: TextLeftProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

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

  return (
    <div className="w-4/5 mx-auto my-8 pb-28">
      <div className="flex text-center justify-between flex-wrap">
        <div className="flex flex-row">
          <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-4 text-5xl font-extralight text-emerald-700">
              {children}
            </h2>
            <CustomButton name="Kontakt" href="/kontakt" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
