"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useRef } from "react";
import Steps from "./Steps";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Gör så att kolumnerna oscillerar upp och ner vid scroll
  const col1Translate = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const col2Translate = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div>
      <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[60%] ml-0 max-w-8xl mx-auto px-6 z-10">
        <h2 className="text-left pb-6">Kundcase</h2>
        <p className="text-gray-300 max-w-8xl">
Vi är stolta över att ha hjälpt företag och organisationer i Stockholm och resten av Sverige att växa digitalt.       </p>
      </div>

      <div ref={ref} className="max-w-8xl px-6 mx-auto pb-40 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* 🟢 Första kolumnen - Oscillerar vid scroll */}
          <motion.div style={{ y: col1Translate }} className="flex flex-col gap-6">
            <ProjectCard imgSrc="/photos/swefurn.png" title="Swefurn" desc="WordPress webbplats & SEO" link="/case/swefurn"  />
          </motion.div>

          {/* 🟢 Andra kolumnen - Oscillerar vid scroll */}
          <motion.div style={{ y: col2Translate }} className="flex flex-col gap-6">
            <ProjectCard imgSrc="/photos/project-1.png" title="Framsteg förening" desc="WordPress webbplats & brand" link="/case/framsteg" />
          </motion.div>
          <motion.div style={{ y: col2Translate }} className="flex flex-col gap-6">
            <ProjectCard imgSrc="/photos/project-2.png" title="Techno" desc="UI/UX design & brand" link="/case/techno" />
          </motion.div>
        </div>
      </div>

      <Steps />
    </div>
  );
}

function ProjectCard({ imgSrc, title, desc, link }) {
  return (
    <div className="mb-6 ">
      <Link className="group" href={link}> 
      <Image
  src={imgSrc}
  alt={title}
  width={800} 
  height={500} 

  className="w-full object-contain rounded-[20px] "
/>
      
        <div className="flex justify-between items-center w-full mt-4 ">
          <div>
            <h3 className="text-[24px] mb-2 s transition-colors duration-300">{title}</h3>
            <p className="text-gray-300">{desc}</p>
          </div>
          <div className="flex items-center gap-2 group pr-2 cursor-pointer">
            <p className="text-[16px] text-gray-300">Visa</p>
            <HiArrowSmallRight className="text-[#F5F5F5] text-[24px] transition-transform duration-300  group-hover:translate-x-2" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </div>
  );
}








  