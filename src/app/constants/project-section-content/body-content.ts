import { currentProjects } from "./current-projects";
import { completedProjects } from "./completed-projetcs";

export const PROJECT_SECTION_CONTENT = {
  heading: "Projekte",

  introduction: {
    companyName: "SEC Energieconsulting",
    text: " zeichnet sich durch eine umfassende Expertise in der energietechnischen Beratung und Projektierung aus, mit einem besonderen Fokus auf nachhaltige Energieversorgungslösungen wie Blockheizkraftwerke, Holzfeuerungsanlagen und erneuerbare Energien. Wir übernehmen dabei die komplette Projektverantwortung von der initialen Wirtschaftlichkeitsberechnung über die technische Planung bis hin zur Vertragsgestaltung und Betriebsführung. Mit der erfolgreichen Realisierung zahlreicher Projekte, hat sich SEC Energieconsulting als verlässlicher Partner für komplexe energietechnische Lösungen etabliert.",
  },

  images: [
    { src: "/cargarage.jpg", alt: "Abbildung Thermostat" },
    { src: "/sawdust.jpg", alt: "Abbildung Wärmesteuerung" },
    { src: "/solarpanels.jpg", alt: "Abbildung Heizsystem" },
  ],

  sections: {
    currentProjects: {
      title: "Aktuelle Projekte",
      projects: currentProjects,
    },
    completedProjects: {
      title: "Weitere ausgewählte Projekte",
      projects: completedProjects,
    },
  },
};
