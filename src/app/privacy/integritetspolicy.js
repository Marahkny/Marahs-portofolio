"use client";
import Script from "next/script";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";
export default function Integritetspolicy() {
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
    <main className="max-w-7xl mx-auto px-6 py-12 mt-20  ">
      {/* Header */}
      <header className="mb-12 text-left">
        <h1 className=" mb-4 ">
          Integritetspolicy
        </h1>
        <p >
          Så här hanterar <strong>Zone 90</strong> dina personuppgifter.
        </p>
      </header>

      {/* Section */}
      <section className="space-y-8 leading-relaxed">
        <div>
          <h2 className="text-[24px] mb-2">Vilka uppgifter samlar vi in?</h2>
          <p>
            När du använder vårt kontaktformulär kan vi samla in följande uppgifter:
          </p>
          <ul className="list-disc list-inside text-[#F5F5F5] mt-2 space-y-1">
            <li>Namn</li>
            <li>E-postadress</li>
            <li>Telefonnummer</li>
            <li>Meddelande eller information du själv lämnar</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[24px] mb-2">Varför samlar vi in dessa uppgifter?</h2>
          <p>Vi använder uppgifterna för att:</p>
          <ul className="list-disc list-inside mt-2 text-[#F5F5F5] space-y-1">
            <li>Svara på din förfrågan</li>
            <li>Hantera avtal eller uppdrag</li>
            <li>Följa upp kundnöjdhet och kvalitet</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[24px] mb-2">Hur länge sparas uppgifterna?</h2>
          <p>
            Vi sparar uppgifter högst 12 månader om inget annat avtalats. Du kan
            när som helst begära radering genom att kontakta oss.
          </p>
        </div>

        <div>
          <h2 className="text-[24px] mb-2">Dina rättigheter</h2>
          <p>Som registrerad har du rätt att:</p>
          <ul className="list-disc list-inside mt-2 text-[#F5F5F5] space-y-1">
            <li>Begära tillgång till dina uppgifter</li>
            <li>Få felaktiga uppgifter rättade</li>
            <li>Begära radering eller begränsning</li>
            <li>Invända mot viss behandling</li>
            <li>Återkalla ett samtycke</li>
          </ul>
          <p className="mt-2">
            Kontakta oss på <strong>contact@zone90.se</strong> om du vill utöva dina rättigheter.
          </p>
        </div>


      </section>

      {/* CTA */}
      <div className="mt-12 text-left">
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
    </main></>
  );
}

