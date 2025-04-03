"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextBlockProps {
  headline: string;
  introduction: string;
  guidance?: string; // Optional guidance text
  buttonText?: string;
  buttonHref?: string;
  className?: string;
  headlineSize?: "sm" | "md" | "lg";
  textSize?: "sm" | "md" | "lg";
  verticalSpacing?: "sm" | "md" | "lg";
  horizontalSpacing?: "sm" | "md" | "lg";
  withBorder?: boolean;
  children?: React.ReactNode;
  textAlign?: "left" | "center" | "right";
  headlineColor?: "primary" | "white" | "gray";
  textColor?: "primary" | "white" | "gray";
}

const TextBlock = ({
  headline,
  introduction,
  guidance,
  buttonText,
  buttonHref,
  className = "",
  headlineSize = "lg",
  textSize = "lg",
  verticalSpacing = "md",
  horizontalSpacing = "md",
  withBorder,
  children,
  textAlign = "left",
  headlineColor = "primary",
  textColor = "gray",
}: TextBlockProps) => {
  // Dynamic classes based on props
  const headlineSizeClasses = {
    sm: "text-2xl sm:text-3xl md:text-4xl",
    md: "text-3xl sm:text-4xl md:text-5xl",
    lg: "text-4xl sm:text-5xl md:text-6xl",
  }[headlineSize];

  const textSizeClasses = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl",
    lg: "text-xl sm:text-2xl",
  }[textSize];

  const verticalSpacingClasses = {
    sm: "space-y-3",
    md: "space-y-6",
    lg: "space-y-8",
  }[verticalSpacing];

  const horizontalSpacingClasses = {
    sm: "px-0 md:px-0",
    md: "px-0 md:px-4",
    lg: "px-0 md:px-8",
  }[horizontalSpacing];

  const textAlignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[textAlign];

  const headlineColorClasses = {
    primary: "text-primary-700",
    white: "text-white",
    gray: "text-gray-900",
  }[headlineColor];

  const textColorClasses = {
    primary: "text-primary-700",
    white: "text-white",
    gray: "text-gray-700",
  }[textColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col justify-center w-full h-full",
        horizontalSpacingClasses,
        verticalSpacingClasses,
        textAlignClasses,
        className
      )}
    >
      <div className={verticalSpacingClasses}>
        <h2
          className={cn(
            "font-black",
            headlineSizeClasses,
            headlineColorClasses,
            withBorder && "pb-4 border-b border-primary-700"
          )}
        >
          {headline}
        </h2>
        <p
          className={cn(
            "font-light leading-relaxed",
            textSizeClasses,
            textColorClasses
          )}
        >
          {introduction}
        </p>
        {/* Add the guidance text if provided */}
        {guidance && (
          <p
            className={cn(
              "font-light leading-relaxed mt-4",
              textSizeClasses,
              textColorClasses
            )}
          >
            {guidance}
          </p>
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default TextBlock;
