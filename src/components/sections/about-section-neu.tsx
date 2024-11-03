"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GraduationCap,
  Building2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

interface TrustBadge {
  icon: string;
  title: string;
  description: string;
}

const trustBadges: TrustBadge[] = [
  {
    icon: "award",
    title: "Zertifizierte Expertise",
    description: "IHK-geprüfte Fachkompetenz",
  },
  {
    icon: "book",
    title: "Wissenschaftlicher Beitrag",
    description: "Regelmäßige Fachpublikationen",
  },
  {
    icon: "graduation",
    title: "Akademische Tätigkeit",
    description: "Lehrbeauftragter FH Hannover",
  },
  {
    icon: "building",
    title: "Praxiserfahrung",
    description: "50+ realisierte Großprojekte",
  },
];

const icons: Record<string, any> = {
  award: Award,
  book: BookOpen,
  graduation: GraduationCap,
  building: Building2,
};

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Über SEC
          </h2>
          <p className="text-xl text-emerald-700 mb-6">
            20+ Jahre Expertise im Energiecontracting
          </p>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Als führender Experte für Energiecontracting verbinden wir
            technische Innovation mit wirtschaftlicher Effizienz. Unsere
            langjährige Erfahrung und kontinuierliche Weiterbildung garantieren
            erstklassige Beratung und Umsetzung im Energiesektor.
          </p>
        </motion.div>

        {/* Expertise & Experience Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Expertise */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 md:p-8"
            >
              <div className="absolute inset-0 border-2 border-emerald-700 border-opacity-20 rounded-xl" />
              <div className="absolute inset-0 bg-emerald-700 bg-opacity-5 rounded-xl" />
              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Technische Expertise
                </h3>
                <ul className="space-y-3">
                  {[
                    "Diplom-Ingenieur der Versorgungstechnik",
                    "Spezialisierung auf Kraft-Wärme-Kopplung",
                    "Entwicklung nachhaltiger Energiekonzepte",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-600"
                    >
                      <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Practical Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 md:p-8"
            >
              <div className="absolute inset-0 border-2 border-emerald-700 border-opacity-20 rounded-xl" />
              <div className="absolute inset-0 bg-emerald-700 bg-opacity-5 rounded-xl" />
              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Praxiserfahrung
                </h3>
                <ul className="space-y-3">
                  {[
                    "Über 50 erfolgreiche Großprojekte",
                    "30+ BHKW-Anlagen betreut",
                    "Expertise in Contracting-Lösungen",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-600"
                    >
                      <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustBadges.map((badge, index) => {
            const Icon = icons[badge.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-50 p-2 rounded-full">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {badge.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{badge.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/ueber-uns"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-700 text-white rounded-lg"
          >
            <span>Mehr über SEC und unsere Expertise erfahren</span>
            <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
