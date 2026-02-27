"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useRef } from "react";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);

  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Oscillation offsets för mer levande rörelse
  const col1Translate = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const col2Translate = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div className=" max-w-8xl">
      <div className=" max-w-7xl mx-auto px-6 ">
        <h2 className="text-left pb-6">Kundcase</h2>
        <p className="text-gray-300">
          Vi är stolta över att ha hjälpt företag och organisationer att växa digitalt.
        </p>
      </div>

      <div ref={ref} className="max-w-7xl px-6 mx-auto pb-40 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* 🟢 Kolumn 1 */}
          <motion.div style={{ y: col1Translate }} className="flex flex-col gap-10">
            <ProjectCard 
              imgSrc="/photos/swefurn-hemsida.png"
              title="Swefurn"
              desc="Hemsida, e-handel, SEO & marknadföring"
              link="/case/swefurn"
              height={420}
            />

            <ProjectCard 
              imgSrc="/photos/söderslätt hemsidan 1.png"
              title="Söderslätts Byggnadsplåt "
              desc="Hemsida & grund SEO"
              link="/case/soderslett"
              height={380}
            />
          </motion.div>

          {/* 🟢 Kolumn 2 */}
          <motion.div style={{ y: col2Translate }} className="flex flex-col gap-10">
            <ProjectCard 
              imgSrc="/photos/Hyra minigrävaren webbdesign.png"
              title="Hyr minigrävaren"
              desc="E-handel"
              link="/case/hyraminigravaren"
              height={350}
            />

            <ProjectCard 
              imgSrc="/photos/social hemsidan.png"
              title="Social Prevent"
              desc="Hemsidan & designsystem"
              link="/case/social-prevent"
              height={420}
            />
          </motion.div>

        </div>
      </div>

      
    </div>
  );
}

function ProjectCard({ imgSrc, title, desc, link, height = 400 }) {
  return (
    <div className="mb-6 ">
      <Link className="group" href={link}>
        
 
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-[15px]">

          <Image
            src={imgSrc}
            alt={title}
            fill
            
            className="object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex justify-between items-center w-full mt-4">
          <div>
            <h3 className="text-[24px] mb-1 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-300">{desc}</p>
          </div>

          <div className="flex items-center gap-1 group pr-2 cursor-pointer">
            <p className="text-[16px] text-gray-300">Visa</p>
            <HiArrowSmallRight
              className="text-[#F5F5F5] text-[24px] transition-transform duration-300 group-hover:translate-x-2"
              aria-hidden="true"
            />
          </div>
        </div>

      </Link>
    </div>
  );
}









  