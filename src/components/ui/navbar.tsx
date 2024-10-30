"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CustomButtonTwo from "./button-navbar";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

  const handleNavClick = async (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (isHomePage && href.startsWith("#")) {
      smoothScrollTo(href);
    } else if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (path === "/" || path === "") {
        await router.push("/");
        setTimeout(() => smoothScrollTo(`#${hash}`), 100);
      } else {
        await router.push(href);
      }
    } else {
      await router.push(href);
    }
    setIsMenuOpen(false);
  };

  const smoothScrollTo = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      const navbarHeight = 100; // Adjust this value based on your navbar height
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.pageYOffset + 150; // Adjust for navbar height

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute("id");

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            document
              .querySelector(`a[href="#${sectionId}"]`)
              ?.classList.add("text-white", "font-bold");
          } else {
            document
              .querySelector(`a[href="#${sectionId}"]`)
              ?.classList.remove("text-white", "font-bold");
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      setTimeout(() => smoothScrollTo(window.location.hash), 100);
    }
  }, [pathname]);

  return (
    <div className="">
      <nav className="fixed shadow-lg w-full bg-emerald-700 py-2 z-50 border-b-solid border-b border-opacity-60">
        <div className="container mx-auto px-4 flex justify-between items-center text-white">
          <Link href="/" onClick={handleLogoClick} className="text-2xl">
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
              <Link
                href={isHomePage ? "#about" : "/#about"}
                className="hover:underline transition-colors duration-300"
                onClick={(e) =>
                  handleNavClick(e, isHomePage ? "#about" : "/#about")
                }
              >
                Über SEC
              </Link>
            </li>
            <li>
              <Link
                href={isHomePage ? "#schwerpunkte" : "/#schwerpunkte"}
                className="hover:underline transition-colors duration-300"
                onClick={(e) =>
                  handleNavClick(
                    e,
                    isHomePage ? "#schwerpunkte" : "/#schwerpunkte"
                  )
                }
              >
                Schwerpunkte
              </Link>
            </li>
            <li>
              <Link
                href={isHomePage ? "#projekte" : "/#projekte"}
                className="hover:underline transition-colors duration-300"
                onClick={(e) =>
                  handleNavClick(e, isHomePage ? "#projekte" : "/#projekte")
                }
              >
                Projekte
              </Link>
            </li>
            <li className="rounded-md">
              <CustomButtonTwo
                name="Kontakt"
                href={isHomePage ? "#kontakt" : "/#kontakt"}
                className="hover:bg-emerald-800 font-normal text-md"
                onClick={(e) =>
                  handleNavClick(e, isHomePage ? "#kontakt" : "/#kontakt")
                }
              />
            </li>
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
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li>
                <Link
                  href={isHomePage ? "#about" : "/#about"}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800 transition-colors duration-300"
                  onClick={(e) =>
                    handleNavClick(e, isHomePage ? "#about" : "/#about")
                  }
                >
                  Über SEC
                </Link>
              </li>
              <li>
                <Link
                  href={isHomePage ? "#schwerpunkte" : "/#schwerpunkte"}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800 transition-colors duration-300"
                  onClick={(e) =>
                    handleNavClick(
                      e,
                      isHomePage ? "#schwerpunkte" : "/#schwerpunkte"
                    )
                  }
                >
                  Schwerpunkte
                </Link>
              </li>
              <li>
                <Link
                  href={isHomePage ? "#projekte" : "/#projekte"}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800 transition-colors duration-300"
                  onClick={(e) =>
                    handleNavClick(e, isHomePage ? "#projekte" : "/#projekte")
                  }
                >
                  Projekte
                </Link>
              </li>
              <li>
                <Link
                  href={isHomePage ? "#kontakt" : "/#kontakt"}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800 transition-colors duration-300"
                  onClick={(e) =>
                    handleNavClick(e, isHomePage ? "#kontakt" : "/#kontakt")
                  }
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
