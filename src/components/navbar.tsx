"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import NavbarButton from "./ui/navbar-button";
import Container from "./ui/container";
import { cn } from "@/lib/utils";
import FooterContainer from "./ui/footer-container";
import CustomButton from "./ui/custom-button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const isHomePage = pathname === "/";

  // Animation for progress bar
  const borderHeight = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary-700 shadow-md py-2 border-b border-opacity-60"
          : "bg-primary-700 py-3"
      )}
    >
      <FooterContainer>
        <div className="flex justify-between items-center text-white">
          {/* Logo Area with Progress Line */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1">
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                style={{ height: borderHeight }}
              />
            </div>

            <Link
              href="/"
              onClick={handleLogoClick}
              className="pl-6 flex items-center hover:text-gray-100 transition-colors duration-300"
            >
              <div className="py-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-normal">
                  SEC Consulting
                </h2>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-lg font-light space-x-6 items-center">
            <li>
              <Link
                href="/about"
                className="hover:text-white hover:underline decoration-2 underline-offset-4 transition-colors duration-300"
              >
                Über SEC
              </Link>
            </li>
            <li>
              <Link
                href="/leistungen"
                className="hover:text-white hover:underline decoration-2 underline-offset-4 transition-colors duration-300"
              >
                Leistungen
              </Link>
            </li>
            <li>
              <Link
                href="/projekte"
                className="hover:text-white hover:underline decoration-2 underline-offset-4 transition-colors duration-300"
              >
                Projekte
              </Link>
            </li>
            <CustomButton
              text="Kontakt"
              href="/kontakt"
              iconSize={20}
              size="lg"
              variant="gradient"
            />
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="pt-2 pb-3 space-y-1 overflow-hidden">
            {[
              { title: "Über SEC", href: "/about" },
              { title: "Leistungen", href: "/leistungen" },
              { title: "Projekte", href: "/projekte" },
            ].map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary-600 transition-colors duration-300"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20,
              }}
              transition={{ delay: 0.3 }}
            >
              <NavbarButton
                text="Kontakt"
                href="/kontakt"
                iconSize={20}
                size="default"
                variant="white"
                className="w-full mt-2"
              />
            </motion.li>
          </ul>
        </motion.div>
      </FooterContainer>
    </nav>
  );
}
