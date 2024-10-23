"use client";
import React from "react";
import BodyHeading from "@/components/body-heading";
import BodyText from "@/components/body-text";
import Layout from "@/components/layout";
import ProjectCard from "@/components/project-card";
import ExpandableSection from "@/components/expandable-section";
import { currentProjects } from "@/lib/project-data";
import { completedProjects } from "@/lib/project-data-two";
import BodyImages from "@/components/body-images";

export default function ProjectsPage() {
  const images = [
    { src: "/cargarage.jpg", alt: "Abbildung Thermostat" },
    { src: "/sawdust.jpg", alt: "Abbildung Wärmesteuerung" },
    { src: "/solarpanels.jpg", alt: "Abbildung Heizsystem" },
  ];

  return (
    <Layout>
      <BodyHeading>Projekte</BodyHeading>
      <BodyText>
        <span className="font-bold">SEC Energieconsulting</span> zeichnet sich
        durch eine umfassende Expertise in der energietechnischen Beratung und
        Projektierung aus, mit einem besonderen Fokus auf nachhaltige
        Energieversorgungslösungen wie Blockheizkraftwerke, Holzfeuerungsanlagen
        und erneuerbare Energien. Wir übernehmen dabei die komplette
        Projektverantwortung von der initialen Wirtschaftlichkeitsberechnung
        über die technische Planung bis hin zur Vertragsgestaltung und
        Betriebsführung. Mit der erfolgreichen Realisierung zahlreicher
        Projekte, hat sich SEC Energieconsulting als verlässlicher Partner für
        komplexe energietechnische Lösungen etabliert.
      </BodyText>
      <BodyImages images={images} />

      <div className="mb-12">
        <ExpandableSection title="Aktuelle Projekte">
          <>
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="primary" />
            ))}
          </>
        </ExpandableSection>
        <ExpandableSection title="Weitere ausgewählte Projekte">
          <>
            {completedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="secondary" />
            ))}
          </>
        </ExpandableSection>
      </div>
    </Layout>
  );
}
