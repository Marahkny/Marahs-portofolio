"use client";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";

import Script from "next/script";

export default function Casesida() {
  const cards = [
     {
      title: "Söderslätts Byggnadsplåt",
      category: "Hemsida & grund SEO",
      image: "/photos/soderslett startsidan.png",
      link: "/case/soderslett",
      imgWidth: 550,
      imgHeight: 320,
    },
    {
      title: "Hyra minigrävaren",
      category: "E-handel",
      image: "/photos/Hyra minigrävaren webbdesign.png",
      link: "/case/hyraminigravaren",
      imgWidth: 550,
      imgHeight: 320,
    },
    {
      title: "Swefurn",
      category: "Hemsida, e-handel, SEO & marknadföring",
      image: "/photos/swefurn-hemsida.png",
      link: "/case/swefurn",
      imgWidth: 600,
      imgHeight: 350,
    },
    {
      title: "Techno",
      category: "UI/UX design & brand",
      image: "/photos/project-2.png",
      link: "/case/techno",
      imgWidth: 500,
      imgHeight: 300,
    },
    {
      title: "Framsteg förening",
      category: "Hemsida & brand",
      image: "/photos/framstegförening.png",
      link: "/case/framsteg",
      imgWidth: 600,
      imgHeight: 380,
    }
  ];

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
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=3256787997805806&ev=PageView&noscript=1"
        />
      </noscript>

      {/* Header Section */}
<section className="text-[#F5F5F5] pt-20 pb-10 px-6 mt-20 flex flex-col ">
  <div className="max-w-7xl mx-auto lg:mx-0 text-left pb-10 items-left">
    <h1 className="mb-6">Titta på våra tidigare projekt</h1>
    <p>
      Vi uppdaterar kontinuerligt våra case. Hör av dig för en digital fika och pitcha din idé!
    </p>
  </div>


      {/* Cards Grid */}
<div className="grid max-w-7xl mx-auto sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-[20px] overflow-hidden py-4 group cursor-pointer"
          >
            <Link href={card.link}>
              <div className="overflow-hidden rounded-[15px]">
                <img
                  src={card.image}
                  alt={`Case: ${card.title} – ${card.category}`}
                  width={card.imgWidth}
                  height={card.imgHeight}
                  className="w-full h-auto rounded-[20px] transition-transform duration-500 group-hover:scale-[1.05]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              <div className="py-6">
                <h2 className="text-2xl pb-2 font-semibold">{card.title}</h2>
                <div className="flex items-center justify-between w-full pr-2">
                  <p className="text-[16px] text-gray-300">{card.category}</p>
                  <HiArrowSmallRight className="text-[#F5F5F5] text-[24px] transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

        </section>
    </>
  );
}

