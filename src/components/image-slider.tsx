"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
];

const calculatePosition = (progress: number, index: number, total: number) => {
  const angle = (progress + index / total) * Math.PI * 2;
  const x = Math.cos(angle) * 400;
  const y = Math.sin(angle) * 70; // Reduced y-axis movement for oval shape
  return { x, y };
};

interface ImageProps {
  src: string;
  index: number;
  progress: MotionValue<number>;
}

const ImageComponent: React.FC<ImageProps> = ({ src, index, progress }) => {
  const x = useTransform(
    progress,
    (latest) => calculatePosition(latest, index, images.length).x
  );
  const y = useTransform(
    progress,
    (latest) => calculatePosition(latest, index, images.length).y
  );

  // Adjusted parallax effect
  const imageX = useTransform(x, (value) => -value * 0.15);
  const imageY = useTransform(y, (value) => -value * 0.15);

  return (
    <motion.div
      className="absolute w-3/12 h-4/6 rounded-sm overflow-hidden shadow-lg shadow-zinc-700"
      style={{ x, y }}
    >
      <motion.div
        className="w-[200%] h-[200%] relative left-[-50%] top-[-50%]"
        style={{ x: imageX, y: imageY }}
      >
        <Image
          src={src}
          alt={`Sustainable nature ${index + 1}`}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default function FullCoverageParallaxOvalImageSlider() {
  const progress = useMotionValue(0);
  const animationRef = useRef(0);

  useAnimationFrame((time) => {
    const speed = 0.00001; // Adjust this value to change the rotation speed
    progress.set((time * speed) % 1);
  });

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/5 m-24 p-4 bg-emerald-700 bg-opacity-20 border-emerald-700 border-opacity-90 border-4 rounded-sm shadow-border shadow-lg">
        <div className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {images.map((image, index) => (
              <ImageComponent
                key={image}
                src={image}
                index={index}
                progress={progress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
