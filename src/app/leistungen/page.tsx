"use client";

import PageLayout from "../../components/page-layout";
import ServicesPage from "../pages/services-page";
import ContactSection from "../../components/sections/contact-section";

export default function LeistungenPage() {
  return (
    <PageLayout>
      <div className="w-full">
        <ServicesPage />
      </div>
    </PageLayout>
  );
}
