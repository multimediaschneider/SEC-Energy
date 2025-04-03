import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CustomButtonProps {
  text: string;
  href: string;
  className?: string;
  iconSize?: number;
  variant?: "default" | "primary" | "primaryOutline" | "secondary" | "white";
  size?: "default" | "sm" | "lg" | "xl";
  onClick?: () => void;
}

const CustomButton = ({
  text,
  href,
  className,
  iconSize = 16,
  variant = "primary",
  size = "lg",
  onClick,
}: CustomButtonProps) => {
  const buttonContent = (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "font-normal transition-all",
        "relative [&_svg]:w-auto [&_svg]:h-auto", // Override SVG constraints
        className
      )}
      onClick={onClick}
    >
      <span className="truncate">{text}</span>
      <ArrowRight
        style={{
          width: iconSize,
          height: iconSize,
          minWidth: iconSize, // Prevent SVG from shrinking
          minHeight: iconSize,
        }}
        className="ml-2 flex-shrink-0"
      />
    </Button>
  );

  // If there's an onClick handler, don't wrap in Link
  if (onClick) {
    return buttonContent;
  }

  return (
    <Link href={href} className="inline-block max-w-full">
      {buttonContent}
    </Link>
  );
};

export default CustomButton;
