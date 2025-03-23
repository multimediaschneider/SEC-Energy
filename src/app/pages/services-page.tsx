"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { client } from "@/sanity/client";
import {
  Building2,
  Lightbulb,
  Wrench,
  FileText,
  Bot,
  Scale,
  Leaf,
  Network,
  ChevronDown,
  LucideIcon,
  ArrowRight,
} from "lucide-react";
import { fallbackData } from "../constants/data/services-fallback-data";
import { Card, CardContent } from "@/components/ui/card";
import ContactSection from "@/components/sections/contact-section";
import CustomButton from "@/components/ui/custom-button";
import Container from "@/components/ui/container";

interface ServiceArea {
  title: string;
  description: string;
  bulletPoints: string[];
  icon: string;
}

interface ServiceCategory {
  shortTitle: string;
  title: string;
  description: string;
  areas: ServiceArea[];
  images: string[];
}

interface ServicesPageData {
  headline: string;
  introduction: string;
  categories: ServiceCategory[];
  metaTitle: string;
  metaDescription: string;
}

const icons: Record<string, LucideIcon> = {
  building: Building2,
  lightbulb: Lightbulb,
  wrench: Wrench,
  file: FileText,
  bot: Bot,
  scale: Scale,
  leaf: Leaf,
  network: Network,
};

