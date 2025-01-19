"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
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
import Container from "../ui/container";

const ProjectSection = () => {
  const textBlockRef = useRef(null);

  // Add scroll animation for border
  const { scrollYProgress } = useScroll({
    target: textBlockRef,
    offset: ["start end", "end start"],
  });

  const borderHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Introduction section */}
          <div className="lg:w-1/2 relative z-20" ref={textBlockRef}>
            {/* Animated border */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-700"
              style={{ height: borderHeight }}
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pl-6"
            >
              <h2 className="text-5xl font-black text-emerald-700 mb-8">
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
            </motion.div>
          </div>
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
      </Container>
    </section>
  );
};

export default ProjectSection;
