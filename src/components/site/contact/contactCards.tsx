import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { ContactLinks } from "./contactlinks";
import { GithubIcon } from "../../icons/Github";
import { LinkedinIcon } from "../../icons/Linkedin";
import { MailIcon } from "../../icons/MailIcon";

export default function ContactCard() {
    return (
        <div id="contact" className="scroll-my-32">
            <div className="flex justify-center my-10 ">
                <p className="text-3xl font-mono dark:text-white drop-shadow-2xl">Contact Me!</p>
            </div>
            <div className="max-w-[900px] grid-cols-12 grid-columns-3 grid-rows-3 sm:grid-rows-3 px-8 ">

                <Card className="flex col-span-4 sm:row-span-3 lg:h-[200px]  md:h-[100px] h-[150px]  lg:w-[400px] md:w-[300px] w-[200px] mb-5" isPressable onPress={() => ContactLinks(1)}>
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny dark:text-white/60 uppercase font-bold">Look at my</p>
                        <h4 className="dark:text-white font-medium text-md">GitHub</h4>
                    </CardHeader>
                    <CardBody className=" items-center justify-center">

                        <GithubIcon></GithubIcon>

                    </CardBody>


                </Card>
                <Card className="col-span-4 sm:row-span-3 lg:h-[200px]  md:h-[100px] h-[150px]  lg:w-[400px] md:w-[300px] w-[200px]" isPressable onPress={() => ContactLinks(2)}>
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny dark:text-white/60 uppercase font-bold">Find me in</p>
                        <h4 className="dark:text-white font-medium text-md">Linkedin</h4>
                    </CardHeader>
                    <CardBody className=" items-center justify-center">
                        <LinkedinIcon></LinkedinIcon>
                    </CardBody>
                </Card>
                <Card className="col-span-4 sm:row-span-3 lg:h-[200px]  md:h-[100px] h-[150px]  lg:w-[400px] md:w-[300px] w-[200px] mt-5" isPressable onPress={() => ContactLinks(0)}>
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny dark:text-white/60 uppercase font-bold">Contact me through</p>
                        <h4 className="dark:text-white font-medium text-md">E-mail</h4>
                    </CardHeader>
                    <CardBody className=" items-center justify-center">
                        <MailIcon></MailIcon>
                    </CardBody>
                </Card>
            </div>

        </div>
    );

} 