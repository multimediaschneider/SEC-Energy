import React, { useState } from "react";
import { Building, CloudLightning, Factory } from "lucide-react";
import { projectsFallbackData } from "@/app/constants/data/projects-fallback-data";

interface TechnicalMetric {
  label: string;
  value: string;
}

interface TechnicalData {
  type: string;
  powerOutput: string;
  additionalMetrics: TechnicalMetric[];
}

interface Project {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  technicalData: TechnicalData;
  images: string[];
}

const CarouselAccordion: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string>("klinikum");
  const [projectsData, setProjectsData] = useState(projectsFallbackData);
  const projects = projectsData.projects;
  const projectKeys = Object.keys(projects);
  const activeIndex = projectKeys.indexOf(activeProject);

  if (!projects || Object.keys(projects).length === 0) {
    return <div className="p-4 bg-red-100">No projects data available</div>;
  }

  return (
    // Added overflow-hidden to prevent horizontal scrolling
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {Object.entries(projects).map(([key, project], index) => {
          const position = index - activeIndex;
          const isActive = position === 0;

          const getFadeStyle = () => {
            if (!isActive) {
              if (position < 0) {
                return {
                  background: "linear-gradient(to right, white, transparent)",
                  left: 0,
                  width: "120%",
                };
              }
              if (position > 0) {
                return {
                  background: "linear-gradient(to left, white, transparent)",
                  right: 0,
                  width: "120%",
                };
              }
            }
            return {};
          };

          // Don't render cards that are too far from center
          if (Math.abs(position) > 1) {
            return null;
          }

          return (
            <div
              key={key}
              className={`
                absolute w-[45%] cursor-pointer 
                ${isActive ? "z-20" : "z-10"}
              `}
              style={{
                transform: `translateX(${position * 85}%) scale(${
                  isActive ? 1 : 0.7
                })`,
                opacity: Math.abs(position) > 1 ? 0 : 1,
                transition: "all 0.5s ease-in-out",
              }}
              onClick={() => setActiveProject(key)}
            >
              {!isActive && (
                <div
                  className="absolute top-0 bottom-0 z-30 pointer-events-none"
                  style={getFadeStyle()}
                />
              )}

              <div
                className={`
                relative bg-white overflow-hidden rounded-lg
                ${isActive ? "shadow-2xl" : ""}
              `}
              >
                <div className="relative aspect-video">
                  <img
                    src={project.images[0] || "/api/placeholder/800/600"}
                    alt={project.title}
                    className={`w-full h-full object-cover
                      ${isActive ? "saturate-100" : "saturate-75"}
                    `}
                  />
                  <div
                    className={`
                    absolute inset-0
                    ${
                      isActive
                        ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        : ""
                    }
                  `}
                  />
                </div>

                <div className={`p-4 ${isActive ? "bg-emerald-50" : ""}`}>
                  <h3
                    className={`
                    text-2xl font-semibold mb-3
                    ${isActive ? "text-emerald-700" : "text-gray-700"}
                  `}
                  >
                    {project.title}
                  </h3>

                  <div className="space-y-4">
                    <div
                      className={`flex items-center gap-2 ${
                        isActive ? "text-emerald-700" : "text-gray-600"
                      }`}
                    >
                      <span
                        className={`p-4 rounded-lg ${
                          isActive ? "bg-emerald-100" : "bg-gray-100"
                        }`}
                      >
                        {project.shortDescription}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className={`p-4 rounded-lg ${
                          isActive ? "bg-emerald-100" : "bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <CloudLightning
                            className={`w-5 h-5 ${
                              isActive ? "text-emerald-500" : "text-gray-500"
                            }`}
                          />
                          <span className="font-medium">Leistung</span>
                        </div>
                        <span className="text-gray-600">
                          {project.technicalData.powerOutput}
                        </span>
                      </div>

                      <div
                        className={`p-4 rounded-lg ${
                          isActive ? "bg-emerald-100" : "bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Factory
                            className={`w-5 h-5 ${
                              isActive ? "text-emerald-500" : "text-gray-500"
                            }`}
                          />
                          <span className="font-medium">Anlagentyp</span>
                        </div>
                        <span className="text-gray-600">
                          {project.technicalData.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselAccordion;
