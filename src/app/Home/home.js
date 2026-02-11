
"use client";
import Script from "next/script";
import Link from "next/link";
import ServicesHem from "./serviceshem";
import { HiArrowSmallRight } from "react-icons/hi2";
import Projects from "./projekts";
import Steps from "./Steps"
import Section from "./Secation";

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
<header className="relative w-full min-h-screen flex  items-center justify-center overflow-hidden  mx-auto">
{/* Bakgrundsbild */}
{/* Bakgrundsbild */}
<div className="absolute inset-0 overflow-hidden">
  <img
    src="/photos/Bg till zone 90.png"
    alt="Hero background"
    className="w-full h-full object-contain lg:object-cover object-top"
  />
</div>



     

        {/* Innehåll */}
<div className="relative z-10 text-left mt-20 py-20 max-w-5xl px-6 md:max-w-7xl mx-auto">

         <h1 className="mb-4 pt-8 text-[36px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-[600]">
    Din partner för digital tillväxt 

</h1>


          <p className="text-[#F5F5F5] text-[22px] mb-4 mx-auto">
Få fler kunder, öka din försäljning och väx tryggt online med oss.      </p>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mt-3 w-full">
          <Link
  href="/tjanster"
  className=" w-full sm:w-auto relative inline-flex items-start justify-center bg-[#E95D0F] text-[#F5F5F5] py-4 px-10 rounded-full
             group  transition-colors duration-300 overflow-hidden"
  aria-label="läs mer om våra tjänster"
  title="Våra tjänster"
  role="button"
>
  <span
    className="inline-flex font-[600] text-[#F5F5F5] items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
   Våra tjänster
  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-5 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#F5F5F5] text-[24px] items-center" />
  </span>
</Link>
  <Link
  href="/kontakt"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#E95D0F] py-4 px-10 rounded-full
             group transition-colors duration-300 overflow-hidden"
 aria-label="kom i kontkakt med oss"
              title="Kontakta oss"
              role="button"
>
  <span
    className="inline-flex text-[#F5F5F5] font-[600] items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
     Kontakta oss

  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-5 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#F5F5F5] text-[24px] items-center" />
  </span>
</Link>


         
          </div>
        </div>
      </header>

      {/* Sektioner */}

      
      <ServicesHem />
     
      
      <Projects />
      <Steps />
      <Section />
    
    </>
  );
}