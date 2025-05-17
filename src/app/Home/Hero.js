"use client";

import Head from "next/head";
import Link from "next/link";
import ServicesHem from "./serviceshem";
import { HiArrowSmallRight } from "react-icons/hi2";
import GradientBackground from "./GradientBackground";
import ZoneSec from "./ZoneSec";
import Projects from "./projekts";

export default function Hero() {
  return (
    <>
    
      <Head>
        <title>Zone 90 » Creative web development & design consulting</title>
        <meta
          name="description"
          content="Zone 90 is a web and design solutions consulting service, delivering innovative digital solutions both locally in Sweden and globally. We specialize in modern, high-performing web and design solutions, combining creativity and innovation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
       
        <meta property="og:title" content="Zone 90 » Creative web development & design consulting" />
        <meta
          property="og:description"
          content="We create seamless, modern digital experiences tailored for your business."
        />
      
        <meta property="og:url" content="https://zone90.se" />
    
      </Head>

      {/* Hero sektion */}
      <header className="relative w-full h-screen flex items-center justify-start overflow-hidden px-6 ">

        {/* Bakgrund */}
        <div className="absolute inset-0">
          <GradientBackground />
        </div>

        {/* Innehåll */}
        <div className="relative z-15 text-left pt-20 max-w-8xl">

          <h1 className="mb-6  text-[40px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[95px] font-[800]">
            Be in your zone.<br />
            We bring it to life
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
          Creative web & design solutions for seamless user experiences.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row items-center justify-start gap-4 sm:gap-6 mt-6 w-full">
          <Link
  href="/service"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#3B429F] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
  aria-label="Learn more about our services"
  title="Services"
  role="button"
>
  <span
    className="inline-flex items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
    Our services
  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#F5F5F5] text-[26px] items-center" />
  </span>
</Link>
  <Link
  href="/case"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#B8336A] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
 aria-label="See our case studies"
              title="Case"
              role="button"
>
  <span
    className="inline-flex items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
    Our case
  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#F5F5F5] text-[26px] items-center" />
  </span>
</Link>


         
          </div>
        </div>
      </header>

      {/* Sektioner */}
      <ZoneSec />
      <ServicesHem />
      <Projects />
    </>
  );
}























