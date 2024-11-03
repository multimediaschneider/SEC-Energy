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
  headline: "Expertise & Fachkompetenz",
  introduction:
    "SEC Energieconsulting verbindet langjährige Markterfahrung mit tiefgreifender technischer Expertise. Als etablierter Partner der Immobilienwirtschaft entwickeln wir nachhaltige Energiekonzepte, die wirtschaftliche Effizienz mit ökologischer Verantwortung verbinden.",
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Right Column - Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.expertiseAreas.map((area, index) => {
              const Icon = icons[area.icon as keyof typeof icons];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-emerald-700  bg-opacity-15 border-2 border-emerald-700 rounded-lg shadow-lg p-6"
                >
                  <div className="flex flex-col h-full ">
                    <div className="flex items-center mb-4 ">
                      <div className="bg-emerald-400 bg-opacity-20 p-2 rounded-full">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className="text-lg font-semibold  text-gray-900 ml-3">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-500 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2" />
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
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {data.headline}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.introduction}
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Für Kunden aus folgenden Bereichen haben wir zahlreiche Projekte
                erfolgreich umgesetzt und maßgeschneiderte Lösungen entwickelt:
              </h3>
              <ul className="space-y-3 mb-8">
                {data.targetGroups.map((group, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />
                    {group}
                  </motion.li>
                ))}
              </ul>

              {/* New CTA Section */}
              <div className="pt-6">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-700 text-white rounded-lg"
                >
                  <span>Persönliche Beratung anfragen</span>
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
