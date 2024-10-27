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
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => Promise<void> | void;
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
    >
      <Link href={href} onClick={onClick}>
        {name}
      </Link>
    </Button>
  );
};

export default CustomButtonTwo;
