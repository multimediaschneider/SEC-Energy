// types/project.ts - This is where we define all our types
export interface SanityReference {
  _ref: string;
  _type: "reference";
}

export interface ProjectLocation {
  street?: string;
  city: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface TechnicalData {
  type: string;
  powerOutput?: string;
  heatOutput?: string;
  additionalMetrics?: Array<{
    label: string;
    value: string;
  }>;
}

// Main Project interface that uses the above interfaces
export interface Project {
  _id: string;
  _type: "project";
  title: string;
  slug: {
    current: string;
  };
  category: "bhkw" | "heating" | "renewable" | "study";
  projectType: string;
  status: "completed" | "ongoing" | "planned";

  location: ProjectLocation;
  description: string;
  shortDescription: string;
  technicalData: TechnicalData;
  scope: string[];
  specialFeatures?: string[];
  results?: string[];
  imagePath: string;
}
