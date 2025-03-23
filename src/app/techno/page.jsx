import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Info from "./info";
export default function Techno() {
    return (<>
     <div>
    
        <Image
        src="/photos/techno.png" 
        alt="Techno Website" 
        width={1500}
        height={800}
        objectFit="cover" />
     </div>

    <div className=" py-40 px-6 ">
      <div className="grid md:grid-cols-[60%_30%] grid-cols-1 gap-10 max-w-8xl mx-auto">
        {/* Vänster kolumn */}
        <div>
        <h1>Techno</h1>
          <p className="mt-6 w-[80%] ">
          Techno is a cutting-edge e-commerce platform specializing in tech products across Sweden. Techno goal is to provide a seamless and intuitive shopping experience, making it easier than ever for customers to browse and purchase the latest technology.

          With a strong focus on user experience (UX) and modern design, Techno ensures that every interaction—from product discovery to checkout—is smooth, fast, and hassle-free.
          </p>
        </div>
        {/* Höger kolumn */}
        <div className="space-y-6 justify-center">
          <div>
            <h3 className="text-[24px]">Client</h3>
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
    </>
    );
}

