import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./project-card";
import {
  ProjectsData,
  Project,
} from "@/app/constants/data/projects-fallback-data";

interface ProjectScrollSectionProps {
  projectsData: ProjectsData;
}

const ProjectScrollSection = ({ projectsData }: ProjectScrollSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Array of projects from the object
  const projects = Object.entries(projectsData.projects).map(
    ([key, project]) => ({
      key,
      ...project,
    })
  );

  // Check if scrolling arrows should be visible
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

  // Handle scroll events
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      checkScroll(); // Initial check

      return () => scrollContainer.removeEventListener("scroll", checkScroll);
    }
  }, []);

  // Handle scroll button clicks
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = scrollContainerRef.current.clientWidth / 2;
    const newScrollPosition =
      direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
          onClick={() => handleScroll("left")}
          aria-label="Scroll left"
        >
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-0" />
          <ChevronLeft className="w-6 h-6 text-emerald-700 relative z-10" />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
          onClick={() => handleScroll("right")}
          aria-label="Scroll right"
        >
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-0" />
          <ChevronRight className="w-6 h-6 text-emerald-700 relative z-10" />
        </button>
      )}

      {/* Projects Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 py-6 px-2 no-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <div
            key={project.key}
            className="min-w-[280px] md:min-w-[320px] w-[280px] md:w-[320px] flex-shrink-0 snap-start"
          >
            <ProjectCard
              project={project}
              index={index}
              isActive={selectedProject === project.key}
              onClick={() => setSelectedProject(project.key)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectScrollSection;
