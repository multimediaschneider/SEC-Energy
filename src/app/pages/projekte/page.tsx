import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Building, CloudLightning, Factory } from "lucide-react";

type ProjectType = {
  title: string;
  description: string;
  technicalData: {
    type: string;
    electricalPower: string;
    additionalInfo?: string;
  };
};

const CaseStudySection = () => {
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
        additionalInfo: "Integrierte Kälteversorgung",
      },
    },
    expo: {
      title: "Expo-Projekt Kronsberg",
      description: "Wärmeversorgungsgebiet mit innovativem Energiekonzept",
      technicalData: {
        type: "BHKW",
        electricalPower: "220 kW elektrisch",
        additionalInfo: "Nahwärmekonzept",
      },
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-emerald-700 mb-8">
        Referenzprojekte
      </h2>

      <div className="flex space-x-4 mb-8">
        {Object.keys(projects).map((key) => (
          <button
            key={key}
            onClick={() => setActiveProject(key)}
            className={`px-4 py-2 rounded-lg transition-colors ${
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
              {projects[activeProject].title}
            </h3>

            <div className="flex items-center gap-2 text-emerald-600 mb-4">
              <Building size={20} />
              <span>{projects[activeProject].description}</span>
            </div>

            <div className="space-y-4 mt-6">
              <div className="p-4 bg-emerald-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CloudLightning className="w-6 h-6 text-emerald-500" />
                  <span className="font-semibold">Elektrische Leistung</span>
                </div>
                <div className="text-gray-600">
                  {projects[activeProject].technicalData.electricalPower}
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Factory className="w-6 h-6 text-emerald-500" />
                  <span className="font-semibold">Anlagentyp</span>
                </div>
                <div className="text-gray-600">
                  {projects[activeProject].technicalData.type}
                </div>
              </div>

              {projects[activeProject].technicalData.additionalInfo && (
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <div className="text-gray-600">
                    {projects[activeProject].technicalData.additionalInfo}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="relative bg-emerald-50 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-emerald-800 mb-4">
              Weitere Projekte:
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                6 Energieholzfeuerungen mit 2.230 kW Grundlast-Gesamtleistung
              </li>
              <li>Biomethan BHKW Gronostraße (140 kW el.)</li>
              <li>Biomethan BHKW Erlenstieg (110 kW el.)</li>
              <li>
                30 weitere BHKW-Anlagen im Stadtgebiet Hannover (5,5 - 50 kW)
              </li>
            </ul>
          </div>
        </div>

        <button className="mt-6 flex items-center text-emerald-700 hover:text-emerald-800 transition-colors">
          <span>Weitere Informationen anfordern</span>
          <ChevronRight className="ml-2 w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
};

export default CaseStudySection;
