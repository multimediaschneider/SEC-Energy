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
  const navbarHeight = 93;

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
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Gradient */}
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

      {/* ProjectGrid Component */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <ProjectDetail />
        </div>
      </section>

      {/* Additional Sections */}
      <ContactSection />
    </div>
  );
}
