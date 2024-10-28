import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-4 px-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">SEC Consulting GmbH</h2>
            <p className="text-sm">Schneider Engineering Consulting</p>
            <p className="text-sm mt-2">Mobil: 0176 55 90 2341</p>
            <p className="text-sm">E-Mail: Dierk.Schneider@sec-energy.de</p>
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
            &copy; {new Date().getFullYear()} SEC Consulting GmbH. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
