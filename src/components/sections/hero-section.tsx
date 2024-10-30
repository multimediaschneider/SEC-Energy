import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Leaf, Calculator, Clock, LucideIcon } from "lucide-react";
import { client } from "@/sanity/client";

type IconName = "shield" | "leaf" | "calculator" | "clock";

interface IconComponentProps {
  name: IconName;
  className?: string;
}

const icons: Record<IconName, LucideIcon> = {
  shield: Shield,
  leaf: Leaf,
  calculator: Calculator,
  clock: Clock,
};

const IconComponent: React.FC<IconComponentProps> = ({ name, ...props }) => {
  const Icon = icons[name] || Shield;
  return <Icon {...props} />;
};

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroBenefit {
  icon: IconName;
  title: string;
  description: string;
}

interface HeroData {
  title: string;
  subtitle: string;
  images: HeroImage[];
  benefits?: HeroBenefit[];
}

// Fallback-Werte mit originalen Bildern
const fallbackData: HeroData = {
  title: "SEC Consulting GmbH",
  subtitle: "Schneider Engineering Consulting",
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

const fallbackBenefits: HeroBenefit[] = [
  {
    icon: "shield",
    title: "Keine Investitionskosten",
    description: "Modernste Technik ohne eigene Investition",
  },
  {
    icon: "calculator",
    title: "Garantierte Einsparung",
    description: "Transparente und planbare Betriebskosten",
  },
  {
    icon: "leaf",
    title: "Klimaschutz",
    description: "Effiziente und nachhaltige Energieversorgung",
  },
  {
    icon: "clock",
    title: "Full-Service",
    description: "Wartung und Betrieb inklusive",
  },
];

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
          "images": images[]{
            "src": asset->url,
            alt
          },
          benefits
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
  const benefits = heroData?.benefits || fallbackBenefits;

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
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
          <div className="w-full px-4 md:w-4/5">
            <motion.h1
              initial={{ color: "#047857" }}
              animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="border-b-4 border-emerald-700 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center mb-4"
            >
              {heroData?.title || fallbackData.title}
            </motion.h1>
            <motion.h2
              initial={{ color: "#047857" }}
              animate={{ color: isImageVisible ? "#ffffff" : "#047857" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-center mb-4"
            >
              {heroData?.subtitle || fallbackData.subtitle}
            </motion.h2>
          </div>

          {/* <div className="absolute bottom-8 left-auto">
            <Dots />
          </div> */}
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="relative -mt-24 z-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.5,
                }}
                className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-emerald-600 mb-4">
                    <IconComponent name={benefit.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
