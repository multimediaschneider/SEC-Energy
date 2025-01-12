import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Toaster } from "./ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-background scroll-smooth">
      <Navbar />

      <div className="fixed w-1/3 h-1/3 bg-white rounded-full filter blur-3xl opacity-5 bottom-10 left-10 transform"></div>

      <main className="flex-1">{children}</main>

      <Footer />
      <Toaster />
    </div>
  );
}
