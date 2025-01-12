import React, { useState } from "react";
import { Building, CloudLightning, Factory } from "lucide-react";
import { projectsFallbackData } from "@/app/constants/data/projects-fallback-data";

// TypeScript interfaces for our data structure
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
  // State Management
  // ---------------
  // activeProject: Tracks which project is currently centered/active
  // Starting with "klinikum" as the default active project
  const [activeProject, setActiveProject] = useState<string>("klinikum");

  // projectsData: Holds all our project information
  // Initialize with fallback data directly
  const [projectsData, setProjectsData] = useState(projectsFallbackData);

  // Extract projects from the data and get array of project keys
  const projects = projectsData.projects;
  const projectKeys = Object.keys(projects);

  // Find the index of the currently active project
  const activeIndex = projectKeys.indexOf(activeProject);

  // Early return if no projects are available
  // This prevents the component from trying to render with empty data
  if (!projects || Object.keys(projects).length === 0) {
    return <div className="p-4 bg-red-100">No projects data available</div>;
  }

  return (
    // Main container
    // - relative positioning for absolute child positioning
    // - h-[600px] sets fixed height for carousel
    // - flex for centering content
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Map through all projects to create carousel items */}
      {Object.entries(projects).map(([key, project], index) => {
        // Calculate position relative to active item
        // position = 0 means item is active/centered
        // negative position means item is to the left
        // positive position means item is to the right
        const position = index - activeIndex;
        const isActive = position === 0;

        // Function to get fade style based on card position
        // Returns different gradient directions for left and right cards
        const getFadeStyle = () => {
          if (!isActive) {
            if (position < 0) {
              // Cards to the left get a fade from right to left
              return {
                background: "linear-gradient(to right, white, transparent)",
                left: 0,
                width: "120%", // Controls the width of the fade effect
              };
            }
            if (position > 0) {
              // Cards to the right get a fade from left to right
              return {
                background: "linear-gradient(to left, white, transparent)",
                right: 0,
                width: "120%", // Controls the width of the fade effect
              };
            }
          }
          return {}; // No fade for active card
        };

        return (
          // Project Card Container
          // - absolute positioning for carousel effect
          // - w-[50%] makes each card take up half the container width
          <div
            key={key}
            className={`
              absolute w-[45%] cursor-pointer 
              ${isActive ? "z-20" : "z-10"}
            `}
            style={{
              // Transform for position and scale
              // - translateX moves cards horizontally based on position
              // - scale makes inactive cards smaller
              transform: `translateX(${position * 85}%) scale(${
                isActive ? 1 : 0.7
              })`,
              // Hide cards that are too far from center
              opacity: Math.abs(position) > 1 ? 0 : 1,
              // Smooth transitions for all transformations
              transition: "all 0.5s ease-in-out",
            }}
            onClick={() => setActiveProject(key)}
          >
            {/* Fade overlay for inactive cards */}
            {/* Only rendered when card is not active */}
            {!isActive && (
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none"
                style={getFadeStyle()}
              />
            )}

            {/* Project Card Content */}
            <div
              className={`
              relative bg-white overflow-hidden
              ${isActive ? "shadow-2xl" : ""}
            `}
            >
              {/* Image Section */}
              <div className="relative aspect-video ">
                <img
                  src={project.images[0] || "/api/placeholder/800/600"}
                  alt={project.title}
                  className={`w-full h-full object-cover
                    ${isActive ? "saturate-100" : "saturate-75"}
                  `}
                />
                {/* Gradient overlay for active cards */}
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

              {/* Content Section */}
              <div className={`p-4 ${isActive ? "bg-emerald-50" : ""}`}>
                {/* Project Title */}
                <h3
                  className={`
                  text-2xl font-semibold mb-3
                  ${isActive ? "text-emerald-700" : "text-gray-700"}
                `}
                >
                  {project.title}
                </h3>

                {/* Project Details */}
                <div className="space-y-4">
                  {/* Description with icon */}
                  <div
                    className={`flex items-center gap-2 ${
                      isActive ? "text-emerald-700" : "text-gray-600"
                    }`}
                  >
                    {/* <Building size={20} /> */}
                    <span
                      className={`p-4 rounded-lg ${
                        isActive ? "bg-emerald-100" : "bg-gray-100"
                      }`}
                    >
                      {project.shortDescription}
                    </span>
                  </div>

                  {/* Technical Data Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Power Output Info */}
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

                    {/* System Type Info */}
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

                  {/* Additional Metrics */}
                  {/* Map through any additional technical metrics */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselAccordion;
