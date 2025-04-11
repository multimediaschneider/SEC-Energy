"use client";

import React from "react";
import Container from "./container";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  bgColor?: string;
  noPadding?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * A standardized section container component that ensures consistent spacing across the site.
 *
 * Standard section spacing:
 * - py-16 on mobile (4rem top and bottom padding)
 * - py-20 on tablet (5rem top and bottom padding)
 * - py-24 on desktop (6rem top and bottom padding)
 */
export function SectionContainer({
  id,
  bgColor = "bg-white",
  noPadding = false,
  className,
  children,
  onClick,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        noPadding ? "py-0" : "py-12 md:py-12 lg:py-16",
        bgColor,
        className
      )}
      onClick={onClick}
    >
      <Container>{children}</Container>
    </section>
  );
}

/**
 * A standardized button container component that ensures consistent button spacing.
 *
 * Standard button container spacing:
 * - mt-8 (2rem top margin)
 * - mb-12 (3rem bottom margin)
 * - Centered with flex justify-center
 * - Responsive: stacks buttons on mobile, horizontal on larger screens
 * - gap-4 (1rem) between multiple buttons
 */
export function ButtonContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mt-10 mb-24 flex flex-col sm:flex-row items-center justify-center w-full gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

// For default import compatibility
export default SectionContainer;
