import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skillbridge.vercel.app"),
  applicationName: "Skill Bridge",
  authors: [{ name: "Skill Bridge Team", url: "https://skillbridge.vercel.app" }],
  creator: "Skill Bridge Team",
  publisher: "Skill Bridge Team",
  keywords: [
    "job portal",
    "job openings",
    "candidate search",
    "recruitment platform",
    "skill bridge",
  ],
  openGraph: {
    title: "Skill Bridge",
    description: "A platform to find desired candidates for your job openings",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        {children}
       
      </body>
    </html>
  );
}
