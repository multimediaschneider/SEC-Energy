// ImageSlider.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset index when images change
    setCurrentIndex(0);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images]); // Add images to dependency array

  // If no images provided, show placeholder
  if (!images || images.length === 0) {
    images = ["/api/placeholder/800/1200"];
  }

  return (
    <div className="w-full h-full rounded-sm overflow-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
