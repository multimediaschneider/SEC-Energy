import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectGrid from "@/components/ui/project-grid";
import ContactSection from "@/components/sections/contact-section";

// Import your projects data or fetch it from an API
import { projectsFallbackData } from "@/app/constants/data/projects-fallback-data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-emerald-700">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Projects Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Unsere Referenzprojekte
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto px-4 mb-8">
              Entdecken Sie unsere erfolgreich realisierten Projekte im Bereich
              Energieeffizienz und nachhaltiger Versorgung
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-700 hover:bg-gray-100"
            >
              <Link href="#projects">
                Projekte ansehen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ProjectGrid Component */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-700">
            Unsere Projekte
          </h2>
          <ProjectGrid projects={projectsFallbackData} />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
