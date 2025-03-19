import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projectsFallbackData } from "@/app/constants/data/projects-fallback-data";
import TextBlock from "../ui/text-block";
import CustomButton from "../ui/custom-button";
import Container from "../ui/container";
import ProjectScrollSection from "../ui/project-scroll-section";
import { client } from "@/sanity/client";

const ProjectSection = () => {
  const [projectsData, setProjectsData] = useState(projectsFallbackData);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const query = `*[_type == "projects"][0]{
          headline,
          introduction,
          metaTitle,
          metaDescription,
          "projects": {
            "klinikum": {
              _id,
              title,
              category,
              projectType,
              status,
              location,
              description,
              shortDescription,
              technicalData,
              scope,
              specialFeatures,
              results,
              "images": images[].asset->url
            },
            "expo": {
              _id,
              title,
              category,
              projectType,
              status,
              location,
              description,
              shortDescription,
              technicalData,
              scope,
              specialFeatures,
              results,
              "images": images[].asset->url
            }
          }
        }`;
        const data = await client.fetch(query);
        setProjectsData(data || projectsFallbackData);
      } catch (error) {
        console.error("Error fetching projects data:", error);
        // Fallback data is already set
      }
    };

    fetchProjectsData();
  }, []);

  return (
    <section
      id="projekte"
      className="py-16 sm:py-20 md:py-24 bg-gray-50 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12">
          {/* Headline and introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-6 border-l-4 border-emerald-700"
          >
            <TextBlock
              headline={projectsData.projectsPage.headline}
              introduction="SEC Energieconsulting steht für über zwei Jahrzehnte erfolgreiche Projektrealisierung im Energiesektor. Von Blockheizkraftwerken über Holzfeuerungsanlagen bis hin zu innovativen Nahwärmekonzepten - unsere Referenzprojekte zeigen die ganze Bandbreite unserer technischen Expertise und Planungskompetenz."
              headlineSize="lg"
              textSize="lg"
              verticalSpacing="lg"
              horizontalSpacing="md"
            />
            <div className="mt-8 w-fit">
              <CustomButton
                text="Alle Projekte ansehen"
                href="/projekte"
                iconSize={24}
                size="lg"
                className="bg-emerald-700"
              />
            </div>
          </motion.div>

          {/* Project scroll section */}
          <div className="w-full">
            <ProjectScrollSection projectsData={projectsData} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
