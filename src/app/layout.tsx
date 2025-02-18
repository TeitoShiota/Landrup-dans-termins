import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Landrup Dans",
  description: "Landrup Dans - Danse skole",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="dk">
      <body>
        {children}
      </body>
    </html>
  );
}
