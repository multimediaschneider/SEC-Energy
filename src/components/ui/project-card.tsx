import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Building, MapPin } from "lucide-react";
import { Badge } from "./badge";

/**
 * Interface for the ProjectCard component props
 */
interface ProjectCardProps {
  project: {
    title: string; // Project title
    category: string; // Project category (e.g., "BHKW", "Contracting")
    shortDescription: string; // Brief project description
    technicalData: {
      type: string; // Type of system (e.g., "BHKW", "Holzfeuerung")
      powerOutput?: string; // Optional power output value (e.g., "220 kW elektrisch")
    };
    location: {
      city: string; // Project location city
    };
    images?: string[]; // Optional array of image URLs
    status?: string; // Optional project status (e.g., "completed", "ongoing")
  };
  index?: number; // Animation index (for staggered animations)
  isActive?: boolean; // Whether card is in active/selected state
  onClick?: () => void; // Click handler function
  className?: string; // Additional classes for the main container
  imageClassName?: string; // Additional classes for the image container
  contentClassName?: string; // Additional classes for the content container
  minimal?: boolean; // Whether to show minimal version (affects title placement)
}

/**
 * Project Card Component
 *
 * Displays project information in a card format with image and metadata.
 * Supports animation, active state highlighting, and minimal display mode.
 */
const ProjectCard = ({
  project,
  index = 0,
  isActive = false,
  onClick,
  className,
  imageClassName,
  contentClassName,
  minimal = false,
}: ProjectCardProps) => {
  // Fallback image if project.images is undefined or empty
  const imageSrc = project.images?.[0] || "/pipes.jpg";

  return (
    // Main card container with motion animation
    <motion.div
      // Animation settings
      initial={{ opacity: 0, y: 20 }} // Start invisible and below final position
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible when in viewport
      viewport={{ once: true }} // Only animate once
      transition={{ delay: index * 0.1 }} // Stagger animation based on index
      // Styling classes with conditional modifiers
      className={cn(
        // Base styles - full height, rounded corners, white background, shadow
        "h-full overflow-hidden rounded-md bg-white shadow-md hover:shadow-lg transition-all duration-300 flex flex-col",
        // Highlight with ring if active
        isActive && "ring-2 ring-emerald-500",
        // Show pointer cursor if clickable
        onClick && "cursor-pointer",
        // Custom classes passed as props
        className
      )}
      onClick={onClick} // Click handler
      whileHover={{ y: -5 }} // Slight lift effect on hover
    >
      {/* Image container with fixed aspect ratio */}
      <div className={cn("relative aspect-video w-full", imageClassName)}>
        {/* Next.js Image component for optimized image loading */}
        <Image
          src={imageSrc}
          alt={project.title}
          fill // Fill container
          className="object-cover" // Cover sizing mode
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizing
        />

        {/* Title overlay for non-minimal mode */}
        {!minimal && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <h3 className="text-white font-medium text-lg truncate">
              {project.title}
            </h3>
          </div>
        )}
      </div>

      {/* Content container */}
      <div
        className={cn(
          "p-6 flex-1 flex flex-col min-h-[320px]", // Padding, flex behavior, min height
          contentClassName
        )}
      >
        {/* Title for minimal mode (inside content area instead of overlay) */}
        {minimal && (
          <h3 className="text-emerald-700 font-medium text-xl mb-3 line-clamp-1">
            {project.title}
          </h3>
        )}

        {/* Project description with line clamping */}
        <p className="text-gray-600 mb-4 text-xl line-clamp-3 h-auto">
          {project.shortDescription}
        </p>

        {/* Metadata section - pushed to bottom with mt-auto */}
        <div className="mt-auto space-y-3">
          {/* Technical data section */}
          <div className="flex flex-col">
            {/* System type with icon */}
            <div className="flex items-center gap-1 text-xl text-gray-500">
              <Building size={16} className="text-emerald-600 flex-shrink-0" />
              <span className="truncate">{project.technicalData.type}</span>
            </div>

            {/* Power output (if available) */}
            {project.technicalData.powerOutput && (
              <div className="flex items-center gap-1 text-sm text-gray-500 pl-5">
                <span className="truncate">
                  {project.technicalData.powerOutput}
                </span>
              </div>
            )}
          </div>

          {/* Location with icon */}
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin size={16} className="text-emerald-600 flex-shrink-0" />
            <span className="truncate">{project.location.city}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
