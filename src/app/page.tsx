"use client";

import { useEffect } from "react";
import Layout from "../components/layout";
import DynamicHero2 from "@/components/sections/hero-section";
import InfoSection from "@/components/sections/info-section";
import AboutSection from "@/components/sections/about-section";
import ProjectSection from "@/components/sections/project-section";
import FocusSection from "@/components/sections/focus-section";
import ContactSection from "@/components/sections/contact-section";

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
      <DynamicHero2 />
      <section id="info">
        <InfoSection
          mainContent="Wir begleiten Sie umfassend bei Ihren Überlegungen, Planungen und Projekten für eine nachhaltige Wärmeversorgung. Durch unsere Unterstützung mindern Sie Projekt- und Finanzrisiken und sichern sich den Erfolg Ihrer Wärmevorhaben. Sprechen Sie uns an."
          leftContents={[
            "Technische Gebäudeausrüstung",
            "Dekarbonisierungsstrategien",
            "Contractingberatung",
            "Wirtschaftlichkeitsberechnungen",
            "Smart Metering und Ablesesysteme",
          ]}
          rightContents={[
            "Zu unseren Kunden zählen Unternehmen aus der Wohnungswirtschaft, Energieversorgung, Contracting und der Industrie. Für sie haben wir zahlreiche Projekte erfolgreich realisiert.",
          ]}
          leftButtonProps={{
            name: "Schwerpunkte",
            href: "#schwerpunkte",
            onClick: () => smoothScroll("#schwerpunkte"),
          }}
          rightButtonProps={{
            name: "Projekte",
            href: "#projekte",
            onClick: () => smoothScroll("#projekte"),
          }}
        />{" "}
      </section>

      <section id="about">
        <AboutSection />
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
    </Layout>
  );
}
