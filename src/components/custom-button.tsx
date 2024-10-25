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
  onClick?: () => void; // Neue Prop für Click-Handler
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
      className={`bg-emerald-700 hover:bg-emerald-600 shadow-md shadow-zinc-400 hover:shadow-zinc-200 p-6${className}`}
      onClick={onClick} // Click-Handler hinzugefügt
    >
      <Link href={href}>{name}</Link>
    </Button>
  );
};

export default CustomButton;
