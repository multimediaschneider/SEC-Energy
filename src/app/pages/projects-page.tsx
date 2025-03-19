import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/client";
import ProjectCard from "@/components/ui/project-card";

import {
  projectsFallbackData,
  type ProjectsData,
} from "@/app/constants/data/projects-fallback-data";
import ContactSection from "@/components/sections/contact-section";
import Container from "@/components/ui/container";
import TextBlock from "@/components/ui/text-block";
import CustomButton from "@/components/ui/custom-button";

type ProjectKey = keyof typeof projectsFallbackData.projects;

export default function ProjectsPage() {
  const [projectsData, setProjectsData] =
    useState<ProjectsData>(projectsFallbackData);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectKey>("klinikum");
  const [showDetails, setShowDetails] = useState(false);

  // Reference for scrolling
  const detailsRef = useRef<HTMLDivElement>(null);

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

  // Get unique categories from the projects data
  const getCategories = () => {
    const categories = new Set<string>();
    Object.values(projectsData.projects).forEach((project) => {
      categories.add(project.category);
    });
    return Array.from(categories);
  };

  const categories = getCategories();

  // Get filtered projects based on selected category
  const getFilteredProjects = () => {
    return Object.entries(projectsData.projects).filter(([_, project]) => {
      if (!selectedCategory) return true;
      return project.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  };

  const filteredProjects = getFilteredProjects();
  const currentProject = projectsData.projects[activeProject];

  // Scroll to details when a project is clicked
  useEffect(() => {
    if (showDetails && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeProject, showDetails]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Base gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800"
          style={{
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
          }}
        />

        {/* Animated blur circles */}
        <div className="blur-container">
          <div className="blur-circle blur-circle-1" />
          <div className="blur-circle blur-circle-2" />
          <div className="blur-circle blur-circle-3" />
          <div className="blur-circle blur-circle-4" />
        </div>

        {/* White noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
          <div className="noise-texture" />
        </div>

        <Container>
          <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
            <div className="text-center text-emerald-50 z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-light mb-8 drop-shadow-lg"
              >
                {projectsData.projectsPage.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl font-light max-w-3xl mx-auto px-4 drop-shadow-lg"
              >
                {projectsData.projectsPage.introduction}
              </motion.p>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-[93px] z-40 bg-white border-b">
        <Container>
          <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={!selectedCategory ? "default" : "outline"}
              className={`whitespace-nowrap ${!selectedCategory ? "bg-emerald-700" : ""}`}
            >
              Alle Projekte
            </Button>

            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`whitespace-nowrap ${selectedCategory === category ? "bg-emerald-700" : ""}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </Container>
      </div>

      {/* Projects Grid Section */}
      <section className="py-12 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProjects.map(([key, project], index) => (
              <div key={key} className="h-full">
                <ProjectCard
                  project={project}
                  index={0} /* Set to 0 to avoid staggered animation */
                  isActive={activeProject === key}
                  onClick={() => {
                    setActiveProject(key as ProjectKey);
                    setShowDetails(true);
                  }}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Detail Section */}
      <AnimatePresence>
        {showDetails && (
          <motion.section
            ref={detailsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-12 bg-emerald-700 bg-opacity-10"
          >
            <Container>
              <div className="flex flex-col">
                <Button
                  variant="ghost"
                  className="self-end mb-4"
                  onClick={() => setShowDetails(false)}
                >
                  Schließen
                </Button>

                {/* Project Header */}
                <div className="flex flex-col md:flex-row gap-8 mb-10">
                  {/* Left column - Image */}
                  <div className="md:w-1/2 h-[300px] md:h-auto relative rounded-lg overflow-hidden">
                    <Image
                      src={currentProject.images?.[0] || "/pipes.jpg"}
                      alt={currentProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right column - Basic info */}
                  <div className="md:w-1/2 justify-center border-l-4 border-emerald-700 pl-6">
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline" className="capitalize">
                        {currentProject.category}
                      </Badge>
                      <Badge variant="outline">
                        {currentProject.projectType}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {currentProject.status}
                      </Badge>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-light text-emerald-700 mb-6">
                      {currentProject.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {currentProject.description}
                    </p>
                    <CustomButton
                      text="Beratungsgespräch anfordern"
                      href="/kontakt"
                      iconSize={24}
                      size="lg"
                      className="bg-emerald-700 mt-8"
                    />
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Technical Data */}
                  <Card className="bg-emerald-50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-emerald-100 p-3 rounded-full">
                          <Settings className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h4 className="text-xl font-medium text-emerald-700">
                          Technische Daten
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-lg font-medium text-emerald-700 mb-2">
                            Anlagentyp
                          </p>
                          <p className="text-gray-700">
                            {currentProject.technicalData.type}
                          </p>
                        </div>
                        {currentProject.technicalData.powerOutput && (
                          <div>
                            <p className="text-lg font-medium text-emerald-700 mb-2">
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
                                <p className="text-lg font-medium text-emerald-700 mb-2">
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
                        <h4 className="text-xl font-medium text-emerald-700">
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
                        <h4 className="text-xl font-medium text-emerald-700">
                          Besonderheiten & Ergebnisse
                        </h4>
                      </div>

                      {currentProject.specialFeatures &&
                        currentProject.specialFeatures.length > 0 && (
                          <div className="mb-4">
                            <p className="text-lg font-medium text-emerald-700 mb-2">
                              Spezielle Features
                            </p>
                            <ul className="space-y-2">
                              {currentProject.specialFeatures.map(
                                (feature, index) => (
                                  <li
                                    key={index}
                                    className="flex items-center gap-2 text-gray-700"
                                  >
                                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
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
                            <p className="text-lg font-medium text-emerald-700 mb-2">
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
                        )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Container>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
