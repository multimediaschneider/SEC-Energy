"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * A standardized button container component that ensures consistent button spacing.
 *
 * Standard spacing:
 * - mt-8 (2rem top margin from TextBlock)
 * - mb-12 (3rem bottom margin to next component)
 * - Centered with flex justify-center
 * - Responsive: stacks buttons on mobile, horizontal on desktop
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
        "mt-8 mb-24 flex flex-col sm:flex-row justify-center items-center w-full gap-4 text-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export default ButtonContainer;
