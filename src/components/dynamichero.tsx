import React, { useState, useEffect } from "react";
import Image from "next/image";
import Dots from "./dotsanimation";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  MotionValue,
  AnimatePresence,
} from "framer-motion";

const allImages = [
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
];

const calculatePosition = (progress: number, index: number, total: number) => {
  const angle = (progress + index / total) * Math.PI * 2;
  const x = Math.cos(angle) * 600;
  // Reduced y-axis movement to keep images more centered
  const y = Math.sin(angle) * 40;
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
    (latest) => calculatePosition(latest, index, 3).x
  );
  const y = useTransform(
    progress,
    (latest) => calculatePosition(latest, index, 3).y
  );

  const imageX = useTransform(x, (value) => -value * 0.15);
  const imageY = useTransform(y, (value) => -value * 0.1);

  const grayscale = useTransform(
    x,
    [-600, -500, -400, 400, 500, 600],
    [1, 1, 0, 0, 1, 1]
  );

  const zIndex = useTransform(y, (value) => {
    if (value < -20) return 10;
    if (value > 20) return 30;
    return 20;
  });

  return (
    <motion.div
      className="absolute w-96 h-96 rounded-sm overflow-hidden shadow-lg shadow-zinc-700"
      style={{
        x,
        y,
        zIndex,
      }}
    >
      <motion.div
        className="w-[200%] h-[200%] relative left-[-50%] top-[-50%]"
        style={{
          x: imageX,
          y: imageY,
          filter: useTransform(grayscale, (value) => `grayscale(${value})`),
        }}
      >
        <Image
          src={src}
          alt={`Nature ${index + 1}`}
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

export default function DynamicHero() {
  const progress = useMotionValue(0);
  const [activeImages, setActiveImages] = useState<string[]>([]);

  useAnimationFrame((time) => {
    const speed = 0.00001;
    progress.set((time * speed) % 1);
  });

  useEffect(() => {
    const updateImages = () => {
      setActiveImages((prevImages) => {
        const newImages = [...prevImages];
        const availableImages = allImages.filter(
          (img) => !prevImages.includes(img)
        );
        const indexToReplace = Math.floor(Math.random() * 3);
        const newImage =
          availableImages[Math.floor(Math.random() * availableImages.length)];
        newImages[indexToReplace] = newImage;
        return newImages;
      });
    };

    if (activeImages.length === 0) {
      const initialImages = [];
      const availableImages = [...allImages];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        initialImages.push(availableImages[randomIndex]);
        availableImages.splice(randomIndex, 1);
      }
      setActiveImages(initialImages);
    }

    const interval = setInterval(updateImages, 5000);

    return () => clearInterval(interval);
  }, [activeImages]);

  return (
    <div className="relative mt-4 min-h-screen w-full">
      {/* Moved title up slightly */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50 w-4/5">
        <h1 className="text-8xl font-bold text-emerald-700">
          SEC Energieconsulting
        </h1>
      </div>

      {/* Adjusted top spacing and container heights */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-4/5">
        <div className="absolute inset-0 border-t-4 border-l-4 border-r-4 border-emerald-700 border-opacity-90 rounded-t-sm z-40" />

        <div className="">
          <div className="absolute inset-0 bg-emerald-700 bg-opacity-10 rounded-sm z-10" />

          <div className="">
            <div className="p-4 z-40">
              <p className="text-5xl font-extralight text-emerald-700">
                Schneider Engineering Consulting
              </p>
            </div>

            {/* Increased height and adjusted padding for better vertical centering */}
            <div className="relative h-[70vh] bottom-60 right-56 flex items-center justify-center">
              <AnimatePresence initial={false}>
                {activeImages.map((image, index) => (
                  <motion.div
                    key={image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <ImageComponent
                      src={image}
                      index={index}
                      progress={progress}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 border-b-4 border-emerald-700 border-opacity-90 rounded-b-sm z-20" />

        <div className="absolute bottom-4 left-4 z-50">
          <Dots />
        </div>
      </div>
    </div>
  );
}
