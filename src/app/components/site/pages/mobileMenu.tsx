import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import Link from "next/link";



export function MobileMenuToggle(props: any) {

    return (
        <div className="flex  ">
            <Dropdown backdrop="blur">
                <DropdownTrigger {...props}>
                    <Button
                        variant="bordered"
                    >
                        Open Menu
                    </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions" className="dark:text-white">
                    <DropdownItem key="home" as={Link} href="#" className="">Home</DropdownItem>
                    <DropdownItem key="projects" as={Link} className="" href="#projects">Projects</DropdownItem>
                    <DropdownItem key="aboutme" as={Link} href="#aboutme">About Me</DropdownItem>
                    <DropdownItem key="contact" as={Link} href="#contact">
                        Contact
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>

    );






}