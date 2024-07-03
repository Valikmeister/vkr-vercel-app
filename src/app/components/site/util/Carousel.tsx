"use client"

import { EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import { PropsWithChildren } from "react";


type Props = PropsWithChildren & EmblaOptionsType;


export const Carousel = ({ children, ...options }: Props) => {


    const [emblaRef, emblaApi] = useEmblaCarousel(options)


    return (

        <div className="overflow-hidden flex" ref={emblaRef}>
            <div className="flex gap-x-40" >{children}</div>
        </div>



    );


}