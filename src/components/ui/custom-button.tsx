// src/components/ui/custom-button.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Standardisierte CustomButton Komponente
 *
 * Varianten:
 * - primary: Emerald-700 Button auf hellem Hintergrund
 * - secondary: Wie der Kontakt-Button aus der Navbar (weißer Hintergrund auf dunklem Hintergrund)
 */
interface CustomButtonProps {
  text: string;
  href: string;
  className?: string;
  iconSize?: number;
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg";
}

const CustomButton = ({
  text,
  href,
  className,
  iconSize = 16,
  variant = "primary",
  size = "lg",
}: CustomButtonProps) => {
  // Definiere die Stile basierend auf der Variante
  const variantStyles = {
    // Buttons auf hellem Hintergrund
    primary:
      "bg-emerald-700 text-white border-emerald-700 hover:text-emerald-700 hover:bg-emerald-50",

    // Wie der Kontakt-Button in der Navbar (für dunkle Hintergründe)
    secondary: "bg-emerald-100 text-emerald-700 border-emerald-100",
  };

  return (
    <Link href={href} className="inline-block max-w-full">
      <Button
        size={size}
        className={cn(
          "text-lg font-normal border-2 shadow-md shadow-zinc-600 hover:shadow-lg hover:shadow-zinc-200 transition-all",
          "max-w-full flex-nowrap whitespace-nowrap overflow-hidden",
          variantStyles[variant],
          className
        )}
      >
        <span className="truncate">{text}</span>
        <ArrowRight
          style={{
            width: iconSize,
            height: iconSize,
            minWidth: iconSize,
            minHeight: iconSize,
            flexShrink: 0,
          }}
          className="ml-2"
        />
      </Button>
    </Link>
  );
};

export default CustomButton;
