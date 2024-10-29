import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface CustomButtonProps {
  name: string;
  href: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  href,
  variant = "default",
  className = "",
  onClick,
}) => {
  return (
    <Button
      asChild
      variant={variant}
      className={`bg-emerald-700 px-4 py-2 sm:px-5 sm:py-3 md:p-6 text-base sm:text-md md:text-lg lg:p-7 hover:bg-emerald-600 shadow-md shadow-zinc-400 hover:shadow-zinc-200 transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      <Link href={href}>{name}</Link>
    </Button>
  );
};

export default CustomButton;
