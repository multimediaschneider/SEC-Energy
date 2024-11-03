"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  BarChart,
  Scale,
  FolderKanban,
  LucideIcon,
} from "lucide-react";
import { client } from "@/sanity/client";

interface CompetenceField {
  title: string;
  category: "technical" | "economic" | "legal" | "project";
  description: string;
  icon: string;
  highlights: string[];
  order?: number;
}

interface CompetenceData {
  title: string;
  subtitle: string;
  fields: CompetenceField[];
}

const categoryIcons: Record<string, LucideIcon> = {
  technical: Settings,
  economic: BarChart,
  legal: Scale,
  project: FolderKanban,
};

const fallbackData: CompetenceData = {
  title: "Kompetenzfelder",
  subtitle: "Umfassende Expertise in allen Bereichen des Energiecontractings",
  fields: [
    {
      title: "Technische Planung",
      category: "technical",
      description: "Ganzheitliche Energiesystemplanung und -optimierung",
      icon: "settings",
      highlights: [
        "Kraft-Wärme-Kopplung (5,5 - 495 kW)",
        "Erneuerbare Energiesysteme",
        "Nahwärmenetze",
        "Smart Metering",
      ],
      order: 1,
    },
    {
      title: "Wirtschaftlichkeitsanalyse",
      category: "economic",
      description:
        "Fundierte Bewertung und Optimierung von Energieinvestitionen",
      icon: "barChart",
      highlights: [
        "Dynamische Amortisationsrechnung",
        "Lebenszyklusanalysen",
        "Fördermitteloptimierung",
        "Energiebezugsmanagement",
      ],
      order: 2,
    },
    {
      title: "Vertragsmanagement",
      category: "legal",
      description: "Rechtssichere Gestaltung von Energielieferverträgen",
      icon: "scale",
      highlights: [
        "Contracting-Verträge",
        "Grunddienstbarkeiten",
        "Energielieferverträge",
        "Betreiberverträge",
      ],
      order: 3,
    },
    {
      title: "Betriebsführung",
      category: "project",
      description: "Professionelles Management von Energieanlagen",
      icon: "folderKanban",
      highlights: [
        "24/7 Störungsmanagement",
        "Wartungsplanung",
        "Verbrauchsmonitoring",
        "Qualitätssicherung",
      ],
      order: 4,
    },
  ],
};

export default function CompetenceSection() {
  const [competenceData, setCompetenceData] = useState<CompetenceData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCompetenceData = async () => {
      try {
        const query = `*[_type == "competence"][0]{
          title,
          subtitle,
          "fields": *[_type == "competenceField"] | order(order asc){
            title,
            category,
            description,
            icon,
            highlights,
            order
          }
        }`;
        const data = await client.fetch<CompetenceData>(query);
        setCompetenceData(data);
      } catch (error) {
        console.error("Error fetching competence data:", error);
        setCompetenceData(fallbackData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompetenceData();
  }, []);

  const data = competenceData || fallbackData;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {data.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {data.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.fields.map((field, index) => {
            const Icon = categoryIcons[field.category] || Settings;
            return (
              <motion.div
                key={field.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                  isLoading ? "animate-pulse" : ""
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-50 p-3 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {field.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{field.description}</p>
                  <ul className="space-y-2 w-full">
                    {field.highlights?.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                        className="text-sm text-gray-500"
                      >
                        • {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
