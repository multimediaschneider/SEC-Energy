// constants/projects-fallback-data.ts

interface ProjectLocation {
  city: string;
  street?: string;
}

interface TechnicalMetric {
  label: string;
  value: string;
}

interface TechnicalData {
  type: string;
  powerOutput: string;
  additionalMetrics: TechnicalMetric[];
}

interface Project {
  _id: string;
  title: string;
  category: string;
  projectType: string;
  status: string;
  location: ProjectLocation;
  description: string;
  shortDescription: string;
  technicalData: TechnicalData;
  scope: string[];
  specialFeatures: string[];
  results: string[];
  images: string[];
}

interface ProjectsData {
  projectsPage: {
    headline: string;
    introduction: string;
    metaTitle: string;
    metaDescription: string;
  };
  projects: {
    [key: string]: Project;
  };
}

export const projectsFallbackData: ProjectsData = {
  projectsPage: {
    headline: "Unsere Referenzprojekte",
    introduction:
      "Entdecken Sie unsere erfolgreich realisierten Projekte im Bereich Energieeffizienz und nachhaltiger Versorgung",
    metaTitle: "Referenzprojekte - SEC Engineering Consulting",
    metaDescription:
      "Erkunden Sie unsere realisierten Projekte im Bereich Energieeffizienz und nachhaltiger Versorgung. Von BHKW bis Nahwärmekonzepte.",
  },
  projects: {
    aok: {
      _id: "aok-niedersachsen",
      title: "AOK Niedersachsen",
      category: "Contracting",
      projectType: "Contracting (Strom-, Wärme- und Kälteversorgung)",
      status: "completed",
      location: {
        city: "Hannover",
      },
      description:
        "Realisierung einer hocheffizienten Energiezentrale für die AOK Niedersachsen. Das Projekt umfasst die vollständige Energieversorgung des Verwaltungsgebäudes durch ein leistungsstarkes BHKW-System mit Kraft-Wärme-Kälte-Kopplung.",
      shortDescription:
        "Energiezentrale für Verwaltungsgebäude mit kombinierter Strom-, Wärme- und Kälteversorgung",
      technicalData: {
        type: "BHKW mit Kraft-Wärme-Kälte-Kopplung",
        powerOutput: "495 kW elektrisch",
        additionalMetrics: [
          {
            label: "Branche",
            value: "Bürogebäude",
          },
          {
            label: "Betriebsstatus",
            value: "In laufendem Betrieb",
          },
        ],
      },
      scope: [
        "Konzeption",
        "Installation und Betrieb einer komplexen Energiezentrale",
        "Technische Betriebsführung",
      ],
      specialFeatures: [
        "Zentrale Steuerung und Überwachung",
        "Optimierte Lastmanagement-Strategie",
      ],
      results: [
        "Signifikante Reduktion der Energiekosten",
        "Erhöhte Versorgungssicherheit",
        "Optimierte CO2-Bilanz",
      ],
      images: ["/pipes.jpg"],
    },
    expo: {
      _id: "expo-projekt-kronsberg",
      title: "Expo-Projekt Kronsberg",
      category: "Contracting",
      projectType: "Nahwärmeversorgung",
      status: "completed",
      location: {
        city: "Hannover",
      },
      description:
        "Entwicklung und Umsetzung eines zukunftsweisenden Energieversorgungskonzepts für das EXPO-Wohnquartier Kronsberg. Integration eines leistungsstarken BHKWs in ein effizientes Nahwärmenetz.",
      shortDescription: "Quartiersversorgung im Rahmen des EXPO 2000 Projekts",
      technicalData: {
        type: "BHKW mit Nahwärmenetz",
        powerOutput: "220 kW elektrisch",
        additionalMetrics: [
          {
            label: "Branche",
            value: "Wohnungswirtschaft",
          },
          {
            label: "Betriebsstatus",
            value: "In laufendem Betrieb",
          },
        ],
      },
      scope: [
        "Quartiersversorgung",
        "Nahwärmenetz-Management",
        "Energielieferung",
      ],
      specialFeatures: [
        "Quartiersweites Energiemanagement",
        "Modernste Netzleittechnik",
      ],
      results: [
        "Vorbildliche CO2-Bilanz",
        "Hohe Wirtschaftlichkeit",
        "Modellcharakter für nachhaltige Stadtentwicklung",
      ],
      images: ["/thermostat.jpg"],
    },
    klinikum: {
      _id: "klinikum-wahrendorff",
      title: "Klinikum Wahrendorff",
      category: "Contracting",
      projectType: "BHKW-Contracting",
      status: "completed",
      location: {
        city: "Sehnde",
      },
      description:
        "Realisierung einer ausfallsicheren Energieversorgung für das Klinikum Wahrendorff. Das Projekt umfasst zwei BHKW-Anlagen unterschiedlicher Leistungsklassen zur optimalen Lastabdeckung und maximalen Versorgungssicherheit.",
      shortDescription:
        "Energieversorgung für sensiblen Klinikbetrieb durch redundante BHKW-Systeme",
      technicalData: {
        type: "BHKW",
        powerOutput: "89 kW + 110 kW elektrisch",
        additionalMetrics: [
          {
            label: "Branche",
            value: "Gesundheitswesen",
          },
          {
            label: "Betriebsstatus",
            value: "In laufendem Betrieb",
          },
        ],
      },
      scope: [
        "Energieversorgungskonzept",
        "Installation und Betrieb von zwei BHKW-Anlagen",
        "Technische Betriebsführung",
      ],
      specialFeatures: [
        "Redundantes System",
        "Notfallkonzept",
        "Bedarfsgerechte Steuerung",
      ],
      results: [
        "Höchste Versorgungssicherheit",
        "Optimierte Betriebskosten",
        "Umweltfreundliche Energiebereitstellung",
      ],
      images: ["/pipes.jpg"],
    },
    holzhackschnitzelSingen: {
      _id: "holzhackschnitzel-singen",
      title: "Holzhackschnitzelfeuerung Singen",
      category: "Privatgutachten",
      projectType: "Technische Machbarkeitsstudie",
      status: "completed",
      location: {
        city: "Singen",
        street: "Überlinger Straße 11",
      },
      description:
        "Technische und wirtschaftliche Analyse der geplanten Dimensionierung von Holzhackschnitzel- und Spitzenlastheizkessel. Entwicklung von Optimierungsvorschlägen für einen effizienten und wirtschaftlichen Anlagenbetrieb.",
      shortDescription:
        "Gutachterliche Prüfung und Optimierung einer Holzhackschnitzelfeuerung",
      technicalData: {
        type: "Holzfeuerung mit Spitzenlastkessel",
        powerOutput: "Nicht spezifiziert",
        additionalMetrics: [
          {
            label: "Branche",
            value: "Gewerbe",
          },
          {
            label: "Einsatzenergie",
            value: "Holzhackschnitzel",
          },
        ],
      },
      scope: [
        "Dimensionierungsprüfung",
        "Wirtschaftlichkeitsanalyse",
        "Planungsempfehlung",
      ],
      specialFeatures: [
        "Optimierte Kesselauslegung",
        "Intelligentes Spitzenlastmanagement",
      ],
      results: ["Validiertes Anlagenkonzept", "Optimierte Investitionskosten"],
      images: ["/sawdust.jpg"],
    },
    hotelsBhkwGoslar: {
      _id: "hotels-bhkw-goslar",
      title: "Hotels BHKW Goslar",
      category: "Privatgutachten",
      projectType: "Wirtschaftlichkeitsanalyse",
      status: "completed",
      location: {
        city: "Goslar",
        street: "Marktstraße 1, Münzstraße 10 und 11",
      },
      description:
        "Umfassende Untersuchung zur wirtschaftlichen und technischen Machbarkeit von Blockheizkraftwerken an drei Hotelstandorten. Bewertung der Klimaschutzeffekte und Entwicklung von Handlungsempfehlungen.",
      shortDescription: "Standortübergreifende BHKW-Analyse für drei Hotels",
      technicalData: {
        type: "BHKW",
        powerOutput: "Nicht spezifiziert",
        additionalMetrics: [
          {
            label: "Branche",
            value: "Hotellerie",
          },
        ],
      },
      scope: [
        "Machbarkeitsstudie",
        "Wirtschaftlichkeitsberechnung",
        "Klimaschutzanalyse",
      ],
      specialFeatures: [
        "Standortvergleichende Analyse",
        "Berücksichtigung denkmalschutzrechtlicher Aspekte",
      ],
      results: [
        "Fundierte Entscheidungsgrundlage",
        "Quantifizierte Einsparpotenziale",
      ],
      images: ["/pipes.jpg"],
    },
    schulzentrumLetter: {
      _id: "schulzentrum-letter",
      title: "Schulzentrum Letter",
      category: "Contracting",
      projectType: "BHKW-Contracting",
      status: "completed",
      location: {
        city: "Letter",
      },
      description:
        "Realisierung eines modernen Energieversorgungskonzepts für das Schulzentrum Letter. Integration eines leistungsstarken BHKWs zur kombinierten Strom- und Wärmeerzeugung unter Berücksichtigung der speziellen Anforderungen einer Bildungseinrichtung.",
      shortDescription: "Energie- und Wärmeversorgung eines Schulzentrums",
      technicalData: {
        type: "BHKW",
        powerOutput: "220 kW elektrisch",
        additionalMetrics: [
          {
            label: "Branche",
            value: "Bildung",
          },
          {
            label: "Betriebsstatus",
            value: "In laufendem Betrieb",
          },
        ],
      },
      scope: [
        "Energieversorgung für Bildungseinrichtung",
        "Installation und Betrieb BHKW",
      ],
      specialFeatures: [
        "Angepasst an Schulbetrieb",
        "Optimierte Ferienabschaltung",
      ],
      results: [
        "Reduzierte Energiekosten",
        "Pädagogischer Mehrwert durch Anschauungsobjekt",
      ],
      images: ["/thermostat.jpg"],
    },
    raumlufttechnikMagdeburg: {
      _id: "raumlufttechnik-magdeburg",
      title: "Raumlufttechnik Universität Magdeburg",
      category: "Technische Gebäudeausrüstung",
      projectType: "Planung Raumlufttechnik",
      status: "completed",
      location: {
        city: "Magdeburg",
        street: "Hörsaal G 308",
      },
      description:
        "Installation einer hochmodernen raumlufttechnischen Anlage unter besonderer Berücksichtigung der akustischen Anforderungen und Luftqualität in einem stark frequentierten Hörsaal.",
      shortDescription: "Lüftungsanlage für universitären Hörsaal",
      technicalData: {
        type: "Lüftungstechnik",
        powerOutput: "Nicht spezifiziert",
        additionalMetrics: [
          {
            label: "Branche",
            value: "Bildung",
          },
        ],
      },
      scope: ["Planung", "Installation und Optimierung der Raumlufttechnik"],
      specialFeatures: ["Akustikoptimierung", "Bedarfsgerechte Luftführung"],
      results: ["Optimales Raumklima", "Minimierte Störgeräusche"],
      images: ["/pipes.jpg"],
    },
    kurzentrumBadGrund: {
      _id: "kurzentrum-bad-grund",
      title: "Kurzentrum Bad Grund",
      category: "Contracting",
      projectType: "BHKW-Contracting",
      status: "completed",
      location: {
        city: "Bad Grund",
      },
      description:
        "Implementierung eines maßgeschneiderten Energieversorgungskonzepts für den speziellen Bedarf eines Kurzentrums. Besondere Berücksichtigung der ganzjährig hohen Wärmelast durch therapeutische Einrichtungen.",
      shortDescription: "Versorgung eines Kurzentrums mit hohem Wärmebedarf",
      technicalData: {
        type: "BHKW",
        powerOutput: "110 kW elektrisch",
        additionalMetrics: [
          {
            label: "Branche",
            value: "Tourismus/Gesundheit",
          },
          {
            label: "Betriebsstatus",
            value: "In laufendem Betrieb",
          },
        ],
      },
      scope: ["Energieversorgung für Kureinrichtung", "BHKW-Betrieb"],
      specialFeatures: [
        "Angepasst an Kurbetrieb",
        "Optimierte Warmwasserbereitstellung",
      ],
      results: [
        "Gesteigerte Energieeffizienz",
        "Zuverlässige Versorgung der therapeutischen Einrichtungen",
      ],
      images: ["/sawdust.jpg"],
    },
    biomethanBhkwProjekte: {
      _id: "biomethan-bhkw-projekte",
      title: "Biomethan BHKW-Projekte",
      category: "Contracting",
      projectType: "Technische Betriebsführung",
      status: "completed",
      location: {
        city: "Hannover",
        street: "Gronostraße 6 und Erlenstieg 5",
      },
      description:
        "Realisierung von zwei Blockheizkraftwerken mit Biomethan als nachhaltigem Energieträger. Fokus auf CO2-neutrale Energieerzeugung bei gleichzeitig hoher Versorgungssicherheit.",
      shortDescription: "Energieversorgung durch Biomethan-BHKWs",
      technicalData: {
        type: "BHKW",
        powerOutput: "140 kW el. und 110 kW el.",
        additionalMetrics: [
          {
            label: "Einsatzenergie",
            value: "Biomethan",
          },
          {
            label: "Betriebsstatus",
            value: "In laufendem Betrieb",
          },
        ],
      },
      scope: ["Installation und Betrieb von zwei Biomethan-BHKWs"],
      specialFeatures: [
        "Nutzung erneuerbarer Energien",
        "CO2-neutraler Betrieb",
      ],
      results: ["Nachhaltige Energieversorgung", "Reduzierte CO2-Emissionen"],
      images: ["/pipes.jpg"],
    },
    contractingBeratungWohnungsunternehmen: {
      _id: "contracting-beratung-wohnungsunternehmen",
      title: "Contracting-Beratung Wohnungsunternehmen Hannover",
      category: "Beratung",
      projectType: "Contracting-Strategieentwicklung",
      status: "completed",
      location: {
        city: "Hannover",
      },
      description:
        "Strategische Beratung zur Implementierung eines Contracting-Geschäftsfelds in einer Tochtergesellschaft. Umfasst Wirtschaftlichkeitsanalysen bestehender Wärmeversorgung, Investitionsplanung für Heizzentralen und Entwicklung der Vertragsstrukturen.",
      shortDescription:
        "Entwicklung eines Contracting-Geschäftsfeldes für großes Wohnungsunternehmen",
      technicalData: {
        type: "Heizzentralen",
        powerOutput: "Nicht spezifiziert",
        additionalMetrics: [
          {
            label: "Branche",
            value: "Wohnungswirtschaft",
          },
        ],
      },
      scope: [
        "Strategische Beratung",
        "Wirtschaftlichkeitsberechnung",
        "Vertragswerk",
      ],
      specialFeatures: [
        "Maßgeschneidertes Geschäftsmodell",
        "Umfassendes Vertragswerk",
      ],
      results: ["Neue Geschäftsfeld-Strategie", "Optimierte Betriebskosten"],
      images: ["/thermostat.jpg"],
    },
    waermecontractingProjektentwickler: {
      _id: "waermecontracting-projektentwickler",
      title: "Wärmecontracting Projektentwickler",
      category: "Beratung",
      projectType: "Contracting-Konzeptentwicklung",
      status: "completed",
      location: {
        city: "Nicht spezifiziert",
      },
      description:
        "Entwicklung von Contracting-Lösungen für einen Projektentwickler. Analyse der technischen und wirtschaftlichen Machbarkeit sowie Erarbeitung von Umsetzungsstrategien für verschiedene Immobilienprojekte.",
      shortDescription:
        "Strategische Beratung zur Integration von Wärmecontracting in Immobilienprojekte",
      technicalData: {
        type: "Nicht spezifiziert",
        powerOutput: "Nicht spezifiziert",
        additionalMetrics: [
          {
            label: "Branche",
            value: "Immobilienwirtschaft",
          },
        ],
      },
      scope: ["Contracting-Beratung", "Konzeptentwicklung"],
      specialFeatures: [
        "Modulares Contracting-Konzept",
        "Skalierbare Lösungen",
      ],
      results: ["Entscheidungsgrundlage für neue Geschäftsmodelle"],
      images: ["/sawdust.jpg"],
    },
  },
};

export type {
  ProjectsData,
  Project,
  ProjectLocation,
  TechnicalData,
  TechnicalMetric,
};
