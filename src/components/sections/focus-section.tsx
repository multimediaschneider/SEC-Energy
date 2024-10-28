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

  // Static images since we're not handling them in Sanity
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
