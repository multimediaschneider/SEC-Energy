import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Building, MapPin } from "lucide-react";
import { Badge } from "./badge";

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    shortDescription: string;
    technicalData: {
      type: string;
      powerOutput?: string;
    };
    location: {
      city: string;
    };
    images?: string[];
    status?: string;
  };
  index?: number;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  minimal?: boolean;
}

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
  // Fallback image
  const imageSrc = project.images?.[0] || "/pipes.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "h-full overflow-hidden rounded-md bg-white shadow-md hover:shadow-lg transition-all duration-300 flex flex-col",
        isActive && "ring-2 ring-emerald-500",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <div className={cn("relative aspect-video w-full", imageClassName)}>
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Status badge removed as requested */}
        {!minimal && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <h3 className="text-white font-medium text-lg truncate">
              {project.title}
            </h3>
          </div>
        )}
      </div>

      <div className={cn("p-4 flex-1 flex flex-col", contentClassName)}>
        {minimal && (
          <h3 className="text-emerald-700 font-medium text-lg mb-2 line-clamp-1">
            {project.title}
          </h3>
        )}

        <p className="text-gray-600 mb-3 text-sm line-clamp-2 h-10">
          {project.shortDescription}
        </p>

        <div className="mt-auto space-y-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Building size={14} className="text-emerald-600 flex-shrink-0" />
              <span className="truncate">{project.technicalData.type}</span>
            </div>

            {project.technicalData.powerOutput && (
              <div className="flex items-center gap-1 text-xs text-gray-500 pl-5">
                <span className="truncate">
                  {project.technicalData.powerOutput}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <MapPin size={14} className="text-emerald-600 flex-shrink-0" />
            <span className="truncate">{project.location.city}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
