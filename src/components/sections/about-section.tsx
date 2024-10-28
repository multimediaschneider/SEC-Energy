import React from "react";
import BodyText from "@/components/content/body-text";
import BodyHeading from "../content/body-heading";
import ImageText from "@/components/content/image-text-component/image-text-component";
import { ABOUT_SECTION_CONTENT } from "@/app/constants/about-section-content";

interface AboutSectionProps {
  onContactClick?: () => void;
}

const AboutSection = ({
  onContactClick = () => console.log("Contact button clicked"),
}: AboutSectionProps) => {
  const { companyInfo, management, button } = ABOUT_SECTION_CONTENT;

  return (
    <div className="">
      <BodyHeading>{companyInfo.heading}</BodyHeading>
      <BodyText>
        <span className="font-bold">SEC Energieconsulting</span>
        {companyInfo.text}
      </BodyText>

      <BodyHeading>{management.heading}</BodyHeading>
      <ImageText
        title=""
        contentOne={management.description}
        contentTwo=""
        imageSrc={management.profileImage.src}
        imageAlt={management.profileImage.alt}
        buttonText={button.text}
        buttonAction={onContactClick}
      />
    </div>
  );
};

export default AboutSection;
