"use client";
import Link from "next/link";
import Head from "next/head";
import { HiArrowSmallRight } from "react-icons/hi2";
import Zone90Section from "../Home/zone90secation";

export default function About() {
  const cards = [
    {
      title: "Techno",
      category: "UI/UX design & brand ",
      image: "/photos/project-2.png",
      link: "/case/techno",
    },
    {
      title: "Framsteg förening",
      category: "WordPress website & brand",
      image: "/photos/project-1.png",
      link: "/case/framsteg",
    },
  ];

  return (
    <>
      <Head>
        <title>Zone 90 » Case</title>
        <meta
          name="description"
          content="Learn more about Zone 90 – a digital consulting service helping businesses grow through web design, development, and SEO."
        />
        <meta property="og:title" content="Zone 90 – Case" />
        <meta
          property="og:description"
          content="Explore our journey and services. Zone 90 provides creative web development, UI/UX design, SEO and more."
        />
        <meta property="og:image" content="https://zone90.se/photos/logo90.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photos/logo90.png" />
        <link rel="canonical" href="https://zone90.se/case" />
      </Head>

      <section className="text-[#F5F5F5] h-full pt-20 pb-10 px-6">
        <div className="max-w-8xl mx-auto text-left">
          <h1 className="mb-6">Some of our cases</h1>
          <p>
            We continuously update our cases. Reach out for a digital fika to
            pitch your idea!
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






