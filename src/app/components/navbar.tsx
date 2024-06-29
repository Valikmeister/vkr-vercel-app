"use client"

import {
    Navbar, NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button
} from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { ThemeSwitcher } from "./themeswitch";

import { SpanishFlagIcon } from "./icons/SpanishFlagIcon";
import { EnglandFlagIcon } from "./icons/EnglandFlagIcon";
import VcharIcon from "./icons/VcharIcon";
import { BrainIcon } from "./icons/BrainIcon";

import SiteTabs from "./site/pages/siteTabs";

import { useRouter } from "next/navigation";
export default function NavBar() {
    const router = useRouter()
    return (
        // Aggregate Navbar design
        // Check for viewport to change the design to a toggled menu
        // Add Dark Mode, check for default system config 


        <Navbar className="dark:bg-black">

            <NavbarContent className="justify-end">
                <NavbarBrand className="gap-x-0 select-none dark:text-white">

                    <p className="font-sans text-2xl">V KR</p>


                </NavbarBrand>
                <NavbarContent justify="start">
                    <NavbarMenuToggle className="lg:hidden md:hidden dark:text-white" />
                </NavbarContent>

            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-10" justify="start">

                <NavbarContent >

                    <SiteTabs />



                </NavbarContent>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher></ThemeSwitcher>
                </NavbarItem>
                <NavbarItem>
                    <Button isIconOnly={true} color="default" variant="light" disableRipple={true}>
                        <EnglandFlagIcon className=""></EnglandFlagIcon>

                    </Button>
                </NavbarItem>
            </NavbarContent>


            <NavbarMenu className="visible sm:flex"  >
                <NavbarMenuItem>
                    <Link href="/" color="foreground">
                        Home
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>


    );
}