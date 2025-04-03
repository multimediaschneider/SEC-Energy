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
import { ExpertiseCard } from "../ui/base-card";

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

const allServices: ServiceCategory[] = [
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
    <section className="py-16 bg-primary-50">
      <Container>
        {/* Headline and Introduction */}
        <div className="mb-12">
          <TextBlock
            headline="Unsere Leistungen – Effiziente Lösungen für die Gebäudetechnik"
            introduction="Als Ingenieurdienstleister für technische Gebäudeausrüstung bieten wir Ihnen maßgeschneiderte, zukunftsorientierte Lösungen. Von der ersten Planung bis zur finalen Umsetzung begleiten wir Sie mit technischer Expertise, wirtschaftlichem Weitblick und praxisnahen Konzepten."
            guidance="Setzen Sie auf nachhaltige Effizienz – wir machen Ihre Gebäude fit für die Zukunft."
            headlineSize="lg"
            textSize="lg"
            verticalSpacing="lg"
            horizontalSpacing="md"
          />

          {/* Button with consistent spacing and centered */}
          <div className="mt-6 mb-10 flex justify-center w-full">
            <CustomButton
              text="Detaillierte Leistungsübersicht"
              href="/leistungen"
              iconSize={20}
              size="lg"
              variant="primary"
            />
          </div>
        </div>

        {/* Service Cards Grid with consistent styling */}
        <GridLayout columns={2} gap="md">
          {allServices.map((service, index) => (
            <ExpertiseCard
              key={index}
              icon={icons[service.icon] || Wrench}
              title={service.title}
              description={service.description}
              highlights={[]}
              index={index}
              variant="default" // All cards with white background
            />
          ))}
        </GridLayout>
      </Container>
    </section>
  );
}
