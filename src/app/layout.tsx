import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andrew-gomes.netlify.app"),
  title: "Andrew Gomes",
  description: "Portfólio de Andrew Gomes - Desenvolvedor Front-end",
  icons: {
    icon: [
      "/favicon.ico",
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  keywords: [
    "Desenvolvedor frontend",
    "UI Designer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Andrew Gomes", url: "https://andrew-gomes.netlify.app" }],
  openGraph: {
    type: "website",
    url: "https://andrew-gomes.netlify.app",
    title: "Andrew Gomes - Desenvolvedor Front-end",
    description: "Portfólio de Andrew Gomes - Desenvolvedor Front-end",
    siteName: "Andrew Gomes",
    images: [
      {
        url: "https://andrew-gomes.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andrew Gomes - Desenvolvedor Front-end",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://andrew-gomes.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scrollbar_style antialiased">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
