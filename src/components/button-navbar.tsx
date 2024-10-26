import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface CustomButtonTwoProps {
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

const CustomButtonTwo: React.FC<CustomButtonTwoProps> = ({
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
      className={`bg-emerald-600 hover:bg-emerald-700 ${className}`}
      onClick={onClick} // Click-Handler hinzugefügt
    >
      <Link href={href}>{name}</Link>
    </Button>
  );
};

export default CustomButtonTwo;
