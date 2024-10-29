// components/sections/focus-section.tsx
import { useEffect, useState } from "react";
import CollapsibleText from "@/components/content/collapsible-text";
import BodyText from "@/components/content/body-text";
import BodyHeading from "@/components/content/body-heading";
import BodyImages from "@/components/content/body-images";
import { client } from "@/sanity/client";

interface FocusArea {
  title: string;
  items: string[];
}

interface FocusSectionData {
  heading: string;
  introduction: {
    highlightedText: string;
    mainText: string;
  };
  focusAreas: FocusArea[];
}

// Definiere die möglichen Icon-Typen
type IconType =
  | "organization"
  | "billing"
  | "energy"
  | "legal"
  | "planning"
  | "concept"
  | "engineeringServices"
  | "technicalEquipment";

// Aktualisiere die getIconType Funktion mit dem korrekten Rückgabetyp
const getIconType = (title: string): IconType | undefined => {
  if (title.includes("Ingenieurleistungen der technischen Gebäudeausrüstung")) {
    return "engineeringServices";
  }
  if (title.includes("Technische Gebäudeausrüstung im Einzelnen")) {
    return "technicalEquipment";
  }
  if (title.includes("Organisation")) return "organization";
  if (title.includes("Abrechnung")) return "billing";
  if (title.includes("Energieeinkauf")) return "energy";
  if (title.includes("Vertragswesen")) return "legal";
  if (title.includes("Konzeption")) return "planning";
  return undefined;
};

const FocusSection = () => {
  const [focusData, setFocusData] = useState<FocusSectionData | null>(null);

  useEffect(() => {
    const fetchFocusData = async () => {
      const query = `*[_type == "focusSection"][0]{
        heading,
        introduction{
          highlightedText,
          mainText
        },
        focusAreas[]{
          title,
          items
        }
      }`;

      const data = await client.fetch(query);
      setFocusData(data);
    };

    fetchFocusData();
  }, []);

  if (!focusData) {
    return <div>Loading...</div>;
  }

  const images = [
    { src: "/thermostat.jpg", alt: "Abbildung Thermostat" },
    { src: "/tablet.jpg", alt: "Abbildung Wärmesteuerung" },
    { src: "/pipes.jpg", alt: "Abbildung Heizsystem" },
  ];

  return (
    <div className="bg-emerald-700 bg-opacity-20 pb-6">
      <BodyHeading>{focusData.heading}</BodyHeading>

      <BodyText>
        <span className="font-bold">
          {focusData.introduction.highlightedText}
        </span>{" "}
        {focusData.introduction.mainText}
      </BodyText>

      <BodyImages images={images} />

      <div className="mb-12">
        {focusData.focusAreas.map((area, index) => (
          <CollapsibleText
            key={index}
            iconType={getIconType(area.title)}
            collapsibleContent={
              <ul className="list-disc space-y-2">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            }
          >
            {area.title}
          </CollapsibleText>
        ))}
      </div>
    </div>
  );
};

export default FocusSection;
