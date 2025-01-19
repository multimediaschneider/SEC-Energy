import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import CustomButton from "../ui/custom-button";
import Container from "../ui/container";

const AboutSection = () => {
  const textBlockRef = useRef(null);

  // Add scroll animation for border
  const { scrollYProgress } = useScroll({
    target: textBlockRef,
    offset: ["start end", "end start"],
  });

  const borderHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section className="py-24 bg-emerald-700 bg-opacity-20">
      {/* Top Grid - About & Image */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0 flex items-center justify-center"
          >
            <div className="w-96 aspect-[4/6] relative ">
              <div className="absolute inset-0 bg-emerald-700/10 rounded-lg -rotate-2 transform scale-105 " />
              <div className="absolute inset-0 bg-emerald-700/5 rounded-lg rotate-2 transform scale-105" />
              <div className="relative h-full rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src="/dierk.jpg"
                  alt="Dipl.-Ing. Dierk Schneider"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 20%" }}
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority
                />
              </div>
            </div>
          </motion.div>
          {/* Left Column - Text Content */}
          <div className="flex items-center relative" ref={textBlockRef}>
            {/* Animated border */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-700"
              style={{ height: borderHeight }}
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-col pl-6"
            >
              <h2 className="text-5xl font-black text-emerald-700 mb-6">
                Dipl.-Ing. Dierk Schneider
              </h2>
              <p className="text-2xl font-light text-gray-700 leading-relaxed mb-8">
                Als Gründer und Geschäftsführer der SEC Consulting GmbH verbinde
                ich über drei Jahrzehnte praktische Erfahrung mit akademischer
                Expertise. Meine Vision ist es, durch innovative Energielösungen
                einen nachhaltigen Beitrag zur Energiewende zu leisten.
              </p>
              <CustomButton
                text="Persönliches Gespräch vereinbaren"
                href="/contact"
                iconSize={24}
                size="lg"
                className="bg-emerald-700"
              />
            </motion.div>
          </div>
        </div>
        {/* Bottom Grid - Vision & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 mt-24">
          {/* Vision Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-50 shadow-lg p-8"
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
            className="bg-emerald-50 shadow-lg p-8 mt-8 lg:mt-0"
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
              Kontakt
            </h3>
            <div className="space-y-4">
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
