"use client"

import { EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import { PropsWithChildren } from "react";


type Props = PropsWithChildren & EmblaOptionsType;


export const Carousel = ({ children, ...options }: Props) => {


    const [emblaRef, emblaApi] = useEmblaCarousel(options)


    return (
        <div className="lg:w-[1400px] w-[320px]" >
            <div className="overflow-x-hidden " ref={emblaRef}>
                <div className="flex items-center gap-x-40 " >{children}</div>
            </div>
        </div>


    );


}