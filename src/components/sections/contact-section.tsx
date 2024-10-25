"use client";

import React from "react";
import BodyHeading from "@/components/body-heading";
import BodyText from "@/components/content/body-text";
import ProjectCard from "@/components/content/project-card";
import ExpandableSection from "@/components/content/expandable-section";
import { currentProjects } from "@/lib/project-data";
import { completedProjects } from "@/lib/project-data-two";
import BodyImages from "@/components/body-images";
import ImageTextTwo from "../content/image-text2";

const ContactSection = () => {
  const handleContactClick = () => {
    console.log("Contact button clicked");
    // Add your contact button click logic here
  };

  return (
    <>
      <BodyHeading>Kontakt</BodyHeading>
    </>
  );
};

export default ContactSection;
