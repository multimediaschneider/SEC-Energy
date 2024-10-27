// InfoSection.tsx
import React from "react";
import MainContent from "../content/info-section-components/main-content";
import ContentBlock from "../content/info-section-components/content-block";

interface InfoSectionProps {
  mainContent: string;
  leftContents: string[];
  rightContents: string[];
  leftButtonProps: {
    name: string;
    href: string;
    onClick: () => void;
  };
  rightButtonProps: {
    name: string;
    href: string;
    onClick: () => void;
  };
}

export default function InfoSection({
  mainContent,
  leftContents,
  rightContents,
  leftButtonProps,
  rightButtonProps,
}: InfoSectionProps) {
  return (
    <section className="bg-gray-200 py-6 sm:py-8 md:py-12 overflow-hidden">
      <div className="w-11/12 sm:w-10/12 md:w-4/5 mx-auto my-4 sm:my-6 md:my-8">
        <MainContent content={mainContent} />

        <div className="mt-8 sm:mt-12 md:mt-16  lg:mt-24 flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-8">
          <ContentBlock contents={leftContents} buttonProps={leftButtonProps} />
          <ContentBlock
            contents={rightContents}
            buttonProps={rightButtonProps}
          />
        </div>
      </div>
    </section>
  );
}
