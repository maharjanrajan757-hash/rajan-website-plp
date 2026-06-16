import type { Metadata } from "next";
import { Marcellus, Open_Sans } from "next/font/google";
import {
  absoluteUrl,
  homepageDescription,
  homepageKeywords,
  homepageTitle,
  ogImage,
  siteUrl
} from "@/lib/seo";
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
  metadataBase: new URL(siteUrl),
  applicationName: "Supriya Glow Care",
  title: {
    default: homepageTitle,
    template: "%s | Supriya Glow Care"
  },
  description: homepageDescription,
  keywords: homepageKeywords,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      {
        url: "/images/Fav_Icon-removebg-preview.png",
        type: "image/png"
      }
    ],
    shortcut: "/images/Fav_Icon-removebg-preview.png",
    apple: "/images/Fav_Icon-removebg-preview.png"
  },
  openGraph: {
    title: homepageTitle,
    description: homepageDescription,
    url: siteUrl,
    siteName: "Supriya Glow Care",
    images: [
      {
        url: absoluteUrl(ogImage),
        width: 1200,
        height: 630,
        alt: "Supriya Glow Care skincare and haircare products in Nepal"
      }
    ],
    locale: "en_NP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: homepageTitle,
    description: homepageDescription,
    images: [absoluteUrl(ogImage)]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
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
