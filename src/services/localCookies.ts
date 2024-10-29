'use client';


import { Locale, defaultLocale } from '@/langConfig';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const LOCALE = 'LOCALE';

export async function getUserLocale() {
    return localStorage.getItem(LOCALE) || defaultLocale;
}

// fix to local storage something weird with cookies 
export async function setUserLocale(locale: Locale) {
    localStorage.setItem(LOCALE, locale);
}