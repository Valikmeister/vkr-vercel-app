import Image from "next/image";

import { HomeScrollDivider } from "./components/site/home/sliderCardDivide";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center p-48 dark:bg-black ">


      <HomeScrollDivider className=""></HomeScrollDivider>

    </main>
  );
}
