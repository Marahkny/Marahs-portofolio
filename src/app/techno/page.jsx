
import { MdArrowOutward } from "react-icons/md";
import Info from "./info";
import Zone90Section from "../Home/zone90secation";

export default function Techno() {
    return (<>
     <div className=" px-6 pt-20">
     <h1>Techno</h1>
     <p className=" pt-5 text-[24px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
    An e-commerce tech platform
</p>
     </div>
   <div className="flex justify-center items-center pt-10 px-6 ">
    <img
        src="/photos/techno.png" 
        alt="Techno Website" 
       
        className="w-full h-auto object-contain rounded-[20px]"
    />
</div>


    <div className=" py-40 px-6 ">
      <div className="grid md:grid-cols-[60%_30%] grid-cols-1 gap-10 max-w-8xl mx-auto">
        {/* Vänster kolumn */}
        <div>
        <h2>Overview</h2>
          <p className="mt-6 lg:w-[80%] md:w-[100%]">
          The Techno website is an e-commerce platform built with a strong focus on technology and user experience. The goal of this project was to design a visually appealing, modern, and efficient website that provides an intuitive shopping experience. The aim was to seamlessly integrate clean design principles with a smooth user journey, ensuring that customers could easily navigate through the platform while engaging with its content and products.
          </p>
        </div>
        {/* Höger kolumn */}
        <div className="space-y-6 justify-center">
          <div>
            <h3 className="text-[24px]">Case client</h3>
            <p>Techno</p>
          </div>
          <div>
            <h3 className="text-[24px]">When</h3>
            <p>June - July 2024</p>
          </div>
          <div>
            <h3 className="text-[24px]">What</h3>
            <p>Brand & UI/UX design</p>
          </div>
          <div>
            <h3 className="text-[24px]">Visit</h3>
            <a 
  href="https://www.figma.com/proto/pOWFMhv3VEgEDve2R6JBAN/Marah?node-id=1-3&t=7Fp10u7beXkOZA7d-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3" 
  className=" hover:underline flex items-center gap-2"
  target="_blank" 
  rel="noopener noreferrer"
>
  Techno
  <MdArrowOutward className="text-[24px]" />
</a>          </div>
        </div>
      </div>
    </div>
    <Info />
    <Zone90Section />
    </>
    );
}

