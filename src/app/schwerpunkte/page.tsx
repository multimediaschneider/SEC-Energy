"use client";
import Layout from "@/components/layout";
import CollapsibleText from "@/components/content/collapsible-text";
import BodyText from "@/components/content/body-text";
import BodyHeading from "@/components/body-heading";
import BodyImages from "@/components/body-images";

export default function Component() {
  const images = [
    { src: "/thermostat.jpg", alt: "Abbildung Thermostat" },
    { src: "/tablet.jpg", alt: "Abbildung Wärmesteuerung" },
    { src: "/pipes.jpg", alt: "Abbildung Heizsystem" },
  ];

  return (
    <Layout>
      <BodyHeading>Tätigkeitsschwerpunkte</BodyHeading>
      <BodyText>
        <span className="font-bold">
          Klimaschutz ist für uns von zentraler Bedeutung.
        </span>{" "}
        Wir konzentrieren uns auf die technische Umsetzung klimafreundlicher,
        idealerweise klimaneutraler Lösungen. Dabei gewährleisten wir durch eine
        vorausschauende wirtschaftliche Analyse die langfristige Rentabilität
        dieser Maßnahmen. Präzise Emissionsberechnungen belegen zudem die
        Relevanz unserer Ansätze und deren positiven Einfluss auf eine
        nachhaltige Zukunft.
      </BodyText>
      <BodyImages images={images} />
      <div className="mb-12">
        <CollapsibleText
          collapsibleContent={
            <ul className="list-disc list-inside">
              <li>
                Heizung (z. B. Wärmepumpen, Blockheizkraftwerke, Holzenergie,
                Solarthermie).
              </li>
              <li>Heizkörperauslegung VDI 6030</li>
              <li>Sanitär (Frischwasser und Abwasser)</li>
              <li>Lüftung (z B. Komfortwohnraumlüftung für Passivhaus)</li>
              <li>Elektrotechnik</li>
              <li>Klimatechnik</li>
              <li>
                Beratung und Entwicklung von Strategien zur Dekarbonisierung
              </li>
              <li>Fördermittelberatung</li>
              <li>Gutachter</li>
              <li>Contractingberatung</li>
              <li>Energiestudien</li>
              <li>Wirtschaftlichkeitsberechnungen (auch gemäß VDI 2067)</li>
            </ul>
          }
        >
          Ingenieurleistungen der technischen Gebäudeausrüstung in den
          Bereichen:
        </CollapsibleText>
        <CollapsibleText
          collapsibleContent={
            <ul className="list-disc list-inside">
              <li>Heizlast DIN EN 12831</li>
              <li>Heizkörperauslegung VDI 6030</li>
              <li>Heizungsnetz</li>
              <li>Fußbodenheizung EN 1264</li>
              <li>Trinkwassernetz DIN 1988 – 300</li>
              <li>Entwässerung DIN EN 12056 / 1986</li>
              <li>
                Lüftungstechnik, Luftkanalnetz, DIN 1946, DIN 18017 / 3
                (Entlüftung innenliegender Räume)
              </li>
            </ul>
          }
        >
          Technische Gebäudeausrüstung im Einzelnen:
        </CollapsibleText>
        <CollapsibleText
          collapsibleContent={
            <ul className="list-disc list-inside">
              <li>
                Webgestützte Kartierung von Heizzentralen, Schlüsseltresoren und
                Medienleitungen zu deren Sicherheit bei Tiefbauarbeiten
              </li>
              <li>
                Notdienst- und Störungsmanagement sowie Dokumentation von
                Vorfällen
              </li>
              <li>
                Fabrikatsunabhängige Gebäudeleittechnik inkl. historische Trends
                für Kundenrückfragen
              </li>
              <li>
                Dynamische Betrachtung von Energieeffizienzmaßnahmen vor dem
                Hintergrund des Lebenszyklus und den wahrscheinlichen
                Energiepreisentwicklungen
              </li>
              <li>
                Gegenüberstellung verschiedener technischer Lösungsvarianten und
                deren wirtschaftliche Auswirkung
              </li>
              <li>
                Gegenüberstellung verschiedener Primärenergieträger und deren
                wirtschaftliche Auswirkung
              </li>
            </ul>
          }
        >
          Organisation und Wirtschaftlichkeitsberechnung:
        </CollapsibleText>
        <CollapsibleText
          collapsibleContent={
            <ul className="list-disc list-inside">
              <li>
                Begleitung bei der Entwicklung und Betreuung einer Software zur
                Energieabrechnung
              </li>
              <li>
                Ausbau von funkgestützten und internetgestützten Ablesesystemen
              </li>
              <li>
                Einführung von Smart Metering und eines Webportals für
                Energiekunden
              </li>
            </ul>
          }
        >
          Abrechnung der Energielieferung:
        </CollapsibleText>
        <CollapsibleText
          collapsibleContent={
            <ul className="list-disc list-inside">
              <li>
                Ausschreibung und Vertragsgestaltung für die Energieträger
                Heizöl, Holzhackschnitzel und Holzpellets
              </li>
              <li>
                Preisverhandlung und Vertragsgestaltung bei dem Bezug von Erdgas
                und Fernwärme
              </li>
              <li>
                Überwachung des Energieeinkaufes und Prüfung der Preisanpassung
              </li>
            </ul>
          }
        >
          Energieeinkauf:
        </CollapsibleText>
        <CollapsibleText
          collapsibleContent={
            <ul className="list-disc list-inside">
              <li>
                AVB Fernwärme V, KWKG, EEG, EnWG, StromGVV, GasGVV,
                WärmelieferVO
              </li>
              <li>
                Mietrecht und WEG-Recht im Kontext mit Energieversorgungsmodell
              </li>
              <li>Vertragswesen mit Kunden, Dienstleistern und Energiebezug</li>
              <li>Rahmenverträge Wartung, Notdienst, Energiebezug</li>
              <li>Vertragsgestaltung Energielieferung an Drittkunden</li>
              <li>Gewährleistungsangelegenheiten</li>
            </ul>
          }
        >
          Vertragswesen / Rechtsangelegenheiten:
        </CollapsibleText>
        <CollapsibleText
          collapsibleContent={
            <ul className="list-disc list-inside">
              <li>Investitionsplanung</li>
              <li>
                Überprüfung der EnEV-Berechnungen bei energetischer Sanierung in
                Bezug auf Wärmebedarf für Raumheizung und Trinkwarmwasser
              </li>
              <li>Businesspläne für Dritte / Contractingmodell</li>
            </ul>
          }
        >
          Konzeption und Planung:
        </CollapsibleText>
      </div>
    </Layout>
  );
}
