
import Donut from "./pages/donut/spinnerDonut";
import { Divider } from "@nextui-org/react";
export function Footer() {






    return (

        <div className="flex  flex-col items-center justify-center dark:bg-black h-[500px]">

            <div className="dark:text-green-400 select-none dark:bg-black  ">
                <Donut></Donut>

            </div>
            <div className="mb-20 flex gap-x-10">
                <p className="dark:text-white">©2024 by Valentin Kostuykovskiy Ramanovich</p>
                <p className="dark:text-white">Powered by NextJS</p>
            </div>
        </div>

    );


}