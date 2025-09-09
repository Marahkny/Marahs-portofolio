"use client";

import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";
export default function Integritetspolicy() {
  return (
    <main className="max-w-8xl mx-auto px-6 py-12 ">
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
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#B8336A] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
  aria-label="Kontakt Zone 90"
  title="Kontakt Zone 90"
  role="button"
>
  <span
    className="inline-flex items-center text-[#F5F5F5] transition-all duration-300 group-hover:-translate-x-4 "
  >
     Kontakt Zone 90
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
    </main>
  );
}

