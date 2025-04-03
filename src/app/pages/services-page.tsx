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
  ChevronUp,
  Plus,
} from "lucide-react";
import { fallbackData } from "../constants/data/services-fallback-data";
import { ServiceCard } from "@/components/ui/base-card";
import ContactSection from "@/components/sections/contact-section";
import CustomButton from "@/components/ui/custom-button";
import Container from "@/components/ui/container";
import TextBlock from "@/components/ui/text-block";
import { cn } from "@/lib/utils";

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

const icons: Record<string, any> = {
  building: Building2,
  lightbulb: Lightbulb,
  wrench: Wrench,
  file: FileText,
  bot: Bot,
  scale: Scale,
  leaf: Leaf,
  network: Network,
};

// Desktop version - Category Tab Navigation
const DesktopServiceNav = ({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: ServiceCategory[];
  activeCategory: number;
  setActiveCategory: (index: number) => void;
}) => {
  return (
    <div className="bg-white shadow-md transition-all duration-300">
      <Container>
        <div className="flex overflow-x-auto gap-4 py-6 no-scrollbar">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "px-6 py-3 rounded-md whitespace-nowrap transition-all flex-shrink-0 font-medium",
                activeCategory === index
                  ? "bg-primary-700 text-white shadow-md"
                  : "bg-primary-50 text-primary-700 hover:bg-primary-100"
              )}
            >
              {category.shortTitle}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

