// constants/info-section-content.ts
import { ContentItem } from "../types/content";
interface InfoSectionContent {
  mainContent: string;
  leftContents: ContentItem[];
  rightContents: ContentItem[];
}

export const INFO_SECTION_CONTENT: InfoSectionContent = {
  mainContent:
    "Als führender Experte für Energiecontracting verbinde ich technische Innovation mit wirtschaftlicher Effizienz. Mit über zwei Jahrzehnten Erfahrung und mehr als 50 erfolgreichen Großprojekten stehe ich für nachhaltige Energielösungen.",
  leftContents: [
    {
      heading:
        "Unsere Kernkompetenzen umfassen ein breites Spektrum an Dienstleistungen, die wir gezielt auf die Anforderungen unserer Kunden zuschneiden:",
      text: "",
    },
    {
      heading: "",
      text: "Technische Gebäudeausrüstung",
      icon: "checkmark",
    },
    {
      heading: "",
      text: "Dekarbonisierungsstrategien",
      icon: "checkmark",
    },
    { heading: "", text: "Contractingberatung", icon: "checkmark" },
    {
      heading: "",
      text: "Wirtschaftlichkeitsberechnungen",
      icon: "checkmark",
    },
    {
      heading: "",
      text: "Smart Metering und Energiemonitoring",
      icon: "checkmark",
    },
    {
      heading: "",
      text: "Klimaschutz und Klimaneutralität",
      icon: "checkmark",
    },
  ],
  rightContents: [
    {
      heading:
        "Unsere Kunden stammen aus den folgenden Branchen. Für sie haben wir zahlreiche Projekte erfolgreich umgesetzt und maßgeschneiderte Lösungen entwickelt.",
      text: "",
    },
    { heading: "", text: "Wohnungswirtschaft", icon: "checkmark" },
    { heading: "", text: "Energieversorgung", icon: "checkmark" },
    { heading: "", text: "Contracting", icon: "checkmark" },
    { heading: "", text: "Öffentliche Hand", icon: "checkmark" },
    { heading: "", text: "Energieversorgung", icon: "checkmark" },
    { heading: "", text: "Industrie", icon: "checkmark" },
  ],
};
