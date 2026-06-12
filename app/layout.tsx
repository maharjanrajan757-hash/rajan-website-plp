import type { Metadata } from "next";
import { Marcellus, Open_Sans } from "next/font/google";
import "./globals.css";

const display = Marcellus({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400"
});

const sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Premium Skincare & Haircare Products for Confident Women",
  description:
    "Discover premium skincare and haircare products designed to support healthier-looking skin, stronger hair, and everyday confidence.",
  icons: {
    icon: [
      {
        url: "/images/Favicon-gcn-removebg-preview.png",
        type: "image/png"
      }
    ],
    shortcut: "/images/Favicon-gcn-removebg-preview.png",
    apple: "/images/Favicon-gcn-removebg-preview.png"
  },
  openGraph: {
    title: "Premium Skincare & Haircare Products for Confident Women",
    description:
      "Discover premium skincare and haircare products designed to support healthier-looking skin, stronger hair, and everyday confidence.",
    images: [
      {
        url: "/images/og-placeholder.png",
        width: 1200,
        height: 630,
        alt: "Premium skincare and haircare products arranged on a soft blush background"
      }
    ],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
