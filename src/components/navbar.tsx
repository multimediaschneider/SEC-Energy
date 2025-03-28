import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarButton from "./ui/navbar-button";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./ui/container";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const isHomePage = pathname === "/";

  const borderHeight = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav className="fixed w-full bg-emerald-700 py-2 z-50 border-b border-opacity-60">
      <Container>
        <div className="flex justify-between items-center text-white">
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
              className="pl-6 flex items-center hover:text-slate-300 transition-colors duration-300"
            >
              <div className="flex-col py-2">
                <h2 className="text-lg sm:text-xl md:text-2xl font-normal">
                  SEC Consulting
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-extralight">
                  Schneider Engineering Consulting
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-lg font-light space-x-6 items-center">
            <li>
              <Link
                href="/about"
                className="hover:underline transition-colors duration-300"
              >
                Über SEC
              </Link>
            </li>
            <li>
              <Link
                href="/leistungen"
                className="hover:underline transition-colors duration-300"
              >
                Leistungen
              </Link>
            </li>
            <li>
              <Link
                href="/projekte"
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
            {["Über SEC", "Leistungen", "Projekte"].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800 transition-colors duration-300"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: 0.3 }}
            >
              <NavbarButton
                text="Kontakt"
                href="/kontakt"
                iconSize={24}
                size="lg"
                className="bg-emerald-100 text-emerald-700 w-full mt-2"
              />
            </motion.li>
          </ul>
        </motion.div>
      </Container>
    </nav>
  );
}
