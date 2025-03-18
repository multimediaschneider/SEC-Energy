"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomButton from "../ui/custom-button";
import ScrollBorder from "./scroll-border";

interface TextBlockProps {
  headline: string;
  introduction: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
  withBorder?: boolean;
  headlineSize?: "sm" | "md" | "lg";
  textSize?: "sm" | "md" | "lg";
  verticalSpacing?: "sm" | "md" | "lg";
  horizontalSpacing?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  borderWidth?: number;
  borderColor?: string;
  borderBaseOpacity?: number;
  borderActiveOpacity?: number;
}

const TextBlock = ({
  headline,
  introduction,
  buttonText,
  buttonHref,
  className = "",
  withBorder = true,
  headlineSize = "lg",
  textSize = "lg",
  verticalSpacing = "md",
  horizontalSpacing = "md",
  borderWidth = 4,
  borderColor = "bg-emerald-700",
  borderBaseOpacity = 0.2,
  borderActiveOpacity = 0.8,
  children,
}: TextBlockProps) => {
  const textBlockRef = useRef(null);

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
    <div ref={textBlockRef} className="relative">
      {/* Use the ScrollBorder component if withBorder is true */}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex flex-col justify-center w-full h-full ${withBorder ? "pl-6" : ""} ${horizontalSpacingClasses} ${verticalSpacingClasses} ${className}`}
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
          {buttonText && buttonHref && (
            <div className="pt-4">
              <CustomButton
                text={buttonText}
                href={buttonHref}
                iconSize={24}
                size="lg"
                className="bg-emerald-700"
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TextBlock;
