"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextBlockProps {
  headline: string;
  introduction: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
  headlineSize?: "sm" | "md" | "lg";
  textSize?: "sm" | "md" | "lg";
  verticalSpacing?: "sm" | "md" | "lg";
  horizontalSpacing?: "sm" | "md" | "lg";
  withBorder?: boolean;
  children?: React.ReactNode;
}

const TextBlock = ({
  headline,
  introduction,
  buttonText,
  buttonHref,
  className = "",
  headlineSize = "lg",
  textSize = "lg",
  verticalSpacing = "md",
  horizontalSpacing = "md",
  withBorder,
  children,
}: TextBlockProps) => {
  // Dynamic classes based on props
  const headlineSizeClasses = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
  }[headlineSize];

  const textSizeClasses = {
    sm: "text-lg md:text-xl",
    md: "text-xl md:text-2xl",
    lg: "text-3xl md:text-4xl",
  }[textSize];

  const verticalSpacingClasses = {
    sm: "space-y-4",
    md: "space-y-6",
    lg: "space-y-8",
  }[verticalSpacing];

  const horizontalSpacingClasses = {
    sm: "px-0 md:px-0",
    md: "px-0 md:px-0",
    lg: "px-0 md:px-0",
  }[horizontalSpacing];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col justify-center w-full h-full ${horizontalSpacingClasses} ${verticalSpacingClasses} ${className}`}
    >
      <div className={verticalSpacingClasses}>
        <h2 className={`font-black text-emerald-700 ${headlineSizeClasses}`}>
          {headline}
        </h2>
        <p
          className={`font-light text-gray-700 leading-relaxed ${textSizeClasses}`}
        >
          {introduction}
        </p>
        {children}
      </div>
    </motion.div>
  );
};

export default TextBlock;
