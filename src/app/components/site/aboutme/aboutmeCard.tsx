
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Avatar } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

export function AboutMeCards() {

    const avatar = <Avatar ImgComponent={Image} radius="lg" src="https://media.licdn.com/dms/image/D4E03AQGh3Anrlh94Wg/profile-displayphoto-shrink_400_400/0/1719922258920?e=1725494400&v=beta&t=zgQMUpTiCLGuNtv5kgiqpluUTHhZNatvZ3PtHXB9_Rw" size="lg" className="h-[120px] w-[120px] "></Avatar>


    return (


        <div id="aboutme" className="scroll-my-32">

            <Card className="lg:h-[700px]  md:h-[500px] h-[400px]   lg:w-[800px] md:w-[500px] w-[350px] bg-grey my-56 " shadow="lg" disableRipple >


                <CardHeader className="absolute z-10  flex-col bg-gradient-to-b from-gray-700 select-none ">
                    <Element name="about-me-scroll" />

                    <h4 className="text-white dark:text-white font-medium text-xl font-mono ">Valentin K.R.</h4>
                    {avatar}

                </CardHeader>

                <CardBody>

                </CardBody>


            </Card>



        </div>
    );


}