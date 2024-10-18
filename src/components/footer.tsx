import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-2 px-2 bg-green-900 text-white text-center flex flex-row justify-center">
      <Link href="/" className="p-2">
        2024 SEC Energieconsulting. All rights reserved.
      </Link>
      <Link href="/" className="p-2">
        Datenschutzrichtlinien
      </Link>
      <Link href="/" className="p-2">
        Impressum
      </Link>
    </footer>
  );
}
