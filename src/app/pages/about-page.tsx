"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
import { Card, CardContent } from "@/components/ui/card";
import CustomButton from "@/components/ui/custom-button";
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
  const heroRef = useRef<HTMLDivElement>(null);
  const navbarHeight = 93;

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
      <section ref={heroRef} className="relative overflow-hidden">
        {/* Base gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800"
          style={{
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
          }}
        />

        {/* Animated blur circles */}
        <div className="blur-container">
          <div className="blur-circle blur-circle-1" />
          <div className="blur-circle blur-circle-2" />
          <div className="blur-circle blur-circle-3" />
          <div className="blur-circle blur-circle-4" />
        </div>

        {/* White noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
          <div className="noise-texture" />
        </div>

        <div className="relative h-screen flex items-center justify-center">
          <div className="text-center text-emerald-50 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-light mb-8 drop-shadow-lg"
            >
              {data.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-light max-w-3xl mx-auto px-4 drop-shadow-lg"
            >
              {data.introduction}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Company Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {aboutSections.map((section, index) => {
            const Icon = icons[section.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-emerald-50 border border-emerald-700 shadow-lg p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-medium text-emerald-700">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg">{section.content}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center border-l-4 border-emerald-700 pl-6"
          >
            <h2 className="text-6xl font-light text-emerald-700 mb-6">
              Geschäftsführung
            </h2>
            <p className="text-2xl font-light text-gray-700 leading-relaxed mb-8">
              Dierk Schneider verbindet als Diplom-Ingenieur für
              Versorgungstechnik und Energieanlagenelektroniker über drei
              Jahrzehnte praktische Erfahrung mit akademischer Expertise.
            </p>
            <CustomButton
              text="Kontakt aufnehmen"
              href="/contact"
              iconSize={24}
              size="lg"
              className="bg-emerald-700"
            />
          </motion.div>

          {/* Profile Image */}
          <div className="relative h-[400px] w-full">
            <img
              src="/dierk.jpg"
              alt="Dierk Schneider"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Expertise & Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Expertise Card */}
          <Card className="bg-emerald-50 border border-emerald-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <BookMarked className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-medium text-emerald-700">
                  Fachliche Spezialisierung
                </h4>
              </div>
              <ul className="space-y-3">
                {expertise.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Qualifications Card */}
          <Card className="bg-emerald-50 border border-emerald-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-medium text-emerald-700">
                  Qualifikationen
                </h4>
              </div>
              <ul className="space-y-3">
                {qualifications.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
