"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  CloudLightning,
  Factory,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";
import CustomButton from "../ui/custom-button";
import {
  projectsFallbackData,
  type Project,
} from "@/app/constants/data/projects-fallback-data";
import CarouselAccordion from "../ui/carousel-accordion";

const ProjectSection = () => {
  const projects = Object.values(projectsFallbackData.projects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const getNextIndex = (currentIndex: number) => {
    return (currentIndex + 1) % projects.length;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-sm border border-emerald-700 flex flex-col h-[600px]">
      {/* Image section with fixed height */}
      <div className="h-48 relative">
        <Image
          src={project.images[0] || "/pipes.jpg"}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          priority
        />
      </div>

      {/* Content section with flex-grow to fill remaining space */}
      <div className="flex flex-col flex-grow p-6">
        {/* Header section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-emerald-800 mb-3 line-clamp-2">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-emerald-600">
            <Building size={20} className="flex-shrink-0" />
            <span className="line-clamp-2 text-sm">
              {project.shortDescription}
            </span>
          </div>
        </div>

        {/* Technical details section */}
        <div className="space-y-3 flex-grow">
          <div className="p-3 bg-emerald-50 rounded-sm">
            <div className="flex items-center gap-2 mb-1">
              <CloudLightning className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="font-semibold text-sm">
                Elektrische Leistung
              </span>
            </div>
            <div className="text-gray-600 text-sm line-clamp-1">
              {project.technicalData.powerOutput}
            </div>
          </div>

          <div className="p-3 bg-emerald-50 rounded-sm">
            <div className="flex items-center gap-2 mb-1">
              <Factory className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="font-semibold text-sm">Anlagentyp</span>
            </div>
            <div className="text-gray-600 text-sm line-clamp-1">
              {project.technicalData.type}
            </div>
          </div>

          {project.specialFeatures.length > 0 && (
            <div className="p-3 bg-emerald-50 rounded-sm">
              <div className="text-gray-600 text-sm line-clamp-2">
                {project.specialFeatures[0]}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Introduction section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="border-l-4 border-emerald-700 pl-6">
              <h2 className="text-6xl font-light text-emerald-700 mb-8">
                {projectsFallbackData.projectsPage.headline}
              </h2>
              <p className="text-2xl font-light text-gray-700 leading-relaxed">
                SEC Energieconsulting steht für über zwei Jahrzehnte
                erfolgreiche Projektrealisierung im Energiesektor. Von
                Blockheizkraftwerken über Holzfeuerungsanlagen bis hin zu
                innovativen Nahwärmekonzepten - unsere Referenzprojekte zeigen
                die ganze Bandbreite unserer technischen Expertise und
                Planungskompetenz. Wir haben zahlreiche maßgeschneiderte
                Energielösungen für Kliniken, Verwaltungsgebäude und
                Wohnquartiere entwickelt und umgesetzt.
              </p>
              <div className="mt-8">
                <CustomButton
                  text="Detaillierte Projetübersicht"
                  href="/about"
                  iconSize={24}
                  size="lg"
                  className="bg-emerald-700"
                />
              </div>
            </div>
          </motion.div>

          <CarouselAccordion />

          {/* <div className="absolute inset-y-0 left-36 right-36 flex justify-between items-center pointer-events-none">
            <button
              onClick={prevProject}
              className="p-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 z-30 transition-colors pointer-events-auto"
              aria-label="Vorheriges Projekt"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="p-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 z-30 transition-colors pointer-events-auto"
              aria-label="Nächstes Projekt"
            >
              <ChevronRight size={24} />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
