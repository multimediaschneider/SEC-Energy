import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, X, Building, MapPin } from "lucide-react";
import { projectsFallbackData } from "@/app/constants/data/projects-fallback-data";
import TextBlock from "../ui/text-block";
import CustomButton from "../ui/custom-button";
import Container from "../ui/container";
import { client } from "@/sanity/client";

const ProjectColumn = ({
  project,
  isExpanded,
  onToggle,
  index,
}: {
  project: any;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) => {
  // Image src with fallback
  const imageSrc = project.images?.[0] || "/pipes.jpg";

  return (
    <div
      className={`relative transition-all duration-0 flex-1 h-[500px] overflow-hidden border-r border-emerald-800 last:border-r-0 ${isExpanded ? "flex-grow-[3]" : "flex-grow-1"}`}
    >
      {/* Collapsed state - vertical title bar */}
      {!isExpanded && (
        <div className="h-full flex flex-col justify-between bg-emerald-700 text-white">
          {/* Title section - top */}
          <div className="h-full flex items-center justify-center p-4">
            <span className="transform -rotate-90 whitespace-nowrap text-lg font-medium">
              {project.title}
            </span>
          </div>

          {/* Plus button - bottom */}
          <div className="p-4 flex justify-center">
            <button
              onClick={onToggle}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <Plus className="w-4 h-4 text-emerald-700" />
            </button>
          </div>
        </div>
      )}

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col h-full bg-white"
          >
            {/* Image section - top */}
            <div className="relative h-2/3">
              <Image
                src={imageSrc}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Close button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={onToggle}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
                >
                  <X className="w-4 h-4 text-emerald-700" />
                </button>
              </div>
            </div>

            {/* Content section - bottom */}
            <div className="flex flex-col justify-between h-1/2 p-6 bg-white">
              <div>
                <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location.city}</span>
                </div>
                <div className="mb-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building className="w-4 h-4" />
                    <span>{project.technicalData.type}</span>
                  </div>
                  {project.technicalData.powerOutput && (
                    <div className="text-gray-600 mt-1 ml-6">
                      {project.technicalData.powerOutput}
                    </div>
                  )}
                </div>
                <p className="text-gray-700 line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>

              <div className="mt-4">
                <CustomButton
                  text="Details ansehen"
                  href={`/projekte?project=${project.key || index}`}
                  iconSize={16}
                  size="sm"
                  className="bg-emerald-700 text-sm w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectSection = () => {
  const [projectsData, setProjectsData] = useState(projectsFallbackData);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectsData = async () => {
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
      }
    };

    fetchProjectsData();
  }, []);

  // Set the first project as expanded by default when data is loaded
  useEffect(() => {
    if (
      projectsData &&
      Object.keys(projectsData.projects).length > 0 &&
      !expandedProject
    ) {
      setExpandedProject(Object.keys(projectsData.projects)[0]);
    }
  }, [projectsData, expandedProject]);

  // Convert projects object to array with keys
  const projectsArray = Object.entries(projectsData.projects).map(
    ([key, project]) => ({
      key,
      ...project,
    })
  );

  // Toggle expanded project
  const toggleProject = (projectKey: string) => {
    setExpandedProject(expandedProject === projectKey ? null : projectKey);
  };

  return (
    <section id="projekte" className="py-16 bg-gray-50">
      <Container>
        <TextBlock
          headline={projectsData.projectsPage.headline}
          introduction="SEC Energieconsulting steht für über zwei Jahrzehnte erfolgreiche Projektrealisierung im Energiesektor. Von Blockheizkraftwerken über Holzfeuerungsanlagen bis hin zu innovativen Nahwärmekonzepten - unsere Referenzprojekte zeigen die ganze Bandbreite unserer technischen Expertise und Planungskompetenz."
          headlineSize="lg"
          textSize="lg"
          verticalSpacing="lg"
          horizontalSpacing="md"
        />

        <div className="mt-8 mb-12">
          <CustomButton
            text="Alle Projekte ansehen"
            href="/projekte"
            iconSize={24}
            size="lg"
            className="bg-emerald-700"
          />
        </div>

        {/* Project accordion that fills the entire container width */}
        <div className="mt-12 mb-8">
          <div className="flex h-[600px] border border-emerald-800 shadow-md">
            {projectsArray.slice(0, 8).map((project, index) => (
              <ProjectColumn
                key={project.key}
                project={project}
                isExpanded={expandedProject === project.key}
                onToggle={() => toggleProject(project.key)}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
