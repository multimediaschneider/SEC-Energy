"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomButton from "../ui/custom-button";

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
}: TextBlockProps) => {
  const textBlockRef = useRef(null);

  // Scroll animation for border
  const { scrollYProgress } = useScroll({
    target: textBlockRef,
    offset: ["start end", "end start"],
  });

  const borderHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  // Dynamic classes based on props
  const headlineSizeClasses = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
  }[headlineSize];

  const textSizeClasses = {
    sm: "text-lg md:text-xl",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl",
  }[textSize];

  const verticalSpacingClasses = {
    sm: "space-y-4",
    md: "space-y-6",
    lg: "space-y-8",
  }[verticalSpacing];

  const horizontalSpacingClasses = {
    sm: "px-4 md:px-6",
    md: "px-6 md:px-8",
    lg: "px-8 md:px-12",
  }[horizontalSpacing];

  return (
    <div ref={textBlockRef} className="relative">
      {withBorder && (
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-700"
          style={{ height: borderHeight }}
        />
      )}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex flex-col justify-center w-full ${withBorder ? "pl-6" : ""} ${horizontalSpacingClasses} ${verticalSpacingClasses} ${className}`}
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
