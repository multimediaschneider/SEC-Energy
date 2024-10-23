// src/lib/project-data-two.ts

export interface ProjectDetails {
  scope: string;
  services: string[];
  results: string;
  impact: string;
}

export interface Project {
  type: string;
  title: string;
  location?: string;
  summary: string;
  details: ProjectDetails;
}

export const completedProjects: Project[] = [
  {
    type: "Energieversorgung",
    title: "Wärmeversorgung Klinikum Wahrendorff",
    location: "Sehnde",
    summary:
      "Installation und Betrieb der Wärmeversorgungsanlage für das Klinikum Wahrendorff.",
    details: {
      scope:
        "Planung und Umsetzung eines effizienten Wärmeversorgungssystems für ein Krankenhaus",
      services: [
        "Analyse des Wärmebedarfs",
        "Konzeption der Wärmeversorgungsanlage",
        "Installation und Inbetriebnahme",
        "Wartung und Betrieb",
      ],
      results:
        "Zuverlässige und effiziente Wärmeversorgung für das gesamte Klinikum.",
      impact:
        "Sicherstellung einer konstanten und kostengünstigen Wärmeversorgung für den Krankenhausbetrieb.",
    },
  },
  {
    type: "Kraft-Wärme-Kopplung",
    title: "Stromversorgung mittels Blockheizkraftwerken",
    location: "Juliane-Wahrendorff-Klinik und Haus 2 B",
    summary:
      "Installation von BHKWs zur Stromversorgung mit 89 kW el. und 110 kW el. Leistung.",
    details: {
      scope:
        "Implementierung von Blockheizkraftwerken zur dezentralen Stromversorgung",
      services: [
        "Planung und Dimensionierung der BHKWs",
        "Installation und Netzanbindung",
        "Inbetriebnahme und Optimierung",
        "Wartung und Betriebsführung",
      ],
      results:
        "Erfolgreiche Installation und Betrieb von zwei BHKWs mit 89 kW el. und 110 kW el. Leistung.",
      impact:
        "Erhöhung der Energieeffizienz und Reduzierung der Stromkosten für die Einrichtungen.",
    },
  },
  {
    type: "Kraft-Wärme-Kälte-Kopplung",
    title: "Strom-, Wärme- und Kälteversorgung AOK Niedersachsen",
    location: "Hannover",
    summary:
      "Installation eines BHKW mit 495 kW el. Leistung für die Strom-, Wärme- und Kälteversorgung.",
    details: {
      scope:
        "Umsetzung eines integrierten Energieversorgungskonzepts mit Kraft-Wärme-Kälte-Kopplung",
      services: [
        "Planung und Dimensionierung des BHKW-Systems",
        "Integration von Strom-, Wärme- und Kälteerzeugung",
        "Installation und Inbetriebnahme",
        "Optimierung und Betriebsführung",
      ],
      results:
        "Erfolgreich installiertes und betriebenes BHKW mit 495 kW el. Leistung.",
      impact:
        "Signifikante Steigerung der Energieeffizienz und Reduzierung der Betriebskosten für die AOK Niedersachsen.",
    },
  },
  {
    type: "Kraft-Wärme-Kopplung",
    title: "Wärmeversorgungsgebiet Expo-Projekt Kronsberg",
    location: "Hannover",
    summary:
      "Installation eines BHKW mit 220 kW el. Leistung für das Expo-Projekt Kronsberg.",
    details: {
      scope:
        "Entwicklung und Umsetzung eines Wärmeversorgungskonzepts für ein Stadtentwicklungsprojekt",
      services: [
        "Planung des Wärmeversorgungsgebiets",
        "Installation und Netzanbindung des BHKW",
        "Aufbau eines lokalen Wärmenetzes",
        "Betriebsführung und Optimierung",
      ],
      results:
        "Erfolgreich installiertes und betriebenes BHKW mit 220 kW el. Leistung für das Expo-Projekt.",
      impact:
        "Nachhaltige und effiziente Energieversorgung für ein innovatives Stadtentwicklungsprojekt.",
    },
  },
  {
    type: "Kraft-Wärme-Kopplung",
    title: "Wärme- und Stromversorgung Schulzentrum Letter",
    location: "Letter",
    summary:
      "Installation eines BHKW mit 220 kW el. Leistung für das Schulzentrum Letter.",
    details: {
      scope:
        "Implementierung einer kombinierten Wärme- und Stromversorgung für ein Schulzentrum",
      services: [
        "Bedarfsanalyse und Anlagenplanung",
        "Installation des BHKW und Netzintegration",
        "Inbetriebnahme und Optimierung",
        "Wartung und Betriebsführung",
      ],
      results:
        "Erfolgreich installiertes und betriebenes BHKW mit 220 kW el. Leistung.",
      impact:
        "Kosteneffiziente und umweltfreundliche Energieversorgung für das Schulzentrum.",
    },
  },
  {
    type: "Kraft-Wärme-Kopplung",
    title: "Wärme- und Stromversorgung Kurzentrum Bad Grund",
    location: "Bad Grund",
    summary:
      "Installation eines BHKW mit 110 kW el. Leistung für das Kurzentrum Bad Grund.",
    details: {
      scope:
        "Umsetzung einer effizienten Wärme- und Stromversorgung für ein Kurzentrum",
      services: [
        "Konzeption und Planung des BHKW-Systems",
        "Installation und Netzintegration",
        "Inbetriebnahme und Optimierung",
        "Laufende Wartung und Betriebsführung",
      ],
      results:
        "Erfolgreich installiertes und betriebenes BHKW mit 110 kW el. Leistung.",
      impact:
        "Verbesserte Energieeffizienz und reduzierte Betriebskosten für das Kurzentrum.",
    },
  },
  {
    type: "Biomasseenergie",
    title: "Vollautomatische Holzfeuerungen",
    summary:
      "Installation von 6 Energieholzfeuerungen mit einer Gesamtleistung von 2.230 kW Grundlast.",
    details: {
      scope:
        "Planung und Umsetzung von automatisierten Holzfeuerungsanlagen für die Grundlastversorgung",
      services: [
        "Anlagenplanung und -dimensionierung",
        "Installation der Holzfeuerungsanlagen",
        "Einrichtung der Automatisierungssysteme",
        "Inbetriebnahme und Optimierung",
        "Wartung und Betriebsführung",
      ],
      results:
        "Erfolgreiche Installation von 6 Energieholzfeuerungen mit 2.230 kW Gesamtleistung.",
      impact:
        "Nutzung erneuerbarer Energien zur Reduzierung von CO2-Emissionen und Brennstoffkosten.",
    },
  },
  {
    type: "Kraft-Wärme-Kopplung",
    title: "Biomethan BHKW",
    location: "Hannover",
    summary:
      "Installation von Biomethan-BHKWs mit 140 kW el. und 110 kW el. Leistung an zwei Standorten in Hannover.",
    details: {
      scope:
        "Implementierung von Biomethan-betriebenen Blockheizkraftwerken zur nachhaltigen Energieerzeugung",
      services: [
        "Planung und Dimensionierung der Biomethan-BHKWs",
        "Installation und Netzanbindung",
        "Inbetriebnahme und Optimierung",
        "Wartung und Betriebsführung",
      ],
      results:
        "Erfolgreich installierte und betriebene Biomethan-BHKWs mit 140 kW el. und 110 kW el. Leistung.",
      impact:
        "Förderung erneuerbarer Energien und Reduzierung der CO2-Emissionen in der städtischen Energieversorgung.",
    },
  },
  {
    type: "Kraft-Wärme-Kopplung",
    title: "Weitere Blockheizkraftwerke",
    location: "Hannover",
    summary:
      "Installation von 30 Blockheizkraftwerken im Stadtgebiet Hannover mit verschiedenen Leistungsklassen.",
    details: {
      scope:
        "Flächendeckende Implementierung von BHKWs zur dezentralen Energieerzeugung",
      services: [
        "Standortanalyse und Anlagenplanung",
        "Installation und Netzintegration",
        "Inbetriebnahme und Optimierung",
        "Wartung und Betriebsführung",
      ],
      results:
        "Erfolgreiche Installation und Betrieb von 30 BHKWs mit Leistungen von 5,5 kW bis 50 kW.",
      impact:
        "Steigerung der Energieeffizienz und Versorgungssicherheit im Stadtgebiet Hannover.",
    },
  },
  {
    type: "Solarthermie",
    title: "Solarthermie-Anlagen",
    summary:
      "Installation von zwei Solarthermie-Anlagen mit 33 m² und 135 m² Kollektorfläche.",
    details: {
      scope:
        "Planung und Umsetzung von Solarthermie-Anlagen zur Wärmeerzeugung",
      services: [
        "Anlagenplanung und -dimensionierung",
        "Installation der Solarkollektoren",
        "Integration in bestehende Heizsysteme",
        "Inbetriebnahme und Optimierung",
        "Wartung und Monitoring",
      ],
      results:
        "Erfolgreiche Installation von zwei Solarthermie-Anlagen mit 33 m² und 135 m² Kollektorfläche.",
      impact:
        "Nutzung erneuerbarer Sonnenenergie zur Wärmeerzeugung und Reduzierung fossiler Brennstoffe.",
    },
  },
  {
    type: "Photovoltaik",
    title: "Photovoltaik-Anlagen",
    summary:
      "Installation von Photovoltaik-Anlagen mit 73,44 kW und 99,0 kW elektrischer Leistung.",
    details: {
      scope:
        "Planung und Installation von Photovoltaik-Anlagen zur Stromerzeugung",
      services: [
        "Anlagenplanung und -dimensionierung",
        "Installation der PV-Module",
        "Netzanbindung und Einrichtung der Fernüberwachung",
        "Inbetriebnahme und Optimierung",
        "Wartung und Störungsmanagement",
      ],
      results:
        "Erfolgreich installierte PV-Anlagen mit 73,44 kW und 99,0 kW Leistung, inkl. Fernüberwachung.",
      impact:
        "Erzeugung von sauberem Solarstrom und Reduzierung der CO2-Emissionen.",
    },
  },
  {
    type: "Energievertrieb",
    title: "Stromdirektversorgung von Mietern",
    location: "Hannover-Nordstadt und Kronsberg",
    summary:
      "Aufbau von Stromversorgungen (Arealversorgung) für Gebäudekomplexe in Hannover.",
    details: {
      scope:
        "Entwicklung und Umsetzung von Konzepten zur direkten Stromversorgung von Mietern",
      services: [
        "Planung der Arealversorgung",
        "Installation der notwendigen Infrastruktur",
        "Einrichtung von Abrechnungssystemen",
        "Betriebsführung und Kundenservice",
      ],
      results:
        "Erfolgreicher Aufbau von Stromversorgungssystemen für Gebäudekomplexe in zwei Stadtteilen.",
      impact:
        "Förderung der dezentralen Energieversorgung und Stärkung der lokalen Energiewende.",
    },
  },
  {
    type: "Raumlufttechnik",
    title: "Raumlufttechnische Anlage Hörsaal G 308",
    location: "Otto-von-Guericke-Universität, Magdeburg",
    summary:
      "Installation einer raumlufttechnischen Anlage für einen Universitätshörsaal.",
    details: {
      scope:
        "Planung und Installation einer modernen Lüftungsanlage für einen großen Hörsaal",
      services: [
        "Bedarfsanalyse und Anlagenplanung",
        "Installation der Lüftungskomponenten",
        "Integration in die Gebäudetechnik",
        "Inbetriebnahme und Optimierung",
        "Wartung und Betriebsführung",
      ],
      results:
        "Erfolgreich installierte und optimierte raumlufttechnische Anlage für den Hörsaal G 308.",
      impact:
        "Verbesserung der Luftqualität und des Lernklimas für Studierende und Lehrende.",
    },
  },
  {
    type: "Beratung",
    title: "Gutachten für Förderprogramme",
    location: "Sachsen-Anhalt",
    summary:
      "Erstellung von Gutachten für die Förderprogramme 'Bund-Länder-Fernwärmeförderung' und 'Pilot- und Demonstrationsvorhaben'.",
    details: {
      scope:
        "Begutachtung und Bewertung von Projekten im Rahmen von Energieförderprogrammen",
      services: [
        "Analyse der Projektunterlagen",
        "Technische und wirtschaftliche Bewertung",
        "Erstellung von Gutachten",
        "Empfehlungen zur Projektoptimierung",
      ],

      results:
        "Erstellung fundierter Gutachten zur Unterstützung der Entscheidungsfindung in Förderprogrammen.",
      impact:
        "Förderung effizienter und innovativer Energieprojekte in Sachsen-Anhalt.",
    },
  },
];
