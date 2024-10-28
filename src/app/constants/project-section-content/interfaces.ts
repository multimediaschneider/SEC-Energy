export interface ProjectDetails {
  scope: string;
  services: string[];
  results: string;
  impact: string;
}

export interface Project {
  type: string;
  title: string;
  location?: string;
  summary: string;
  details: ProjectDetails;
}
