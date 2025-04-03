import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen bg-gray-50 ${className}`}>
      <Navbar />

      {/* Decorative elements */}
      <div className="fixed w-1/3 h-1/3 bg-primary-50 rounded-full opacity-5 blur-3xl -z-10 bottom-10 left-10 transform"></div>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
