"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Target,
  Network,
  Shield,
  LucideIcon,
  ExternalLink,
} from "lucide-react";
import { client } from "@/sanity/client";
import Link from "next/link";
import CustomButton from "../ui/custom-button";

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
  headline: "Fachkompetenzen",
  introduction:
    "SEC Energieconsulting verbindet langjährige Markterfahrung mit tiefgreifender technischer Expertise. Zu unseren Kunden zählen Unternehmen aus der Wohnungswirtschaft, Wohnungsverwaltungen, der öffentlichen Hand, Pflegeheime, Energieversorger, Contractoren und der Industrie. Für sie haben wir zahlreiche Projekte erfolgreich umgesetzt und maßgeschneiderte Lösungen entwickelt.",
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
      icon: "network",
      title: "Branchennetzwerk",
      description: "Starke Partnerschaften in der Energiewirtschaft",
      highlights: [
        "Partner der Klimaallianz",
        "Aktives Verbandsmitglied",
        "Technologiepartnerschaften",
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

  // Split target groups into two arrays
  const firstColumnGroups = data.targetGroups.slice(0, 4);
  const secondColumnGroups = data.targetGroups.slice(4);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
          {/* Right Column - Expertise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1">
            {data.expertiseAreas.map((area, index) => {
              const Icon = icons[area.icon as keyof typeof icons];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-emerald-50 border border-emerald-700 shadow-lg p-4 sm:p-6"
                >
                  <div className="flex flex-col flex-grow h-full">
                    <div className="flex items-center mb-3 sm:mb-4 ">
                      <div className="bg-emerald-400 bg-opacity-20 p-2 rounded-full">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl sm:text-xl text-emerald-700 font-semibold ml-2">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-gray-700  sm:text-md font-semibold mb-3 sm:mb-4">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm  sm:text-base text-gray-600 flex  items-center"
                        >
                          <span className="w-1.5 h-1.5  bg-emerald-600 rounded-full mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6 w-10/12"
          >
            <div className="border-l-4 border-emerald-700 pl-6">
              <h2 className="text-6xl font-light text-emerald-700 mb-8">
                {data.headline}
              </h2>

              <p className="text-2xl font-light text-gray-700 leading-relaxed">
                {data.introduction}
              </p>

              <CustomButton
                text="Beratungsgespräch anfordern"
                href="/about"
                iconSize={24}
                size="lg"
                className="bg-emerald-700 mt-8"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
