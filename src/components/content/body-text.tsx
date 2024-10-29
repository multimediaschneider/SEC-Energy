import React, { useEffect, useRef, useState, ReactNode } from "react";

interface BodyTextProps {
  children: ReactNode;
}

export default function BodyText({ children }: BodyTextProps) {
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
    <div className="flex justify-center w-full">
      <div className="w-11/12 sm:w-10/12 md:w-4/5 rounded-xl border-b-solid pb-8 sm:pb-12">
        <div className="flex">
          <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extralight text-primary">
              {children}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
