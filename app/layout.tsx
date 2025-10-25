import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venusintlkwt.com"),
  title: {
    default: "Venus International - Oil & Gas Suppliers Kuwait",
    template: "%s | Venus International",
  },
  description:
    "Leading oil and gas suppliers and contractors in Kuwait. Specializing in mechanical, electrical, and instrumentation products for upstream and downstream operations across the Middle East, North Africa, and Eastern Mediterranean.",
  keywords: [
    "oil and gas suppliers Kuwait",
    "pipes and fittings Kuwait",
    "mechanical products Kuwait",
    "electrical products Kuwait",
    "instrumentation Kuwait",
    "valves Kuwait",
    "gaskets Kuwait",
    "energy services Middle East",
  ],
  authors: [{ name: "Venus International" }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://venusintlkwt.com",
    title: "Venus International - Oil & Gas Suppliers Kuwait",
    description:
      "Leading oil and gas suppliers and contractors in Kuwait. Specializing in mechanical, electrical, and instrumentation products.",
    siteName: "Venus International",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus International - Oil & Gas Suppliers Kuwait",
    description:
      "Leading oil and gas suppliers and contractors in Kuwait. Specializing in mechanical, electrical, and instrumentation products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
