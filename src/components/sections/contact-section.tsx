"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Container from "../ui/container";
import Link from "next/link";
import CustomButton from "../ui/custom-button";

// Slider data
const slides = [
  {
    title: "Über SEC",
    description: "Erfahren Sie mehr über unsere Expertise und Werte",
    image: "/consulting.jpg",
    href: "/about",
  },
  {
    title: "Leistungen",
    description: "Entdecken Sie unser Angebot an Energielösungen",
    image: "/pipes.jpg",
    href: "/leistungen",
  },
  {
    title: "Projekte",
    description: "Sehen Sie unsere erfolgreich umgesetzten Projekte",
    image: "/thermostat.jpg",
    href: "/projekte",
  },
];

interface ContactSectionProps {
  currentPage?: string;
}

export default function ContactSection({ currentPage }: ContactSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter out the current page from slides if specified
  const filteredSlides = currentPage
    ? slides.filter((slide) => !slide.href.includes(currentPage))
    : slides;

  // Auto-rotate slides
  useEffect(() => {
    if (filteredSlides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredSlides.length]);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary-50">
      <Container>
        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl shadow-lg bg-white"
        >
          {/* Top Section - Green Header with larger image and text */}
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 p-8 md:p-12 text-white">
            {/* Animated blur circles */}
            <div className="absolute inset-0">
              <div className="blur-container">
                <div className="blur-circle blur-circle-1" />
                <div className="blur-circle blur-circle-2" />
                <div className="blur-circle blur-circle-3" />
                <div className="blur-circle blur-circle-4" />
              </div>
            </div>

            {/* White noise overlay for texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
              <div className="noise-texture" />
            </div>

            <div className="flex flex-col items-center relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-center max-w-4xl">
                Innovative Energielösungen für Ihre Anforderungen
              </h2>
              <p className="text-lg md:text-xl opacity-90 font-light mb-8 text-center max-w-3xl">
                Als unabhängiger Berater entwickeln wir maßgeschneiderte
                Lösungen, die sowohl wirtschaftlich als auch ökologisch
                nachhaltig sind.
              </p>

              {/* Interactive Slider without manual navigation arrows */}
              {filteredSlides.length > 0 && (
                <div className="w-full max-w-4xl h-64 md:h-80 rounded-lg overflow-hidden">
                  {/* Slide Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      {/* Image */}
                      <div className="w-full h-full relative">
                        <Image
                          src={filteredSlides[currentSlide].image}
                          alt={filteredSlides[currentSlide].title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-700/30 to-transparent" />

                        {/* Content */}
                        <Link
                          href={filteredSlides[currentSlide].href}
                          className="absolute inset-0 flex flex-col justify-end items-center p-8 hover:bg-primary-700/20 transition-colors group"
                        >
                          <div className="text-center mb-2">
                            <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                              {filteredSlides[currentSlide].title}
                            </h3>
                            <p className="text-lg text-white/90">
                              {filteredSlides[currentSlide].description}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Slide Indicators */}
                  {filteredSlides.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {filteredSlides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full ${
                            index === currentSlide ? "bg-white" : "bg-white/50"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Section - Contact info and button */}
          <div className="p-8 md:p-12 bg-white">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* Contact info container - Improved layout for mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
              >
                {/* Dierk's photo */}
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <div className="w-full h-full relative flex items-center justify-center">
                    {/* Background decorations */}
                    <div className="w-full h-full rounded-full bg-primary-100 absolute transform -rotate-6"></div>
                    <div className="w-full h-full rounded-full bg-primary-50 absolute transform rotate-6"></div>
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md z-10 relative">
                      <Image
                        src="/dierk.jpg"
                        alt="Dipl.-Ing. Dierk Schneider"
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-cover"
                        style={{ objectPosition: "50% 20%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Contact info - Left-aligned on all devices */}
                <div className="text-left w-full">
                  <h4 className="text-xl md:text-2xl font-semibold text-primary-700">
                    Dipl.-Ing. Dierk Schneider
                  </h4>
                  <p className="text-lg text-primary-700 mb-4">
                    Geschäftsführung
                  </p>
                  <div className="space-y-3">
                    <a
                      href="mailto:Dierk.Schneider@sec-energy.de"
                      className="flex items-center gap-3 text-gray-700 hover:text-primary-700 transition-colors group truncate"
                    >
                      <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors flex-shrink-0">
                        <Mail className="w-4 h-4 text-primary-700" />
                      </div>
                      <span className="truncate">
                        Dierk.Schneider@sec-energy.de
                      </span>
                    </a>
                    <a
                      href="tel:0511 - 169 91 162"
                      className="flex items-center gap-3 text-gray-700 hover:text-primary-700 transition-colors group"
                    >
                      <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors flex-shrink-0">
                        <Phone className="w-4 h-4 text-primary-700" />
                      </div>
                      <span>0511 - 169 91 162</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 md:mt-0 lg:ml-8"
              >
                <CustomButton
                  text="Kontakt aufnehmen"
                  href="/kontakt"
                  iconSize={20}
                  size="lg"
                  variant="gradient"
                  className="whitespace-nowrap"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
