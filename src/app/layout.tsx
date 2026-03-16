import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kruzbergs.lv"),
  title: "Roberts Krūzbergs | Olympic Bronze Medalist & Motivational Speaker",
  description: "Join Roberts Krūzbergs on his journey from the Olympic podium to your corporate stage. Motivational speeches about gold-standard performance and the path to excellence. / Pievienojies Roberta Krūzberga ceļam no Olimpiskā pjedestāla uz tava uzņēmuma skatuvi.",
  keywords: [
    "Roberts Krūzbergs", 
    "Olympic Bronze", 
    "Short track", 
    "Motivational Speaker", 
    "Success mindset", 
    "Olympic Medal",
    "Motivācijas runas",
    "Olimpiskās spēles",
    "Olimpiskais medaļnieks",
    "Šorttreks",
    "Lekcijas uzņēmumiem"
  ],
  authors: [{ name: "Roberts Krūzbergs" }],
  creator: "Roberts Krūzbergs",
  openGraph: {
    type: "website",
    locale: "lv_LV",
    alternateLocale: "en_US",
    url: "/",
    title: "Roberts Krūzbergs | Olympic Bronze Medalist & Motivational Speaker",
    description: "Motivational speeches about gold-standard performance and the path to excellence.",
    siteName: "Roberts Krūzbergs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roberts Krūzbergs | Olympic Bronze Medalist & Motivational Speaker",
    description: "Motivational speeches about gold-standard performance and the path to excellence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
