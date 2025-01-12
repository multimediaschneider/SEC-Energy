"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import PageLayout from "@/components/page-layout";

export default function Impressum() {
  return (
    <PageLayout>
      <Navbar />
      <div className="flex justify-center w-full pb-12 pt-36">
        <div className="w-4/5 rounded-xl border-b-solid border-b pb-8">
          <section className="space-y-4">
            <div className="prose">
              <p className="text-gray-600 leading-relaxed">
                Hans Mustermann
                <br />
                Hans Firma
                <br />
                Musterstrasse 255
                <br />
                00000 Musterhausen
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900 mt-6">
                Kontakt
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Telefon: 0123 12345678
                <br />
                E-Mail: muster-mail@muster.de
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">
                Umsatzsteuer-ID
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                DE-12-34-56-78
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Berufsbezeichnung:
                <br />
                Berater
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">
                EU-Streitschlichtung
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <p className="text-sm text-gray-500 pt-8">
              Quelle:{" "}
              <a
                href="https://www.e-recht24.de/impressum-generator.html"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://www.e-recht24.de/impressum-generator.html
              </a>
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
