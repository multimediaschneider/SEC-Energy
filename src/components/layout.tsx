import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-background scroll-smooth">
      <Navbar />
      <div className="fixed w-1/3 h-3/5 bg-white rounded-full filter blur-3xl opacity-5 top-36 left-2/4 transform"></div>
      <div className="fixed w-1/3 h-1/3 bg-white rounded-full filter blur-3xl opacity-5 bottom-10 left-10 transform"></div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
