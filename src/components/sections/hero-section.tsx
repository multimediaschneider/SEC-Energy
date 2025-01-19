"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/container";

interface TrustIndicators {
  emissions: string;
  projects: string;
  savings: string;
}

interface HeroImage {
  src: string;
  alt: string;
  credit: {
    name: string;
    url: string;
  };
}

const trustIndicators: TrustIndicators = {
  emissions: "25%",
  projects: "50+",
  savings: "30%",
};

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

  return (
    <section className="relative">
      <div className="relative w-full h-screen overflow-hidden">
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
          <div className="relative z-10 flex flex-col justify-center items-center h-screen">
            <div className="w-full lg:w-4/5 max-w-4xl mx-auto text-center px-4">
              <div className="border-b-4 border-emerald-700 mb-8">
                <motion.h1
                  initial={{ color: "#047857" }}
                  animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4"
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
                {Object.entries(trustIndicators).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <motion.span
                      initial={{ color: "#047857" }}
                      animate={{
                        color: isImageVisible ? "#ffffff" : "#047857",
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="block text-3xl md:text-5xl font-bold mb-2"
                    >
                      {value}
                    </motion.span>
                    <motion.span
                      initial={{ color: "#047857" }}
                      animate={{
                        color: isImageVisible ? "#ffffff" : "#047857",
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="text-sm sm:text-base"
                    >
                      {key === "emissions"
                        ? "Emissionseinsparung"
                        : key === "projects"
                          ? "Großprojekte"
                          : "Kosteneinsparung"}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
