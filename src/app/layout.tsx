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
  title: "Roberts Krūzbergs | Olympic Bronze Medalist & Motivational Speaker",
  description: "Join Roberts Krūzbergs on his journey from the Olympic podium to your corporate stage. Motivational speeches about gold-standard performance and the path to excellence.",
  keywords: ["Roberts Krūzbergs", "Olympic Bronze", "Short track", "Motivational Speaker", "Success mindset", "Olympic Medal"],
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
