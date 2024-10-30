"use client";

import { useEffect } from "react";
import Layout from "../components/layout";
import DynamicHero from "@/components/sections/hero-section";
import InfoSection from "@/components/sections/info-section";
import AboutSection from "@/components/sections/about-section";
import ProjectSection from "@/components/sections/project-section";
import FocusSection from "@/components/sections/focus-section";
import ContactSection from "@/components/sections/contact-section";
import WaermecontractingPage from "./wärmecontracting/page";
import CaseStudySection from "@/components/casestudies";

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
    <Layout>
      <DynamicHero />
      <section id="info">
        <InfoSection
          onSchwerpunkteClick={() => smoothScroll("#schwerpunkte")}
          onProjekteClick={() => smoothScroll("#projekte")}
        />
      </section>

      <section id="about">
        <AboutSection onContactClick={() => smoothScroll("#kontakt")} />
      </section>
      <section id="schwerpunkte">
        <FocusSection />
      </section>
      <section id="projekte">
        <ProjectSection />
      </section>
      <section id="kontakt">
        <ContactSection />
      </section>
      <section id="waerme">
        <WaermecontractingPage />
      </section>
      <section id="fallbeospiele">
        <CaseStudySection />
      </section>
    </Layout>
  );
}
