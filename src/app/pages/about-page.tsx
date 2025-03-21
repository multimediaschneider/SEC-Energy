"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Award,
  Network,
  LineChart,
  GraduationCap,
  BookMarked,
  Users,
  MailOpen,
  FileText,
  LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/container";
import TextBlock from "@/components/ui/text-block";
import CustomButton from "@/components/ui/custom-button";
import { ExpertiseCard } from "@/components/ui/base-card";
import { client } from "@/sanity/client";
import ContactSection from "@/components/sections/contact-section";

interface AboutPageData {
  headline: string;
  introduction: string;
  metaTitle: string;
  metaDescription: string;
}

const icons: Record<string, LucideIcon> = {
  book: BookOpen,
  award: Award,
  network: Network,
  chart: LineChart,
  graduation: GraduationCap,
  bookmark: BookMarked,
  users: Users,
  mail: MailOpen,
  file: FileText,
};

const aboutSections = [
  {
    icon: "book",
    title: "Unternehmensphilosophie",
    description: "Unsere Grundwerte und Ansatz",
    highlights: [
      "Herstellerunabhängige Beratung",
      "Nachhaltigkeit als Kernprinzip",
      "Innovative Energielösungen",
      "Langjährige Expertise",
    ],
  },
  {
    icon: "award",
    title: "Vision & Werte",
    description: "Unsere Zukunftsausrichtung",
    highlights: [
      "Klimaschonende Energieversorgung",
      "Technische Exzellenz",
      "Wirtschaftliche Effizienz",
      "Partnerschaftliche Zusammenarbeit",
    ],
  },
  {
    icon: "network",
    title: "Expertise & Netzwerk",
    description: "Unser Wissen und Verbindungen",
    highlights: [
      "Starkes Partnernetzwerk",
      "Kontinuierlicher Wissensaustausch",
      "Fachliche Weiterbildung",
      "Aktive Gremienarbeit",
    ],
  },
  {
    icon: "chart",
    title: "Leistungsversprechen",
    description: "Unser Beitrag zu Ihrem Erfolg",
    highlights: [
      "Ganzheitliche Projektbegleitung",
      "Maßgeschneiderte Lösungen",
      "Langfristige Wirtschaftlichkeit",
      "Technische Umsetzungsstärke",
    ],
  },
];

