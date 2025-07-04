import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Cousine } from "next/font/google";
import "./globals.css";

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Thomas Seaver",
  keywords: ["Software Engineer", "Full Stack Developer"],
  authors: [{ name: "Thomas Seaver" }],
  openGraph: {
    title: "Thomas Seaver",
    url: "https://thomasseaver.com",
    siteName: "Thomas Seaver",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cousine.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
