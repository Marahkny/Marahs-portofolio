
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Huvud from "./huvud";

export default function Social() {
  return (
    <>

      <section className="px-6 pt-20 mt-20">
        <h1 >Social Prevent</h1>
        <p className="pt-5 text-2xl max-w-2xl">
Utbildning inom socialt arbete för barn och unga </p>
      </section>

      {/* Hero Image */}
      <div className="flex justify-center items-center pt-10 px-6">
      <Image
  src="/photos/social hemsidan (3).png"
  alt="Söderslätts Byggnadsplåt website preview"
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
Social Prevent är en utbildningshemsida riktad till kommuner, skolor, offentlig sektor och föreningar som vill stärka samhällets arbete för barn och unga. Kunden säljer utbildningar, och syftet med hemsidan var att skapa en modern webbplats med tydliga (CTA) och en engagerande layout         </p>
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl ">Kundcase</h3>
              <p >Social Prevent</p>
            </div>
            <div>
              <h3 className="text-2xl ">När</h3>
              <p >Decmeber 2025</p>
            </div>
            <div>
              <h3 className="text-2xl">Vad</h3>
              <p >Hemsida & designsystem</p>
            </div>
            <div>
              <h3 className="text-2xl">Besök</h3>
              <a
                href="https://socialprevent.se/"
                className="hover:underline flex items-center gap-2 "
                target="_blank"
                rel="noopener noreferrer"
              >
                Social Prevent <MdArrowOutward className="text-[24px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

    <Huvud />
     
    </>
  );
}