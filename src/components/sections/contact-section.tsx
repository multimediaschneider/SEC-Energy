"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export default function ContactSection() {
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
        threshold: 0.0,
        rootMargin: "0% 0px",
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
    <div className="flex justify-center w-full bg-gray-200">
      <div className="w-11/12 sm:w-10/12 md:w-4/5">
        <Card
          ref={ref}
          className={`p-6 sm:p-8 lg:p-12 my-24 bg-emerald-700 bg-opacity-25 shadow-lg transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12">
            <div className="flex flex-col justify-center lg:w-1/2">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-2">
                  Kontakt
                </CardTitle>
                <CardDescription className="text-xl sm:text-2xl font-light text-emerald-700">
                  SEC Consulting GmbH
                </CardDescription>
              </CardHeader>
              <CardContent className="text-emerald-700 text-base sm:text-lg p-0">
                <p className="pb-4 text-lg sm:text-xl font-bold">
                  Dipl.-Ing. Dierk Schneider
                </p>
                <p className="pb-2">
                  <span className="font-bold">Anschrift:</span> Schierholzstraße
                  25, 30655 Hannover
                </p>
                <p className="pb-2">
                  <span className="font-bold">Tel.:</span> 0511 2701 2975
                </p>
                <p className="pb-2">
                  <span className="font-bold">Mobil:</span> 0176 55 90 2341
                </p>
                <p className="pb-2">
                  <span className="font-bold">E-Mail:</span>{" "}
                  Dierk.Schneider@sec-energy.de
                </p>
              </CardContent>
            </div>
            <div className="lg:w-1/2 lg:border-l lg:border-emerald-700 lg:border-opacity-20 lg:pl-12">
              <CardContent className="p-0">
                <ContactForm />
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
