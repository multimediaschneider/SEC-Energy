import React from "react";
import CollapsibleText from "./collapsible-text";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  title: string;
  summary: string;
  details: string;
}

interface ProjectsOverviewProps {
  projects: Project[];
}

const ProjectCard: React.FC<Project> = ({ title, summary, details }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="w-full mb-6 rounded-xl border border-emerald-200 overflow-hidden">
      <div className="p-6 bg-white">
        <h3 className="text-xl font-medium text-emerald-700 mb-2">{title}</h3>
        <p className="text-emerald-600">{summary}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center text-emerald-500 hover:text-emerald-600"
        >
          {isExpanded ? "Less" : "More"} details
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 ml-1" />
          ) : (
            <ChevronDown className="w-5 h-5 ml-1" />
          )}
        </button>
      </div>
      {isExpanded && (
        <div className="p-6 bg-emerald-50">
          <p className="text-emerald-700">{details}</p>
        </div>
      )}
    </div>
  );
};

const ProjectsOverview: React.FC<ProjectsOverviewProps> = ({ projects }) => {
  return (
    <div className="w-4/5 mx-auto my-12">
      <h2 className="text-3xl font-light text-emerald-700 mb-8">
        Aktuelle Projekte
      </h2>
      <CollapsibleText
        collapsibleContent={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        }
      >
        Unsere aktuellen Projekte im Überblick
      </CollapsibleText>
    </div>
  );
};

export default ProjectsOverview;
