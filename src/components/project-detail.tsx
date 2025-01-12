"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Settings,
  ListChecks,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CustomButton from "./ui/custom-button";
import ImageSlider from "./ui/image-slider";
import { client } from "@/sanity/client";

import {
  projectsFallbackData,
  type ProjectsData,
} from "@/app/constants/data/projects-fallback-data";

type ProjectKey = keyof typeof projectsFallbackData.projects;

const ProjectDetail = () => {
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectKey>("klinikum");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Scroll state
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const [showProjectLeftScroll, setShowProjectLeftScroll] = useState(false);
  const [showProjectRightScroll, setShowProjectRightScroll] = useState(false);

  // Refs for scroll containers
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const projectScrollRef = useRef<HTMLDivElement>(null);

  // Handle horizontal scrolling with mouse wheel
  // const handleWheel = (event: WheelEvent, container: HTMLDivElement) => {
  //   if (event.deltaY !== 0) {
  //     event.preventDefault();
  //     container.scrollLeft += event.deltaY;
  //   }
  // };

  // Extract unique categories from the projects data
  const getCategories = (data: ProjectsData) => {
    const categories = new Set<string>();
    Object.values(data.projects).forEach((project) => {
      categories.add(project.category);
    });
    return Array.from(categories);
  };

  // Check scroll position and update indicators
  const checkScroll = (
    container: HTMLDivElement,
    isProjectContainer: boolean = false
  ) => {
    const hasHorizontalScroll = container.scrollWidth > container.clientWidth;
    const isAtStart = container.scrollLeft <= 0;
    const isAtEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;

    if (isProjectContainer) {
      setShowProjectLeftScroll(!isAtStart && hasHorizontalScroll);
      setShowProjectRightScroll(!isAtEnd && hasHorizontalScroll);
    } else {
      setShowLeftScroll(!isAtStart && hasHorizontalScroll);
      setShowRightScroll(!isAtEnd && hasHorizontalScroll);
    }
  };

  // Scroll handlers
  const handleScroll = (
    direction: "left" | "right",
    ref: React.RefObject<HTMLDivElement>
  ) => {
    const container = ref.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    const newScrollPosition =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const query = `*[_type == "projects"][0]{
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
        setProjectsData(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
        setProjectsData(projectsFallbackData);
      }
    };

    fetchProjectsData();
  }, []);

  // Add wheel event listeners
  useEffect(() => {
    const categoryContainer = categoryScrollRef.current;
    const projectContainer = projectScrollRef.current;

    if (categoryContainer) {
      checkScroll(categoryContainer);
      const handleCategoryWheel = (e: WheelEvent) => categoryContainer;
      const handleCategoryScroll = () => checkScroll(categoryContainer);

      categoryContainer.addEventListener("wheel", handleCategoryWheel, {
        passive: false,
      });
      categoryContainer.addEventListener("scroll", handleCategoryScroll);
      window.addEventListener("resize", handleCategoryScroll);

      return () => {
        categoryContainer.removeEventListener("wheel", handleCategoryWheel);
        categoryContainer.removeEventListener("scroll", handleCategoryScroll);
        window.removeEventListener("resize", handleCategoryScroll);
      };
    }
  }, [projectsData]);

  useEffect(() => {
    const projectContainer = projectScrollRef.current;

    if (projectContainer) {
      checkScroll(projectContainer, true);
      const handleProjectWheel = (e: WheelEvent) => projectContainer;
      const handleProjectScroll = () => checkScroll(projectContainer, true);

      projectContainer.addEventListener("wheel", handleProjectWheel, {
        passive: false,
      });
      projectContainer.addEventListener("scroll", handleProjectScroll);
      window.addEventListener("resize", handleProjectScroll);

      return () => {
        projectContainer.removeEventListener("wheel", handleProjectWheel);
        projectContainer.removeEventListener("scroll", handleProjectScroll);
        window.removeEventListener("resize", handleProjectScroll);
      };
    }
  }, [projectsData, selectedCategory]);
  const data = projectsData || projectsFallbackData;
  const currentProject = data.projects[activeProject];
  const categories = getCategories(data);

  // Get filtered projects based on selected category
  const getFilteredProjects = () => {
    return Object.entries(data.projects).filter(([_, project]) => {
      if (!selectedCategory) return true;
      return project.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Category Navigation */}
      <div className="bg-white sticky top-[93px] z-40 border-b">
        <div className="container mx-auto px-4 relative">
          {/* Category Scroll Area */}
          <div className="relative">
            {/* Left Scroll Indicator */}
            {showLeftScroll && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full flex items-center">
                <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white via-white/70 to-transparent" />
                <button
                  onClick={() => handleScroll("left", categoryScrollRef)}
                  className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors relative z-20"
                >
                  <ChevronLeft className="w-6 h-6 text-emerald-700" />
                </button>
              </div>
            )}

            {/* Right Scroll Indicator */}
            {showRightScroll && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full flex items-center">
                <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white via-white/70 to-transparent" />
                <button
                  onClick={() => handleScroll("right", categoryScrollRef)}
                  className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors relative z-20"
                >
                  <ChevronRight className="w-6 h-6 text-emerald-700" />
                </button>
              </div>
            )}

            {/* Category Scroll Container */}
            <div
              ref={categoryScrollRef}
              className="flex overflow-x-auto gap-4 py-4 scrollbar-none relative"
            >
              {/* "Alle anzeigen" Button */}
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setActiveProject("klinikum");
                }}
                className={`px-6 py-2 rounded-sm whitespace-nowrap transition-colors flex-shrink-0
                  ${
                    !selectedCategory
                      ? "bg-emerald-700 text-white"
                      : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                  }`}
              >
                Alle anzeigen
              </button>
              {/* Category Buttons */}
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    const projectsOfCategory = Object.entries(
                      data.projects
                    ).find(([_, project]) => project.category === category);
                    if (projectsOfCategory) {
                      setActiveProject(projectsOfCategory[0] as ProjectKey);
                    }
                  }}
                  className={`px-6 py-2 rounded-sm whitespace-nowrap transition-colors flex-shrink-0
                    ${
                      selectedCategory === category
                        ? "bg-emerald-700 text-white"
                        : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Project Selection */}
          {filteredProjects.length > 0 && (
            <div className="relative border-t">
              {/* Left Scroll Indicator */}
              {showProjectLeftScroll && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full flex items-center">
                  <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white via-white/70 to-transparent" />
                  <button
                    onClick={() => handleScroll("left", projectScrollRef)}
                    className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors relative z-20"
                  >
                    <ChevronLeft className="w-6 h-6 text-emerald-700" />
                  </button>
                </div>
              )}

              {/* Right Scroll Indicator */}
              {showProjectRightScroll && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full flex items-center">
                  <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white via-white/70 to-transparent" />
                  <button
                    onClick={() => handleScroll("right", projectScrollRef)}
                    className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors relative z-20"
                  >
                    <ChevronRight className="w-6 h-6 text-emerald-700" />
                  </button>
                </div>
              )}

              {/* Project Navigation Container */}
              <div
                ref={projectScrollRef}
                className="flex overflow-x-auto gap-4 py-4 scrollbar-none relative"
              >
                {filteredProjects.map(([key, project]) => (
                  <button
                    key={key}
                    onClick={() => setActiveProject(key as ProjectKey)}
                    className={`px-6 py-2 rounded-sm whitespace-nowrap transition-colors flex-shrink-0
                      ${
                        activeProject === key
                          ? "bg-emerald-700 text-white"
                          : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                      }`}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Top section with text and image slider */}
        <div className="flex items-center mt-12 mb-24">
          {/* Left column - Text content */}
          <div className="w-1/2 justify-center border-l-4 border-emerald-700 pl-6">
            <div className="flex gap-2 mb-4">
              <Badge variant="outline" className="capitalize">
                {currentProject.category}
              </Badge>
              <Badge variant="outline">{currentProject.projectType}</Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                {currentProject.status}
              </Badge>
            </div>
            <h2 className="text-6xl font-light text-emerald-700 mb-6">
              {currentProject.title}
            </h2>
            <p className="text-2xl font-light text-gray-600 leading-relaxed">
              {currentProject.description}
            </p>
            <CustomButton
              text="Beratungsgespräch anfordern"
              href="/contact"
              iconSize={24}
              size="lg"
              className="bg-emerald-700 mt-8"
            />
          </div>

          {/* Right column - Image slider */}
          <div className="h-[400px] w-1/2">
            <ImageSlider images={currentProject.images} />
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto py-8 px-12 sm:py-12 md:py-16 lg:py-20 bg-emerald-700 bg-opacity-20">
          {/* Technical Data */}
          <Card className="bg-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Settings className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-medium text-emerald-700">
                  Technische Daten
                </h4>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xl font-medium text-emerald-700 mb-2">
                    Anlagentyp
                  </p>
                  <p className="text-gray-700">
                    {currentProject.technicalData.type}
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium text-emerald-700 mb-2">
                    Leistung
                  </p>
                  <p className="text-gray-700">
                    {currentProject.technicalData.powerOutput}
                  </p>
                </div>
                {currentProject.technicalData.additionalMetrics.map(
                  (metric, index) => (
                    <div key={index}>
                      <p className="text-xl font-medium text-emerald-700 mb-2">
                        {metric.label}
                      </p>
                      <p className="text-gray-700">{metric.value}</p>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Scope */}
          <Card className="bg-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <ListChecks className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-medium text-emerald-700">
                  Leistungsumfang
                </h4>
              </div>
              <ul className="space-y-2">
                {currentProject.scope.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Features & Results */}
          <Card className="bg-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Trophy className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-medium text-emerald-700">
                  Besonderheiten & Ergebnisse
                </h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-medium text-emerald-700 mb-2">
                    Spezielle Features
                  </p>
                  <ul className="space-y-2">
                    {currentProject.specialFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xl font-medium text-emerald-700 mb-2">
                    Ergebnisse
                  </p>
                  <ul className="space-y-2">
                    {currentProject.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
