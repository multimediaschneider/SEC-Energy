import { project } from "./project";
import { projectSection } from "./project-section";
import { hero } from "./hero";
import { infoSection } from "./info-section";
import { aboutSection } from "./about-section";

export const schemaTypes = [
  hero,
  infoSection,
  aboutSection,
  project, // Add the project schema first
  projectSection, // Then the project section schema
];
