import Head from "next/head";
import { MdArrowOutward } from "react-icons/md";
import Desc from "./desc";
import Zone90Section from "../../Home/zone90secation";
import Image from "next/image";

export default function Framsteg() {
  return (
    <>
      <Head>
        <title> Zone 90 » Framsteg förening</title>
        <meta
          name="description"
          content="Framsteg Förening is a cultural association website supporting integration between newcomers and Swedish families through community and connection."
        />
         <link rel="canonical" href="https://zone90.se/case/framsteg" />
         
      </Head>

      <section className="px-6 pt-20">
        <h1 >Framsteg förening</h1>
        <p className="pt-5 text-2xl max-w-2xl">
En webbplats för kulturföreningen      </p>
      </section>

      {/* Hero Image */}
      <div className="flex justify-center items-center pt-10 px-6">
      <Image
  src="/photos/framstegförening.png"
  alt="Framsteg förening website preview"
  width={800}  
  height={500}
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
             Framsteg Förening är en kulturförening som stödjer integration mellan nyanlända och svenska familjer genom att erbjuda viktiga resurser, tjänster och möjligheter till engagemang. Målet med projektet var att designa och utveckla en webbplats som ökar tillgängligheten, stärker gemenskapen och förenklar användarens interaktion.
            </p>
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl ">Kundcase</h3>
              <p >Framsteg förening</p>
            </div>
            <div>
              <h3 className="text-2xl ">När</h3>
              <p >Jan – Feb 2024</p>
            </div>
            <div>
              <h3 className="text-2xl">Vad</h3>
              <p >Brand & WordPress webbplats</p>
            </div>
            
          </div>
        </div>
      </section>

      <Desc />
      <Zone90Section />
    </>
  );
}
