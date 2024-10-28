import React, { useEffect, useState } from "react";
import BodyText from "@/components/content/body-text";
import BodyHeading from "../content/body-heading";
import ImageText from "@/components/content/image-text-component/image-text-component";
import { client } from "@/sanity/client";

interface AboutSectionData {
  companyInfo: {
    heading: string;
    companyName: string;
    text: string;
  };
  management: {
    heading: string;
    description: string;
  };
  button: {
    text: string;
  };
}

interface AboutSectionProps {
  onContactClick?: () => void;
}

const AboutSection = ({
  onContactClick = () => console.log("Contact button clicked"),
}: AboutSectionProps) => {
  const [aboutData, setAboutData] = useState<AboutSectionData | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      const query = `*[_type == "aboutSection"][0]{
        companyInfo{
          heading,
          companyName,
          text
        },
        management{
          heading,
          description
        },
        button{
          text
        }
      }`;

      const data = await client.fetch(query);
      setAboutData(data);
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BodyHeading>{aboutData.companyInfo.heading}</BodyHeading>
      <BodyText>
        <span className="font-bold">{aboutData.companyInfo.companyName}</span>
        {aboutData.companyInfo.text}
      </BodyText>

      <BodyHeading>{aboutData.management.heading}</BodyHeading>
      <ImageText
        title=""
        contentOne={aboutData.management.description}
        contentTwo=""
        imageSrc="/dierk.jpg"
        imageAlt="Dierk Schneider"
        buttonText={aboutData.button.text}
        buttonAction={onContactClick}
      />
    </div>
  );
};

export default AboutSection;
