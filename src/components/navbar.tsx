"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./custom-button";
import CustomButtonTwo from "./button-navbar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      <nav className="fixed shadow-lg w-full bg-emerald-700 py-2 z-50 border-b-solid border-b border-opacity-60">
        <div className="container mx-auto px-4 flex justify-between items-center text-white">
          <Link href="/" className="text-2xl">
            <div className="flex flex-row items-center">
              <div
                className="w-[60px] h-[60px] bg-white hover:bg-slate-300 transition-colors duration-300"
                style={{
                  maskImage: 'url("/logo-sec.png")',
                  maskSize: "cover",
                  WebkitMaskImage: 'url("/logo-sec.png")',
                  WebkitMaskSize: "cover",
                }}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link href="/about" className="hover:underline">
                Über SEC
              </Link>
            </li>
            <li>
              <Link href="/schwerpunkte" className="hover:underline">
                Schwerpunkte
              </Link>
            </li>
            <li>
              <Link href="/projekte" className="hover:underline">
                Projekte
              </Link>
            </li>
            <li className="rounded-md">
              <CustomButtonTwo
                name="Kontakt"
                href="/kontakt"
                className="hover:bg-emerald-800 font-normal text-md"
              />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-emerald-700 py-2">
            <ul className="flex flex-col items-center text-white space-y-4">
              <li>
                <Link href="/about" className="hover:underline">
                  Über SEC
                </Link>
              </li>
              <li>
                <Link href="/schwerpunkte" className="hover:underline">
                  Schwerpunkte
                </Link>
              </li>
              <li>
                <Link href="/projekte" className="hover:underline">
                  Projekte
                </Link>
              </li>
              <li className="rounded-md">
                <CustomButtonTwo
                  name="Kontakt"
                  href="/kontakt"
                  className="hover:bg-emerald-800 font-normal text-md"
                />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
