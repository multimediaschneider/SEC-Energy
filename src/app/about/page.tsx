import Link from "next/link";

import Navbar from "@/components/navbar";

import BodyText from "@/components/body-text";
import Layout from "@/components/layout";
import BodyHeading from "@/components/body-heading";

export default function Component() {
  return (
    <Layout>
      <Navbar />
      <BodyHeading>Über SEC</BodyHeading>
      <BodyText>
        Schneider Energy Consulting (SEC) ist ein herstellerunabhängiges
        Unternehmen, das sich auf die Planung, Bauabnahme und den Betrieb von
        Wärmeversorgungsanlagen spezialisiert hat. Unsere Schwerpunkte liegen im
        Bereich Wärmecontracting, Erdgas- und Biomethan-Blockheizkraftwerke
        (BHKW), Holzhackschnitzel- und Holzpelletsheizungen, Solarthermie,
        Wärmepumpen, Geothermie und Ladeinfrastruktur für E-Mobilität. Wir
        bieten umfassende Leistungen von Machbarkeitsstudien bis hin zur
        Anlagenoptimierung und arbeiten in einem Netzwerk von Spezialisten
        zusammen, um klimaschonende Lösungen zu realisieren.
      </BodyText>

      <BodyHeading>Geschäftsführung</BodyHeading>
      <BodyText>
        Dierk Schneider, Diplom-Ingenieur der Versorgungstechnik, verfügt über
        mehr als 30 Jahre Erfahrung in der Energiebranche. Seit Mai 2020 ist er
        Geschäftsführer von SEC Consulting GmbH und hat zuvor leitende
        Positionen in Unternehmen wie hanova SERVICES GmbH und GETEC AG
        innegehabt. Seine Expertise liegt in der Konzeption und Planung
        energieeffizienter Anlagen sowie der Beratung im Wärmecontracting. Zudem
        ist er als Gastdozent an Hochschulen tätig und Autor zahlreicher
        Fachpublikationen.
      </BodyText>
    </Layout>
  );
}
