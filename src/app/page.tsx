"use client";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import ImageSlider from "../components/image-slider";
import ContactMe from "../components/image-text";
import TextLeft from "../components/text-left";
import TextRightSmall from "../components/text-right-small";
import Layout from "../components/layout";
import ImageText from "../components/image-text";
import DynamicHero from "@/components/dynamichero";

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
      <DynamicHero />

      <TextLeft>
        Wir begleiten Sie umfassend bei Ihren Überlegungen, Planungen und
        Projekten für eine nachhaltige Wärmeversorgung.
      </TextLeft>

      <TextRightSmall
        contents={[
          "Machbarkeitsstudien",
          "Dimensionierung",
          "Technologieauswahl",
          "Wirtschaftlichkeitsberechnungen",
          "Contracting",
        ]}
        buttonText="Schwerpunkte"
        buttonAction={handleSchwerpunkteClick}
        buttonClassName="px-12 py-2 mt-4 text-xl font-normal text-white bg-blue-500 rounded-sm hover:bg-blue-600"
      />

      <ImageText
        title="SEC Energy"
        contentOne="Seit über 30 Jahren spezialisiert im Bereich Wärmecontracting."
        contentTwo="Durch unsere Unterstützung mindern Sie Projekt- und Finanzrisiken und sichern sich den Erfolg Ihrer Wärmevorhaben. Sprechen Sie uns an."
        imageSrc="/consulting.jpg"
        imageAlt="Dierk Schneider"
        buttonText="Kontakt"
        buttonAction={handleContactClick}
        buttonClassName="px-12 py-2 mt-4 text-xl font-normal text-white bg-blue-500 rounded-sm hover:bg-blue-600"
      />
    </Layout>
  );
}
