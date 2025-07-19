
"use client";

import Link from "next/link";
import ServicesHem from "./serviceshem";
import { HiArrowSmallRight } from "react-icons/hi2";
import GradientBackground from "./GradientBackground";
import ZoneSec from "./ZoneSec";
import Projects from "./projekts";

export default function Home() {
  return (
    <>
      {/* Hero sektion */}
      <header className="relative w-full h-[700px] flex items-center justify-center overflow-hidden px-6 ">

        {/* Bakgrund */}
        <div className="absolute inset-0">
          <GradientBackground />
        </div>

        {/* Innehåll */}
        <div className="relative z-15 text-center pt-20 max-w-4xl">

          <h1 className="mb-6  text-[40px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[90px] font-[800]">
          Webbdesign för företag i Stockholm </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
Vi bygger skräddarsydd hemsidor som syns på Google, konverterar och skapar affärsnytta.          </p>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 w-full">
          <Link
  href="/tjanster"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#3B429F] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
  aria-label="läs mer om våra tjänster"
  title="Våra tjänster"
  role="button"
>
  <span
    className="inline-flex text-[#F5F5F5] items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
   Våra tjänster
  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#F5F5F5] text-[24px] items-center" />
  </span>
</Link>
  <Link
  href="/case"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#B8336A] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
 aria-label="se mer om våra projekt"
              title="Kundcase"
              role="button"
>
  <span
    className="inline-flex text-[#F5F5F5] items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
     Kundcase

  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#F5F5F5] text-[24px] items-center" />
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