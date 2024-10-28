import { FOCUS_SECTION_CONTENT } from "@/app/constants/focus-section-content";
import CollapsibleText from "@/components/content/collapsible-text";
import BodyText from "@/components/content/body-text";
import BodyHeading from "@/components/content/body-heading";
import BodyImages from "@/components/content/body-images";

const FocusSection = () => {
  const { heading, introduction, images, focusAreas } = FOCUS_SECTION_CONTENT;

  return (
    <div className="bg-emerald-700 bg-opacity-20 pb-6">
      <BodyHeading>{heading}</BodyHeading>

      <BodyText>
        <span className="font-bold">{introduction.highlightedText}</span>{" "}
        {introduction.mainText}
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
