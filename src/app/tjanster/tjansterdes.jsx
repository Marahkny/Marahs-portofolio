"use client";

import Services from "./services";
import { HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import Zone90Section from "../Home/zone90secation";
import Image from "next/image";

export default function Tjansterdes() {
  return (
    <>
      <section className="text-[#F5F5F5] h-full py-20 px-6">
        <div className="max-w-8xl mx-auto text-left">
          <h1 className="mb-10">Våra tjänster</h1>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="md:w-1/2 text-left">
              <p className="mb-10 text-gray-300">
                Från intuitiv UI/UX-design till sömlös webbutveckling, effektiv SEO och engagerande innehåll – vi ser till att varje steg i din digitala resa är optimerat för framgång. Behöver du en digital tjänst som sticker ut? Vill du locka fler kunder och förbättra din synlighet online? Vi hjälper dig att förvandla idéer till digitala upplevelser som ger verkliga resultat.
              </p>

              <Link
                href="/kontakt"
                className="w-full sm:w-auto relative inline-flex items-center justify-center bg-[#3B429F] text-[#F5F5F5] py-4 px-8 rounded-full group font-[500] transition-colors duration-300 overflow-hidden"
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
                src="/photos/services.jpg"
                alt="Zone 90 webbdesign"
                width={800}
                height={500}
                className="rounded-[20px] w-full object-cover h-auto max-w-[800px]"
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
