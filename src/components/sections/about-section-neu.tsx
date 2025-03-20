import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import CustomButton from "../ui/custom-button";
import Container from "../ui/container";
import TextBlock from "../ui/text-block";

const AboutSection = () => {
  return (
    <section className="py-24 bg-emerald-700 bg-opacity-20">
      <Container className="relative">
        {/* Main content section with proper positioning */}
        <div className="relative flex flex-col lg:flex-row min-h-[500px]">
          {/* Text Content - Occupying left side with proper vertical spacing */}
          <div className="w-full lg:w-3/5 pr-0 lg:pr-16 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="py-8"
            >
              <TextBlock
                headline="Nachhaltige Energielösungen mit Weitblick"
                introduction="Seit über 30 Jahren entwickle ich mit meinem Team zukunftssichere Energiekonzepte, die wirtschaftliche Effizienz und ökologische Verantwortung vereinen. Als Gründer und Geschäftsführer der SEC Consulting GmbH setze ich auf Innovation, Praxisnähe und nachhaltige Lösungen für die Energiewende."
                headlineSize="lg"
                textSize="lg"
                verticalSpacing="lg"
                horizontalSpacing="md"
              />

              {/* Button with proper spacing */}
              <div className="mt-8">
                <CustomButton
                  text="Persönliches Gespräch vereinbaren"
                  href="/kontakt"
                  iconSize={24}
                  size="lg"
                  className="bg-emerald-700"
                />
              </div>
            </motion.div>
          </div>

          {/* Image Container - Positioned at right edge and vertically centered */}
          <div className="lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 w-full lg:w-2/5 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-md lg:max-w-none"
            >
              <div className="relative w-full h-[550px] lg:h-[650px] lg:w-[450px]">
                {/* Decorative background effects */}
                <div className="absolute inset-0 bg-emerald-700/10 rounded-lg -rotate-2 transform scale-105" />
                <div className="absolute inset-0 bg-emerald-700/5 rounded-lg rotate-2 transform scale-105" />

                {/* Main image container with proper sizing and shadow */}
                <div className="relative h-full w-full rounded-lg shadow-2xl overflow-hidden">
                  <Image
                    src="/dierk.jpg"
                    alt="Dipl.-Ing. Dierk Schneider"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 450px, 450px"
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Grid - Vision & Contact with proper spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 lg:mt-24">
          {/* Vision Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-50 shadow-lg p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
              Vision & Geschichte
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Seit der Gründung im Jahr 2000 steht SEC Consulting für
              herstellerunabhängige, innovative Energielösungen mit Fokus auf
              Nachhaltigkeit und Klimaschutz. In einem starken Netzwerk von
              Spezialisten entwickeln wir maßgeschneiderte Konzepte für unsere
              Kunden.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-emerald-50 shadow-lg p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
              Kontakt
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:Dierk.Schneider@sec-energy.de"
                  className="hover:text-emerald-700 transition-colors overflow-hidden text-ellipsis"
                >
                  Dierk.Schneider@sec-energy.de
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:0511 - 169 91 162"
                  className="hover:text-emerald-700 transition-colors"
                >
                  0511 - 169 91 162
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
