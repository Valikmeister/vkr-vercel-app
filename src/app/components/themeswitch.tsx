// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)


    const { theme, setTheme } = useTheme()


    useEffect(() => {
        setMounted(true)

    }, [])

    if (!mounted) return null

    function saveState(theme: string) {
        try {
            localStorage.setItem("themeState", theme)
            console.log(theme)
        } catch (error) {
            console.error(error)
        }
    }

    function getLocalState() {
        try {
            return localStorage.getItem("themeState")
            console.log(localStorage.getItem("themeState"))
        } catch (error) {
            console.error(error)
        }
    }

    function ChangeTheme() {

        if (theme === 'light') {
            setTheme('dark')
            // saveState('dark')

        }

        else {
            setTheme('light')
            // saveState('light')

        }

    }

    function SelectedState(): boolean | undefined {
        if (getLocalState() === 'dark' || theme === 'dark') {
            return false

        }
        if (getLocalState() === 'light' || theme === 'light') {
            return true
        }

    }







    // Save state into localStorage for isDark
    // if no initial state set the default one as light

    return (
        <Switch

            isSelected={SelectedState()}
            color="primary"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            onChange={() => ChangeTheme()}



        >
        </Switch>
    );

}

