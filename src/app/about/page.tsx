"use client";

import PageLayout from "../../components/page-layout";
import AboutPage from "../pages/about-page";
import ContactSection from "@/components/sections/contact-section";

export default function AboutPageContainer() {
  return (
    <PageLayout>
      <AboutPage />
      {/* Note: We are now using ContactSection inside AboutPage component itself
          with the correct currentPage prop to ensure proper button display */}
    </PageLayout>
  );
}
