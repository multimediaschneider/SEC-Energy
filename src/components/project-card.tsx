import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";

// Gemeinsames Interface für alle Projektdaten
interface ProjectDetails {
  scope: string;
  services: string[];
  results: string;
  impact: string;
}

interface Project {
  type: string;
  title: string;
  location?: string;
  summary: string;
  details: ProjectDetails;
}

interface ProjectCardProps {
  project: Project;
  variant?: "primary" | "secondary";
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = "primary",
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0% 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  // Styling-Varianten
  const variantStyles = {
    primary: {
      container: "",
      title: "text-emerald-700",
      text: "text-zinc-700",
    },
    secondary: {
      container: "",
      title: "text-emerald-700",
      text: "text-zinc-700",
    },
  }[variant];

  return (
    <div className="flex my-8">
      <div
        ref={ref}
        className={`w-full rounded-xl overflow-hidden transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${variantStyles.container} ${className}`}
      >
        <div className="pb-6 border-b">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center mb-2">
                <Briefcase className={variantStyles.title} size={22} />
                <span className={`text-2xl font-light ${variantStyles.title}`}>
                  {project.type}
                </span>
              </div>
              <h3 className={`text-2xl font-bold ${variantStyles.title}`}>
                {project.title}
              </h3>
              {project.location && (
                <p className="text-sm text-zinc-600 mt-1">{project.location}</p>
              )}
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`${variantStyles.title} hover:text-emerald-800 focus:outline-none transition-colors duration-200`}
              aria-expanded={isExpanded}
              aria-controls="expandable-content"
            >
              {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
          </div>
          <p className={`${variantStyles.text} mt-3 leading-relaxed`}>
            {project.summary}
          </p>

          <div
            id="expandable-content"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-6 space-y-4">
              <div>
                <strong className={variantStyles.title}>Umfang:</strong>
                <p className={`${variantStyles.text} mt-1`}>
                  {project.details.scope}
                </p>
              </div>
              <div>
                <strong className={variantStyles.title}>Leistungen:</strong>
                <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                  {project.details.services.map((service, index) => (
                    <li key={index} className={variantStyles.text}>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <strong className={variantStyles.title}>Ergebnisse:</strong>
                <p className={`${variantStyles.text} mt-1`}>
                  {project.details.results}
                </p>
              </div>
              <div>
                <strong className={variantStyles.title}>Auswirkungen:</strong>
                <p className={`${variantStyles.text} mt-1`}>
                  {project.details.impact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
