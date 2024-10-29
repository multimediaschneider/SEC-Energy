// components/content/collapsible-text.tsx
import React, { useEffect, useRef, useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// SVG Icons für die Schwerpunkte
const icons = {
  // Icon für allgemeine Ingenieurleistungen
  engineeringServices: (className: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z" />
    </svg>
  ),
  // Icon für technische Details/Ausrüstung
  technicalEquipment: (className: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6z" />
    </svg>
  ),
  organization: (className: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M4 18v-3H3v-4h1V8h4v3h2V8h4v3h2V8h4v3h1v4h-1v3h-4v-3h-2v3h-4v-3H8v3H4zm14-1v-1h2v1h-2zm0-2h2v-2h-2v2zm-6 2v-1h2v1h-2zm0-2h2v-2h-2v2zm-6 2v-1h2v1H6zm0-2h2v-2H6v2zm14-4V9h-2v2h2zm-6 0V9h-2v2h2zm-6 0V9H6v2h2zM4 7h16c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1z" />
    </svg>
  ),
  billing: (className: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12zm-6-7h4v2h-4v-2zM6 7h12v3H6V7zm0 4h4v6H6v-6z" />
    </svg>
  ),
  energy: (className: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
    </svg>
  ),
  legal: (className: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.83-3.37 9.17-7 10.35-3.63-1.18-7-5.52-7-10.35v-5.7l7-3.12zm1 12.64v2.18h-2v-2.18L8.41 13h2.12l1.47 2 1.47-2h2.12l-2.59 2.82z" />
    </svg>
  ),
  concept: (className: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18V3zm-9-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h2v3h10V5h2v14z" />
      <path d="M9.1 17h5.8c.5 0 .9-.4.9-.9V9.1c0-.5-.4-.9-.9-.9H9.1c-.5 0-.9.4-.9.9v7c0 .5.4.9.9.9z" />
    </svg>
  ),
  planning: (className: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M3 3v17a1 1 0 001 1h16a1 1 0 001-1V3a1 1 0 00-1-1H4a1 1 0 00-1 1zm4 12.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1zm0-4c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1zm0-4c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1zm12 8c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v1zm0-4c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v1zm0-4c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v1z" />
    </svg>
  ),
};

interface CollapsibleTextProps {
  children: ReactNode;
  collapsibleContent: ReactNode;
  iconType?: keyof typeof icons;
}

export default function CollapsibleText({
  children,
  collapsibleContent,
  iconType,
}: CollapsibleTextProps): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.0,
        rootMargin: "0% 0px",
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const toggleOpen = (): void => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center items-center w-full px-2 sm:px-0">
      <div className="w-full sm:w-4/5 m-2 p-3 sm:p-6 bg-gray-50 shadow-lg shadow-zinc-400">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleOpen}
          >
            <div className="flex items-center gap-4">
              {iconType && icons[iconType] && (
                <div className="text-primary w-8 h-8">
                  {icons[iconType]("w-full h-full")}
                </div>
              )}
              <h2 className="text-lg sm:text-2xl font-bold text-primary pr-2">
                {children}
              </h2>
            </div>
            {isOpen ? (
              <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
            ) : (
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-4 pt-4 pr-6 text-sm sm:text-base lg:text-lg font-light text-zinc-800">
              {collapsibleContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
