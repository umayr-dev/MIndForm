import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const editorial = Newsreader({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MindForm — AI identity & continuity research",
  description:
    "A research lab for persistent memory, reflection, and identity in long-horizon agents—built for human–AI trust that deepens over time.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${editorial.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[#030308] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
