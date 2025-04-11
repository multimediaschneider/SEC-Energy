import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Building2, Settings, Target } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import Container from "../../../components/ui/container";
import CustomButton from "../../../components/ui/custom-button";

// Project Details Section
const ProjectDetails = ({ 
  project, 
  onClose 
}: { 
  project: any; 
  onClose: () => void;
}) => {
  if (!project) return null;
  
  // Image src with fallback
  const imageSrc = project.images?.[0] || "/pipes.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-8 bg-primary-50 rounded-lg"
    >
      <Container>
        <div className="flex flex-col">
          <div className="flex justify-end mb-4">
            <button
              className="px-4 py-2 text-primary-700 hover:bg-primary-100 rounded-md transition-colors"
              onClick={onClose}
            >
              Schließen
            </button>
          </div>

          {/* Project Header with Icon, Image, and Description */}
          <div className="flex flex-col items-center mb-12">
            {/* Icon Circle above Image */}
            <div className="mb-6 flex justify-center">
              <div className="h-20 w-20 rounded-full bg-primary-700 shadow-lg flex items-center justify-center z-10">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Background image with overlay */}
            <div className="w-full relative h-64 md:h-72 rounded-xl overflow-hidden shadow-lg mb-8">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700/70 to-primary-700/30 z-10" />

              {/* Background image */}
              <Image
                src={imageSrc}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />

              {/* Content overlay using flexbox for centering */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="capitalize bg-white/20 text-white"
                    >
                      {project.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white/20 text-white"
                    >
                      {project.projectType}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1 bg-white/30 text-white"
                    >
                      <ChevronDown className="w-4 h-4" />
                      {project.status}
                    </Badge>
                  </div>

                  <h2 className="text-4xl font-light text-white mb-6 max-w-3xl drop-shadow-lg">
                    {project.title}
                  </h2>

                  <p className="text-xl font-light text-white/90 max-w-3xl drop-shadow-lg">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div className="mb-8 max-w-4xl text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
              <CustomButton
                text="Beratungsgespräch anfordern"
                href="/kontakt"
                iconSize={20}
                size="lg"
                variant="primary"
                className="mt-8"
              />
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technical Data */}
            <Card className="bg-primary-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Settings className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-medium text-primary-700">
                    Technische Daten
                  </h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-lg font-medium text-primary-700 mb-2">
                      Anlagentyp
                    </p>
                    <p className="text-gray-700">
                      {project.technicalData.type}
                    </p>
                  </div>
                  {project.technicalData.powerOutput && (
                    <div>
                      <p className="text-lg font-medium text-primary-700 mb-2">
                        Leistung
                      </p>
                      <p className="text-gray-700">
                        {project.technicalData.powerOutput}
                      </p>
                    </div>
                  )}
                  {project.technicalData.additionalMetrics &&
                    project.technicalData.additionalMetrics.map(
                      (metric: any, index: number) => (
                        <div key={index}>
                          <p className="text-lg font-medium text-primary-700 mb-2">
                            {metric.label}
                          </p>
                          <p className="text-gray-700">{metric.value}</p>
                        </div>
                      )
                    )}
                </div>
              </CardContent>
            </Card>

            {/* Scope */}
            <Card className="bg-primary-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <ChevronDown className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-medium text-primary-700">
                    Leistungsumfang
                  </h4>
                </div>
                <ul className="space-y-2">
                  {project.scope.map((item: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Features & Results */}
            <Card className="bg-primary-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Target className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-medium text-primary-700">
                    Besonderheiten & Ergebnisse
                  </h4>
                </div>

                {project.specialFeatures && project.specialFeatures.length > 0 && (
                  <div className="mb-4">
                    <p className="text-lg font-medium text-primary-700 mb-2">
                      Spezielle Features
                    </p>
                    <ul className="space-y-2">
                      {project.specialFeatures.map(
                        (feature: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                            <span>{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {project.results && project.results.length > 0 && (
                  <div>
                    <p className="text-lg font-medium text-primary-700 mb-2">
                      Ergebnisse
                    </p>
                    <ul className="space-y-2">
                      {project.results.map((result: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ProjectDetails;