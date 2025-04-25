"use client";
import Services from "./services";
import { LiaArrowRightSolid } from "react-icons/lia";
import Link from "next/link";
import Zone90Section from "../Home/zone90secation";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>Zone 90 » Services</title>
        <meta
          name="description"
          content="Explore Zone 90’s digital services – UI/UX design, web development, SEO, and more. We turn ideas into impactful digital solutions."
        />
        <meta property="og:title" content="Zone 90 – Our services" />
        <meta
          property="og:description"
          content="From design to development and SEO, we deliver creative and results-driven digital services for your business growth."
        />
        <meta property="og:image" content="/photos/logo90.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photos/logo90.png" />
        <link rel="canonical" href="https://zone90.se/service" />
      </Head>

      <section className="text-[#F5F5F5] h-full py-20 px-6">
        <div className="max-w-8xl mx-auto text-left">
          <h1 className="mb-10">Our services</h1>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="md:w-1/2 text-left item-start">
              <p className="mb-10 text-gray-300">
                From intuitive UI/UX design to seamless web development,
                effective SEO, and compelling content, we ensure that every step
                of your digital journey is optimized for success. Need a digital
                service that stands out? Want to attract more customers and
                improve your online visibility? We help you turn ideas into
                impactful digital experiences that drive real results.
              </p>
              <div className="group">
                <Link
                  href="/contact"
                  role="button"
                  aria-label="Contact us for more information"
                  title="Contact us"
                  className="w-full sm:w-auto bg-[#3B429F] text-[#F5F5F5] py-3 px-6 justify-center rounded-full transition-all hover:bg-[#2A2F7D] inline-flex items-center gap-2 text-sm w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span className="text-[#F5F5F5]">Contact us</span>
                  <LiaArrowRightSolid
                    className="text-[#F5F5F5] text-[24px] transition-transform duration-300 group-hover:translate-x-2"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-start md:justify-center">
            <Image
  src="/photos/services.jpg"
  alt="Zone 90 team working"
  width={800}
  height={500}
  className="rounded-[20px] w-full object-cover h-auto max-w-[800px]"
  loading="eager"
/>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Zone90Section />
    </>
  );
}
