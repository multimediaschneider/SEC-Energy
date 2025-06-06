"use client";

import React, { useState, useEffect } from "react";
import { Building2, Target, Network, Shield, LucideIcon } from "lucide-react";
import { client } from "@/sanity/client";
import TextBlock from "../ui/text-block";
import CustomButton from "../ui/custom-button";
import Container from "../ui/container";
import { GridLayout } from "../layouts/grid-layout";
import { ExpertiseCard } from "../ui/base-card";
import { SectionContainer, ButtonContainer } from "../ui/section-container";

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
  headline: "SEC Energieconsulting – Erfahrung trifft Innovation",
  introduction:
    "Mit langjähriger Erfahrung und technischer Expertise entwickeln wir effiziente Energielösungen für Wohnungswirtschaft, Industrie und öffentliche Einrichtungen. Zahlreiche erfolgreiche Projekte stehen für unsere nachhaltigen und wirtschaftlichen Konzepte. Lassen Sie uns Ihre Energiezukunft gestalten.",
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
    <SectionContainer
      id="expertise-section"
      bgColor="bg-gray-50"
    >
      {/* Text Block */}
      <TextBlock
        headline={data.headline}
        introduction={data.introduction}
        guidance="Entdecken Sie unser Leistungsspektrum in den verschiedenen Fachbereichen und erfahren Sie, wie wir Sie bei Ihrem Projekt von der ersten Idee bis zur erfolgreichen Umsetzung begleiten können."
        headlineSize="lg"
        textSize="lg"
        verticalSpacing="lg"
        horizontalSpacing="md"
      />
      
      {/* Call to action buttons */}
      <ButtonContainer>
        <CustomButton
          text="Über SEC"
          href="/about"
          iconSize={20}
          size="lg"
          variant="gradient"
        />
        <CustomButton
          text="Kontakt aufnehmen"
          href="/kontakt"
          iconSize={20}
          size="lg"
          variant="gradient"
        />
      </ButtonContainer>
      
      {/* Expertise cards grid */}
      <GridLayout columns={3} gap="md">
        {data.expertiseAreas.map((area, index) => (
          <ExpertiseCard
            key={index}
            icon={icons[area.icon] || Building2}
            title={area.title}
            description={area.description}
            highlights={area.highlights}
            index={index}
            variant="primary"
          />
        ))}
      </GridLayout>
    </SectionContainer>
  );
}
