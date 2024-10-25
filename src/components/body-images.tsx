import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  src: string;
  alt: string;
}

interface BodyImagesProps {
  images: ImageData[];
}

export default function BodyImages({ images }: BodyImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const refs = useRef<HTMLDivElement[]>([]);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      autoSlideInterval.current = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    } else {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    }
    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setVisibleIndices((prevVisible) => [...prevVisible, index]);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0% 0px",
        }
      );
      refs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
      return () => {
        refs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      };
    }
  }, [isMobile]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (isMobile) {
    return (
      <div className="relative w-4/5 mx-auto h-56 my-8">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-sm ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-4/5 mx-auto my-8">
      <div className="flex justify-between flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) refs.current[index] = el;
            }}
            className={`w-96 aspect-video my-6 bg-gray-200 overflow-hidden shadow-lg shadow-zinc-500 transition-all duration-1000 ease-out transform ${
              visibleIndices.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
