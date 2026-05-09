import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MindForm — Persistent identity for intelligent agents",
  description:
    "MindForm builds persistent personality and memory systems for AI agents—reducing drift through beliefs, reflection, and layered recall.",
  keywords: [
    "AI identity",
    "persistent memory",
    "AI agents",
    "personality drift",
    "MindForm",
    "StableMind",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark relative ${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[#030308] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
