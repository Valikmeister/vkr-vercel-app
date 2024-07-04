// app/providers.tsx


import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CookiesProvider } from 'next-client-cookies/server';
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark" >
        <CookiesProvider>
          {children}
        </CookiesProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}