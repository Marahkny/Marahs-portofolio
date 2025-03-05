"use client";

import Link from "next/link";
import ServicesHem from "./serviceshem";
import { LiaArrowRightSolid } from "react-icons/lia";
import GradientBackground from "./GradientBackground";
import ZoneSec from "./ZoneSec";
import Projects from "./projekts";
export default function Hero() {
  return (
    <>
      <header className="relative w-full h-screen  flex items-center justify-center overflow-hidden">
        {/* Interaktiv bakgrund */}
        <div className="absolute inset-0">
          <GradientBackground />
        </div>

       

        {/* Hero Content */}
        <div className="relative z-10 text-center pt-20 max-w-4xl mx-auto px-6">
        <h1 className="mb-4 leading-[1.5] text-[90px]">
  Be in your zone.<br />
  We bring it to life
</h1>

          <p className="text-gray-300  max-w-3xl ">
          We provide web & design digital solutions tailored to create seamless, user-centered experiences.
          </p>

          {/* Knapp-sektion */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
            
              <Link
                href="/service"
                className="bg-[#3B429F] group text-[#F5F5F5] py-3 px-6 rounded-full transition-all 
                           hover:bg-[#2A2F7D] flex items-center gap-2"
              >
                <span className="text-[#F5F5F5]">Our services</span>
                <LiaArrowRightSolid className="text-[#F5F5F5] text-[24px] transition-transform 
                                               duration-300 group-hover:translate-x-2" />
              </Link>
            

            <Link
              href="/case"
              className="bg-[#B8336A] text-[#F5F5F5] py-3 px-6 rounded-full transition-all hover:bg-[#9D2A56]"
            >
              Our case
            </Link>
          </div>

        </div>
      </header>
     <ZoneSec />

     <ServicesHem />
      <Projects />
    </>
  );
}






