export default function ServicesPage() {
  const [servicesData, setServicesData] = useState<ServicesPageData | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navbarHeight = 93; // Adjust this value based on your navbar height

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const query = `*[_type == "services"][0]{
          headline,
          introduction,
          metaTitle,
          metaDescription,
          categories[]{
            shortTitle,
            title,
            description,
            images,
            areas[]{
              title,
              description,
              icon,
              bulletPoints
            }
          }
        }`;
        const data = await client.fetch(query);
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching services data:", error);
        setServicesData(fallbackData);
      }
    };

    fetchServicesData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current && heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        const shouldStick = heroBottom <= navbarHeight;
        setIsSticky(shouldStick);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fixed: Proper ref callback with useCallback
  const setSectionRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      sectionRefs.current[index] = el;
    },
    []
  );

  // Scroll to section when category is clicked
  const scrollToSection = (index: number) => {
    setActiveCategory(index);
    if (sectionRefs.current[index]) {
      const yOffset = -navbarHeight - 60; // Additional offset for sticky navigation
      const element = sectionRefs.current[index];
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const data = servicesData || fallbackData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Full screen height */}
      <section
        ref={heroRef}
        className="relative overflow-hidden h-screen flex items-center"
      >
        {/* Base gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800"
          style={{
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
          }}
        />

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

        <Container>
          <div className="text-center text-emerald-50 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-light mb-8 drop-shadow-lg"
            >
              {data.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-light max-w-3xl mx-auto px-4 drop-shadow-lg"
            >
              {data.introduction}
            </motion.p>

            {/* Added CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <CustomButton
                text="Beratungsgespräch anfordern"
                href="/kontakt"
                iconSize={24}
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50"
              />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-10 h-10 text-white" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Categories Navigation */}
      <div className="relative bg-white">
        <div
          ref={navRef}
          style={{
            position: isSticky ? "fixed" : "relative",
            top: isSticky ? `${navbarHeight}px` : "auto",
            left: 0,
            right: 0,
            zIndex: 40,
          }}
          className="bg-white shadow-md transition-all duration-300"
        >
          <Container>
            <div className="flex overflow-x-auto gap-4 py-6 no-scrollbar">
              {data.categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`px-6 py-3 rounded-md whitespace-nowrap transition-all flex-shrink-0 font-medium ${
                    activeCategory === index
                      ? "bg-emerald-700 text-white shadow-md"
                      : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                  }`}
                >
                  {category.shortTitle}
                </button>
              ))}
            </div>
          </Container>
        </div>
        {/* Placeholder div to prevent content jump */}
        {isSticky && (
          <div
            style={{ height: navRef.current ? navRef.current.offsetHeight : 0 }}
          />
        )}
      </div>

      {/* Main Content */}
      <main className="py-12">
        {data.categories.map((category, catIndex) => (
          <section
            key={catIndex}
            id={`category-${catIndex}`}
            // Fixed: Proper ref assignment using callback with type assertion
            ref={(el) => setSectionRef(el as HTMLDivElement | null, catIndex)}
            className={`py-16 ${catIndex % 2 === 0 ? "bg-white" : "bg-emerald-700 bg-opacity-5"}`}
          >
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                {/* Category Header with Image Background */}
                <div className="mt-8 relative h-64 md:h-72 rounded-xl overflow-hidden shadow-lg mb-10">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/70 to-emerald-700/30 z-10" />

                  {/* Background image */}
                  <Image
                    src={
                      category.images && category.images.length > 0
                        ? category.images[0]
                        : "/consulting.jpg"
                    } // Fallback image
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />

                  {/* Content overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                    <div className="text-white text-center p-6">
                      {/* Icon in circle */}
                      <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto">
                        {category.areas[0]?.icon &&
                          icons[category.areas[0].icon] &&
                          React.createElement(icons[category.areas[0].icon], {
                            className: "w-10 h-10 text-white",
                          })}
                      </div>

                      <h2 className="text-4xl font-light text-white mb-6 max-w-3xl drop-shadow-lg">
                        {category.title}
                      </h2>

                      <p className="text-xl font-light text-white/90 max-w-3xl drop-shadow-lg">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service areas grid with large cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  {category.areas.map((area, areaIndex) => {
                    const IconComponent = icons[area.icon];
                    return (
                      <motion.div
                        key={areaIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: areaIndex * 0.1 }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1"
                      >
                        <div className="p-8">
                          <div className="flex items-center gap-4 mb-5">
                            <div className="bg-emerald-100 p-3 rounded-full">
                              {IconComponent &&
                                React.createElement(IconComponent, {
                                  className: "w-6 h-6 text-emerald-600",
                                })}
                            </div>
                            <h3 className="text-2xl font-medium text-emerald-700">
                              {area.title}
                            </h3>
                          </div>

                          <p className="text-lg text-gray-600 mb-6">
                            {area.description}
                          </p>

                          <div className="border-t border-gray-100 pt-6">
                            <h4 className="text-lg font-medium text-emerald-700 mb-4">
                              Leistungen
                            </h4>
                            <ul className="space-y-3">
                              {area.bulletPoints.map((point, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-gray-700"
                                >
                                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Benefits section after each category */}
              {catIndex < data.categories.length - 1 && (
                <div className="border-t border-emerald-100 pt-16">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                      <div className="mx-auto h-16 w-16 rounded-full bg-emerald-700 bg-opacity-10 flex items-center justify-center mb-4">
                        <Scale className="w-8 h-8 text-emerald-700" />
                      </div>
                      <h4 className="text-xl font-medium text-emerald-700 mb-2">
                        Wirtschaftlichkeit
                      </h4>
                      <p className="text-gray-600">
                        Optimale Balance aus Investitions- und Betriebskosten
                      </p>
                    </div>

                    <div className="text-center p-6">
                      <div className="mx-auto h-16 w-16 rounded-full bg-emerald-700 bg-opacity-10 flex items-center justify-center mb-4">
                        <Leaf className="w-8 h-8 text-emerald-700" />
                      </div>
                      <h4 className="text-xl font-medium text-emerald-700 mb-2">
                        Nachhaltigkeit
                      </h4>
                      <p className="text-gray-600">
                        Ressourcenschonende Lösungen für eine grüne Zukunft
                      </p>
                    </div>

                    <div className="text-center p-6">
                      <div className="mx-auto h-16 w-16 rounded-full bg-emerald-700 bg-opacity-10 flex items-center justify-center mb-4">
                        <Wrench className="w-8 h-8 text-emerald-700" />
                      </div>
                      <h4 className="text-xl font-medium text-emerald-700 mb-2">
                        Technische Exzellenz
                      </h4>
                      <p className="text-gray-600">
                        Höchste Standards in Planung und Umsetzung
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Container>
          </section>
        ))}

        {/* Added: FAQ Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-emerald-700 mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
                Antworten auf die wichtigsten Fragen zu unseren Leistungen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-emerald-700 mb-3">
                  Welche Vorteile bietet Contracting?
                </h3>
                <p className="text-gray-700">
                  Contracting ermöglicht es Ihnen, moderne Energietechnik ohne
                  eigene Investition zu nutzen. Sie profitieren von
                  Kostensicherheit, professionellem Anlagenbetrieb und
                  nachhaltigeren Lösungen ohne Kapitalbindung.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-emerald-700 mb-3">
                  Wie lange dauert eine typische Projektplanung?
                </h3>
                <p className="text-gray-700">
                  Die Dauer variiert je nach Komplexität. Von der ersten
                  Beratung bis zur Umsetzungsreife vergehen in der Regel 2-6
                  Monate, wobei wir großen Wert auf eine gründliche Analyse und
                  maßgeschneiderte Lösung legen.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-emerald-700 mb-3">
                  Für welche Gebäudetypen bieten Sie Lösungen?
                </h3>
                <p className="text-gray-700">
                  Wir entwickeln Lösungen für eine Vielzahl von Gebäuden:
                  Wohngebäude, Büroimmobilien, öffentliche Einrichtungen,
                  Pflegeheime, Industriebetriebe und komplette Quartierslösungen
                  - jedes Projekt erhält ein individuelles Konzept.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-emerald-700 mb-3">
                  Wie wird die Wirtschaftlichkeit berechnet?
                </h3>
                <p className="text-gray-700">
                  Wir führen detaillierte Analysen nach VDI 2067 durch und
                  berücksichtigen alle relevanten Faktoren: Investitionskosten,
                  Energiekosten, Betriebskosten, Fördermittel und
                  Preisentwicklungen für eine realistische Kalkulation.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <CustomButton
                text="Weitere Fragen? Kontaktieren Sie uns"
                href="/kontakt"
                iconSize={20}
                size="lg"
                className="bg-emerald-700"
              />
            </div>
          </Container>
        </section>
      </main>

      {/* Added: Pre-Contact CTA Section */}
      <section className="py-16 bg-emerald-700">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-white mb-6">
                Bereit für Ihren nächsten Schritt in Richtung Energieeffizienz?
              </h2>
              <p className="text-xl font-light text-white opacity-90 mb-8">
                Unsere Experten beraten Sie gerne zu allen Fragen rund um
                nachhaltige Energieversorgung und technische Gebäudeausrüstung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton
                  text="Kontakt aufnehmen"
                  href="/kontakt"
                  iconSize={20}
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-emerald-50"
                />
                <CustomButton
                  text="Projekte ansehen"
                  href="/projekte"
                  iconSize={20}
                  size="lg"
                  className="bg-emerald-600 border-emerald-600 hover:bg-emerald-500"
                />
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/consulting.jpg"
                alt="Beratungsgespräch"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-emerald-700/30" />
              <div className="absolute bottom-0 left-0 right-0 bg-emerald-700/80 p-6">
                <div className="flex items-center gap-3 text-white mb-2">
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">Erstberatung kostenlos</span>
                </div>
                <p className="text-white/90">
                  Vereinbaren Sie ein unverbindliches Erstgespräch mit unseren
                  Experten
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section Component */}
      <ContactSection />
    </div>
  );
}
