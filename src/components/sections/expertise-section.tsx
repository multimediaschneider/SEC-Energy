"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bolt,
  LineChart,
  LeafyGreen,
  Calculator,
  Building2,
  Factory,
  LucideIcon,
} from "lucide-react";
import { client } from "@/sanity/client";

// Types
interface ExpertiseArea {
  icon: string;
  title: string;
  description: string;
  stats: string;
  highlightColor: string;
}

interface ExpertiseData {
  title: string;
  subtitle: string;
  headline: string;
  subheadline: string;
  expertiseAreas: ExpertiseArea[];
}

const icons: Record<string, LucideIcon> = {
  bolt: Bolt,
  chart: LineChart,
  leaf: LeafyGreen,
  calculator: Calculator,
  building: Building2,
  factory: Factory,
};

const fallbackData: ExpertiseData = {
  title: "SEC Consulting GmbH",
  subtitle: "Schneider Engineering Consulting",
  headline: "Kernkompetenzen & Expertise",
  subheadline:
    "Umfassende Erfahrung in allen Bereichen des Energiecontractings",
  expertiseAreas: [
    {
      icon: "bolt",
      title: "BHKW-Planung",
      description:
        "30+ erfolgreiche BHKW-Projekte mit Gesamtleistung über 2000 kW",
      stats: "30+ Anlagen",
      highlightColor: "emerald",
    },
    {
      icon: "calculator",
      title: "Energiecontracting",
      description:
        "Maßgeschneiderte Contracting-Modelle für maximale Wirtschaftlichkeit",
      stats: "20+ Jahre",
      highlightColor: "blue",
    },
    {
      icon: "leaf",
      title: "Erneuerbare Energien",
      description:
        "Innovation durch Holzfeuerung, Solarthermie und Photovoltaik",
      stats: "2.230 kW",
      highlightColor: "green",
    },
    {
      icon: "chart",
      title: "Wirtschaftlichkeit",
      description:
        "Nachweisbare Kosteneinsparungen durch optimierte Energiekonzepte",
      stats: "30% Ø",
      highlightColor: "purple",
    },
  ],
};

export default function ExpertiseShowcase() {
  const [expertiseData, setExpertiseData] = useState<ExpertiseData | null>(
    null
  );

  useEffect(() => {
    const fetchExpertiseData = async () => {
      try {
        const query = `*[_type == "expertise"][0]{
          title,
          subtitle,
          headline,
          subheadline,
          expertiseAreas[]{
            icon,
            title,
            description,
            stats,
            highlightColor
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
    <section className="py-20 bg-gray-50" aria-label="Expertise Showcase">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {data.headline}
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subheadline}
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.expertiseAreas.map((area, index) => {
            const Icon = icons[area.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-sm shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`text-${area.highlightColor}-600 mb-4 rounded-full p-3 bg-${area.highlightColor}-50`}
                  >
                    {Icon && <Icon className="w-8 h-8" />}
                  </div>
                  {area.stats && (
                    <span
                      className={`text-${area.highlightColor}-600 font-bold text-xl mb-2`}
                    >
                      {area.stats}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
