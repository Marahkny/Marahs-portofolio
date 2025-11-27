"use client"
import Script from "next/script";
import Image from "next/image";
export default function Des() {
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
      <section className="bg-[#EF662F] ">
        {/* Hero Image */}
        <div className="flex justify-center px-6">
        <Image
  src="/photos/hyraminigravren-huvudsidan-webbdesign-för-boking.png"
  alt="Boking hemsidan med woocomers och betallningfunktion i wordpress "
  width={800}  
  height={500} 
  
  loading="lazy"
  className="shadow-lg rounded-[20px] w-full h-auto relative top-[-50px]"
/>
        </div>

       {/* 2 kolumner med totalt 4 bilder */}
<div className="px-6 pb-16 mt-[-30px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    {/* Kolumn 1 */}
    <div className="flex flex-col gap-6">
      <Image
        src="/photos/Bokning system i woocomers.png"
        alt="Bokning system i woocomers"
        width={800}
        height={600}
        className="rounded-[20px] shadow-lg w-full  object-contain"
      />
      <Image
        src="/photos/Varkorgen-i-wordpress-woocomers-system.png"
        alt="Varkorgen-i-wordpress-woocomers-system"
        width={800}
        height={600}
        className="rounded-[20px] shadow-lg w-full object-contain"
      />
          <Image
        src="/photos/Kontakta-oss-sidan-i-wordpress.png"
        alt="Kontakta-oss-sidan-i-wordpress"
        width={800}
        height={600}
        className="rounded-[20px] shadow-lg w-full object-contain"
      />
    </div>

    {/* Kolumn 2 */}
    <div className="flex flex-col gap-6">
      <Image
        src="/photos/Kassa-system-i-woocomers-wordpress.png"
        alt="Kassa-system-i-woocomers-wordpress"
        width={800}
        height={600}
        className="rounded-[20px] shadow-lg w-full object-contain"
      />
  
    </div>

  </div>
</div>



      </section>

    
    </>
  );
}