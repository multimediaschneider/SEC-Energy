// ContentBlock.tsx
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../../custom-button";

interface ContentBlockProps {
  contents: string[];
  buttonProps: {
    name: string;
    href: string;
    onClick: () => void;
  };
}

export default function ContentBlock({
  contents,
  buttonProps,
}: ContentBlockProps) {
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

  const getAnimationClass = (index: number) => {
    const baseClasses = "transition-all duration-1000 ease-out";
    const visibilityClasses = isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";
    const delay = `delay-[${index * 100}ms]`;

    return `${baseClasses} ${visibilityClasses} ${delay}`;
  };

  return (
    <div ref={ref} className="w-full lg:w-[50%]">
      <div className="h-full bg-emerald-700 bg-opacity-20 flex flex-col items-start p-2 sm:p-6 md:p-8 shadow-md shadow-zinc-400">
        <div className="flex-grow space-y-3 sm:space-y-4 w-full">
          {contents.map((content, index) => (
            <div key={index} className={getAnimationClass(index)}>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extralight text-emerald-700">
                {content}
              </h3>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-start">
          <CustomButton
            name={buttonProps.name}
            href={buttonProps.href}
            onClick={buttonProps.onClick}
            className={`mt-4 sm:mt-6 ${getAnimationClass(contents.length)}`}
          />
        </div>
      </div>
    </div>
  );
}
