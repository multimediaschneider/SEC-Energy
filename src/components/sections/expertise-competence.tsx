"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Target, Network, Shield, LucideIcon } from "lucide-react";
import { client } from "@/sanity/client";
import TextBlock from "../ui/text-block";

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
  const textBlockRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textBlockRef,
    offset: ["start end", "end start"],
  });

  const borderHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Text Content */}
          <div ref={textBlockRef} className="relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-700"
              style={{ height: borderHeight }}
            />
            <TextBlock
              headline={data.headline}
              introduction={data.introduction}
              className="pl-6"
            />
          </div>

          {/* Right Column - Expertise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-12 mt-8 lg:mt-0">
            {data.expertiseAreas.map((area, index) => {
              const Icon = icons[area.icon as keyof typeof icons];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-emerald-50 shadow-lg p-4 sm:p-4 w-1/1 relative"
                >
                  <div className="flex flex-col flex-grow">
                    <div className="absolute flex items-center">
                      <div className="relative bottom-10 right-10 bg-emerald-400 bg-opacity-20 p-2 rounded-full">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-xl text-emerald-700 font-semibold mb-2">
                      {area.title}
                    </h3>
                    <p className="text-gray-700 sm:text-md font-semibold mb-3 sm:mb-4">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm sm:text-sm text-gray-600 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-4" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
