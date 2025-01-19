"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Wrench,
  Lightbulb,
  Calculator,
  FileText,
  ArrowRight,
  Droplet,
  Wind,
  Zap,
  Thermometer,
  TreePine,
  HandCoins,
  Scale,
  LineChart,
  ChevronDown,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import CustomButton from "../ui/custom-button";
import Container from "../ui/container";
import { GridLayout } from "../layouts/grid-layout";
import { ServiceCard } from "../ui/base-card";
import ExpandableServices from "../ui/expandable-services";

interface ServiceCategory {
  icon: string;
  title: string;
  description: string;
}

const icons: Record<string, LucideIcon> = {
  wrench: Wrench,
  lightbulb: Lightbulb,
  calculator: Calculator,
  fileText: FileText,
  droplet: Droplet,
  wind: Wind,
  zap: Zap,
  thermometer: Thermometer,
  treePine: TreePine,
  handCoins: HandCoins,
  scale: Scale,
  lineChart: LineChart,
};

const initialServices: ServiceCategory[] = [
  {
    icon: "wrench",
    title: "Technische Gebäudeausrüstung",
    description: "Heizung, Sanitär, Lüftung und Klimatechnik aus einer Hand",
  },
  {
    icon: "lightbulb",
    title: "Energiekonzepte",
    description: "Innovative Lösungen für nachhaltige Gebäudetechnik",
  },
  {
    icon: "calculator",
    title: "Wirtschaftlichkeitsanalysen",
    description: "Fundierte Berechnungen für sichere Investitionen",
  },
  {
    icon: "fileText",
    title: "Beratungsleistungen",
    description: "Expertenwissen für Ihre Projekterfolge",
  },
];

const additionalServices: ServiceCategory[] = [
  {
    icon: "droplet",
    title: "Sanitärtechnik",
    description: "Moderne Wasser- und Abwassersysteme",
  },
  {
    icon: "wind",
    title: "Lüftungstechnik",
    description: "Optimale Luftqualität für höchsten Komfort",
  },
  {
    icon: "treePine",
    title: "Dekarbonisierung",
    description: "Strategien für klimaneutrale Gebäude",
  },
  {
    icon: "handCoins",
    title: "Fördermittelberatung",
    description: "Optimale Nutzung von Förderungsmöglichkeiten",
  },
  {
    icon: "scale",
    title: "Vertragsmanagement",
    description: "Rechtssichere Gestaltung aller Vereinbarungen",
  },
  {
    icon: "lineChart",
    title: "Energiemanagement",
    description: "Intelligente Steuerung und Optimierung",
  },
];

export default function ServicesSection() {
  const textBlockRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textBlockRef,
    offset: ["start end", "end start"],
  });
  const borderHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-emerald-700 bg-opacity-20">
      <Container>
        <GridLayout>
          {/* Left Side - Service Cards */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initialServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={icons[service.icon]}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
            <ExpandableServices
              additionalServices={additionalServices}
              icons={icons}
            />
          </div>

          {/* Right Side - Content */}
          <div className="relative" ref={textBlockRef}>
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-700"
              style={{ height: borderHeight }}
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center pl-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-emerald-700 mb-6">
                Unsere Leistungen
              </h2>
              <p className="text-2xl font-light text-gray-700 leading-relaxed mb-8">
                Als Ingenieurdienstleister für technische Gebäudeausrüstung
                bieten wir Ihnen ein umfassendes Portfolio an
                zukunftsorientierten Leistungen. Von der ersten Planung bis zur
                finalen Umsetzung begleiten wir Sie mit technischer Expertise
                und wirtschaftlichem Weitblick.
              </p>
              <div className="space-y-6">
                <CustomButton
                  text="Detaillierte Leistungsübersicht"
                  href="/leistungen"
                  iconSize={24}
                  size="lg"
                  className="bg-emerald-700"
                />
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Zertifizierte Expertise</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>Nachhaltige Lösungen</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </GridLayout>
      </Container>
    </section>
  );
}
