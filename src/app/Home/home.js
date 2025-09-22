
"use client";
import Script from "next/script";
import Link from "next/link";
import ServicesHem from "./serviceshem";
import { HiArrowSmallRight } from "react-icons/hi2";
import GradientBackground from "./GradientBackground";
import ZoneSec from "./ZoneSec";
import Projects from "./projekts";

import Section from "./Secation";
import Zone90Section from "./zone90secation";
export default function Home() {
  return (
    <>{/* Meta Pixel Script */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3256787997805806');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* Noscript för Pixel */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=3256787997805806&ev=PageView&noscript=1"
        />
      </noscript>
      {/* Hero sektion */}
      <header className="relative w-full h-[700px] flex items-center justify-center overflow-hidden px-6 ">

        {/* Bakgrund */}
        <div className="absolute inset-0">
          <GradientBackground />
        </div>

        {/* Innehåll */}
        <div className="relative z-15 text-center pt-20 max-w-5xl">

          <h1 className="mb-4 text-[36px] sm:text-[36px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-[700] ">
        Vill du synas & växa digitalt?</h1>

          <p className="text-[#F5F5F5] max-w-3xl mx-auto">
Zone 90 är din webbyrå i Norrköping & Linköping som hjälper ditt företag med  webbdesign, webbutveckling och digital marknadsföring.        </p>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 mt-6 w-full">
          <Link
  href="/tjanster"
  className=" w-full sm:w-auto relative inline-flex items-start justify-center bg-[#3B429F] text-[#F5F5F5] py-4 px-8 rounded-full
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
      <Section />
      <Zone90Section />
    </>
  );
}