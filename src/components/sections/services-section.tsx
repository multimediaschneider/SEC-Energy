"use client";

import React from "react";
import {
  Wrench,
  Lightbulb,
  Calculator,
  FileText,
  Droplet,
  Wind,
  TreePine,
  HandCoins,
  Scale,
  LineChart,
  LucideIcon,
} from "lucide-react";
import TextBlock from "../ui/text-block";
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
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-emerald-700 bg-opacity-20">
      <Container>
        {/* Headline and Introduction with overflow control */}
        <div className="mb-8 overflow-hidden">
          <div className="">
            <TextBlock
              headline="Unsere Leistungen – Effiziente Lösungen für die Gebäudetechnik
"
              introduction="Als Ingenieurdienstleister für technische Gebäudeausrüstung bieten wir Ihnen maßgeschneiderte, zukunftsorientierte Lösungen. Von der ersten Planung bis zur finalen Umsetzung begleiten wir Sie mit technischer Expertise, wirtschaftlichem Weitblick und praxisnahen Konzepten.

Setzen Sie auf nachhaltige Effizienz – wir machen Ihre Gebäude fit für die Zukunft."
              headlineSize="lg"
              textSize="lg"
              verticalSpacing="lg"
              horizontalSpacing="md"
            />

            {/* Button in a properly constrained container */}
            <div className="mt-8 mb-12 w-fit">
              <CustomButton
                text="Detaillierte Leistungsübersicht"
                href="/leistungen"
                iconSize={24}
                size="lg"
                className="bg-emerald-700"
              />
            </div>
          </div>
        </div>

        <GridLayout>
          {/* Service Cards */}
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
        </GridLayout>
      </Container>
    </section>
  );
}
