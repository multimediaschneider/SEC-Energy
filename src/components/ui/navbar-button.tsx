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
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const CustomButton = ({
  text,
  href,
  className,
  iconSize = 16,
  variant = "default",
  size = "default",
}: CustomButtonProps) => {
  return (
    <Link href={href} className="relative z-10 inline-block">
      <Button
        variant={variant}
        size={size}
        className={cn(
          "text-lg font-normal text-white border-2 border-emerald-100 shadow-sm shadow-zinc-600 hover:text-white hover:bg-emerald-700 hover:shadow-sm hover:shadow-zinc-800 transition-all",
          "relative [&_svg]:w-auto [&_svg]:h-auto", // Override shadcn's default SVG constraints
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
          className="ml-2"
        />
      </Button>
    </Link>
  );
};

export default CustomButton;
