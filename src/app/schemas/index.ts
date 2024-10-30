import { project } from "./project";
import { projectSection } from "./project-section";
import { focusSection } from "./focus-section";
import { hero } from "./hero";
import { infoSection } from "./info-section";
import { aboutSection } from "./about-section";
import { heroSection } from "./hero-section-schema";

export const schemaTypes = [
  hero,
  infoSection,
  aboutSection,
  focusSection,
  project, // Add the project schema first
  projectSection,
  heroSection, // Then the project section schema
];
