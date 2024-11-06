import React from "react";
import {
  Award,
  BookOpen,
  GraduationCap,
  Building2,
  ArrowRight,
} from "lucide-react";
import CustomButton from "../ui/custom-button";

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
    <section className="py-20 bg-emerald-700 bg-opacity-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-6xl font-light text-emerald-700 mb-4">
            Über SEC
          </h2>
          <p className="text-3xl font-light text-emerald-700 mb-6">
            Schneider Engineering Consulting
          </p>
          <p className="mt-4 text-2xl font-light text-gray-600 max-w-3xl mx-auto">
            Als Experte für Energiecontracting verbinden wir technische
            Innovation mit wirtschaftlicher Effizienz. Unsere langjährige
            Erfahrung und kontinuierliche Weiterbildung garantieren erstklassige
            Beratung und Umsetzung im Energiesektor.
          </p>
        </div>

        {/* Expertise & Experience Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Expertise */}
            <div className="relative p-6 md:p-8">
              <div className="absolute inset-0 shadow-lg bg-white border border-emerald-700" />
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
                    <li
                      key={index}
                      className="flex items-center space-x-3 text-gray-600"
                    >
                      <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Practical Experience */}
            <div className="relative p-6 md:p-8">
              <div className="absolute inset-0 border border-emerald-700 shadow-lg bg-white" />
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
                    <li
                      key={index}
                      className="flex items-center space-x-3 text-gray-600"
                    >
                      <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustBadges.map((badge, index) => {
            const Icon = icons[badge.icon];
            return (
              <div key={index} className="bg-white rounded-sm shadow-lg p-6">
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
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="flex flex-wrap justify-center relative z-10 gap-4">
          <CustomButton
            text="Erfahren Sie mehr"
            href="/about"
            iconSize={24}
            size="lg"
            className="bg-emerald-700"
          />
        </div>
      </div>
    </section>
  );
}
