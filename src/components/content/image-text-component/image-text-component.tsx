import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TextComponent } from "./text-component";

interface ImageTextProps {
  title: string;
  contentOne: string;
  contentTwo: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonAction?: () => void;
  buttonClassName?: string;
}

export default function ImageText({
  title,
  contentOne,
  contentTwo,
  imageSrc,
  imageAlt,
  buttonText,
  buttonAction = () => {},
  buttonClassName = "",
}: ImageTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    const observedElement = ref.current;
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );
    if (observedElement) {
      observer.observe(observedElement);
    }
    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="flex justify-center w-full pt-6">
      <div className="w-11/12 sm:w-10/12 md:w-4/5 rounded-xl border-b-solid border-b pb-8 sm:pb-12">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-full lg:w-1/3 max-w-md mx-auto lg:max-w-[400px] relative overflow-hidden shadow-md shadow-zinc-400">
            <div className="aspect-[3/5] relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300  hover:scale-105"
              />
            </div>
          </div>
          <TextComponent
            title={title}
            contentOne={contentOne}
            contentTwo={contentTwo}
            buttonText={buttonText}
            buttonAction={buttonAction}
            buttonClassName={buttonClassName}
            className="w-full lg:w-2/3 md:w-full bg-emerald-700 shadow-md shadow-zinc-400 p-6 sm:p-8"
          />
        </div>
      </div>
    </div>
  );
}
