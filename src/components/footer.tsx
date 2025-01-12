import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 md:py-16 lg:py-20 bg-emerald-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Muster GmbH</h2>
            <p className="text-sm">Muster Firma Beratung</p>
            <p className="text-sm mt-2">Mobil: 0123 12345678</p>
            <p className="text-sm">E-Mail: muster-mail@muster.de</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link
              href="/impressum"
              className="hover:underline transition-colors duration-300"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:underline transition-colors duration-300"
            >
              Datenschutz
            </Link>
          </div>
        </div>
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Muster GmbH. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
