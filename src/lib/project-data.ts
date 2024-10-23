// src/lib/project-data.ts

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

export const currentProjects: Project[] = [
  {
    type: "Privatgutachten",
    title: "Dimensionierung der Holzhackschnitzelfeuerung",
    location: "Überlinger Straße 11, D-78224 Singen",
    summary:
      "Überprüfung und Empfehlung zur Dimensionierung von Holzhackschnitzel- und Spitzenlastheizkessel.",
    details: {
      scope:
        "Analyse der vorgelegten Dimensionierung für Holzhackschnitzelheizkessel und Spitzenlastheizkessel",
      services: [
        "Überprüfung der bestehenden Planungen",
        "Bewertung der Dimensionierung",
        "Erstellung von Empfehlungen",
      ],
      results:
        "Detaillierter Bericht mit Empfehlungen zur optimalen Dimensionierung der Heizkessel.",
      impact:
        "Optimierung der Energieeffizienz und Kostenreduktion durch angepasste Kesselgrößen.",
    },
  },
  {
    type: "Privatgutachten",
    title: "Analyse eines spezifischen Blockheizkraftwerks",
    location: "Hannover",
    summary:
      "Untersuchung der technischen Eigenschaften eines bestimmten BHKW-Fabrikats.",
    details: {
      scope:
        "Detaillierte technische Analyse eines spezifischen Blockheizkraftwerk-Modells",
      services: [
        "Bewertung der technischen Spezifikationen",
        "Analyse der Leistungsdaten",
        "Vergleich mit Industriestandards",
      ],
      results:
        "Technischer Bericht über die Leistungsfähigkeit und Eignung des untersuchten BHKW-Modells.",
      impact:
        "Fundierte Entscheidungsgrundlage für potenzielle Anwender oder Investoren.",
    },
  },
  {
    type: "Privatgutachten",
    title: "Wirtschaftlichkeit von Blockheizkraftwerken in Hotels",
    location: "Marktstraße 1, Münzstraße 10 und 11, Goslar",
    summary:
      "Untersuchung der Eignung von drei Hotels für den wirtschaftlichen Betrieb mit Blockheizkraftwerken (BHKW).",
    details: {
      scope:
        "Wirtschaftlichkeitsanalyse für den Einsatz von BHKWs in drei Hotelgebäuden",
      services: [
        "Schätzung der Investitionskosten",
        "Wirtschaftlichkeitsvergleich",
        "Berechnung des Klimaschutzeffekts",
        "Erstellung von Empfehlungen",
      ],
      results:
        "Umfassende Bewertung der wirtschaftlichen und ökologischen Aspekte des BHKW-Einsatzes.",
      impact:
        "Entscheidungsgrundlage für energieeffiziente und kostensparende Maßnahmen im Hotelbetrieb.",
    },
  },

  {
    type: "Energiestudie",
    title: "Wärmeversorgungskonzept für Bürogebäude und Pflegeheim",
    location: "Hannover",
    summary:
      "Umfassende Untersuchung verschiedener Wärmeversorgungsvarianten für Bürogebäude und Pflegeheim.",
    details: {
      scope:
        "Vergleich von Versorgungsvarianten: Separate Versorgung, Nahwärmenetz, Brennwertheizkessel, Blockheizkraftwerk",
      services: [
        "Schätzung der Investitionskosten für jede Variante",
        "Durchführung eines Wirtschaftlichkeitsvergleichs",
        "Analyse des Klimaschutzeffekts jeder Option",
        "Erstellung von Empfehlungen",
      ],
      results:
        "Detaillierte Analyse und Empfehlung der wirtschaftlichsten und umweltfreundlichsten Versorgungsvariante.",
      impact:
        "Entscheidungsgrundlage für eine nachhaltige und kosteneffiziente Energieversorgung der Gebäude.",
    },
  },
  {
    type: "Planung, Ausschreibung und Vergabe",
    title: "Heizungsanlage für Bürogebäude und Seniorenpflegeheim",
    location: "Hannover-Badenstedt",
    summary:
      "Komplette Projektabwicklung für die Heizungsanlage eines Bürogebäudes und die Kraft-Wärme-Kopplungsanlage eines Seniorenpflegeheims.",
    details: {
      scope:
        "Planung, Ausschreibung und Vergabe der Heizungsanlagen für zwei unterschiedliche Gebäudetypen",
      services: [
        "Erstellung detaillierter Planungsunterlagen",
        "Durchführung des Ausschreibungsverfahrens",
        "Bewertung der Angebote",
        "Unterstützung bei der Vergabe",
      ],
      results:
        "Erfolgreiche Auftragsvergabe an qualifizierte Unternehmen für beide Projekte.",
      impact:
        "Sicherstellung einer effizienten und zuverlässigen Wärmeversorgung für beide Einrichtungen.",
    },
  },
  {
    type: "Planung, Ausschreibung und Vergabe",
    title: "Gebäudetechnik für Wohneinheiten",
    location: "Hannover-List",
    summary:
      "Umfassende Planung und Vergabe der Gebäudetechnik für 12 Wohneinheiten.",
    details: {
      scope:
        "Planung, Ausschreibung und Vergabe von Heizung, Lüftung und Sanitäranlagen für einen Wohnkomplex",
      services: [
        "Erstellung technischer Planungsunterlagen",
        "Durchführung des Ausschreibungsverfahrens",
        "Angebotsbewertung und Vergabeempfehlung",
      ],
      results:
        "Erfolgreiche Vergabe aller gebäudetechnischen Gewerke an qualifizierte Unternehmen.",
      impact:
        "Gewährleistung moderner, effizienter und komfortabler Gebäudetechnik für die Bewohner.",
    },
  },
  {
    type: "Beratung",
    title: "Einführung von Contracting in Wohnungsunternehmen",
    location: "Hannover",
    summary:
      "Umfassende Beratung zur Einführung des Geschäftsfeldes Contracting in die Tochtergesellschaft eines großen Wohnungsunternehmens.",
    details: {
      scope:
        "Entwicklung einer Strategie zur Implementierung von Contracting-Dienstleistungen",
      services: [
        "Wirtschaftsplanung und Betriebskostenberechnung",
        "Investitionskostenschätzung für Heizzentralen-Erneuerung",
        "Erstellung eines Erneuerungsplans",
        "Entwicklung von Wärmelieferverträgen und Mietverträgen für Heizräume",
        "Empfehlungen zur Umsetzung",
      ],
      results:
        "Umfassendes Konzept zur erfolgreichen Einführung von Contracting-Dienstleistungen.",
      impact:
        "Erschließung neuer Geschäftsfelder und Optimierung der Wärmeversorgung im Wohnungsbestand.",
    },
  },
  {
    type: "Beratung",
    title: "Wärmecontracting für Projektentwickler",
    summary:
      "Beratung zum Einsatz von Wärmecontracting bei einem Projektentwickler.",
    details: {
      scope:
        "Analyse und Beratung zur Integration von Wärmecontracting in Immobilienprojekte",
      services: [
        "Bewertung der Eignung von Projekten für Wärmecontracting",
        "Entwicklung von Contracting-Modellen",
        "Wirtschaftlichkeitsanalysen",
        "Empfehlungen zur Umsetzung",
      ],
      results:
        "Maßgeschneiderte Contracting-Konzepte für verschiedene Immobilienprojekte.",
      impact:
        "Steigerung der Attraktivität und Nachhaltigkeit von Immobilienprojekten durch innovative Energieversorgungskonzepte.",
    },
  },
  {
    type: "Beratung",
    title: "Wärmepreiskalkulation für Holzfeuerung mit Nahwärmenetz",
    location: "Uetze",
    summary:
      "Beratung zur Kalkulation des Wärmepreises für eine Holzfeuerungsanlage mit angeschlossenem Nahwärmenetz.",
    details: {
      scope:
        "Entwicklung eines Kalkulationsmodells für die Wärmepreisbestimmung",
      services: [
        "Analyse der Kosten für Brennstoff, Betrieb und Wartung",
        "Berücksichtigung von Investitions- und Finanzierungskosten",
        "Entwicklung eines transparenten Preismodells",
        "Empfehlungen zur langfristigen Preisgestaltung",
      ],
      results:
        "Fundiertes Kalkulationsmodell für einen wettbewerbsfähigen und kostendeckenden Wärmepreis.",
      impact:
        "Sicherstellung einer wirtschaftlich tragfähigen und für Kunden attraktiven Wärmeversorgung.",
    },
  },
];
