"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import ContactSection from "@/components/sections/contact-section";
import EnhancedProjectCarousel from "@/components/sections/enhanced/EnhancedProjectCarousel";

export default function EnhancedProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800">
        {/* Animated blur circles */}
        <div className="absolute inset-0">
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
                  Unsere Referenzprojekte
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8">
                  SEC Energieconsulting steht für über zwei Jahrzehnte erfolgreiche
                  Projektrealisierung im Energiesektor. Von Blockheizkraftwerken
                  über Holzfeuerungsanlagen bis hin zu innovativen Nahwärmekonzepten
                  - unsere Referenzprojekte zeigen die ganze Bandbreite unserer
                  technischen Expertise und Planungskompetenz.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Carousel with no filtering and all projects */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-10">
            Alle Projekte im Überblick
          </h2>
          
          {/* Enhanced Project Carousel without category navigation */}
          <EnhancedProjectCarousel />
        </Container>
      </section>

      {/* Contact Section */}
      <ContactSection currentPage="projekte" />
    </div>
  );
}