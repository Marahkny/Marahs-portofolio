"use client"
import Image from "next/image";
export default function Info() {
  return (
    <>
      <section className="bg-[#003B7A] ">
        {/* Hero Image */}
        <div className="flex justify-center px-6">
        <Image
  src="/photos/technostartpage.jpg"
  alt="Techno start page"
  width={800}  
  height={500} 
  
  loading="lazy"
  className="shadow-lg rounded-[20px] w-full h-auto relative top-[-50px]"
/>
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-3xl mx-auto">
          <h3 >
            Med fokus på en sömlös användarupplevelse
          </h3>
          <p className="mt-5 text-white leading-relaxed">
Techno är utvecklad med ett användarcentrerat fokus för att säkerställa en intuitiv och smidig upplevelse. Plattformen riktar sig till studenter, utvecklare samt små och medelstora företag – och erbjuder en modern, elegant och funktionell digital miljö.
Den nya webbplatsen kombinerar stilren design med en friktionsfri köpprocess där varje steg är enkelt, effektivt och engagerande.          </p>
        </div>

        {/* Full-width Hero Section */}
        <div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden">
        <Image
  src="/photos/tech.png"
  alt="Techno full background"
  width={1920}  // Justera bredd vid behov (passande storlek för bakgrund)
  height={1080} // Justera höjd vid behov (passande storlek för bakgrund)
 
  loading="lazy"
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-black/70" />
          <h2 className="absolute  px-6 text-center max-w-3xl">
            Teknik att älska
          </h2>
        </div>
      </section>

      {/* White section */}
      <section className="bg-[#F5F5F5] px-6 py-20 space-y-40">


        {/* Brand Guide */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-last lg:order-first flex justify-center">
          <Image
  src="/photos/brandtechno.png"
  alt="Techno brand mockup"
  width={600}  // Justera vid behov
  height={500} 
  className="w-auto h-auto"
/>
          </div>
          <div className="space-y-6">
            <h3 className="text-[#121212] ">Brand guide</h3>
            <p className="text-[#121212] leading-relaxed">
Technos varumärke bygger på enkelhet, tydlighet och ett användarcentrerat tänk. Den noggrant utvalda färgpaletten speglar en modern och professionell känsla, medan typografin är vald för att maximera läsbarhet och användarvänlighet på alla enheter.            </p>
          </div>
        </div>

        {/* Icon design */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className=" text-[#121212] ">Icondesign</h3>
            <p className="text-[#121212] leading-relaxed">
Technos ikoner är noggrant utformade för att spegla vår teknologiska vision. De stärker användarupplevelsen och förtydligar varumärkesidentiteten. Varje ikon är designad för att vara intuitiv, enhetlig och balansera estetik med funktionalitet.

            </p>
          </div>
          <div className="flex justify-center">
          <Image
  src="/photos/uiguide.png"
  alt="UI guide and icons"
  width={700}  // Justera vid behov
  height={500} // Justera vid behov
  className="w-auto h-auto"
/>
          </div>
        </div>

        {/* Final design */}
        <div className="max-w-8xl mx-auto space-y-6">
          <h3 className=" text-[#121212] ">Färdig produktdesign</h3>
          <div className="flex justify-start">
          <Image
  src="/photos/protoyp.png"
  alt="Techno prototype final design"
  width={800}  // Justera vid behov
  height={600} // Justera vid behov
  className="w-full h-auto shadow-md rounded-[20px]"
/>
          </div>
        </div>
      </section>
    </>
  );
}

