"use client";

import BodyText from "@/components/content/body-text";
import BodyHeading from "@/components/body-heading";
import ImageText from "@/components/content/image-text-component/image-text-component";

const AboutSection = () => {
  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  return (
    <>
      <div className="">
        <BodyHeading>Über SEC</BodyHeading>
        <BodyText>
          <span className="font-bold">SEC Energieconsulting</span> ist ein
          herstellerunabhängiges Unternehmen, das sich auf die Planung,
          Bauabnahme und den Betrieb von Wärmeversorgungsanlagen spezialisiert
          hat. Unsere Schwerpunkte liegen im Bereich Wärmecontracting, Erdgas-
          und Biomethan-Blockheizkraftwerke (BHKW), Holzhackschnitzel- und
          Holzpelletsheizungen, Solarthermie, Wärmepumpen, Geothermie und
          Ladeinfrastruktur für E-Mobilität. Wir bieten umfassende Leistungen
          von Machbarkeitsstudien bis hin zur Anlagenoptimierung und arbeiten in
          einem Netzwerk von Spezialisten zusammen, um klimaschonende Lösungen
          zu realisieren.
        </BodyText>
        <BodyHeading>Geschäftsführung</BodyHeading>
        <ImageText
          title=""
          contentOne="Dierk Schneider, Diplom-Ingenieur der Versorgungstechnik, verfügt über mehr als 30 Jahre Erfahrung in der Energiebranche. Seit Mai 2020 ist er Geschäftsführer von SEC Consulting GmbH und hat zuvor leitende Positionen in Unternehmen wie hanova SERVICES GmbH und GETEC AG innegehabt. Seine Expertise liegt in der Konzeption und Planung energieeffizienter Anlagen sowie der Beratung im Wärmecontracting. Zudem ist er als Gastdozent an Hochschulen tätig und Autor zahlreicher Fachpublikationen."
          contentTwo=""
          imageSrc="/dierk.jpg"
          imageAlt="Dierk Schneider"
          buttonText="Kontakt"
          buttonAction={handleContactClick}
        />
      </div>
    </>
  );
};

export default AboutSection;
