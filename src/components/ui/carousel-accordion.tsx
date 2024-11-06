import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, CloudLightning, Factory } from "lucide-react";
import Image from "next/image";

const CarouselAccordion = () => {
  const [activeProject, setActiveProject] = useState("klinikum");

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
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {Object.entries(projects).map(([key, project], index) => {
        const position = index - activeIndex;

        return (
          <motion.div
            key={key}
            className="absolute w-[80%] max-w-2xl cursor-pointer"
            initial={false}
            animate={{
              scale: position === 0 ? 1 : 0.8,
              x: `${position * 100}%`,
              zIndex: position === 0 ? 2 : 1,
              opacity: Math.abs(position) > 1 ? 0 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => setActiveProject(key)}
          >
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/pipes.jpg"
                  alt="Industrial HVAC system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-emerald-800 mb-3">
                  {project.title}
                </h3>

                <AnimatePresence>
                  {position === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-emerald-600">
                        <Building size={20} />
                        <span>{project.description}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <CloudLightning className="w-5 h-5 text-emerald-500" />
                            <span className="font-medium">
                              Elektrische Leistung
                            </span>
                          </div>
                          <span className="text-gray-600">
                            {project.technicalData.electricalPower}
                          </span>
                        </div>

                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Factory className="w-5 h-5 text-emerald-500" />
                            <span className="font-medium">Anlagentyp</span>
                          </div>
                          <span className="text-gray-600">
                            {project.technicalData.type}
                          </span>
                        </div>
                      </div>

                      {project.technicalData.additionalInfo && (
                        <div className="bg-emerald-50 p-4 rounded-lg text-gray-600">
                          {project.technicalData.additionalInfo}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CarouselAccordion;
