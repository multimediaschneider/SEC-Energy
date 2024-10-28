import React from "react";
import BodyHeading from "@/components/content/body-heading";
import BodyText from "@/components/content/body-text";
import ProjectCard from "@/components/content/project-card";
import ExpandableSection from "@/components/content/expandable-section";
import { PROJECT_SECTION_CONTENT } from "@/app/constants/project-section-content/body-content";
import BodyImages from "@/components/content/body-images";

const ProjectSection = () => {
  const { heading, introduction, images, sections } = PROJECT_SECTION_CONTENT;

  return (
    <>
      <BodyHeading>{heading}</BodyHeading>

      <BodyText>
        <span className="font-bold">{introduction.companyName}</span>
        {introduction.text}
      </BodyText>

      <BodyImages images={images} />

      <div className="mb-12">
        <ExpandableSection title={sections.currentProjects.title}>
          <>
            {sections.currentProjects.projects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="primary" />
            ))}
          </>
        </ExpandableSection>

        <ExpandableSection title={sections.completedProjects.title}>
          <>
            {sections.completedProjects.projects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="secondary" />
            ))}
          </>
        </ExpandableSection>
      </div>
    </>
  );
};

export default ProjectSection;
