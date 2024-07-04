import { getUserLocale, setUserLocale } from "@/services/localCookies";
import Link from "next/link";
import { useEffect, useState } from "react";

import { EnglandFlagIcon } from "@/components/icons/EnglandFlagIcon";
import { SpanishFlagIcon } from "@/components/icons/SpanishFlagIcon";
import { useCookies } from "next-client-cookies";
import { defaultLocale } from "@/langConfig";

export function ChangeLanguage(props) {

    const [isSpanish, setLang] = useState(false)

    useEffect(() => {
        const cookies = getUserLocale()

        if (cookies === undefined) {


            setUserLocale('en')
        }


    }, [])






    async function onClick() {


        const locale = await getUserLocale()

        switch (locale) {
            case "en":
                setLang(true)
                return setUserLocale('es')


            case "es":
                setLang(false)
                return setUserLocale('en')


        }

    }

    function ChangeFlag() {
        const cookie = useCookies()
        // cookie.set('LOCALE', 'en')
        const locale = cookie.get('LOCALE')

        if (locale === "en") {
            return <EnglandFlagIcon />
        }
        if (locale === "es" || isSpanish === true) {
            return <SpanishFlagIcon />
        }
    }

    return (
        <Link href="" onClick={() => onClick()} {...props}>
            {ChangeFlag()}
        </Link>
    )



}