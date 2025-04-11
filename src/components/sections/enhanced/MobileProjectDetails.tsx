import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Settings, Target } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";

// Mobile Project Details Modal
const MobileProjectDetails = ({
  project,
  isVisible,
  onClose,
}: {
  project: any;
  isVisible: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed inset-0 bg-gray-900/50 z-50 flex items-end justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "90vh" }}
            exit={{ height: 0 }}
            className="bg-white w-full rounded-t-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <button
                className="p-1"
                onClick={onClose}
              >
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-auto h-full pb-20">
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={project.images?.[0] || "/pipes.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="capitalize">
                    {project.category}
                  </Badge>
                  <Badge variant="outline">{project.projectType}</Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <ChevronDown className="w-4 h-4" />
                    {project.status}
                  </Badge>
                </div>

                <div className="text-rose-600 font-medium mb-2">
                  {project.location.city}
                </div>

                <p className="text-gray-700 mb-6">{project.description}</p>

                {/* Details in cards */}
                <div className="space-y-4">
                  {/* Technical Data */}
                  <Card className="bg-primary-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary-100 p-2 rounded-full">
                          <Settings className="w-5 h-5 text-primary-600" />
                        </div>
                        <h4 className="text-lg font-medium text-primary-700">
                          Technische Daten
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-base font-medium text-primary-700 mb-1">
                            Anlagentyp
                          </p>
                          <p className="text-gray-700">
                            {project.technicalData.type}
                          </p>
                        </div>
                        {project.technicalData.powerOutput && (
                          <div>
                            <p className="text-base font-medium text-primary-700 mb-1">
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
                                <p className="text-base font-medium text-primary-700 mb-1">
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
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary-100 p-2 rounded-full">
                          <ChevronDown className="w-5 h-5 text-primary-600" />
                        </div>
                        <h4 className="text-lg font-medium text-primary-700">
                          Leistungsumfang
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {project.scope.map((item: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Features & Results */}
                  <Card className="bg-primary-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary-100 p-2 rounded-full">
                          <Target className="w-5 h-5 text-primary-600" />
                        </div>
                        <h4 className="text-lg font-medium text-primary-700">
                          Besonderheiten & Ergebnisse
                        </h4>
                      </div>

                      {project.specialFeatures &&
                        project.specialFeatures.length > 0 && (
                          <div className="mb-4">
                            <p className="text-base font-medium text-primary-700 mb-2">
                              Spezielle Features
                            </p>
                            <ul className="space-y-2">
                              {project.specialFeatures.map(
                                (feature: string, index: number) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-2 text-gray-700"
                                  >
                                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                      {project.results && project.results.length > 0 && (
                        <div>
                          <p className="text-base font-medium text-primary-700 mb-2">
                            Ergebnisse
                          </p>
                          <ul className="space-y-2">
                            {project.results.map(
                              (result: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2 text-gray-700"
                                >
                                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                                  <span>{result}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileProjectDetails;