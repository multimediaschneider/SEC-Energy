import React, { useEffect, useState } from "react";
import MainContent from "../content/info-section-components/main-content";
import ContentBlock from "../content/info-section-components/content-block";
import { client } from "@/sanity/client";
import { ContentItem } from "@/app/types/content";

interface InfoSectionProps {
  onSchwerpunkteClick: () => void;
  onProjekteClick: () => void;
}

interface InfoSectionContent {
  mainContent: string;
  leftContents: ContentItem[];
  rightContents: ContentItem[];
}

export default function InfoSection({
  onSchwerpunkteClick,
  onProjekteClick,
}: InfoSectionProps) {
  const [content, setContent] = useState<InfoSectionContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const query = `*[_type == "infoSection"][0] {
        mainContent,
        leftContents,
        rightContents
      }`;
      const data = await client.fetch(query);
      setContent(data);
    };

    fetchContent();
  }, []);

  const buttonProps = {
    left: {
      name: "Schwerpunkte",
      href: "#schwerpunkte",
      onClick: onSchwerpunkteClick,
    },
    right: {
      name: "Projekte",
      href: "#projekte",
      onClick: onProjekteClick,
    },
  };

  if (!content) {
    return <div>Loading...</div>; // Or any loading state you prefer
  }

  return (
    <section className="bg-gray-200 py-6 sm:py-8 md:py-12 overflow-hidden">
      <div className="w-11/12 sm:w-10/12 md:w-4/5  mx-auto my-4 sm:my-6 md:my-8">
        <MainContent content={content.mainContent} />

        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-8 w-full">
          <div className="w-full lg:w-1/2">
            <ContentBlock
              contents={content.leftContents}
              buttonProps={buttonProps.left}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <ContentBlock
              contents={content.rightContents}
              buttonProps={buttonProps.right}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
