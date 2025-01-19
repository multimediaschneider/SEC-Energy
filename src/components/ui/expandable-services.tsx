// components/ui/expandable-services.tsx
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ServiceCard } from "./base-card";
import { useState } from "react";

interface ExpandableServicesProps {
  additionalServices: any[];
  icons: Record<string, any>;
}

export default function ExpandableServices({
  additionalServices,
  icons,
}: ExpandableServicesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
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
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={icons[service.icon]}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-center">
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-2/5 rounded-sm py-1 flex items-center justify-center gap-2 text-emerald-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
        >
          <span className="font-medium">
            {isExpanded ? "Weniger anzeigen" : "Mehr Leistungen entdecken"}
          </span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        </motion.button>
      </div>
    </div>
  );
}
