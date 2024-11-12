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
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Introduction section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative z-20"
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

          {/* Carousel section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2 relative min-h-[600px] flex items-center justify-center"
          >
            <CarouselAccordion />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
