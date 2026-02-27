"use client"
import Script from "next/script";
import Image from "next/image";
export default function Huvud() {
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
      <section className="bg-[#11698E] ">
        {/* Hero Image */}
        <div className="flex justify-center px-6">
        <Image
  src="/photos/socialprevent.se_.png"
  alt="social prevent wordpress hemsidan "
  width={800}  
  height={500} 
  
  loading="lazy"
  className="shadow-lg rounded-[20px] w-full h-auto relative top-[-50px]"
/>
        </div>

 <section className="bg-[#F5F5F5] px-6 py-20">
 

        {/* Brand Guide */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10  h-screen items-center ">
          <div className="flex justify-center order-last lg:order-first">
          <Image
  src="/photos/Design system.png"
  alt="Brand visuals"
  width={600}  
  height={500} 
  className="rounded-lg object-contain"
/>
          </div>
          <div className="space-y-6">
            <h3 className="text-[#121212] ">Designsystem</h3>
            <p className="text-[#121212] leading-relaxed">
       
Social Prevent har utvecklats med ett unikt designsystem som är anpassat för barn och unga som ska ta del av utbildningen. Den grafiska kurvformen och våg-idén kommer från logotypen, där bokstaven S innehåller en mjuk kurva. Vi utgick från kundens logotyp och använde våg- och kurvformer som ett genomgående layoutgrepp på hela hemsidan. Färger och typografi valdes för att ligga nära Generation Z – med ett lekfullt och modernt uttryck som fångar deras uppmärksamhet.
            </p>
          </div>
        </div>

        {/* Responsive Design Section */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-screen">
          <div className="space-y-6">
            <h3 className="text-[#121212] ">Responsiv design</h3>
            <p className="text-[#121212] leading-relaxed">
         Social Prevents hemsida är responsiv och anpassad för olika skärmstorlekar. Med hjälp av Elementor Pro kunde vi skapa en flexibel header med off-canvas-meny och justera layouten med rätt padding för optimal användarupplevelse på alla enheter.
            </p>
          </div>
          <div className="flex justify-center">
          <Image
  src="/photos/social meny.png"
  alt="Mobile mockup"
  width={300}  
  height={300} 
  className="rounded-lg object-contain"
/>
          </div>
        </div>

        {/* Final Design */}
        <div className="pt-20">
          <h3 className="text-[#121212]  pb-5">Färdig produktdesign</h3>
          <div className="flex justify-start">
          <Image
  src="/photos/socialprevent-helahemsidan.png"
  alt="Final design of website"
  width={800}  // Justera vid behov
  height={600} // Justera vid behov
  loading="lazy"
  className="w-full h-auto shadow-md rounded-[20px]"
/>
          </div>
        </div>
      </section>


      </section>

      
    </>
  );
}