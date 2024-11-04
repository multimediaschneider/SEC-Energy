import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Lightbulb,
  Calculator,
  FileText,
  ArrowRight,
  Droplet,
  Wind,
  Zap,
  Thermometer,
  TreePine,
  HandCoins,
  Scale,
  LineChart,
  ChevronDown,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface ServiceCategory {
  icon: string;
  title: string;
  description: string;
}

const icons: Record<string, LucideIcon> = {
  wrench: Wrench,
  lightbulb: Lightbulb,
  calculator: Calculator,
  fileText: FileText,
  droplet: Droplet,
  wind: Wind,
  zap: Zap,
  thermometer: Thermometer,
  treePine: TreePine,
  handCoins: HandCoins,
  scale: Scale,
  lineChart: LineChart,
};

const initialServices: ServiceCategory[] = [
  {
    icon: "wrench",
    title: "Technische Gebäudeausrüstung",
    description: "Heizung, Sanitär, Lüftung und Klimatechnik aus einer Hand",
  },
  {
    icon: "lightbulb",
    title: "Energiekonzepte",
    description: "Innovative Lösungen für nachhaltige Gebäudetechnik",
  },
  {
    icon: "calculator",
    title: "Wirtschaftlichkeitsanalysen",
    description: "Fundierte Berechnungen für sichere Investitionen",
  },
  {
    icon: "fileText",
    title: "Beratungsleistungen",
    description: "Expertenwissen für Ihre Projekterfolge",
  },
];

const additionalServices: ServiceCategory[] = [
  {
    icon: "droplet",
    title: "Sanitärtechnik",
    description: "Moderne Wasser- und Abwassersysteme",
  },
  {
    icon: "wind",
    title: "Lüftungstechnik",
    description: "Optimale Luftqualität für höchsten Komfort",
  },
  {
    icon: "treePine",
    title: "Dekarbonisierung",
    description: "Strategien für klimaneutrale Gebäude",
  },
  {
    icon: "handCoins",
    title: "Fördermittelberatung",
    description: "Optimale Nutzung von Förderungsmöglichkeiten",
  },
  {
    icon: "scale",
    title: "Vertragsmanagement",
    description: "Rechtssichere Gestaltung aller Vereinbarungen",
  },
  {
    icon: "lineChart",
    title: "Energiemanagement",
    description: "Intelligente Steuerung und Optimierung",
  },
];

export default function ServicesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-emerald-700 bg-opacity-20 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-6xl font-light text-emerald-700 mb-6 ">
              Unsere Leistungen
            </h2>
            <p className="text-2xl font-light text-gray-700 leading-relaxed mb-8">
              Als Ingenieurdienstleister für technische Gebäudeausrüstung bieten
              wir Ihnen ein umfassendes Portfolio an zukunftsorientierten
              Leistungen. Von der ersten Planung bis zur finalen Umsetzung
              begleiten wir Sie mit technischer Expertise und wirtschaftlichem
              Weitblick.
            </p>

            {/* CTA Section */}
            <div className="space-y-6">
              <Link
                href="/leistungen"
                className="inline-flex items-center px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-gray-500 transition-colors duration-300"
              >
                Detaillierte Leistungsübersicht
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 ">
                <div className="flex items-center">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Zertifizierte Expertise</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Nachhaltige Lösungen</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Service Cards */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {initialServices.map((category, index) => {
                const Icon = icons[category.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-emerald-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-50 p-2 rounded-full">
                          <Icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 ml-3">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Expandable Section */}
            <div className="relative">
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                  >
                    {additionalServices.map((category, index) => {
                      const Icon = icons[category.icon];
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-lg  shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                          <div className="flex flex-col h-full ">
                            <div className="flex items-center mb-4 ">
                              <div className="bg-emerald-50 p-2 rounded-full">
                                <Icon className="w-6 h-6 text-emerald-600" />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 ml-3">
                                {category.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                              {category.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Improved Expand/Collapse Button */}
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full border-2 border-emerald-700 bg-white rounded-lg py-4 px-6 flex items-center justify-center gap-2 text-emerald-600 hover:text-emerald-700 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="font-medium ">
                  {isExpanded
                    ? "Weniger anzeigen"
                    : "Mehr Leistungen entdecken"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