// Mobile version - Collapsible Category Cards
const MobileServiceCard = ({
  category,
  index,
  isExpanded,
  toggleExpanded,
  visibleCount,
}: {
  category: ServiceCategory;
  index: number;
  isExpanded: boolean;
  toggleExpanded: () => void;
  visibleCount: number;
}) => {
  // Only show items that are within the visible count
  if (index >= visibleCount && !isExpanded) return null;

  const Icon = icons[category.areas[0]?.icon] || Lightbulb;

  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {/* Header - Always visible */}
      <div
        className={cn(
          "p-4 flex justify-between items-center cursor-pointer",
          isExpanded
            ? "bg-primary-700 text-white"
            : "bg-primary-50 text-primary-700"
        )}
        onClick={toggleExpanded}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              isExpanded ? "bg-white/20" : "bg-primary-100"
            )}
          >
            <Icon
              className={cn(
                "w-5 h-5",
                isExpanded ? "text-white" : "text-primary-600"
              )}
            />
          </div>
          <h3 className="text-lg font-medium">{category.shortTitle}</h3>
        </div>
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center",
            isExpanded ? "bg-white/20" : "bg-white"
          )}
        >
          {isExpanded ? (
            <ChevronUp
              className={cn(
                "w-4 h-4",
                isExpanded ? "text-white" : "text-primary-700"
              )}
            />
          ) : (
            <Plus className="w-4 h-4 text-primary-700" />
          )}
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white"
          >
            <div className="p-4">
              <h4 className="text-xl font-semibold text-primary-700 mb-3">
                {category.title}
              </h4>
              <p className="text-gray-700 mb-6">{category.description}</p>

              {/* Service Areas */}
              <div className="space-y-6">
                {category.areas.map((area, areaIndex) => {
                  const AreaIcon = icons[area.icon] || Lightbulb;
                  return (
                    <div
                      key={areaIndex}
                      className="p-4 bg-primary-50 rounded-md"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <AreaIcon className="w-5 h-5 text-primary-600" />
                        </div>
                        <h5 className="text-lg font-medium text-primary-700">
                          {area.title}
                        </h5>
                      </div>
                      <p className="text-gray-700 mb-4">{area.description}</p>

                      {/* Bullet points */}
                      <ul className="space-y-2">
                        {area.bulletPoints.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ServicesPage() {
  const [servicesData, setServicesData] = useState<ServicesPageData | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isSticky, setIsSticky] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [visibleMobileCount, setVisibleMobileCount] = useState(3);
  const [windowWidth, setWindowWidth] = useState(0);

  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Update window width on client side
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        const shouldStick = heroBottom <= 93; // Navbar height
        setIsSticky(shouldStick);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = servicesData || fallbackData;

  // Toggle expanded category for mobile
  const toggleCategory = (index: number) => {
    setExpandedCategories((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Show more categories on mobile
  const showMoreCategories = () => {
    setVisibleMobileCount((prev) => Math.min(prev + 3, data.categories.length));
  };

  // Determine if we should use mobile layout
  const isMobile = windowWidth < 768;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-32 pb-16 flex items-center justify-center bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800"
      >
        {/* Animated blur circles */}
        <div className="absolute inset-0">
          <div className="blur-container">
            <div className="blur-circle blur-circle-1" />
            <div className="blur-circle blur-circle-2" />
            <div className="blur-circle blur-circle-3" />
            <div className="blur-circle blur-circle-4" />
          </div>
        </div>

        <Container>
          <div className="text-center text-white z-10 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-light mb-6"
            >
              {data.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl font-light max-w-3xl mx-auto"
            >
              {data.introduction}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Desktop Categories Navigation */}
      {!isMobile && (
        <div
          ref={navRef}
          className={cn(
            "bg-white",
            isSticky ? "fixed top-[93px] left-0 right-0 z-40 shadow-md" : ""
          )}
        >
          <DesktopServiceNav
            categories={data.categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          {isSticky && (
            <div
              style={{
                height: navRef.current ? navRef.current.offsetHeight : 0,
              }}
            />
          )}
        </div>
      )}

      {/* Intro Section for any device */}
      <section className="py-12 bg-white">
        <Container>
          <div className="mb-10">
            <TextBlock
              headline="Maßgeschneiderte Lösungen für Ihre Anforderungen"
              introduction="Wir bieten Ihnen ein umfassendes Portfolio an Ingenieurdienstleistungen im Bereich der technischen Gebäudeausrüstung und Energietechnik. Unser erfahrenes Team entwickelt innovative Konzepte, die sowohl wirtschaftliche Effizienz als auch ökologische Nachhaltigkeit in den Fokus stellen."
              guidance="Entdecken Sie unser Leistungsspektrum in den verschiedenen Fachbereichen und erfahren Sie, wie wir Sie bei Ihrem Projekt von der ersten Idee bis zur erfolgreichen Umsetzung begleiten können."
              headlineSize="lg"
              textSize="lg"
              verticalSpacing="lg"
              horizontalSpacing="md"
            />
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <main className="py-8 md:py-12">
        <Container>
          {isMobile ? (
            // Mobile Layout with Collapsible Cards
            <div className="mb-8">
              {data.categories.map((category, index) => (
                <MobileServiceCard
                  key={index}
                  category={category}
                  index={index}
                  isExpanded={expandedCategories.includes(index)}
                  toggleExpanded={() => toggleCategory(index)}
                  visibleCount={visibleMobileCount}
                />
              ))}

              {/* Show more button if there are hidden categories */}
              {visibleMobileCount < data.categories.length && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={showMoreCategories}
                    className="flex items-center gap-2 px-6 py-3 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-md font-medium transition-colors"
                  >
                    <span>Mehr anzeigen</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Desktop Layout with Category Tabs
            <section>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  {/* Category Background Image and Header */}
                  <div className="flex flex-col items-center mb-12">
                    {/* Background image with overlay */}
                    <div className="w-full relative h-64 md:h-72 rounded-xl overflow-hidden shadow-lg mb-8">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/70 to-primary-700/30 z-10" />

                      {/* Background image */}
                      <Image
                        src={
                          data.categories[activeCategory].images?.[0] ||
                          "/consulting.jpg"
                        }
                        alt={data.categories[activeCategory].title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      />

                      {/* Content overlay */}
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                        <div className="text-white text-center p-6">
                          <h2 className="text-4xl font-light text-white mb-6 max-w-3xl drop-shadow-lg">
                            {data.categories[activeCategory].title}
                          </h2>

                          <p className="text-xl font-light text-white/90 max-w-3xl drop-shadow-lg">
                            {data.categories[activeCategory].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service areas grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.categories[activeCategory].areas.map(
                      (area, areaIndex) => {
                        const Icon = icons[area.icon] || Lightbulb;
                        return (
                          <ServiceCard
                            key={areaIndex}
                            icon={Icon}
                            title={area.title}
                            description={area.description}
                            index={areaIndex}
                          >
                            <ul className="space-y-3 mt-4">
                              {area.bulletPoints.map((point, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-gray-700"
                                >
                                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </ServiceCard>
                        );
                      }
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </section>
          )}
        </Container>
      </main>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-primary-700 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
              Antworten auf die wichtigsten Fragen zu unseren Leistungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-primary-700 mb-3">
                Welche Vorteile bietet Contracting?
              </h3>
              <p className="text-gray-700">
                Contracting ermöglicht es Ihnen, moderne Energietechnik ohne
                eigene Investition zu nutzen. Sie profitieren von
                Kostensicherheit, professionellem Anlagenbetrieb und
                nachhaltigeren Lösungen ohne Kapitalbindung.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-primary-700 mb-3">
                Wie lange dauert eine typische Projektplanung?
              </h3>
              <p className="text-gray-700">
                Die Dauer variiert je nach Komplexität. Von der ersten Beratung
                bis zur Umsetzungsreife vergehen in der Regel 2-6 Monate, wobei
                wir großen Wert auf eine gründliche Analyse und maßgeschneiderte
                Lösung legen.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-primary-700 mb-3">
                Für welche Gebäudetypen bieten Sie Lösungen?
              </h3>
              <p className="text-gray-700">
                Wir entwickeln Lösungen für eine Vielzahl von Gebäuden:
                Wohngebäude, Büroimmobilien, öffentliche Einrichtungen,
                Pflegeheime, Industriebetriebe und komplette Quartierslösungen -
                jedes Projekt erhält ein individuelles Konzept.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-primary-700 mb-3">
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
              variant="primary"
            />
          </div>
        </Container>
      </section>

      {/* Contact Section Component */}
      <ContactSection currentPage="leistungen" />
    </div>
  );
}
