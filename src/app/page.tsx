"use client";

import { useEffect } from "react";
import DynamicHero from "@/components/sections/hero-section";

import ProjectSection from "@/components/sections/project-section";
import ServicesSection from "@/components/sections/services-section";
import ExpertiseCompetenceSection from "@/components/sections/expertise-competence";
import ContactSection from "@/components/sections/contact-section";
import PageLayout from "../components/page-layout";
import { SectionContainer, ButtonContainer } from "@/components/ui/section-container";

export default function LandingPage() {
  useEffect(() => {
    const smoothScroll = (target: string) => {
      const element = document.querySelector(target);
      if (element) {
        const startPosition = window.pageYOffset;
        const targetPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const distance = targetPosition - startPosition - 100; // Subtract 100px to show the heading
        const duration = 1000;
        let start: number | null = null;

        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);

          const easeInOutCubic = (t: number) =>
            t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

          window.scrollTo(
            0,
            startPosition + distance * easeInOutCubic(percentage)
          );

          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.hash) {
        e.preventDefault();
        smoothScroll(target.hash);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleSchwerpunkteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScroll("#schwerpunkte");
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScroll("#projekte");
  };

  const smoothScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      const startPosition = window.pageYOffset;
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition - 100; // Subtract 100px to show the heading
      const duration = 1000;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        window.scrollTo(
          0,
          startPosition + distance * easeInOutCubic(percentage)
        );

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  return (
    <PageLayout>
      <DynamicHero />
      <ExpertiseCompetenceSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
      {/* Example of how to use the new SectionContainer for future sections 
      <SectionContainer id="example-section" bgColor="bg-gray-50">
        <TextBlock
          headline="Example Section"
          introduction="This is an example of how to use the new SectionContainer component."
          headlineSize="lg"
          textSize="lg"
          verticalSpacing="lg"
          horizontalSpacing="md"
        />
        <ButtonContainer>
          <CustomButton
            text="Primary Action"
            href="/example"
            iconSize={20}
            size="lg"
            variant="primary"
          />
        </ButtonContainer>
      </SectionContainer>
      */}
    </PageLayout>
  );
}
