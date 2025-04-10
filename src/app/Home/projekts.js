"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiaArrowRightSolid } from "react-icons/lia";
import { useRef } from "react";
import Steps from "./Steps";

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Gör så att kolumnerna oscillerar upp och ner vid scroll
  const col1Translate = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const col2Translate = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div>
      <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[50%] ml-0 max-w-8xl mx-auto px-6 z-10">
        <h2 className="text-left pb-6">Some av our case</h2>
        <p className="text-gray-300 max-w-2xl">
          Explore a selection of our standout projects that highlight our expertise in web development, design, and digital innovation.
        </p>
      </div>

      <div ref={ref} className="max-w-8xl px-6 mx-auto pb-40 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* 🟢 Första kolumnen - Oscillerar vid scroll */}
          <motion.div style={{ y: col1Translate }} className="flex flex-col gap-6">
            <ProjectCard imgSrc="/photos/project 2.png" title="Techno" desc="UI/UX design & brand" link="/techno" />
          </motion.div>

          {/* 🟢 Andra kolumnen - Oscillerar vid scroll */}
          <motion.div style={{ y: col2Translate }} className="flex flex-col gap-6">
            <ProjectCard imgSrc="/photos/project 1.png" title="Framsteg förening" desc="Brand & website" link="/framsteg" />
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
      <img 
  src={imgSrc} 
  alt={title} 
  className="w-full object-contain rounded-[20px] group-hover:border group-hover:border-[#3B429F]" 
/>
      
        <div className="flex justify-between items-center w-full mt-4 ">
          <div>
            <h3 className="text-[24px] mb-2 s transition-colors duration-300">{title}</h3>
            <p className="text-gray-300">{desc}</p>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <p className="text-[16px] text-gray-300">View</p>
            <LiaArrowRightSolid className="text-[#F5F5F5] text-[24px] transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </div>
  );
}








  