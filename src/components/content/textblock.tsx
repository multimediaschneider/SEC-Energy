"use client";

import React, { useEffect, useRef, useState } from "react";
import CustomButton, { CustomButtonProps } from "../custom-button";

export interface TextBlockProps {
  contents: string[];
  buttonProps?: CustomButtonProps;
}

export default function TextBlock({ contents, buttonProps }: TextBlockProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    const currentRef = ref.current;
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
    <div className="flex-col mx-12 w-2/5 py-12">
      <div
        ref={ref}
        className={`bg-emerald-700 bg-opacity-20 flex flex-col items-center transition-all duration-1000 ease-out pt-6 p-4 shadow-md shadow-zinc-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex-grow overflow">
          {contents.map((content, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-3sxl font-extralight text-emerald-700">
                {content}
              </h2>
            </div>
          ))}
        </div>
        {buttonProps && (
          <div className="mt-4 flex justify-start">
            <CustomButton {...buttonProps} />
          </div>
        )}
      </div>
    </div>
  );
}
