"use client";
import { MdArrowOutward } from "react-icons/md";
import Info from "./info";
import Zone90Section from "../../Home/zone90secation";
import Head from "next/head";
import Image from "next/image";
export default function Techno() {
  return (
    <>
      <Head>
        <title>Zone 90 » Techno Case</title>
        <meta
          name="description"
          content="Techno is an e-commerce tech platform designed with a focus on UI/UX and performance. See how Zone 90 crafted the experience."
        />
        <meta property="og:title" content="Techno – Zone 90 Project" />
        <meta property="og:image" content="/photos/techno.png" />
        
  <link rel="canonical" href="https://zone90.se/case/techno" />

      </Head>

      <section className="px-6 pt-20">
        <h1 >Techno</h1>
        <p className="pt-5 text-2xl text-gray-300">
          An e-commerce tech platform
        </p>
      </section>

      <section className="flex justify-center items-center pt-10 px-6">
      <Image
  src="/photos/techno.png"
  alt="Techno Website"
  width={800}  // Anpassa vid behov
  height={500} // Anpassa vid behov
  
  loading="eager"
  className="w-full h-auto object-contain rounded-[20px] shadow-lg"
/>
      </section>

      <section className="py-40 px-6">
        <div className="grid md:grid-cols-[60%_30%] grid-cols-1 gap-10 max-w-8xl mx-auto">
          {/* Vänster kolumn */}
          <div>
            <h2 >Overview</h2>
            <p className="mt-6 text-gray-300 lg:w-[80%] md:w-full leading-relaxed">
              The Techno website is an e-commerce platform built with a strong
              focus on technology and user experience. The goal of this project
              was to design a visually appealing, modern, and efficient website
              that provides an intuitive shopping experience. The aim was to
              seamlessly integrate clean design principles with a smooth user
              journey, ensuring that customers could easily navigate through the
              platform while engaging with its content and products.
            </p>
          </div>

          {/* Höger kolumn */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl ">Case client</h3>
              <p className="text-gray-300">Techno</p>
            </div>
            <div>
              <h3 className="text-2xl">When</h3>
              <p className="text-gray-300">June – July 2024</p>
            </div>
            <div>
              <h3 className="text-2xl ">What</h3>
              <p className="text-gray-300">Brand & UI/UX design</p>
            </div>
            <div>
              <h3 className="text-2xl ">Visit</h3>
              <a
                href="https://www.figma.com/proto/pOWFMhv3VEgEDve2R6JBAN/Marah?node-id=1-3&t=7Fp10u7beXkOZA7d-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                Techno
                <MdArrowOutward className="text-[24px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Info />
      <Zone90Section />
    </>
  );
}


