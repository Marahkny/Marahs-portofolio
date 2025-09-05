"use client"
import Image from "next/image";
export default function Des() {
  return (
    <>
      <section className="bg-[#50292a] ">
        {/* Hero Image */}
        <div className="flex justify-center px-6">
        <Image
  src="/photos/swefurn-startsida.png"
  alt="swfurn wordpress hemsidan "
  width={800}  
  height={500} 
  
  loading="lazy"
  className="shadow-lg rounded-[20px] w-full h-auto relative top-[-50px]"
/>
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-4xl mx-auto">
          <h3 >
           Optimerat för stil och enkelhet
          </h3>
          <p className="mt-5 text-white leading-relaxed">
Swefurns nya webbplats är designad och utvecklad i WordPress, med fokus på att kombinera stilren estetik, användarvänlighet och teknisk prestanda. Designen är enkel men genomtänkt – med tydlig struktur, luftig layout och ett visuellt uttryck som speglar företagets värderingar och professionella intryck. </p>        </div>

        {/* Full-width Hero Section */}
        <div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden">
        <Image
  src="/photos/Swefurn_Foxway-1.jpg"
  alt="swefurn huvusidan"
  width={1920}  // Justera bredd vid behov (passande storlek för bakgrund)
  height={1080} // Justera höjd vid behov (passande storlek för bakgrund)
 
  loading="lazy"
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-black/30" />
          <h2 className="absolute  px-6 text-center max-w-5xl">
   Miljövänliga kontorsmöbler för moderna arbetsplatser
          </h2>
        </div>
      </section>

      {/* White section */}
      <section className="bg-[#F5F5F5]  py-20 space-y-40">


{/* Brand Guide */}
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_40%] items-center px-4 lg:px-0 py-12 gap-5">
  {/* Vänster sektion (bilder, 55%) */}
  <div className="relative h-full flex items-center justify-center">
    <div className="w-full grid grid-cols-2 gap-4">
      {/* Bild 1 */}
            <div className="relative z-10">
        <Image
          src="/photos/swefurn.se_projekt_manpower-goteborg_.png"
          alt="Swefurn projektbild 2"
          width={600}
          height={500}
          className="rounded-[20px] shadow-xl w-full h-auto"
        />
        
      </div>
      <div className="relative z-10">
        <Image
          src="/photos/Swefurnchange.png"
          alt="Swefurn projektbild 1"
          width={600}
          height={500}
          className="rounded-[20px] shadow-xl w-full h-auto"
        />
      </div>

      {/* Bild 2 */}

    </div>
  </div>

  {/* Höger sektion (text, 40%) */}
  <div className="pl-6 space-y-6">
    <h3 className="text-[#121212]">Design och layout</h3>
    <p className="text-[#121212] leading-relaxed">
      Webbplatsens utformning är minimalistisk men funktionell – framtagen för att lyfta fram Swefurns arbete på ett tydligt och inspirerande sätt. Den visuella stilen samspelar med företagets identitet och skapar en lugn och förtroendeingivande känsla.
    </p>
    <p className="text-[#121212] leading-relaxed">
      Särskilt fokus har lagts på att presentera tidigare projekt, där högupplösta bilder, ren layout och välstrukturerat innehåll gör det enkelt för besökaren att ta del av Swefurns genomförda uppdrag.
    </p>
  </div>
</div>


{/* Icon design */}
<div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  <div className="space-y-6 px-6">
    <h3 className="text-[#121212]">Att synas i Google</h3>
    <p className="text-[#121212] leading-relaxed">
      Swefurns gamla webbplats var inte optimerad, och de hade som mål att förbättra sin synlighet i Googles sökresultat. 
      Genom att arbeta med organiska nyckelord, relevanta metabeskrivningar samt externa och interna länkar kunde de nå sina mål 
      och generera organisk webbtrafik.
    </p>
  </div>

  {/* Bilder under varandra */}
  <div className="flex flex-col justify-center gap-4">
    <Image
      src="/photos/SEO.png"
      alt="Swefurn SEO"
      width={600}
      height={500}
      className="w-auto h-auto shadow-xl rounded-l-[20px]"
    />
    <Image
      src="/photos/SEO2.png" 
      alt="Swefurn google reslutat"
      width={600}
      height={500}
      className="w-auto h-auto shadow-xl rounded-l-[20px]"
    />
  </div>
</div>


        {/* Final design */}
        <div className="max-w-8xl mx-auto space-y-6 px-6 ">
          <h3 className=" text-[#121212] ">Responsiv design </h3>
           <p className="text-[#121212] leading-relaxed">
Att vara responsiv och anpassa designen för alla skärmstorlekar var i fokus, och allt testades tillsammans med kunden.    </p>
          
<div className="flex  justify-center gap-4">
  {/* Bild 1 */}
  <div className="flex-1">
    <Image
      src="/photos/swefurn hållbarhet.png"
      alt="swefurnchange sidan"
     width={600}
      height={500}
      className="w-full h-auto  rounded-[20px] shadow-md"
    />
  </div>

  {/* Bild 2 – Längre ner */}
  <div className="flex-1 mt-20">
    <Image
      src="/photos/navigation.png"
      alt="swefurn meny "
       width={600}
      height={500}
      className="w-full h-auto rounded-[20px]  shadow-md"
    />
  </div>

  {/* Bild 3 */}
  <div className="flex-1">
    <Image
      src="/photos/swefurn-inredning.png"
      alt="swefurn jobb"
      width={600}
      height={500}
      className="w-full h-auto rounded-[20px] shadow-md"
    />
  </div>
</div>

          
        </div>
      </section>
    </>
  );
}