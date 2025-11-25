import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import ScrollToTop from "./components/ScrollToTop";
import ThemeScript from "./components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark The Developer – Software Engineer & Builder",
  description: "Portfolio of Mark: crafting performant web apps, delightful UX, and robust systems.",
  alternates: {
    canonical: "https://example.com",
  },
  openGraph: {
    title: "Mark The Developer",
    description: "Crafting performant web apps, delightful UX, and robust systems.",
    url: "https://example.com",
    siteName: "Mark The Developer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Mark The Developer – Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark The Developer",
    description: "Crafting performant web apps, delightful UX, and robust systems.",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex min-h-screen flex-col`}
      >
        <ThemeScript />
        <Navbar />
        <main className="flex-1">{children}</main>
        <ScrollToTop />
        <StructuredData />
        <Footer />
      </body>
    </html>
  );
}
