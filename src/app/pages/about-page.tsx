"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  User,
  Award,
  Building2,
  GraduationCap,
  LineChart,
  Network,
  BookMarked,
  LucideIcon,
} from "lucide-react";
import { BaseCard } from "@/components/ui/base-card";
import CustomButton from "@/components/ui/custom-button";
import TextBlock from "@/components/ui/text-block";
import Container from "@/components/ui/container";
import { client } from "@/sanity/client";

interface AboutPageData {
  headline: string;
  introduction: string;
  metaTitle: string;
  metaDescription: string;
}

const icons: Record<string, LucideIcon> = {
  book: BookOpen,
  user: User,
  award: Award,
  building: Building2,
  graduation: GraduationCap,
  chart: LineChart,
  network: Network,
  bookmark: BookMarked,
};

const aboutSections = [
  {
    icon: "book",
    title: "Unternehmensphilosophie",
    content:
      "SEC Consulting steht für herstellerunabhängige, innovative Energielösungen mit Fokus auf Nachhaltigkeit und Klimaschutz. In einem starken Netzwerk von Spezialisten entwickeln wir maßgeschneiderte Konzepte für unsere Kunden.",
  },
  {
    icon: "award",
    title: "Vision & Werte",
    content:
      "Unsere Kernwerte umfassen herstellerunabhängige Beratung, Fokus auf klimaschonende Energieversorgung, Vernetzung mit führenden Spezialisten sowie kontinuierliche Innovation.",
  },
  {
    icon: "network",
    title: "Expertise & Netzwerk",
    content:
      "In einem starken Netzwerk von Spezialisten entwickeln wir zukunftsorientierte Energielösungen. Unsere Expertise wird durch aktive Gremienarbeit und kontinuierlichen Austausch stetig erweitert.",
  },
  {
    icon: "chart",
    title: "Leistungsversprechen",
    content:
      "Von der Machbarkeitsstudie über die technische Planung bis zur wirtschaftlichen Optimierung begleiten wir unsere Kunden ganzheitlich und nachhaltig.",
  },
];

const expertise = [
  "Wärmecontracting und Energieversorgung",
  "Erdgas- und Biomethan-Blockheizkraftwerke",
  "Regenerative Energiesysteme",
  "Wärmepumpen und Geothermie",
  "E-Mobilität Ladeinfrastruktur",
  "TGA-Fachplanung",
];

const qualifications = [
  "Diplom-Ingenieur Versorgungstechnik",
  "Energieanlagenelektroniker",
  "Lehrbeauftragter (FH Hannover)",
  "Dozent (FH des Mittelstands)",
  "Mitglied der Ingenieurkammer Niedersachsen",
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
      "Ihr Partner für nachhaltige Energielösup/ngen und technische Gebäudeausrüstung",
    metaTitle: "About",
    metaDescription: "Über-SEC",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800">
        <Container>
          <div className="h-screen flex items-center justify-center">
            <div className="text-center text-emerald-50 z-10 px-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-light mb-8"
              >
                {data.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
              >
                {data.introduction}
              </motion.p>
            </div>
          </div>
        </Container>
      </section>
      {/* Leadership Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <div className="lg:w-full">
              <TextBlock
                headline="Geschäftsführung"
                introduction="Dierk Schneider verbindet als Diplom-Ingenieur für Versorgungstechnik und Energieanlagenelektroniker über drei Jahrzehnte praktische Erfahrung mit akademischer Expertise."
                buttonText="Kontakt aufnehmen"
                buttonHref="/contact"
                headlineSize="lg"
                textSize="lg"
                verticalSpacing="lg"
                horizontalSpacing="md"
                withBorder={true}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-8 lg:mt-0 flex items-center justify-center"
            >
              <div className="w-96 aspect-[4/6] relative">
                <div className="absolute inset-0 bg-emerald-700/10 rounded-lg -rotate-2 transform scale-105" />
                <div className="absolute inset-0 bg-emerald-700/5 rounded-lg rotate-2 transform scale-105" />
                <div className="relative h-full rounded-lg shadow-2xl overflow-hidden">
                  <Image
                    src="/dierk.jpg"
                    alt="Dipl.-Ing. Dierk Schneider"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      {/* Company Overview Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-emerald-700 bg-opacity-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutSections.map((section, index) => {
              const Icon = icons[section.icon];
              return (
                <BaseCard
                  key={index}
                  icon={Icon}
                  title={section.title}
                  description={section.content}
                  index={index}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* Expertise & Qualifications Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-emerald-700 bg-opacity-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BaseCard
              icon={BookMarked}
              title="Fachliche Spezialisierung"
              description="Unsere Kernkompetenzen und Spezialgebiete"
              index={0}
            >
              <ul className="space-y-3">
                {expertise.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm text-emerald-900/70"
                  >
                    <span className="w-1 h-1 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="flex-1 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </BaseCard>

            <BaseCard
              icon={GraduationCap}
              title="Qualifikationen"
              description="Akademische und berufliche Qualifikationen"
              index={1}
            >
              <ul className="space-y-3">
                {qualifications.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm text-emerald-900/70"
                  >
                    <span className="w-1 h-1 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="flex-1 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </BaseCard>
          </div>
        </Container>
      </section>
    </div>
  );
}
