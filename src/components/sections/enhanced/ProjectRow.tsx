import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Building, ChevronUp } from "lucide-react";
import CustomButton from "../../ui/custom-button";

// Vertical layout component for mobile
const ProjectRow = ({
  project,
  isExpanded,
  onToggle,
  index,
  onClick,
}: {
  project: any;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
  onClick: () => void;
}) => {
  // Image src with fallback
  const imageSrc = project.images?.[0] || "/pipes.jpg";

  // Handler for header click with explicit prevention
  const handleHeaderClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Stop event bubbling
    onToggle();
  };

  return (
    <div className="w-full mb-4 border border-emerald-800 rounded-lg overflow-hidden shadow-md">
      {/* Header bar - always visible */}
      <div
        className="bg-emerald-700 text-white p-4 flex justify-between items-center cursor-pointer"
        onClick={handleHeaderClick}
      >
        <h3 className="text-lg font-medium">{project.title}</h3>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-emerald-700" />
          ) : (
            <Plus className="w-4 h-4 text-emerald-700" />
          )}
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white overflow-hidden"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {/* Image container */}
            <div className="relative w-full h-56">
              <Image
                src={imageSrc}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content section */}
            <div className="p-4">
              <div className="text-rose-600 font-medium mb-2">
                {project.location.city}
              </div>

              <p className="text-gray-700 mb-4">{project.shortDescription}</p>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Building size={18} className="flex-shrink-0" />
                  <span>{project.technicalData.type}</span>
                </div>

                {project.technicalData.powerOutput && (
                  <div className="text-gray-600 mt-1 pl-6">
                    {project.technicalData.powerOutput}
                  </div>
                )}
              </div>

              {/* Button wrapper with explicit event handling */}
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <CustomButton
                  text="Details ansehen"
                  onClick={(e) => {
                    e?.preventDefault();
                    onClick();
                  }}
                  iconSize={16}
                  size="sm"
                  variant="primary"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectRow;