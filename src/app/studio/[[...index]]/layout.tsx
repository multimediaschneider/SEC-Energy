export const metadata = {
  title: "SEC-CONSULTING CMS",
  description: "Content management for SEC-CONSULTING website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
