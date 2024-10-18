import { ReactNode } from "react"
import Link from "next/link"

interface BackgroundProps {
  children: ReactNode
}

function Footer() {
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
  )
}

export default function Layout({ children }: BackgroundProps) {
  return (
    <div className="flex flex-col bg-emerald-700 min-h-screen">
      <div className="fixed w-1/3 h-3/5 bg-slate-200 rounded-full filter blur-3xl opacity-20 top-24 right-10 transform"></div>
      <div className="fixed w-1/3 h-1/3 bg-white rounded-full filter blur-3xl opacity-15 bottom-10 left-10 transform"></div>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}