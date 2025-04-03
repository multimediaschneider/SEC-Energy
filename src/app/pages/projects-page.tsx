"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
  Building2,
  Target,
  Network,
  Shield,
  MapPin,
  Clock,
  CheckCircle2,
  Settings,
  ListChecks,
  Trophy,
  ChevronDown,
  Plus,
  ChevronUp,
  Zap,
  Wrench,
  Calendar,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/client";
import ProjectCard from "@/components/ui/project-card";
import { ExpertiseCard } from "@/components/ui/base-card";
import { cn } from "@/lib/utils";

import {
  projectsFallbackData,
  type ProjectsData,
} from "@/app/constants/data/projects-fallback-data";
import ContactSection from "@/components/sections/contact-section";
import Container from "@/components/ui/container";
import TextBlock from "@/components/ui/text-block";
import CustomButton from "@/components/ui/custom-button";

type ProjectKey = keyof typeof projectsFallbackData.projects;

// Category for filtering
interface CategoryOption {
  id: string;
  label: string;
  icon: React.ElementType;
}

// Desktop Category Navigation
const CategoryNavDesktop = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: CategoryOption[];
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
}) => {
  return (
    <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Button
            key={category.id}
            onClick={() =>
              setSelectedCategory(category.id === "all" ? null : category.id)
            }
            variant={
              selectedCategory === category.id ||
              (category.id === "all" && !selectedCategory)
                ? "primary"
                : "outline"
            }
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <Icon className="w-4 h-4" />
            {category.label}
          </Button>
        );
      })}
    </div>
  );
};

// Mobile Category Navigation - Dropdown style
const CategoryNavMobile = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: CategoryOption[];
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Get current selected category label
  const currentCategory = categories.find(
    (c) => c.id === selectedCategory || (c.id === "all" && !selectedCategory)
  );

  return (
    <div className="relative w-full mb-6">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="w-full flex justify-between items-center p-4"
      >
        <div className="flex items-center gap-2">
          {currentCategory && (
            <>
              {React.createElement(currentCategory.icon, {
                className: "w-4 h-4",
              })}
              <span>{currentCategory.label}</span>
            </>
          )}
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform",
            isOpen && "transform rotate-180"
          )}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute z-30 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden"
          >
            <div className="py-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const isSelected =
                  category.id === selectedCategory ||
                  (category.id === "all" && !selectedCategory);

                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(
                        category.id === "all" ? null : category.id
                      );
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 flex items-center gap-2",
                      isSelected
                        ? "bg-primary-50 text-primary-700"
                        : "hover:bg-gray-50"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile Project Details
