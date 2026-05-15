import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "StyleNest | Fashion & Jewelry Accessories",
  description: "Premium fashion and jewelry accessories with cash on delivery across Nepal.",
  icons: {
    icon: "/images/Favicon-plp.png",
    shortcut: "/images/Favicon-plp.png",
    apple: "/images/Favicon-plp.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
