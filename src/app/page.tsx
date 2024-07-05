"use client"

import Image from "next/image";
import { HomeCards } from "../components/site/home/homeCards";
import { ProjectCarousel } from "../components/site/projects/projectsCarousel";
import { AboutMeCards } from "../components/site/aboutme/aboutmeCard";
import ContactCard from "../components/site/contact/contactCards";
import { Element } from "react-scroll";


export default function MainPage() {
  return (
    <main className="flex   flex-col items-center justify-center  dark:bg-black py-20 ">



      <div>
        <Element name="home-scroll" />

        <HomeCards></HomeCards>
      </div>
      <div className="my-96 sm:my-50" >
        <Element name="project-scroll" />
        <ProjectCarousel ></ProjectCarousel>
      </div>
      <div className="mb-96 sm:mb-20">
        <Element name="about-me-scroll" />
        <AboutMeCards></AboutMeCards>
      </div>
      <div >
        <Element name="contact-scroll" />
        <ContactCard></ContactCard>
      </div>
    </main>

  );
}
