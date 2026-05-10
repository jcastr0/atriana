import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alexis Triana Quintana — Comunicación, Análisis y Liderazgo",
  description:
    "Productor de contenidos informativos y estudiante de Comunicación Social. Comunicación institucional, liderazgo organizacional y análisis estratégico.",
  openGraph: {
    title: "Alexis Triana Quintana",
    description:
      "Comunicación, análisis y liderazgo aplicados a entornos institucionales y organizacionales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-full font-body bg-smoke text-graphite antialiased">
        {children}
      </body>
    </html>
  );
}
