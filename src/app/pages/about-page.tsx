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
  ChevronDown,
} from "lucide-react";
import Container from "@/components/ui/container";
import TextBlock from "@/components/ui/text-block";
import CustomButton from "@/components/ui/custom-button";
import { ExpertiseCard } from "@/components/ui/base-card";
import { client } from "@/sanity/client";
import ContactSection from "@/components/sections/contact-section";
import {
  SectionContainer,
  ButtonContainer,
} from "@/components/ui/section-container";

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 h-screen flex items-center">
        <div className="absolute inset-0">
          {/* Animated blur circles */}
          <div className="blur-container">
            <div className="blur-circle blur-circle-1" />
            <div className="blur-circle blur-circle-2" />
            <div className="blur-circle blur-circle-3" />
            <div className="blur-circle blur-circle-4" />
          </div>
        </div>

        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 z-10">
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
                    text="Unsere Leistungen"
                    href="/leistungen"
                    iconSize={24}
                    size="lg"
                    variant="gradient"
                  />
                  <CustomButton
                    text="Unsere Projekte"
                    href="/projekte"
                    iconSize={24}
                    size="lg"
                    variant="gradient"
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
                {/* Ersetzt absolutes Positioning mit Flexbox und Transformation */}
                <div className="w-full h-full flex items-center justify-center">
                  {/* Dekorative Hintergründe mit Transform statt absoluter Positionierung */}
                  <div className="absolute w-full h-full bg-emerald-100/30 rounded-lg transform -rotate-3 scale-105" />
                  <div className="absolute w-full h-full bg-emerald-100/20 rounded-lg transform rotate-3 scale-105" />

                  {/* Hauptbild-Container */}
                  <div className="relative h-full w-full rounded-lg shadow-2xl overflow-hidden z-10">
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
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator arrow */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-10 h-10 text-white" />
          </motion.div>
        </Container>
      </section>

      {/* Leadership Section - Optimiert mit Flexbox */}
      <SectionContainer bgColor="bg-white">
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
                  variant="gradient"
                />
              </div>
            </div>
          </div>

          <div className="lg:order-1 relative">
            {/* Dekorative Elemente als separate, absolut positionierte Elemente */}
            <div className="absolute -left-4 top-1/4 w-24 h-24 rounded-full bg-emerald-100 opacity-70 z-0"></div>
            <div className="absolute -right-8 bottom-1/4 w-32 h-32 rounded-full bg-emerald-200 opacity-50 z-0"></div>

            {/* Main content container */}
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-lg shadow-xl p-10 z-10 w-full"
              >
                <h3 className="text-2xl font-medium text-emerald-700 mb-6 border-b pb-4 border-emerald-200">
                  Unternehmensgeschichte
                </h3>
                <div className="space-y-6">
                  {/* Timeline-Einträge mit Flexbox */}
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
        </div>
      </SectionContainer>

      {/* Company Philosophy Section */}
      <SectionContainer bgColor="bg-emerald-700 bg-opacity-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
            <ButtonContainer>
              <CustomButton
                text="Leistungen im Detail"
                href="/leistungen"
                iconSize={20}
                size="lg"
                variant="gradient"
              />
            </ButtonContainer>
          </div>
        </Container>
      </SectionContainer>

      {/* Expertise Grid Section - Optimiert mit Flexbox und konsistenten Karten */}
      <SectionContainer bgColor="bg-white">
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
                <ExpertiseCard
                  key={index}
                  icon={Icon}
                  title={area.category}
                  description={area.description}
                  highlights={area.items}
                  index={index}
                />
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <ButtonContainer>
              <CustomButton
                text="Projekte entdecken"
                href="/projekte"
                iconSize={20}
                size="lg"
                variant="gradient"
              />
            </ButtonContainer>
          </div>
        </Container>
      </SectionContainer>

      {/* Contact Section Component */}
      <ContactSection />
    </div>
  );
}
