import { ReactNode } from "react";

export interface TextBlockProps {
  className?: string;
  children?: ReactNode;
}

export interface TextBlockComponentProps {
  children: ReactNode;
}

export interface CustomButtonProps {
  text: string;
  href: string;
  iconSize?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export interface ExpertiseArea {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ExpertiseData {
  headline: string;
  introduction: string;
  targetGroups: string[];
  expertiseAreas: ExpertiseArea[];
}

export interface ServiceCategory {
  icon: string;
  title: string;
  description: string;
}
