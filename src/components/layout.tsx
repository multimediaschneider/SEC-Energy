import { ReactNode } from "react";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

interface BackgroundProps {
  children: ReactNode;
}

export default function Layout({ children }: BackgroundProps) {
  return (
    <div className=" flex flex-col bg-white min-h-screen">
      <Navbar />
      <div className="fixed w-1/3 h-3/5 bg-white rounded-full filter blur-3xl opacity-20 top-36 left-2/4 transform"></div>
      <div className="fixed w-1/3 h-1/3 bg-white rounded-full filter blur-3xl opacity-15 bottom-10 left-10 transform"></div>
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
