"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import { Button } from "@headlessui/react";

interface TextRightSmallProps {
  contents: string[];
  buttonText?: string;
  buttonAction?: () => void;
  buttonClassName?: string;
}

export default function TextRightSmall({
  contents,
  buttonText = "Leistungen",
  buttonAction = () => {},
  buttonClassName = "px-12 py-2 mt-4 text-xl font-normal text-zinc-800 bg-slate-100 rounded-sm hover:bg-white focus:outline-dashed focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-50",
}: TextRightSmallProps) {
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
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-end p-6 w-4/5">
        <div className="flex flex-col items-start pt-4">
          <div
            ref={ref}
            className={`transition-all duration-1000 ease-out pt-6 border-t pb-6 border-b ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {contents.map((content, index) => (
              <div key={index} className="max-w-2xl">
                <h2 className="text-3xl font-extralight text-white">
                  {content}
                </h2>
              </div>
            ))}
            <Button
              as="button"
              className={buttonClassName}
              onClick={buttonAction}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
