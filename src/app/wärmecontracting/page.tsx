// pages/leistungen/waermecontracting.tsx
import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { Calculator, Leaf, PiggyBank, CheckCircle } from "lucide-react";
import ContractingAccordion from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WaermecontractingPage = () => {
  const [activeTab, setActiveTab] = useState("vorteile");

  // SEO-optimierte Struktur für FAQ-Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was ist Wärmecontracting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wärmecontracting ist ein zukunftsweisendes Modell der Wärmeversorgung, bei dem ein spezialisierter Dienstleister die komplette Planung, Installation und den Betrieb der Heizungsanlage übernimmt.",
        },
      },
      // Weitere FAQ-Einträge...
    ],
  };

  return (
    <>
      {/* SEO-Optimierung */}
      <NextSeo
        title="Wärmecontracting & Energieeffizienz | SEC Consulting GmbH"
        description="Professionelles Wärmecontracting für Ihre Immobilie. Sparen Sie Energiekosten durch moderne Heizungstechnik. ✓ 20 Jahre Erfahrung ✓ Bundesweit verfügbar"
        canonical="https://www.sec-energy.de/leistungen/waermecontracting"
        openGraph={{
          title: "Wärmecontracting & Energieeffizienz | SEC Consulting GmbH",
          description: "Professionelles Wärmecontracting für Ihre Immobilie.",
          url: "https://www.sec-energy.de/leistungen/waermecontracting",
          images: [{ url: "/images/waermecontracting-hero.jpg" }],
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/waermecontracting-hero.jpg"
          alt="Moderne Heizungsanlage im Wärmecontracting"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Wärmecontracting für Ihre Immobilie
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Effiziente Wärmeversorgung ohne Investitionskosten
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">
            Ihre Vorteile im Überblick
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PiggyBank className="w-12 h-12 text-emerald-600" />,
                title: "Keine Investitionskosten",
                description:
                  "Sie sparen sich hohe Anfangsinvestitionen für neue Heizungsanlagen",
              },
              {
                icon: <Leaf className="w-12 h-12 text-emerald-600" />,
                title: "Klimafreundlich",
                description: "Modernste Technik für maximale Energieeffizienz",
              },
              {
                icon: <Calculator className="w-12 h-12 text-emerald-600" />,
                title: "Planbare Kosten",
                description:
                  "Transparente Abrechnung und kalkulierbare Ausgaben",
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-emerald-600" />,
                title: "Rundum-Sorglos",
                description: "Wartung und Service inklusive",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">
            Häufig gestellte Fragen
          </h2>
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-emerald-700">
                Häufig gestellte Fragen zum Wärmecontracting
              </h2>
              <ContractingAccordion />
            </div>
          </section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interesse an einer unverbindlichen Beratung?
          </h2>
          <p className="mb-8 text-lg">
            Wir erstellen Ihnen ein individuelles Angebot für Ihr
            Wärmecontracting.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-emerald-700 hover:bg-emerald-50"
          >
            Jetzt Beratungstermin vereinbaren
          </Button>
        </div>
      </section>
    </>
  );
};

export default WaermecontractingPage;
