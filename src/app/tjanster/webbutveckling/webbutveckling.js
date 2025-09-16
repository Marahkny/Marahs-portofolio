"use client";
import Frågor from "./frågor";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
import Steg from "./steg";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import Utvecklare from "./utvecklare";
import Script from "next/script";

export default function Webbutveckling() {
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
      fbq('init', '4047737195556914'); 
      fbq('track', 'PageView');
    `,
  }}
/>
<noscript>
  <img
    height="1"
    width="1"
    style={{ display: "none" }}
    src="https://www.facebook.com/tr?id=4047737195556914&ev=PageView&noscript=1"
  />
</noscript>

      <section className="text-[#F5F5F5] bg-[#F5F5F5] h-full py-20 px-6">
        <div className="max-w-8xl mx-auto text-left">
          <h1 className="mb-10 text-[#121212]">Hemisdor & e-handel i Kalmar för ditt förtag</h1>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="md:w-1/2 text-left">
        
              <p className="mb-10 text-[#121212] ">
Vi arbetar med UI/UX-design i Figma för att skapa användarvänliga och visuellt tilltalande upplevelser. Genom användarforskning, wireframes, prototyper och ett konsekvent designsystem säkerställer vi smidiga flöden och engagerande interaktioner som lyfter din digitala produkt. </p>
               <ul className="space-y-4 ">
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] text-[#3B429F] mr-3" /> 
                <span className="text-[#121212] ">Moderna frontend-ramverk</span>

              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] text-[#3B429F] mr-3" />
                <span className="text-[#121212] ">Optimerade Wordpress hemsida</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] text-[#3B429F] mr-3" />
                <span className="text-[#121212] ">E-handel med Shopify & WooCommerce</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] text-[#3B429F] mr-3" />
                <span className=" text-[#121212] ">Skalbarhet & säkerhet</span>
              </li>
            </ul>
             <Link
                href="/kontakt"
                className="w-full mt-10 sm:w-auto relative inline-flex items-center justify-center bg-[#3B429F] text-[#F5F5F5] py-4 px-8 rounded-full group font-[500] transition-colors duration-300 overflow-hidden"
                role="button"
                aria-label="Kontakta oss för mer information"
                title="Kontakta oss"
              >
                <span className="inline-flex text-[#F5F5F5] items-center transition-all duration-300 group-hover:-translate-x-4">
                  Kontakt Zone 90
                </span>

                <span className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <HiArrowSmallRight className="text-[#F5F5F5] text-[24px]" />
                </span>
              </Link>
            </div>

            <div className="md:w-1/2 flex justify-start md:justify-center">
              <Image
                src="/photos/hemsidor & e-hanel.png"
                alt="wordpress hemsidor i kalmar"
                width={800}
                height={500}
                className="rounded-[20px] w-full object-cover h-auto max-w-[800px]"
              />
            </div>
          </div>
        </div>
      </section>
      <Steg />
<Frågor  />
<Utvecklare />
    </>
  );
}