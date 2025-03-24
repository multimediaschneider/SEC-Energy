"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import CustomButton from "../ui/custom-button";
import Container from "../ui/container";

export default function ContactSection() {
  return (
    <section className="relative py-16 bg-emerald-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-emerald-700 opacity-5" />
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-emerald-700 opacity-5" />

      <Container className="relative z-10">
        {/* Main contact card with consistent styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl shadow-xl bg-white"
        >
          {/* Top Section - Green Header with image */}
          <div className="bg-emerald-700 p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-light mb-6">
                  Innovative Energielösungen für Ihre Anforderungen
                </h2>
                <p className="text-xl opacity-90 font-light mb-8">
                  Als unabhängiger Berater entwickeln wir maßgeschneiderte
                  Lösungen, die sowohl wirtschaftlich als auch ökologisch
                  nachhaltig sind.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <CustomButton
                    text="Leistungen entdecken"
                    href="/leistungen"
                    iconSize={20}
                    size="lg"
                    className="bg-white text-emerald-700 hover:bg-emerald-50"
                  />
                  <CustomButton
                    text="Projekte ansehen"
                    href="/projekte"
                    iconSize={20}
                    size="lg"
                    className="bg-emerald-600 border-emerald-600 hover:bg-emerald-500"
                  />
                </div>
              </div>

              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/consulting.jpg"
                  alt="Beratungsgespräch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-emerald-700/30" />
                <div className="absolute bottom-0 left-0 right-0 bg-emerald-700/80 p-4">
                  <p className="text-white font-medium">
                    Unverbindliche Erstberatung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Contact Info with consistent grid */}
          <div className="p-8 md:p-12 bg-white">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Contact Person */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 relative">
                    <div className="absolute w-full h-full rounded-full bg-emerald-100 -z-10 transform -rotate-6 scale-105" />
                    <div className="absolute w-full h-full rounded-full bg-emerald-50 -z-10 transform rotate-6 scale-105" />
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                      <Image
                        src="/dierk.jpg"
                        alt="Dipl.-Ing. Dierk Schneider"
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-cover"
                        style={{ objectPosition: "50% 20%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-emerald-700">
                      Dipl.-Ing. Dierk Schneider
                    </h4>
                    <p className="text-lg text-emerald-700 mb-4">
                      Geschäftsführung
                    </p>
                    <div className="space-y-3">
                      <a
                        href="mailto:Dierk.Schneider@sec-energy.de"
                        className="flex items-center gap-3 text-gray-700 hover:text-emerald-700 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                          <Mail className="w-4 h-4 text-emerald-700" />
                        </div>
                        <span>Dierk.Schneider@sec-energy.de</span>
                      </a>
                      <a
                        href="tel:0511 - 169 91 162"
                        className="flex items-center gap-3 text-gray-700 hover:text-emerald-700 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                          <Phone className="w-4 h-4 text-emerald-700" />
                        </div>
                        <span>0511 - 169 91 162</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 border-t md:border-t-0 md:border-l border-emerald-100 pt-6 md:pt-0 md:pl-12"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
                    Ihr Projekt verwirklichen
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Vereinbaren Sie ein unverbindliches Erstgespräch und
                    profitieren Sie von unserer langjährigen Expertise in der
                    Energietechnik. Wir beraten Sie gerne zu all Ihren Fragen
                    rund um nachhaltige Energieversorgung.
                  </p>
                  <CustomButton
                    text="Kontaktformular öffnen"
                    href="/kontakt"
                    iconSize={22}
                    size="lg"
                    className="bg-emerald-700 w-full justify-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
