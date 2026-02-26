
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Des from "./des";

export default function Hyraminigrävarensidan() {
  return (
    <>

      <section className="px-6 pt-20 mt-20">
        <h1 >Hyra minigrävaren</h1>
        <p className="pt-5 text-2xl max-w-2xl">
Bokningssida för uthyrning av grävmaskiner i Stockholm </p>
      </section>

      {/* Hero Image */}
      <div className="flex justify-center items-center pt-10 px-6">
      <Image
  src="/photos/Hyra minigrävaren webbdesign.png"
  alt="hyraminigrävare hemsidan"
  width={800}  
  height={500}
  loading="eager"
  className="w-full h-auto object-contain rounded-[20px] shadow-lg"
/>
      </div>

      {/* Overview & Details */}
      <section className="py-40 px-6">
        <div className="grid md:grid-cols-[60%_30%] grid-cols-1 gap-10 max-w-8xl mx-auto">
          {/* Left Column - Overview */}
          <div>
            <h2>Overview</h2>
            <p className="mt-6 text-gray-300 lg:w-[80%] md:w-full leading-relaxed">
En bokningshemsida byggd med WooCommerce och ett bokningssystem som gör det möjligt att boka och betala både på plats och online genom flera betalningsalternativ. Kunden har flera grävmaskiner som tidigare hyrdes ut via andra betalda plattformar, men nu vill han ha en egen hemsida med boknings- och betalningssystem.            </p>
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl ">Kundcase</h3>
              <p >Hyra minigrävaren</p>
            </div>
            <div>
              <h3 className="text-2xl ">När</h3>
              <p >Oktober 2025</p>
            </div>
            <div>
              <h3 className="text-2xl">Vad</h3>
              <p >E-handel</p>
            </div>
            <div>
              <h3 className="text-2xl">Besök</h3>
              <a
                href="https://xn--hyraminigrvaren-9kb.se/"
                className="hover:underline flex items-center gap-2 "
                target="_blank"
                rel="noopener noreferrer"
              >
                Hyra minigrävaren <MdArrowOutward className="text-[24px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

    <Des />
     
    </>
  );
}