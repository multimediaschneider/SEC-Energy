// constants/project-fallback-data.ts
import { Project } from "../types/projects-page";

export const projectsFallbackData: Project[] = [
  // Active Projects
  {
    _id: "holzhackschnitzel-singen",
    _type: "project",
    title: "Holzhackschnitzelfeuerung Singen",
    slug: {
      current: "holzhackschnitzel-singen",
    },
    category: "heating",
    projectType: "Privatgutachten/Dimensionierungsstudie",
    status: "ongoing",

    location: {
      street: "Überlinger Straße 11",
      city: "78224 Singen",
    },
    description:
      "Im Rahmen dieses Projekts erfolgte eine umfassende Analyse und Optimierung einer Holzhackschnitzelfeuerungsanlage. Der Fokus lag auf der Ermittlung der optimalen Dimensionierung für Grund- und Spitzenlast sowie der Entwicklung eines zukunftsfähigen Betriebskonzepts.",
    shortDescription: "Optimierung einer Holzhackschnitzelfeuerungsanlage",
    technicalData: {
      type: "Holzhackschnitzelfeuerung",
      additionalMetrics: [
        {
          label: "Status",
          value: "Dimensionierung Grund- und Spitzenlast in Prüfung",
        },
      ],
    },
    scope: [
      "Analyse, Bewertung, Empfehlungskonzept",
      "Überprüfung und Optimierung der Anlagendimensionierung",
      "Leistungsumfang: Analyse, Bewertung, Empfehlungskonzept",
    ],
    specialFeatures: ["Fokus auf optimale Leistungsauslegung"],
    results: ["Effizienzoptimierung durch angepasste Dimensionierung"],
    imagePath: "/sawdust.jpg",
  },
  {
    _id: "bhkw-hotels-goslar",
    _type: "project",
    title: "BHKW-Konzept Hotels Goslar",
    slug: {
      current: "bhkw-hotels-goslar",
    },
    category: "bhkw",
    projectType: "Wirtschaftlichkeitsstudie",
    status: "ongoing",

    location: {
      street: "Marktstraße 1, Münzstraße 10 und 11",
      city: "Goslar",
    },
    description:
      "Entwicklung eines standortübergreifenden Energiekonzepts für drei Hotelstandorte. Das Projekt umfasst eine detaillierte Machbarkeitsstudie für die Integration von Blockheizkraftwerken unter Berücksichtigung der spezifischen Anforderungen der Hotellerie.",
    shortDescription: "Standortübergreifendes BHKW-Konzept für Hotelkette",
    technicalData: {
      type: "BHKW-System",
      additionalMetrics: [
        {
          label: "Standorte",
          value: "3 Hotels",
        },
        {
          label: "Status",
          value: "BHKW-Dimensionierung in Prüfung",
        },
      ],
    },
    scope: [
      "Machbarkeitsstudie für drei Hotelstandorte",
      "Wirtschaftlichkeitsanalyse",
      "Klimaschutzberechnung",
    ],
    specialFeatures: ["Standortübergreifendes Energiekonzept"],
    results: ["Entscheidungsgrundlage für Investitionen"],
    imagePath: "/pipes.jpg",
  },
  {
    _id: "klinikum-wahrendorff",
    _type: "project",
    title: "Klinikum Wahrendorff",
    slug: {
      current: "klinikum-wahrendorff",
    },
    category: "bhkw",
    projectType: "Energieversorgung/BHKW",
    status: "completed",

    location: {
      city: "Sehnde",
    },
    description:
      "Installation und Betrieb einer Doppel-BHKW-Anlage zur redundanten Energieversorgung für medizinische Einrichtungen. Das Projekt gewährleistet höchste Versorgungssicherheit für kritische medizinische Anwendungen.",
    shortDescription: "Redundante BHKW-Energieversorgung für Klinikum",
    technicalData: {
      type: "Doppel-BHKW-Anlage",
      powerOutput: "89 kW + 110 kW elektrisch",
      additionalMetrics: [
        {
          label: "Anlagentyp",
          value: "Redundantes System",
        },
      ],
    },
    scope: ["Planung", "Installation", "Betrieb"],
    specialFeatures: [
      "Höchste Versorgungssicherheit für medizinische Anwendungen",
      "Redundantes System",
    ],
    results: ["Zuverlässige, effiziente Energieversorgung"],
    imagePath: "/thermostat.jpg",
  },
  {
    _id: "aok-niedersachsen",
    _type: "project",
    title: "AOK Niedersachsen",
    slug: {
      current: "aok-niedersachsen",
    },
    category: "bhkw",
    projectType: "Kraft-Wärme-Kälte-Kopplung",
    status: "completed",

    location: {
      city: "Hannover",
    },
    description:
      "Implementation einer innovativen Trigenerationslösung für die AOK Niedersachsen. Das Projekt umfasst die Integration eines leistungsstarken BHKWs mit Kälteversorgung zur optimalen Gebäudeklimatisierung.",
    shortDescription: "Innovative BHKW-Trigenerationslösung",
    technicalData: {
      type: "BHKW mit Kälteversorgung",
      powerOutput: "495 kW elektrisch",
      additionalMetrics: [
        {
          label: "Energiekosteneinsparung",
          value: ">30%",
        },
      ],
    },
    scope: ["Planung", "Installation", "Optimierung"],
    specialFeatures: [
      "Integration von Kälteversorgung",
      "Trigenerationssystem",
    ],
    results: ["Energiekosteneinsparung über 30%"],
    imagePath: "/pipes.jpg",
  },
  {
    _id: "expo-projekt-kronsberg",
    _type: "project",
    title: "Expo-Projekt Kronsberg",
    slug: {
      current: "expo-projekt-kronsberg",
    },
    category: "bhkw",
    projectType: "Wärmeversorgungsgebiet",
    status: "completed",

    location: {
      city: "Hannover",
    },
    description:
      "Realisierung eines innovativen Quartiersversorgungskonzepts mit Nahwärmenetz. Das Projekt demonstriert die erfolgreiche Implementation einer nachhaltigen Energieversorgung auf Stadtteilebene.",
    shortDescription: "Quartiersversorgung mit Nahwärmenetz",
    technicalData: {
      type: "BHKW mit Nahwärmenetz",
      powerOutput: "220 kW elektrisch",
    },
    scope: ["Gesamtplanung", "Netzaufbau", "Betrieb"],
    specialFeatures: [
      "Innovatives Stadtteilkonzept",
      "Integriertes Nahwärmenetz",
    ],
    results: ["Nachhaltige Quartiersversorgung"],
    imagePath: "/sawdust.jpg",
  },
  {
    _id: "schulzentrum-letter",
    _type: "project",
    title: "Schulzentrum Letter",
    slug: {
      current: "schulzentrum-letter",
    },
    category: "bhkw",
    projectType: "Kraft-Wärme-Kopplung",
    status: "completed",

    location: {
      city: "Letter",
    },
    description:
      "Energieversorgung einer Bildungseinrichtung mit integriertem pädagogischem Energiekonzept. Das Projekt verbindet effiziente Energieerzeugung mit Bildungsaspekten zum Thema Klimaschutz.",
    shortDescription: "BHKW-Energieversorgung mit Bildungskonzept",
    technicalData: {
      type: "BHKW",
      powerOutput: "220 kW elektrisch",
    },
    scope: ["Planung", "Installation", "Betriebsführung"],
    specialFeatures: ["Pädagogisches Energiekonzept", "Bildungsintegration"],
    results: ["Vorbildfunktion für Klimaschutz"],
    imagePath: "/pipes.jpg",
  },
  {
    _id: "holzfeuerungsanlagen-portfolio",
    _type: "project",
    title: "Holzfeuerungsanlagen Portfolio",
    slug: {
      current: "holzfeuerungsanlagen-portfolio",
    },
    category: "heating",
    projectType: "Biomasseenergie",
    status: "completed",

    location: {
      city: "Verschiedene Standorte",
    },
    description:
      "Implementation von sechs automatisierten Holzfeuerungsanlagen an verschiedenen Standorten. Das Portfolio demonstriert die erfolgreiche Umsetzung von CO2-neutraler Wärmeversorgung im größeren Maßstab.",
    shortDescription: "Automatisierte Holzfeuerungsanlagen",
    technicalData: {
      type: "Holzfeuerungsanlagen",
      heatOutput: "2.230 kW Grundlast gesamt",
      additionalMetrics: [
        {
          label: "Anlagenanzahl",
          value: "6 Anlagen",
        },
      ],
    },
    scope: ["Planung", "Installation", "Automatisierung"],
    specialFeatures: ["Vollautomatischer Betrieb", "CO2-neutrale Technologie"],
    results: ["CO2-neutrale Wärmeversorgung"],
    imagePath: "/thermostat.jpg",
  },
  {
    _id: "biomethan-bhkw-projekte",
    _type: "project",
    title: "Biomethan-BHKW-Projekte",
    slug: {
      current: "biomethan-bhkw-projekte",
    },
    category: "bhkw",
    projectType: "Kraft-Wärme-Kopplung",
    status: "completed",

    location: {
      street: "Gronostraße & Erlenstieg",
      city: "Hannover",
    },
    description:
      "Installation und Betrieb von Biomethan-BHKWs für eine nachhaltige Energieversorgung. Die Anlagen demonstrieren die erfolgreiche Nutzung erneuerbarer Energieträger in der Kraft-Wärme-Kopplung.",
    shortDescription: "Nachhaltige BHKW-Energieversorgung mit Biomethan",
    technicalData: {
      type: "Biomethan-BHKW",
      powerOutput: "140 kW + 110 kW elektrisch",
    },
    scope: ["Planung", "Installation", "Betrieb"],
    specialFeatures: [
      "Einsatz erneuerbarer Energieträger",
      "Innovative Technologie",
    ],
    results: ["Klimaneutrale Energieerzeugung"],
    imagePath: "/pipes.jpg",
  },
  {
    _id: "bhkw-stadtportfolio",
    _type: "project",
    title: "BHKW-Stadtportfolio",
    slug: {
      current: "bhkw-stadtportfolio",
    },
    category: "bhkw",
    projectType: "Kraft-Wärme-Kopplung",
    status: "completed",

    location: {
      city: "Hannover Stadtgebiet",
    },
    description:
      "Flächendeckende Implementation von 30 BHKWs im Stadtgebiet Hannover. Das Portfolio demonstriert die erfolgreiche Umsetzung dezentraler Energieversorgungskonzepte mit unterschiedlichen Leistungsklassen.",
    shortDescription: "Dezentrale BHKW-Energieversorgung im Stadtgebiet",
    technicalData: {
      type: "BHKW-Portfolio",
      powerOutput: "5,5-50 kW elektrisch",
      additionalMetrics: [
        {
          label: "Anlagenanzahl",
          value: "30 BHKWs",
        },
      ],
    },
    scope: ["Planung", "Installation", "Betriebsführung"],
    specialFeatures: ["Breites Leistungsspektrum", "Dezentrale Versorgung"],
    results: ["Flächendeckende Effizienzsteigerung"],
    imagePath: "/sawdust.jpg",
  },
  {
    _id: "solarthermie-grossanlagen",
    _type: "project",
    title: "Solarthermie-Großanlagen",
    slug: {
      current: "solarthermie-grossanlagen",
    },
    category: "renewable",
    projectType: "Solarthermie",
    status: "completed",

    location: {
      city: "Diverse Standorte",
    },
    description:
      "Installation und Betrieb von Solarthermie-Großanlagen zur regenerativen Wärmebereitstellung. Die Anlagen wurden im Rahmen des Förderprogramms Solarthermie 2000+ realisiert.",
    shortDescription: "Großflächige Solarthermie-Anlagen",
    technicalData: {
      type: "Solarthermie",
      additionalMetrics: [
        {
          label: "Kollektorfläche 1",
          value: "33 m²",
        },
        {
          label: "Kollektorfläche 2",
          value: "135 m²",
        },
      ],
    },
    scope: ["Planung", "Installation", "Monitoring"],
    specialFeatures: [
      "Förderung durch Solarthermie 2000+",
      "Großflächige Anlagen",
    ],
    results: ["Regenerative Wärmebereitstellung"],
    imagePath: "/pipes.jpg",
  },
  {
    _id: "photovoltaik-portfolio",
    _type: "project",
    title: "Photovoltaik-Portfolio",
    slug: {
      current: "photovoltaik-portfolio",
    },
    category: "renewable",
    projectType: "Photovoltaik",
    status: "completed",

    location: {
      city: "Diverse Standorte",
    },
    description:
      "Implementation von Photovoltaik-Großanlagen mit modernster Modultechnologie und Fernüberwachung. Das Portfolio demonstriert die erfolgreiche Umsetzung effizienter Solarstromerzeugung.",
    shortDescription: "Photovoltaik-Großanlagen mit Monitoring",
    technicalData: {
      type: "Photovoltaik",
      powerOutput: "73,44 kW + 99,0 kW",
      additionalMetrics: [
        {
          label: "Modultyp",
          value: "Monokristallin",
        },
      ],
    },
    scope: ["Planung", "Installation", "Überwachung"],
    specialFeatures: ["Monokristalline Module", "Fernüberwachung"],
    results: ["Effiziente Solarstromerzeugung"],
    imagePath: "/thermostat.jpg",
  },
  {
    _id: "mieterstromprojekte",
    _type: "project",
    title: "Mieterstromprojekte",
    slug: {
      current: "mieterstromprojekte",
    },
    category: "study",
    projectType: "Energievertrieb",
    status: "completed",

    location: {
      city: "Hannover-Nordstadt und Kronsberg",
    },
    description:
      "Entwicklung und Implementation innovativer Mieterstromkonzepte für die direkte Stromversorgung von Mietern. Die Projekte tragen zur lokalen Energiewende im Quartier bei.",
    shortDescription: "Innovative Mieterstromkonzepte",
    technicalData: {
      type: "Mieterstromversorgung",
      additionalMetrics: [
        {
          label: "Versorgungsart",
          value: "Direkte Stromversorgung",
        },
      ],
    },
    scope: ["Konzeption", "Implementation", "Betrieb"],
    specialFeatures: [
      "Innovative Versorgungsstruktur",
      "Quartiersbezogenes Konzept",
    ],
    results: ["Lokale Energiewende im Quartier"],
    imagePath: "/pipes.jpg",
  },
  {
    _id: "raumlufttechnik-universitaet",
    _type: "project",
    title: "Raumlufttechnik Universität",
    slug: {
      current: "raumlufttechnik-universitaet",
    },
    category: "study",
    projectType: "Raumlufttechnik",
    status: "completed",

    location: {
      street: "Hörsaal G 308",
      city: "Magdeburg",
    },
    description:
      "Planung und Installation einer modernen Lüftungsanlage für einen Universitätshörsaal unter Berücksichtigung spezieller Anforderungen an die Raumakustik und Luftqualität.",
    shortDescription: "Moderne Hörsaal-Lüftungsanlage",
    technicalData: {
      type: "Raumlufttechnische Anlage",
      additionalMetrics: [
        {
          label: "Einsatzort",
          value: "Hörsaal G 308",
        },
      ],
    },
    scope: ["Planung", "Installation", "Optimierung"],
    specialFeatures: ["Spezielle Hörsaalanforderungen", "Akustikoptimierung"],
    results: ["Optimales Raumklima für Lehrbetrieb"],
    imagePath: "/sawdust.jpg",
  },
  {
    _id: "foerderprogramm-gutachten",
    _type: "project",
    title: "Förderprogramm-Gutachten",
    slug: {
      current: "foerderprogramm-gutachten",
    },
    category: "study",
    projectType: "Technische Begutachtung",
    status: "completed",

    location: {
      city: "Sachsen-Anhalt",
    },
    description:
      "Gutachterliche Bewertung verschiedener Fernwärmeprojekte im Rahmen von Bund-Länder-Förderprogrammen. Schwerpunkt auf Qualitätssicherung und Effizienzoptimierung.",
    shortDescription: "Begutachtung von Fernwärmeprojekten",
    technicalData: {
      type: "Technische Begutachtung",
      additionalMetrics: [
        {
          label: "Projektart",
          value: "Fernwärmeprojekte",
        },
      ],
    },
    scope: ["Analyse", "Bewertung", "Empfehlung"],
    specialFeatures: ["Bund-Länder-Förderprogramme", "Qualitätssicherung"],
    results: ["Qualitätssicherung Fördermaßnahmen"],
    imagePath: "/thermostat.jpg",
  },
];