const MobileProjectDetails = ({
  project,
  isVisible,
  onClose,
}: {
  project: any;
  isVisible: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed inset-0 bg-gray-900/50 z-50 flex items-end justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "90vh" }}
            exit={{ height: 0 }}
            className="bg-white w-full rounded-t-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="p-1"
                onClick={onClose}
              >
                <ChevronDown className="w-6 h-6" />
              </Button>
            </div>

            <div className="overflow-auto h-full pb-20">
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={project.images?.[0] || "/pipes.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="capitalize">
                    {project.category}
                  </Badge>
                  <Badge variant="outline">{project.projectType}</Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {project.status}
                  </Badge>
                </div>

                <div className="text-rose-600 font-medium mb-2">
                  {project.location.city}
                </div>

                <p className="text-gray-700 mb-6">{project.description}</p>

                {/* Details in cards */}
                <div className="space-y-4">
                  {/* Technical Data */}
                  <Card className="bg-primary-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary-100 p-2 rounded-full">
                          <Settings className="w-5 h-5 text-primary-600" />
                        </div>
                        <h4 className="text-lg font-medium text-primary-700">
                          Technische Daten
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-base font-medium text-primary-700 mb-1">
                            Anlagentyp
                          </p>
                          <p className="text-gray-700">
                            {project.technicalData.type}
                          </p>
                        </div>
                        {project.technicalData.powerOutput && (
                          <div>
                            <p className="text-base font-medium text-primary-700 mb-1">
                              Leistung
                            </p>
                            <p className="text-gray-700">
                              {project.technicalData.powerOutput}
                            </p>
                          </div>
                        )}
                        {project.technicalData.additionalMetrics &&
                          project.technicalData.additionalMetrics.map(
                            (metric: any, index: number) => (
                              <div key={index}>
                                <p className="text-base font-medium text-primary-700 mb-1">
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
                  <Card className="bg-primary-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary-100 p-2 rounded-full">
                          <ListChecks className="w-5 h-5 text-primary-600" />
                        </div>
                        <h4 className="text-lg font-medium text-primary-700">
                          Leistungsumfang
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {project.scope.map((item: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Features & Results */}
                  <Card className="bg-primary-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary-100 p-2 rounded-full">
                          <Trophy className="w-5 h-5 text-primary-600" />
                        </div>
                        <h4 className="text-lg font-medium text-primary-700">
                          Besonderheiten & Ergebnisse
                        </h4>
                      </div>

                      {project.specialFeatures &&
                        project.specialFeatures.length > 0 && (
                          <div className="mb-4">
                            <p className="text-base font-medium text-primary-700 mb-2">
                              Spezielle Features
                            </p>
                            <ul className="space-y-2">
                              {project.specialFeatures.map(
                                (feature: string, index: number) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-2 text-gray-700"
                                  >
                                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                      {project.results && project.results.length > 0 && (
                        <div>
                          <p className="text-base font-medium text-primary-700 mb-2">
                            Ergebnisse
                          </p>
                          <ul className="space-y-2">
                            {project.results.map(
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
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function ProjectsPage() {
  const [projectsData, setProjectsData] =
    useState<ProjectsData>(projectsFallbackData);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [visibleProjectCount, setVisibleProjectCount] = useState(6);
  const [windowWidth, setWindowWidth] = useState(0);

  const searchParams = useSearchParams();
  const detailsRef = useRef<HTMLDivElement>(null);

  // Update window width on client side
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if we should use mobile layout
  const isMobile = windowWidth < 768;

  // Fetch projects data from Sanity
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

  // Handle URL query params for direct project selection
  useEffect(() => {
    const projectParam = searchParams.get("project");
    if (
      projectParam &&
      Object.keys(projectsData.projects).includes(projectParam)
    ) {
      setActiveProject(projectParam as ProjectKey);
      setShowDetails(true);

      // Get the category of the project to set the filter
      const projectCategory =
        projectsData.projects[projectParam as ProjectKey].category;
      setSelectedCategory(projectCategory);

      // Scroll to details when they're available
      if (isMobile) {
        // For mobile, we show a modal
      } else if (detailsRef.current) {
        setTimeout(() => {
          detailsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [searchParams, projectsData.projects, isMobile]);

  // Categories for filtering
  const categories: CategoryOption[] = [
    { id: "all", label: "Alle Projekte", icon: Building2 },
    { id: "bhkw", label: "BHKW", icon: Zap },
    { id: "heating", label: "Heizung", icon: Wrench },
    { id: "renewable", label: "Erneuerbare", icon: Calendar },
    { id: "study", label: "Studien", icon: LineChart },
  ];

  // Get filtered projects based on selected category
  const filteredProjects = Object.entries(projectsData.projects)
    .filter(([_, project]) => {
      if (!selectedCategory) return true;
      return project.category === selectedCategory;
    })
    .map(([key, project]) => ({ key, ...project }));

  // Get current project details if selected
  const currentProject = activeProject
    ? projectsData.projects[activeProject]
    : null;

  // Load more projects (for mobile)
  const loadMoreProjects = () => {
    setVisibleProjectCount((prev) =>
      Math.min(prev + 6, filteredProjects.length)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 flex items-center justify-center bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800">
        {/* Animated blur circles */}
        <div className="absolute inset-0">
          <div className="blur-container">
            <div className="blur-circle blur-circle-1" />
            <div className="blur-circle blur-circle-2" />
            <div className="blur-circle blur-circle-3" />
            <div className="blur-circle blur-circle-4" />
          </div>
        </div>

        <Container>
          <div className="text-center text-white z-10 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-light mb-6"
            >
              {projectsData.projectsPage.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl font-light max-w-3xl mx-auto"
            >
              SEC Energieconsulting steht für über zwei Jahrzehnte erfolgreiche
              Projektrealisierung im Energiesektor. Von Blockheizkraftwerken
              über Holzfeuerungsanlagen bis hin zu innovativen Nahwärmekonzepten
              - unsere Referenzprojekte zeigen die ganze Bandbreite unserer
              technischen Expertise und Planungskompetenz.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Filter Navigation */}
      <div className="sticky top-[93px] z-40 bg-white border-b">
        <Container>
          {isMobile ? (
            <CategoryNavMobile
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ) : (
            <CategoryNavDesktop
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        </Container>
      </div>

      {/* Projects Grid Section */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProjects
              .slice(
                0,
                isMobile ? visibleProjectCount : filteredProjects.length
              )
              .map((project, index) => (
                <div key={project.key} className="h-full">
                  <ProjectCard
                    project={project}
                    index={0} /* Set to 0 for consistent animation */
                    isActive={activeProject === project.key}
                    onClick={() => {
                      setActiveProject(project.key as ProjectKey);
                      setShowDetails(true);
                    }}
                  />
                </div>
              ))}
          </div>

          {/* Load more button for mobile */}
          {isMobile && visibleProjectCount < filteredProjects.length && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={loadMoreProjects}
                variant="outline"
                className="flex items-center gap-2 px-6"
              >
                Mehr anzeigen
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Project Detail Section - Only for Desktop */}
      {!isMobile && showDetails && currentProject && (
        <motion.section
          ref={detailsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="py-16 bg-primary-50"
        >
          <Container>
            <div className="flex flex-col">
              <div className="flex justify-end mb-4">
                <Button
                  variant="ghost"
                  className="hover:bg-primary-100"
                  onClick={() => setShowDetails(false)}
                >
                  Schließen
                </Button>
              </div>

              {/* Project Header with Icon, Image, and Description */}
              <div className="flex flex-col items-center mb-16">
                {/* Icon Circle above Image */}
                <div className="mb-6 flex justify-center">
                  <div className="h-20 w-20 rounded-full bg-primary-700 shadow-lg flex items-center justify-center z-10">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Background image with overlay */}
                <div className="w-full relative h-64 md:h-72 rounded-xl overflow-hidden shadow-lg mb-8">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700/70 to-primary-700/30 z-10" />

                  {/* Background image */}
                  <Image
                    src={currentProject.images?.[0] || "/pipes.jpg"}
                    alt={currentProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />

                  {/* Content overlay using flexbox for centering */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                    <div className="text-white text-center p-6">
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="capitalize bg-white/20 text-white"
                        >
                          {currentProject.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-white/20 text-white"
                        >
                          {currentProject.projectType}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1 bg-white/30 text-white"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          {currentProject.status}
                        </Badge>
                      </div>

                      <h2 className="text-4xl font-light text-white mb-6 max-w-3xl drop-shadow-lg">
                        {currentProject.title}
                      </h2>

                      <p className="text-xl font-light text-white/90 max-w-3xl drop-shadow-lg">
                        {currentProject.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Full Description */}
                <div className="mb-8 max-w-4xl text-center">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {currentProject.description}
                  </p>
                  <CustomButton
                    text="Beratungsgespräch anfordern"
                    href="/kontakt"
                    iconSize={20}
                    size="lg"
                    variant="primary"
                    className="mt-8"
                  />
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Technical Data */}
                <Card className="bg-primary-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary-100 p-3 rounded-full">
                        <Settings className="w-6 h-6 text-primary-600" />
                      </div>
                      <h4 className="text-xl font-medium text-primary-700">
                        Technische Daten
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-lg font-medium text-primary-700 mb-2">
                          Anlagentyp
                        </p>
                        <p className="text-gray-700">
                          {currentProject.technicalData.type}
                        </p>
                      </div>
                      {currentProject.technicalData.powerOutput && (
                        <div>
                          <p className="text-lg font-medium text-primary-700 mb-2">
                            Leistung
                          </p>
                          <p className="text-gray-700">
                            {currentProject.technicalData.powerOutput}
                          </p>
                        </div>
                      )}
                      {currentProject.technicalData.additionalMetrics &&
                        currentProject.technicalData.additionalMetrics.map(
                          (metric, index) => (
                            <div key={index}>
                              <p className="text-lg font-medium text-primary-700 mb-2">
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
                <Card className="bg-primary-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary-100 p-3 rounded-full">
                        <ListChecks className="w-6 h-6 text-primary-600" />
                      </div>
                      <h4 className="text-xl font-medium text-primary-700">
                        Leistungsumfang
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {currentProject.scope.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Features & Results */}
                <Card className="bg-primary-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary-100 p-3 rounded-full">
                        <Trophy className="w-6 h-6 text-primary-600" />
                      </div>
                      <h4 className="text-xl font-medium text-primary-700">
                        Besonderheiten & Ergebnisse
                      </h4>
                    </div>

                    {currentProject.specialFeatures &&
                      currentProject.specialFeatures.length > 0 && (
                        <div className="mb-4">
                          <p className="text-lg font-medium text-primary-700 mb-2">
                            Spezielle Features
                          </p>
                          <ul className="space-y-2">
                            {currentProject.specialFeatures.map(
                              (feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2 text-gray-700"
                                >
                                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                                  <span>{feature}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                    {currentProject.results &&
                      currentProject.results.length > 0 && (
                        <div>
                          <p className="text-lg font-medium text-primary-700 mb-2">
                            Ergebnisse
                          </p>
                          <ul className="space-y-2">
                            {currentProject.results.map((result, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 text-gray-700"
                              >
                                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </motion.section>
      )}

      {/* Mobile Project Detail Modal */}
      {isMobile && currentProject && (
        <MobileProjectDetails
          project={currentProject}
          isVisible={showDetails}
          onClose={() => setShowDetails(false)}
        />
      )}

      {/* Contact Section */}
      <ContactSection currentPage="projekte" />
    </div>
  );
}
