"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Building,
  CloudLightning,
  Factory,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../ui/custom-button";

type ProjectType = {
  title: string;
  description: string;
  technicalData: {
    type: string;
    electricalPower: string;
    additionalInfo?: string;
  };
};

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState("klinikum");

  const projects: Record<string, ProjectType> = {
    klinikum: {
      title: "Klinikum Wahrendorff, Sehnde",
      description:
        "Stromversorgung mittels zwei Blockheizkraftwerken für medizinische Einrichtungen",
      technicalData: {
        type: "Doppel-BHKW-Anlage",
        electricalPower: "89 kW + 110 kW elektrisch",
        additionalInfo: "Redundante Versorgung für medizinische Einrichtungen",
      },
    },
    aok: {
      title: "AOK Niedersachsen, Hannover",
      description: "Kraft-Wärme-Kälte-Kopplung für Verwaltungsgebäude",
      technicalData: {
        type: "BHKW mit Kälteversorgung",
        electricalPower: "495 kW elektrisch",
        additionalInfo:
          "Integrierte Kälteversorgung für optimale Gebäudeklimatisierung",
      },
    },
    expo: {
      title: "Expo-Projekt Kronsberg",
      description: "Wärmeversorgungsgebiet mit innovativem Energiekonzept",
      technicalData: {
        type: "BHKW mit Nahwärmenetz",
        electricalPower: "220 kW elektrisch",
        additionalInfo: "Integriertes Quartiersversorgungskonzept",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Project Details */}
          <div>
            <h2 className="text-3xl font-bold text-emerald-700 mb-8">
              Referenzprojekte
            </h2>

            <div className="max-w-xl">
              <div className="flex flex-wrap gap-3 mb-6 justify-between">
                {Object.keys(projects).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveProject(key)}
                    className={`px-3.5 py-1.5 font-semibold border-2 border-emerald-700 text-sm rounded-sm transition-colors ${
                      activeProject === key
                        ? "bg-emerald-700 text-white"
                        : "bg-emerald-50 text-emerald-700 hover:bg-emerald-50"
                    }`}
                  >
                    {projects[key].title.split(",")[0]}
                  </button>
                ))}
              </div>
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-sm shadow-lg p-4 max-w-xl border-2 border-emerald-700"
              >
                <div className="aspect-video w-full rounded-sm mb-4 relative overflow-hidden">
                  <Image
                    src="/pipes.jpg"
                    alt="Industrial HVAC system and pipes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                  {projects[activeProject].title}
                </h3>
                <div className="flex items-center gap-2 text-emerald-600 mb-4 text-sm">
                  <Building size={16} />
                  <span>{projects[activeProject].description}</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-emerald-50 rounded-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <CloudLightning className="w-5 h-5 text-emerald-500" />
                      <span className="font-semibold text-sm">
                        Elektrische Leistung
                      </span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {projects[activeProject].technicalData.electricalPower}
                    </div>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Factory className="w-5 h-5 text-emerald-500" />
                      <span className="font-semibold text-sm">Anlagentyp</span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {projects[activeProject].technicalData.type}
                    </div>
                  </div>
                  {projects[activeProject].technicalData.additionalInfo && (
                    <div className="p-3 bg-emerald-50 rounded-sm">
                      <div className="text-gray-600 text-sm">
                        {projects[activeProject].technicalData.additionalInfo}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Global Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:mt-24"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Bewährte Expertise in verschiedensten Energieprojekten
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              SEC Energieconsulting steht für über zwei Jahrzehnte erfolgreiche
              Projektrealisierung im Energiesektor. Von Blockheizkraftwerken
              über Holzfeuerungsanlagen bis hin zu innovativen Nahwärmekonzepten
              - unsere Referenzprojekte zeigen die ganze Bandbreite unserer
              technischen Expertise und Planungskompetenz. Wir haben zahlreiche
              maßgeschneiderte Energielösungen für Kliniken, Verwaltungsgebäude
              und Wohnquartiere entwickelt und umgesetzt.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Unsere Projekte zeichnen sich durch höchste Effizienz,
              Nachhaltigkeit und Wirtschaftlichkeit aus. Jedes Projekt wird
              individuell auf die spezifischen Anforderungen unserer Kunden
              zugeschnitten und mit modernster Technik realisiert.
            </p>

            <div className="mt-8">
              <CustomButton
                text="Detaillierte Projetübersicht"
                href="/about"
                iconSize={24}
                size="lg"
                className="bg-emerald-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
