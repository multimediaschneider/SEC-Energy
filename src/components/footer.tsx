import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "./ui/container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 sm:py-16 bg-primary-800 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b border-primary-700 pb-2">
              SEC Consulting GmbH
            </h2>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-0.5 mr-2 text-primary-300 flex-shrink-0" />
                <address className="not-italic text-gray-200">
                  Musterstraße 255
                  <br />
                  00000 Musterhausen
                </address>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-300 flex-shrink-0" />
                <a
                  href="tel:012312345678"
                  className="hover:text-primary-200 transition-colors"
                >
                  0123 12345678
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-300 flex-shrink-0" />
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
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b border-primary-700 pb-2">
              Links
            </h2>
            <nav className="space-y-2">
              <div>
                <Link
                  href="/about"
                  className="hover:text-primary-200 transition-colors inline-block"
                >
                  Über uns
                </Link>
              </div>
              <div>
                <Link
                  href="/leistungen"
                  className="hover:text-primary-200 transition-colors inline-block"
                >
                  Leistungen
                </Link>
              </div>
              <div>
                <Link
                  href="/projekte"
                  className="hover:text-primary-200 transition-colors inline-block"
                >
                  Referenzprojekte
                </Link>
              </div>
              <div>
                <Link
                  href="/kontakt"
                  className="hover:text-primary-200 transition-colors inline-block"
                >
                  Kontakt
                </Link>
              </div>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b border-primary-700 pb-2">
              Rechtliches
            </h2>
            <nav className="space-y-2">
              <div>
                <Link
                  href="/impressum"
                  className="hover:text-primary-200 transition-colors inline-block"
                >
                  Impressum
                </Link>
              </div>
              <div>
                <Link
                  href="/datenschutz"
                  className="hover:text-primary-200 transition-colors inline-block"
                >
                  Datenschutz
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-primary-700 text-center text-sm text-gray-300">
          <p>
            &copy; {currentYear} SEC Consulting GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </Container>
    </footer>
  );
}
