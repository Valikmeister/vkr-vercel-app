"use client"
import { useCookies } from 'next-client-cookies';
import { Locale, defaultLocale } from '@/langConfig';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'LOCALE';

const cookies = useCookies()

export function getUserLocaleSync() {
    return cookies.get(COOKIE_NAME) || defaultLocale;
}