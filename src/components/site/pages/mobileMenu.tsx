import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";



export function MobileMenuToggle(props: any) {
    const t = useTranslations("Translation")

    return (
        <div className="flex  ">
            <Dropdown>
                <DropdownTrigger {...props}>
                    <Button
                        variant="bordered"
                    >
                        {t("mobile-menu")}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions" className="dark:text-white">
                    <DropdownItem key="home" as={Link} href="#" className="">{t("menu-home")}</DropdownItem>
                    <DropdownItem key="projects" as={Link} className="" href="#projects">{t("menu-projects")}</DropdownItem>
                    <DropdownItem key="aboutme" as={Link} href="#aboutme">{t("menu-about-me")}</DropdownItem>
                    <DropdownItem key="contact" as={Link} href="#contact">
                        {t("menu-contact")}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>

    );






}