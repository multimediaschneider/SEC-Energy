"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectGrid from "@/components/project-grid";
import ContactSection from "@/components/sections/contact-section";
import ProjectDetail from "@/components/project-detail";
import { client } from "@/sanity/client";

// Import your projects data or fetch it from an API
import { projectsFallbackData } from "@/app/constants/data/projects-fallback-data";
import AboutSection from "@/components/sections/about-section-neu";

interface ProjectsPageData {
  headline: string;
  introduction: string;
  metaTitle: string;
  metaDescription: string;
}

export default function ProjectsPage() {
  const [projectsData, setProjectsData] = useState<ProjectsPageData | null>(
    null
  );
  const heroRef = useRef<HTMLDivElement>(null);
  const navbarHeight = 93; // Adjust this value based on your navbar height

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const query = `*[_type == "projects"][0]{
          headline,
          introduction,
          metaTitle,
          metaDescription
        }`;
        const data = await client.fetch(query);
        setProjectsData(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
        setProjectsData({
          headline: "Unsere Projekte",
          introduction: "Entdecken Sie unsere erfolgreich umgesetzten Projekte",
          metaTitle: "Projekte",
          metaDescription: "Unsere Projekte",
        });
      }
    };

    fetchProjectsData();
  }, []);

  const data = projectsData || {
    headline: "Unsere Projekte",
    introduction: "Entdecken Sie unsere erfolgreich umgesetzten Projekte",
    metaTitle: "Projekte",
    metaDescription: "Unsere Projekte",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-emerald-700">
        <div className="relative h-[40vh] flex items-center justify-center">
          <div className="text-center text-emerald-50">
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
              className="text-xl md:text-2xl font-light max-w-3xl mx-auto px-4"
            >
              {data.introduction}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ProjectGrid Component */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <ProjectDetail />
        </div>
      </section>

      {/* Contact Section */}
      <AboutSection />
      <ContactSection />
    </div>
  );
}
