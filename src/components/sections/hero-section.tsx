"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "../ui/container";
import { cn } from "@/lib/utils";
import CustomButton from "../ui/custom-button";
import { scrollToElement } from "@/lib/utils";

interface TrustIndicator {
  value: string;
  label: string;
}

interface HeroImage {
  src: string;
  alt: string;
  credit: {
    name: string;
    url: string;
  };
}

const trustIndicators: TrustIndicator[] = [
  { value: "25%", label: "Emissionseinsparung" },
  { value: "50+", label: "Großprojekte" },
  { value: "30%", label: "Kosteneinsparung" },
];

const heroImages: HeroImage[] = [
  {
    src: "/wind-energy-sunset.webp",
    alt: "Windenergie bei Sonnenuntergang",
    credit: {
      name: "Photographer Name",
      url: "https://unsplash.com/photos/xxx",
    },
  },
  {
    src: "/street-rocks.webp",
    alt: "Straße durch Felslandschaft",
    credit: {
      name: "Photographer Name",
      url: "https://unsplash.com/photos/xxx",
    },
  },
  {
    src: "/green-hills.webp",
    alt: "Grüne Hügellandschaft",
    credit: {
      name: "Photographer Name",
      url: "https://unsplash.com/photos/xxx",
    },
  },
  {
    src: "/forest-path.webp",
    alt: "Waldweg im Sonnenlicht",
    credit: {
      name: "Photographer Name",
      url: "https://unsplash.com/photos/xxx",
    },
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        setIsImageVisible(true);
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    const expertiseSection = document.getElementById("expertise-section");
    if (expertiseSection) {
      const targetPosition = expertiseSection.offsetTop - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-0">{/* Hero has no padding by design */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Image Container */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {isImageVisible && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentIndex].src}
                  alt={heroImages[currentIndex].alt}
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="100vw"
                  priority={currentIndex === 0}
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Image credit */}
                <div className="absolute bottom-2 right-2 text-xs text-white/70">
                  <a
                    href={heroImages[currentIndex].credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Photo by {heroImages[currentIndex].credit.name} on Unsplash
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* White background for transitions */}
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isImageVisible ? 0 : 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Content */}
        <Container>
          <div className="relative z-10 flex flex-col justify-center items-center min-h-screen pt-24 pb-16">
            <div className="w-full lg:w-4/5 max-w-4xl mx-auto text-center px-4">
              <div className="border-b-4 border-primary-700 mb-8">
                <motion.h1
                  initial={{ color: "#047857" }}
                  animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 font-light"
                >
                  Nachhaltige Energielösungen durch Expertise im Contracting
                </motion.h1>
              </div>

              <motion.h2
                initial={{ color: "#047857" }}
                animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-12"
              >
                20+ Jahre Erfahrung in der Entwicklung wirtschaftlicher
                Energiekonzepte
              </motion.h2>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="text-center">
                    <motion.span
                      initial={{ color: "#047857" }}
                      animate={{
                        color: isImageVisible ? "#ffffff" : "#047857",
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="block text-3xl md:text-5xl font-bold mb-2"
                    >
                      {indicator.value}
                    </motion.span>
                    <motion.span
                      initial={{ color: "#047857" }}
                      animate={{
                        color: isImageVisible ? "#ffffff" : "#047857",
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="text-sm sm:text-base"
                    >
                      {indicator.label}
                    </motion.span>
                  </div>
                ))}
              </div>

              {/* Scroll indicator */}
              <motion.button
                onClick={handleScrollDown}
                className="mt-12 inline-flex flex-col items-center justify-center cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <motion.span
                  initial={{ color: "#047857" }}
                  animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="text-sm mb-2"
                >
                  Mehr entdecken
                </motion.span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <ChevronDown
                    className={cn(
                      "w-8 h-8 transition-colors duration-1000",
                      isImageVisible ? "text-white" : "text-primary-700"
                    )}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
