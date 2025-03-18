"use client";

import React, { useState, useEffect, useRef } from "react";
import { Building2, Target, Network, Shield, LucideIcon } from "lucide-react";
import { client } from "@/sanity/client";
import TextBlock from "../ui/text-block";
import Container from "../ui/container";
import { GridLayout } from "../layouts/grid-layout";
import { ExpertiseCard } from "../ui/base-card";
import ScrollBorder from "../ui/scroll-border";

interface ExpertiseArea {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

interface ExpertiseData {
  headline: string;
  introduction: string;
  targetGroups: string[];
  expertiseAreas: ExpertiseArea[];
}

const icons: Record<string, LucideIcon> = {
  building: Building2,
  target: Target,
  network: Network,
  shield: Shield,
};

const fallbackData: ExpertiseData = {
  headline:
    "SEC Energieconsulting - langjährige Markterfahrung mit tiefgreifender technischer Expertise.",
  introduction:
    "Zu unseren Kunden zählen Unternehmen aus der Wohnungswirtschaft, Wohnungsverwaltungen, der öffentlichen Hand, Pflegeheime, Energieversorger, Contractoren und der Industrie. Für sie haben wir zahlreiche Projekte erfolgreich umgesetzt und maßgeschneiderte Lösungen entwickelt.",
  targetGroups: [
    "Wohnungswirtschaft",
    "Wohnungsverwaltungen",
    "Öffentliche Hand",
    "Pflegeheime",
    "Energieversorger",
    "Contractoren",
    "Industrie",
  ],
  expertiseAreas: [
    {
      icon: "building",
      title: "Branchenexpertise",
      description: "Tiefgreifendes Verständnis der Immobilienwirtschaft",
      highlights: [
        "Spezialisierung auf komplexe Wohnquartiere",
        "Expertise in kritischer Infrastruktur",
        "Erfahrung mit öffentlichen Liegenschaften",
      ],
    },
    {
      icon: "target",
      title: "Strategische Planung",
      description: "Zukunftssichere Energiekonzepte",
      highlights: [
        "Langfristige Versorgungssicherheit",
        "Nachhaltige Wirtschaftlichkeit",
        "Integrierte Quartierskonzepte",
      ],
    },

    {
      icon: "shield",
      title: "Qualitätssicherung",
      description: "Höchste Standards in allen Prozessen",
      highlights: [
        "Zertifizierte Qualitätsprozesse",
        "Dokumentierte Erfolgshistorie",
        "Kontinuierliche Weiterbildung",
      ],
    },
  ],
};

export default function ExpertiseCompetenceSection() {
  const [expertiseData, setExpertiseData] = useState<ExpertiseData | null>(
    null
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchExpertiseData = async () => {
      try {
        const query = `*[_type == "expertise"][0]{
          headline,
          introduction,
          targetGroups,
          expertiseAreas[]{
            icon,
            title,
            description,
            highlights
          }
        }`;
        const data = await client.fetch(query);
        setExpertiseData(data);
      } catch (error) {
        console.error("Error fetching expertise data:", error);
        setExpertiseData(fallbackData);
      }
    };

    fetchExpertiseData();
  }, []);

  const data = expertiseData || fallbackData;

  return (
    <section
      ref={sectionRef}
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 relative"
    >
      {/* Apply ScrollBorder to the entire section */}

      <Container>
        <GridLayout>
          <TextBlock
            headline={data.headline}
            introduction={data.introduction}
            buttonText="Beratungsgespräch anfordern"
            buttonHref="/about"
            headlineSize="md"
            textSize="lg"
            verticalSpacing="lg"
            horizontalSpacing="md"
            withBorder={false} // Removed border from TextBlock since we use the ScrollBorder for the entire section
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-8 mt-8 lg:mt-0">
            {data.expertiseAreas.map((area, index) => (
              <ExpertiseCard
                key={index}
                icon={icons[area.icon]}
                title={area.title}
                description={area.description}
                highlights={area.highlights}
                index={index}
              />
            ))}
          </div>
        </GridLayout>
      </Container>
    </section>
  );
}
