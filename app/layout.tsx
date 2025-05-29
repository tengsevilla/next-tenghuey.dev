import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tenghuey.dev | Anthony Sevilla – Full Stack & MDM Developer",
  description:
    "Portfolio and blog of Anthony Sevilla, a full stack web developer and master data specialist. Showcasing projects in React, Next.js, backend APIs, and data engineering.",
  keywords: [
    "tenghuey",
    "anthony sevilla",
    "react developer",
    "nextjs portfolio",
    "full stack developer",
    "web development",
    "backend engineer",
    "frontend engineer",
    "master data management",
    "MDM specialist",
    "typescript",
    "api integration"
  ],
  robots: "index, follow"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
