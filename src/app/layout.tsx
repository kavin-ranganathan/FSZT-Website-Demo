import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "FSZT Partners | AI-First Consulting | Strategy That Ships",
  description:
    "We embed, build, and ship AI-native systems that transform how enterprises operate. Boutique by design, but our leverage is non-linear.",
  keywords: [
    "AI consulting",
    "AI strategy",
    "AI-first",
    "enterprise AI",
    "AI transformation",
  ],
  openGraph: {
    title: "FSZT Partners | Strategy That Ships",
    description:
      "AI-First Consulting. We don\u2019t advise from the sidelines.",
    url: "https://fszt.partners",
    siteName: "FSZT Partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FSZT Partners | Strategy That Ships",
    description:
      "AI-First Consulting that embeds, builds, and ships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
