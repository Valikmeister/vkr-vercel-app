import { Carousel } from "../util/Carousel";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import ProjectSkeletonCard from "./skeletonCard";
import { Code } from "@nextui-org/react";

export function ProjectCarousel() {


    return (

        <div id="projects" className="my-50 select-none  scroll-m-52 ">
            <div className="flex justify-center">
                <Code className="mb-10 font-mono text-2xl" size="lg">PROJECTS</Code>
            </div>
            <div className="items-center">
                <Carousel   >
                    <div>
                        <ProjectSkeletonCard></ProjectSkeletonCard>
                    </div>
                    <div>
                        <ProjectSkeletonCard></ProjectSkeletonCard>
                    </div>
                    <div className="animate-bounce">
                        <ProjectSkeletonCard></ProjectSkeletonCard>
                    </div>
                    <div>
                        <ProjectSkeletonCard></ProjectSkeletonCard>
                    </div>
                    <div>
                        <ProjectSkeletonCard></ProjectSkeletonCard>
                    </div>
                    <div>
                        <ProjectSkeletonCard></ProjectSkeletonCard>
                    </div>
                    <div>
                        <ProjectSkeletonCard></ProjectSkeletonCard>
                    </div>



                    {/* <Card className="col-span-12 sm:col-span-4 h-[200px] w-[400px] sm:h-[200px] sm:w-[300px]  my-20 bg-gradient-to-l from-amber-500  " shadow="lg">
                    <CardHeader className="flex-col ">
                        <p className="text-tiny dark:text-white/60 uppercase font-bold">What to watch</p>
                        <h4 className="dark:text-white font-medium text-large">Stream the Acme event</h4>
                    </CardHeader>

                </Card>

                <Card className="col-span-12 sm:col-span-4 h-[200px] w-[400px] sm:h-[200px] sm:w-[300px] my-20 bg-gradient-to-r from-pink-500 " shadow="lg">
                    <CardHeader className="flex-col ">
                        <p className="text-tiny dark:text-white/60 uppercase font-bold">What to watch</p>
                        <h4 className="dark:text-white font-medium text-large">Stream the Acme event</h4>
                    </CardHeader>

                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[200px] w-[400px] sm:h-[200px] sm:w-[300px] my-20 bg-gradient-to-b from-blue-500 " shadow="lg">
                    <CardHeader className="flex-col ">
                        <p className="text-tiny dark:text-white/60 uppercase font-bold">What to watch</p>
                        <h4 className="dark:text-white font-medium text-large">Stream the Acme event</h4>
                    </CardHeader>

                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[200px] w-[400px] sm:h-[200px] sm:w-[300px] my-20 bg-gradient-to-t from-green-500  " shadow="lg">
                    <CardHeader className="flex-col ">
                        <p className="text-tiny dark:text-white/60 uppercase font-bold">What to watch</p>
                        <h4 className="dark:text-white font-medium text-large">Stream the Acme event</h4>
                    </CardHeader>

                </Card> */}


                </Carousel>
            </div>
        </div>

    );


}