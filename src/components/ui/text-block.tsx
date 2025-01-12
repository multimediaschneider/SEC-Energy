"use client";

import React from "react";
import { motion } from "framer-motion";
import CustomButton from "../ui/custom-button";

interface TextBlockProps {
  headline: string;
  introduction: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

const TextBlock = ({
  headline,
  introduction,
  buttonText = "Beratungsgespräch anfordern",
  buttonHref = "/about",
  className = "",
}: TextBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col justify-center space-y-6 w-10/12 ${className}`}
    >
      <div>
        <h2 className="text-5xl font-black text-emerald-700 mb-8">
          {headline}
        </h2>
        <p className="text-2xl font-light text-gray-700 leading-relaxed">
          {introduction}
        </p>
        {buttonText && buttonHref && (
          <CustomButton
            text={buttonText}
            href={buttonHref}
            iconSize={24}
            size="lg"
            className="bg-emerald-700 mt-8"
          />
        )}
      </div>
    </motion.div>
  );
};

export default TextBlock;
