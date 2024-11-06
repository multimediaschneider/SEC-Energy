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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Global Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6 "
          >
            <div className="border-l-4 border-emerald-700 pl-6">
              <h2 className="text-6xl font-light text-emerald-700 mb-8">
                Referenzprojekte
              </h2>

              <p className="text-2xl font-light text-gray-700 leading-relaxed">
                SEC Energieconsulting steht für über zwei Jahrzehnte
                erfolgreiche Projektrealisierung im Energiesektor. Von
                Blockheizkraftwerken über Holzfeuerungsanlagen bis hin zu
                innovativen Nahwärmekonzepten - unsere Referenzprojekte zeigen
                die ganze Bandbreite unserer technischen Expertise und
                Planungskompetenz. Wir haben zahlreiche maßgeschneiderte
                Energielösungen für Kliniken, Verwaltungsgebäude und
                Wohnquartiere entwickelt und umgesetzt.
              </p>

              <div className="">
                <CustomButton
                  text="Detaillierte Projetübersicht"
                  href="/about"
                  iconSize={24}
                  size="lg"
                  className="bg-emerald-700 mt-8"
                />
              </div>
            </div>
          </motion.div>

          {/* Left Column - Project Details */}
          <div className="flex flex-col justify-center ">
            <div>
              <div className="flex flex-wrap gap-3 mb-2 px-1 shadow-md justify-between rounded-sm ">
                {Object.keys(projects).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveProject(key)}
                    className={`px-3.5 py-1.5 m-3 rounded-sm z-10 transition-all ${
                      activeProject === key
                        ? "bg-emerald-700 text-white"
                        : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
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
                className="bg-white shadow-lg p-4 rounded-sm"
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
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
