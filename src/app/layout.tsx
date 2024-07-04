import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "../components/site/navbar";
import { Footer } from "../components/site/footer";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin K. R.",
  description: "App powered by NextJS 14",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {


  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale} className="no-scrollbar">
      <body className={inter.className}><Providers><NextIntlClientProvider messages={messages}><NavBar></NavBar>{children}<Footer /></NextIntlClientProvider></Providers></body>
    </html>
  );
}
