"use client";

import TextLeft from "../components/content/text-left";
import Layout from "../components/layout";
import ImageText from "../components/content/image-text";
import DynamicHero2 from "@/components/sections/dynamichero2";
import TextBlock from "../components/content/textblock";
import AboutSection from "@/components/sections/about-section";
import ProjectSection from "@/components/sections/project-section";
import FocusSection from "@/components/sections/focus-section";
import ImageTextTwo from "@/components/content/image-text2";
import { ContactSection } from "@/components/sections/contact-section";

export default function LandingPage() {
  const handleSchwerpunkteClick = () => {
    console.log("Schwerpunkte button clicked");
    // Add your Schwerpunkte button click logic here
  };

  const handleContactClick = () => {
    console.log("Contact button clicked");
    // Add your contact button click logic here
  };

  return (
    <Layout>
      <div className="pt-6">
        <DynamicHero2 />
      </div>

      <div className="bg-gray-200 pt-6">
        <TextLeft>
          Wir begleiten Sie umfassend bei Ihren Überlegungen, Planungen und
          Projekten für eine nachhaltige Wärmeversorgung. Durch unsere
          Unterstützung mindern Sie Projekt- und Finanzrisiken und sichern sich
          den Erfolg Ihrer Wärmevorhaben. Sprechen Sie uns an.
        </TextLeft>
        <div className="w-4/5 mx-auto my-8">
          <div className="flex justify-between items-center flex-wrap">
            <TextBlock
              contents={[
                "Technische Gebäudeausrüstung",
                "Dekarbonisierungsstrategien",
                "Contractingberatung",
                "Wirtschaftlichkeitsberechnungen",
                "Smart Metering und Ablesesysteme",
              ]}
              buttonProps={{
                name: "Schwerpunkte", // name statt text, wie in Ihrem Original
                href: "/schwerpunkte",
                variant: "default",
                className: "",
                onClick: handleSchwerpunkteClick,
              }}
            />
            <TextBlock
              contents={[
                "Zu unseren Kunden zählen Unternehmen aus der Wohnungswirtschaft, Energieversorgung, Contracting und der Industrie. Für sie haben wir zahlreiche Projekte erfolgreich realisiert.",
              ]}
              buttonProps={{
                name: "Projekte", // name statt text, wie in Ihrem Original
                href: "/projekte",
                variant: "default",
                className: "",
                onClick: handleSchwerpunkteClick,
              }}
            />
          </div>
        </div>
      </div>

      <AboutSection />
      <FocusSection />
      <ProjectSection />
      <ContactSection />
    </Layout>
  );
}
