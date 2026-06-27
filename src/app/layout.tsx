import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonu Kumar | AI Engineer & Full Stack Developer",
  description: "Portfolio of Sonu Kumar, a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, and Full Stack Development.",
  keywords: ["Sonu Kumar", "AI Engineer", "Full Stack Developer", "Machine Learning", "Portfolio", "Software Engineer"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
