"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PageLayout from "@/components/page-layout";
import Container from "@/components/ui/container";

export default function DatenschutzPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Handle navigation logic
  useEffect(() => {
    // Check for hash in URL on load
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setActiveSection(hash);
      scrollToSection(hash);
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.pageYOffset + 150;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 150; // Adjust based on your navbar height
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  // Navigation click handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    window.history.pushState(null, "", `#${sectionId}`);
  };

  // Sections data
  const sections = [
    { id: "intro", title: "Übersicht" },
    { id: "datenerhebung", title: "Datenerhebung" },
    { id: "datenverarbeitung", title: "Datenverarbeitung" },
    { id: "datenschutzrechte", title: "Ihre Rechte" },
    { id: "cookies", title: "Cookies" },
    { id: "kontaktformular", title: "Kontaktformular" },
    { id: "drittanbieter", title: "Drittanbieter" },
    { id: "aenderungen", title: "Änderungen" },
  ];

  return (
    <PageLayout>
      <div className="pt-36 pb-16 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Navigation sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-36">
                <h2 className="text-xl font-medium text-emerald-700 mb-6 pb-2 border-b border-gray-200">
                  Inhaltsverzeichnis
                </h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => handleNavClick(e, section.id)}
                      className={`block py-2 px-3 rounded transition-colors ${
                        activeSection === section.id
                          ? "bg-emerald-50 text-emerald-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <Link
                    href="/impressum"
                    className="text-emerald-600 hover:text-emerald-800 transition-colors"
                  >
                    Zum Impressum
                  </Link>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:w-3/4">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h1 className="text-3xl font-medium text-emerald-700 mb-8 pb-4 border-b border-gray-200">
                  Datenschutzerklärung
                </h1>

                <section id="intro" className="mb-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Übersicht
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
                    Anliegen. In dieser Datenschutzerklärung informieren wir Sie
                    über die wichtigsten Aspekte der Datenverarbeitung im Rahmen
                    unserer Website.
                  </p>
                  <p className="text-gray-600">
                    Verantwortlicher im Sinne der Datenschutzgesetze ist:
                  </p>
                  <div className="mt-2 space-y-1 text-gray-600">
                    <p>Hans Mustermann</p>
                    <p>Hans Firma</p>
                    <p>Musterstrasse 255</p>
                    <p>00000 Musterhausen</p>
                    <p>E-Mail: muster-mail@muster.de</p>
                  </div>
                </section>

                <section id="datenerhebung" className="mb-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Datenerhebung und -verarbeitung
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Bei der bloß informatorischen Nutzung unserer Website
                    erheben wir nur die personenbezogenen Daten, die Ihr Browser
                    an unseren Server übermittelt. Diese sind:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
                    <li>IP-Adresse</li>
                    <li>Datum und Uhrzeit der Anfrage</li>
                    <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                    <li>Inhalt der Anforderung (konkrete Seite)</li>
                    <li>Zugriffsstatus/HTTP-Statuscode</li>
                    <li>Jeweils übertragene Datenmenge</li>
                    <li>Website, von der die Anforderung kommt</li>
                    <li>Browser</li>
                    <li>Betriebssystem und dessen Oberfläche</li>
                    <li>Sprache und Version der Browsersoftware</li>
                  </ul>
                  <p className="text-gray-600">
                    Die Verarbeitung dieser Daten ist erforderlich, um den
                    Besuch der Website zu ermöglichen und die dauerhafte
                    Funktionsfähigkeit und Sicherheit unserer Systeme zu
                    gewährleisten. Die Daten werden für die Dauer des Besuchs
                    gespeichert und anschließend automatisch gelöscht.
                  </p>
                </section>

                <section id="datenverarbeitung" className="mb-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Rechtsgrundlage der Datenverarbeitung
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Die Datenverarbeitung erfolgt auf Basis von Art. 6 Abs. 1
                    lit. f DSGVO. Unser berechtigtes Interesse liegt in der
                    Gewährleistung des reibungslosen Funktionierens unserer
                    Website sowie in der Verbesserung unseres Angebots.
                  </p>
                  <p className="text-gray-600">
                    Soweit Sie uns Ihre Einwilligung zur Verarbeitung Ihrer
                    personenbezogenen Daten erteilt haben, ist Art. 6 Abs. 1
                    lit. a DSGVO die Rechtsgrundlage. Eine erteilte Einwilligung
                    kann jederzeit widerrufen werden. Der Widerruf gilt für die
                    Zukunft und berührt nicht die Rechtmäßigkeit der bis dahin
                    erfolgten Verarbeitung.
                  </p>
                </section>

                <section id="datenschutzrechte" className="mb-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Ihre Datenschutzrechte
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Als betroffene Person haben Sie folgende Rechte:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>
                      <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben
                      das Recht, Auskunft über die von uns verarbeiteten
                      personenbezogenen Daten zu verlangen.
                    </li>
                    <li>
                      <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong>{" "}
                      Sie können die Berichtigung unrichtiger oder die
                      Vervollständigung unvollständiger Daten verlangen.
                    </li>
                    <li>
                      <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie
                      haben das Recht, die Löschung Ihrer Daten zu verlangen.
                    </li>
                    <li>
                      <strong>
                        Recht auf Einschränkung der Verarbeitung (Art. 18
                        DSGVO):
                      </strong>{" "}
                      Sie können die Einschränkung der Verarbeitung Ihrer Daten
                      verlangen.
                    </li>
                    <li>
                      <strong>
                        Recht auf Datenübertragbarkeit (Art. 20 DSGVO):
                      </strong>{" "}
                      Sie haben das Recht, die Daten in einem strukturierten,
                      gängigen und maschinenlesbaren Format zu erhalten oder die
                      Übermittlung an einen anderen Verantwortlichen zu
                      verlangen.
                    </li>
                    <li>
                      <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie
                      haben das Recht, jederzeit gegen die Verarbeitung Ihrer
                      Daten Widerspruch einzulegen.
                    </li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    Darüber hinaus haben Sie das Recht, sich bei einer
                    Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                    personenbezogenen Daten zu beschweren.
                  </p>
                </section>

                <section id="cookies" className="mb-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Cookies
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Unsere Website verwendet teilweise Cookies. Cookies sind
                    kleine Textdateien, die auf Ihrem Endgerät abgelegt werden
                    und die Ihr Browser speichert. Sie dienen dazu, unser
                    Angebot nutzerfreundlicher und effektiver zu machen.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Die meisten der von uns verwendeten Cookies sind sogenannte
                    Session-Cookies, die nach Ende Ihres Besuchs automatisch
                    gelöscht werden. Andere Cookies bleiben auf Ihrem Endgerät
                    gespeichert, bis Sie diese löschen oder die Speicherdauer
                    abläuft.
                  </p>
                  <p className="text-gray-600">
                    Sie können Ihren Browser so einstellen, dass Sie über das
                    Setzen von Cookies informiert werden und Cookies nur im
                    Einzelfall erlauben, die Annahme von Cookies für bestimmte
                    Fälle oder generell ausschließen sowie das automatische
                    Löschen der Cookies beim Schließen des Browsers aktivieren.
                    Bei der Deaktivierung von Cookies kann die Funktionalität
                    dieser Website eingeschränkt sein.
                  </p>
                </section>

                <section id="kontaktformular" className="mb-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Kontaktformular und E-Mail-Kontakt
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Wenn Sie uns über unser Kontaktformular oder per E-Mail
                    kontaktieren, werden die von Ihnen mitgeteilten Daten (Ihre
                    E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von
                    uns gespeichert, um Ihre Fragen zu beantworten oder Ihnen
                    auf andere Weise zu antworten.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art.
                    6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                    eines Vertrags zusammenhängt oder zur Durchführung
                    vorvertraglicher Maßnahmen erforderlich ist.
                  </p>
                  <p className="text-gray-600">
                    Die von Ihnen im Kontaktformular eingegebenen Daten
                    verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                    Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                    für die Datenspeicherung entfällt (z.B. nach abgeschlossener
                    Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
                    Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
                    unberührt.
                  </p>
                </section>

                <section id="drittanbieter" className="mb-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Drittanbieter und externe Dienste
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Unsere Website nutzt teilweise Inhalte und Dienste von
                    Drittanbietern, um unser Angebot zu verbessern. Bei der
                    Einbindung solcher Drittinhalte, wie z.B. Videos oder
                    Schriftarten, wird Ihre IP-Adresse an die jeweiligen
                    Anbieter übermittelt.
                  </p>
                  <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">
                    Google Fonts
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Auf unserer Website werden Google Fonts verwendet. Anbieter
                    ist die Google Inc., 1600 Amphitheatre Parkway, Mountain
                    View, CA 94043, USA. Die Einbindung dieser Schriftarten
                    erfolgt durch einen Serveraufruf bei Google, wobei Ihre
                    IP-Adresse übertragen wird. Weitere Informationen finden Sie
                    in den Datenschutzhinweisen von Google:{" "}
                    <a
                      href="https://www.google.com/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-800 transition-colors"
                    >
                      https://www.google.com/policies/privacy/
                    </a>
                  </p>
                </section>

                <section id="aenderungen" className="mb-10">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Änderungen der Datenschutzerklärung
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                    damit sie stets den aktuellen rechtlichen Anforderungen
                    entspricht oder um Änderungen unserer Leistungen in der
                    Datenschutzerklärung umzusetzen, z.B. bei der Einführung
                    neuer Services.
                  </p>
                  <p className="text-gray-600">
                    Für Ihren erneuten Besuch gilt dann die neue
                    Datenschutzerklärung. Wir empfehlen Ihnen daher, diese
                    Datenschutzerklärung regelmäßig zu überprüfen.
                  </p>
                </section>

                <div className="mt-12 text-sm text-gray-500">
                  <p>Stand: Februar 2025</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}
