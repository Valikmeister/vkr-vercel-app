
'use client'


import { Tab, Tabs } from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";
import { ScrollY } from "../util/scrollTracker";
import { Key } from "react";
import Link from "next/link";

export default function SiteTabs() {


    const router = useRouter();
    const currentPath = usePathname();




    return (
        //<div className="flex w-full flex-col">
        <Tabs variant="underlined" >

            <Tab key="home" title="Home" href="#" />


            <Tab key="projects" title="Projects" href="#projects" />

            <Tab key="aboutme" title="About Me" href="#aboutme" />


            <Tab key="contact" title="Contact" href="#contact" />

            <Tab />

        </Tabs>
        //  </div>
    );
}


