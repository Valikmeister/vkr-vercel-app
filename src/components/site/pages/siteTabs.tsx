

import { Link } from "react-scroll";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useTranslations } from "next-intl";


export default function SiteTabs() {

    const t = useTranslations("Translation")


    return (


        <ButtonGroup variant="ghost">
            <Button as={Link} href="#" to="home-scroll" spy={true}
                smooth={true}
                offset={-100}
                duration={500} >{t("menu-home")}</Button>
            <Button as={Link} href="#projects" to="project-scroll" spy={true}
                smooth={true}
                offset={-200}
                duration={500} >{t("menu-projects")}</Button>
            <Button as={Link} href="#aboutme" to="about-me-scroll" spy={true}
                smooth={true}
                offset={-125}
                duration={500} >{t("menu-about-me")}</Button>
            <Button as={Link} href="#contact" to="contact-scroll" spy={true}
                smooth={true}
                offset={-90}
                duration={500}>{t("menu-contact")}</Button>
        </ButtonGroup >

        // <Tabs variant="underlined">
        //     <Tab id="/#" title="Home" ></Tab>
        //     <Tab id="/#projects" title="Projects" as={Link} href="#"></Tab>
        //     <Tab id="/#aboutme" title="About Me" href="#aboutme"></Tab>
        //     <Tab id="/#contact" title="Contact" href="#contact"></Tab>
        // </Tabs>




    );




    // <Tabs variant="bordered" selectedKey={pathname}  >

    //     <Tab key="/#" title="Home" href="/#" />


    //     <Tab key="/#projects" title="Projects" href="/#projects" />

    //     <Tab title="About Me" href="#aboutme" />


    //     <Tab title="Contact" href="#contact" />

    //     <Tab />

    // </Tabs>






}


