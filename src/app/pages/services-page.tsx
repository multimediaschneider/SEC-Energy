"use client";

import React, { useState, useEffect, useRef } from "react";
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
  X,
} from "lucide-react";
import { fallbackData } from "../constants/data/services-fallback-data";
import { ServiceCard } from "@/components/ui/base-card";
import ContactSection from "@/components/sections/contact-section";
import {
  SectionContainer,
  ButtonContainer,
} from "@/components/ui/section-container";
import CustomButton from "@/components/ui/custom-button";
import Container from "@/components/ui/container";
import TextBlock from "@/components/ui/text-block";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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

export default function ServicesPage() {
  const [servicesData, setServicesData] = useState<ServicesPageData | null>(
    null
  );
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [visibleMobileCount, setVisibleMobileCount] = useState(3);
  const [selectedService, setSelectedService] = useState<{
    category: ServiceCategory;
    area: ServiceArea;
  } | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

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

  // Handle service selection for detailed view
  const handleServiceSelect = (
    category: ServiceCategory,
    area: ServiceArea
  ) => {
    setSelectedService({ category, area });
    setShowDetails(true);
    document.body.style.overflow = "hidden";
  };

  // Close service details
  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  // Close overlay when clicking outside content
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      handleCloseDetails();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800">
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
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white"
              >
                <h1 className="text-4xl md:text-6xl font-light mb-8 border-b border-white pb-4">
                  {data.headline}
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8">
                  {data.introduction}
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <SectionContainer bgColor="bg-white">
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
      </SectionContainer>

      {/* Main Content - Unified Vertical Layout */}
      <SectionContainer bgColor="bg-gray-50">
        <Container>
          <div className="mb-8 space-y-4">
            {data.categories.map((category, index) => {
              // Only show items that are within the visible count on mobile
              if (
                index >= visibleMobileCount &&
                !expandedCategories.includes(index)
              )
                return null;

              const Icon = icons[category.areas[0]?.icon] || Lightbulb;
              const isExpanded = expandedCategories.includes(index);

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  {/* Header - Always visible */}
                  <div
                    className={cn(
                      "p-4 flex justify-between items-center cursor-pointer",
                      isExpanded
                        ? "bg-primary-700 text-white"
                        : "bg-primary-50 text-primary-700"
                    )}
                    onClick={() => toggleCategory(index)}
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
                      <h3 className="text-lg font-medium">
                        {category.shortTitle}
                      </h3>
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
                          <p className="text-gray-700 mb-6">
                            {category.description}
                          </p>

                          {/* Service Areas */}
                          <div className="space-y-4">
                            {category.areas.map((area, areaIndex) => {
                              const AreaIcon = icons[area.icon] || Lightbulb;
                              return (
                                <div
                                  key={areaIndex}
                                  className="p-4 bg-primary-50 rounded-md cursor-pointer hover:bg-primary-100 transition-colors"
                                  onClick={() =>
                                    handleServiceSelect(category, area)
                                  }
                                >
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                                      <AreaIcon className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <h5 className="text-lg font-medium text-primary-700">
                                      {area.title}
                                    </h5>
                                  </div>
                                  <p className="text-gray-700 mb-4">
                                    {area.description}
                                  </p>
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
            })}

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
        </Container>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer bgColor="bg-white">
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
            <ButtonContainer>
              <CustomButton
                text="Weitere Fragen? Kontaktieren Sie uns"
                href="/kontakt"
                iconSize={20}
                size="lg"
                variant="gradient"
              />
            </ButtonContainer>
          </div>
        </Container>
      </SectionContainer>

      {/* Contact Section Component */}
      <ContactSection currentPage="leistungen" />

      {/* Service Detail Overlay - For all screen sizes */}
      <AnimatePresence>
        {showDetails && selectedService && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto"
            onClick={handleOverlayClick}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl"
            >
              {/* Close button */}
              <div className="sticky top-0 z-10 bg-white p-4 flex justify-end border-b border-gray-200">
                <button
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={handleCloseDetails}
                >
                  <X className="w-6 h-6" />
                  <span className="sr-only">Schließen</span>
                </button>
              </div>

              {/* Content container */}
              <div className="p-6 pb-12 max-w-6xl mx-auto">
                {/* Header with image */}
                <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-md mb-6">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" />
                  <Image
                    src={
                      selectedService.category.images?.[0] || "/consulting.jpg"
                    }
                    alt={selectedService.category.title}
                    className="w-full h-full object-cover"
                    width={800}
                    height={400}
                    priority
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <Badge
                      variant="outline"
                      className="capitalize bg-white/20 text-white mb-3"
                    >
                      {selectedService.category.shortTitle}
                    </Badge>
                    <h2 className="text-3xl font-light text-white leading-tight">
                      {selectedService.area.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p>{selectedService.area.description}</p>
                </div>

                {/* Bullet points */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-medium text-primary-700 mb-4">
                    Leistungsumfang
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.area.bulletPoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
