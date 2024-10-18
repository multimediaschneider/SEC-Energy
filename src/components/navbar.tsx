import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="">
      <nav className="fixed shadow-lg flex w-full bg-emerald-700 justify-center py-2 px-6 z-50 border-b-solid border-b border-white border-opacity-60">
        <div className="w-4/5 flex justify-between items-center text-white ">
          <Link href="/" className="text-2xl">
            <div className="flex flex-row items-center">
              <div
                className="w-[50px] h-[50px] bg-slate-300 hover:bg-white transition-colors duration-300"
                style={{
                  maskImage: 'url("/seclogo.svg")',
                  maskSize: "cover",
                  WebkitMaskImage: 'url("/seclogo.svg")',
                  WebkitMaskSize: "cover",
                }}
              />
              <div className="px-2 text-3xl">SEC</div>
            </div>
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="hover:underline">
                Über SEC
              </Link>
            </li>
            {/* <div className="absolute bg-white h-20 w-20 filter blur-2xl transform"></div> */}
            <li>
              <Link href="/schwerpunkte" className="hover:underline">
                Schwerpunkte
              </Link>
            </li>
            <li>
              <Link href="/projekte" className="hover:underline">
                Projekte
              </Link>
            </li>
            <li>
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