const expertise = [
  {
    category: "Technische Expertise",
    icon: "bookmark",
    description: "Unsere Kernkompetenzen und technischen Spezialgebiete",
    items: [
      "Wärmecontracting und Energieversorgung",
      "Erdgas- und Biomethan-Blockheizkraftwerke",
      "Regenerative Energiesysteme",
      "Wärmepumpen und Geothermie",
      "E-Mobilität Ladeinfrastruktur",
      "TGA-Fachplanung",
    ],
  },
  {
    category: "Qualifikationen",
    icon: "graduation",
    description: "Akademische und berufliche Qualifikationen",
    items: [
      "Diplom-Ingenieur Versorgungstechnik",
      "Energieanlagenelektroniker",
      "Lehrbeauftragter (FH Hannover)",
      "Dozent (FH des Mittelstands)",
      "Mitglied der Ingenieurkammer Niedersachsen",
    ],
  },
  {
    category: "Zielgruppen",
    icon: "users",
    description: "Die Branchen, für die wir tätig sind",
    items: [
      "Wohnungswirtschaft",
      "Öffentliche Hand und Kommunen",
      "Pflegeheime und medizinische Einrichtungen",
      "Energieversorger und Contractoren",
      "Industriebetriebe",
      "Projektentwickler",
    ],
  },
  {
    category: "Erfolge",
    icon: "award",
    description: "Erreichte Meilensteine und Referenzen",
    items: [
      "Über 50 erfolgreich realisierte Großprojekte",
      "Mehr als 25% CO₂-Einsparung bei Bestandsobjekten",
      "Langjährige Partnerschaften mit führenden Unternehmen",
      "30% durchschnittliche Kosteneinsparung durch optimierte Konzepte",
      "Innovative Pilotprojekte für zukunftsweisende Technologien",
    ],
  },
];

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<AboutPageData | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const query = `*[_type == "about"][0]{
          headline,
          introduction,
          metaTitle,
          metaDescription
        }`;
        const data = await client.fetch(query);
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
        setAboutData({
          headline: "Über SEC Consulting",
          introduction:
            "Ihr Partner für nachhaltige Energielösungen und technische Gebäudeausrüstung",
          metaTitle: "About",
          metaDescription: "Über-SEC",
        });
      }
    };

    fetchAboutData();
  }, []);

  const data = aboutData || {
    headline: "Über SEC Consulting",
    introduction:
      "Ihr Partner für nachhaltige Energielösungen und technische Gebäudeausrüstung",
    metaTitle: "About",
    metaDescription: "Über-SEC",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Updated to full screen height */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 h-screen flex items-center">
        <div className="absolute inset-0">
          {/* Animated blur circles for visual interest */}
          <div className="blur-container">
            <div className="blur-circle blur-circle-1" />
            <div className="blur-circle blur-circle-2" />
            <div className="blur-circle blur-circle-3" />
            <div className="blur-circle blur-circle-4" />
          </div>
        </div>

        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white"
              >
                <h1 className="text-4xl md:text-6xl font-light mb-8 border-b border-white pb-4">
                  {data.headline}
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8">
                  {data.introduction}
                </p>
                <div className="flex flex-wrap gap-4">
                  <CustomButton
                    text="Leistungen entdecken"
                    href="/leistungen"
                    iconSize={20}
                    size="lg"
                    className="bg-white text-emerald-700 hover:bg-emerald-50"
                  />
                  <CustomButton
                    text="Projekte ansehen"
                    href="/projekte"
                    iconSize={20}
                    size="lg"
                    className="bg-emerald-600 border-emerald-600 hover:bg-emerald-500"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
                {/* Decorative background effects */}
                <div className="absolute inset-0 bg-emerald-100/30 rounded-lg -rotate-3 transform scale-105" />
                <div className="absolute inset-0 bg-emerald-100/20 rounded-lg rotate-3 transform scale-105" />

                {/* Main image container */}
                <div className="relative h-full w-full rounded-lg shadow-2xl overflow-hidden">
                  <Image
                    src="/dierk.jpg"
                    alt="Dipl.-Ing. Dierk Schneider"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                    sizes="(max-width: 768px) 320px, 384px"
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <TextBlock
                headline="Geschäftsführung"
                introduction="Dipl.-Ing. Dierk Schneider verbindet als Gründer und Geschäftsführer über drei Jahrzehnte praktische Erfahrung mit akademischer Expertise. Seine Leidenschaft für nachhaltige Energielösungen und sein tiefgreifendes technisches Verständnis prägen die Unternehmensphilosophie und garantieren höchste Qualität in allen Projekten."
                headlineSize="lg"
                textSize="lg"
                verticalSpacing="lg"
                horizontalSpacing="md"
              />

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-emerald-700">
                  <MailOpen className="w-5 h-5" />
                  <a
                    href="mailto:Dierk.Schneider@sec-energy.de"
                    className="hover:underline"
                  >
                    Dierk.Schneider@sec-energy.de
                  </a>
                </div>

                <div className="flex items-center gap-3 text-emerald-700">
                  <FileText className="w-5 h-5" />
                  <span>Dozent (FH des Mittelstands)</span>
                </div>

                <div className="flex gap-4 mt-8">
                  <CustomButton
                    text="Kontakt aufnehmen"
                    href="/kontakt"
                    iconSize={20}
                    size="lg"
                    className="bg-emerald-700"
                  />
                </div>
              </div>
            </div>

            <div className="lg:order-1 relative">
              <div className="absolute -left-4 top-1/4 w-24 h-24 rounded-full bg-emerald-100 opacity-70"></div>
              <div className="absolute -right-8 bottom-1/4 w-32 h-32 rounded-full bg-emerald-200 opacity-50"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-lg shadow-xl p-10 z-10"
              >
                <h3 className="text-2xl font-medium text-emerald-700 mb-6 border-b pb-4 border-emerald-200">
                  Unternehmensgeschichte
                </h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-20 font-bold text-emerald-700">
                      2000
                    </div>
                    <div>
                      <h4 className="font-medium">Gründung SEC Consulting</h4>
                      <p className="text-gray-600">
                        Start als spezialisierte Energieberatung
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-20 font-bold text-emerald-700">
                      2005
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Erweiterung Geschäftsfelder
                      </h4>
                      <p className="text-gray-600">
                        Fokus auf TGA-Fachplanung und Contracting
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-20 font-bold text-emerald-700">
                      2010
                    </div>
                    <div>
                      <h4 className="font-medium">20+ Referenzprojekte</h4>
                      <p className="text-gray-600">
                        Etablierung als Experte für nachhaltige Energielösungen
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-20 font-bold text-emerald-700">
                      Heute
                    </div>
                    <div>
                      <h4 className="font-medium">Marktführer in der Region</h4>
                      <p className="text-gray-600">
                        Über 50 erfolgreiche Großprojekte und kontinuierliches
                        Wachstum
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Company Philosophy Section */}
      <section className="py-20 bg-emerald-700 bg-opacity-10">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-emerald-700 mb-4">
              Unsere Philosophie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir verbinden technische Exzellenz mit wirtschaftlicher Effizienz
              und ökologischer Verantwortung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutSections.map((section, index) => {
              const Icon = icons[section.icon];
              return (
                <ExpertiseCard
                  key={index}
                  icon={Icon}
                  title={section.title}
                  description={section.description}
                  highlights={section.highlights}
                  index={index}
                />
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <CustomButton
              text="Leistungen im Detail"
              href="/leistungen"
              iconSize={20}
              size="lg"
              className="bg-emerald-700"
            />
          </div>
        </Container>
      </section>

      {/* Expertise Grid Section */}
      <section className="py-20 bg-white">
        <Container>
          <TextBlock
            headline="Expertise & Kompetenzen"
            introduction="Unser Know-how umfasst alle Aspekte der technischen Gebäudeausrüstung und Energieversorgung. Mit dieser ganzheitlichen Expertise können wir Ihnen maßgeschneiderte Lösungen anbieten, die sowohl technisch ausgereift als auch wirtschaftlich attraktiv sind."
            headlineSize="lg"
            textSize="lg"
            verticalSpacing="lg"
            horizontalSpacing="md"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {expertise.map((area, index) => {
              const Icon = icons[area.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-emerald-50 rounded-lg p-8 shadow-md"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-700">
                        {area.category}
                      </h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <CustomButton
              text="Projekte entdecken"
              href="/projekte"
              iconSize={20}
              size="lg"
              className="bg-emerald-700"
            />
          </div>
        </Container>
      </section>

      {/* Contact Section Component */}
      <ContactSection />
    </div>
  );
}
