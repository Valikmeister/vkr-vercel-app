"use client"

import {
    Navbar, NavbarBrand,
    NavbarContent,
    NavbarItem,

    NavbarMenu,
    NavbarMenuItem,

    Button
} from "@nextui-org/react";
import { Link } from "react-scroll";
import { ThemeSwitcher } from "./util/themeswitch";
import { SpanishFlagIcon } from "../icons/SpanishFlagIcon";
import { EnglandFlagIcon } from "../icons/EnglandFlagIcon";
import SiteTabs from "./pages/siteTabs";

import { MobileMenuToggle } from "./pages/mobileMenu";

export default function NavBar() {

    return (
        // Aggregate Navbar design
        // Check for viewport to change the design to a toggled menu
        // Add Dark Mode, check for default system config 


        <Navbar className="flex dark:bg-black">

            <NavbarContent className="justify-end">
                <NavbarBrand className=" select-none ">
                    <Link to="home-scroll" className="dark:text-white text-black" spy={true}
                        smooth={true}
                        offset={-125}
                        duration={500}>
                        <p className="font-sans text-2xl ">V KR</p>
                    </Link>

                </NavbarBrand>
                <NavbarContent justify="start">
                    {/* <NavbarMenuToggle className="lg:hidden md:hidden dark:text-white" /> */}

                    <NavbarItem className="md:hidden">
                        <MobileMenuToggle className=" justify-center"></MobileMenuToggle>
                    </NavbarItem>
                </NavbarContent>

            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-10" justify="start">

                <NavbarContent >

                    <SiteTabs></SiteTabs>



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



        </Navbar>


    );
}