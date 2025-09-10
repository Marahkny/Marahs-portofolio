"use client";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";
import Zone90Section from "../Home/zone90secation";

export default function Casesida() {
  const cards = [
         {
      title: "Swefurn",
      category: "WordPress webbplats & SEO",
      image: "/photos/swefurn.png",
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
      image: "/photos/project-1.png",
      link: "/case/framsteg",
    },

  ];

  return (
    <>

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
