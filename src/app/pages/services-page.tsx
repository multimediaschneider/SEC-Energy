"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/sanity/client";
import {
  Building2,
  Lightbulb,
  Wrench,
  FileText,
  Bot,
  Scale,
  Leaf,
  Network,
  LucideIcon,
} from "lucide-react";
import { fallbackData } from "../constants/data/services-fallback-data";
import { Card, CardContent } from "@/components/ui/card";
import ImageSlider from "@/components/ui/image-slider";
import ContactSection from "@/components/sections/contact-section";
import CustomButton from "@/components/ui/custom-button";

interface ServiceArea {
  title: string;
  description: string;
  bulletPoints: string[];
  icon: string;
}

interface ServiceCategory {
  shortTitle: string;
  title: string;
  description: string;
  areas: ServiceArea[];
  images: string[];
}

interface ServicesPageData {
  headline: string;
  introduction: string;
  categories: ServiceCategory[];
  metaTitle: string;
  metaDescription: string;
}

const icons: Record<string, LucideIcon> = {
  building: Building2,
  lightbulb: Lightbulb,
  wrench: Wrench,
  file: FileText,
  bot: Bot,
  scale: Scale,
  leaf: Leaf,
  network: Network,
};

export default function ServicesPage() {
  const [servicesData, setServicesData] = useState<ServicesPageData | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<number>(0);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const query = `*[_type == "services"][0]{
          headline,
          introduction,
          metaTitle,
          metaDescription,
          categories[]{
            shortTitle,
            title,
            description,
            images,
            areas[]{
              title,
              description,
              icon,
              bulletPoints
            }
          }
        }`;
        const data = await client.fetch(query);
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching services data:", error);
        setServicesData(fallbackData);
      }
    };

    fetchServicesData();
  }, []);

  const data = servicesData || fallbackData;

  return (
    <div className="min-h-screen bg-gray-50 pt-12">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-emerald-700">
        <div className="relative h-full flex items-center justify-center">
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

      {/* Categories Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar gap-4 py-4">
            {data.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 z-10 py-2 rounded-sm whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeCategory === index
                    ? "bg-emerald-700 text-white"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                }`}
              >
                {category.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top section with text and image slider */}
          <div className="flex items-center mt-12 mb-24">
            {/* Left column - Text content */}
            <div className="w-1/2 justify-center border-l-4 border-emerald-700 pl-6">
              <h2 className="text-6xl font-light text-emerald-700 mb-6">
                {data.categories[activeCategory].title}
              </h2>
              <p className="text-2xl font-light w-10/12 text-gray-600">
                {data.categories[activeCategory].description}
              </p>

              <CustomButton
                text="Beratungsgespräch anfordern"
                href="/contact"
                iconSize={24}
                size="lg"
                className="bg-emerald-700 mt-8 z-10"
              />
            </div>

            {/* Right column - Image slider */}
            <div className="h-[400px] w-1/2">
              <ImageSlider
                images={
                  data.categories[activeCategory].images || [
                    "/api/placeholder/800/1200",
                  ]
                }
              />
            </div>
          </div>

          {/* Service areas grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.categories[activeCategory].areas.map((area, index) => {
              const Icon = icons[area.icon];
              return (
                <Card key={index} className="bg-emerald-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4 ">
                      <div className="bg-emerald-100 p-3 rounded-full">
                        {Icon && <Icon className="w-6 h-6 text-emerald-600" />}
                      </div>
                      <h4 className="text-2xl font-medium text-emerald-700">
                        {area.title}
                      </h4>
                    </div>
                    <p className="text-xl font-medium text-emerald-700 mb-4">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.bulletPoints.map((point, i) => (
                        <li
                          key={i}
                          className="flex text-md items-center gap-2 text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>
        <ContactSection />
      </main>
    </div>
  );
}
