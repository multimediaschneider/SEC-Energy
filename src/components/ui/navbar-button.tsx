import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarButtonProps {
  text: string;
  href: string;
  className?: string;
  iconSize?: number;
  variant?:
    | "default"
    | "primary"
    | "primaryOutline"
    | "secondary"
    | "white"
    | "gradient";
  size?: "default" | "sm" | "lg" | "xl";
  disabled?: boolean;
}

const NavbarButton = ({
  text,
  href,
  className,
  iconSize = 16,
  variant = "white",
  size = "default",
  disabled = false,
}: NavbarButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative z-10 inline-block",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        className={cn(
          "text-lg font-normal transition-all",
          "relative [&_svg]:w-auto [&_svg]:h-auto", // Override SVG constraints
          className
        )}
      >
        {text}
        <ArrowRight
          style={{
            // Use style to ensure size overrides
            width: iconSize,
            height: iconSize,
            minWidth: iconSize, // Prevent SVG from shrinking
            minHeight: iconSize,
          }}
          className="ml-2 flex-shrink-0"
        />
      </Button>
    </Link>
  );
};

export default NavbarButton;
