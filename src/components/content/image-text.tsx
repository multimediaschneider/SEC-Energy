"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@headlessui/react";
import Image from "next/image";
import CustomButton from "../custom-button";

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

export default function ImageText({
  title,
  contentOne,
  contentTwo,
  imageSrc,
  imageAlt,
  buttonText,
  buttonAction = () => {},
  buttonClassName = "px-12 py-2 mt-4 text-xl font-normal text-zinc-800 bg-slate-100 rounded-sm hover:bg-white focus:outline-dashed focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-50",
}: ContactMeProps) {
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
    <div className="flex w-full justify-center">
      <div className="flex w-4/5 border-b-solid border-b py-24">
        <div
          ref={ref}
          className={`flex md:flex-row items-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 mr-12 md:mb-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={0}
              className="shadow-lg shadow-zinc-700"
            />
          </div>
          <div className="md:w-5/12 md:pl-12 p-12 m-12 bg-emerald-700 bg-opacity-20 shadow-lg shadow-zinc-400">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-700 mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-1xl lg:text-2xl font-extralight text-emerald-700 leading-relaxed mb-6">
              {contentOne}
            </p>
            <p className="text-xl md:text-1xl lg:text-2xl font-extralight text-emerald-700 leading-relaxed mb-6">
              {contentTwo}
            </p>
            <CustomButton name="Kontakt" href="/kontakt" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
