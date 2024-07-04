import { getUserLocale, setUserLocale } from "@/services/localCookies";
import Link from "next/link";
import { useEffect, useState } from "react";

import { EnglandFlagIcon } from "@/components/icons/EnglandFlagIcon";
import { SpanishFlagIcon } from "@/components/icons/SpanishFlagIcon";
import { useCookies } from "next-client-cookies";

export function ChangeLanguage(props) {

    const [isSpanish, setLang] = useState(false)



    useEffect(() => {



    }, [])




    async function onClick() {


        const locale = await getUserLocale();

        switch (locale) {
            case "en":
                setLang(true)
                return await setUserLocale("es")


            case "es":
                setLang(false)
                await setUserLocale("en")


        }

    }

    function ChangeFlag() {
        const cookie = useCookies()

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