import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Galileo Wilson | CEO of Wilson Growth",
  description: "Entrepreneur, investor, and growth strategist. Building the future of business through innovation and strategic partnerships.",
  keywords: ["Galileo Wilson", "Wilson Growth", "CEO", "Entrepreneur", "Investor", "Business Growth"],
  authors: [{ name: "Galileo Wilson" }],
  openGraph: {
    title: "Galileo Wilson | CEO of Wilson Growth",
    description: "Entrepreneur, investor, and growth strategist.",
    type: "website",
    url: "https://galileowilson.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
