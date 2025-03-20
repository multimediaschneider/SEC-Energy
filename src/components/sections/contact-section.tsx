"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import CustomButton from "../ui/custom-button";

export default function ContactSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-lg border border-emerald-700">
              <CardContent className="p-6">
                <div className="flex  items-center gap-4">
                  <div className="w-28 h-28 flex-shrink-0 relative overflow-hidden rounded-full">
                    <Image
                      src="/dierk.jpg"
                      alt="Dipl.-Ing. Dierk Schneider"
                      fill
                      sizes="(max-width: 80px) 100vw, 80px"
                      className="object-cover object-[center_15%]"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-700">
                      Dipl.-Ing. Dierk Schneider
                    </h3>
                    <h4 className="text-lg font-medium text-emerald-700">
                      Geschäftsführung
                    </h4>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a
                          href="mailto:Dierk.Schneider@sec-energy.de"
                          className="hover:text-emerald-700 transition-colors"
                        >
                          Dierk.Schneider@sec-energy.de
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <a
                          href="tel:0511 - 169 91 162"
                          className="hover:text-emerald-700 transition-colors"
                        >
                          0511 - 169 91 162
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Text and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left space-y-4"
          >
            <h2 className="text-3xl font-medium text-zinc-800">
              Benötigen Sie weitere Informationen?
            </h2>
            <p className="text-zinc-600 text-lg">
              Gerne klären wir in einem persönlichen Gespräch Ihr Anliegen oder
              übermitteln Ihnen weitere Informationen.
            </p>
            <CustomButton
              text="Sprechen Sie mich an"
              href="/contact"
              iconSize={24}
              size="lg"
              className="bg-emerald-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
