import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tenghuey.dev",
  description: "Anthony Sevilla's career portfolio showcasing expertise in web development, frontend, backend, and master data specialization. Also somewhat my personal blog.",
  keywords: ["tenghuey", "react", "nextjs", "web development", "frontend", "backend", "programming", "master data specialist", "anthony sevilla"],
  robots: "index, follow",
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
      </body>
    </html>
  );
}
