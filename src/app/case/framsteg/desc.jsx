
"use client"
import Image from "next/image";
import Script from "next/script";
export default function Desc() {
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
      <section className="bg-[#35536d]">
        {/* Hero Image */}
        <div className="flex justify-center px-6">
        <Image
    src="/photos/framstegföreningstartpage.png"
    alt="Framsteg förening start page"
    width={800}  
    height={600} 
    loading="lazy"
    className="shadow-lg rounded-[20px] w-full h-auto relative top-[-50px]"
  />
        </div>

        {/* Intro Text */}
        <div className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-3xl mx-auto">
          <h3 >Med fokus på integration</h3>
          <p className="mt-5">
           Framsteg Förenings webbplats är utformad för att smidigt informera besökare om kommande aktiviteter, ge viktig information om organisationen och skicka påminnelser i rätt tid till medlemmarna. Webbplatsen är byggd med tillgänglighet, responsivitet och optimal prestanda i fokus för att säkerställa en enkel och engagerande användarupplevelse.
          </p>
        </div>

        {/* Full-width Image with overlay and title */}
        <div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden">
        <Image
  src="/photos/integration.jpg"
  alt="Integration and connection"
  width={1920}  // Justera vid behov (passande bredd)
  height={1080} // Justera vid behov (passande höjd)
  loading="lazy"
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-black/70"></div>
          <h2 className="px-6 absolute max-w-3xl  text-center ">
            Håll kontakten, håll dig informerad
          </h2>
        </div>
      </section>

      {/* Second Section - Logo and Brand */}
      <section className="bg-[#F5F5F5] px-6 py-20">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center h-screen">
          {/* Logo description */}
          <div className="space-y-6">
            <h3 className="text-[#121212] ">Logotypens power</h3>
            <p className="text-[#121212] leading-relaxed">
            Logotypen fångar Framsteg Förenings kärna genom noggrant valda färger och former. Den böjda linjen symboliserar framsteg, samhörighet och gemensam utveckling, medan de varma och mångfaldiga färgerna speglar enhet och öppenhet. Den organiska formen förmedlar rörelse och energi, och lyfter fram föreningens uppdrag att skapa förändring och knyta människor samman över olika gemenskaper.
            </p>
          </div>

          {/* Logo image */}
          <div className="flex justify-center">
          <Image
  src="/photos/Framstegföreninglogo.png"
  alt="Framsteg Förening logo"
  width={400}  // Justera vid behov
  height={500} // Justera vid behov
  className="rounded-lg object-contain"
/>
          </div>
        </div>

        {/* Brand Guide */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10  h-screen items-center ">
          <div className="flex justify-center order-last lg:order-first">
          <Image
  src="/photos/brandframstegförening.png"
  alt="Brand visuals"
  width={600}  // Justera vid behov
  height={500} // Justera vid behov
  className="rounded-lg object-contain"
/>
          </div>
          <div className="space-y-6">
            <h3 className="text-[#121212] ">Brand guide</h3>
            <p className="text-[#121212] leading-relaxed">
       
Framsteg Förenings varumärkesidentitet bygger på enkelhet, tillgänglighet, energi och konsekvens. Vi fokuserar på ren och funktionell design för att säkerställa tydlig kommunikation på alla plattformar. Tillgänglighet är centralt, med starka färgkontraster och läsbar typografi för alla användare. Konsekvens i färger och designelement stärker ett professionellt och enhetligt intryck. Vår accentfärg tillför energi och symboliserar framsteg samt engagemang i gemenskapen.
            </p>
          </div>
        </div>

        {/* Responsive Design Section */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-screen">
          <div className="space-y-6">
            <h3 className="text-[#121212] ">Responsiv design</h3>
            <p className="text-[#121212] leading-relaxed">
             Framsteg Förenings webbplats är byggd med responsiv design som anpassar sig efter alla skärmstorlekar, vilket säkerställer tillgänglighet för alla och enkel navigering på hela sidan.
            </p>
          </div>
          <div className="flex justify-center">
          <Image
  src="/photos/mobilmockup.png"
  alt="Mobile mockup"
  width={700}  // Justera vid behov
  height={600} // Justera vid behov
  className="rounded-lg object-contain"
/>
          </div>
        </div>

        {/* Final Design */}
        <div className="pt-20">
          <h3 className="text-[#121212]  pb-5">Färdig produktdesign</h3>
          <div className="flex justify-start">
          <Image
  src="/photos/finaldesigntoframstegförening.png"
  alt="Final design of website"
  width={800}  // Justera vid behov
  height={600} // Justera vid behov
  loading="lazy"
  className="w-full h-auto shadow-md rounded-[20px]"
/>
          </div>
        </div>
      </section>
    </>
  );
}
