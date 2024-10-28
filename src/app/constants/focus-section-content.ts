// focus-section-content.ts
interface FocusAreaItem {
  title: string;
  items: string[];
}

export const FOCUS_SECTION_CONTENT = {
  heading: "Tätigkeitsschwerpunkte",

  introduction: {
    highlightedText: "Klimaschutz ist für uns von zentraler Bedeutung.",
    mainText:
      "Wir konzentrieren uns auf die technische Umsetzung klimafreundlicher, idealerweise klimaneutraler Lösungen. Dabei gewährleisten wir durch eine vorausschauende wirtschaftliche Analyse die langfristige Rentabilität dieser Maßnahmen. Präzise Emissionsberechnungen belegen zudem die Relevanz unserer Ansätze und deren positiven Einfluss auf eine nachhaltige Zukunft.",
  },

  images: [
    { src: "/thermostat.jpg", alt: "Abbildung Thermostat" },
    { src: "/tablet.jpg", alt: "Abbildung Wärmesteuerung" },
    { src: "/pipes.jpg", alt: "Abbildung Heizsystem" },
  ],

  focusAreas: [
    {
      title:
        "Ingenieurleistungen der technischen Gebäudeausrüstung in den Bereichen:",
      items: [
        "Heizung (z. B. Wärmepumpen, Blockheizkraftwerke, Holzenergie, Solarthermie).",
        "Heizkörperauslegung VDI 6030",
        "Sanitär (Frischwasser und Abwasser)",
        "Lüftung (z B. Komfortwohnraumlüftung für Passivhaus)",
        "Elektrotechnik",
        "Klimatechnik",
        "Beratung und Entwicklung von Strategien zur Dekarbonisierung",
        "Fördermittelberatung",
        "Gutachter",
        "Contractingberatung",
        "Energiestudien",
        "Wirtschaftlichkeitsberechnungen (auch gemäß VDI 2067)",
      ],
    },
    {
      title: "Technische Gebäudeausrüstung im Einzelnen:",
      items: [
        "Heizlast DIN EN 12831",
        "Heizkörperauslegung VDI 6030",
        "Heizungsnetz",
        "Fußbodenheizung EN 1264",
        "Trinkwassernetz DIN 1988 – 300",
        "Entwässerung DIN EN 12056 / 1986",
        "Lüftungstechnik, Luftkanalnetz, DIN 1946, DIN 18017 / 3 (Entlüftung innenliegender Räume)",
      ],
    },
    {
      title: "Organisation und Wirtschaftlichkeitsberechnung:",
      items: [
        "Webgestützte Kartierung von Heizzentralen, Schlüsseltresoren und Medienleitungen zu deren Sicherheit bei Tiefbauarbeiten",
        "Notdienst- und Störungsmanagement sowie Dokumentation von Vorfällen",
        "Fabrikatsunabhängige Gebäudeleittechnik inkl. historische Trends für Kundenrückfragen",
        "Dynamische Betrachtung von Energieeffizienzmaßnahmen vor dem Hintergrund des Lebenszyklus und den wahrscheinlichen Energiepreisentwicklungen",
        "Gegenüberstellung verschiedener technischer Lösungsvarianten und deren wirtschaftliche Auswirkung",
        "Gegenüberstellung verschiedener Primärenergieträger und deren wirtschaftliche Auswirkung",
      ],
    },
    {
      title: "Abrechnung der Energielieferung:",
      items: [
        "Begleitung bei der Entwicklung und Betreuung einer Software zur Energieabrechnung",
        "Ausbau von funkgestützten und internetgestützten Ablesesystemen",
        "Einführung von Smart Metering und eines Webportals für Energiekunden",
      ],
    },
    {
      title: "Energieeinkauf:",
      items: [
        "Ausschreibung und Vertragsgestaltung für die Energieträger Heizöl, Holzhackschnitzel und Holzpellets",
        "Preisverhandlung und Vertragsgestaltung bei dem Bezug von Erdgas und Fernwärme",
        "Überwachung des Energieeinkaufes und Prüfung der Preisanpassung",
      ],
    },
    {
      title: "Vertragswesen / Rechtsangelegenheiten:",
      items: [
        "AVB Fernwärme V, KWKG, EEG, EnWG, StromGVV, GasGVV, WärmelieferVO",
        "Mietrecht und WEG-Recht im Kontext mit Energieversorgungsmodell",
        "Vertragswesen mit Kunden, Dienstleistern und Energiebezug",
        "Rahmenverträge Wartung, Notdienst, Energiebezug",
        "Vertragsgestaltung Energielieferung an Drittkunden",
        "Gewährleistungsangelegenheiten",
      ],
    },
    {
      title: "Konzeption und Planung:",
      items: [
        "Investitionsplanung",
        "Überprüfung der EnEV-Berechnungen bei energetischer Sanierung in Bezug auf Wärmebedarf für Raumheizung und Trinkwarmwasser",
        "Businesspläne für Dritte / Contractingmodell",
      ],
    },
  ],
};
