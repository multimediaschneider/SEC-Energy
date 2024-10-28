import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";

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

export default function ProjectCard({
  project,
  variant = "primary",
  className = "",
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

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

  const handleCardClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest("#expandable-content")) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="flex justify-center items-center w-full sm:px-0">
      <div className="w-full sm:w-11/12 sm:p-2 rounded-3xl cursor-pointer hover:bg-emerald-600 hover:bg-opacity-20 transition-colors duration-200">
        <div
          ref={ref}
          className={`w-full overflow-hidden transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${variantStyles.container} ${className}`}
        >
          <div className=" pb-2 border-b" onClick={handleCardClick}>
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-2">
                  <div className="hidden sm:block">
                    <Briefcase className={variantStyles.title} size={22} />
                  </div>
                  <span
                    className={`text-lg sm:text-2xl px-1 font-light ${variantStyles.title}`}
                  >
                    {project.type}
                  </span>
                </div>
                <h3
                  className={`text-xl sm:text-2xl font-bold ${variantStyles.title}`}
                >
                  {project.title}
                </h3>
                {project.location && (
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    {project.location}
                  </p>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className={`${variantStyles.title} hover:text-emerald-800 focus:outline-none transition-colors duration-200`}
                aria-expanded={isExpanded}
                aria-controls="expandable-content"
              >
                {isExpanded ? (
                  <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8" />
                ) : (
                  <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
                )}
              </button>
            </div>
            <p
              className={`${variantStyles.text} text-sm sm:text-base lg:text-lg mt-3 leading-relaxed`}
            >
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
                  <strong
                    className={`${variantStyles.title} text-sm sm:text-base`}
                  >
                    Umfang:
                  </strong>
                  <p
                    className={`${variantStyles.text} text-sm sm:text-base mt-1`}
                  >
                    {project.details.scope}
                  </p>
                </div>
                <div>
                  <strong
                    className={`${variantStyles.title} text-sm sm:text-base`}
                  >
                    Leistungen:
                  </strong>
                  <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                    {project.details.services.map((service, index) => (
                      <li
                        key={index}
                        className={`${variantStyles.text} text-sm sm:text-base`}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong
                    className={`${variantStyles.title} text-sm sm:text-base`}
                  >
                    Ergebnisse:
                  </strong>
                  <p
                    className={`${variantStyles.text} text-sm sm:text-base mt-1`}
                  >
                    {project.details.results}
                  </p>
                </div>
                <div>
                  <strong
                    className={`${variantStyles.title} text-sm sm:text-base`}
                  >
                    Auswirkungen:
                  </strong>
                  <p
                    className={`${variantStyles.text} text-sm sm:text-base mt-1`}
                  >
                    {project.details.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
