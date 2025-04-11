import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import CustomButton from "../../ui/custom-button";

// Horizontal layout component for desktop
const ProjectColumn = ({
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

  // Handle column click without triggering navigation
  const handleColumnClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Stop event from bubbling up
    onToggle();
  };

  return (
    <div
      className={cn(
        "relative transition-all duration-300 h-full overflow-hidden border-r border-primary-800 last:border-r-0",
        isExpanded ? "flex-[2]" : "flex-[0.5]"
      )}
      onClick={handleColumnClick}
    >
      {/* Collapsed state - vertical title bar */}
      {!isExpanded && (
        <div className="h-full flex flex-col justify-between bg-primary-700 text-white cursor-pointer">
          {/* Title section - top */}
          <div className="h-full flex items-center justify-center p-4">
            <span className="transform -rotate-90 whitespace-nowrap text-lg font-medium">
              {project.title}
            </span>
          </div>

          {/* Plus button - bottom */}
          <div className="p-4 flex justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
              <Plus className="w-4 h-4 text-primary-700" />
            </div>
          </div>
        </div>
      )}

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full bg-white"
          >
            {/* Image container */}
            <div className="relative w-full h-2/5">
              <Image
                src={imageSrc}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content section - bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
              className="flex flex-col justify-between h-3/5 p-6 bg-white"
            >
              <div className="flex flex-col h-full">
                {/* Location label */}
                <div className="text-rose-600 font-medium mb-2">
                  {project.location.city}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-lg mb-4 text-gray-700 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Project metadata */}
                <div className="mb-6">
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

                {/* Button with explicit event handling */}
                <div
                  className="mt-auto"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <CustomButton
                    text="Details ansehen"
                    onClick={onClick}
                    iconSize={16}
                    size="sm"
                    variant="primary"
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectColumn;