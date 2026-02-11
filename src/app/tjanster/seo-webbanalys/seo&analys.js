"use client";
import Frågor from "./frågor";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
import Steg from "./steg";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import Script from "next/script";
export default function SeoAnalys() {
  return (
    <>
    {/* Meta Pixel Script */}
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
      <section className=" h-full py-20 px-6">
        <div className="max-w-7xl mx-auto mt-20 text-left">
          <h1 className="mb-10 ">Ranka högt på Google med SEO och webbanalys </h1>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="md:w-1/2 text-left">
        
              <p className="mb-10  ">
SEO är en avgörande del av en hemsida eftersom det hjälper dina kunder att hitta dig på Google. Genom analys och en genomtänkt SEO-strategi bygger vi långsiktigt förtroende för din webbplats. SEO tar tid, men ger hållbara resultat som stärker din synlighet online. </p>
               <ul className="space-y-4 ">
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] text-[#E95D0F] mr-3" /> 
                <span >Sökordsanalys med Semrush</span>

              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] text-[#E95D0F] mr-3" />
                <span >On-page & off-page SEO</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] text-[#E95D0F] mr-3" />
                <span >Teknisk SEO</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] text-[#E95D0F] mr-3" />
                <span>Analys; Google Analytics</span>
              </li>
            </ul>
               <Link
  href="/kontakt"
  className=" w-full mt-8 sm:w-auto relative inline-flex items-center justify-center bg-[#E95D0F] py-4 px-10 rounded-full
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

            <div className="md:w-1/2 flex justify-start md:justify-center">
              <Image
                src="/photos/SEO&analys.png"
                alt="SEO byrå i Norrköping & Linköping "
                width={800}
                height={500}
                className="rounded-[15px] w-full object-cover h-auto max-w-[800px]"
              />
            </div>
          </div>
        </div>
      </section>
      <Steg />
<Frågor  />

    </>
  );
}