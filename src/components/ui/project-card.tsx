import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Building, MapPin } from "lucide-react";

interface ProjectCardProps {
  project: {
    key?: string;
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
}

const ProjectCard = ({
  project,
  index = 0,
  isActive = false,
  onClick,
  className,
}: ProjectCardProps) => {
  // Fallback image if project.images is undefined or empty
  const imageSrc = project.images?.[0] || "/pipes.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "h-full w-full rounded-lg overflow-hidden shadow-md bg-white flex flex-col",
        isActive && "ring-2 ring-emerald-500",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      {/* Image container without overlay */}
      <div className="relative w-full aspect-video">
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content container */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Location label */}
        <div className="text-rose-600 font-medium mb-2">
          {project.location.city}
        </div>

        {/* Project title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
          {project.title}
        </h3>

        {/* Project description */}
        <p className="text-lg mb-6 text-gray-700">{project.shortDescription}</p>

        {/* Project metadata at the bottom */}
        <div className="mt-auto">
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
      </div>
    </motion.div>
  );
};

export default ProjectCard;
