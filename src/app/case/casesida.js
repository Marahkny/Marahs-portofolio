"use client";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";
import Zone90Section from "../Home/zone90secation";
import Script from "next/script";
export default function Casesida() {
  const cards = [
         {
      title: "Swefurn",
      category: "WordPress webbplats & SEO",
      image: "/photos/swefurn-hemsida.png",
      link: "/case/swefurn",
    },
    {
      title: "Techno",
      category: "UI/UX design & brand ",
      image: "/photos/project-2.png",
      link: "/case/techno",
    },
    {
      title: "Framsteg förening",
      category: "WordPress webbplats & brand",
      image: "/photos/framstegförening.png",
      link: "/case/framsteg",
    },

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
      {/* Noscript för Pixel */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=3256787997805806&ev=PageView&noscript=1"
        />
      </noscript>
      <section className="text-[#F5F5F5] h-full pt-20 pb-10 px-6">
        <div className="max-w-8xl mx-auto text-left">
          <h1 className="mb-6">Titta på våra tidigare projekt</h1>
          <p>
            Vi uppdaterar kontinuerligt våra case. Hör av dig för en digital fika och pitcha din idé!
          </p>
        </div>
      </section>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-[20px] overflow-hidden py-4 group cursor-pointer"
          >
            <Link href={card.link}>
              <img
                src={card.image}
                alt={`Case: ${card.title} – ${card.category}`}
                width="500"
                height="300"
                className="w-full h-auto rounded-[20px] "
                loading={index === 0 ? "eager" : "lazy"}
              />
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

      <Zone90Section />
    </>
  );
}
