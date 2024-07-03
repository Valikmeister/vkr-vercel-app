

import { Tab, Tabs } from "@nextui-org/react";
import { Link } from "react-scroll";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useRef } from "react";


export default function SiteTabs() {




    return (


        <ButtonGroup variant="ghost">
            <Button as={Link} href="#" to="home-scroll" spy={true}
                smooth={true}
                offset={-100}
                duration={500} >Home</Button>
            <Button as={Link} href="#projects" to="project-scroll" spy={true}
                smooth={true}
                offset={-200}
                duration={500} >Projects</Button>
            <Button as={Link} href="#aboutme" to="about-me-scroll" spy={true}
                smooth={true}
                offset={-125}
                duration={500} >About Me</Button>
            <Button as={Link} href="#contact" to="contact-scroll" spy={true}
                smooth={true}
                offset={-90}
                duration={500}>Contact</Button>
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


