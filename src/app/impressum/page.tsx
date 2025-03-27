"use client";

import Link from "next/link";
import PageLayout from "@/components/page-layout";
import Container from "@/components/ui/container";

export default function Impressum() {
  return (
    <PageLayout>
      <div className="pt-36 pb-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-medium text-emerald-700 mb-8 pb-4 border-b border-gray-200">
              Impressum
            </h1>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-1 text-gray-600">
                <p>Hans Mustermann</p>
                <p>Hans Firma</p>
                <p>Musterstrasse 255</p>
                <p>00000 Musterhausen</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Kontakt
              </h2>
              <div className="space-y-1 text-gray-600">
                <p>Telefon: 0123 12345678</p>
                <p>E-Mail: muster-mail@muster.de</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-gray-600">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
              </p>
              <p className="text-gray-600 mt-1">DE-12-34-56-78</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p className="text-gray-600">Berufsbezeichnung: Berater</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="text-gray-600">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-800 transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h2>
              <p className="text-gray-600">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <div className="mt-12 pt-4 border-t border-gray-200 text-sm text-gray-500">
              <p>
                Quelle:{" "}
                <a
                  href="https://www.e-recht24.de/impressum-generator.html"
                  className="text-emerald-600 hover:text-emerald-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.e-recht24.de/impressum-generator.html
                </a>
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/datenschutz"
                className="text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                Zur Datenschutzerklärung
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}
