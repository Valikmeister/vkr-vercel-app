import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { SpanishLang, SpanishLocale } from "../locale/languageTypes";
import { Element } from "react-scroll";

export function HomeCards() {


    const leftArrow = "<"
    const rightArrow = "/>"
    const spanish = SpanishLang()

    return (

        <div className="">

            <Card className="lg:h-[700px]  md:h-[500px] h-[600px]   lg:w-[1100px] md:w-[500px] w-[380px] bg-grey shadow-2xl" shadow="lg" isPressable={false} disableRipple>
                <CardHeader className="absolute z-10 top-1 flex-col">
                    <p className="text-tiny text-white/60 uppercase font-bold ">{spanish.home_title}</p>
                    <h4 className="text-white font-medium text-large ">{leftArrow}My Software Development World{rightArrow}</h4>


                    <p className="text-white mt-24">sdfsadfd</p>
                </CardHeader>
                <Image removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzNvbHIwM2c5dWJkZ3NzM21yc3NmMWh5YXZ5OGc1bjAweWQwZmt0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7b8jdNUoFBdcoILjjv/giphy.webp">

                </Image>

                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center animate-pulse">
                    <div>
                        <p className="text-white text-tiny">For a better Web3 future</p>
                        <p className="text-white text-tiny">Improving day by day</p>
                    </div>

                </CardFooter>
            </Card>



        </div>

    );


}