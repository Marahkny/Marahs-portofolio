import { FiCheckCircle } from "react-icons/fi";
import { HiArrowSmallRight } from "react-icons/hi2";
import Zone90Section from '../Home/zone90secation';
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export default function OmZone90() {
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

    <section className=" text-[#F5F5F5] h-full pt-20 px-6">
      <div className="max-w-8xl mx-auto text-left">
        <h1 className=" mb-10">Om Zone 90</h1>


        {/* Section with image and text */}
        <div className="flex flex-col md:flex-row  justify-between items-center gap-10">
        <div className="md:w-1/2 text-left item-start">
          <p className=" mb-10 text-gray-300">
Zone 90 är en digital webbyrå i Norrköping & Linköping specialiserad på webbdesign, webbutveckling och marknadsföring. Vi hjälper företag att förvandla sin vision till verklighet genom innovativa och användarcentrerade lösningar. Vårt uppdrag är att skapa sömlösa, trendiga och effektfulla digitala upplevelser som fångar och engagerar din målgrupp.        </p>
            <ul className="space-y-6 ">
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] mr-3" /> 
                <span className=" font-semibold">UI/UX design anpassad efter ditt varumärke</span>

              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] mr-3" />
                <span className=" font-semibold">Frontend-webbutveckling</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] mr-3" />
                <span className=" font-semibold">SEO-optimering och marknadsanalys </span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] mr-3" />
                <span className=" font-semibold">Copywriting</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-start md:justify-center">

          <Image
  src="/photos/progremering.png"
  alt="Zone 90 Webbyrå"
  width={800}
  height={500}
  className="rounded-[20px] w-full h-auto max-w-[800px]"
 
/>

          
        </div>
</div>


      </div>
    </section>

    <section className="  py-20 px-6">
  <div className="max-w-8xl  mx-auto  text-left">

 
    <h2 className=" mb-4 ">Hur allt började</h2>
    
    <div className="space-y-6">
      {/* How We Started */}
      <div >
      
        <p className=" text-left">
Zone 90 grundades med visionen att hjälpa företag att växa i den digitala tidsåldern. Resan började med en gemensam passion för teknik och design. År 2025 startade Marah Knefaty, utbildad webbredaktör och frilansande webbutvecklare, Zone 90 med målet att stärka företag att nå sina mål genom innovativa digitala lösningar.        </p>
      </div>

     
      <div className=" pb-5 ">
        <h3 className=" mb-4 text-[24px] text-left">En komplett webbyrå</h3>
        <p className=" text-left  pb-4 ">
Zone 90 är en fullservice webbyrå inom webb och design som levererar kompletta digitala lösningar. Från UI/UX-design och webbutveckling till SEO-optimering och innehållsstrategi – vi erbjuder allt företag behöver för att skapa en stark digital närvaro. Vårt mål är att skapa användarvänliga, högpresterande och sömlösa digitala upplevelser som driver tillväxt och engagemang.         </p>
     <p className=" text-left"> Alla betalningar hanteras säkert via Frilans Finans, vilket garanterar 100 % skatteefterlevnad och professionell fakturering.
        </p>
      </div>

   
      <div className=" pb-5 ">
        <h3 className=" mb-4 text-[24px]  text-left">En plats för din zon</h3>
        <p className=" text-left pb-4">
På Zone 90 erbjuder vi mer än digitala lösningar – vi skapar en plats där ditt varumärke kan växa. Vårt mål är att hjälpa företag att etablera en stark online-närvaro, bygga relationer med sin målgrupp och nå långsiktig framgång.        </p >
        <p className=" pb-4 ">Du är inte bara en kund – du är en del av resan. Genom nära samarbete säkerställer vi att du är med i varje steg, från idé till lansering. Med vårt användarcentrerade arbetssätt får du inte bara en webbplats – du upplever processen, ger input och ser verkliga framsteg.

        </p>
     <p className=" pb-4 ">Vi prioriterar transparens, kreativitet och smidig leverans, vilket ger dig full kontroll och resultat du kan vara stolt över.</p>

<p className=" pb-4 ">Kontakta oss idag för att börja bygga en webbplats som inte bara uppfyller dina förväntningar utan överträffar dem. Låt oss skapa något extraordinärt tillsammans!</p>

      </div>
      

    <Link
  href="/tjanster"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#3B429F] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
 role="button"
  aria-label="Läe mer om våra tjänster"
  title="Våra tjänster"
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

    </div>
  </div>
</section>
<Zone90Section />
    </>
  );
}