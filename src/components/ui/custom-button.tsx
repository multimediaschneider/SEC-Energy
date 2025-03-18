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
    <Link href={href} className="inline-block max-w-full">
      <Button
        variant={variant}
        size={size}
        className={cn(
          "bg-emerald-700 text-lg font-normal text-white border-emerald-700 border-2 shadow-md shadow-zinc-600 hover:text-emerald-700 hover:bg-emerald-50 hover:shadow-lg hover:shadow-zinc-200 transition-all",
          "max-w-full flex-nowrap whitespace-nowrap overflow-hidden",
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
