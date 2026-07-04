import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cheap Prime Fares | International Flight Deals & Holiday Packages",
    template: "%s | Cheap Prime Fares",
  },
  description:
    "Exclusive deals on USA-India flights and international holiday packages. Book with confidence — 85% of our travelers come back. 5-star rated travel agency.",
  keywords: [
    "cheap flights",
    "USA to India flights",
    "international flights",
    "holiday packages",
    "travel agency",
    "flight deals",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cheap Prime Fares",
    title: "Cheap Prime Fares | International Flight Deals & Holiday Packages",
    description:
      "Exclusive deals on USA-India flights and international holiday packages. Book with confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Prime Fares | International Flight Deals",
    description:
      "Exclusive deals on USA-India flights and international holiday packages.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://cheapprimefares.com" },
};

import SplashScreen from "@/components/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} font-body antialiased`}
      >
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
