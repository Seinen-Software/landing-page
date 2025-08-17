import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Seinen Cooperativa de Software - Desarrollo de Software Innovador",
  description: "Somos una cooperativa comprometida con el desarrollo de software de calidad, la innovación tecnológica y la sostenibilidad.",
  keywords: ["software", "desarrollo", "cooperativa", "tecnología", "innovación"],
  authors: [{ name: "Seinen Cooperativa de Software" }],
  creator: "Seinen Cooperativa de Software",
  publisher: "Seinen Cooperativa de Software",
  robots: "index, follow",
  openGraph: {
    title: "Seinen Cooperativa de Software",
    description: "Desarrollo de software innovador y sostenible",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seinen Cooperativa de Software",
    description: "Desarrollo de software innovador y sostenible",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
