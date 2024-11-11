import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, CloudLightning, Factory } from "lucide-react";
import Image from "next/image";

const CarouselAccordion: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string>("klinikum");

  const projects = {
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

  const projectKeys = Object.keys(projects);
  const activeIndex = projectKeys.indexOf(activeProject);

  return (
    <div className="relative w-[50%] h-[600px] flex items-center justify-center">
      {Object.entries(projects).map(([key, project], index) => {
        const position = index - activeIndex;
        const isActive = position === 0;

        const getFadeStyle = () => {
          if (position < 0) {
            return "bg-gradient-to-r from-white via-transparent to-transparent";
          } else if (position > 0) {
            return "bg-gradient-to-l from-white via-transparent to-transparent";
          }
          return "";
        };

        return (
          <motion.div
            key={key}
            className={`
              absolute w-[50%] cursor-pointer
              ${isActive ? "z-20" : "z-10"}
            `}
            initial={false}
            animate={{
              scale: isActive ? 1 : 0.7,
              x: `${position * 100}%`,
              opacity: Math.abs(position) > 1 ? 0 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => setActiveProject(key)}
          >
            {!isActive && (
              <div
                className={`
                  absolute inset-0 pointer-events-none z-30 
                  ${getFadeStyle()}
                  opacity-90
                `}
              />
            )}

            <div
              className={`
                relative bg-white rounded-lg overflow-hidden
                ${isActive ? "shadow-2xl ring-2 ring-emerald-500" : "shadow-lg"}
              `}
            >
              <div className="relative aspect-video">
                <Image
                  src="/pipes.jpg"
                  alt="Industrial HVAC system"
                  fill
                  className={`
                    object-cover
                    ${isActive ? "saturate-100" : "saturate-75"}
                  `}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  className={`
                    absolute inset-0
                    ${
                      isActive
                        ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        : ""
                    }
                  `}
                />
              </div>

              <div
                className={`
                  p-4
                  ${isActive ? "bg-emerald-50" : ""}
                `}
              >
                <h3
                  className={`
                    text-2xl font-semibold mb-3
                    ${isActive ? "text-emerald-700" : "text-gray-700"}
                  `}
                >
                  {project.title}
                </h3>

                <div className="space-y-4">
                  <div
                    className={`flex items-center gap-2 ${
                      isActive ? "text-emerald-700" : "text-gray-600"
                    }`}
                  >
                    <Building size={20} />
                    <span>{project.description}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`p-4 rounded-lg ${
                        isActive ? "bg-emerald-100" : "bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CloudLightning
                          className={`w-5 h-5 ${
                            isActive ? "text-emerald-500" : "text-gray-500"
                          }`}
                        />
                        <span className="font-medium">
                          Elektrische Leistung
                        </span>
                      </div>
                      <span className="text-gray-600">
                        {project.technicalData.electricalPower}
                      </span>
                    </div>

                    <div
                      className={`p-4 rounded-lg ${
                        isActive ? "bg-emerald-100" : "bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Factory
                          className={`w-5 h-5 ${
                            isActive ? "text-emerald-500" : "text-gray-500"
                          }`}
                        />
                        <span className="font-medium">Anlagentyp</span>
                      </div>
                      <span className="text-gray-600">
                        {project.technicalData.type}
                      </span>
                    </div>
                  </div>

                  {project.technicalData.additionalInfo && (
                    <div
                      className={`p-4 rounded-lg ${
                        isActive ? "bg-emerald-100" : "bg-gray-100"
                      } text-gray-600`}
                    >
                      {project.technicalData.additionalInfo}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CarouselAccordion;
