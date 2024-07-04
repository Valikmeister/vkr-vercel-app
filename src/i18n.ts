import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './services/localCookies';
import { getUserLocaleSync } from './services/clientCookies';


export default getRequestConfig(async () => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.

    const locale = await getUserLocale()

    return {
        locale,
        messages: (await import(`../locales/${locale}.json`)).default
    };
});