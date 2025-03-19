import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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

    // Calculate how many cards are visible based on container width
    const cardWidth = 320; // Approximate width of a card including margin
    const containerWidth = scrollContainerRef.current.clientWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);

    // Scroll exactly one card width (or slightly less to show part of the next card)
    const scrollAmount = cardWidth * (visibleCards > 1 ? 1 : 0.8);
    const newScrollPosition =
      direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  // Navigate to project detail page
  const handleProjectClick = (projectKey: string) => {
    router.push(`/projekte?project=${projectKey}`);
  };

  return (
    <div className="relative w-full">
      {/* Content container with padding for arrows */}
      <div className="px-12 relative">
        {/* Left Arrow - positioned outside the content */}
        {showLeftArrow && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-white ring-1 ring-gray-200"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-700" />
          </button>
        )}

        {/* Right Arrow - positioned outside the content */}
        {showRightArrow && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-white ring-1 ring-gray-200"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-emerald-700" />
          </button>
        )}

        {/* Projects Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 py-6 no-scrollbar scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Eagerly render all cards for better performance */}
          {projects.map((project, index) => (
            <div
              key={project.key}
              className="min-w-[280px] md:min-w-[300px] w-[280px] md:w-[420px] flex-shrink-0"
            >
              <ProjectCard
                project={project}
                index={0} // Set all indexes to 0 to avoid staggered animation on scroll
                onClick={() => handleProjectClick(project.key)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectScrollSection;
