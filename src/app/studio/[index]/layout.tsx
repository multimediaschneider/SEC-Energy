// app/studio/[[...index]]/layout.tsx
export const metadata = {
  title: "Wärmecontracting CMS",
  description: "Inhaltsverwaltung für die Wärmecontracting Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
