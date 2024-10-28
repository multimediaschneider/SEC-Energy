import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { CONTACT_SECTION_CONTENT } from "@/app/constants/contact-section-content";
export default function ContactSection() {
  const { title, companyName, contactPerson, styles } = CONTACT_SECTION_CONTENT;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    const observedElement = ref.current;
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
    if (observedElement) {
      observer.observe(observedElement);
    }
    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, [hasAnimated]);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Card
          ref={ref}
          className={`${styles.card} transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className={styles.contentWrapper}>
            <div className={styles.leftSection}>
              <CardHeader className="p-0  mb-6">
                <CardTitle className={styles.title}>{title}</CardTitle>
                <CardDescription className={styles.companyName}>
                  {companyName}
                </CardDescription>
              </CardHeader>
              <CardContent className={styles.contactDetails + " p-0"}>
                <p className={styles.contactName}>{contactPerson.name}</p>
                {contactPerson.details.map((detail, index) => (
                  <p key={index} className="pb-2">
                    <span className="font-bold">{detail.label}:</span>{" "}
                    {detail.value}
                  </p>
                ))}
              </CardContent>
            </div>
            <div className={styles.rightSection}>
              <CardContent className="p-0">
                <ContactForm />
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
