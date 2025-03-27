"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import NavbarButton from "../ui/navbar-button";
import Container from "../ui/container";
import Link from "next/link";

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

export default function ContactSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-emerald-50">
      <Container>
        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl shadow-xl bg-white"
        >
          {/* Top Section - Green Header with larger image and text */}
          <div className="bg-emerald-700 p-8 md:p-12 text-white">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-medium mb-8 text-center max-w-4xl">
                Innovative Energielösungen für Ihre Anforderungen
              </h2>
              <p className="text-xl md:text-2xl opacity-90 font-light mb-12 text-center max-w-3xl">
                Als unabhängiger Berater entwickeln wir maßgeschneiderte
                Lösungen, die sowohl wirtschaftlich als auch ökologisch
                nachhaltig sind.
              </p>

              {/* Interactive Slider without manual navigation arrows */}
              <div className="w-full max-w-4xl h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
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
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-700/30 to-transparent" />

                      {/* Content */}
                      <Link
                        href={slides[currentSlide].href}
                        className="absolute inset-0 flex flex-col justify-end items-center p-8 hover:bg-emerald-700/20 transition-colors group"
                      >
                        <div className="text-center mb-2">
                          <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                            {slides[currentSlide].title}
                          </h3>
                          <p className="text-lg text-white/90">
                            {slides[currentSlide].description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentSlide ? "bg-white" : "bg-white/50"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Centered contact info and button */}
          <div className="p-8 md:p-12 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl">
                {/* Dierk's info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  {/* Larger image */}
                  <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                    <div className="w-full h-full relative flex items-center justify-center">
                      {/* Background decorations using flexbox */}
                      <div className="w-full h-full rounded-full bg-emerald-100 absolute transform -rotate-6"></div>
                      <div className="w-full h-full rounded-full bg-emerald-50 absolute transform rotate-6"></div>
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg z-10 relative">
                        <Image
                          src="/dierk.jpg"
                          alt="Dipl.-Ing. Dierk Schneider"
                          fill
                          sizes="(max-width: 768px) 128px, 160px"
                          className="object-cover"
                          style={{ objectPosition: "50% 20%" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h4 className="text-2xl md:text-3xl font-semibold text-emerald-700">
                      Dipl.-Ing. Dierk Schneider
                    </h4>
                    <p className="text-xl text-emerald-700 mb-4">
                      Geschäftsführung
                    </p>
                    <div className="space-y-3">
                      <a
                        href="mailto:Dierk.Schneider@sec-energy.de"
                        className="flex items-center gap-3 text-gray-700 hover:text-emerald-700 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                          <Mail className="w-4 h-4 text-emerald-700" />
                        </div>
                        <span>Dierk.Schneider@sec-energy.de</span>
                      </a>
                      <a
                        href="tel:0511 - 169 91 162"
                        className="flex items-center gap-3 text-gray-700 hover:text-emerald-700 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                          <Phone className="w-4 h-4 text-emerald-700" />
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
                  className="md:ml-8"
                >
                  <NavbarButton
                    text="Kontakt"
                    href="/kontakt"
                    iconSize={24}
                    size="lg"
                    className="bg-emerald-700 text-white"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
