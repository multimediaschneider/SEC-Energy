"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/sanity/client";

interface HeroImage {
  src: string;
  alt: string;
}

interface TrustIndicators {
  emissions: string;
  projects: string;
  savings: string;
}

interface HeroData {
  title: string;
  subtitle: string;
  headline: string;
  subheadline: string;
  trustIndicators: TrustIndicators;
  images: HeroImage[];
}

const fallbackData: HeroData = {
  title: "SEC Consulting GmbH",
  subtitle: "Schneider Engineering Consulting",
  headline: "Nachhaltige Energielösungen durch Expertise im Contracting",
  subheadline:
    "20+ Jahre Erfahrung in der Entwicklung wirtschaftlicher Energiekonzepte",
  trustIndicators: {
    emissions: "25%",
    projects: "50+",
    savings: "30%",
  },
  images: [
    {
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
      alt: "Naturaufnahme mit Gewässer",
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      alt: "Berglandschaft im Sonnenlicht",
    },
    {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
      alt: "Dramatischer Himmel über Landschaft",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      alt: "Waldweg im Sonnenlicht",
    },
    {
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
      alt: "Sonnenuntergang über Wiese",
    },
  ],
};

export default function DynamicHero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const query = `*[_type == "hero"][0]{
          title,
          subtitle,
          headline,
          subheadline,
          trustIndicators,
          "images": images[]{
            "src": asset->url,
            alt
          }
        }`;
        const data = await client.fetch(query);
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
        setHeroData(fallbackData);
      }
    };

    fetchHeroData();
  }, []);

  useEffect(() => {
    const images = heroData?.images || fallbackData.images;

    const interval = setInterval(() => {
      setIsImageVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsImageVisible(true);
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroData]);

  const images = heroData?.images || fallbackData.images;
  const trustIndicators =
    heroData?.trustIndicators || fallbackData.trustIndicators;

  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Fullscreen Image Container */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {isImageVisible && images[currentIndex] && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* White background when no image is visible */}
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isImageVisible ? 0 : 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full ">
          <div className="w-full md:w-4/5 max-w-4xl mx-auto text-center ">
            <div className="border-b-4 border-emerald-700 mb-4">
              <motion.h1
                initial={{ color: "#047857" }}
                animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4"
              >
                {heroData?.headline || fallbackData.headline}
              </motion.h1>
            </div>
            <motion.h2
              initial={{ color: "#047857" }}
              animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8"
            >
              {heroData?.subheadline || fallbackData.subheadline}
            </motion.h2>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {Object.entries(trustIndicators).map(([key, value]) => (
                <div key={key} className="text-center">
                  <motion.span
                    initial={{ color: "#047857" }}
                    animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="block text-3xl md:text-5xl font-bold"
                  >
                    {value}
                  </motion.span>
                  <motion.span
                    initial={{ color: "#047857" }}
                    animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="text-md"
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
      </div>
    </section>
  );
}
