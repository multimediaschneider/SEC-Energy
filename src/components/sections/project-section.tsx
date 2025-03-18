"use client";

import React from "react";
import { projectsFallbackData } from "@/app/constants/data/projects-fallback-data";
import TextBlock from "../ui/text-block";
import CustomButton from "../ui/custom-button";
import Container from "../ui/container";
import CarouselAccordion from "../ui/carousel-accordion";
import { GridLayout } from "../layouts/grid-layout";

const ProjectSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <Container>
        {/* Headline and Introduction with overflow control - at the top */}
        <div className="mb-8 overflow-hidden">
          <div className="pl-6">
            <TextBlock
              headline={projectsFallbackData.projectsPage.headline}
              introduction="SEC Energieconsulting steht für über zwei Jahrzehnte erfolgreiche Projektrealisierung im Energiesektor. Von Blockheizkraftwerken über Holzfeuerungsanlagen bis hin zu innovativen Nahwärmekonzepten - unsere Referenzprojekte zeigen die ganze Bandbreite unserer technischen Expertise und Planungskompetenz."
              headlineSize="lg"
              textSize="lg"
              verticalSpacing="lg"
              horizontalSpacing="md"
            />

            {/* Button in a properly constrained container */}
            <div className="mt-8 mb-12 w-fit">
              <CustomButton
                text="Detaillierte Projektübersicht"
                href="/projekte"
                iconSize={24}
                size="lg"
                className="bg-emerald-700"
              />
            </div>
          </div>
        </div>

        <GridLayout>
          {/* Carousel section - below the text */}
          <div className="w-full relative flex items-center justify-center">
            <CarouselAccordion />
          </div>
        </GridLayout>
      </Container>
    </section>
  );
};

export default ProjectSection;
