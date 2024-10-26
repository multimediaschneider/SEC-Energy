import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-6 justify-center items-center text-center">
          <li className="w-full sm:w-auto">
            <Link href="/" className="block p-2 hover:underline">
              2024 SEC Energieconsulting. All rights reserved.
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link href="/Datenschutz" className="block p-2 hover:underline">
              Datenschutzrichtlinien
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link href="/impressum" className="block p-2 hover:underline">
              Impressum
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
