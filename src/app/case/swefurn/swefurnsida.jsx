
import { MdArrowOutward } from "react-icons/md";
import Zone90Section from "../../Home/zone90secation";
import Image from "next/image";
import Des from "./des";

export default function Swefurnsida() {
  return (
    <>

      <section className="px-6 pt-20">
        <h1 >Swefurn</h1>
        <p className="pt-5 text-2xl max-w-2xl">
En inredningsbyrå för företag i Stockholm </p>
      </section>

      {/* Hero Image */}
      <div className="flex justify-center items-center pt-10 px-6">
      <Image
  src="/photos/swefurn (2).png"
  alt="swefurn website preview"
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
Swefurn är en inredningsbyrå och totalleverantör för företag.
För att stärka sin digitala närvaro valde Swefurn att förnya sin webbplats, flytta den till WordPress och sökordsoptimera innehållet för att synas bättre på Google.
Hemsidan är byggd utifrån kundens önskemål, med fokus på struktur, användarvänlighet och strategiska nyckelord som hjälper dem att ranka högre i sökresultaten.            </p>
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl ">Kundcase</h3>
              <p >Swefurn AB</p>
            </div>
            <div>
              <h3 className="text-2xl ">När</h3>
              <p >juni 2025</p>
            </div>
            <div>
              <h3 className="text-2xl">Vad</h3>
              <p >WordPress webbplats & SEO</p>
            </div>
            <div>
              <h3 className="text-2xl">Besök</h3>
              <a
                href="https://swefurn.se/"
                className="hover:underline flex items-center gap-2 "
                target="_blank"
                rel="noopener noreferrer"
              >
                Swefurn <MdArrowOutward className="text-[24px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

    <Des />
      <Zone90Section />
    </>
  );
}