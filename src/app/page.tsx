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
      
      // Skip handling if inside the project section
      const isInsideProjectSection = (e.target as HTMLElement).closest('#projekte');
      if (isInsideProjectSection) {
        return;
      }
      
      // Only handle hash links for smooth scrolling
      if (target && target.hash && target.pathname === window.location.pathname) {
        e.preventDefault();
        smoothScroll(target.hash);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

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
    </PageLayout>
  );
}
