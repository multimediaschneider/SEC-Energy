

export interface ServiceArea {
  title: string;
  description: string;
  bulletPoints: string[];
  icon: string;
}

export interface ServiceCategory {
  shortTitle: string;
  title: string;
  description: string;
  areas: ServiceArea[];
}

export interface ServicesPageData {
  headline: string;
  introduction: string;
  categories: ServiceCategory[];
  metaTitle: string;
  metaDescription: string;
}
