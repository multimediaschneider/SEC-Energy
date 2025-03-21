"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, ArrowRight, MessageCircle } from "lucide-react";
import CustomButton from "../ui/custom-button";
import Container from "../ui/container";

export default function ContactSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/20 via-emerald-50/10 to-emerald-700/5 z-0" />

      {/* Decorative elements */}
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-emerald-700 opacity-5" />
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-emerald-700 opacity-5" />

      <Container className="relative z-10">
        {/* Unified Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl shadow-xl"
        >
          {/* Top Section - Green CTA */}
          <div className="bg-emerald-700 p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-light mb-2">
                  Bereit für Ihr nächstes Projekt?
                </h2>
                <p className="text-xl opacity-90 font-light">
                  Lassen Sie uns gemeinsam die optimale Energielösung finden.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Contact Info */}
          <div className="bg-white p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Contact Person - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <div className="flex items-center gap-6">
                  <div className="w-32 h-32 flex-shrink-0 relative">
                    <div className="absolute w-full h-full rounded-full bg-emerald-100 -z-10 transform -rotate-6 scale-105" />
                    <div className="absolute w-full h-full rounded-full bg-emerald-50 -z-10 transform rotate-6 scale-105" />
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                      <Image
                        src="/dierk.jpg"
                        alt="Dipl.-Ing. Dierk Schneider"
                        fill
                        sizes="128px"
                        className="object-cover"
                        style={{ objectPosition: "50% 20%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-emerald-700">
                      Dipl.-Ing. Dierk Schneider
                    </h4>
                    <p className="text-xl font-medium text-emerald-700 mb-3">
                      Geschäftsführung
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-lg text-gray-700 hover:text-emerald-700 transition-colors group">
                        <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                          <Mail className="w-4 h-4 text-emerald-700" />
                        </div>
                        <a href="mailto:Dierk.Schneider@sec-energy.de">
                          Dierk.Schneider@sec-energy.de
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-lg text-gray-700 hover:text-emerald-700 transition-colors group">
                        <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                          <Phone className="w-4 h-4 text-emerald-700" />
                        </div>
                        <a href="tel:0511 - 169 91 162">0511 - 169 91 162</a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact CTA - Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 border-t md:border-t-0 md:border-l border-emerald-100 pt-6 md:pt-0 md:pl-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
                    Unser Versprechen an Sie
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Als unabhängiger Berater entwickeln wir maßgeschneiderte
                    Lösungen, die sowohl wirtschaftlich als auch ökologisch
                    nachhaltig sind.
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
