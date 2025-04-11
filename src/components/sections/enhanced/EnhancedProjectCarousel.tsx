"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Building2,
  ChevronUp,
  ChevronDown,
  Settings,
  Target,
  X,
} from "lucide-react";
import { projectsFallbackData } from "@/app/constants/data/projects-fallback-data";
import { client } from "@/sanity/client";
import { SectionContainer } from "../../ui/section-container";
import { Badge } from "../../ui/badge";

// Import sub-components
import ProjectRow from "./ProjectRow";
import Image from "next/image";

// Type definitions for improved TypeScript support
type ProjectKey = keyof typeof projectsFallbackData.projects;

// Main Enhanced Project Carousel Component
export default function EnhancedProjectCarousel() {
  const [projectsData, setProjectsData] = useState(projectsFallbackData);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectKey | null>(
    null
  );
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Fetch projects data - get ALL projects without limiting
  useEffect(() => {
    const fetchProjectsData = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "projects"][0]{
          headline,
          introduction,
          metaTitle,
          metaDescription,
          "projects": {
            "klinikum": {
              _id,
              title,
              category,
              projectType,
              status,
              location,
              description,
              shortDescription,
              technicalData,
              scope,
              specialFeatures,
              results,
              "images": images[].asset->url
            },
            "expo": {
              _id,
              title,
              category,
              projectType,
              status,
              location,
              description,
              shortDescription,
              technicalData,
              scope,
              specialFeatures,
              results,
              "images": images[].asset->url
            }
          }
        }`;
        const data = await client.fetch(query);
        setProjectsData(data || projectsFallbackData);
      } catch (error) {
        console.error("Error fetching projects data:", error);
        // Fallback data is already set
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectsData();
  }, []);

  // Toggle expanded project with explicit event handling
  const toggleProject = (projectKey: string) => {
    setExpandedProject(expandedProject === projectKey ? null : projectKey);
  };

  // Get all projects
  const allProjects = Object.entries(projectsData.projects).map(
    ([key, project]) => ({ key, ...project })
  );

  // Handle selection of a project for detailed view
  const handleProjectSelect = (projectKey: ProjectKey) => {
    setSelectedProject(projectKey);
    setShowDetails(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when overlay is open
  };

  // Close project details
  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Close overlay when clicking outside content
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      handleCloseDetails();
    }
  };

  // Current selected project
  const currentProject = selectedProject
    ? projectsData.projects[selectedProject]
    : null;

  // Function to handle section clicks and prevent propagation
  const handleSectionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="bg-gray-50">
      <SectionContainer
        id="projekte"
        bgColor="bg-gray-50"
        onClick={handleSectionClick}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {/* Loading State */}
          {isLoading ? (
            <div className="py-8 flex justify-center items-center">
              <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-700 rounded-full animate-spin"></div>
            </div>
          ) : allProjects.length === 0 ? (
            // Empty State
            <div className="py-12 text-center">
              <div className="text-4xl text-gray-300 mb-4">
                <Building2 className="mx-auto h-16 w-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                Keine Projekte gefunden
              </h3>
              <p className="text-gray-500">
                Es wurden keine Projekte gefunden.
              </p>
            </div>
          ) : (
            // Unified Vertical Layout for all screen sizes
            <div onClick={(e) => e.stopPropagation()} className="space-y-4">
              {allProjects.map((project, index) => (
                <ProjectRow
                  key={project.key}
                  project={project}
                  isExpanded={expandedProject === project.key}
                  onToggle={() => toggleProject(project.key)}
                  index={index}
                  onClick={() => handleProjectSelect(project.key as ProjectKey)}
                />
              ))}
            </div>
          )}
        </div>
      </SectionContainer>

      {/* Project Detail Overlay - For all screen sizes */}
      <AnimatePresence>
        {showDetails && currentProject && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto"
            onClick={handleOverlayClick}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl"
            >
              {/* Close button */}
              <div className="sticky top-0 z-10 bg-white p-4 flex justify-end border-b border-gray-200">
                <button
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={handleCloseDetails}
                >
                  <X className="w-6 h-6" />
                  <span className="sr-only">Schließen</span>
                </button>
              </div>

              {/* Content container */}
              <div className="p-6 pb-12 max-w-6xl mx-auto">
                {/* Header with image */}
                <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-md mb-6">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" />
                  <Image
                    src={currentProject.images?.[0] || "/pipes.jpg"}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <Badge
                      variant="outline"
                      className="capitalize bg-white/20 text-white mb-3"
                    >
                      {currentProject.category}
                    </Badge>
                    <h2 className="text-3xl font-light text-white leading-tight">
                      {currentProject.title}
                    </h2>
                  </div>
                </div>

                {/* Location and type */}
                <div className="mb-6">
                  <div className="text-rose-600 font-medium mb-2">
                    {currentProject.location.city}
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="p-1 rounded-full bg-primary-100">
                      <Building2 size={16} className="flex-shrink-0" />
                    </span>
                    <span>{currentProject.technicalData.type}</span>
                    {currentProject.technicalData.powerOutput && (
                      <span className="ml-2 text-sm">
                        ({currentProject.technicalData.powerOutput})
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p>{currentProject.description}</p>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Technical Data */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary-100 p-2 rounded-full">
                        <Settings className="w-5 h-5 text-primary-600" />
                      </div>
                      <h4 className="text-lg font-medium text-primary-700">
                        Technische Daten
                      </h4>
                    </div>

                    {currentProject.technicalData.additionalMetrics &&
                      currentProject.technicalData.additionalMetrics.map(
                        (metric: any, index: number) => (
                          <div key={index} className="mb-3 last:mb-0">
                            <p className="text-sm font-medium text-primary-700 mb-1">
                              {metric.label}
                            </p>
                            <p className="text-gray-700">{metric.value}</p>
                          </div>
                        )
                      )}
                  </div>

                  {/* Scope */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary-100 p-2 rounded-full">
                        <ChevronDown className="w-5 h-5 text-primary-600" />
                      </div>
                      <h4 className="text-lg font-medium text-primary-700">
                        Leistungsumfang
                      </h4>
                    </div>

                    <ul className="space-y-2">
                      {currentProject.scope.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-gray-50 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary-100 p-2 rounded-full">
                        <Target className="w-5 h-5 text-primary-600" />
                      </div>
                      <h4 className="text-lg font-medium text-primary-700">
                        Ergebnisse
                      </h4>
                    </div>

                    <ul className="space-y-2">
                      {currentProject.results &&
                        currentProject.results.map(
                          (result: string, index: number) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-700"
                            >
                              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          )
                        )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
