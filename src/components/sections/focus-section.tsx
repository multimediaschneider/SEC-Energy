import { focusAreas } from "@/lib/focus-data";
import CollapsibleText from "@/components/content/collapsible-text";
import BodyText from "@/components/content/body-text";
import BodyHeading from "@/components/body-heading";
import BodyImages from "@/components/body-images";

const FocusSection = () => {
  const images = [
    { src: "/thermostat.jpg", alt: "Abbildung Thermostat" },
    { src: "/tablet.jpg", alt: "Abbildung Wärmesteuerung" },
    { src: "/pipes.jpg", alt: "Abbildung Heizsystem" },
  ];

  return (
    <div className="bg-emerald-700 bg-opacity-20 pb-6">
      <BodyHeading>Tätigkeitsschwerpunkte</BodyHeading>
      <BodyText>
        <span className="font-bold">
          Klimaschutz ist für uns von zentraler Bedeutung.
        </span>{" "}
        Wir konzentrieren uns auf die technische Umsetzung klimafreundlicher,
        idealerweise klimaneutraler Lösungen. Dabei gewährleisten wir durch eine
        vorausschauende wirtschaftliche Analyse die langfristige Rentabilität
        dieser Maßnahmen. Präzise Emissionsberechnungen belegen zudem die
        Relevanz unserer Ansätze und deren positiven Einfluss auf eine
        nachhaltige Zukunft.
      </BodyText>
      <BodyImages images={images} />
      <div className="mb-12">
        {focusAreas.map((area, index) => (
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
