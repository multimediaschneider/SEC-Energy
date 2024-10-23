import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-green-900 text-white text-center flex flex-row justify-center">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="p-2 hover:underline">
            2024 SEC Energieconsulting. All rights reserved.
          </Link>
        </li>
        <li>
          <Link href="/Datenschutz" className="p-2 hover:underline">
            Datenschutzrichtlinien
          </Link>
        </li>
        <li>
          <Link href="/impressum" className="p-2 hover:underline">
            Impressum
          </Link>
        </li>
      </ul>
    </footer>
  );
}
