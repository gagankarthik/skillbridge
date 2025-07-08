import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConfigureAmplify from "../../utils/ConfigureAmplify";

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
        <ConfigureAmplify />
        {/* The main content of the application */}
        {/* This component is used to configure Amplify in a Next.js application */}
        {/* It imports the Amplify library and the outputs from the Amplify project */}
        {/* The ConfigureAmplify component is used to configure Amplify in a Next.js application */}
        {/* It imports the Amplify library and the outputs from the Amplify project */}
        {/* The Amplify library is configured with the outputs from the Amplify project */}
        {/* The outputs from the Amplify project are imported from the amplify_outputs.json file */}
        {/* The ConfigureAmplify component is used to configure Amplify in a Next.js application */}
        {/* It imports the Amplify library and the outputs from the Amplify project */}
        {children}
      </body>
    </html>
  );
}
