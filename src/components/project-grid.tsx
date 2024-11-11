"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  Zap,
  Wrench,
  LineChart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  _id: string;
  title: string;
  category: string;
  status: string;
  location: {
    city: string;
  };
  shortDescription: string;
  technicalData: {
    type: string;
    powerOutput?: string;
    additionalMetrics?: Array<{
      label: string;
      value: string;
    }>;
  };
  scope: string[];
  specialFeatures?: string[];
  results?: string[];
  imagePath: string;
}

const categories = [
  { id: "all", label: "Alle Projekte", icon: Building2 },
  { id: "bhkw", label: "BHKW", icon: Zap },
  { id: "heating", label: "Heizung", icon: Wrench },
  { id: "renewable", label: "Erneuerbare", icon: Calendar },
  { id: "study", label: "Studien", icon: LineChart },
];

export default function Component({ projects = [] }: { projects?: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProjectIndices, setActiveProjectIndices] = useState<
    Record<string, number>
  >({});
  const navRef = useRef<HTMLDivElement>(null);

  const groupedProjects = categories.reduce(
    (acc, category) => {
      acc[category.id] = projects.filter((project) =>
        category.id === "all" ? true : project.category === category.id
      );
      return acc;
    },
    {} as Record<string, Project[]>
  );

  const handleNextProject = (categoryId: string) => {
    setActiveProjectIndices((prev) => ({
      ...prev,
      [categoryId]: (prev[categoryId] + 1) % groupedProjects[categoryId].length,
    }));
  };

  const handlePrevProject = (categoryId: string) => {
    setActiveProjectIndices((prev) => ({
      ...prev,
      [categoryId]:
        (prev[categoryId] - 1 + groupedProjects[categoryId].length) %
        groupedProjects[categoryId].length,
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > navRef.current.offsetTop) {
          navRef.current.classList.add(
            "sticky",
            "top-0",
            "z-10",
            "bg-white",
            "shadow-md"
          );
        } else {
          navRef.current.classList.remove(
            "sticky",
            "top-0",
            "z-10",
            "bg-white",
            "shadow-md"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full space-y-12">
      <div ref={navRef} className="py-4 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {categories.map((category) => {
        const categoryProjects = groupedProjects[category.id];
        const activeIndex = activeProjectIndices[category.id] || 0;
        const activeProject = categoryProjects[activeIndex];
        const Icon = category.icon;

        if (category.id !== activeCategory && category.id !== "all") {
          return null;
        }

        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-emerald-700 shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-emerald-50 p-2 rounded-full">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-emerald-700 ml-3">
                {category.label}
              </h3>
            </div>

            {activeProject && (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative aspect-video w-full md:w-1/2">
                  <Image
                    src={activeProject.imagePath}
                    alt={activeProject.title}
                    fill
                    className="object-cover rounded-md"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-sm rounded">
                    {activeProject.status === "completed"
                      ? "Abgeschlossen"
                      : activeProject.status === "ongoing"
                        ? "In Bearbeitung"
                        : "Geplant"}
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <h4 className="text-xl font-semibold">
                    {activeProject.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{activeProject.location.city}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>{activeProject.technicalData.type}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {activeProject.shortDescription}
                  </p>
                  <div className="space-y-4">
                    {activeProject.technicalData.powerOutput && (
                      <div>
                        <h5 className="font-semibold">Leistung</h5>
                        <p className="text-muted-foreground">
                          {activeProject.technicalData.powerOutput}
                        </p>
                      </div>
                    )}
                    {activeProject.technicalData.additionalMetrics &&
                      activeProject.technicalData.additionalMetrics.length >
                        0 && (
                        <div>
                          <h5 className="font-semibold">
                            Zusätzliche Metriken
                          </h5>
                          <ul className="list-disc list-inside space-y-1">
                            {activeProject.technicalData.additionalMetrics.map(
                              (metric, idx) => (
                                <li key={idx} className="text-muted-foreground">
                                  {metric.label}: {metric.value}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    {activeProject.scope.length > 0 && (
                      <div>
                        <h5 className="font-semibold">Leistungsumfang</h5>
                        <ul className="list-disc list-inside space-y-1">
                          {activeProject.scope.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activeProject.specialFeatures &&
                      activeProject.specialFeatures.length > 0 && (
                        <div>
                          <h5 className="font-semibold">Besonderheiten</h5>
                          <ul className="list-disc list-inside space-y-1">
                            {activeProject.specialFeatures.map(
                              (feature, idx) => (
                                <li key={idx} className="text-muted-foreground">
                                  {feature}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    {activeProject.results &&
                      activeProject.results.length > 0 && (
                        <div>
                          <h5 className="font-semibold">Ergebnisse</h5>
                          <ul className="list-disc list-inside space-y-1">
                            {activeProject.results.map((result, idx) => (
                              <li key={idx} className="text-muted-foreground">
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-4">
              <Button
                onClick={() => handlePrevProject(category.id)}
                variant="outline"
                size="icon"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => handleNextProject(category.id)}
                variant="outline"
                size="icon"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
