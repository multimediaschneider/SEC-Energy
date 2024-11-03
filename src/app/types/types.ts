// src/app/types/types.ts
import { LucideIcon } from "lucide-react";

export interface SanityProject {
  _id: string;
  _type: "referenceProject";
  title: string;
  description: string;
  sector: "healthcare" | "education" | "housing" | "commercial";
  metrics: ProjectMetric[];
  order: number;
}

export interface ProjectMetric {
  value: string;
  unit: string;
  label: string;
}

export type SectorType = "healthcare" | "education" | "housing" | "commercial";

export interface SectorIconMap {
  [key: string]: LucideIcon;
  healthcare: LucideIcon;
  education: LucideIcon;
  housing: LucideIcon;
  commercial: LucideIcon;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

// Add any additional Sanity related types here if needed
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface SanityReference {
  _type: "reference";
  _ref: string;
}