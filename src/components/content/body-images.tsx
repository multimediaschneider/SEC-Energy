import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
}

interface BodyImagesProps {
  images: ImageData[];
}

export default function BodyImages({ images }: BodyImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12 sm:w-10/12 md:w-4/5 rounded-sm pb-8 sm:pb-12">
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-sm shadow-lg shadow-zinc-500">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className={`absolute top-0 left-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
