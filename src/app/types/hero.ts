// types/hero.ts
export interface HeroImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface HeroBenefit {
  title: string;
  description: string;
  icon: "shield" | "leaf" | "calculator" | "clock";
}

export interface HeroData {
  title: string;
  subtitle: string;
  images: HeroImage[];
  benefits: HeroBenefit[];
}

// Für Fallback-Daten
export const isHeroData = (data: any): data is HeroData => {
  return (
    typeof data === "object" &&
    typeof data.title === "string" &&
    typeof data.subtitle === "string" &&
    Array.isArray(data.images) &&
    Array.isArray(data.benefits)
  );
};
