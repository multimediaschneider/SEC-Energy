"use client";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import ImageSlider from "../components/image-slider";
import ContactMe from "../components/contact";
import TextLeft from "../components/text-left";
import TextRightSmall from "../components/text-right-small";
import Layout from "../components/layout";

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
      <Navbar />
      <Hero />
      <ImageSlider />
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
        buttonText="Mehr erfahren"
        buttonAction={handleSchwerpunkteClick}
        buttonClassName="px-12 py-2 mt-4 text-xl font-normal text-white bg-blue-500 rounded-sm hover:bg-blue-600"
      />

      <ContactMe
        title="Dierk Schneider"
        contentOne="Seit über 30 Jahren spezialisiert im Bereich Wärmecontracting."
        contentTwo="Durch unsere Unterstützung mindern Sie Projekt- und Finanzrisiken und sichern sich den Erfolg Ihrer Wärmevorhaben. Sprechen Sie uns an."
        imageSrc="/dierk.jpg"
        imageAlt="Dierk Schneider"
        buttonText="Kontakt"
        buttonAction={handleContactClick}
        buttonClassName="px-12 py-2 text-xl font-normal text-zinc-800 bg-slate-100 rounded-sm hover:bg-white focus:outline-dashed focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-50"
      />
    </Layout>
  );
}
