import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="">
      <nav className="fixed shadow-lg flex w-full bg-emerald-700 justify-center py-2 z-50 border-b-solid border-b border-opacity-60">
        <div className="w-4/5 flex justify-between items-center text-white ">
          <Link href="/" className="text-2xl">
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
          <ul className="flex space-x-6">
            <li className="py-3">
              <Link href="/about" className="hover:underline">
                Über SEC
              </Link>
            </li>
            {/* <div className="absolute bg-white h-20 w-20 filter blur-2xl transform"></div> */}
            <li className="py-3">
              <Link href="/schwerpunkte" className="hover:underline">
                Schwerpunkte
              </Link>
            </li>
            <li className="py-3">
              <Link href="/projekte" className="hover:underline">
                Projekte
              </Link>
            </li>
            <li className="p-3 bg-blue-500 rounded-md">
              <Link href="/kontakt" className="hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
