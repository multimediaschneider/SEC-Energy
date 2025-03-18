"use client";

import React from "react";
import { projectsFallbackData } from "@/app/constants/data/projects-fallback-data";
import TextBlock from "../ui/text-block";
import CustomButton from "../ui/custom-button";
import Container from "../ui/container";
import CarouselAccordion from "../ui/carousel-accordion";

const ProjectSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Introduction section */}
          <div className="lg:w-1/2 relative pl-6 ">
            <TextBlock
              headline={projectsFallbackData.projectsPage.headline}
              introduction="SEC Energieconsulting steht für über zwei Jahrzehnte erfolgreiche Projektrealisierung im Energiesektor. Von Blockheizkraftwerken über Holzfeuerungsanlagen bis hin zu innovativen Nahwärmekonzepten - unsere Referenzprojekte zeigen die ganze Bandbreite unserer technischen Expertise und Planungskompetenz. Wir haben zahlreiche maßgeschneiderte Energielösungen für Kliniken, Verwaltungsgebäude und Wohnquartiere entwickelt und umgesetzt."
              headlineSize="lg"
              textSize="lg"
              verticalSpacing="lg"
              horizontalSpacing="md"
            />

            {/* Button is now rendered separately */}
            <div className="mt-8">
              <CustomButton
                text="Detaillierte Projetübersicht"
                href="/projekte"
                iconSize={24}
                size="lg"
                className="bg-emerald-700"
              />
            </div>
          </div>

          {/* Carousel section */}
          <div className="lg:w-1/2 w-full relative flex items-center justify-center">
            <CarouselAccordion />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
