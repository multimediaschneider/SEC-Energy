// components/sections/project-section.tsx
import React, { useEffect, useState } from "react";
import BodyHeading from "@/components/content/body-heading";
import BodyText from "@/components/content/body-text";
import ProjectCard from "@/components/content/project-card";
import ExpandableSection from "@/components/content/expandable-section";
import BodyImages from "@/components/content/body-images";
import { client } from "@/sanity/client";

interface ProjectDetails {
  scope: string;
  services: string[];
  results: string;
  impact: string;
}

interface Project {
  type: string;
  title: string;
  location?: string;
  summary: string;
  details: ProjectDetails;
}

interface ProjectSectionData {
  heading: string;
  introduction: {
    companyName: string;
    text: string;
  };
  currentProjects: {
    title: string;
    projects: Project[];
  };
  completedProjects: {
    title: string;
    projects: Project[];
  };
}

const ProjectSection = () => {
  const [sectionData, setSectionData] = useState<ProjectSectionData | null>(
    null
  );

  useEffect(() => {
    const fetchProjectData = async () => {
      const query = `*[_type == "projectSection"][0]{
        heading,
        introduction{
          companyName,
          text
        },
        currentProjects{
          title,
          "projects": projects[]->{ // Use -> to follow references
            type,
            title,
            location,
            summary,
            details{
              scope,
              services,
              results,
              impact
            }
          }
        },
        completedProjects{
          title,
          "projects": projects[]->{ // Use -> to follow references
            type,
            title,
            location,
            summary,
            details{
              scope,
              services,
              results,
              impact
            }
          }
        }
      }`;

      const data = await client.fetch(query);
      setSectionData(data);
    };

    fetchProjectData();
  }, []);

  if (!sectionData) {
    return <div>Loading...</div>;
  }

  // Static images since we're not handling them in Sanity
  const images = [
    { src: "/cargarage.jpg", alt: "Abbildung Thermostat" },
    { src: "/sawdust.jpg", alt: "Abbildung Wärmesteuerung" },
    { src: "/solarpanels.jpg", alt: "Abbildung Heizsystem" },
  ];

  return (
    <>
      <BodyHeading>{sectionData.heading}</BodyHeading>

      <BodyText>
        <span className="font-bold">
          {sectionData.introduction.companyName}
        </span>
        {sectionData.introduction.text}
      </BodyText>

      <BodyImages images={images} />

      <div className="mb-12">
        <ExpandableSection title={sectionData.currentProjects.title}>
          <>
            {sectionData.currentProjects.projects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="primary" />
            ))}
          </>
        </ExpandableSection>

        <ExpandableSection title={sectionData.completedProjects.title}>
          <>
            {sectionData.completedProjects.projects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="secondary" />
            ))}
          </>
        </ExpandableSection>
      </div>
    </>
  );
};

export default ProjectSection;
