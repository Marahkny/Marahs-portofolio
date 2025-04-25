import Head from "next/head";
import { MdArrowOutward } from "react-icons/md";
import Desc from "./desc";
import Zone90Section from "../../Home/zone90secation";
import Image from "next/image";

export default function Framsteg() {
  return (
    <>
      <Head>
        <title> Zone 90 » Framsteg Förening</title>
        <meta
          name="description"
          content="Framsteg Förening is a cultural association website supporting integration between newcomers and Swedish families through community and connection."
        />
         <link rel="canonical" href="https://zone90.se/case/framsteg" />
      </Head>

      <section className="px-6 pt-20">
        <h1 >Framsteg Förening</h1>
        <p className="pt-5 text-2xl max-w-2xl">
          A website for connection and integration association
        </p>
      </section>

      {/* Hero Image */}
      <div className="flex justify-center items-center pt-10 px-6">
      <Image
  src="/photos/project-1.png"
  alt="Framsteg förening website preview"
  width={800}  // Justera vid behov
  height={500} // Justera vid behov
  loading="eager"
  className="w-full h-auto object-contain rounded-[20px] shadow-lg"
/>
      </div>

      {/* Overview & Details */}
      <section className="py-40 px-6">
        <div className="grid md:grid-cols-[60%_30%] grid-cols-1 gap-10 max-w-8xl mx-auto">
          {/* Left Column - Overview */}
          <div>
            <h2>Overview</h2>
            <p className="mt-6 text-gray-300 lg:w-[80%] md:w-full leading-relaxed">
              Framsteg Förening is a cultural association that supports integration between
              newcomers and Swedish families by providing essential resources, services, and
              opportunities for engagement. The goal of the project was to design and develop a
              website that enhances accessibility, strengthens community connections, and simplifies
              user interaction.
            </p>
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl ">Case client</h3>
              <p >Framsteg förening</p>
            </div>
            <div>
              <h3 className="text-2xl ">When</h3>
              <p >Jan - Feb 2025</p>
            </div>
            <div>
              <h3 className="text-2xl">What</h3>
              <p >Brand & WordPress website</p>
            </div>
            <div>
              <h3 className="text-2xl">Visit</h3>
              <a
                href="https://webbred2.utb.hb.se/~s2105409/wp/"
                className="hover:underline flex items-center gap-2 "
                target="_blank"
                rel="noopener noreferrer"
              >
                Framsteg förening <MdArrowOutward className="text-[24px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Desc />
      <Zone90Section />
    </>
  );
}
