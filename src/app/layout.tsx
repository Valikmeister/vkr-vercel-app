import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./components/site/navbar";
import { Footer } from "./components/site/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin K. R.",
  description: "App powered by NextJS 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="no-scrollbar">
      <body className={inter.className}><Providers><NavBar></NavBar>{children}<Footer /></Providers></body>
    </html>
  );
}
