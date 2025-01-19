// app/layout.tsx
import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "SEC Website",
  description: "created by Sven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
