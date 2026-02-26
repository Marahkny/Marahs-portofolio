"use client"
import Script from "next/script";
import Image from "next/image";
export default function Front() {
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
      <section className="bg-[#E95D0F] ">
        {/* Hero Image */}
        <div className="flex justify-center px-6">
        <Image
  src="/photos/soderslattsplat.se_.png"
  alt="soderslattsplat wordpress hemsidan "
  width={800}  
  height={500} 
  
  loading="lazy"
  className="shadow-lg rounded-[20px] w-full h-auto relative top-[-50px]"
/>
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-4xl mx-auto">
          <h3 >
Tillgänglig, enkel och modern
          </h3>
          <p className="mt-5 text-white leading-relaxed">
Webbplatsen för Söderslätts Byggnadsplåt är byggd i WordPress med Elementor Pro, med särskilt fokus på tillgänglighet, hög prestanda och optimerad laddningshastighet för bästa möjliga användarupplevelse. Optimeringen har även haft fokus på att lyfta fram tjänster i Vellinge, använda korrekt H-taggstruktur samt arbeta strategiskt med intern länkar.</p>        </div>
<div className="px-6 pb-16 mt-[-30px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    {/* Kolumn 1 */}
    <div className="flex flex-col gap-6">
      <Image
        src="/photos/soderslattsplat.se_tjanster_.png"
        alt="soderslattsplat tjänster"
        width={800}
        height={600}
        className="rounded-[20px] shadow-lg w-full  object-contain"
      />
      <Image
        src="/photos/soderslattsplat.se_fasadarbeten_.png"
        alt="soderslattsplat fasad"
        width={800}
        height={600}
        className="rounded-[20px] shadow-lg w-full object-contain"
      />
      
    </div>

    {/* Kolumn 2 */}
    <div className="flex flex-col gap-6">
        <Image
        src="/photos/soderslatts kontakt.png"
        alt="Kontakta-oss-sidan-i-wordpress"
        width={800}
        height={600}
        className="rounded-[20px] shadow-lg w-full object-contain"
      />
    <Image
        src="/photos/soderslatts responsvitet.png"
        alt="Söderslätt-responsvitet-i-wordpress"
        width={400}
        height={300}
        className="rounded-[20px] shadow-lg w-[250px] object-contain"
      />
    </div>

  </div>
</div>

      </section>

      
    </>
  );
}