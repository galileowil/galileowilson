import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://galileowilson.com"),
  title: "Galileo Wilson — Founder, Wilson Growth",
  description:
    "Strategic growth and advisory for ambitious companies. Scaling through AI, partnerships, and data-driven execution.",
  keywords: [
    "Galileo Wilson",
    "Wilson Growth",
    "Growth Strategy",
    "Web3 Advisory",
    "AI Consulting",
  ],
  authors: [{ name: "Galileo Wilson", url: "https://galileowilson.com" }],
  creator: "Galileo Wilson",
  openGraph: {
    title: "Galileo Wilson — Founder, Wilson Growth",
    description:
      "Strategic growth and advisory for ambitious companies.",
    type: "website",
    url: "https://galileowilson.com",
    siteName: "Galileo Wilson",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Galileo Wilson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galileo Wilson — Founder, Wilson Growth",
    description:
      "Strategic growth and advisory for ambitious companies.",
    creator: "@galileowilson",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans grain`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
