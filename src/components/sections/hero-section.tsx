import { client } from "@/sanity/client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Dots from "../dots";

const allImages = [
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
];

async function getHeroData() {
  const query = `*[_type == "hero"][0]{
    title,
    subtitle
  }`;
  const data = await client.fetch(query);
  return data;
}

export default function DynamicHero() {
  const [heroData, setHeroData] = useState({ title: "", subtitle: "" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getHeroData();
      setHeroData(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
        setIsImageVisible(true);
      }, 2000); // This should match the exit animation duration
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen Image Container */}
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
                src={allImages[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
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
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        <div className="w-full px-4 md:w-4/5">
          <motion.h1
            initial={{ color: "#047857" }}
            animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="border-b-4 border-emerald-700 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center mb-4"
          >
            {heroData.title || "SEC Consulting GmbH"}
          </motion.h1>
          <motion.h2
            initial={{ color: "#047857" }}
            animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-center mb-4"
          >
            {heroData.subtitle || "Schneider Engineering Consulting"}
          </motion.h2>
        </div>

        {/* Dots position */}
        <div className="absolute bottom-8 left-auto">
          <Dots />
        </div>
      </div>
    </div>
  );
}
