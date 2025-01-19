import Link from "next/link";
import Container from "./ui/container";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 md:py-16 lg:py-20 bg-emerald-800 text-white">
      <Container>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold">Muster GmbH</h2>
              <p className="text-sm sm:text-base">Muster Firma Beratung</p>
              <p className="text-sm sm:text-base">Mobil: 0123 12345678</p>
              <p className="text-sm sm:text-base">
                E-Mail: muster-mail@muster.de
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
              <Link
                href="/impressum"
                className="text-sm sm:text-base hover:underline transition-colors duration-300"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-sm sm:text-base hover:underline transition-colors duration-300"
              >
                Datenschutz
              </Link>
            </div>
          </div>
          <div className="text-center text-sm sm:text-base border-t border-emerald-700 pt-4">
            <p>
              &copy; {new Date().getFullYear()} Muster GmbH. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
