import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import FooterContainer from "./ui/footer-container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary-800 text-white">
      <FooterContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b border-primary-700 pb-2 mb-4">
              SEC Consulting GmbH
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                <address className="not-italic text-gray-200">
                  Musterstraße 255, 00000 Musterhausen
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-300 flex-shrink-0" />
                <a
                  href="tel:012312345678"
                  className="hover:text-primary-200 transition-colors"
                >
                  0123 12345678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-300 flex-shrink-0" />
                <a
                  href="mailto:muster-mail@muster.de"
                  className="hover:text-primary-200 transition-colors"
                >
                  muster-mail@muster.de
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:text-center">
            <h2 className="text-xl font-semibold border-b border-primary-700 pb-2 mb-4">
              Links
            </h2>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/about"
                className="hover:text-primary-200 transition-colors"
              >
                Über uns
              </Link>
              <Link
                href="/leistungen"
                className="hover:text-primary-200 transition-colors"
              >
                Leistungen
              </Link>
              <Link
                href="/projekte"
                className="hover:text-primary-200 transition-colors"
              >
                Referenzprojekte
              </Link>
              <Link
                href="/kontakt"
                className="hover:text-primary-200 transition-colors"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4 md:text-right">
            <h2 className="text-xl font-semibold border-b border-primary-700 pb-2 mb-4">
              Rechtliches
            </h2>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/impressum"
                className="hover:text-primary-200 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-primary-200 transition-colors"
              >
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-primary-700 text-center text-sm text-gray-300">
          <p>
            &copy; {currentYear} SEC Consulting GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </FooterContainer>
    </footer>
  );
}