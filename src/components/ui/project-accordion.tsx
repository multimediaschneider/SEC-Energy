import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, CloudLightning, Factory } from 'lucide-react';
import Image from 'next/image';

const ProjectAccordion = () => {
  const [activeProject, setActiveProject] = useState('klinikum');

  const projects = {
    klinikum: {
      title: "Klinikum Wahrendorff, Sehnde",
      description: "Stromversorgung mittels zwei Blockheizkraftwerken für medizinische Einrichtungen",
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
        additionalInfo: "Integrierte Kälteversorgung für optimale Gebäudeklimatisierung",
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
    <div className="flex w-full gap-4 h-[600px] overflow-hidden">
      {Object.entries(projects).map(([key, project]) => (
        <motion.div
          key={key}
          className={`relative bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden`}
          initial={false}
          animate={{
            flex: activeProject === key ? 1 : 0.3,
            opacity: activeProject === key ? 1 : 0.7,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={() => setActiveProject(key)}
        >
          <div className="relative h-full">
            <Image
              src="/pipes.jpg"
              alt="Industrial HVAC system"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              
              <AnimatePresence>
                {activeProject === key && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <Building size={16} />
                      <span>{project.description}</span>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded p-3 space-y-3">
                      <div className="flex items-center gap-2">
                        <CloudLightning className="w-4 h-4" />
                        <span className="text-sm">{project.technicalData.electricalPower}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Factory className="w-4 h-4" />
                        <span className="text-sm">{project.technicalData.type}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectAccordion;