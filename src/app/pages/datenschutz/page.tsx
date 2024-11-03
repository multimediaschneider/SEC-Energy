"use client";

import { useEffect } from "react";
import Layout from "@/components/layout";

// Placeholder components for Datenschutz sections
const DatenschutzIntro = () => (
  <div className="py-12">
    <h1 className="text-3xl font-bold mb-4">Datenschutzerklärung</h1>
    <p>
      Hier finden Sie Informationen zum Datenschutz bei SEC Consulting GmbH.
    </p>
  </div>
);

const DatenerhebungSection = () => (
  <div className="py-12">
    <h2 className="text-2xl font-bold mb-4">Datenerhebung und -verarbeitung</h2>
    <p>Placeholder für Informationen zur Datenerhebung und -verarbeitung.</p>
  </div>
);

const DatennutzungSection = () => (
  <div className="py-12">
    <h2 className="text-2xl font-bold mb-4">Zweck der Datennutzung</h2>
    <p>Placeholder für Informationen zum Zweck der Datennutzung.</p>
  </div>
);

const DatenschutzrechteSection = () => (
  <div className="py-12">
    <h2 className="text-2xl font-bold mb-4">Ihre Datenschutzrechte</h2>
    <p>Placeholder für Informationen zu Datenschutzrechten.</p>
  </div>
);

export default function DatenschutzPage() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.pageYOffset + 150; // Adjust for navbar height

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          document
            .querySelector(`a[href="#${sectionId}"]`)
            ?.classList.add("text-white", "font-bold");
        } else {
          document
            .querySelector(`a[href="#${sectionId}"]`)
            ?.classList.remove("text-white", "font-bold");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          const navbarHeight = 100; // Adjust this value based on your navbar height
          const targetPosition =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section id="intro">
          <DatenschutzIntro />
        </section>
        <section id="datenerhebung">
          <DatenerhebungSection />
        </section>
        <section id="datennutzung">
          <DatennutzungSection />
        </section>
        <section id="datenschutzrechte">
          <DatenschutzrechteSection />
        </section>
      </div>
    </Layout>
  );
}
