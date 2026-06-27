import type { Metadata } from "next";
import { Marcellus, Open_Sans } from "next/font/google";
import Script from "next/script";
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
      <body className={`${display.variable} ${sans.variable}`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1991400951499930');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1991400951499930&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
