// components/info-section-wrapper.tsx
import { client } from "@/sanity/client";
import InfoSection from "@/components/sections/info-section";

const INFO_SECTION_QUERY = `*[_type == "infoSection"][0]`;
const options = { next: { revalidate: 30 } };

export async function InfoSectionWrapper() {
  const infoSectionData = await client.fetch(INFO_SECTION_QUERY, {}, options);

  return (
    <InfoSection
      mainContent={
        infoSectionData?.mainContent ||
        "Wir begleiten Sie umfassend bei Ihren Überlegungen, Planungen und Projekten für eine nachhaltige Wärmeversorgung. Durch unsere Unterstützung mindern Sie Projekt- und Finanzrisiken und sichern sich den Erfolg Ihrer Wärmevorhaben. Sprechen Sie uns an."
      }
      leftContents={
        infoSectionData?.leftContents || [
          "Technische Gebäudeausrüstung",
          "Dekarbonisierungsstrategien",
          "Contractingberatung",
          "Wirtschaftlichkeitsberechnungen",
          "Smart Metering und Ablesesysteme",
        ]
      }
      rightContents={
        infoSectionData?.rightContents || [
          "Zu unseren Kunden zählen Unternehmen aus der Wohnungswirtschaft, Wohnungsverwaltungen, der öffentlichen Hand, Pflegeheime, Energieversorger, Contractoren und der Industrie. Für sie haben wir zahlreiche Projekte erfolgreich umgesetzt und maßgeschneiderte Lösungen entwickelt.",
        ]
      }
      leftButtonProps={{
        name: "Schwerpunkte",
        href: "#schwerpunkte",
        onClick: undefined, // Dies wird in der Client-Komponente gehandhabt
      }}
      rightButtonProps={{
        name: "Projekte",
        href: "#projekte",
        onClick: undefined, // Dies wird in der Client-Komponente gehandhabt
      }}
    />
  );
}
