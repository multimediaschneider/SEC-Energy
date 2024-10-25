import React, { useEffect, useRef, useState, ReactNode } from "react";

interface BodyTextProps {
  children: ReactNode;
}

export default function BodyText({ children }: BodyTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Neuer Zustand, um zu merken, ob die Animation bereits abgespielt wurde
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Setze den Zustand auf true, sobald die Animation einmal ausgelöst wurde
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
  }, [hasAnimated]); // Abhängigkeit auf hasAnimated hinzugefügt

  return (
    <div className="flex justify-center w-full">
      <div className="w-4/5 rounded-xl border-b-solid border-b pb-12">
        <div className="flex">
          <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl font-extralight text-emerald-700">
              {children}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
