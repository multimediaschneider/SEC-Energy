"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@headlessui/react";
import Image from "next/image";

interface ContactMeProps {
  title: string;
  contentOne: string;
  contentTwo: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonAction?: () => void;
  buttonClassName?: string;
}

export default function ContactMe({
  title,
  contentOne,
  contentTwo,
  imageSrc,
  imageAlt,
  buttonText,
  buttonAction = () => {},
  buttonClassName = "px-12 py-2 text-xl font-normal text-zinc-800 bg-slate-100 rounded-sm hover:bg-white focus:outline-dashed focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-50",
}: ContactMeProps) {
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
    <div className="w-full min-h-screen py-48">
      <div className="">
        <div
          ref={ref}
          className={`flex flex-row md:flex-row items-center justify-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={300}
              className="rounded-lg shadow-xl mb-6 md:mb-0 md:mr-6"
            />
          </div>
          <div className="max-w-xl md:pl-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-8">
              {title}
            </h1>
            <p className="text-xl md:text-1xl lg:text-2xl font-extralight text-white leading-relaxed mb-6">
              {contentOne}
            </p>
            <p className="text-xl md:text-1xl lg:text-2xl font-extralight text-white leading-relaxed mb-6">
              {contentTwo}
            </p>
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
