"use client";

import Layout from "../components/layout";
import DynamicHero2 from "@/components/sections/hero-section";
import InfoSection from "@/components/sections/info-section";
import AboutSection from "@/components/sections/about-section";
import ProjectSection from "@/components/sections/project-section";
import FocusSection from "@/components/sections/focus-section";
import ContactSection from "@/components/sections/contact-section";

export default function LandingPage() {
  const handleSchwerpunkteClick = () => {
    console.log("Schwerpunkte button clicked");
    // Add your Schwerpunkte button click logic here
  };

  const handleProjectsClick = () => {
    console.log("Projekte button clicked");
    // Add your Projekte button click logic here
  };

  return (
    <Layout>
      <DynamicHero2 />

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
          href: "/schwerpunkte",
          onClick: handleSchwerpunkteClick,
        }}
        rightButtonProps={{
          name: "Projekte",
          href: "/projekte",
          onClick: handleProjectsClick,
        }}
      />

      <AboutSection />
      <FocusSection />
      <ProjectSection />
      <ContactSection />
    </Layout>
  );
}
