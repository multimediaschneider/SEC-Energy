"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavbarButton from "./ui/navbar-button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // useScroll hook tracks page scroll progress
  // returns a value between 0 (top of page) and 1 (bottom of page)
  const { scrollYProgress } = useScroll();

  // useTransform maps scrollYProgress to border height
  // Parameters explained:
  // 1. scrollYProgress: The value we're transforming
  // 2. [0, 0.2]: Input range
  //    - 0 = when scroll is at top
  //    - 0.2 = when scroll reaches 20% of page height
  // 3. ["0%", "100%"]: Output range
  //    - "0%" = border starts invisible
  //    - "100%" = border becomes fully visible
  // So this means the border will animate from 0% to 100% height
  // during the first 20% of page scroll
  const borderHeight = useTransform(
    scrollYProgress,
    [0, 1], // Input range: Adjust these values to change when animation starts/ends
    ["10%", "100%"] // Output range: Border height from 0% to 100%
  );

  // You can modify the animation timing by adjusting the input range:
  // [0, 0.1] = Animation completes in first 10% of scroll
  // [0, 0.5] = Animation completes in first 50% of scroll
  // [0.2, 0.8] = Animation starts at 20% scroll and completes at 80% scroll

  const isHomePage = pathname === "/";

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <nav className="fixed shadow-lg w-full bg-emerald-700 py-2 z-50 border-b border-opacity-60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-white">
          <div className="relative">
            {/* Animated border container - must be relative for absolute positioning */}
            <div className="absolute left-0 top-0 bottom-0 w-1">
              {/* Motion div that animates the border height */}
              {/* The style prop receives the animated height value from borderHeight */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                style={{
                  height: borderHeight, // Animated height from 0% to 100%
                  // You can add additional animated properties here, like:
                  // opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1])
                  // scale: useTransform(scrollYProgress, [0, 0.2], [0.8, 1])
                }}
              />
            </div>

            <Link
              href="/"
              onClick={handleLogoClick}
              className="pl-6 flex items-center text-2xl hover:text-slate-300 transition-colors duration-300"
            >
              <div className="flex-col py-2">
                <h2 className="font-normal text-2xl">SEC Energieconsulting</h2>
                <p className="font-extralight text-xl">
                  Schneider Engineering Consulting
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-lg font-light space-x-6 items-center">
            <li>
              <Link
                href={isHomePage ? "/about" : "/about"}
                className="hover:underline transition-colors duration-300"
              >
                Über SEC
              </Link>
            </li>
            <li>
              <Link
                href={isHomePage ? "/leistungen" : "/leistungen"}
                className="hover:underline transition-colors duration-300"
              >
                Leistungen
              </Link>
            </li>
            <li>
              <Link
                href={isHomePage ? "/projekte" : "/projekte"}
                className="hover:underline transition-colors duration-300"
              >
                Projekte
              </Link>
            </li>

            <NavbarButton
              text="Kontakt"
              href="/kontakt"
              iconSize={24}
              size="lg"
              className="bg-emerald-100 text-emerald-700"
            />
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden container mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="pt-2 pb-3 space-y-1">
              <li>
                <Link
                  href={isHomePage ? "/about" : "/about"}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800 transition-colors duration-300"
                >
                  Über SEC
                </Link>
              </li>
              <li>
                <Link
                  href={isHomePage ? "/leistungen" : "/leistungen"}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800 transition-colors duration-300"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href={isHomePage ? "/projekte" : "/projekte"}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800 transition-colors duration-300"
                >
                  Projekte
                </Link>
              </li>
              <li>
                <NavbarButton
                  text="Kontakt"
                  href="/kontakt"
                  iconSize={24}
                  size="lg"
                  className="bg-emerald-100 text-emerald-700"
                />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
